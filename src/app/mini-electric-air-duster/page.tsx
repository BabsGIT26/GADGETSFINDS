import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON = "https://www.amazon.com/s?k=electric+air+duster+compressed&tag=gadgetsfindswebsmediavid-20";
const IMAGE = "https://m.media-amazon.com/images/I/71K3I5p0FDL.jpg";

export const metadata: Metadata = {
  title: "Mini Electric Air Duster Review — Gadgets Finds",
  description: "Cordless compressed air duster for cleaning keyboards, electronics, and hard-to-reach areas.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/mini-electric-air-duster" },
  openGraph: {
    title: "Mini Electric Air Duster",
    description: "Reusable electric air duster that replaces canned air.",
    url: "https://www.gadgets-finds.com/mini-electric-air-duster",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "Mini Electric Air Duster" }],
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

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Cleaning</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Mini Electric Air Duster</h1>
          <p className="text-muted-foreground mb-6">
            A small cordless blower that replaces disposable canned air for cleaning electronics.
          </p>

          <div className="mb-6">
            <a href={AMAZON} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md">
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <img src={IMAGE} alt="Mini Electric Air Duster" className="w-full max-w-[280px] h-auto rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            Electric air dusters use a small high-speed fan to blow dust out of keyboards, vents, cameras, and other devices. They are rechargeable via USB-C and come with different nozzle tips. Unlike canned air, they do not run out.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            Clean keyboards and laptop vents regularly. Use the narrow nozzles for camera sensors or between keyboard keys. Many models have multiple speed settings.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Strengths and limitations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Reusable and rechargeable</li>
            <li>No propellant gas</li>
            <li>Multiple nozzles</li>
          </ul>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Not as strong as some canned air</li>
            <li>Needs charging</li>
          </ul>

          <AmazonDealBox productName="Mini Electric Air Duster" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
