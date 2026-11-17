import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

export const metadata: Metadata = {
  title: "Best PS5 Accessories Worth Buying in 2026 | Gadgets Finds",
  description: "The most useful PS5 accessories in 2026: SSD expansion, DualSense Edge, headsets, charging docks, and what to skip.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/best-ps5-accessories-2026" },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-4xl">
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases if you buy through links on this page, at no extra cost to you. Prices and availability change on Amazon.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Buying Guide</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Best PS5 Accessories Worth Buying in 2026</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            The right accessories improve storage, comfort, and daily use. Not every accessory is worth buying — here are the ones that actually matter.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">1. Compatible Internal SSD (Highest Impact)</h2>
          <p className="text-muted-foreground mb-6">
            Modern PS5 games are large. A 1TB or 2TB compatible M.2 SSD with heatsink is the single best upgrade for most owners. Look for WD Black SN850P, Samsung 990 Pro (with heatsink), or other officially compatible drives.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">2. Quality Headset</h2>
          <p className="text-muted-foreground mb-6">
            A good headset improves positional audio and is more practical than TV speakers for late-night play. Official Pulse models or strong third-party options (SteelSeries, Razer) are solid choices.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">3. DualSense Edge (For Specific Players)</h2>
          <p className="text-muted-foreground mb-6">
            Worth it if you want back buttons, replaceable sticks, and custom profiles. Excellent for competitive or long sessions. Not necessary for casual single-player gaming.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Other Useful Add-Ons</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-8">
            <li>Controller charging dock ($25–$50)</li>
            <li>Official or quality vertical stand</li>
            <li>Media remote if you stream heavily</li>
          </ul>

          <AmazonDealBox
            productName="PS5 Accessories"
            href="https://www.amazon.com/s?k=ps5+accessories&tag=gadgetsfindswebsite-20"
          />

          <p className="text-sm text-muted-foreground mt-8">
            Always confirm SSD compatibility and current pricing on Amazon. Prices change frequently.
          </p>
        </div>
      </article>
      <Footer />
    </>
  );
}
