import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

const app = express();
const port = Number(process.env.CONTACT_API_PORT || 8787);
const rateLimitWindowMs = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000);
const rateLimitMaxRequests = Number(process.env.CONTACT_RATE_LIMIT_MAX_REQUESTS || 5);
const isDevFallbackEnabled = process.env.CONTACT_DEV_FALLBACK === 'true';
const requestLog = new Map();

app.use(express.json());

const getClientIp = (req) => {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket?.remoteAddress || 'unknown';
};

const isRateLimited = (ip) => {
  const now = Date.now();
  const entries = requestLog.get(ip) || [];
  const recent = entries.filter((timestamp) => now - timestamp < rateLimitWindowMs);

  if (recent.length >= rateLimitMaxRequests) {
    requestLog.set(ip, recent);
    return true;
  }

  recent.push(now);
  requestLog.set(ip, recent);
  return false;
};

const requiredKeys = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_TO'];

const hasMailConfig = () => requiredKeys.every((key) => Boolean(process.env[key]));

const createTransporter = () => {
  if (!hasMailConfig()) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', mailConfigured: hasMailConfig(), devFallbackEnabled: isDevFallbackEnabled });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message, website } = req.body || {};
  const clientIp = getClientIp(req);

  if (website) {
    return res.status(200).json({ ok: true });
  }

  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      error: 'Zu viele Anfragen in kurzer Zeit. Bitte versuchen Sie es in einigen Minuten erneut.',
    });
  }

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Bitte alle Pflichtfelder ausfüllen.' });
  }

  if (!hasMailConfig()) {
    if (isDevFallbackEnabled) {
      console.log('[CONTACT_DEV_FALLBACK] Anfrage ohne SMTP gespeichert (nur Konsole):', {
        name,
        email,
        subject,
        message,
      });
      return res.status(200).json({ ok: true, delivery: 'dev-fallback' });
    }

    return res.status(500).json({
      error: 'Mail-Server ist nicht konfiguriert. Bitte SMTP-Umgebungsvariablen setzen.',
    });
  }

  const transporter = createTransporter();

  try {
    await transporter.sendMail({
      from: `BauOne Webseite <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `[Webseite] ${subject} - ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\nBetreff: ${subject}\n\nNachricht:\n${message}`,
      html: `
        <h3>Neue Kontaktanfrage über die Webseite</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Betreff:</strong> ${subject}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${String(message).replace(/\n/g, '<br/>')}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: 'Versand fehlgeschlagen. Bitte später erneut versuchen.' });
  }
});

app.listen(port, () => {
  console.log(`Contact API läuft auf http://localhost:${port}`);
});
