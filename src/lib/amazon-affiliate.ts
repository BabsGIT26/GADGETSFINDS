const AMAZON_ASSOCIATE_TAG = "gadgetsfindswebsite-20";

// Use product-specific ASINs when verified. Products without a verified ASIN
// intentionally keep their search URL rather than sending visitors to a
// potentially incorrect listing.
const VERIFIED_ASINS: Record<string, string> = {
  "macbook pro m4": "B0DLHBYRPS",
  "meta quest 3": "B0CD1JTBSC",
  "playstation 5 slim (disc)": "B0CP4F9J4W",
  "intel arc b580": "B0DVS6MSP9",
  "samsung galaxy z fold 6": "B0D18SMB1X",
  "sony wh-1000xm6": "B0F3PT1VBL",
  "samsung galaxy s26 ultra": "B0D3HV5Z2Q",
};

function addAffiliateTag(href: string) {
  if (!href.includes("amazon.com") || href.includes("tag=")) return href;
  return `${href}${href.includes("?") ? "&" : "?"}tag=${AMAZON_ASSOCIATE_TAG}`;
}

export function resolveAmazonAffiliateUrl(productName: string, href: string) {
  const asin = VERIFIED_ASINS[productName.trim().toLowerCase()];
  if (asin) return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_ASSOCIATE_TAG}`;
  return addAffiliateTag(href);
}
