import type { Metadata } from "next";
import Header from "@/components/common/Header";
import { LivePrice, ProductPhoto } from "@/components/common/AmazonMedia";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import Link from "next/link";
import CommentSection from "@/components/comments/CommentSection";

import { illustrationAlt } from "@/lib/illustrations";
const AMAZON = "https://www.amazon.com/OBSBOT-Lightweight-Microphone-Space-Grey/dp/B0D9W7J9SK?tag=gadgetsfindswebsmediavid-20";
const IMAGE = "/assets/illustrations/webcam.svg";
const SHARE_IMAGE = "https://www.gadgets-finds.com/og/webcam";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
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
    images: [{ url: SHARE_IMAGE, width: 1200, height: 630, alt: "Ultra-Mini Webcam" }],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background site-pad-top">
        <div className="container mx-auto px-4 pb-10 max-w-3xl">
          <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Video</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Ultra-Mini Webcam</h1>
          <p className="text-muted-foreground mb-6">
            A very small webcam (often under 2 ounces) that delivers high-resolution video for calls and meetings.
          </p>

          <LivePrice url={AMAZON} className="mb-3" />

          <div className="mb-6">
            <a href={AMAZON} rel="nofollow sponsored noopener noreferrer" className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md">
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <ProductPhoto url={AMAZON} fallback={IMAGE} alt="Ultra-Mini Webcam" />
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

          <CommentSection articleSlug="ultra-mini-webcam" />

          <div className="flex justify-end mt-8 mb-2">
            <Link
              href="/mini-gadgets"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white font-medium text-xs rounded transition-colors"
            >
              ← Back to Mini Gadgets
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
