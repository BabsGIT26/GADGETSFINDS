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

          {/* Simple yellow button at the top */}
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

          {/* Product image right after the button */}
          <div className="mb-10 flex justify-center">
            <img
              src="https://m.media-amazon.com/images/I/51DW7RN3fEL.jpg"
              alt="Outlet Extender Stick for Behind Couch"
              className="w-full max-w-[280px] h-auto rounded-xl"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            A telescoping outlet extender designed for outlets blocked by furniture. It plugs into the wall and extends the outlets forward so you can reach them without pulling the couch or desk away from the wall.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Key features</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Extendable length for different furniture depths</li>
            <li>Rotating head for flexible positioning</li>
            <li>Multiple outlets on the front face</li>
            <li>Slim design that fits behind couches and desks</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Where it helps</h2>
          <p className="text-muted-foreground mb-4">
            Useful behind sofas, beds, nightstands, and desks where the outlet is hard to reach. It keeps the furniture flush against the wall while still giving you access to power.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Watch-outs</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Check the maximum extension length on the listing before buying.</li>
            <li>Confirm it matches your outlet type (standard US plug).</li>
            <li>Price and available ports vary by seller.</li>
          </ul>

          {/* YouTube video — same style as MacBook page */}
          <div className="my-8 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/iftP7v5lzD4"
              title="Outlet Extender Stick"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            As an Amazon Associate, Gadgets Finds earns from qualifying purchases. Prices and availability change on Amazon.
          </p>

          {/* Full AmazonDealBox at the bottom */}
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
