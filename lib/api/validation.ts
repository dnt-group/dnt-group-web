const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000);

export function isRateLimited(ip: string, maxRequests: number): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count++;
  return false;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone: string): boolean {
  if (!phone) return true;
  return /^[+]?[\d\s\-().]{7,20}$/.test(phone);
}

export function sanitize(value: string): string {
  return value.replace(/[<>]/g, "").trim();
}

export function sanitizeFilename(filename: string): string {
  return filename
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .replace(/_{2,}/g, "_")
    .slice(0, 100);
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "unknown";
}

export function isValidOrigin(request: Request): boolean {
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

const ALLOWED_FILE_EXTENSIONS = [".pdf", ".doc", ".docx"];
const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export function isValidFileType(file: File): boolean {
  const extension = file.name.toLowerCase().slice(file.name.lastIndexOf("."));
  const hasValidExtension = ALLOWED_FILE_EXTENSIONS.includes(extension);
  const hasValidMime = ALLOWED_MIME_TYPES.includes(file.type);
  return hasValidExtension && hasValidMime;
}
