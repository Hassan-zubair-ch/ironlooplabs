import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { firstName, lastName, businessName, email, phone, industry, scope } = data;

    // We assume the user's email hosting uses standard ports (465 for SSL)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.ironlooplabs.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for port 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // The inbox where leads should arrive
      subject: `New Lead: ${firstName} ${lastName} - ${businessName}`,
      html: `
        <h2>New Architectural Review Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Business:</strong> ${businessName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <br/>
        <p><strong>Scope/Workflow:</strong></p>
        <p>${scope}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
