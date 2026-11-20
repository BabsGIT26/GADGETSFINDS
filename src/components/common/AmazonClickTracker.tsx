"use client";

import { useEffect } from "react";

const PRODUCT_NAMES: Record<string, string> = {
  B0GD1XTMFN: "eufy C10",
  B0GJ5S4V78: "ECOVACS DEEBOT T90 PRO OMNI",
  B0DWX69JVG: "Roborock Q7 M5+",
  B09H8CWFNK: "Shark AI Ultra",
  B0G5YDVR99: "ILIFE A30s",
  B0CYNVGN26: "eufy L60 (Renewed)",
  B0CYL7273B: "Lefant M210 Pro",
};

function productName(link: HTMLAnchorElement, asin: string) {
  const explicit = link.getAttribute("data-product-name");
  if (explicit) return explicit.slice(0, 100);
  const label = link.getAttribute("aria-label") || "";
  const fromLabel = label.match(/^View (.+) on Amazon$/i);
  if (fromLabel?.[1]) return fromLabel[1].slice(0, 100);
  if (PRODUCT_NAMES[asin]) return PRODUCT_NAMES[asin];
  const text = (link.textContent || "").replace(/\s+/g, " ").trim();
  if (text && !/^view on amazon$/i.test(text)) return text.slice(0, 100);
  return asin || "amazon";
}

export default function AmazonClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const isGo = href.includes("/api/go");
      const isAmazon = href.includes("amazon.com") && href.includes("gadgetsfindswebsite-20");
      if (!isGo && !isAmazon) return;

      let destination = href;
      if (isGo) {
        try {
          destination = new URL(href, window.location.origin).searchParams.get("url") || href;
        } catch {
          destination = href;
        }
      }

      const asinMatch = destination.match(/\/(?:dp|gp\/product)\/([A-Z0-9]{10})/i);
      const asin = (asinMatch?.[1] || "unknown").toUpperCase();
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (!gtag) return;
      gtag("event", "amazon_click", {
        page_path: window.location.pathname,
        link_url: destination,
        asin,
        product_name: productName(link, asin),
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
