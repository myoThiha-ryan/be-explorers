import { NextResponse } from "next/server";
import { site } from "@/content/site";

/**
 * Enquiry endpoint.
 *
 * Delivery is intentionally pluggable and OFF by default so the site can be
 * deployed before an email provider is chosen:
 *
 *   • Set RESEND_API_KEY (+ optional ENQUIRY_TO / ENQUIRY_FROM) to email enquiries
 *     via Resend, or
 *   • Set ENQUIRY_WEBHOOK_URL to POST the payload anywhere (Zapier, Make, Slack).
 *
 * With neither set, enquiries are logged to the server console and the visitor
 * still gets a confirmation — wire one up before launch.
 */

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  tour?: string;
  date?: string;
  guests?: string;
  language?: string;
  message?: string;
  /** honeypot */
  company?: string;
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bot filled the hidden field — accept silently so it doesn't retry.
  if (payload.company) return NextResponse.json({ ok: true });

  const name = payload.name?.trim();
  const email = payload.email?.trim();

  if (!name || !email || !isEmail(email)) {
    return NextResponse.json(
      { error: "Please add your name and a valid email address." },
      { status: 422 },
    );
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${payload.phone || "—"}`,
    `Tour: ${payload.tour || "Not sure yet"}`,
    `Preferred date: ${payload.date || "—"}`,
    `Guests: ${payload.guests || "—"}`,
    `Language: ${payload.language || "English"}`,
    "",
    payload.message?.trim() || "(no message)",
  ].join("\n");

  const subject = `New enquiry — ${payload.tour || "General"} (${name})`;

  try {
    if (process.env.ENQUIRY_WEBHOOK_URL) {
      await fetch(process.env.ENQUIRY_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, ...payload }),
      });
    } else if (process.env.RESEND_API_KEY) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.ENQUIRY_FROM ?? `BeExplorers <onboarding@resend.dev>`,
          to: [process.env.ENQUIRY_TO ?? site.email],
          reply_to: email,
          subject,
          text: lines,
        }),
      });
      if (!response.ok) throw new Error(await response.text());
    } else {
      console.info(`[enquiry] no delivery configured\n${subject}\n${lines}`);
    }
  } catch (error) {
    console.error("[enquiry] delivery failed", error);
    return NextResponse.json(
      { error: "We couldn't send that just now." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
