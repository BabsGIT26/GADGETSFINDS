import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import Link from "next/link";

const AMAZON = "https://www.amazon.com/s?k=mini+phone+tripod+portable&tag=gadgetsfindswebsmediavid-20";
const IMAGE = "https://m.media-amazon.com/images/I/71dnnsMpNpL._AC_UL450_SY450_QL70_.jpg";

export const metadata: Metadata = {
  title: "Portable Phone Tripod Review — Gadgets Finds",
  description: "Foldable mini tripod with phone clamp for video calls, photos, and content creation.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/portable-phone-tripod" },
  openGraph: {
    title: "Portable Phone Tripod",
    description: "Small foldable tripod that fits in a pocket.",
    url: "https://www.gadgets-finds.com/portable-phone-tripod",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "Portable Phone Tripod" }],
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
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Portable Phone Tripod</h1>
          <p className="text-muted-foreground mb-6">
            A compact foldable tripod designed to hold a smartphone for hands-free photos and video.
          </p>

          <div className="mb-6">
            <a href={AMAZON} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md">
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <img src={IMAGE} alt="Portable Phone Tripod" className="w-full max-w-[280px] h-auto rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            These mini tripods fold down to roughly the size of a smartphone and include a clamp or magnetic mount. They are useful for video calls, group photos, content creation, or simply propping a phone at a better angle.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            Set it on a table for a video call or time-lapse. Attach the phone and adjust the angle. Many models also work as a handheld grip when folded.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Strengths and limitations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Very portable</li>
            <li>Hands-free phone use</li>
            <li>Affordable</li>
          </ul>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Not as stable as full-size tripods</li>
            <li>Limited height</li>
          </ul>

          <AmazonDealBox productName="Portable Phone Tripod" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
