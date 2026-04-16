import { NextResponse } from "next/server";
import { resend, isResendConfigured } from "@/lib/resend/client";
import { CareerEmail } from "@/lib/resend/templates/CareerEmail";
import {
  isRateLimited,
  isValidEmail,
  isValidPhone,
  sanitize,
  sanitizeFilename,
  getClientIp,
  isValidOrigin,
  isValidFileType,
} from "@/lib/api/validation";

const MAX_REQUESTS_PER_WINDOW = 3;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(request: Request) {
  const toEmail = process.env.CAREER_TO_EMAIL;
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

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const honeypot = formData.get("honeypot");
  if (honeypot && typeof honeypot === "string" && honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const firstName = sanitize(String(formData.get("firstName") ?? ""));
  const lastName = sanitize(String(formData.get("lastName") ?? ""));
  const email = sanitize(String(formData.get("email") ?? ""));
  const phone = sanitize(String(formData.get("phone") ?? ""));
  const positionTitle = sanitize(String(formData.get("positionTitle") ?? ""));
  const isGeneral = String(formData.get("isGeneral")) === "true";
  const locale = sanitize(String(formData.get("locale") ?? ""));
  const cvFile = formData.get("cv") as File | null;

  if (!firstName || firstName.length < 2 || firstName.length > 50) {
    return NextResponse.json(
      { error: "First name must be between 2 and 50 characters." },
      { status: 400 }
    );
  }

  if (!lastName || lastName.length < 2 || lastName.length > 50) {
    return NextResponse.json(
      { error: "Last name must be between 2 and 50 characters." },
      { status: 400 }
    );
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 }
    );
  }

  if (phone && !isValidPhone(phone)) {
    return NextResponse.json(
      { error: "Please enter a valid phone number." },
      { status: 400 }
    );
  }

  if (!cvFile || cvFile.size === 0) {
    return NextResponse.json(
      { error: "CV/Resume is required." },
      { status: 400 }
    );
  }

  if (cvFile.size > MAX_FILE_SIZE) {
    return NextResponse.json(
      { error: "CV file must be less than 5MB." },
      { status: 400 }
    );
  }

  if (!isValidFileType(cvFile)) {
    return NextResponse.json(
      { error: "CV must be a PDF or Word document." },
      { status: 400 }
    );
  }

  const subjectType = isGeneral
    ? "General Application"
    : `Application: ${positionTitle}`;
  const safeFilename = sanitizeFilename(cvFile.name);

  try {
    const cvBuffer = Buffer.from(await cvFile.arrayBuffer());

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `${subjectType} - ${firstName} ${lastName}`,
      react: CareerEmail({
        firstName,
        lastName,
        email,
        phone,
        positionTitle,
        isGeneral,
        locale,
      }),
      attachments: [
        {
          filename: safeFilename,
          content: cvBuffer,
        },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend email error:", err);
    return NextResponse.json(
      { error: "Failed to send application." },
      { status: 500 }
    );
  }
}
