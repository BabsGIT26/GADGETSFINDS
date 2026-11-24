import { getAmazonItem } from "./catalog";

/**
 * Which Amazon product photo stands in for a guide or article card that links to
 * one of our own pages. Each entry is the product the card (or the anchored section)
 * is about; guides without an anchor use their top pick. Routes not listed, or whose
 * product has no own listing, keep their illustration.
 */
export const ROUTE_ASIN: Record<string, string> = {
  "/best-amazon-deals-this-week": "B0G4XRP464",
  "/best-budget-robot-vacuums-under-300": "B0F3337BV7",
  "/best-cheap-tablets-under-150": "B0CVDN4QS6",
  "/best-gaming-consoles-2026": "B0FTMY4YZ2",
  "/best-gaming-consoles-2026#playstation-5-pro": "B0FTMY4YZ2",
  "/best-gaming-consoles-2026#xbox-series-x-digital": "B0DCD9LGHY",
  "/best-graphics-cards-2026": "B0DS6WTXGP",
  "/best-graphics-cards-2026#rtx-5090": "B0DS2X13PH",
  "/best-laptops-developers-2026": "B0FWD623D1",
  "/best-macbooks-2026": "B0GR19X8DC",
  "/best-macbooks-2026#macbook-air-13-m5": "B0GR19X8DC",
  "/best-macbooks-2026#macbook-pro-14-m5": "B0FWD623D1",
  "/best-macbooks-2026#macbook-pro-16-m5-max": "B0GR1F53WV",
  "/best-macbooks-2026#macbook-pro-proled-xdr": "B0HPM6QTTM",
  "/best-mini-gadgets-under-30": "B0DPKRC84P",
  "/best-noise-cancelling-headphones-2026": "B0F3PT1VBL",
  "/best-noise-cancelling-headphones-2026#sony-wh-1000xm6": "B0F3PT1VBL",
  "/best-phones-2026": "B0G4SWDH8P",
  "/best-phones-2026#galaxy-s26-ultra": "B0G4SWDH8P",
  "/best-phones-2026#iphone-17-vs-galaxy-s26-ultra": "B0G4SWDH8P",
  "/best-portable-chargers-for-travel": "B0CXDQXC3Q",
  "/best-ps5-accessories-2026": "B0C47ZX1WB",
  "/best-ps5-accessories-2026#cooling-station": "B0CXSWDHM6",
  "/best-ps5-accessories-2026#racing-wheel": "B00Z0UWWYC",
  "/best-smartwatches-under-350": "B0FQFW7M9H",
  "/black-friday-robot-vacuums": "B0GXF7ZQPY",
  "/black-friday-smartwatches": "B0HJB1CGR3",
  "/genz-semi-automatic-slingshot-article": "B0HB4HCB8L",
  "/iphone-duo-cases": "B0HDST6F85",
  "/roborock-saros-z70-article": "B0DSLBZV3F",
  "/roborock-vs-roomba-2026": "B0GGRSMXKN",
  "/samsung-65-s85h-oled-article": "B0GQ6YWP33",
  "/samsung-990-pro-4tb-article": "B0CHGT1KFJ",
  // Mini gadgets
  "/ytt-touchscreen-cleaner": "B07MB8P28S",
  "/outlet-extender-stick": "B0H3P79YX2",
  "/ultra-slim-magnetic-power-bank": "B0F6NFHB31",
  "/apple-airtag": "B0GJTFXNRX",
  "/usb-c-power-meter": "B07MGQZHGM",
  "/mini-gan-charger-65w": "B091BGMKYS",
  "/phone-cooler-ice-card": "B0DYTYJ7WJ",
  "/ultra-mini-webcam": "B0D9W7J9SK",
  "/anker-maggo-power-bank": "B0CFDQ9QH5",
  "/keysmart-smartcard-tracker": "B0G7NB2MH9",
  "/olight-imini-2-flashlight": "B0C54ZH8WW",
  "/ugreen-nexode-mini-30w": "B0CBJQMC9H",
};

/** Amazon photo URLs for card links, keyed by the link. Only fresh photos are returned. */
export async function photosForRoutes(routes: string[]): Promise<Record<string, string>> {
  const unique = [...new Set(routes)].filter((route) => ROUTE_ASIN[route]);
  const entries = await Promise.all(
    unique.map(async (route) => [route, (await getAmazonItem(ROUTE_ASIN[route]))?.image?.url ?? null] as const),
  );
  return Object.fromEntries(entries.filter((entry): entry is readonly [string, string] => Boolean(entry[1])));
}

/** Every route that has a card photo. */
export const PHOTO_ROUTES = Object.keys(ROUTE_ASIN);
