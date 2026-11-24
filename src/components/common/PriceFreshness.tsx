"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Hides a price once it is 24 hours old, in case a cached page outlives its data
 * (Amazon allows showing an API price for at most 24 hours).
 */
export default function PriceFreshness({ fetchedAt, children }: { fetchedAt: string; children: ReactNode }) {
  const [stale, setStale] = useState(false);
  useEffect(() => {
    const t = Date.parse(fetchedAt);
    if (!Number.isFinite(t) || Date.now() - t >= 24 * 60 * 60 * 1000) setStale(true);
  }, [fetchedAt]);
  return stale ? null : <>{children}</>;
}
