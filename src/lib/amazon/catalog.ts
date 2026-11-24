import { readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { cache } from "react";
import { unstable_cache } from "next/cache";
import { getItems, hasCredentials } from "./creators-core.mjs";
import GROUPS from "./asin-groups.json";

/**
 * Live Amazon product data (photo, title, price, stock) from the Creators API.
 *
 * - Pages are ISR (revalidate = 1h, set in the root layout), so prices refresh on
 *   Vercel without commits or deploys.
 * - Each group of up to 10 ASINs is one cached API call (Next data cache, 1h,
 *   stale-while-revalidate). A failed refresh keeps the last good data.
 * - Data older than 24h is never shown (Amazon's rule for prices), and with no
 *   credentials or no data every page falls back to its illustration and a plain
 *   "Check price on Amazon" button.
 */

export type AmazonItem = {
  asin: string;
  title: string | null;
  image: { url: string; width: number; height: number } | null;
  price: string | null;
  availability: string | null;
  /** ISO time the data was fetched from Amazon. */
  fetchedAt: string;
};

type Group = { id: string; asins: string[] };
type GroupData = { fetchedAt: string; items: Record<string, Omit<AmazonItem, "fetchedAt">> };

export const DATA_REVALIDATE_SECONDS = 3600;
export const MAX_AGE_MS = 24 * 60 * 60 * 1000;
const BUILD_FILE = join(tmpdir(), "gf-amazon-catalog.json");

const groupOf = new Map<string, Group>();
for (const group of GROUPS as Group[]) for (const asin of group.asins) groupOf.set(asin, group);

const ASIN_IN_URL = /\/(?:dp|gp\/product)\/([A-Z0-9]{10})(?:[/?#]|$)/;

/** ASIN from an Amazon product URL, or null for search/category links. */
export function asinFromUrl(url?: string | null): string | null {
  if (!url || !url.includes("amazon.")) return null;
  return url.match(ASIN_IN_URL)?.[1] ?? null;
}

let buildCatalog: { groups: Record<string, GroupData & { asins: string[] }> } | null | undefined;
function fromBuildPrefetch(group: Group): GroupData | null {
  if (process.env.NEXT_PHASE !== "phase-production-build") return null;
  if (buildCatalog === undefined) {
    try {
      buildCatalog = JSON.parse(readFileSync(BUILD_FILE, "utf8"));
    } catch {
      buildCatalog = null;
    }
  }
  const data = buildCatalog?.groups?.[group.id];
  if (!data || data.asins.join() !== group.asins.join()) return null;
  return data;
}

const fetchGroup = (group: Group) =>
  unstable_cache(
    async (): Promise<GroupData> => {
      const items = await getItems(group.asins);
      if (Object.keys(items).length === 0) throw new Error("Amazon returned no items");
      return { fetchedAt: new Date().toISOString(), items };
    },
    ["amazon-creators-v1", group.id, group.asins.join(",")],
    { revalidate: DATA_REVALIDATE_SECONDS, tags: ["amazon"] },
  )();

const loadGroup = cache(async (groupId: string): Promise<GroupData | null> => {
  const group = (GROUPS as Group[]).find((g) => g.id === groupId);
  if (!group || !hasCredentials()) return null;
  const prefetched = fromBuildPrefetch(group);
  if (prefetched) return prefetched;
  // During the build, only use the prefetch file so build workers do not hammer the API.
  if (process.env.NEXT_PHASE === "phase-production-build") return null;
  try {
    return await fetchGroup(group);
  } catch {
    return null;
  }
});

export function isFresh(fetchedAt: string, now = Date.now()): boolean {
  const t = Date.parse(fetchedAt);
  return Number.isFinite(t) && now - t < MAX_AGE_MS;
}

/** Fresh Amazon data for one ASIN, or null (unknown ASIN, no credentials, API error, stale). */
export async function getAmazonItem(asin?: string | null): Promise<AmazonItem | null> {
  if (!asin) return null;
  const group = groupOf.get(asin);
  if (!group) return null;
  const data = await loadGroup(group.id);
  const item = data?.items?.[asin];
  if (!data || !item || !isFresh(data.fetchedAt)) return null;
  return { ...item, fetchedAt: data.fetchedAt };
}

/** "Nov 24, 2026, 9:05 PM UTC" */
export function formatAsOf(iso: string): string {
  return (
    new Date(iso).toLocaleString("en-US", {
      timeZone: "UTC",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }) + " UTC"
  );
}
