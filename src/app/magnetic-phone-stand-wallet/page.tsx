import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import Link from "next/link";

const AMAZON = "https://www.amazon.com/s?k=MagSafe+wallet+stand&tag=gadgetsfindswebsmediavid-20";
const IMAGE = "https://m.media-amazon.com/images/I/51FsefzzP3L.jpg";

export const metadata: Metadata = {
  title: "Magnetic Phone Stand Wallet Review — Gadgets Finds",
  description: "MagSafe wallet that doubles as a kickstand. Holds cards and props your phone for viewing.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/magnetic-phone-stand-wallet" },
  openGraph: {
    title: "Magnetic Phone Stand Wallet",
    description: "Wallet and kickstand in one MagSafe accessory.",
    url: "https://www.gadgets-finds.com/magnetic-phone-stand-wallet",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "Magnetic Phone Stand Wallet" }],
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

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Accessories</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Magnetic Phone Stand Wallet</h1>
          <p className="text-muted-foreground mb-6">
            A slim MagSafe accessory that holds cards and folds out into a kickstand.
          </p>

          <div className="mb-6">
            <a href={AMAZON} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md">
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <img src={IMAGE} alt="Magnetic Phone Stand Wallet" className="w-full max-w-[280px] h-auto rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            These accessories attach magnetically to MagSafe phones. They hold 1-3 cards and unfold into a stable kickstand so you can prop the phone for video calls, movies, or navigation without needing a separate stand.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            Keep a few cards on the back of the phone for quick access. Flip the stand out when watching content or joining a call. Many models also work as a grip for one-handed use.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Strengths and limitations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Combines wallet and stand</li>
            <li>No extra bulk when folded</li>
            <li>Magnetic attachment</li>
          </ul>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Limited card capacity</li>
            <li>Best with MagSafe phones</li>
          </ul>

          <AmazonDealBox productName="Magnetic Phone Stand Wallet" href={AMAZON} />

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
