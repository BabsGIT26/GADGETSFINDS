import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import Link from "next/link";

const AMAZON = "https://www.amazon.com/Apple-AirTag-2nd-Generation-Precision/dp/B0GJTFXNRX?tag=gadgetsfindswebsmediavid-20";
const IMAGE = "https://m.media-amazon.com/images/I/61Qd9Z9caRL.jpg";

export const metadata: Metadata = {
  title: "Apple AirTag Review — Gadgets Finds",
  description: "Precision item tracker that works with the Find My network. Attach it to keys, bags, or luggage.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/apple-airtag" },
  openGraph: {
    title: "Apple AirTag",
    description: "Find your keys, bag, or luggage with the Find My network.",
    url: "https://www.gadgets-finds.com/apple-airtag",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "Apple AirTag" }],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases.
          </p>

          <div className="mb-4">
            <Link href="/mini-gadgets" className="inline-flex items-center text-sm text-red-500 hover:text-red-400 font-medium">
              ← Back to Mini Gadgets
            </Link>
          </div>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Tracking</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Apple AirTag</h1>
          <p className="text-muted-foreground mb-6">
            A small Bluetooth tracker that works with Apple’s Find My network to help you locate keys, bags, wallets, and other items.
          </p>

          <div className="mb-6">
            <a href={AMAZON} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md">
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <img src={IMAGE} alt="Apple AirTag" className="w-full max-w-[280px] h-auto rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            The AirTag is a coin-sized tracker that uses Bluetooth and the crowd-sourced Find My network. When it is near an Apple device, its location can be reported to you. It also supports Precision Finding with Ultra Wideband on newer iPhones.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            Most people attach one to keys or put it inside a bag or suitcase. You can play a sound on the AirTag when you’re nearby, or see its last known location in the Find My app.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Strengths and limitations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Works well inside the Apple ecosystem</li>
            <li>Long battery life (replaceable CR2032)</li>
            <li>Precision Finding on supported iPhones</li>
          </ul>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Requires an Apple device to set up and use fully</li>
            <li>Not as useful if you don’t use Find My</li>
          </ul>

          <AmazonDealBox productName="Apple AirTag" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
