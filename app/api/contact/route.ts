import { NextResponse } from "next/server";
import { contactInquirySchema } from "@/lib/validations/contact";
import { siteConfig } from "@/lib/site-config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactInquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Please check the form and try again." },
        { status: 400 }
      );
    }

    const inquiry = parsed.data;
    const origin =
      request.headers.get("origin") ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000";
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin,
          Referer: `${origin}/contact`,
        },
        body: JSON.stringify({
          name: inquiry.name,
          email: inquiry.email,
          phone: inquiry.phone,
          practice: inquiry.practiceName,
          service: inquiry.service,
          message: inquiry.message,
          _subject: `Consultation inquiry from ${inquiry.name} — ${inquiry.practiceName}`,
          _replyto: inquiry.email,
          _template: "table",
          _captcha: "false",
        }),
      }
    );

    const result = (await response.json().catch(() => null)) as {
      success?: string | boolean;
      message?: string;
    } | null;

    const delivered = result?.success === true || result?.success === "true";

    if (result?.message?.toLowerCase().includes("activation")) {
      return NextResponse.json(
        {
          ok: false,
          error: `Open the activation email sent to ${siteConfig.email} and confirm it once. Then send the inquiry again.`,
        },
        { status: 503 }
      );
    }

    if (!response.ok || !delivered) {
      console.error("[contact-inquiry-failed]", response.status, result);
      return NextResponse.json(
        {
          ok: false,
          error: `We couldn't send your inquiry. Please email ${siteConfig.email} or call ${siteConfig.phone}.`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact-inquiry-error]", error);
    return NextResponse.json(
      {
        ok: false,
        error: `We couldn't send your inquiry. Please email ${siteConfig.email} or call ${siteConfig.phone}.`,
      },
      { status: 500 }
    );
  }
}
