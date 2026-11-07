import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON =
  "https://www.amazon.com/dp/B0DGY63Z2H?tag=gadgetsfindswebsite-20";

const OG_IMAGE = "https://m.media-amazon.com/images/I/61vR3ovb2UL.jpg";

export const metadata: Metadata = {
  title: "PlayStation 5 Pro — 2TB | Gadgets Finds",
  description:
    "PS5 Pro with 2TB SSD, PSSR upscaling, faster ray tracing, and DualSense. No disc drive. Price and stock change on Amazon.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/playstation-5-pro-article",
  },
  openGraph: {
    title: "PlayStation 5 Pro — 2TB",
    description: "PSSR, stronger GPU, 2TB SSD, DualSense. Disc drive sold separately. Price changes.",
    url: "https://www.gadgets-finds.com/playstation-5-pro-article",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "PlayStation 5 Pro console with DualSense",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "PlayStation 5 Pro — 2TB",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-28 md:pt-16">
        <div className="container mx-auto px-4 pt-2 pb-10 max-w-3xl">
          <p className="text-sm text-foreground mb-3">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Gaming
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            PlayStation 5 Pro — 2TB
          </h1>
          <p className="text-muted-foreground mb-6">
            Sony’s mid-gen upgrade: stronger GPU, PlayStation Spectral Super Resolution (PSSR),
            faster ray tracing, 2TB SSD, Wi-Fi 7, and a DualSense controller. No disc drive in the box.
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

          <div className="my-8 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/6HaRMiTfvks"
              title="PlayStation 5 Pro Console - Reveal Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What this console is</h2>
          <p className="text-muted-foreground mb-4">
            The PS5 Pro is the higher-end PS5. Same game library, more GPU power, and a bigger SSD.
            ASIN B0DGY63Z2H. It plays PS5 and PS4 games. Pro-enhanced titles get the extra graphics features.
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Console: PlayStation 5 Pro (digital — no disc drive)</li>
            <li>Storage: 2TB custom SSD (usable space is less after system software)</li>
            <li>Graphics: ~67% more compute units than the standard PS5; up to ~45% faster rendering</li>
            <li>Upscaling: PSSR (PlayStation Spectral Super Resolution)</li>
            <li>Ray tracing: up to 2–3× faster than the standard PS5 in supported games</li>
            <li>Wireless: Wi-Fi 7</li>
            <li>Includes: Console, DualSense wireless controller, HDMI cable, power cable, stand feet</li>
            <li>Disc drive: not included — buy the separate Disc Drive for PS5 Consoles if you need discs</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who it is for</h2>
          <p className="text-muted-foreground mb-4">
            Buy the Pro if you have a 4K or 120Hz TV and care about higher frame rates or sharper modes
            in Pro-enhanced games. The 2TB drive also delays the need for an M.2 upgrade.
          </p>
          <p className="text-muted-foreground mb-4">
            Skip it if you mainly play on a 1080p TV, you still need physical discs and do not want to buy
            a drive, or a standard PS5 Digital is enough.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Before you click</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Confirm it is the official PS5 Pro on the live Amazon card, sold by Amazon.com when possible.</li>
            <li>List price has moved; recheck the live price before you pay.</li>
            <li>No disc drive. Physical games and 4K Blu-rays need the separate drive.</li>
            <li>Pro features only apply to games that have a PS5 Pro enhancement.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            The right PS5 if you want the stronger GPU and 2TB storage and you are fine without a disc drive.
            Open the Amazon listing to check the current price and stock before you decide.
          </p>

          <div className="w-full flex justify-center py-6 mb-10">
            <AppImage
              src={OG_IMAGE}
              alt="PlayStation 5 Pro console with DualSense"
              className="max-h-[400px] w-auto max-w-full object-contain"
            />
          </div>

          <AmazonDealBox
            productName="PlayStation 5 Pro — 2TB"
            href={AMAZON}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
