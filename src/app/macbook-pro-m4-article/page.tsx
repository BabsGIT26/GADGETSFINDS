import type { Metadata } from "next";
import ArticleJsonLd from "@/components/common/ArticleJsonLd";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON = "https://www.amazon.com/dp/B0FWD623D1?tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "MacBook Pro M4: Now the M5 Is the One to Buy | Gadgets Finds",
  description:
    "The 14-inch MacBook Pro M4 is no longer sold new on Amazon. What changed with the M5 model, who should buy it, and the listing we checked.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/macbook-pro-m4-article" },
};

export default function Page() {
  return (
    <>
      <Header />
      <ArticleJsonLd path="/macbook-pro-m4-article" headline={"MacBook Pro M4: Now the M5 Is the One to Buy"} description={"The 14-inch MacBook Pro M4 is no longer sold new on Amazon. What changed with the M5 model, who should buy it, and the listing we checked."} products={["Apple MacBook Pro 14-inch M5 (16GB, 1TB)"]} />
      <article className="min-h-screen bg-background pt-28 md:pt-16">
        <div className="w-full bg-muted flex items-center justify-center py-10">
          <AppImage
            src="/assets/illustrations/laptop.svg"
            alt="MacBook Pro 14-inch"
            className="max-h-[400px] w-auto max-w-[85%] object-contain"
          />
        </div>

        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Laptops</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">MacBook Pro M4, and the M5 that replaced it</h1>
          <p className="text-sm text-muted-foreground mb-8">By Gadgets Finds · Updated Nov 22, 2026</p>
          <p className="text-muted-foreground mb-8">
            Apple’s 14-inch MacBook Pro with the M4 chip launched in late 2024. Apple has since
            replaced it with the M5 model, and when we checked on Nov 22, 2026 the M4 listing on
            Amazon was no longer sold new. This page now points to the 14-inch M5 instead. It
            summarizes public specs and buying advice. It is not a lab test.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">The listing we link to</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Apple 2025 MacBook Pro 14-inch with M5 (10-core CPU, 10-core GPU)</li>
            <li>16GB unified memory, 1TB SSD, Space Black</li>
            <li>Shipped and sold by Amazon when we checked</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">What changed from the M4</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Same 14.2-inch Liquid Retina XDR display: up to 1600 nits peak, 1000 nits sustained</li>
            <li>M5 adds a Neural Accelerator in each GPU core, so on-device AI work runs faster</li>
            <li>Same ports: three Thunderbolt 4, HDMI, SDXC, MagSafe 3, headphone jack</li>
            <li>12MP Center Stage camera, six speakers, and support for two external displays</li>
            <li>All-day battery life, with the same performance on battery as plugged in</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who should buy it</h2>
          <p className="text-muted-foreground mb-4">
            Video, photo, Xcode, and anyone already using an iPhone or iPad. Most people should
            stay on the base M5 chip. Choose an M5 Pro or M5 Max only if you export huge timelines
            or run virtual machines all day. If you already own an M4 MacBook Pro, there is no
            reason to upgrade.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Watch-outs</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Apple’s RAM and SSD upgrades are expensive. Pick storage you will keep.</li>
            <li>Gaming is not the reason to buy this machine.</li>
            <li>Confirm the Amazon listing is sold by Amazon or Apple, not a third-party bundle.</li>
            <li>A leftover new M4 can be a good deal if you find one, but check the seller and condition.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            The M5 is now the 14-inch MacBook Pro to buy. Prices move often, so check the current
            price on Amazon before you buy.
          </p>

          <AmazonDealBox productName="MacBook Pro 14 M5" href={AMAZON} />

          <p className="mt-10">
            <Link href="/" className="text-primary text-sm font-semibold">
              ← Back to Gadgets Finds
            </Link>
          </p>
        </div>
      </article>
      <Footer />
    </>
  );
}
