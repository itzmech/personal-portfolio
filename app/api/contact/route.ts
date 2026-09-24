import { NextResponse } from "next/server";
import {
  validateContact,
  type ContactPayload,
  type ContactResult,
} from "@/lib/contact";

export const runtime = "nodejs";

/**
 * POST /api/contact
 *
 * Email provider: Resend (recommended). To activate:
 *   1. npm install resend
 *   2. Set RESEND_API_KEY and CONTACT_TO_EMAIL in .env.local
 *   3. Uncomment the marked block below.
 *
 * Until then, requests are validated and the route honestly reports
 * the provider as not configured — nothing is sent, no secrets exposed.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json<ContactResult>(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { valid, fields, data } = validateContact(
    body as Partial<ContactPayload>
  );

  if (!valid) {
    return NextResponse.json<ContactResult>(
      { ok: false, error: "Please fix the highlighted fields.", fields },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    // Provider not configured — be honest, point at direct email.
    return NextResponse.json<ContactResult>(
      {
        ok: false,
        error:
          "The contact form is not connected to an email provider yet. Please email me directly instead.",
      },
      { status: 503 }
    );
  }

  // ---- Resend integration (activate when credentials exist) ----
  // const { Resend } = await import("resend");
  // const resend = new Resend(apiKey);
  // await resend.emails.send({
  //   from: "Portfolio Contact <onboarding@resend.dev>",
  //   to: toEmail,
  //   reply_to: data.email,
  //   subject: `Portfolio contact from ${data.name}`,
  //   text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
  // });
  // ---- End Resend integration ----

  void data;
  return NextResponse.json<ContactResult>({ ok: true }, { status: 200 });
}
