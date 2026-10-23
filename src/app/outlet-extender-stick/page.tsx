import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON = "https://www.amazon.com/Extender-Stick-360%C2%B0-Rotating-Adjustable-Protection/dp/B0H3P79YX2?tag=gadgetsfindswebsmediavid-20";

export const metadata: Metadata = {
  title: "Outlet Extender Stick for Behind Couch Review — Gadgets Finds",
  description:
    "Extendable outlet stick that brings hard-to-reach outlets behind couches, desks, and beds within easy reach.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/outlet-extender-stick",
  },
  openGraph: {
    title: "Outlet Extender Stick for Behind Couch",
    description: "Reach hidden outlets without moving furniture.",
    url: "https://www.gadgets-finds.com/outlet-extender-stick",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/51DW7RN3fEL.jpg",
        width: 1200,
        height: 630,
        alt: "Outlet Extender Stick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "Outlet Extender Stick for Behind Couch",
    images: ["https://m.media-amazon.com/images/I/51DW7RN3fEL.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an
            Amazon Associate. We may earn from qualifying purchases if you buy through links on this
            page, at no extra cost to you. Prices and availability change on Amazon.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Home
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Outlet Extender Stick for Behind Couch
          </h1>
          <p className="text-muted-foreground mb-6">
            Extendable stick that brings outlets hidden behind couches, desks, and beds within easy reach without moving furniture.
          </p>

          <div className="mb-6">
            <a
              href={AMAZON}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
            >
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <img
              src="https://m.media-amazon.com/images/I/51DW7RN3fEL.jpg"
              alt="Outlet Extender Stick for Behind Couch"
              className="w-full max-w-[280px] h-auto rounded-xl"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What problem it solves</h2>
          <p className="text-muted-foreground mb-4">
            Many living rooms and bedrooms have outlets that become unreachable once a couch, bed, or desk is pushed against the wall. This extender plugs into the wall outlet and brings the sockets forward so you can access them without moving heavy furniture.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            The stick is usually placed behind a sofa or nightstand. The front end has outlets (and sometimes USB ports depending on the model), so you can plug in lamps, chargers, or other devices more easily. Some versions also rotate, which helps when the original outlet is at an awkward angle.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Things to check before buying</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Maximum extension length (some are 22–34 inches, others differ)</li>
            <li>Whether it includes USB ports or only AC outlets</li>
            <li>If the rotating head matches your setup</li>
            <li>Current price and included accessories on the Amazon listing</li>
          </ul>

                     <div className="my-8 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/RGU_XLSoH9A"
              title="Outlet Extender Stick"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            As an Amazon Associate, Gadgets Finds earns from qualifying purchases. Prices and availability change on Amazon.
          </p>

          <AmazonDealBox
            productName="Outlet Extender Stick for Behind Couch"
            href={AMAZON}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
