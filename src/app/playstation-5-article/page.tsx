import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON_PS5 = "https://www.amazon.com/dp/B0CL61F39H?tag=gadgetsfindswebsite-20";
const AMAZON_GTA6 = "https://www.amazon.com/s?k=Grand+Theft+Auto+VI+PS5&tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "PlayStation 5 and GTA 6 — Should You Buy a PS5 in 2026? | Gadgets Finds",
  description:
    "PS5 Slim review: specs, disc vs digital, storage, DualSense, and why GTA 6 on November 19, 2026 is PS5-only. Amazon listings with disclosure.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/playstation-5-article" },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="w-full bg-muted flex items-center justify-center py-10">
          <AppImage
            src="/assets/images/playstation_5.png"
            alt="PlayStation 5 Slim console"
            className="max-h-[400px] w-auto max-w-[85%] object-contain"
          />
        </div>

        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Gaming</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            PlayStation 5: the console to own before GTA 6
          </h1>
          <p className="text-muted-foreground mb-8">
            Grand Theft Auto VI is scheduled for <strong>November 19, 2026</strong> on PlayStation 5
            and Xbox Series X|S. It will not run on PS4. If you still have a PS4, the hardware
            decision is the PS5 Slim (disc or digital), not a rumored PS6.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">What the PS5 actually is</h2>
          <p className="text-muted-foreground mb-4">
            Sony’s current home console launched in 2020 and was revised as the slimmer CFI-2000
            family in late 2023. Typical disc Slim kits include about <strong>1TB SSD</strong>, one
            DualSense controller, HDMI cable, and Astro’s Playroom. The vertical stand is often
            sold separately. 4K output, ray tracing in supported titles, and 120Hz on compatible
            TVs are the headline display features.
          </p>
          <p className="text-muted-foreground mb-4">
            The SSD is the real generation jump versus PS4: installs and fast travel are short
            enough that open-world games like the GTA series can stream a dense city without the
            old “loading screen every two blocks” feel.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Disc vs digital</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>
              <strong>Disc Slim</strong> (Amazon listing we use: ASIN B0CL61F39H): plays physical
              PS5 discs and most PS4 discs, plus 4K Blu-ray.
            </li>
            <li>
              <strong>Digital Slim</strong>: no drive. Cheaper up front, locked to PlayStation Store
              prices.
            </li>
          </ul>
          <p className="text-muted-foreground mb-4">
            For GTA 6, Rockstar said the boxed “physical” edition is a <strong>download code in a
            box</strong>, not a full multi-disc install like old GTAs. A disc console is still
            useful for other games and movies; it is not required to play GTA 6 if you buy digital.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">DualSense and PS5 Pro</h2>
          <p className="text-muted-foreground mb-4">
            Adaptive triggers and haptics are the feature Sony keeps highlighting for GTA 6 on
            PS5. If you already own a launch PS5, you do not need a Slim for GTA 6. A PS5 Pro
            helps resolution and frame-rate modes; it is optional, not a requirement to launch
            the game.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Storage: plan an SSD</h2>
          <p className="text-muted-foreground mb-4">
            1TB disappears fast (GTA 5 + GTA Online + a few first-party games). Official expansion
            is an internal M.2 NVMe SSD that meets Sony’s spec. USB externals work for PS4 games
            and as overflow, not as the ideal place for the heaviest PS5 titles.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">GTA 6 on PS5 — dates that matter</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Release: <strong>November 19, 2026</strong> (PS5 and Xbox Series).</li>
            <li>Digital preload: <strong>November 12, 2026</strong> for pre-orders.</li>
            <li>Standard edition: <strong>$79.99</strong>. Ultimate: <strong>$99.99</strong>.</li>
            <li>Single-player campaign at launch (Lucia and Jason, Vice City-inspired setting).</li>
            <li>Not on PS4. Not a PC launch date in the same window.</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            Sony and Rockstar have said the PS5 version uses DualSense features. That is marketing
            plus a real API; it is not a reason to skip Xbox if that is already your ecosystem.
            It is a reason not to buy a used PS4 “for GTA 6.”
          </p>
          <p className="text-muted-foreground mb-4">
            Official hub:{" "}
            <a
              className="text-primary underline"
              href="https://www.rockstargames.com/VI"
              target="_blank"
              rel="noopener noreferrer"
            >
              rockstargames.com/VI
            </a>{" "}
            and{" "}
            <a
              className="text-primary underline"
              href="https://www.playstation.com/en-us/games/grand-theft-auto-vi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PlayStation’s GTA VI page
            </a>
            . Trailer stills belong to Rockstar — we don’t hotlink Google image search.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who should buy a PS5 now</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>You want GTA 6 on day one and you do not own PS5 or Series X|S.</li>
            <li>You care about Spider-Man, God of War, Last of Us, Horizon on one box.</li>
            <li>Skip a new console if you already have a working PS5 — spend on the game and an SSD.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Watch-outs before you click Amazon</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Prefer Amazon sold/shipped or a known retailer. Scalped “new” bundles are common.</li>
            <li>Read whether the listing is Disc, Digital, or a random third-party bundle.</li>
            <li>GTA 6 preorder listings will mix steelbooks, codes, and fake covers. Check the publisher is Rockstar / official seller.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            In September 2026 the useful purchase is a <strong>PS5 Slim</strong>, not a PS6 rumor.
            GTA 6 is the deadline. Buy the console first if you have no current-gen machine; buy
            the game listing second and only from a normal storefront.
          </p>

          <AmazonDealBox productName="PlayStation 5 Slim (disc)" href={AMAZON_PS5} />
          <AmazonDealBox productName="Grand Theft Auto VI PS5" href={AMAZON_GTA6} />
        </div>
      </article>
      <Footer />
    </>
  );
}
