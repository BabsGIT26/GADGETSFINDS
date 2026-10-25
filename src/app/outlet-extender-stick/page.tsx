import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import Link from "next/link";

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
          <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
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

          <h2 className="text-2xl font-bold mt-10 mb-3">The problem it solves</h2>
          <p className="text-muted-foreground mb-4">
            In many homes, wall outlets end up blocked once a couch, bed, or desk is placed against the wall. Reaching them usually means moving heavy furniture or crawling behind it. Outlet extender sticks plug into the wall outlet and bring the sockets forward so you can use them more easily.
          </p>
          <p className="text-muted-foreground mb-4">
            Most models are telescoping and range from roughly 18 to 35 inches when extended. Some also rotate at the base or the head, which helps when the original outlet is horizontal or in a tight corner.
          </p>

          <div className="my-8 flex justify-center">
            <img
              src="https://s.yimg.com/lo/mysterio/api/b4a489a9106ad419e74f886e1491c42324ee363187f7bc2f204c62ba6955fbaa/lightyear_networkapi/resizefill_w1200%3Bquality_80%3Bformat_webp/https%3A%2F%2Fd29szjachogqwa.cloudfront.net%2Fimages%2Fuser-uploaded%2F71rvcckj7dl._ac_sl1500__5767.jpg"
              alt="Outlet extender behind a couch"
              className="w-full max-w-lg rounded-xl"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">Typical features</h2>
          <p className="text-muted-foreground mb-4">
            Common versions include two or more AC outlets on the front face. Higher-end models add USB-A and USB-C ports so you can charge phones and tablets without extra adapters. A few include a small ledge or shelf for resting a phone while charging.
          </p>
          <p className="text-muted-foreground mb-4">
            Installation is usually just plugging it into the wall. Some come with adhesive strips if you want to mount it more securely, though many people simply let it rest behind the furniture.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who finds it useful</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>People with outlets blocked by sofas or beds</li>
            <li>Renters who can’t easily move furniture</li>
            <li>Anyone who wants easier access for chargers and lamps</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            It’s less useful if you need a very long run (traditional extension cords are better for that) or if you want a full power strip with surge protection on the floor.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Things to check</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Maximum and minimum extension length</li>
            <li>Number and type of outlets (AC only vs AC + USB)</li>
            <li>Whether the head rotates and how far</li>
            <li>Build quality and current price on the listing</li>
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
