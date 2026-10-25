import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import Link from "next/link";

const AMAZON = "https://www.amazon.com/OBSBOT-Lightweight-Microphone-Space-Grey/dp/B0D9W7J9SK?tag=gadgetsfindswebsmediavid-20";
const IMAGE = "https://m.media-amazon.com/images/I/51OZ72zdwsL.jpg";

export const metadata: Metadata = {
  title: "Ultra-Mini Webcam Review — Gadgets Finds",
  description: "A tiny 4K webcam small enough to fit in a pocket. Ideal for travel and video calls.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/ultra-mini-webcam" },
  openGraph: {
    title: "Ultra-Mini Webcam",
    description: "Pocket-sized 4K webcam for video calls.",
    url: "https://www.gadgets-finds.com/ultra-mini-webcam",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "Ultra-Mini Webcam" }],
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

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Video</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Ultra-Mini Webcam</h1>
          <p className="text-muted-foreground mb-6">
            A very small webcam (often under 2 ounces) that delivers high-resolution video for calls and meetings.
          </p>

          <div className="mb-6">
            <a href={AMAZON} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md">
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <img src={IMAGE} alt="Ultra-Mini Webcam" className="w-full max-w-[280px] h-auto rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            Ultra-mini webcams like the OBSBOT Meet 2 are designed to be extremely compact while still offering 4K video. They connect via USB-C and often include a small stand or clip.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            Throw it in a laptop bag or pocket when traveling. Plug it in for video calls when the built-in laptop camera isn’t good enough. Some models have AI framing and gesture controls.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Strengths and limitations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Extremely portable</li>
            <li>Better quality than many laptop cameras</li>
            <li>Easy to carry</li>
          </ul>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Fewer features than full-size webcams</li>
            <li>May need a small stand for best angle</li>
          </ul>

          <AmazonDealBox productName="Ultra-Mini Webcam" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
