import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.SEND_TO_EMAIL;

  // If env vars are missing, DO NOT crash the build
  if (!apiKey || !toEmail) {
    console.warn("⚠️ Missing RESEND_API_KEY or SEND_TO_EMAIL at build/runtime.");
    return NextResponse.json(
      {
        success: false,
        error: "Email service not configured.",
      },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: toEmail,
      subject: `New message from ${name || "Visitor"}`,
      text: `From: ${email}\n\nMessage:\n${message}`,
    });

    if (result.error) {
      return NextResponse.json(
        { success: false, error: result.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
