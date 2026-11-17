import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

export const metadata: Metadata = {
  title: "Best Amazon Deals This Week (50%+ Off) | Gadgets Finds",
  description: "How to find genuine 50%+ off Amazon deals. Categories that discount heavily and tips to avoid fake discounts.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/best-amazon-deals-this-week" },
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

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Deals Guide</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Best Amazon Deals This Week (50%+ Off)</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Amazon deals at 50% off or higher change multiple times per day. The best approach is knowing where to look and how to verify a real discount.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Categories That Often Hit 50%+</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-8">
            <li>Amazon Devices (Fire tablets, Echo, Blink)</li>
            <li>Headphones and earbuds (especially previous-gen)</li>
            <li>Kitchen appliances and gadgets</li>
            <li>Robot vacuums (budget and mid-range)</li>
            <li>Phone accessories and chargers</li>
            <li>Home organization and storage</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">How to Spot Real Deals</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-8">
            <li>Check Today’s Deals and Outlet sections</li>
            <li>Verify the previous price was legitimate (avoid inflated list prices)</li>
            <li>Prefer items with strong recent reviews (1,000+ ratings)</li>
            <li>Act quickly on lightning deals</li>
          </ul>

          <AmazonDealBox
            productName="Amazon Today's Deals"
            href="https://www.amazon.com/gp/goldbox?tag=gadgetsfindswebsite-20"
          />

          <p className="text-sm text-muted-foreground mt-8">
            Deals change constantly. Always confirm the current price and seller on Amazon before buying.
          </p>
        </div>
      </article>
      <Footer />
    </>
  );
}
