import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON = "https://www.amazon.com/s?k=rechargeable+LED+keychain+light&tag=gadgetsfindswebsmediavid-20";
const IMAGE = "https://m.media-amazon.com/images/I/61pU8V8MjAL.jpg";

export const metadata: Metadata = {
  title: "LED Keychain Light Review — Gadgets Finds",
  description: "Bright rechargeable keychain light for everyday carry. Useful for finding keys or lighting small areas.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/led-keychain-light" },
  openGraph: {
    title: "LED Keychain Light",
    description: "Small rechargeable light that lives on your keys.",
    url: "https://www.gadgets-finds.com/led-keychain-light",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "LED Keychain Light" }],
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

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">EDC</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">LED Keychain Light</h1>
          <p className="text-muted-foreground mb-6">
            A compact rechargeable light designed to attach to a keychain for quick illumination.
          </p>

          <div className="mb-6">
            <a href={AMAZON} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md">
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <img src={IMAGE} alt="LED Keychain Light" className="w-full max-w-[280px] h-auto rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            These are small LED lights with a built-in battery that charge via USB-C or a magnetic contact. They clip onto keys and provide enough light to find a lock, look inside a bag, or navigate a dark room without using your phone.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            Attach it to your keys so it is always available. Use it when you do not want to drain your phone battery or when your hands are full. Some models have multiple brightness levels.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Strengths and limitations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Always with your keys</li>
            <li>Rechargeable</li>
            <li>Saves phone battery</li>
          </ul>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Limited brightness</li>
            <li>Small battery capacity</li>
          </ul>

          <AmazonDealBox productName="LED Keychain Light" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
