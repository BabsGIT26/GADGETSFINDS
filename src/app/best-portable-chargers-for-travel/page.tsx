import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

export const metadata: Metadata = {
  title: "Best Portable Chargers for Travel in 2026 | Gadgets Finds",
  description: "Best power banks for travel. Capacity, airline rules, charging speed, and top recommendations for 2026.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/best-portable-chargers-for-travel" },
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
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Best Portable Chargers for Travel in 2026</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            A good power bank keeps phones and tablets running during travel. Focus on capacity, USB-C Power Delivery, weight, and airline compliance.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Recommendations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-3 mb-8">
            <li><strong>20,000mAh Anker-class</strong> — Best overall for most travelers. 3–5 phone charges.</li>
            <li><strong>Baseus / UGREEN 20K–25K PD</strong> — Strong value with fast charging and displays.</li>
            <li><strong>Slim 10,000mAh</strong> — Best for light packing and short trips.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Airline Notes</h2>
          <p className="text-muted-foreground mb-8">
            Power banks must go in carry-on luggage. Most 20,000mAh banks (~74Wh) are accepted. Always confirm with your airline. Avoid no-name brands with unrealistic capacity claims.
          </p>

          <AmazonDealBox
            productName="Portable Chargers & Power Banks"
            href="https://www.amazon.com/s?k=portable+charger+power+bank&tag=gadgetsfindswebsite-20"
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
