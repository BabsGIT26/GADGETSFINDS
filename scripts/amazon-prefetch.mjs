// Runs before `next build`:
// 1. Rebuilds src/lib/amazon/asin-groups.json from every ASIN in src/app and src/lib
//    (one group of up to 10 ASINs per source file, so a page usually needs one API call).
// 2. If the Creators API credentials are set, fetches every group once, throttled, and
//    writes the result to the OS temp dir so build workers do not all call the API at once.
// It never fails the build: on any API problem the pages fall back to the illustrations.
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, relative } from "node:path";
import { getItems, hasCredentials } from "../src/lib/amazon/creators-core.mjs";

const ROOT = process.cwd();
const GROUPS_FILE = join(ROOT, "src/lib/amazon/asin-groups.json");
export const CATALOG_FILE = join(tmpdir(), "gf-amazon-catalog.json");
const ASIN = /\bB0[A-Z0-9]{8}\b/g;

function walk(dir, out = []) {
  for (const name of readdirSync(dir).sort()) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(ts|tsx|mjs|js)$/.test(name) && !name.endsWith(".json")) out.push(p);
  }
  return out;
}

function buildGroups() {
  const seen = new Set();
  const groups = [];
  for (const file of [...walk(join(ROOT, "src/app")), ...walk(join(ROOT, "src/lib"))]) {
    const asins = [...new Set(readFileSync(file, "utf8").match(ASIN) || [])].filter((a) => !seen.has(a));
    asins.forEach((a) => seen.add(a));
    const rel = relative(join(ROOT, "src"), file).replace(/\\/g, "/");
    for (let i = 0; i < asins.length; i += 10) groups.push({ id: `${rel}#${i / 10}`, asins: asins.slice(i, i + 10) });
  }
  return groups;
}

async function main() {
  const groups = buildGroups();
  writeFileSync(GROUPS_FILE, JSON.stringify(groups, null, 2) + "\n");
  const total = groups.reduce((n, g) => n + g.asins.length, 0);
  console.log(`[amazon] ${total} ASINs in ${groups.length} groups`);
  if (!hasCredentials()) {
    console.log("[amazon] Creators API credentials not set; pages will use illustrations.");
    return;
  }
  const catalog = { generatedAt: new Date().toISOString(), groups: {} };
  let ok = 0;
  for (const group of groups) {
    try {
      const items = await getItems(group.asins);
      catalog.groups[group.id] = { fetchedAt: new Date().toISOString(), asins: group.asins, items };
      ok += Object.keys(items).length;
    } catch (err) {
      console.log(`[amazon] group ${group.id} failed: ${err.message}`);
    }
  }
  writeFileSync(CATALOG_FILE, JSON.stringify(catalog));
  console.log(`[amazon] fetched ${ok}/${total} items for the build`);
}

main().catch((err) => {
  console.log(`[amazon] prefetch skipped: ${err?.message || err}`);
});
