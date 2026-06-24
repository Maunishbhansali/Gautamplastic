import { NextResponse } from "next/server";

import { applyRateLimit, assertSameOrigin, noStoreJson, parseLimitedJson, validateSubmission } from "@/lib/api-security";

export async function POST(request: Request) {
  const limited = applyRateLimit(request, "contact");

  if (limited) {
    return limited;
  }

  try {
    assertSameOrigin(request);
    const body = await parseLimitedJson(request);
    const validation = validateSubmission(body, "message");

    if (!validation.ok) {
      return noStoreJson({ success: false, error: validation.error }, { status: 400 });
    }

    // Integrate email, CRM, or notification delivery here when credentials are configured server-side.
    return noStoreJson({
      success: true,
      message: "Thank you! Your enquiry has been received. We will contact you shortly.",
    });
  } catch (error) {
    console.warn("Contact submission rejected", error instanceof Error ? error.message : "unknown_error");
    return noStoreJson(
      { success: false, error: "Unable to submit your enquiry. Please try again." },
      { status: 400 },
    );
  }
}

export function GET() {
  return NextResponse.json({ success: false, error: "Method not allowed." }, { status: 405 });
}
