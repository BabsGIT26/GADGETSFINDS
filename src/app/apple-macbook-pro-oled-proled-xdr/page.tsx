import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apple's First Touchscreen MacBook Pro with PROLED XDR OLED Display — Gadgets Finds",
  description:
    "Full details on Apple's groundbreaking MacBook Pro with tandem OLED PROLED XDR display, touchscreen, Dynamic Island, M5 Pro/Max, and up to 24 hours battery. Pre-orders open.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/apple-macbook-pro-oled-proled-xdr",
  },
  openGraph: {
    title: "Apple's First Touchscreen MacBook Pro with PROLED XDR Display",
    description: "Tandem OLED, 2000 nits, touch, Dynamic Island, M5 Pro & Max. The biggest MacBook Pro redesign in years.",
    url: "https://www.gadgets-finds.com/apple-macbook-pro-oled-proled-xdr",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: "https://images.macrumors.com/t/2bugNDX7f6zrI_wlLg7-bwMKe2U=/2500x/article-new/2026/10/Apple-MacBook-Pro-with-PROLED-XDR-Display-family-lineup-feature.jpg",
        width: 1200,
        height: 630,
        alt: "Apple MacBook Pro with PROLED XDR Display",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apple's First Touchscreen MacBook Pro with PROLED XDR Display",
    description: "Tandem OLED, 2000 nits, touch, Dynamic Island, M5 Pro & Max.",
    images: ["https://images.macrumors.com/t/2bugNDX7f6zrI_wlLg7-bwMKe2U=/2500x/article-new/2026/10/Apple-MacBook-Pro-with-PROLED-XDR-Display-family-lineup-feature.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-20 md:pt-16">
        <div className="container mx-auto px-4 py-4 md:py-8 max-w-4xl text-sm md:text-base">
          <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
            As an Amazon Associate, we may earn from qualifying purchases if you buy through links on this page.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Mac</p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Apple's First Touchscreen MacBook Pro with PROLED XDR OLED Display
          </h1>

          <div className="mb-6">
            <a
              href="https://www.amazon.com/dp/B0HPM6QTTM?tag=gadgetsfindswebsmediavid-20"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md text-base md:text-lg"
            >
              VIEW ON AMAZON
            </a>
          </div>

          <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
            On October 28, 2026, Apple finally did what many thought it never would. At its “Pro and Tell” event in Los Angeles, the company unveiled the all-new MacBook Pro with PROLED XDR Display — the first Mac ever with a touchscreen, and the first MacBook Pro to use OLED. Available in 14-inch and 16-inch sizes, it pairs a stunning tandem OLED panel with M5 Pro and M5 Max chips, a Dynamic Island, a glowing Apple logo, and a thinner, lighter design. Pre-orders are open now, with availability starting November 6.
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-start mt-8 mb-8">
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-bold mb-3">The Display: PROLED XDR Tandem OLED</h2>
              <p className="text-muted-foreground mb-3 text-sm md:text-base leading-relaxed">
                Apple calls the new screen the PROLED XDR — a tandem OLED design that stacks two self-illuminating pixel layers. The result is exceptional brightness and contrast that mini-LED simply cannot match.
              </p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1.5 mb-4 text-sm md:text-base">
                <li>Up to <strong>2,000 nits</strong> peak HDR and SDR brightness</li>
                <li><strong>10,000,000:1</strong> contrast ratio for true black blacks</li>
                <li>ProMotion with variable refresh rate from 10Hz to 120Hz</li>
                <li>Wide color covering both P3 and Adobe RGB</li>
                <li>Display engine that calibrates every pixel for content, temperature, and environment</li>
                <li>Touch sensor built directly into the panel (not layered on top) for lower latency</li>
              </ul>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Screen sizes are slightly larger than before thanks to thinner bezels: 14.2 inches and 16.3 inches. The notch is gone, replaced by a Dynamic Island that can show Live Activities, Siri, and more — the same interface iPhone users already know.
              </p>
            </div>
            <img
              src="https://images.macrumors.com/t/2bugNDX7f6zrI_wlLg7-bwMKe2U=/2500x/article-new/2026/10/Apple-MacBook-Pro-with-PROLED-XDR-Display-family-lineup-feature.jpg"
              alt="MacBook Pro PROLED XDR family lineup"
              className="w-36 md:w-56 h-auto rounded-lg object-contain flex-shrink-0 mx-auto md:mx-0"
            />
          </div>

          <div className="my-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Watch Apple's Official Promo</h2>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/hnZI5uUSdEo"
                title="New MacBook Pro with PROLED XDR Display"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start mt-10 mb-8">
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-bold mb-3">Touch Comes to Mac for the First Time</h2>
              <p className="text-muted-foreground mb-3 text-sm md:text-base leading-relaxed">
                Steve Jobs famously opposed touchscreen Macs. Apple has now reversed that stance. The new MacBook Pro supports multi-touch gestures directly on the display: tap, swipe, scroll, pinch-to-zoom, and even file dragging.
              </p>
              <p className="text-muted-foreground mb-3 text-sm md:text-base leading-relaxed">
                It is not a convertible 2-in-1. The laptop stays in traditional clamshell form. You reach up and touch the screen when it makes sense, while still having the full keyboard and trackpad available. Apple has also reinforced the hinge so the display stays stable when you press on it.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                System gesture APIs are available for developers, so apps can be optimized for touch over time. macOS 27 (codenamed Golden Gate) brings the necessary software support.
              </p>
            </div>
            <img
              src="https://platform.theverge.com/wp-content/uploads/sites/2/2026/10/Apple-MacBook-Pro-with-PROLED-XDR-Display-lifestyle-remote-work-261028.jpg?quality=90&strip=all&w=1200"
              alt="Person using the touchscreen on the new MacBook Pro"
              className="w-36 md:w-56 h-auto rounded-lg object-contain flex-shrink-0 mx-auto md:mx-0"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-3">Performance: M5 Pro and M5 Max</h2>
          <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">
            These models use the same high-end chips as the existing MacBook Pro lineup: M5 Pro and M5 Max. Apple is selling the new OLED versions alongside the mini-LED models and the newly announced M6 14-inch MacBook Pro.
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1.5 mb-6 text-sm md:text-base">
            <li>M5 Pro: up to 18-core CPU and 20-core GPU</li>
            <li>M5 Max: up to 18-core CPU and 40-core GPU</li>
            <li>Unified memory up to 128GB</li>
            <li>Storage up to 16TB</li>
            <li>On-device AI capabilities for local large language models</li>
            <li>Up to 24 hours of battery life</li>
          </ul>

          <div className="flex flex-col md:flex-row gap-6 items-start mt-8 mb-8">
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-bold mb-3">Design Changes</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1.5 text-sm md:text-base">
                <li>Thinner and lighter than the previous generation (14-inch around 3.0 lb / 1.38 kg)</li>
                <li>Glowing Apple logo returns on the lid</li>
                <li>Dynamic Island instead of the notch</li>
                <li>Improved six-speaker audio system with deeper bass</li>
                <li>Still three Thunderbolt 5 ports, HDMI, SDXC card slot</li>
                <li>Wi-Fi 7 and Bluetooth 6.0</li>
                <li>Available in Silver and Space Black</li>
                <li>Nano-texture glass option available</li>
              </ul>
            </div>
            <img
              src="https://static0.xdaimages.com/wordpress/wp-content/uploads/2026/10/apple-oled-macbook-pro.jpg?w=1600&h=900&fit=crop"
              alt="MacBook Pro with vibrant OLED display"
              className="w-36 md:w-56 h-auto rounded-lg object-contain flex-shrink-0 mx-auto md:mx-0"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-3">Pricing and Availability</h2>
          <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">
            These are premium machines. Starting prices in the U.S.:
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1.5 mb-6 text-sm md:text-base">
            <li>14-inch with M5 Pro: from $2,899 ($2,749 education)</li>
            <li>16-inch with M5 Pro: from $3,399 ($3,199 education)</li>
            <li>14-inch with M5 Max: from $4,499 ($4,199 education)</li>
            <li>16-inch with M5 Max: from $4,799 ($4,499 education)</li>
          </ul>
          <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
            Pre-orders began October 28, 2026. Units start arriving on Friday, November 6, both online and in Apple Stores and authorized resellers.
          </p>

          <div className="mb-8">
            <a
              href="https://www.amazon.com/dp/B0HPM6QTTM?tag=gadgetsfindswebsmediavid-20"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md text-base md:text-lg"
            >
              CHECK PRICE ON AMAZON
            </a>
          </div>

          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-3">Who Is This For?</h2>
          <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">
            Colorists, video editors, photographers, 3D artists, and anyone who needs a portable reference-quality display will benefit most from the PROLED XDR panel. The touch support adds a new interaction layer for creative apps, while the M5 Pro and Max chips handle demanding workloads and on-device AI.
          </p>
          <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
            If you mainly need everyday performance, the new M6 14-inch MacBook Pro or a MacBook Air may be a better value. The OLED models sit at the top of the lineup and carry a premium price.
          </p>

          <AmazonDealBox productName="MacBook Pro PROLED XDR" href="https://www.amazon.com/dp/B0HPM6QTTM?tag=gadgetsfindswebsmediavid-20" />

          <div className="flex justify-end mt-8 mb-2">
            <Link
              href="/homepage"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white font-medium text-xs rounded transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
