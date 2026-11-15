export async function sendXConversion({
  eventId,
  conversionId,
  eventSourceUrl,
  identifiers,
}: {
  eventId: string;
  conversionId?: string;
  eventSourceUrl?: string;
  identifiers: Array<{
    twclid?: string;
    hashed_email?: string;
    hashed_phone_number?: string;
    ip_address?: string;
    user_agent?: string;
  }>;
}) {
  const token = process.env.X_PIXEL_TOKEN;

  console.log("[X-CAPI] Attempting to send conversion", {
    eventId,
    hasToken: !!token,
    tokenLength: token?.length || 0,
    eventSourceUrl,
    identifiersCount: identifiers.length,
  });

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

    console.log("[X-CAPI] Response", {
      status: res.status,
      ok: res.ok,
      data,
    });

    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    console.error("[X-CAPI] Fetch error", err);
    return { ok: false, error: String(err) };
  }
}
