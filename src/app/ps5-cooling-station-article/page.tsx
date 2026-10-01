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
    "Vertical PS5 stand with a 3-speed fan, two DualSense docks, and three USB ports. Fits Slim, original, and Pro.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/ps5-cooling-station-article" },
  openGraph: {
    title: "PS5 Cooling Station with Controller Charger — Gadgets Finds",
    description: "3-speed fan, two controller docks, three USB ports.",
    url: "https://www.gadgets-finds.com/ps5-cooling-station-article",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: "/assets/images/PS5_Cooling_Station.png",
        width: 1200,
        height: 630,
        alt: "PS5 cooling station with controller docks",
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
                <div className="container mx-auto px-4 pt-4 pb-10 max-w-3xl">
          <p className="text-sm text-black mb-6">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Gaming</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            PS5 cooling station with controller charger
          </h1>
          <p className="text-sm text-muted-foreground mb-8">By Gadgets Finds</p>

          <p className="text-muted-foreground mb-6">
            A vertical stand that cools the console from below, charges two DualSense
            controllers, and keeps a headset, remote, and discs in one place. It is a
            third-party accessory, not Sony’s official base.
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
              alt="PS5 cooling station with controller docks"
              className="max-h-[400px] w-auto max-w-full object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">Cooling</h2>
          <p className="text-muted-foreground mb-6">
            A fan under the console pushes heat out from the bottom. Three speeds: low, mid,
            high. Useful in a tight shelf. It does not replace leaving the PS5’s own vents clear.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Charging and ports</h2>
          <p className="text-muted-foreground mb-6">
            Two docks for standard DualSense pads. The listing says a full charge takes about
            three hours, from the console or a 5V/3A adapter. Red means charging, green means
            full. Not compatible with DualSense Edge. Three extra USB ports cover a headset
            dongle, camera, or similar.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Fit</h2>
          <p className="text-muted-foreground mb-6">
            Slim, original, and Pro, disc or digital. A panel ships on the stand — remove it
            for a Slim. A screw locks the console to the base. Console, controllers, headset,
            remote, and games are not included. See the{" "}
            <Link href="/playstation-5-article" className="text-primary underline">
              PS5 guide
            </Link>{" "}
            if you are still choosing the console.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            Worth it if you want one base instead of a separate stand and charger. Skip it if
            you only need Sony’s stand, or if you use an Edge controller. Price and stock
            change on Amazon.
          </p>

          <AmazonDealBox productName="PS5 cooling station" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
