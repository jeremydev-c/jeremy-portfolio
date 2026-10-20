import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend lazily to avoid build-time errors
function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }
  return new Resend(apiKey);
}

// Visitors' text goes into an HTML email, so it must never be able to inject markup.
function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const LIMITS = { name: 100, email: 200, subject: 150, message: 5000 };

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body?.name ?? '').trim();
    const email = String(body?.email ?? '').trim();
    const subject = String(body?.subject ?? '').trim();
    const message = String(body?.message ?? '').trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    if (
      name.length > LIMITS.name ||
      email.length > LIMITS.email ||
      subject.length > LIMITS.subject ||
      message.length > LIMITS.message
    ) {
      return NextResponse.json({ error: 'That message is too long.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      subject: escapeHtml(subject),
      message: escapeHtml(message),
    };

    const resend = getResend();
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';
    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: ['nduatijeremy7@gmail.com'],
      replyTo: email,
      subject: `Portfolio: ${subject.replace(/[\r\n]+/g, ' ')}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #f3efe6; color: #1a1813;">
          <div style="background-color: #ffffff; border: 1px solid #d5ccb9; border-radius: 8px; padding: 28px;">
            <p style="font-family: monospace; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #6f6959; margin: 0 0 12px;">New project enquiry</p>
            <h2 style="font-weight: normal; font-size: 26px; margin: 0 0 20px;">${safe.subject}</h2>
            <p style="margin: 4px 0;"><strong>Name:</strong> ${safe.name}</p>
            <p style="margin: 4px 0;"><strong>Email:</strong> <a href="mailto:${safe.email}" style="color: #b0431c;">${safe.email}</a></p>
            <div style="border-top: 1px solid #d5ccb9; margin-top: 20px; padding-top: 16px; white-space: pre-wrap; font-family: Arial, sans-serif; line-height: 1.6;">${safe.message}</div>
          </div>
          <p style="color: #6f6959; font-size: 12px; margin: 16px 0 0;">Sent from the contact form at modenova.co.ke</p>
        </div>
      `,
      text: `New project enquiry\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}\n\n---\nSent from the contact form at modenova.co.ke`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'The message could not be sent.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'The message could not be sent.' }, { status: 500 });
  }
}
