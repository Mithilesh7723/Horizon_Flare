import React from 'react';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactFormEmail from '@/emails/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Horizon Flare Contact Form <onboarding@resend.dev>',
      to: ['info@horizonflare.in', 'support@horizonflare.in'],
      subject: `New Inquiry from ${name} - ${service}`,
      replyTo: email,
      react: React.createElement(ContactFormEmail, {
        name,
        email,
        company,
        phone,
        service,
        message,
      }),
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!', data });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
