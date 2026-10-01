import type { Metadata } from "next";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON =
  "https://www.amazon.com/dp/B0CXSWDHM6?tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "PS5 Cooling Station with Controller Charger — Gadgets Finds",
  description:
    "Kammkonb PS5 stand with 3-speed fan, dual DualSense docks, and 3 USB hubs. Fits Slim, standard, and Pro. Not official Sony. Price changes on Amazon.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/ps5-cooling-station-article" },
  openGraph: {
    title: "PS5 Cooling Station with Controller Charger — Gadgets Finds",
    description: "Vertical stand, 3-speed fan, two controller docks, 3 USB hubs.",
    url: "https://www.gadgets-finds.com/ps5-cooling-station-article",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: "/assets/images/PS5_Cooling_Station.png",
        width: 1200,
        height: 630,
        alt: "PS5 cooling station with controller charging docks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "PS5 Cooling Station with Controller Charger — Gadgets Finds",
    images: ["/assets/images/PS5_Cooling_Station.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-sm text-black mb-6">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Gaming</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            PS5 cooling station with controller docks
          </h1>
          <p className="text-sm text-muted-foreground mb-8">By Gadgets Finds</p>

          <p className="text-muted-foreground mb-4">
            This is a third-party vertical stand (Kammkonb, Amazon ASIN B0CXSWDHM6), not an
            official PlayStation accessory. It holds a PS5 upright, runs a bottom fan, charges
            two DualSense pads, and adds three USB ports plus slots for a headset, media remote,
            and discs.
          </p>
          <p className="text-muted-foreground mb-8">
            Specs below come from the listing, not a lab test. Street price has been around the
            mid-$30s. Confirm seller, color, and price on Amazon before you buy.
          </p>

          <p className="mb-8">
            <a
              href={AMAZON}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-amber-400 text-zinc-950 text-sm font-semibold hover:bg-transparent hover:text-foreground border border-amber-400 transition-colors"
            >
              View on Amazon
            </a>
          </p>

          <div className="w-full flex justify-center py-6 mb-10">
            <AppImage
              src="/assets/images/PS5_Cooling_Station.png"
              alt="PS5 cooling station with controller charging docks"
              className="max-h-[400px] w-auto max-w-full object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is for</h2>
          <p className="text-muted-foreground mb-6">
            A vertical base that replaces the official stand if you want charging docks and a
            fan in the same footprint. The listing claims a turbo fan with High, Mid, and Low,
            blowing air from the bottom of the console. That can help airflow in a tight shelf.
            It does not replace leaving the PS5 vents clear, and it is not proof the console
            will last longer.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Controllers and USB</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-6">
            <li>Two docks for standard DualSense. Not for the DualSense Edge.</li>
            <li>Listing says both pads can reach full in about 3 hours, powered by the console USB or a 5V/3A adapter.</li>
            <li>LEDs: red while charging, green when full or on standby. Fan speed is also indicated.</li>
            <li>Three extra USB ports for a headset dongle, camera, or similar. Overcharge / overcurrent protection is claimed by the seller.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Which console it fits</h2>
          <p className="text-muted-foreground mb-6">
            Seller says Slim, original (2020) standard, and Pro, disc or digital. A panel adapter
            ships on the stand: remove it for a Slim. A screw locks the console to the base.
            If your model is not listed on the live Amazon page, do not assume it fits. See the{" "}
            <Link href="/playstation-5-article" className="text-primary underline">
              PS5 Slim guide
            </Link>{" "}
            and the{" "}
            <Link href="/playstation-5-dualsense-article" className="text-primary underline">
              DualSense page
            </Link>{" "}
            for the console and pads themselves.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">What is in the box</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-6">
            <li>Cooling stand</li>
            <li>Headset holder</li>
            <li>PS5 panel (attached)</li>
            <li>Locking screw</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Console, DualSense, headset, media remote, and game discs are not included. Disc
            slots on the stand are storage only.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Before you click</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-8">
            <li>Sold by Amazon or the brand page, not a random bundle with a different fan.</li>
            <li>Read recent reviews for fan noise. Third-party coolers often get louder after a few months.</li>
            <li>Do not block the PS5’s own vents with a wall or a closed cabinet.</li>
            <li>Edge controller owners need a different dock.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            Useful if you want one vertical base that charges two DualSense pads and tidies USB
            dongles. Skip it if you only need Sony’s official stand, or if you own an Edge.
            Price and stock move; the button opens the current listing.
          </p>

          <AmazonDealBox productName="PS5 cooling station" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
