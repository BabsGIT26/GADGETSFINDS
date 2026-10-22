 import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON_PS5_DIGITAL =
  "https://www.amazon.com/gp/product/B0966NLTZS?tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "PS5 Digital Edition Used Very Good — $539.99 | Gadgets Finds",
  description:
    "Amazon listing: Playstation 5 Digital Edition, Used Very Good, $539.99. Price and stock change.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/playstation-5-digital-renewed-article",
  },
  openGraph: {
    title: "PS5 Digital Edition — Used Very Good $539.99",
    description: "Used Very Good Digital Edition on Amazon. Price changes.",
    url: "https://www.gadgets-finds.com/playstation-5-digital-renewed-article",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: "/assets/images/playstation_5.png",
        width: 1200,
        height: 630,
        alt: "PlayStation 5 Digital Edition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "PS5 Digital Edition — Used Very Good $539.99",
    images: ["/assets/images/playstation_5.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-1 md:pt-1">
        <div className="w-full bg-muted flex items-center justify-center py-10 pb-2">
          <AppImage
            src="/assets/images/playstation_5.png"
            alt="PlayStation 5 Digital Edition"
            className="max-h-[400px] w-auto max-w-[85%] object-contain"
          />
        </div>

        <div className="container mx-auto px-4 pt-2 pb-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Gaming deal
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            PS5 Digital Edition — Used Very Good: $539.99
          </h1>
          <p className="text-muted-foreground mb-8">
            Amazon currently lists a{" "}
            <strong>PlayStation 5 Digital Edition (Used — Very Good)</strong> at{" "}
            <strong>$539.99</strong>. No disc drive. Price and stock change on Amazon.
          </p>

          <a
            href={AMAZON_PS5_DIGITAL}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
          >
            VIEW ON AMAZON
          </a>

          <h2 className="text-2xl font-bold mt-10 mb-3">What this listing is</h2>
          <p className="text-muted-foreground mb-4">
            This is a <strong>Used — Very Good</strong> Digital Edition PS5, not a brand-new disc Slim.
            It plays PS5 and PS4 digital games from the PlayStation Store. It does not play physical
            discs or 4K Blu-rays unless you add a compatible disc drive later.
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Condition: Used — Very Good</li>
            <li>Model: Digital Edition (no disc drive)</li>
            <li>Deal price: $539.99</li>
            <li>ASIN: B0966NLTZS</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Digital vs disc</h2>
          <p className="text-muted-foreground mb-4">
            Buy this if you are fine with PSN downloads only. Buy a disc model if you still use
            physical games or want 4K Blu-ray. For a download-only title, the missing drive is less important.
          </p>

          <div className="my-8 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/RkC0l4iekYo"
              title="PlayStation 5 Hardware Reveal"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">Storage and condition notes</h2>
          <p className="text-muted-foreground mb-4">
            Used — Very Good means the unit has been checked and works, with light cosmetic wear possible.
            Confirm the exact storage, what is included (console, DualSense, cables), seller, and return
            window on the live Amazon page before you buy. Modern games fill storage quickly.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Watch-outs</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Check seller, condition notes, and return window on Amazon before buying.</li>
            <li>Confirm it is a complete kit: console, DualSense, HDMI, power cable.</li>
            <li>Storage fills up fast. An official-spec internal M.2 SSD can be added later if needed.</li>
            <li>Prices move. Recheck the live Amazon page.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-4">
            At $539.99 this Used Very Good Digital Edition is worth a look if you want a PS5 without a
            disc drive and you accept used condition. If you want physical games, skip this listing
            and get a disc Slim instead.
          </p>

          <AmazonDealBox
            productName="PS5 Digital Edition Used Very Good"
            href={AMAZON_PS5_DIGITAL}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
