import type { Metadata } from "next";
import { illustrationOg, type IllustrationKind } from "@/lib/illustrations";

const BASE = "https://www.gadgets-finds.com";

/**
 * Metadata for an article or guide. `title` is the keyword title without the
 * brand; " | Gadgets Finds" is added, and the whole tag must stay at 60 characters or fewer.
 */
export function pageMetadata({
  path,
  title,
  description,
  kind,
  ogImage,
}: {
  path: string;
  title: string;
  description: string;
  kind?: IllustrationKind;
  ogImage?: string;
}): Metadata {
  const url = `${BASE}${path}`;
  const raw = ogImage ?? (kind ? illustrationOg(kind) : undefined);
  // Product photos are not 1200x630. Social sites crop them and cut the product off.
  // Local /og images are already composed. Everything else is framed first.
  const image = raw && /^https?:\/\//.test(raw) && !raw.startsWith(`${BASE}/og`) ? `${BASE}/og/frame?src=${encodeURIComponent(raw)}` : raw;
  const full = `${title} | Gadgets Finds`;
  return {
    title: { absolute: full.length <= 60 ? full : title },
    description,
    metadataBase: new URL(BASE),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "Gadgets Finds",
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: title }] } : {}),
    },
    twitter: { card: "summary_large_image", title, description, ...(image ? { images: [image] } : {}) },
  };
}

/** Build a 150-160 character meta description from sentences, ending with a call to action. */
export function metaDescription(parts: string[], cta = "Check today's price on Amazon.") {
  const fillers = [cta, "See who it suits and check today's price on Amazon.", "Compare specs, then check today's Amazon price."];
  const base = parts.join(" ").replace(/\s+/g, " ").trim();
  for (const filler of fillers) {
    const text = `${base} ${filler}`;
    if (text.length >= 150 && text.length <= 160) return text;
  }
  const withCta = `${base} ${cta}`;
  if (withCta.length < 150) return `${base} See who it suits and check today's price on Amazon.`.slice(0, 160);
  // Too long: trim the base at a word boundary so the CTA still fits.
  const room = 160 - cta.length - 1;
  const cut = base.slice(0, room).replace(/[\s,;:]+\S*$/, "");
  return `${cut.replace(/[.,;:]$/, "")}. ${cta}`;
}
