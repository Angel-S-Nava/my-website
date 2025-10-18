import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, '..', '.env.local');

const result = dotenv.config({ path: envPath });
if (result.error) {
  console.warn('No se pudo cargar .env.local desde:', envPath, '\nError:', result.error);
} else {
  console.log('dotenv cargado desde:', envPath);
}

const escapeHtml = (s = '') =>
    String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

const REQUIRED_ENVS = ['SMTP_HOST','SMTP_PORT','SMTP_USER','SMTP_PASS','TO_EMAIL'];

export default async function handler(req, res) {
    const missing = REQUIRED_ENVS.filter(k => !process.env[k] || process.env[k].trim() === '');
    if (missing.length > 0) {
        console.error('Faltan variables de entorno:', missing);
        return res.status(500).json({ error: `Faltan variables de entorno: ${missing.join(', ')}` });
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        //eslint-disable-next-line
        const { name, email, subject, message, honeypot } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    const port = Number(process.env.SMTP_PORT || 465);
    const secure = (process.env.SMTP_SECURE === 'true') || port === 465;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port,
        secure,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.verify();
        console.log('SMTP verification successful');
    } catch (verifyErr) {
        console.error('SMTP verify error:', verifyErr);
        return res.status(500).json({ error: 'No se pudo verificar conexión SMTP. Revisa host/puerto/credenciales.' });
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
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Message sent successfully' });
    } catch (err) {
        console.error('Error sending email:', err);
        return res.status(500).json({ error: 'Error sending email' });
    }
}
