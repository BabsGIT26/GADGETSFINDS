import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON = "https://www.amazon.com/UGREEN-Gallium-Nitride-Charger-Black/dp/B091BGMKYS?tag=gadgetsfindswebsmediavid-20";
const IMAGE = "https://m.media-amazon.com/images/I/51nKMY3u+hL.jpg";

export const metadata: Metadata = {
  title: "Mini GaN Charger 65W Review — Gadgets Finds",
  description: "Compact GaN wall charger with multiple ports. Charges phones and laptops without taking much space.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/mini-gan-charger-65w" },
  openGraph: {
    title: "Mini GaN Charger 65W",
    description: "Small multi-port GaN charger for travel and daily use.",
    url: "https://www.gadgets-finds.com/mini-gan-charger-65w",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "Mini GaN Charger 65W" }],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Charging</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Mini GaN Charger 65W</h1>
          <p className="text-muted-foreground mb-6">
            A compact Gallium Nitride charger that delivers high wattage from a much smaller body than traditional chargers.
          </p>

          <div className="mb-6">
            <a href={AMAZON} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md">
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <img src={IMAGE} alt="Mini GaN Charger 65W" className="w-full max-w-[280px] h-auto rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            GaN (Gallium Nitride) chargers run cooler and can be made smaller while still delivering high power. A typical 65W mini GaN model can charge a phone, tablet, and even many laptops from one small brick with multiple USB-C ports.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            Ideal for travel or as a desk charger when you want one compact unit instead of several bulky adapters. Plug in multiple devices at once and share the power intelligently.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Strengths and limitations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Much smaller than older 65W chargers</li>
            <li>Multiple ports</li>
            <li>Efficient and cooler running</li>
          </ul>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Power is shared across ports</li>
            <li>May not max out every device simultaneously</li>
          </ul>

          <AmazonDealBox productName="Mini GaN Charger 65W" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
