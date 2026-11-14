import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON =
  "https://www.amazon.com/dp/B0HB4HCB8L?tag=gadgetsfindswebsite-20";

const OG_IMAGE = "https://m.media-amazon.com/images/I/91NgubSWmjL.jpg";

export const metadata: Metadata = {
  title: "GenZ Semi-Automatic Slingshot Rapid Fire Steel Ball Shooter | Gadgets Finds",
  description:
    "CNC aluminum semi-automatic slingshot with dual magazine, rapid-fire steel ball loading, fiber optic sight. Outdoor target practice gadget. Price and stock change on Amazon.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/genz-semi-automatic-slingshot-article",
  },
  openGraph: {
    title: "GenZ Semi-Automatic Slingshot Rapid Fire Steel Ball Shooter",
    description: "Magazine-fed CNC aluminum slingshot for rapid outdoor target practice. Price changes.",
    url: "https://www.gadgets-finds.com/genz-semi-automatic-slingshot-article",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Semi-automatic rapid fire slingshot with magazine and steel balls",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "GenZ Semi-Automatic Slingshot Rapid Fire Steel Ball Shooter",
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
            Outdoor Gadgets
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            GenZ Semi-Automatic Slingshot Rapid Fire Steel Ball Shooter
          </h1>
          <p className="text-muted-foreground mb-6">
            CNC aluminum magazine-fed slingshot for rapid outdoor target practice. Auto-reload steel balls, fiber optic sight, dual magazines. Price and stock change on Amazon.
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
              src="https://www.youtube.com/embed/JFYSGrot8qI"
              title="Semi-Auto Magazine Slingshot Review"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What this gadget is</h2>
          <p className="text-muted-foreground mb-4">
            A semi-automatic / auto-loading slingshot built from CNC aircraft-grade aluminum. It uses a magazine system that feeds steel balls for rapid follow-up shots without reloading by hand every time. Designed for adult outdoor target practice.
          </p>

          <div className="w-full flex justify-center py-6 mb-6">
            <AppImage
              src="https://m.media-amazon.com/images/I/71gQB6ZQV7L.jpg"
              alt="CNC aluminum semi-automatic slingshot kit with magazines and steel balls"
              className="max-h-[400px] w-auto max-w-full object-contain rounded-lg"
            />
          </div>

          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Frame: CNC aircraft-grade aluminum alloy</li>
            <li>Loading: Magazine-fed semi-automatic / auto-reload system</li>
            <li>Capacity: Dual magazines (typically 12+ rounds each)</li>
            <li>Ammo: 8mm steel balls</li>
            <li>Sight: Adjustable fiber optic sight system</li>
            <li>Extras: Spare bands, steel balls (quantity varies), modular parts</li>
            <li>Use: Outdoor target practice, skill training, recreational shooting</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who it is for</h2>
          <p className="text-muted-foreground mb-4">
            Adults who want faster practice sessions than a traditional slingshot. Good for backyard or range target work where you want multiple shots without stopping to load each ball by hand.
          </p>

          <div className="w-full flex justify-center py-6 mb-6">
            <AppImage
              src="https://m.media-amazon.com/images/I/614Ys7NGCsL.jpg"
              alt="Semi-automatic slingshot in outdoor setting"
              className="max-h-[400px] w-auto max-w-full object-contain rounded-lg"
            />
          </div>

          <p className="text-muted-foreground mb-4">
            Skip it if you need maximum power for hunting or if you prefer a classic single-shot frame. This is a rapid-fire practice tool, not a high-powered hunting slingshot.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Before you click</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Confirm the exact kit (magazines, bands, steel balls included) on the live Amazon listing.</li>
            <li>Steel balls are often 8mm — check compatibility if you already have ammo.</li>
            <li>Price and stock change. Recheck before you buy.</li>
            <li>Adult use only. Follow local laws for target practice.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            A solid GenZ-style rapid-fire steel ball slingshot for outdoor practice. The magazine system is the main upgrade over traditional models. Open the Amazon page to see the current deal, what’s in the box, and stock.
          </p>

          <div className="w-full flex justify-center py-6 mb-10">
            <AppImage
              src={OG_IMAGE}
              alt="GenZ Semi-Automatic Slingshot Rapid Fire"
              className="max-h-[400px] w-auto max-w-full object-contain"
            />
          </div>

          <AmazonDealBox
            productName="GenZ Semi-Automatic Slingshot Rapid Fire Steel Ball Shooter"
            href={AMAZON}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
