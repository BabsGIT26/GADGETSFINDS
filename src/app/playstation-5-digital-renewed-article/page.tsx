import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON =
  "https://www.amazon.com/dp/B0966NLTZS?tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "PS5 Digital Edition Used Very Good — $539.99 | Gadgets Finds",
  description:
    "PlayStation 5 Digital Edition, Used - Very Good, listed at $539.99 on Amazon. Original model, 825GB SSD, no disc drive. Price changes.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/playstation-5-digital-renewed-article",
  },
  openGraph: {
    title: "PS5 Digital Edition — Used Very Good — $539.99",
    description: "Used - Very Good Digital Edition, 825GB, $539.99. Price changes.",
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
    title: "PS5 Digital Edition — Used Very Good — $539.99",
    images: ["/assets/images/playstation_5.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="w-full bg-muted flex items-center justify-center py-10">
          <AppImage
            src="/assets/images/playstation_5.png"
            alt="PlayStation 5 Digital Edition"
            className="max-h-[400px] w-auto max-w-[85%] object-contain"
          />
        </div>

        <div className="container mx-auto px-4 pt-4 pb-10 max-w-3xl">
          <p className="text-sm text-black mb-6">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Gaming deal
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            PlayStation 5 Digital Edition — Used Very Good — $539.99
          </h1>
          <p className="text-muted-foreground mb-6">
            Amazon currently lists this <strong>PlayStation 5 Digital Edition</strong> at{" "}
            <strong>$539.99</strong>, condition <strong>Used - Very Good</strong>. Original
            model, <strong>825GB SSD</strong>, no disc drive. Not the Slim 1TB, not a new unit.
            Price and stock change on Amazon.
          </p>

          <a
            href={AMAZON}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
          >
            VIEW ON AMAZON
          </a>

          <h2 className="text-2xl font-bold mt-10 mb-3">What this listing is</h2>
          <p className="text-muted-foreground mb-4">
            Digital means PlayStation Store only. No physical discs, no 4K Blu-ray, unless you
            add a compatible disc drive later. The card lists 16GB GDDR6 and an 825GB SSD.
            Condition on the listing is Used - Very Good, not New.
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Model: PlayStation 5 Digital Edition (original, not Slim)</li>
            <li>Storage: 825GB SSD</li>
            <li>Condition: Used - Very Good</li>
            <li>Listed price: $539.99 (changes)</li>
            <li>
              In the box on the card: console, DualSense, USB cable, HDMI cable — confirm on the
              live page
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Digital vs disc</h2>
          <p className="text-muted-foreground mb-4">
            Buy this if you only download games. Buy a disc model if you still use physical
            games. GTA 6’s boxed edition is a download code, so the missing drive matters less
            for that title.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Before you click</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Used - Very Good is not new. Read the condition notes and return window.</li>
            <li>Confirm seller, completeness, and that the price is still $539.99.</li>
            <li>
              825GB is smaller than the Slim’s 1TB. Plan an M.2 if you install several AAA games.
            </li>
            <li>Do not treat this price as locked.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            At $539.99 this is a Used Very Good Digital Edition if you want downloads only and
            you accept used condition. Skip it if you need discs or a new unit. Open the listing
            before you pay.
          </p>

          <AmazonDealBox
            productName="PS5 Digital Edition — Used Very Good"
            href={AMAZON}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
