import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import Link from "next/link";

const AMAZON = "https://www.amazon.com/Anker-Certified-Ultra-Fast-MagSafe-Compatible-Portable/dp/B0CFDQ9QH5?tag=gadgetsfindswebsmediavid-20";
const IMAGE = "https://m.media-amazon.com/images/I/61DzAk62YOL.jpg";

export const metadata: Metadata = {
  title: "Anker MagGo Power Bank Review — Gadgets Finds",
  description: "Qi2 certified MagSafe power bank with smart display and foldable stand. 10,000mAh capacity.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/anker-maggo-power-bank" },
  openGraph: {
    title: "Anker MagGo Power Bank",
    description: "Magnetic wireless charging with a smart display and stand.",
    url: "https://www.gadgets-finds.com/anker-maggo-power-bank",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "Anker MagGo Power Bank" }],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases.
          </p>

          <div className="flex justify-end mt-2 mb-6">
            <div className="border-2 border-red-500 rounded px-1 py-0.5">
              <Link
                href="/mini-gadgets"
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-red-600 hover:bg-red-700 text-white font-medium text-xs rounded transition-colors"
              >
                ← Back to Mini Gadgets
              </Link>
            </div>
          </div>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Power</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Anker MagGo Power Bank</h1>
          <p className="text-muted-foreground mb-6">
            A Qi2-certified magnetic power bank with a smart display and built-in stand for hands-free charging.
          </p>

          <div className="mb-6">
            <a href={AMAZON} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md">
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <img src={IMAGE} alt="Anker MagGo Power Bank" className="w-full max-w-[280px] h-auto rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            The Anker MagGo is a 10,000mAh power bank that snaps onto MagSafe-compatible iPhones and delivers up to 15W wireless charging. It includes a small smart display that shows battery percentage and a foldable stand so you can prop your phone while it charges.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            Snap it on for wireless charging on the go, or use the stand on a desk or airplane tray table for hands-free video or navigation. The USB-C port also supports wired charging.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Strengths and limitations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Strong MagSafe attachment</li>
            <li>Useful smart display</li>
            <li>Built-in stand</li>
          </ul>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Best with iPhone 12 and newer</li>
            <li>Wireless charging is slower than cable</li>
          </ul>

          <AmazonDealBox productName="Anker MagGo Power Bank" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
