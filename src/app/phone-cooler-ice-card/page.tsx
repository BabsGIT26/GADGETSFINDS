import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON = "https://www.amazon.com/Phone-Cooler-Magnetic-Semiconductor-Streaming/dp/B0DYTYJ7WJ?tag=gadgetsfindswebsmediavid-20";
const IMAGE = "https://m.media-amazon.com/images/I/71K3I5p0FDL.jpg";

export const metadata: Metadata = {
  title: "Phone Cooler Ice Card Review — Gadgets Finds",
  description: "Magnetic phone cooler that attaches to the back of your phone to reduce heat during gaming or charging.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/phone-cooler-ice-card" },
  openGraph: {
    title: "Phone Cooler Ice Card",
    description: "Keep your phone cool with a magnetic cooler.",
    url: "https://www.gadgets-finds.com/phone-cooler-ice-card",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "Phone Cooler Ice Card" }],
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

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Cooling</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Phone Cooler Ice Card</h1>
          <p className="text-muted-foreground mb-6">
            A small magnetic cooler that attaches to the back of your phone to help dissipate heat during heavy use.
          </p>

          <div className="mb-6">
            <a href={AMAZON} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md">
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <img src={IMAGE} alt="Phone Cooler Ice Card" className="w-full max-w-[280px] h-auto rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            Magnetic phone coolers (sometimes called Ice Card style) use a small fan or thermoelectric element and strong magnets to stick to the back of a phone. They pull heat away from the device during gaming, video recording, or fast charging.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            Snap it on before a long gaming session or when recording video outdoors. It can help reduce thermal throttling so the phone maintains performance longer.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Strengths and limitations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Helps reduce overheating</li>
            <li>Magnetic and easy to attach</li>
            <li>Portable</li>
          </ul>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Adds some bulk</li>
            <li>Needs power (battery or USB)</li>
            <li>Results vary by phone and workload</li>
          </ul>

          <AmazonDealBox productName="Phone Cooler Ice Card" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
