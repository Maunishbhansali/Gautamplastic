import { NextResponse } from "next/server";

import { applyRateLimit, assertSameOrigin, noStoreJson, parseLimitedJson, validateSubmission } from "@/lib/api-security";

export async function POST(request: Request) {
  const limited = applyRateLimit(request, "request-quote");

  if (limited) {
    return limited;
  }

  try {
    assertSameOrigin(request);
    const body = await parseLimitedJson(request);
    const validation = validateSubmission(body, "details");

    if (!validation.ok) {
      return noStoreJson({ success: false, error: validation.error }, { status: 400 });
    }

    return noStoreJson({
      success: true,
      message: "Thank you! Your quote request has been received. We will contact you shortly.",
    });
  } catch (error) {
    console.warn("Quote submission rejected", error instanceof Error ? error.message : "unknown_error");
    return noStoreJson(
      { success: false, error: "Unable to submit your request. Please try again." },
      { status: 400 },
    );
  }
}

export function GET() {
  return NextResponse.json({ success: false, error: "Method not allowed." }, { status: 405 });
}
