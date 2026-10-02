import type { Metadata } from "next";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON_BUNDLE =
  "https://www.amazon.com/dp/B0FN47PSCP?tag=gadgetsfindswebsite-20";
const AMAZON_GAME =
  "https://www.amazon.com/dp/B0F6F41T4H?tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "Ghost of Yōtei Complete Edition launches today — Gadgets Finds",
  description:
    "Ghost of Yōtei Complete Edition is out on PS5, with Echoes of Sekigahara and Most Wanted. The Gold Limited Edition Slim bundle is a separate listing.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/ghost-of-yotei-complete-edition" },
    openGraph: {
    title: "Ghost of Yōtei Complete Edition launches today — Gadgets Finds",
    description: "New story expansion and Most Wanted on PS5. Bundle and game listings on Amazon.",
    url: "https://www.gadgets-finds.com/ghost-of-yotei-complete-edition",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: "/assets/images/ghost_of_yotei.png",
        width: 1200,
        height: 630,
        alt: "Ghost of Yotei PS5",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "Ghost of Yōtei Complete Edition launches today — Gadgets Finds",
    images: ["/assets/images/ghost_of_yotei.png"],
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
            Ghost of Yōtei Complete Edition launches today
          </h1>
          <p className="text-sm text-muted-foreground mb-8">By Gadgets Finds</p>

          <p className="text-muted-foreground mb-4">
            Sucker Punch’s PS5 package is out: the base game, Legends co-op, the Echoes of
            Sekigahara story expansion, and the Most Wanted survival mode. Patch 2.0 landed
            October 1 in most regions, and October 2 in parts of Asia, Australia, and New Zealand.
          </p>
          <p className="text-muted-foreground mb-6">
            Sony lists the Complete Edition at $69.99. Owners of the original game can buy the
            upgrade instead, listed at $14.99. Prices on Amazon move.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
                      <p className="mb-8">
            <a
              href={AMAZON_BUNDLE}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-amber-400 text-zinc-950 text-sm font-semibold hover:bg-transparent hover:text-foreground border border-amber-400 transition-colors"
            >
              Ghost of Yōtei PS5  on amazon
            </a>
          </p>
          </div>

          <div className="w-full flex justify-center py-6 mb-10">
            <AppImage
              src="/assets/images/ghost_of_yotei.png"
              alt="Ghost of Yotei"
              className="max-h-[400px] w-auto max-w-full object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What the Complete Edition adds</h2>
          <p className="text-muted-foreground mb-4">
            Echoes of Sekigahara is the new story, split between the present and Atsu’s time on
            the mainland. Most Wanted is a single-player combat mode built around bounties.
            Legends is the online co-op mode, up to four players, and needs PlayStation Plus.
          </p>
          <p className="text-muted-foreground mb-6">
            The package also includes the old Digital Deluxe items and the Charm of Hokkyokusei.
            A download and a PlayStation account are required for the new patch.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">The Gold console bundle</h2>
          <p className="text-muted-foreground mb-6">
            Amazon also lists a PlayStation 5 Slim Ghost of Yōtei Gold Limited Edition Bundle,
            recently around $798.99. That is a disc Slim with 1TB, a matching DualSense, and a
            voucher for the standard game. It is not the Complete Edition. If you want the
            expansion, buy the game listing or the upgrade, not only the console box.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who should buy which</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-8">
            <li>No PS5 yet, and you want the gold hardware: the bundle, then check the upgrade.</li>
            <li>You already own the game: the $14.99 upgrade, not a second copy.</li>
            <li>You only want Atsu’s story and the new mode: the game listing.</li>
          </ul>

          <p className="text-muted-foreground mb-8">
            A PS5 is required. See the{" "}
            <Link href="/playstation-5-article" className="text-primary underline">
              PS5 Slim guide
            </Link>{" "}
            if the bundle is gone.
          </p>

          <AmazonDealBox productName="Ghost of Yōtei" href={AMAZON_GAME} />
          <div className="h-6" />
          <AmazonDealBox productName="PS5 Ghost of Yōtei Gold bundle" href={AMAZON_BUNDLE} />
        </div>
      </article>
      <Footer />
    </>
  );
}
