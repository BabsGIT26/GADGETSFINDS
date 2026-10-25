import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import Link from "next/link";

const AMAZON = "https://www.amazon.com/UGREEN-5000mAh-Ultra-Magnetic-Power/dp/B0F6NFHB31?tag=gadgetsfindswebsmediavid-20";
const IMAGE = "https://m.media-amazon.com/images/I/51FsefzzP3L.jpg";

export const metadata: Metadata = {
  title: "Ultra-Slim Magnetic Power Bank Review — Gadgets Finds",
  description: "Ultra-thin MagSafe-compatible power bank with Qi2 wireless charging. Fits in a pocket and snaps onto your phone.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/ultra-slim-magnetic-power-bank" },
  openGraph: {
    title: "Ultra-Slim Magnetic Power Bank",
    description: "Qi2 magnetic wireless charging in an ultra-thin design.",
    url: "https://www.gadgets-finds.com/ultra-slim-magnetic-power-bank",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "Ultra-Slim Magnetic Power Bank" }],
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
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Power</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Ultra-Slim Magnetic Power Bank</h1>
          <p className="text-muted-foreground mb-6">
            A pocket-thin MagSafe-compatible power bank that snaps onto your phone for wireless charging.
          </p>

          <div className="mb-6">
            <a href={AMAZON} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md">
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <img src={IMAGE} alt="Ultra-Slim Magnetic Power Bank" className="w-full max-w-[280px] h-auto rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            These ultra-slim magnetic power banks (like the UGREEN Magflow Air series) are only a few millimeters thick. They use strong magnets and Qi2 wireless charging so you can attach them directly to the back of a compatible iPhone and charge without a cable.
          </p>
          <p className="text-muted-foreground mb-4">
            Most models offer 5,000–10,000 mAh capacity, 15W wireless charging, and a USB-C port for wired charging or recharging the bank itself.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            Snap it on when your battery is low and keep using your phone one-handed. Many people leave it attached during travel or long days out. The slim profile means it doesn’t add much bulk compared to traditional power banks.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Strengths and limitations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Very thin and pocketable</li>
            <li>Convenient magnetic attachment</li>
            <li>No cable needed for iPhone users</li>
          </ul>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Best with MagSafe-compatible phones</li>
            <li>Wireless charging is slower than wired</li>
            <li>Capacity is lower than chunky power banks</li>
          </ul>

          <AmazonDealBox productName="Ultra-Slim Magnetic Power Bank" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
