// src/app/api/contact/route.js
export const runtime = 'nodejs' // <- obligatorio para que nodemailer funcione en Vercel

import nodemailer from 'nodemailer'

const escapeHtml = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')

const REQUIRED_ENVS = ['SMTP_HOST','SMTP_PORT','SMTP_USER','SMTP_PASS','TO_EMAIL']

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*', // restringe en prod si quieres
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() })
}

export async function POST(req) {
  try {
    const missing = REQUIRED_ENVS.filter(k => !process.env[k] || process.env[k].trim() === '')
    if (missing.length > 0) {
      console.error('Faltan variables de entorno:', missing)
      return new Response(JSON.stringify({ error: `Faltan variables de entorno: ${missing.join(', ')}` }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      })
    }

    const body = await req.json()
    const { name, email, subject, message, honeypot } = body || {}

    if (honeypot) return new Response(JSON.stringify({ error: 'Bot detected' }), { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders() } })
    if (!name || !email || !subject || !message) return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders() } })
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return new Response(JSON.stringify({ error: 'Invalid email address' }), { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders() } })

    const port = Number(process.env.SMTP_PORT || 465)
    const secure = (process.env.SMTP_SECURE === 'true') || port === 465

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })

    try {
      await transporter.verify()
      console.log('SMTP verification successful')
    } catch (verifyErr) {
      console.error('SMTP verify error:', verifyErr)
      return new Response(JSON.stringify({ error: 'No se pudo verificar conexión SMTP. Revisa host/puerto/credenciales.' }), { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders() } })
    }

    const mailOptions = {
      from: `"Contacto web" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `[Contacto] ${subject}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
             <p><strong>Email:</strong> ${escapeHtml(email)}</p>
             <p><strong>Asunto:</strong> ${escapeHtml(subject)}</p>
             <hr/>
             <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>`,
    }

    await transporter.sendMail(mailOptions)
    return new Response(JSON.stringify({ message: 'Message sent successfully' }), { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders() } })
  } catch (err) {
    console.error('Error sending email:', err)
    return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders() } })
  }
}
