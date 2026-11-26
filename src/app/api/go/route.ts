import { NextRequest, NextResponse } from "next/server";
import { cleanSourceUrl, readTwclid, sendXConversion } from "@/lib/x-conversion";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url || !url.startsWith("https://www.amazon.com")) {
    return NextResponse.redirect("https://www.gadgets-finds.com");
  }

  const ping = req.nextUrl.searchParams.get("ping") === "1";

  // Report the Amazon click to X only when the visitor arrived from an X ad.
  // No IP address, user agent, or other personal data is sent; see /privacy-policy.
  const twclid = readTwclid(req);
  if (twclid) {
    await Promise.race([
      sendXConversion({
        eventId: "tw-pwfa9-amazon-click",
        eventSourceUrl: cleanSourceUrl(req.headers.get("referer")),
        identifiers: [{ twclid }],
      }).catch(() => {}),
      new Promise((resolve) => setTimeout(resolve, 800)),
    ]);
  }

  // The page itself opens Amazon. This request only records the click.
  if (ping) return new NextResponse(null, { status: 204 });

  return NextResponse.redirect(url);
}
