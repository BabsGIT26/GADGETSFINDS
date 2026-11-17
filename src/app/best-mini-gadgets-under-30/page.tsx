import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

export const metadata: Metadata = {
  title: "Best Mini Gadgets Under $30 in 2026 | Gadgets Finds",
  description: "Practical mini gadgets under $30 that solve everyday problems: phone stands, hubs, trackers, cable organizers, and more.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/best-mini-gadgets-under-30" },
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
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Best Mini Gadgets Under $30 in 2026</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            The best low-cost gadgets solve small daily annoyances. Focus on usefulness over novelty.
          </p>

          <ul className="list-disc pl-5 text-muted-foreground space-y-3 mb-8">
            <li>Magnetic phone stand / grip</li>
            <li>Basic USB-C multi-port hub</li>
            <li>Entry Bluetooth item tracker</li>
            <li>Cable organizers and magnetic ties</li>
            <li>Slim 5,000mAh mini power bank</li>
            <li>Bluetooth camera shutter remote</li>
          </ul>

          <AmazonDealBox
            productName="Mini Gadgets Under $30"
            href="https://www.amazon.com/s?k=mini+gadgets+under+30&tag=gadgetsfindswebsite-20"
          />

          <p className="text-sm text-muted-foreground mt-8">Simple, well-reviewed items tend to stay useful longest. Check recent durability feedback before buying.</p>
        </div>
      </article>
      <Footer />
    </>
  );
}
