import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please provide name, email and message." },
        { status: 400 }
      );
    }

    // In a real deployment, this is where you would integrate email, CRM, or notifications.
    return NextResponse.json({
      success: true,
      message: "Thank you! Your enquiry has been received. We will contact you shortly.",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Unable to submit your enquiry. Please try again." },
      { status: 500 }
    );
  }
}
