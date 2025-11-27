// lib/mail.ts
import nodemailer from "nodemailer";

export async function createTransporter() {
  const host = process.env.SMTP_HOST;
  if (!host) {
    // Dev: Ethereal test account (no credenciales reales)
    const testAccount = await nodemailer.createTestAccount();
    return nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }

  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const secure = (process.env.SMTP_SECURE ?? "false").toLowerCase() === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) throw new Error("SMTP_USER and SMTP_PASS must be set when SMTP_HOST is configured.");

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}
