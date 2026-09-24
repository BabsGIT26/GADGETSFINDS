import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON = "https://www.amazon.com/s?k=Apple+Vision+Pro&tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "Apple Vision Pro Review — Gadgets Finds",
  description: "Apple Vision Pro first-generation spatial computer: who it is for and what to know before buying.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/apple-vision-pro-article" },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="relative min-h-[40vh] overflow-hidden">
          <AppImage src="/assets/images/apple_vision_pro.png" alt="Apple Vision Pro" className="w-full h-[42vh] object-cover" />
        </div>
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">XR</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Apple Vision Pro</h1>
          <p className="text-muted-foreground mb-8">
            First-generation headset launched 2024 (later M5 refresh exists). Vision Pro 2 is not out.
            Apple Store is often the cleaner buy than marketplace sellers.
          </p>
          <AmazonDealBox productName="Apple Vision Pro" href={AMAZON} />
          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            A spatial computer: micro-OLED displays, eye/hand tracking, external battery pack.
            It is not a cheap Quest rival. It is an Apple productivity / media device that happens
            to sit on your face.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3">Who it is for</h2>
          <p className="text-muted-foreground mb-4">
            Developers, video pros, and people already in the Apple ecosystem who accept the price
            and the battery pack. Most people should not start here.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3">Watch-outs</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Fit / Light Seal is personal; returns matter.</li>
            <li>Amazon listings mix accessories and third-party kits — check it is the headset.</li>
            <li>List price has moved with memory costs; confirm the live Amazon/Apple price.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            Real product, niche audience. Do not present it as a mass-market deal.
          </p>
          <AmazonDealBox productName="Apple Vision Pro" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
