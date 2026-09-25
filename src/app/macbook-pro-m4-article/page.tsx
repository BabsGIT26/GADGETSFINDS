import type { Metadata } from "next";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON = "https://www.amazon.com/s?k=MacBook+Pro+M4&tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "MacBook Pro M4 Review — Gadgets Finds",
  description:
    "MacBook Pro 14-inch M4: display, battery, ports, who should buy it, and where to check the Amazon listing.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/macbook-pro-m4-article" },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="w-full bg-muted flex items-center justify-center py-10">
          <AppImage
            src="/assets/images/macbook_pro_m_four.png"
            alt="MacBook Pro M4"
            className="max-h-[400px] w-auto max-w-[85%] object-contain"
          />
        </div>

        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Laptops</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">MacBook Pro M4</h1>
          <p className="text-sm text-muted-foreground mb-8">By Gadgets Finds</p>
          <p className="text-muted-foreground mb-8">
            Apple’s 14-inch MacBook Pro with the M4 chip launched late 2024. Base U.S. configuration
            is typically M4, 16GB unified memory, 512GB SSD. This page summarizes public specs and
            buying advice. It is not a 15-year lab test by a fictional reviewer.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">What you get</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>14.2-inch Liquid Retina XDR, ProMotion up to 120Hz</li>
            <li>M4: 10-core CPU / 10-core GPU on the entry chip</li>
            <li>16GB unified memory on the base model (configurable higher)</li>
            <li>Three Thunderbolt / USB-C ports, HDMI, SDXC, MagSafe, headphone jack</li>
            <li>Very long battery life versus most Windows 14-inch work laptops</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who should buy it</h2>
          <p className="text-muted-foreground mb-4">
            Video, photo, Xcode, and anyone already in Safari / iPhone / iPad. Choose M4 Pro / M4 Max
            only if you export huge timelines or run VMs all day. Most people should stay on base M4
            or jump to a discounted config rather than maxing RAM on day one.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Watch-outs</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Apple’s RAM and SSD upgrades are expensive — pick storage you will keep.</li>
            <li>Gaming is not the reason to buy this machine.</li>
            <li>Confirm the Amazon listing is Apple or Amazon sold, not a random config bundle.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            Still one of the best 14-inch professional laptops you can actually add to a cart.
            Check the live Amazon price; it moves often versus Apple’s $1,599 starting MSRP.
          </p>

          <AmazonDealBox productName="MacBook Pro M4" href={AMAZON} />

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
