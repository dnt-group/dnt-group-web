import { NextResponse } from "next/server";
import { resend, isResendConfigured } from "@/lib/resend/client";
import { ContactEmail } from "@/lib/resend/templates/ContactEmail";
import {
  isRateLimited,
  isValidEmail,
  isValidPhone,
  sanitize,
  getClientIp,
  isValidOrigin,
} from "@/lib/api/validation";

type ContactPayload = {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
  locale?: string;
  pageUrl?: string;
  honeypot?: string;
};

const MAX_REQUESTS_PER_WINDOW = 5;

export async function POST(request: Request) {
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!isResendConfigured || !resend || !toEmail || !fromEmail) {
    console.error("Email configuration missing:", {
      resendConfigured: isResendConfigured,
      toEmail: Boolean(toEmail),
      fromEmail: Boolean(fromEmail),
    });
    return NextResponse.json(
      { error: "Email configuration is missing." },
      { status: 500 }
    );
  }

  if (!isValidOrigin(request)) {
    return NextResponse.json(
      { error: "Invalid request origin." },
      { status: 403 }
    );
  }

  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp, MAX_REQUESTS_PER_WINDOW)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (payload.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const fullName = sanitize(payload.fullName ?? "");
  const email = sanitize(payload.email ?? "");
  const phone = sanitize(payload.phone ?? "");
  const message = sanitize(payload.message ?? "");
  const locale = sanitize(payload.locale ?? "");
  const pageUrl = sanitize(payload.pageUrl ?? "");

  if (!fullName || fullName.length < 2 || fullName.length > 120) {
    return NextResponse.json(
      { error: "Full name must be between 2 and 120 characters." },
      { status: 400 }
    );
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 }
    );
  }

  if (!message || message.length < 10 || message.length > 3000) {
    return NextResponse.json(
      { error: "Message must be between 10 and 3000 characters." },
      { status: 400 }
    );
  }

  if (phone.length > 50) {
    return NextResponse.json(
      { error: "Phone must be 50 characters or less." },
      { status: 400 }
    );
  }

  if (!isValidPhone(phone)) {
    return NextResponse.json(
      { error: "Please enter a valid phone number." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Contact Form Message from ${fullName}`,
      react: ContactEmail({
        fullName,
        email,
        phone,
        message,
        locale,
        pageUrl,
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend email error:", err);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
