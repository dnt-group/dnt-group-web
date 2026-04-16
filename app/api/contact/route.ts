import { NextResponse } from "next/server";
import { resend, isResendConfigured } from "@/lib/resend/client";
import { ContactEmail } from "@/lib/resend/templates/ContactEmail";

type ContactPayload = {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
  locale?: string;
  pageUrl?: string;
  website?: string;
};

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count++;
  return false;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  if (!phone) return true;
  return /^[+]?[\d\s\-().]{7,20}$/.test(phone);
}

function sanitize(value: string): string {
  return value.replace(/[<>]/g, "").trim();
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function isValidOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const host = request.headers.get("host");

  if (!origin && !referer) {
    return false;
  }

  const allowedHost = host || process.env.NEXT_PUBLIC_SITE_URL;
  if (!allowedHost) {
    return true;
  }

  if (origin) {
    try {
      const originUrl = new URL(origin);
      if (originUrl.host === allowedHost) return true;
    } catch {
      return false;
    }
  }

  if (referer) {
    try {
      const refererUrl = new URL(referer);
      if (refererUrl.host === allowedHost) return true;
    } catch {
      return false;
    }
  }

  return false;
}

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
  if (isRateLimited(clientIp)) {
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

  if (payload.website) {
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
