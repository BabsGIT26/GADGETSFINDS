"use client";

import { usePathname } from "next/navigation";

const AMAZON_DISCLOSURE =
  "As an Amazon Associate, Gadgets Finds earns from qualifying purchases.";

export default function AmazonDisclosureGate() {
  const pathname = usePathname();

  // Product/review article routes use Amazon links and need the disclosure at the top.
  if (!pathname?.endsWith("-article")) return null;

  return (
    <p className="mt-14 md:mt-16 border-b border-border bg-muted/60 px-4 py-2 text-center text-sm text-foreground">
      {AMAZON_DISCLOSURE}
    </p>
  );
}
