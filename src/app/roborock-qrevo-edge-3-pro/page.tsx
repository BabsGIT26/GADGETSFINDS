import type { Metadata } from "next";
import Header from "@/components/common/Header";
import { ProductPhoto } from "@/components/common/AmazonMedia";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import CommentSection from "@/components/comments/CommentSection";

const AMAZON = "https://link.amazon/B096rib58";
const PHOTO = "https://www.amazon.com/dp/B0H1WCKGPX?tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "Roborock Qrevo Edge 3 Pro Review — Gadgets Finds",
  description:
    "Roborock Qrevo Edge 3 Pro with 36,000 Pa suction, threshold climbing, retractable LiDAR, and a 212°F self-cleaning dock.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/roborock-qrevo-edge-3-pro" },
  openGraph: {
    title: "Roborock Qrevo Edge 3 Pro Review",
    description: "36,000 Pa suction, threshold climbing, and a 212°F mop-washing dock.",
    url: "https://www.gadgets-finds.com/roborock-qrevo-edge-3-pro",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: "/assets/images/qrevo-edge-3-pro-og.jpg", alt: "Roborock Qrevo Edge 3 Pro on its dock" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "Roborock Qrevo Edge 3 Pro Review",
    description: "36,000 Pa suction, threshold climbing, and a 212°F mop-washing dock.",
    images: ["/assets/images/qrevo-edge-3-pro-og.jpg"],
  },
};

