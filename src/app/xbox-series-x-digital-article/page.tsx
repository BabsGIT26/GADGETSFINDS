import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON =
  "https://www.amazon.com/dp/B0DCD9LGHY?tag=dealsfinder05-20";

const OG_IMAGE =
  "https://i5.walmartimages.com/seo/Microsoft-Xbox-Series-X-1TB-All-Digital-Robot-White-Console-with-Mytrix-High-Speed-HDMI-Robot-White-All-Digital-Xbox_a8dc999d-ac15-4e82-9f95-de3180348647.198f3b0d3a2fa0ef73e6ddb0928ffbcc.jpeg";

export const metadata: Metadata = {
  title: "Xbox Series X Digital 1TB Robot White — Gadgets Finds",
  description:
    "Xbox Series X All-Digital Gaming Console with 1TB SSD, Wireless Controller, true 4K up to 120FPS, Robot White. Price and stock change on Amazon.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/xbox-series-x-digital-article",
  },
  openGraph: {
    title: "Xbox Series X Digital 1TB — Robot White",
    description: "All-digital Series X with 1TB SSD, 4K/120FPS, matching white controller. Price changes.",
    url: "https://www.gadgets-finds.com/xbox-series-x-digital-article",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Xbox Series X Digital Robot White full console",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "Xbox Series X Digital 1TB — Robot White",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-2 pb-10 max-w-3xl">
          <p className="text-sm text-foreground mb-3">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Gaming
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Xbox Series X Digital — 1TB, Robot White
          </h1>
          <p className="text-muted-foreground mb-6">
            Microsoft’s all-digital Xbox Series X in Robot White: 1TB custom SSD, true 4K up to 120 FPS,
            12 TFLOPS, Xbox Velocity Architecture, and a matching white Wireless Controller.
            This is the disc-free version. Price and stock change.
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
              src="https://www.youtube.com/embed/0tUqIHwHDEc"
              title="Xbox Series X Digital overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What this console is</h2>
          <p className="text-muted-foreground mb-4">
            The Series X Digital is the full-power Series X without a disc drive. Same 12 TFLOPS GPU,
            same 1TB SSD, same Quick Resume and backward compatibility. It only plays digital games
            (and Game Pass). The Robot White finish matches the included controller.
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Console: Xbox Series X All-Digital, Robot White</li>
            <li>Storage: 1TB custom NVMe SSD</li>
            <li>Performance: 12 TFLOPS, up to 120 FPS, hardware ray tracing</li>
            <li>Resolution: True 4K, HDR, up to 8K ready</li>
            <li>Includes: Console, one Robot White Wireless Controller, ultra-high-speed HDMI cable, power cable, 2 AA batteries</li>
            <li>Disc drive: None — digital games only</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Performance and features</h2>
          <p className="text-muted-foreground mb-4">
            Load times are dramatically shorter than last-gen thanks to the custom SSD and Velocity Architecture.
            Quick Resume lets you switch between multiple games and pick up exactly where you left off.
            Backward compatibility covers thousands of Xbox One, Xbox 360, and original Xbox titles,
            many of them enhanced.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who it is for</h2>
          <p className="text-muted-foreground mb-4">
            Anyone who buys games digitally or mainly uses Game Pass. You get the full Series X power
            and 1TB of storage without paying for a disc drive you won’t use. The white finish is a clean look
            if you prefer it over the standard black.
          </p>
          <p className="text-muted-foreground mb-4">
            Skip it if you still buy physical discs or want the cheapest way into next-gen (Series S is smaller and less powerful).
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Before you click</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Confirm it is the All-Digital / Robot White version on the live listing.</li>
            <li>Confirm the live price. Numbers move.</li>
            <li>No disc drive — you cannot play physical discs.</li>
            <li>Storage expansion uses official Xbox Series X|S expansion cards if you need more than 1TB.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            The right Series X if you are all-digital and want the full 12 TFLOPS machine in white.
            Open the Amazon listing to check the current price and stock before you decide.
          </p>

          <AmazonDealBox
            productName="Xbox Series X Digital 1TB Robot White"
            href={AMAZON}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
