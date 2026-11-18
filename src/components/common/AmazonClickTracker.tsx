"use client";

import { useEffect } from "react";

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
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (!gtag) return;
      gtag("event", "amazon_click", {
        page_path: window.location.pathname,
        link_url: destination,
        asin: asinMatch?.[1] || "unknown",
        product_name: (link.textContent || "amazon").replace(/\s+/g, " ").trim().slice(0, 80),
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
