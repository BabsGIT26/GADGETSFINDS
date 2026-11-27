// Amazon Creators API client (GetItems). Plain JS so the prebuild script and the
// Next.js server share one implementation.
//
// Credentials come ONLY from these environment variables and are never logged:
//   AMAZON_CREATORS_CREDENTIAL_ID, AMAZON_CREATORS_CREDENTIAL_SECRET, AMAZON_CREATORS_VERSION
// Errors carry only an HTTP status and an Amazon error code, never request bodies.

const TOKEN_ENDPOINTS = {
  "2.1": "https://creatorsapi.auth.us-east-1.amazoncognito.com/oauth2/token",
  "2.2": "https://creatorsapi.auth.eu-south-2.amazoncognito.com/oauth2/token",
  "2.3": "https://creatorsapi.auth.us-west-2.amazoncognito.com/oauth2/token",
  "3.1": "https://api.amazon.com/auth/o2/token",
  "3.2": "https://api.amazon.co.uk/auth/o2/token",
  "3.3": "https://api.amazon.co.jp/auth/o2/token",
};
const API_URL = "https://creatorsapi.amazon/catalog/v1/getItems";
const MARKETPLACE = "www.amazon.com";
/** Partner tag sent with API requests. Page links keep their own tags. */
export const API_PARTNER_TAG = "gadgetsfindswebsite-20";
const RESOURCES = [
  "images.primary.large",
  "itemInfo.title",
  "offersV2.listings.price",
  "offersV2.listings.availability",
];
/** New accounts get about 1 request per second. */
const MIN_GAP_MS = 1100;

function credentials() {
  const id = process.env.AMAZON_CREATORS_CREDENTIAL_ID;
  const secret = process.env.AMAZON_CREATORS_CREDENTIAL_SECRET;
  const version = (process.env.AMAZON_CREATORS_VERSION || "").trim().replace(/^v/i, "");
  if (!id || !secret || !TOKEN_ENDPOINTS[version]) return null;
  return { id, secret, version };
}

export function hasCredentials() {
  return credentials() !== null;
}

export class CreatorsError extends Error {
  constructor(message, status, code) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let tokenCache = null; // { value, expiresAt }

async function accessToken() {
  if (tokenCache && tokenCache.expiresAt > Date.now() + 60_000) return tokenCache.value;
  const c = credentials();
  if (!c) throw new CreatorsError("Creators API credentials are not set", 0, "NoCredentials");
  const lwa = c.version.startsWith("3.");
  const res = await fetch(TOKEN_ENDPOINTS[c.version], {
    method: "POST",
    cache: "no-store",
    headers: lwa
      ? { "Content-Type": "application/json", Accept: "application/json" }
      : { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
    body: lwa
      ? JSON.stringify({ grant_type: "client_credentials", client_id: c.id, client_secret: c.secret, scope: "creatorsapi::default" })
      : new URLSearchParams({ grant_type: "client_credentials", client_id: c.id, client_secret: c.secret, scope: "creatorsapi/default" }),
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new CreatorsError(`Token request failed (HTTP ${res.status})`, res.status, "TokenError");
  const data = await res.json();
  if (!data.access_token) throw new CreatorsError("Token response had no access token", res.status, "TokenError");
  tokenCache = { value: data.access_token, expiresAt: Date.now() + (Number(data.expires_in) || 3600) * 1000 };
  return tokenCache.value;
}

// One request at a time, at least MIN_GAP_MS apart, within this process.
let queue = Promise.resolve();
let lastCall = 0;
function throttled(fn) {
  const run = queue.then(async () => {
    const wait = lastCall + MIN_GAP_MS - Date.now();
    if (wait > 0) await sleep(wait);
    try {
      return await fn();
    } finally {
      lastCall = Date.now();
    }
  });
  queue = run.catch(() => undefined);
  return run;
}

function summarize(item) {
  const image = item?.images?.primary?.large || {};
  const listings = Array.isArray(item?.offersV2?.listings) ? item.offersV2.listings : [];
  const offer = listings.find((l) => l?.isBuyBoxWinner) || listings[0] || null;
  const price = offer?.price || {};
  const money = price.money || {};
  const basis = price.savingBasis?.money || {};
  const saved = price.savings || {};
  const percent = Number(saved.percentage);
  return {
    asin: item.asin,
    title: item?.itemInfo?.title?.displayValue || null,
    image: image.url ? { url: image.url, width: image.width || 500, height: image.height || 500 } : null,
    price: money.displayAmount || null,
    listPrice: basis.displayAmount || null,
    savingsAmount: saved.money?.displayAmount || null,
    savingsPercent: Number.isFinite(percent) && percent > 0 ? Math.round(percent) : null,
    availability: offer?.availability?.type || null,
  };
}

/** GetItems for up to 10 ASINs. Retries twice when throttled. */
export async function getItems(asins) {
  if (asins.length === 0) return {};
  if (asins.length > 10) throw new CreatorsError("GetItems takes at most 10 ASINs", 0, "TooManyItems");
  const token = await accessToken();
  for (let attempt = 0; ; attempt++) {
    const res = await throttled(() =>
      fetch(API_URL, {
        method: "POST",
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-marketplace": MARKETPLACE,
        },
        body: JSON.stringify({
          itemIds: asins,
          itemIdType: "ASIN",
          marketplace: MARKETPLACE,
          partnerTag: API_PARTNER_TAG,
          resources: RESOURCES,
        }),
        signal: AbortSignal.timeout(15_000),
      }),
    );
    if (res.status === 429 && attempt < 2) {
      await sleep(2000 * (attempt + 1));
      continue;
    }
    if (!res.ok) {
      let code = "HttpError";
      try {
        const body = await res.json();
        code = String(body?.errors?.[0]?.code || body?.code || body?.error || code);
      } catch {}
      throw new CreatorsError(`GetItems failed (HTTP ${res.status} ${code})`, res.status, code);
    }
    const data = await res.json();
    const result = data.itemsResult || data.itemResults || {};
    const out = {};
    for (const item of result.items || []) if (item?.asin) out[item.asin] = summarize(item);
    return out;
  }
}
