import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON_PS5_DIGITAL_RENEWED =
  "https://www.amazon.com/dp/B09SVM186Y?linkCode=ll2&tag=gadgetsfindswebsite-20&language=en_US&ref_=as_li_ss_tl";

export const metadata: Metadata = {
  title: "PS5 Digital Edition (Renewed) Deal — $569.99 | Gadgets Finds",
  description:
    "Amazon deal: Playstation 5 Digital Edition PS5 Gaming Console (Renewed), 1 TB, now $569.99.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/playstation-5-digital-renewed-article",
  },
  openGraph: {
    title: "PS5 Digital Edition (Renewed) — $569.99",
    description: "Renewed Digital Edition on Amazon, 1 TB, $569.99.",
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
    title: "PS5 Digital Edition (Renewed) — $569.99",
    description: "Renewed Digital Edition, 1 TB, $569.99.",
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
            alt="PlayStation 5 Digital Edition (Renewed)"
            className="max-h-[400px] w-auto max-w-[85%] object-contain"
          />
        </div>

        <div className="container mx-auto px-4 pt-2 pb-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Gaming deal
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Playstation 5 Digital Edition PS5 Gaming Console (Renewed): $569.99
          </h1>
          <p className="text-muted-foreground mb-8">
            Amazon currently lists the{" "}
            <strong>Playstation 5 Digital Edition PS5 Gaming Console (Renewed)</strong> at{" "}
            <strong>$569.99</strong>. Storage is <strong>1 TB</strong>. This is the digital model:
            no disc drive. Price and stock change on Amazon.
          </p>

          <AmazonDealBox
            productName="Playstation 5 Digital Edition PS5 Gaming Console (Renewed)"
            href={AMAZON_PS5_DIGITAL_RENEWED}
            compact
          />

          <h2 className="text-2xl font-bold mt-10 mb-3">What this listing is</h2>
          <p className="text-muted-foreground mb-4">
            This is a <strong>Renewed</strong> Digital Edition PS5, not a brand-new disc Slim. It
            plays PS5 and PS4 digital games from the PlayStation Store. It does not play physical
            discs or 4K Blu-rays unless you add a compatible disc drive later.
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Model: Playstation 5 Digital Edition PS5 Gaming Console (Renewed)</li>
            <li>Storage: 1 TB SSD</li>
            <li>Deal price: $569.99</li>
            <li>ASIN: B09SVM186Y</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Digital vs disc</h2>
          <p className="text-muted-foreground mb-4">
            Buy this if you are fine with PSN downloads only. Buy a disc model if you still use
            physical games or want 4K Blu-ray. For a download-only title like GTA 6’s boxed edition
            (code in a box), the missing drive is less important.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Watch-outs on Renewed</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Check seller, condition notes, and return window on Amazon before buying.</li>
            <li>Confirm it is a complete kit: console, DualSense, HDMI, power cable.</li>
            <li>
              1 TB fills up fast. Budget an official-spec internal M.2 SSD if you want several AAA
              games installed.
            </li>
            <li>Prices move. Recheck the live Amazon page.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-4">
            At $569.99 this Renewed Digital Edition is worth a look if you want a PS5 without a
            disc drive and you accept Amazon Renewed condition. If you want physical games, skip
            this listing and get a disc Slim instead.
          </p>

          <AmazonDealBox
            productName="Playstation 5 Digital Edition PS5 Gaming Console (Renewed)"
            href={AMAZON_PS5_DIGITAL_RENEWED}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
