import { NextRequest, NextResponse } from "next/server";
import { sendXConversion } from "@/lib/x-conversion";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await sendXConversion({
      eventId: body.eventId || "tw-pwfa9-pageview",
      conversionId: body.conversionId,
      eventSourceUrl: body.eventSourceUrl || req.headers.get("referer") || undefined,
      identifiers: body.identifiers || [
        {
          ip_address: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
          user_agent: req.headers.get("user-agent") || undefined,
        },
      ],
    });

    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
