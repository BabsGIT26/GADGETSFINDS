import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON =
  "https://www.amazon.com/dp/B0GQ6YWP33?tag=gadgetsfindswebsite-20";

const OG_IMAGE = "https://eftm.com/wp-content/uploads/2026/03/Samsung-OLED-S85H-scaled.jpg";

export const metadata: Metadata = {
  title: "Samsung 65-Inch S85H Series OLED 4K Smart TV (2026) | Gadgets Finds",
  description:
    "2026 Samsung 65-inch S85H OLED with Vision AI, NQ4 AI Gen2 processor, 4K AI upscaling, OLED HDR, and gaming features. Price and stock change on Amazon.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/samsung-65-s85h-oled-article",
  },
  openGraph: {
    title: "Samsung 65-Inch S85H Series OLED 4K Smart TV (2026)",
    description: "OLED HDR, NQ4 AI Gen2, 4K AI Upscaling, Premium Gaming Pack. Price changes.",
    url: "https://www.gadgets-finds.com/samsung-65-s85h-oled-article",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Samsung 65-Inch S85H Series OLED TV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "Samsung 65-Inch S85H Series OLED 4K Smart TV (2026)",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-28 md:pt-16">
        <div className="container mx-auto px-4 pt-2 pb-10 max-w-3xl">
          <p className="text-sm text-foreground mb-3">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            TVs
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Samsung 65-Inch Class S85H Series OLED 4K Smart TV (2026)
          </h1>
          <p className="text-muted-foreground mb-6">
            2026 entry-level Samsung OLED with Vision AI, NQ4 AI Gen2 processor, OLED HDR,
            4K AI Upscaling, Color Booster Pro, and a Premium Gaming Pack. Price and stock change on Amazon.
          </p>

          <a
            href={AMAZON}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
          >
            VIEW ON AMAZON
          </a>

          <div className="my-8 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/A1BcTPpHlqs"
              title="Samsung S85H OLED Review"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What this TV is</h2>
          <p className="text-muted-foreground mb-4">
            The S85H is Samsung’s 2026 entry OLED (model QN65S85HAEXZA / 65S85H). ASIN B0GQ6YWP33.
            It uses a WOLED panel with self-illuminating pixels for near-infinite contrast.
          </p>

          <div className="w-full flex justify-center py-6 mb-6">
            <AppImage
              src="https://eftm.com/wp-content/uploads/2026/03/Samsung-OLED-S85H-scaled.jpg"
              alt="Samsung S85H OLED in a living room"
              className="max-h-[400px] w-auto max-w-full object-contain rounded-lg"
            />
          </div>

          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Size: 65-inch class, 4K (3840 x 2160)</li>
            <li>Panel: OLED with OLED HDR</li>
            <li>Processor: NQ4 AI Gen2 with Samsung Vision AI</li>
            <li>Upscaling: 4K AI Upscaling</li>
            <li>Color: Color Booster Pro, Pantone Validated</li>
            <li>Refresh: up to 120Hz with Motion Xcelerator</li>
            <li>Gaming: Premium Gaming Pack (FreeSync Premium, G-Sync compatible, ALLM, low latency)</li>
            <li>Smart: Tizen, Alexa built-in</li>
            <li>Audio: AI Sound Controller, 20W</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who it is for</h2>
          <p className="text-muted-foreground mb-4">
            Buy it if you want true OLED blacks and color in a 65-inch size without stepping up to Samsung’s higher QD-OLED lines. Strong for movies and for 4K/120Hz gaming on PS5 or Xbox.
          </p>

          <div className="w-full flex justify-center py-6 mb-6">
            <AppImage
              src="https://cdn.mos.cms.futurecdn.net/sUoRqwztUWf4789WKCgPwa-2000-80.jpg"
              alt="Samsung S85H OLED showing city skyline"
              className="max-h-[400px] w-auto max-w-full object-contain rounded-lg"
            />
          </div>

          <p className="text-muted-foreground mb-4">
            Skip it if you need the brightest possible HDR for a very bright room, or if you prefer Dolby Vision (this model focuses on HDR10+).
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Before you click</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Confirm the 65-inch S85H 2026 model on the live Amazon card.</li>
            <li>Price and stock change often on this set. Recheck before you pay.</li>
            <li>Measure your space — 65-inch class is large.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            A solid 2026 OLED entry point with AI processing and full gaming features. Open the Amazon listing to see the current deal price and stock.
          </p>

          <div className="w-full flex justify-center py-6 mb-10">
            <AppImage
              src="https://m.media-amazon.com/images/I/818JZQW4xWL.jpg"
              alt="Samsung 65-Inch S85H Series OLED TV"
              className="max-h-[400px] w-auto max-w-full object-contain"
            />
          </div>

          <AmazonDealBox
            productName="Samsung 65-Inch S85H Series OLED 4K Smart TV (2026)"
            href={AMAZON}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
