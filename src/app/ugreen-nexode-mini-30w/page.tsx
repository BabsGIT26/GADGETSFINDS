import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import Link from "next/link";

const AMAZON = "https://www.amazon.com/UGREEN-Charger-Foldable-Compact-Adapter/dp/B0CBJQMC9H?tag=gadgetsfindswebsmediavid-20";
const IMAGE = "https://m.media-amazon.com/images/I/21QwqmpWChL.jpg";

export const metadata: Metadata = {
  title: "UGREEN Nexode Mini 30W Review — Gadgets Finds",
  description: "Ultra-compact GaN 30W USB-C charger with foldable plug. Charges phones and tablets quickly.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/ugreen-nexode-mini-30w" },
  openGraph: {
    title: "UGREEN Nexode Mini 30W",
    description: "Tiny GaN charger that fits in a pocket.",
    url: "https://www.gadgets-finds.com/ugreen-nexode-mini-30w",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "UGREEN Nexode Mini 30W" }],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <div className="flex justify-end mb-6">
            <div className="inline-block bg-zinc-900 border-2 border-red-500 rounded-2xl p-1.5 shadow-xl shadow-red-500/25">
              <Link
                href="/mini-gadgets"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
              >
                ← Back to Mini Gadgets
              </Link>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Charging</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">UGREEN Nexode Mini 30W</h1>
          <p className="text-muted-foreground mb-6">
            A very small GaN USB-C charger that delivers 30W from a foldable plug design.
          </p>

          <div className="mb-6">
            <a href={AMAZON} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md">
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <img src={IMAGE} alt="UGREEN Nexode Mini 30W" className="w-full max-w-[280px] h-auto rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            The Nexode Mini 30W uses Gallium Nitride to keep the body tiny while still outputting 30W. The foldable plug makes it easy to pack. It supports USB-C Power Delivery and works with phones, tablets, and some laptops.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            Throw it in a bag or pocket for travel. It can charge an iPhone 16 Pro to about 55-60% in 30 minutes. Many people keep one at home and one in a travel kit.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Strengths and limitations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Very small for 30W</li>
            <li>Foldable plug</li>
            <li>Fast for phones</li>
          </ul>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Single port</li>
            <li>Not enough for high-power laptops</li>
          </ul>

          <AmazonDealBox productName="UGREEN Nexode Mini 30W" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
