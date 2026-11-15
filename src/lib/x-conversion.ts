export async function sendXConversion({
  eventId,
  conversionId,
  eventSourceUrl,
  identifiers,
}: {
  eventId: string; // e.g. "tw-pwfa9-xxxxx"
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
  if (!token) {
    console.warn("X_PIXEL_TOKEN not set — skipping conversion");
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

  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}
