// app/api/contact/route.ts
export const runtime = "nodejs"; // explícito: función serverless Node

import { NextResponse } from "next/server";
import { createTransporter } from "@/lib/mail";
import nodemailer from "nodemailer";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 6;
const ipMap: Map<string, { count: number; firstTs: number }> = new Map();

function getClientIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  const realIp = req.headers.get("x-real-ip");
  return realIp ?? "unknown";
}

function buildHtml({ name, email, phone, subject, message }: Body) {
  return `
    <html>
      <body style="font-family: system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif; color: #111;">
        <h2>Nuevo mensaje desde el formulario</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
          <tr><td><strong>Nombre:</strong></td><td>${name ?? ""}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email ?? ""}</td></tr>
          <tr><td><strong>Teléfono:</strong></td><td>${phone ?? ""}</td></tr>
          <tr><td><strong>Asunto:</strong></td><td>${subject ?? ""}</td></tr>
          <tr><td valign="top"><strong>Mensaje:</strong></td><td>${(message ?? "").replace(/\n/g, "<br/>")}</td></tr>
        </table>
        <hr/>
        <small>Enviado desde tu sitio web</small>
      </body>
    </html>
  `;
}

let transporterVerified = false;

export async function POST(req: Request) {
  try {
    const watched = ["CONTACT_DESTINATION_EMAIL", "SMTP_HOST", "SMTP_USER", "SMTP_PASS", "SMTP_PORT", "SMTP_SECURE"];
    const varsStatus = watched.reduce<Record<string, boolean>>((acc, k) => {
      acc[k] = Boolean(process.env[k]);
      return acc;
    }, {});
    console.log("[contact] env status:", varsStatus);

    const missing = Object.entries(varsStatus)
      .filter(([k, v]) => (k === "CONTACT_DESTINATION_EMAIL" ? !v : false))
      .map(([k]) => k);
    if (missing.length > 0) {
      console.error("[contact] Missing required env var(s):", missing);
      return NextResponse.json({ error: "CONTACT_DESTINATION_EMAIL not configured on server.", missing }, { status: 500 });
    }

    // Rate limit en memoria (nota: no persistente entre instancias)
    const ip = getClientIp(req);
    const now = Date.now();
    const entry = ipMap.get(ip);
    if (!entry) {
      ipMap.set(ip, { count: 1, firstTs: now });
    } else {
      if (now - entry.firstTs > RATE_LIMIT_WINDOW_MS) {
        ipMap.set(ip, { count: 1, firstTs: now });
      } else {
        entry.count += 1;
        if (entry.count > MAX_PER_WINDOW) {
          return NextResponse.json({ error: "Too many requests, try again later." }, { status: 429 });
        }
      }
    }

    const body: Body = await req.json();

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (typeof body.email !== "string" || !/^\S+@\S+\.\S+$/.test(body.email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    const transporter = await createTransporter();

    if (!transporterVerified) {
      try {
        await transporter.verify();
        transporterVerified = true;
        console.log("[contact] transporter verified OK");
      } catch (err) {
        console.warn("[contact] transporter verify warning:", err);
      }
    }

    const destination = process.env.CONTACT_DESTINATION_EMAIL!;
    const mailOptions = {
      from: `"Website Contact" <${process.env.SMTP_USER ?? "no-reply@example.com"}>`,
      to: destination,
      subject: `[Contact] ${body.subject}`,
      text: `
Nombre: ${body.name}
Email: ${body.email}
Teléfono: ${body.phone ?? ""}
Asunto: ${body.subject}
Mensaje:
${body.message}
      `,
      html: buildHtml(body),
      replyTo: body.email,
    };

    const info = await transporter.sendMail(mailOptions);

    const preview = nodemailer.getTestMessageUrl ? nodemailer.getTestMessageUrl(info) : undefined;

    console.log("[contact] mail sent info", { messageId: info?.messageId, preview });

    return NextResponse.json({ ok: true, previewUrl: preview });
  } catch (err: any) {
    console.error("[contact] Server error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
