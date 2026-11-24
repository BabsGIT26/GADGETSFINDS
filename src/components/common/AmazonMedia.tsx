import Image from "next/image";
import { CardImage, HeroImage, ProductImage } from "@/components/common/Media";
import PriceFreshness from "@/components/common/PriceFreshness";
import { asinFromUrl, formatAsOf, getAmazonItem, type AmazonItem } from "@/lib/amazon/catalog";

/**
 * Real Amazon product photos and prices from the Creators API, with the
 * illustrations as the fallback. Photos are hotlinked from Amazon's image CDN
 * (never downloaded or re-hosted) and shown unaltered: object-contain on white.
 */

type Variant = "product" | "card" | "hero" | "thumb";

const FRAME: Record<Variant, string> = {
  product: "aspect-[4/3] w-full max-w-sm rounded-xl mb-5",
  card: "aspect-[4/3] w-full",
  hero: "aspect-[16/9] w-full rounded-2xl my-6",
  thumb: "aspect-square w-20 sm:w-24 shrink-0 rounded-lg",
};
const SIZES: Record<Variant, string> = {
  product: "(min-width: 640px) 384px, 100vw",
  card: "(min-width: 1024px) 300px, (min-width: 640px) 45vw, 100vw",
  hero: "(min-width: 896px) 864px, 100vw",
  thumb: "96px",
};
const PAD: Record<Variant, string> = { product: "p-4", card: "p-4", hero: "p-6", thumb: "p-1.5" };

export const PRICE_DISCLAIMER =
  "Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on Amazon.com at the time of purchase will apply to the purchase of this product.";

/** Pick the item from an explicit ASIN or from an Amazon product URL. */
export async function amazonItemFor(source: { asin?: string | null; url?: string | null }): Promise<AmazonItem | null> {
  return getAmazonItem(source.asin ?? asinFromUrl(source.url));
}

export function AmazonPhotoFrame({
  src,
  alt,
  variant,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  variant: Variant;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-white border border-zinc-200 ${FRAME[variant]} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={SIZES[variant]}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        unoptimized
        className={`object-contain ${PAD[variant]}`}
      />
    </div>
  );
}

/** Amazon photo when available, otherwise the page's illustration in the same size. */
export async function ProductPhoto({
  asin,
  url,
  fallback,
  alt,
  variant = "product",
  priority = false,
  className = "",
}: {
  asin?: string | null;
  url?: string | null;
  fallback?: string | null;
  alt: string;
  variant?: Variant;
  priority?: boolean;
  className?: string;
}) {
  const item = await amazonItemFor({ asin, url });
  if (item?.image) {
    return <AmazonPhotoFrame src={item.image.url} alt={alt} variant={variant} priority={priority} className={className} />;
  }
  if (!fallback) return null;
  if (variant === "hero") return <HeroImage src={fallback} alt={alt} priority={priority} className={className} />;
  if (variant === "card") return <CardImage src={fallback} alt={alt} priority={priority} className={className} />;
  if (variant === "thumb") {
    return (
      <div className={`relative overflow-hidden bg-muted ${FRAME.thumb} ${className}`}>
        <Image src={fallback} alt={alt} fill sizes="96px" unoptimized className="object-contain p-1" />
      </div>
    );
  }
  return <ProductImage src={fallback} alt={alt} priority={priority} className={className} />;
}

/**
 * Live Amazon price with its "as of" time. Renders nothing without fresh data.
 * `compact` leaves out the long disclaimer; the parent must then show <PriceDisclaimer />.
 */
export async function LivePrice({
  asin,
  url,
  compact = false,
  className = "",
}: {
  asin?: string | null;
  url?: string | null;
  compact?: boolean;
  className?: string;
}) {
  const item = await amazonItemFor({ asin, url });
  if (!item) return null;
  const outOfStock = !item.price && item.availability === "OUT_OF_STOCK";
  if (!item.price && !outOfStock) return null;
  const asOf = formatAsOf(item.fetchedAt);
  return (
    <PriceFreshness fetchedAt={item.fetchedAt}>
      <div className={className}>
        <p className="leading-snug">
          {item.price ? (
            <span className={`${compact ? "text-base" : "text-xl"} font-extrabold text-foreground`}>{item.price}</span>
          ) : (
            <span className="text-sm font-semibold text-foreground">Currently unavailable on Amazon</span>
          )}{" "}
          <span className={`text-xs text-muted-foreground ${compact ? "block" : ""}`}>on Amazon as of {asOf}</span>
        </p>
        {compact ? null : <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{PRICE_DISCLAIMER}</p>}
      </div>
    </PriceFreshness>
  );
}

export function PriceDisclaimer({ className = "" }: { className?: string }) {
  return <p className={`text-[11px] leading-snug text-muted-foreground ${className}`}>{PRICE_DISCLAIMER}</p>;
}
