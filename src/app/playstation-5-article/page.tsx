import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON_PS5 = "https://www.amazon.com/PlayStation%C2%AE5-console-slim-Renewed-PlayStation-5/dp/B0CP4F9J4W?th=1&gaOptInStatus=true&linkCode=ll2&tag=gadgetsfindswebsite-20&linkId=e6cca9dc0766a144c3dac746bb1f9229&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl";
const AMAZON_GTA6 = "https://www.amazon.com/s?k=Grand+Theft+Auto+VI+PS5&tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "PlayStation 5 and GTA 6 — Should You Buy a PS5 in 2026? | Gadgets Finds",
  description:
    "PS5 Slim review: specs, disc vs digital, storage, DualSense, and why GTA 6 on November 19, 2026 is PS5-only.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/playstation-5-article" },
  openGraph: {
    title: "PlayStation 5 — Gadgets Finds",
    description: "PS5 Slim and GTA 6 on November 19, 2026. What to buy before launch.",
    url: "https://www.gadgets-finds.com/playstation-5-article",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: "/assets/images/playstation_5.png", width: 1200, height: 630, alt: "PlayStation 5 Slim" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "PlayStation 5 — Gadgets Finds",
    description: "PS5 Slim and GTA 6 on November 19, 2026.",
    images: ["/assets/images/playstation_5.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-1 md:pt-1">
        <div className="w-full bg-muted flex items-center justify-center py-10">
          <AppImage src="/assets/images/playstation_5.png" alt="PlayStation 5 Slim console" className="max-h-[400px] w-auto max-w-[85%] object-contain" />
        </div>
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Gaming</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">PlayStation 5: the console to own before GTA 6</h1>
          <p className="text-muted-foreground mb-8">
            Grand Theft Auto VI is scheduled for <strong>November 19, 2026</strong> on PlayStation 5 and Xbox Series X|S. It will not run on PS4. If you still have a PS4, the hardware decision is the PS5 Slim (disc or digital), not a rumored PS6.
          </p>

          <AmazonDealBox productName="PlayStation 5 Slim (disc)" href={AMAZON_PS5} />

          <h2 className="text-2xl font-bold mt-10 mb-3">What the PS5 actually is</h2>
          <p className="text-muted-foreground mb-4">
            Sony's current home console launched in 2020 and was revised as the slimmer CFI-2000 family in late 2023. Typical disc Slim kits include about <strong>1TB SSD</strong>, one DualSense controller, HDMI 2.1 cable, and a power cable. The digital Slim drops the disc drive. Both play 4K Blu-rays (disc version) and PSN digital titles.
          </p>
          <p className="text-muted-foreground mb-4">The SSD is the real generation jump versus PS4: installs and fast travel are short enough that open-world games like the GTA series can stream a fully textured city block without loading screens. That is not hype.</p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Disc vs digital</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li><strong>Disc Slim</strong> (Renewed Amazon listing: ASIN B0CP4F9J4W): plays physical PS5 discs and most PS4 discs, plus 4K Blu-ray.</li>
            <li><strong>Digital Slim</strong>: no drive. Cheaper up front, locked to PlayStation Store prices.</li>
          </ul>
          <p className="text-muted-foreground mb-4">For GTA 6, Rockstar said the boxed "physical" edition is a <strong>download code in a box</strong>, not a full multi-disc install like old GTA cartridges. So disc ownership does not help GTA 6 itself. Disc mode matters for PS4 or older PS5 titles in your library.</p>

          <h2 className="text-2xl font-bold mt-10 mb-3">DualSense and PS5 Pro</h2>
          <p className="text-muted-foreground mb-4">Adaptive triggers and haptics are the feature Sony keeps highlighting for GTA 6 on PS5. If you already own a launch PS5, you do not need a Slim model. The DualSense is sold separately (USD $70–$75).</p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Storage: plan an SSD</h2>
          <p className="text-muted-foreground mb-4">1TB disappears fast (GTA 5 + GTA Online + a few first-party games). Official expansion is an internal M.2 NVMe SSD that meets Sony's spec. USB external storage is read-only and slow. Budget USD $90–$120 for a 1TB gen4 SSD if you want both GTA 6 and another AAA title installed.</p>

          <h2 className="text-2xl font-bold mt-10 mb-3">GTA 6 on PS5 — dates that matter</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Release: <strong>November 19, 2026</strong> (PS5 and Xbox Series).</li>
            <li>Digital preload: <strong>November 12, 2026</strong> for pre-orders.</li>
            <li>Standard edition: <strong>$79.99</strong> USD, Deluxe: <strong>$99.99</strong>.</li>
            <li>Cross-gen play: not at launch.</li>
          </ul>
          <p className="text-muted-foreground mb-4">Sony and Rockstar have said the PS5 version uses DualSense features. That is marketing plus a real API; it is not a reason to skip Xbox if that is your primary platform.</p>
          <p className="text-muted-foreground mb-4">Official hub: <a className="text-primary underline" href="https://www.rockstargames.com/VI" target="_blank" rel="noopener noreferrer">rockstargames.com/VI</a>.</p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who should buy a PS5 now</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>You want GTA 6 on day one and you do not own PS5 or Series X|S.</li>
            <li>You care about Spider-Man, God of War, Last of Us Part I remakes, Final Fantasy, or Kingdom Hearts IV (PS5 exclusive).</li>
            <li>Your friends play on PS5 and crossplay is off-topic for the game you want to join.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Watch-outs before you click Amazon</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>This is a Renewed listing; inspect the condition, warranty, seller, and return terms.</li>
            <li>Read whether the listing is the <strong>Disc Slim</strong> or Digital Slim. (ASIN matters.)</li>
            <li>Confirm stock. Preorders and third-party sellers can have long lead times.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">In September 2026 the useful purchase is a <strong>PS5 Slim</strong>, not a PS6 rumor. Compare the lower-priced Renewed deal carefully against a new console before checkout. GTA 6 is a November release; PlayStation, Microsoft, and Rockstar will not run out of stock the day it ships, so you have time to decide.</p>
          <AmazonDealBox productName="Grand Theft Auto VI PS5" href={AMAZON_GTA6} />
        </div>
      </article>
      <Footer />
    </>
  );
}
