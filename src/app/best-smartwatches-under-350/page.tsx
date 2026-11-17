import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

export const metadata: Metadata = {
  title: "Best Smartwatches Under $350 in 2026 | Gadgets Finds",
  description: "Best smartwatches under $350 for iPhone and Android. Apple Watch SE, Samsung Galaxy Watch, Garmin, and Pixel Watch options.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/best-smartwatches-under-350" },
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
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Best Smartwatches Under $350 in 2026</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Under $350 you can get excellent fitness tracking, notifications, and health features. Match the watch to your phone and priorities.
          </p>

          <ul className="list-disc pl-5 text-muted-foreground space-y-3 mb-8">
            <li><strong>Apple Watch SE</strong> — Best for iPhone users. Polished software and strong ecosystem.</li>
            <li><strong>Samsung Galaxy Watch</strong> — Best Android all-rounder, especially with Samsung phones.</li>
            <li><strong>Garmin Venu / Forerunner</strong> — Best battery life and serious fitness tracking.</li>
            <li><strong>Previous-gen Pixel Watch</strong> — Clean Wear OS for Google users (on sale).</li>
          </ul>

          <AmazonDealBox
            productName="Smartwatches Under $350"
            href="https://www.amazon.com/s?k=smartwatch+under+350&tag=gadgetsfindswebsite-20"
          />

          <p className="text-sm text-muted-foreground mt-8">Check current prices and band options. Sales frequently bring stronger models into this budget.</p>
        </div>
      </article>
      <Footer />
    </>
  );
}
