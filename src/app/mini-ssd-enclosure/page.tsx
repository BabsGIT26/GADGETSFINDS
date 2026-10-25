import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON = "https://www.amazon.com/s?k=MagSafe+SSD+enclosure+USB-C&tag=gadgetsfindswebsmediavid-20";
const IMAGE = "https://m.media-amazon.com/images/I/61Qd9Z9caRL.jpg";

export const metadata: Metadata = {
  title: "Mini SSD Enclosure Review — Gadgets Finds",
  description: "Compact MagSafe-compatible enclosure for NVMe SSDs. Expand storage on your phone or laptop.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/mini-ssd-enclosure" },
  openGraph: {
    title: "Mini SSD Enclosure",
    description: "Small magnetic enclosure for portable SSD storage.",
    url: "https://www.gadgets-finds.com/mini-ssd-enclosure",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "Mini SSD Enclosure" }],
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

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Storage</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Mini SSD Enclosure</h1>
          <p className="text-muted-foreground mb-6">
            A compact enclosure that lets you use an NVMe SSD as portable storage, often with magnetic attachment for phones.
          </p>

          <div className="mb-6">
            <a href={AMAZON} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md">
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <img src={IMAGE} alt="Mini SSD Enclosure" className="w-full max-w-[280px] h-auto rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            These enclosures accept a small M.2 NVMe SSD and connect via USB-C. Some models include MagSafe magnets so they can attach to the back of an iPhone for direct recording or file transfer. They are useful for creators who shoot high-bitrate video.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            Attach it to a phone to record video directly to the SSD, or use it as portable storage between a laptop and other devices. Transfer large files quickly without relying on cloud storage.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Strengths and limitations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Expands storage significantly</li>
            <li>Fast USB-C speeds</li>
            <li>Portable</li>
          </ul>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Requires a separate SSD</li>
            <li>May heat up during heavy use</li>
          </ul>

          <AmazonDealBox productName="Mini SSD Enclosure" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
