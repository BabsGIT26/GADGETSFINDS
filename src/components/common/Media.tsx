import Image from "next/image";
import { illustrationAlt } from "@/lib/illustrations";

/**
 * The only image sizes used on articles, guides and product pages:
 * - HeroImage: 16:9, full content width (max 848px), loads first.
 * - ProductImage: 4:3, max 384px wide, lazy-loaded below the fold.
 * - CardImage: 4:3, fills a grid card, lazy-loaded.
 * Raster images go through next/image (resized, served as AVIF/WebP with srcset).
 * Our SVG illustrations are about 1-2 KB, so they are served as-is.
 */
type Props = { src: string; alt: string; priority?: boolean; className?: string };

const isSvg = (src: string) => src.endsWith(".svg") || src.includes("/assets/illustrations/");

function Frame({
  src,
  alt,
  priority = false,
  sizes,
  frame,
}: Props & { sizes: string; frame: string }) {
  const svg = isSvg(src);
  return (
    <div className={`relative overflow-hidden bg-muted ${frame}`}>
      <Image
        src={src}
        alt={illustrationAlt(src, alt)}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        unoptimized={svg}
        className={svg ? "object-contain p-4" : "object-cover"}
      />
    </div>
  );
}

export function HeroImage({ src, alt, priority = true, className = "" }: Props) {
  return (
    <Frame
      src={src}
      alt={alt}
      priority={priority}
      sizes="(min-width: 896px) 864px, 100vw"
      frame={`aspect-[16/9] w-full rounded-2xl my-6 ${className}`}
    />
  );
}

export function ProductImage({ src, alt, priority = false, className = "" }: Props) {
  return (
    <Frame
      src={src}
      alt={alt}
      priority={priority}
      sizes="(min-width: 640px) 384px, 100vw"
      frame={`aspect-[4/3] w-full max-w-sm rounded-xl mb-5 ${className}`}
    />
  );
}

export function CardImage({ src, alt, priority = false, className = "" }: Props) {
  return (
    <Frame
      src={src}
      alt={alt}
      priority={priority}
      sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 100vw"
      frame={`aspect-[4/3] w-full ${className}`}
    />
  );
}
