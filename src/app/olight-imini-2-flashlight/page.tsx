import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON = "https://www.amazon.com/OLIGHT-Rechargeable-Keychain-Flashlight-Emergencies/dp/B0C54ZH8WW?tag=gadgetsfindswebsmediavid-20";
const IMAGE = "https://m.media-amazon.com/images/I/61xiYeMNojL.jpg";

export const metadata: Metadata = {
  title: "OLIGHT iMini 2 Flashlight Review — Gadgets Finds",
  description: "Tiny rechargeable keychain flashlight with magnetic base and USB charging. 50 lumens.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/olight-imini-2-flashlight" },
  openGraph: {
    title: "OLIGHT iMini 2 Flashlight",
    description: "Compact keychain light that turns on when you detach the magnetic cap.",
    url: "https://www.gadgets-finds.com/olight-imini-2-flashlight",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "OLIGHT iMini 2 Flashlight" }],
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
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">OLIGHT iMini 2 Flashlight</h1>
          <p className="text-muted-foreground mb-6">
            A very small rechargeable flashlight designed to live on a keychain or bag.
          </p>

          <div className="mb-6">
            <a href={AMAZON} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md">
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <img src={IMAGE} alt="OLIGHT iMini 2 Flashlight" className="w-full max-w-[280px] h-auto rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            The iMini 2 is only 55mm long and weighs about 20g. It produces 50 lumens and turns on instantly when you detach the magnetic cap. The magnetic base lets you stick it to metal surfaces for hands-free use. It charges via a built-in USB plug on the cap.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            Keep it on keys or a bag for quick light when you need it. Attach it magnetically to a car door or toolbox when working in low light. The small size means it is always with you.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Strengths and limitations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Extremely small and light</li>
            <li>Magnetic hands-free mode</li>
            <li>Rechargeable</li>
          </ul>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Only 50 lumens</li>
            <li>Runtime is limited on one charge</li>
          </ul>

          <AmazonDealBox productName="OLIGHT iMini 2 Flashlight" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
