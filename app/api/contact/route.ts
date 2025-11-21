import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Harish Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "letsgooooooooooooooooo2@gmail.com",

      // ✅ FIXED — correct field for Resend
      reply_to: email,

      subject: `New portfolio message from ${name || "Someone"}`,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
