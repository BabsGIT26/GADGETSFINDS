import AmazonDealBox from "@/components/common/AmazonDealBox";
import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON = "https://www.amazon.com/dp/B0CL61F39H?tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "PlayStation 5 Review — Gadgets Finds",
  description: "PlayStation 5 Slim overview: performance, games, storage, and who should buy it.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/playstation-5-article" },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="relative min-h-[40vh] overflow-hidden">
          <AppImage src="/assets/images/playstation_5.png" alt="PlayStation 5" className="w-full h-[42vh] object-cover" />
        </div>
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Gaming</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">PlayStation 5</h1>
          <p className="text-muted-foreground mb-8">
            Sony’s current-gen console, widely sold as the PS5 Slim (disc model ASIN B0CL61F39H).
            The PlayStation 6 is not out. This page is about the hardware you can buy now.
          </p>
          <AmazonDealBox productName="PlayStation 5 Slim (disc)" href={AMAZON} />
          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            The PS5 is a 4K-capable home console with a fast SSD and the DualSense controller
            (adaptive triggers, haptic feedback). The Slim revision is smaller than the 2020 launch
            unit and typically includes about 1TB of storage and a disc drive on the disc SKU.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3">Who it is for</h2>
          <p className="text-muted-foreground mb-4">
            Best if you want first-party Sony games (God of War, Spider-Man, Last of Us) and a
            living-room system. A mid/high-end PC can exceed it in raw frames; the PS5 wins on
            price-to-exclusive-games for many living rooms.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3">Watch-outs</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Digital vs disc: disc edition plays physical games and 4K Blu-ray.</li>
            <li>Storage fills fast; a compatible SSD expansion is often worth planning.</li>
            <li>Confirm the seller is Amazon or Sony-authorized — fake consoles exist.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            Still the default Sony box in 2026. Don’t wait for a rumored PS6 if you want to play
            today’s catalog.
          </p>
          <AmazonDealBox productName="PlayStation 5 Slim (disc)" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
