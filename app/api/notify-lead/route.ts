import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER || 'hassan@ironlooplabs.com';
    const smtpPass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS || 'macbookPro@2030';
    const notifyEmail = process.env.NOTIFY_EMAIL || smtpUser;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for port 465, false for port 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    let subject: string;
    let text: string;

    if (body.type === 'contact-captured') {
      subject = '🟢 New lead from the website widget';
      text = `Name: ${body.name}\nEmail: ${body.email}`;
    } else {
      subject = '📞 Call ended without confirmed contact info';
      text = Array.isArray(body.transcript) ? body.transcript.join('\n') : (body.transcript || '(no transcript captured)');
    }

    await transporter.sendMail({
      from: smtpUser,
      to: notifyEmail,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('[notify-lead] email failed:', err?.message || err);
    return NextResponse.json({ ok: false, error: err?.message || 'Failed' }, { status: 500 });
  }
}