const buttonClass =
  "inline-flex items-center px-5 py-2.5 rounded-full bg-amber-400 text-zinc-950 text-sm font-semibold hover:bg-transparent hover:text-foreground border border-amber-400 transition-colors";

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-28 md:pt-32">
        <div className="container mx-auto px-4 pt-2 pb-10 max-w-3xl">
          <p className="text-xs md:text-sm text-foreground mb-6">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Vacuums</p>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
            Roborock Qrevo Edge 3 Pro Review
          </h1>

          <p className="text-muted-foreground mb-6">
            If you have a home with tall room transitions, thick rugs, pets, and low-clearance
            furniture that stops standard robot vacuums in their tracks, the Roborock Qrevo Edge 3
            Pro is built to tackle all of it hands-free. Combining 36,000 Pa HyperForce suction, an
            AdaptiLift 3.0 chassis that climbs 3.46-inch (88 mm) double-layer thresholds, retractable
            LiDAR for slipping under low sofas, and a 212°F (100°C) hot-water mop-washing dock, it
            is one of Roborock’s most capable flagship vacuum-and-mop combos.
          </p>

          <p className="mb-8">
            <a href={AMAZON} rel="nofollow sponsored noopener noreferrer" className={buttonClass}>
              View on Amazon
            </a>
          </p>

          <div className="mb-10 flex justify-center">
            <ProductPhoto
              url={PHOTO}
              fallback="/assets/images/qrevo-edge-3-pro.jpg"
              alt="Roborock Qrevo Edge 3 Pro on its dock"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What Makes the Roborock Qrevo Edge 3 Pro Stand Out?</h2>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>
              <span className="font-semibold text-foreground">Massive 36,000 Pa Suction & Dual Zero-Tangling System:</span>{" "}
              Delivers 36,000 Pa of suction power paired with Roborock’s DuoDivide main brush and
              anti-tangle side brush—designed to pull embedded dirt out of carpets and prevent long
              human or pet hair from wrapping around the rollers.
            </li>
            <li>
              <span className="font-semibold text-foreground">3.46-Inch Double-Layer Threshold Climbing:</span>{" "}
              Using the AdaptiLift Chassis 3.0, the robot lifts its body to clear single thresholds
              up to 1.77 in (45 mm) and stepped double-layer thresholds up to 3.46 in (88 mm)—easily
              conquering sliding door tracks, thick rug edges, and raised room dividers.
            </li>
            <li>
              <span className="font-semibold text-foreground">Ultra-Slim Profile with Retractable LiDAR:</span>{" "}
              Its RetractSense LiDAR turret automatically lowers when approaching low furniture,
              dropping the robot's height to roughly 3.15 in (79–80 mm) so it can clean underneath
              beds and couches that taller robots skip.
            </li>
            <li>
              <span className="font-semibold text-foreground">Corner-to-Edge Mopping + Automatic Mop Detachment:</span>{" "}
              Extending FlexiArm side brush and mop pads reach right up against baseboards and into
              corners, spinning at 200 RPM with 14N of downward pressure. Before vacuuming carpets,
              the dock automatically detaches and leaves the mop pads behind so rugs stay completely
              dry.
            </li>
            <li>
              <span className="font-semibold text-foreground">300+ Object Obstacle Avoidance:</span>{" "}
              Combines structured light, VertiBeam lateral sensors, and an RGB camera to identify and
              steer around 300+ household obstacles—including cables, socks, shoes, and pet toys.
            </li>
            <li>
              <span className="font-semibold text-foreground">212°F (100°C) Hot-Water Self-Cleaning Dock:</span>{" "}
              Washes the mop pads with near-boiling 212°F water, automatically dispenses cleaning
              solution, empties the onboard dustbin, refills the robot’s water tank, detects dirty
              water for automatic re-washing, and dries the pads with 131°F (55°C) warm air.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Key Specifications</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-border">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-3 font-semibold text-foreground">Feature / Spec</th>
                  <th className="p-3 font-semibold text-foreground">Details</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border"><td className="p-3">Suction Power</td><td className="p-3">36,000 Pa</td></tr>
                <tr className="border-b border-border"><td className="p-3">Threshold Climbing</td><td className="p-3">Up to 3.46 in (88 mm) double-layer / 1.77 in (45 mm) single-layer (AdaptiLift Chassis 3.0)</td></tr>
                <tr className="border-b border-border"><td className="p-3">Navigation & Height</td><td className="p-3">RetractSense retractable LiDAR; ~3.15 in (79–80 mm) height when lowered</td></tr>
                <tr className="border-b border-border"><td className="p-3">Obstacle Avoidance</td><td className="p-3">300+ object recognition with RGB camera & VertiBeam lateral sensing</td></tr>
                <tr className="border-b border-border"><td className="p-3">Brush System</td><td className="p-3">Dual Zero-Tangling (DuoDivide main brush + anti-tangle extendable side brush)</td></tr>
                <tr className="border-b border-border"><td className="p-3">Mopping System</td><td className="p-3">Dual spinning mop pads (200 RPM, 14N pressure), extendable edge reach, auto mop detachment at dock</td></tr>
                <tr className="border-b border-border"><td className="p-3">Dock Self-Cleaning</td><td className="p-3">212°F (100°C) hot-water mop wash, 131°F (55°C) warm-air drying, auto-empty, auto-detergent & warm water refill</td></tr>
                <tr><td className="p-3">Smart Home Support</td><td className="p-3">Roborock App, Matter, Amazon Alexa, Google Assistant</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">Real-World Performance & Practical Trade-Offs</h2>
          <p className="text-muted-foreground mb-4">
            <span className="font-semibold text-foreground">Built for Complex Floor Plans:</span>{" "}
            Independent testing highlights its standout threshold climbing, strong carpet agitation
            (aided by a main brush stabilization lock in deep-carpet mode), and reliable obstacle
            avoidance.
          </p>
          <p className="text-muted-foreground mb-4">
            <span className="font-semibold text-foreground">Set No-Go Zones Under Ultra-Low Gaps:</span>{" "}
            Because its retractable LiDAR makes the body so slim, it can occasionally squeeze into
            tight spaces under angled furniture frames—setting a few no-go zones in the app during
            your first run prevents wedging.
          </p>
          <p className="text-muted-foreground mb-6">
            <span className="font-semibold text-foreground">Flagship Pricing & Consumables:</span> As a
            premium flagship model (MSRP $1,499.99, though frequently discounted during major sales
            events), ongoing replacement parts like filters, side brushes, and mop pads cost a bit
            more than entry-level bots.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who Should Buy It—and Who Shouldn't</h2>
          <p className="font-semibold text-foreground mb-2">Buy the Roborock Qrevo Edge 3 Pro if:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>You have tall thresholds, sunken rooms, thick rugs, or a mix of hardwood/tile and carpet.</li>
            <li>You live with shedding pets or long hair and want true zero-tangling brushes plus a self-washing 212°F dock.</li>
            <li>You want a slim robot that slides under low sofas and automatically drops its mop pads before vacuuming carpets.</li>
          </ul>
          <p className="font-semibold text-foreground mb-2">Skip it if:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
            <li>You live in a small, single-surface apartment with flat thresholds and no pets—a mid-range Qrevo model will clean just as well for much less.</li>
          </ul>

          <p className="mb-8">
            <a href={AMAZON} rel="nofollow sponsored noopener noreferrer" className={buttonClass}>
              Check Current Price & Availability on Amazon
            </a>
          </p>

          <AmazonDealBox productName="Roborock Qrevo Edge 3 Pro" href={AMAZON} />
          <CommentSection articleSlug="roborock-qrevo-edge-3-pro" />
        </div>
      </article>
      <Footer />
    </>
  );
}
