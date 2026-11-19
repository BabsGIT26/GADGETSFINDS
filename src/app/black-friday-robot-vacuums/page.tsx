import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import RelatedGuides from "@/components/common/RelatedGuides";
import { ProductListJsonLd } from "@/components/common/GuideFaq";

export const metadata: Metadata = {
  title: "Black Friday Robot Vacuums | Gadgets Finds",
  description:
    "A short Black Friday list of robot vacuums on Amazon: eufy C10, Roborock Q7 M5+, Shark AI Ultra, ILIFE A30s, ECOVACS T90 Pro Omni, and Lefant M210 Pro. Price and stock stay on Amazon.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/black-friday-robot-vacuums" },
  openGraph: {
    title: "Black Friday Robot Vacuums",
    description:
      "Short list of robot vacuums showing on Amazon for Black Friday. Open a button for the live price.",
    url: "https://www.gadgets-finds.com/black-friday-robot-vacuums",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: "https://www.gadgets-finds.com/assets/images/eufy-c10.jpg",
        alt: "eufy C10 robot vacuum with self-empty dock",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    creator: "@Gadgets_finds",
    title: "Black Friday Robot Vacuums",
    description: "Short list of robot vacuums showing on Amazon for Black Friday.",
    images: ["https://www.gadgets-finds.com/assets/images/eufy-c10.jpg"],
  },
};

const TAG = "gadgetsfindswebsite-20";

function dp(asin: string) {
  return `https://www.amazon.com/dp/${asin}?tag=${TAG}`;
}

const VACUUMS = [
  {
    name: "eufy C10",
    image: "/assets/images/eufy-c10.jpg",
    alt: "eufy C10 robot vacuum with self-empty dock",
    blurb: "Self-emptying dock, 2.85 inches tall, LiDAR mapping, and an edge brush.",
    href: dp("B0GD1XTMFN"),
  },
  {
    name: "ECOVACS DEEBOT T90 PRO OMNI",
    image: "/assets/images/ecovacs-t90-pro-omni.jpg",
    alt: "ECOVACS DEEBOT T90 PRO OMNI robot vacuum and mop",
    blurb: "Vacuum and mop with a self-cleaning roller.",
    href: dp("B0GJ5S4V78"),
  },
  {
    name: "Roborock Q7 M5+",
    image: "/assets/images/roborock-q7-m5-plus.jpg",
    alt: "Roborock Q7 M5+ robot vacuum and mop with dock",
    blurb: "Vacuum and mop with a self-empty dock, LiDAR, and an anti-tangle system.",
    href: dp("B0DWX69JVG"),
  },
  {
    name: "Shark AI Ultra",
    image: "/assets/images/shark-ai-ultra.jpg",
    alt: "Shark AI Ultra robot vacuum with self-empty base",
    blurb: "Bagless self-empty base and home mapping, aimed at pet hair.",
    href: dp("B09H8CWFNK"),
  },
  {
    name: "ILIFE A30s",
    image: "/assets/images/ilife-a30s.jpg",
    alt: "ILIFE A30s robot vacuum",
    blurb: "Vacuum only. LiDAR mapping, no-go zones, plus app and remote control.",
    href: dp("B0G5YDVR99"),
  },
  {
    name: "eufy L60 (Renewed)",
    image: "/assets/images/eufy-l60.jpg",
    alt: "Renewed eufy L60 robot vacuum with self-empty station",
    blurb: "Self-empty dock and a detangling roller. This listing is renewed, not brand new.",
    href: dp("B0CYNVGN26"),
  },
  {
    name: "Lefant M210 Pro",
    image: "/assets/images/lefant-m210-pro-white.jpg",
    alt: "Lefant M210 Pro robot vacuum in white",
    blurb: "The budget pick from the longer guide. Slim, with app and voice control, for hard floors and pet hair.",
    href: dp("B0CYL7273B"),
  },
] as const;

function amazonHref(url: string) {
  return `/api/go?url=${encodeURIComponent(url)}`;
}

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-4xl">
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases if you buy through links on this page, at no extra cost to you. Prices and availability change on Amazon.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Black Friday</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Black Friday robot vacuums
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            A short list of robot vacuums showing on Amazon during the sale. Photos and notes are smaller than the{" "}
            <a href="/best-budget-robot-vacuums-under-300" className="underline decoration-amber-500/80 underline-offset-4 hover:text-foreground">
              full budget guide
            </a>
            . The button opens that listing. Check the price and stock on Amazon before you buy.
          </p>

          <ProductListJsonLd
            name="Black Friday robot vacuums"
            url="/black-friday-robot-vacuums"
            products={VACUUMS.map((item) => item.name)}
          />

          <div className="grid sm:grid-cols-2 gap-4">
            {VACUUMS.map((item) => (
              <div key={item.name} className="bg-card border border-border rounded-xl overflow-hidden flex flex-col">
                <div className="bg-white h-36 flex items-center justify-center px-3">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="max-h-32 w-auto max-w-full object-contain"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h2 className="text-base font-bold">
                    <a
                      href={amazonHref(item.href)}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      className="underline decoration-amber-500/80 underline-offset-4 hover:text-amber-700"
                    >
                      {item.name}
                    </a>
                  </h2>
                  <p className="text-sm text-muted-foreground mt-2 flex-1">{item.blurb}</p>
                  <a
                    href={amazonHref(item.href)}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    aria-label={`View ${item.name} on Amazon`}
                    className="inline-flex items-center justify-center mt-4 px-4 py-2 rounded-full bg-amber-400 text-zinc-950 text-sm font-extrabold hover:bg-amber-300 transition-colors"
                  >
                    View on Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>

          <RelatedGuides current="/black-friday-robot-vacuums" />
        </div>
      </article>
      <Footer />
    </>
  );
}
