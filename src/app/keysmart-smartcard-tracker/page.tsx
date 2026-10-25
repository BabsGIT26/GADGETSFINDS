import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import Link from "next/link";

const AMAZON = "https://www.amazon.com/KeySmart-SmartCard-MFI-Certified-Compatible-Rechargeable/dp/B0G7NB2MH9?tag=gadgetsfindswebsmediavid-20";
const IMAGE = "https://m.media-amazon.com/images/I/71zeGEFy1aL._AC_UL165_SR165,165_.jpg";

export const metadata: Metadata = {
  title: "KeySmart SmartCard Tracker Review — Gadgets Finds",
  description: "Ultra-thin credit card size tracker that works with Apple Find My and Google Find Hub. Recharges wirelessly.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/keysmart-smartcard-tracker" },
  openGraph: {
    title: "KeySmart SmartCard Tracker",
    description: "Wallet-sized Find My tracker that recharges wirelessly.",
    url: "https://www.gadgets-finds.com/keysmart-smartcard-tracker",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "KeySmart SmartCard Tracker" }],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <div className="flex justify-end mb-6">
            <div className="inline-block bg-zinc-900 border-2 border-red-500 rounded-2xl p-1.5 shadow-xl shadow-red-500/25">
              <Link
                href="/mini-gadgets"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
              >
                ← Back to Mini Gadgets
              </Link>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Tracking</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">KeySmart SmartCard Tracker</h1>
          <p className="text-muted-foreground mb-6">
            A credit-card thin tracker that slides into a wallet and works with Apple Find My and Google Find Hub.
          </p>

          <div className="mb-6">
            <a href={AMAZON} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md">
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <img src={IMAGE} alt="KeySmart SmartCard Tracker" className="w-full max-w-[280px] h-auto rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            The KeySmart SmartCard is only about 1.8mm thick, so it fits in a regular card slot without adding bulk. It supports both Apple Find My and Google Find Hub, and it recharges on any Qi wireless pad. Battery life is rated up to 11 months per charge.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            Slide it into a wallet, passport holder, or badge sleeve. If the wallet is left behind, you get an alert on your phone. You can also play a sound when you’re nearby.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Strengths and limitations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Fits in any wallet</li>
            <li>Works with both Apple and Android</li>
            <li>Wireless rechargeable</li>
          </ul>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Requires a phone to set up</li>
            <li>No replaceable battery</li>
          </ul>

          <AmazonDealBox productName="KeySmart SmartCard Tracker" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
