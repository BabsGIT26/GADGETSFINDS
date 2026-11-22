import { NextRequest, NextResponse } from "next/server";
import { cleanSourceUrl, readTwclid, sendXConversion } from "@/lib/x-conversion";

// Server-side X conversion. Only X's ad click ID (twclid) is forwarded;
// IP addresses, emails, and phone numbers are never sent. See /privacy-policy.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const twclid =
      (typeof body?.twclid === "string" && body.twclid.slice(0, 200)) || readTwclid(req);
    const result = await sendXConversion({
      eventId: typeof body?.eventId === "string" ? body.eventId : "tw-pwfa9-pageview",
      conversionId: typeof body?.conversionId === "string" ? body.conversionId : undefined,
      eventSourceUrl: cleanSourceUrl(body?.eventSourceUrl || req.headers.get("referer")),
      identifiers: twclid ? [{ twclid }] : [],
    });

    return NextResponse.json({ ok: result.ok });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
