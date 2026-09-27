import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON_PS5_DIGITAL_RENEWED =
  "https://www.amazon.com/PlayStation-5-Digital-Renewed/dp/B08Z8JV4RB?crid=1ZKHP42SRW995&dib=eyJ2IjoiMSJ9.LnCujeuiTvhXDINJUhWSLddwLnpuP7oC3a4v5CKlo_GKJyh80HbRG9EmjY_ID4eSAW-IZ3lOno0ipHJJrhb4-_PsMZPGy79QK1HMIHn23oRaJSoUBZJazCSUBbmCowdmiwZrmcxoxP5Oy3Ci50TMwfuuFDdcPbSSc8t2GWcgfqPRrqPTjqAcIOYOgn_NpUXtRy6Pwxecemqc2dXy19eHOgd7D323xD0882NSVWIGaac.20m03e3tf4_vimvVtwmoPVxTygw0WvdhdVtQxqRXIiY&dib_tag=se&keywords=PS5&qid=1790513558&s=videogames&sbo=GW1QB%2BmqAsHTPf1jTZRSDA%3D%3D&sprefix=ps5+%2Cvideogames%2C307&sr=1-10&linkCode=ll2&tag=gadgetsfindswebsite-20&linkId=da9adb3db3892201ea86e17d162f7336&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl";

export const metadata: Metadata = {
  title: "PS5 Digital Edition (Renewed) Deal — $568.99, 19% Off | Gadgets Finds",
  description:
    "Amazon deal: PlayStation 5 Digital Edition (Renewed), 1 TB storage, down 19% to $568.99. What this listing is, and who should buy it.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/playstation-5-digital-renewed-article",
  },
  openGraph: {
    title: "PS5 Digital Edition (Renewed) — $568.99",
    description: "19% off on Amazon. 1 TB Digital Edition, Renewed listing.",
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
    title: "PS5 Digital Edition (Renewed) — $568.99",
    description: "19% off on Amazon. 1 TB Digital Edition.",
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
            PlayStation 5 Digital Edition (Renewed): $568.99, 19% off
          </h1>
          <p className="text-muted-foreground mb-8">
            Amazon currently lists the <strong>PlayStation 5 Digital Edition (Renewed)</strong> at{" "}
            <strong>$568.99</strong>, about <strong>19% off</strong>. Storage is{" "}
            <strong>1 TB</strong>. This is the digital model: no disc drive. Price and stock change
            on Amazon.
          </p>

          <AmazonDealBox
            productName="PlayStation 5 Digital Edition (Renewed)"
            href={AMAZON_PS5_DIGITAL_RENEWED}
          />

          <h2 className="text-2xl font-bold mt-10 mb-3">What this listing is</h2>
          <p className="text-muted-foreground mb-4">
            This is a <strong>Renewed</strong> Digital Edition PS5, not a brand-new disc Slim. It
            plays PS5 and PS4 digital games from the PlayStation Store. It does not play physical
            discs or 4K Blu-rays unless you add a compatible disc drive later.
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Model: PlayStation 5 Digital Edition (Renewed)</li>
            <li>Storage: 1 TB SSD</li>
            <li>Deal price: $568.99 (−19%)</li>
            <li>ASIN: B08Z8JV4RB</li>
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
            <li>1 TB fills up fast. Budget an official-spec internal M.2 SSD if you want several AAA games installed.</li>
            <li>Prices move. Recheck the live Amazon page.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-4">
            At $568.99 this Renewed Digital Edition is worth a look if you want a PS5 without a
            disc drive and you accept Amazon Renewed condition. If you want physical games, skip
            this listing and get a disc Slim instead.
          </p>

          <AmazonDealBox
            productName="PlayStation 5 Digital Edition (Renewed)"
            href={AMAZON_PS5_DIGITAL_RENEWED}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
