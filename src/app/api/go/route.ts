import { NextRequest, NextResponse } from "next/server";
import { sendXConversion } from "@/lib/x-conversion";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url || !url.startsWith("https://www.amazon.com")) {
    return NextResponse.redirect("https://www.gadgets-finds.com");
  }

  // Send conversion event (fire-and-forget, don't block redirect)
  sendXConversion({
    eventId: "tw-pwfa9-amazon-click",
    eventSourceUrl: req.headers.get("referer") || undefined,
    identifiers: [
      {
        ip_address: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
        user_agent: req.headers.get("user-agent") || undefined,
      },
    ],
  }).catch(() => {});

  return NextResponse.redirect(url);
}
