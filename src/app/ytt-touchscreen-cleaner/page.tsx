import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON = "https://www.amazon.com/Touchscreen-Cleaner-Versatile-Cleaners-Microfiber/dp/B07MB8P28S?tag=gadgetsfindswebsmediavid-20";

export const metadata: Metadata = {
  title: "YTT Touchscreen Screen Cleaner Spray Review — Gadgets Finds",
  description:
    "Portable two-in-one screen cleaner spray and microfiber cloth for phones, iPads, laptops, car touchscreens, and other devices.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/ytt-touchscreen-cleaner",
  },
  openGraph: {
    title: "YTT Touchscreen Screen Cleaner Spray",
    description: "Two-in-one spray and cloth for phones, tablets, laptops, and car screens.",
    url: "https://www.gadgets-finds.com/ytt-touchscreen-cleaner",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71dnnsMpNpL._AC_UL450_SY450_QL70_.jpg",
        width: 1200,
        height: 630,
        alt: "YTT Touchscreen Screen Cleaner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "YTT Touchscreen Screen Cleaner Spray",
    images: ["https://m.media-amazon.com/images/I/71dnnsMpNpL._AC_UL450_SY450_QL70_.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an
            Amazon Associate. We may earn from qualifying purchases if you buy through links on this
            page, at no extra cost to you. Prices and availability change on Amazon.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Screen Care
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            YTT Touchscreen Screen Cleaner Spray
          </h1>
          <p className="text-muted-foreground mb-6">
            Portable two-in-one spray and microfiber cloth for phones, iPads, laptops, car touchscreens, and other electronic devices.
          </p>

          {/* Simple yellow button at the top — visible without scrolling */}
          <div className="mb-6">
            <a
              href={AMAZON}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
            >
              VIEW ON AMAZON
            </a>
          </div>

          {/* Product image right after the button — reduced size */}
          <div className="mb-10 flex justify-center">
            <img
              src="https://m.media-amazon.com/images/I/71dnnsMpNpL._AC_UL450_SY450_QL70_.jpg"
              alt="YTT Touchscreen Screen Cleaner Spray"
              className="w-full max-w-[280px] h-auto rounded-xl"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            A compact screen cleaner that combines a spray bottle with a microfiber cloth. The design is meant to be carried in a bag or kept in a car so you can clean fingerprints and smudges without hunting for wipes.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Where it works</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Smartphone and tablet screens</li>
            <li>Laptop and monitor displays</li>
            <li>Car touchscreens and navigation systems</li>
            <li>Other glass and glossy electronic surfaces</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            Spray a small amount on the cloth (not directly on the screen if you prefer), then wipe. The attached cloth stays with the bottle, so the cleaner is less likely to get separated from the wipe.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who it is for</h2>
          <p className="text-muted-foreground mb-4">
            Anyone who deals with frequent fingerprints on phones, tablets, or car screens and wants a reusable option instead of disposable wipes.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Watch-outs</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Use sparingly — too much liquid can leave streaks on some screens.</li>
            <li>Not a substitute for a dedicated camera lens cleaner.</li>
            <li>Check the live Amazon listing for current price and pack size.</li>
          </ul>

          {/* Video near the bottom */}
          <div className="mb-10 rounded-xl overflow-hidden">
            <video
              src="/ytt-touchscreen-cleaner.mp4"
              controls
              playsInline
              className="w-full h-auto"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            As an Amazon Associate, Gadgets Finds earns from qualifying purchases. Prices and availability change on Amazon.
          </p>

          {/* Full AmazonDealBox at the bottom (black style + disclosure) */}
          <AmazonDealBox
            productName="YTT Touchscreen Screen Cleaner Spray"
            href={AMAZON}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
