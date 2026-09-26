import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON_ROBOROCK =
  "https://www.amazon.com/dp/B0DSLBZV3F?tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title:
    "Roborock Saros Z70 — $999.98 Limited Deal | Gadgets Finds",
  description:
    "Roborock Saros Z70 Black: OmniGrip arm, 22,000Pa, 3.14-inch slim body, auto mop wash and dry. Price seen at $999.98 <br />
    (−50%). Amazon price changes.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/roborock-saros-z70-article",
  },
  openGraph: {
    title: "Roborock Saros Z70 — Gadgets Finds",
    description:
      "Limited-time Amazon listing for the Saros Z70 Black. Price seen at $999.98. Amazon price and stock change.",
    url: "https://www.gadgets-finds.com/roborock-saros-z70-article",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: "/assets/images/roborock_saros_z70.png",
        width: 1200,
        height: 630,
        alt: "Roborock Saros Z70 robot vacuum and mop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "Roborock Saros Z70 — Gadgets Finds",
    description:
      "Saros Z70 Black. Price seen at $999.98 (−50%). Amazon price changes.",
    images: ["/assets/images/roborock_saros_z70.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-1 md:pt-1">
        <div className="w-full bg-muted flex items-center justify-center py-10">
          <AppImage
            src="/assets/images/roborock_saros_z70.png"
            alt="Roborock Saros Z70 robot vacuum and mop, black"
            className="max-h-[400px] w-auto max-w-[85%] object-contain"
          />
        </div>

        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-sm text-muted-foreground mb-4">
            As an Amazon Associate, Gadgets Finds earns from qualifying
            purchases.
          </p>

          <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700 font-bold">
              Limited-time Amazon deal: Roborock Saros Z70 (Black) seen at
              $999.98 (−50% vs $1,999.99 list).
              Price and stock change on Amazon. 
            </p>
          </div>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Smart Home
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Roborock Saros Z70: flagship vac-mop with an arm 
          </h1>
          <p className="text-muted-foreground mb-8">
            The <strong>Roborock Saros Z70</strong> (Black) is a 3.14-inch
            robot vacuum-mop with 22,000Pa suction, FlexiArm edge cleaning,
            AdaptiLift chassis, and the OmniGrip five-axis arm. The listing
            we use is ASIN <strong>B0DSLBZV3F</strong>. Confirm color, seller,
            and live price on Amazon before you buy.
          </p>

          <AmazonDealBox
            productName="Roborock Saros Z70"
            href={AMAZON_ROBOROCK}
          />

          <h2 className="text-2xl font-bold mt-10 mb-3">
            What the Z70 actually is
          </h2>
          <p className="text-muted-foreground mb-4">
            This is Roborock’s arm-equipped flagship, not a $300 “set and
            forget” budget bot. The dock empties dust, washes and dries
            mops, and handles water. The robot is built to run hard floors
            and low carpets in one pass, then lift the mop on carpet.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">OmniGrip arm</h2>
          <p className="text-muted-foreground mb-4">
            OmniGrip can pick up <strong>light objects</strong> (socks,
            tissues, similar items, about 300g max per Roborock). It is not
            a hand that reliably moves shoes, cables, or clutter. Independent
            reviews and Amazon feedback are mixed: the vac-mop is strong; the
            arm is the party trick and sometimes misses or jams.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">
            Slim body, edges, thresholds
          </h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>
              <strong>3.14" height</strong> — better under sofas than most
              flagship docks-era robots.
            </li>
            <li>
              <strong>FlexiArm</strong> — side brush and mop extend into
              corners.
            </li>
            <li>
              <strong>AdaptiLift</strong> — chassis lift for thresholds up to
              about 4 cm; mop lift on carpet (about 22 mm).
            </li>
            <li>
              <strong>22,000Pa</strong> — marketing peak suction; real-world
              pickup still depends on brush, seal, and floor type.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">The $999.98 deal</h2>
          <p className="text-muted-foreground mb-4">
            List on that Amazon page is <strong>$1,999.99</strong>. The
            limited-time price we last checked was <strong>$999.98</strong>{" "}
            (−50%). That is the only reason to look now. At full list, wait
            or buy a Saros / S8-class machine without the arm.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Buy if / skip if</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>
              <strong>Buy if</strong> the live Amazon price is still near
              $999, you want a self-washing mop dock, and you accept the arm
              as extra, not guaranteed.
            </li>
            <li>
              <strong>Skip if</strong> you need a small dock, have lots of
              stairs, or you are buying only for the arm.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">
            Watch-outs before you click Amazon
          </h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Color must be <strong>Black</strong> on B0DSLBZV3F.</li>
            <li>Prefer Amazon sold/shipped or a known seller.</li>
            <li>Dock needs floor space and an outlet.</li>
            <li>Amazon price and availability change without notice.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            Treat this as a <strong>half-price flagship mop-vac</strong>, not
            a miracle butler. If B0DSLBZV3F is still near $999.98, it is a
            serious discount. If the price snapped back to $1,999, walk away.
          </p>

          <AmazonDealBox
            productName="Roborock Saros Z70"
            href={AMAZON_ROBOROCK}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
