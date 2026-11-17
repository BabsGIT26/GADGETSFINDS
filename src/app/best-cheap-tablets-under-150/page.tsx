import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

export const metadata: Metadata = {
  title: "Best Cheap Tablets Under $150 in 2026 | Gadgets Finds",
  description: "Best tablets under $150 for streaming, browsing, and light use. Fire HD 10, Galaxy Tab, Lenovo, and renewed iPad options.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/best-cheap-tablets-under-150" },
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
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Best Cheap Tablets Under $150 in 2026</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Tablets under $150 are capable for streaming, web browsing, reading, and light use. They work well as secondary devices or first tablets for kids and students.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Top Picks</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-3 mb-8">
            <li><strong>Amazon Fire HD 10</strong> — Best overall for most people. Excellent for media, long battery life, frequent discounts.</li>
            <li><strong>Samsung Galaxy Tab A9 / A9+</strong> — Better display and full Android when on sale near $150.</li>
            <li><strong>Lenovo Tab M series</strong> — Solid balanced Android alternative with expandable storage on many models.</li>
            <li><strong>Renewed iPad (9th gen)</strong> — Best quality if you can find one close to $150.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">What to Expect</h2>
          <p className="text-muted-foreground mb-8">
            Smooth streaming and browsing, 6–10 hours battery, plastic builds, and basic cameras. 64GB is more comfortable than 32GB. Expandable storage is a plus on Fire and many Lenovo models.
          </p>

          <AmazonDealBox
            productName="Tablets Under $150"
            href="https://www.amazon.com/s?k=tablets+under+150&tag=gadgetsfindswebsite-20"
          />

          <p className="text-sm text-muted-foreground mt-8">Prices fluctuate. Check current configurations and recent reviews on Amazon.</p>
        </div>
      </article>
      <Footer />
    </>
  );
}
