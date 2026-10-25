import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import Link from "next/link";

const AMAZON = "https://www.amazon.com/s?k=magnetic+cable+organizer+USB-C&tag=gadgetsfindswebsmediavid-20";
const IMAGE = "https://m.media-amazon.com/images/I/61wCD0dNMUL.jpg";

export const metadata: Metadata = {
  title: "USB-C Cable Organizer Review — Gadgets Finds",
  description: "Magnetic cable holder that keeps charging cables tidy on your desk or nightstand.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/usb-c-cable-organizer" },
  openGraph: {
    title: "USB-C Cable Organizer",
    description: "Keep cables organized with magnetic clips.",
    url: "https://www.gadgets-finds.com/usb-c-cable-organizer",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "USB-C Cable Organizer" }],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Desk</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">USB-C Cable Organizer</h1>
          <p className="text-muted-foreground mb-6">
            Small magnetic clips that hold charging cables in place so they do not tangle or fall behind furniture.
          </p>

          <div className="mb-6">
            <a href={AMAZON} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md">
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <img src={IMAGE} alt="USB-C Cable Organizer" className="w-full max-w-[280px] h-auto rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            Magnetic cable organizers stick to the side of a desk, nightstand, or monitor and hold the end of a USB-C cable ready for use. Some models also include adhesive pads for non-metal surfaces.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            Mount one next to your laptop or phone charging spot. Grab the cable when you need it, then snap it back so it does not slide away. Useful for keeping multiple cables separate.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Strengths and limitations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Keeps cables accessible</li>
            <li>Reduces clutter</li>
            <li>Easy to install</li>
          </ul>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Magnets may not hold thick cables</li>
            <li>Adhesive versions can leave residue</li>
          </ul>

          <AmazonDealBox productName="USB-C Cable Organizer" href={AMAZON} />

          <div className="flex justify-end mt-8 mb-2">
            <Link
              href="/mini-gadgets"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white font-medium text-xs rounded transition-colors"
            >
              ← Back to Mini Gadgets
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
