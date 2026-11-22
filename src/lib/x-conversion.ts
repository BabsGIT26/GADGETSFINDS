import type { NextRequest } from "next/server";

/**
 * Privacy: we never send a visitor's IP address, email, or phone number to X.
 * The only identifier we forward is X's own ad click ID (twclid), which X adds
 * to the landing URL when someone arrives from an X ad and its pixel keeps in
 * the first-party `_twclid` cookie. Visitors who did not come from an X ad have
 * no twclid, so no server-side conversion is sent for them.
 */
export function readTwclid(req: NextRequest): string | undefined {
  const fromQuery = req.nextUrl.searchParams.get("twclid");
  if (fromQuery) return fromQuery.slice(0, 200);

  const raw = req.cookies.get("_twclid")?.value;
  if (!raw) return undefined;
  try {
    const parsed = JSON.parse(decodeURIComponent(raw));
    if (parsed && typeof parsed.twclid === "string") return parsed.twclid.slice(0, 200);
  } catch {
    // Not JSON: treat the cookie value as the click ID itself.
  }
  return raw.slice(0, 200);
}

/** Drop the referrer's query string so no personal data in a URL is forwarded. */
export function cleanSourceUrl(url?: string | null): string | undefined {
  if (!url) return undefined;
  try {
    const u = new URL(url);
    if (!u.hostname.endsWith("gadgets-finds.com")) return undefined;
    return `${u.origin}${u.pathname}`;
  } catch {
    return undefined;
  }
}

export async function sendXConversion({
  eventId,
  conversionId,
  eventSourceUrl,
  identifiers,
}: {
  eventId: string;
  conversionId?: string;
  eventSourceUrl?: string;
  identifiers: Array<{ twclid?: string }>;
}) {
  const token = process.env.X_PIXEL_TOKEN;

  // Only the X click ID is ever forwarded (see readTwclid above).
  identifiers = identifiers
    .filter((id) => typeof id.twclid === "string" && id.twclid.length > 0)
    .map((id) => ({ twclid: id.twclid }));
  if (identifiers.length === 0) {
    return { ok: false, reason: "no_click_id" };
  }

  if (!token) {
    console.error("[X-CAPI] X_PIXEL_TOKEN is missing");
    return { ok: false, reason: "missing_token" };
  }

  const payload = {
    conversions: [
      {
        conversion_time: new Date().toISOString(),
        event_id: eventId,
        event_source_url: eventSourceUrl,
        conversion_id: conversionId,
        identifiers,
      },
    ],
  };

  try {
    const res = await fetch(
      "https://ads-api.x.com/12/measurement/conversions/pwfa9",
      {
        method: "POST",
        headers: {
          "X-Pixel-Token": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const text = await res.text();
    let data: any = {};
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    if (!res.ok) {
      console.error("[X-CAPI] Response", { status: res.status });
    }

    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    console.error("[X-CAPI] Fetch error", err);
    return { ok: false, error: String(err) };
  }
}
