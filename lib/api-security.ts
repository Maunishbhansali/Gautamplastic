import { NextResponse } from "next/server";

const MAX_FIELD_LENGTH = 1_000;
const MAX_BODY_BYTES = 8_192;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 8;

const buckets = new Map<string, { count: number; resetAt: number }>();

export interface SubmissionFields {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  productInterest?: string;
  quantity?: string;
  message?: string;
  details?: string;
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

export function applyRateLimit(request: Request, scope: string) {
  const key = `${scope}:${getClientIp(request)}`;
  const now = Date.now();
  const current = buckets.get(key);

  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return null;
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return NextResponse.json(
      { success: false, error: "Too many submissions. Please try again shortly." },
      { status: 429, headers: { "Retry-After": Math.ceil((current.resetAt - now) / 1000).toString() } },
    );
  }

  current.count += 1;
  return null;
}

export function assertSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (!origin || !host) {
    return;
  }

  const originUrl = new URL(origin);

  if (originUrl.host !== host) {
    throw new Error("invalid_origin");
  }
}

export async function parseLimitedJson(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  const contentLength = Number(request.headers.get("content-length") ?? "0");

  if (!contentType.includes("application/json")) {
    throw new Error("unsupported_content_type");
  }

  if (contentLength > MAX_BODY_BYTES) {
    throw new Error("payload_too_large");
  }

  const body = await request.json();

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw new Error("invalid_payload");
  }

  return body as Record<string, unknown>;
}

export function cleanText(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, MAX_FIELD_LENGTH);
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

export function validateSubmission(body: Record<string, unknown>, requiredMessageField: "message" | "details") {
  const submission: SubmissionFields = {
    name: cleanText(body.name),
    email: cleanText(body.email).toLowerCase(),
    phone: cleanText(body.phone),
    company: cleanText(body.company),
    productInterest: cleanText(body.productInterest),
    quantity: cleanText(body.quantity),
    message: cleanText(body.message),
    details: cleanText(body.details),
  };

  const messageValue = submission[requiredMessageField] ?? "";

  if (!submission.name || !submission.email || !messageValue) {
    return { ok: false as const, error: "Please provide name, email and message." };
  }

  if (!isValidEmail(submission.email)) {
    return { ok: false as const, error: "Please provide a valid email address." };
  }

  return { ok: true as const, submission };
}

export function noStoreJson(payload: unknown, init?: ResponseInit) {
  const response = NextResponse.json(payload, init);
  response.headers.set("Cache-Control", "no-store");
  response.headers.set("X-Content-Type-Options", "nosniff");
  return response;
}
