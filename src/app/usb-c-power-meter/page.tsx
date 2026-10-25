import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import Link from "next/link";

const AMAZON = "https://www.amazon.com/Eversame-Voltmeter-Ammeter-Voltage-Current/dp/B07MGQZHGM?tag=gadgetsfindswebsmediavid-20";
const IMAGE = "https://m.media-amazon.com/images/I/61xiYeMNojL.jpg";

export const metadata: Metadata = {
  title: "USB-C Power Meter Review — Gadgets Finds",
  description: "Test the real voltage, current, and wattage of your USB-C chargers, cables, and power banks.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/usb-c-power-meter" },
  openGraph: {
    title: "USB-C Power Meter",
    description: "See exactly how much power your charger and cable deliver.",
    url: "https://www.gadgets-finds.com/usb-c-power-meter",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "USB-C Power Meter" }],
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

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Tools</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">USB-C Power Meter</h1>
          <p className="text-muted-foreground mb-6">
            A small inline tester that shows voltage, current, and wattage so you can check if your charger and cable are performing as advertised.
          </p>

          <div className="mb-6">
            <a href={AMAZON} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md">
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <img src={IMAGE} alt="USB-C Power Meter" className="w-full max-w-[280px] h-auto rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            Devices like the Eversame USB-C Power Meter sit between your charger and cable (or cable and device). They display real-time voltage, amperage, and power so you can verify fast-charging speeds and detect weak cables.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            Plug it in when testing a new charger, checking a suspicious cable, or measuring how much power a power bank actually delivers. Useful for anyone who buys a lot of USB-C accessories.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Strengths and limitations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Shows real charging performance</li>
            <li>Helps identify bad cables</li>
            <li>Small and cheap</li>
          </ul>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Not needed for everyday charging</li>
            <li>Display can be small on some models</li>
          </ul>

          <AmazonDealBox productName="USB-C Power Meter" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
