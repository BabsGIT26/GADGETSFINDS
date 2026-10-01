import type { Metadata } from "next";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON = "https://www.amazon.com/dp/B0DS2X13PH?tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "NVIDIA RTX 5090 Review — Gadgets Finds",
  description:
    "NVIDIA RTX 5090 delivers flagship GPU performance for gaming, content creation, and AI workloads with the new Blackwell architecture.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/nvidia-rtx-5090-ti-article" },
  openGraph: {
    title: "NVIDIA RTX 5090 Review — Gadgets Finds",
    description: "Flagship GPU performance for gaming, content creation, and AI with Blackwell architecture.",
    url: "https://www.gadgets-finds.com/nvidia-rtx-5090-ti-article",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      { url: "/assets/images/nvidia_rtx_5090.png", width: 1200, height: 630, alt: "NVIDIA RTX 5090" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "NVIDIA RTX 5090 Review — Gadgets Finds",
    images: ["/assets/images/nvidia_rtx_5090.png"],
  },
};

export default function NVIDIARTXArticle() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="relative h-[42vh] min-h-[240px] max-h-[420px] overflow-hidden">
          <AppImage
            src="/assets/images/nvidia_rtx_5090.png"
            alt="NVIDIA RTX 5090"
            className="absolute inset-0 h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute top-4 right-4 z-50">
            <Link
              href="/homepage"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/15 px-3 py-1.5 text-xs sm:text-sm font-medium text-white backdrop-blur-md"
            >
              <Icon name="ArrowLeftIcon" size={14} variant="outline" />
              Back to Home
            </Link>
          </div>
          <div className="relative z-30 flex h-full items-end pb-6">
            <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-white/80">Hardware</p>
              <h1 className="text-2xl sm:text-4xl font-bold text-white">
                NVIDIA RTX 5090 Benchmarks: Gaming Performance Breakthrough
              </h1>
            </div>
          </div>
        </div>

        <article className="mx-auto max-w-5xl px-5 pt-6 pb-10 sm:px-8">
          <p className="text-sm text-black mb-4">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases
            if you buy through links on this page, at no extra cost to you.
          </p>
         
          <p className="text-muted-foreground mb-6">
            The RTX 5090 is NVIDIA’s flagship GeForce card: Blackwell architecture, 32GB of GDDR7,
            and DLSS 4 with Multi Frame Generation.
          </p>

          <p className="mb-8">
            <a
              href={AMAZON}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-amber-400 text-zinc-950 text-sm font-semibold hover:bg-transparent hover:text-foreground border border-amber-400 transition-colors"
            >
              Check RTX 5090 on Amazon
            </a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            Flagship of the RTX 50 series, with a 512-bit memory bus and fifth-generation ray
            tracing cores. NVIDIA rates the card at 575W, up from 450W on the 4090, so the power
            supply and the case airflow matter as much as the GPU.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3">Who it is for</h2>
          <p className="text-muted-foreground mb-4">
            4K gaming with ray tracing, local AI workloads that need the 32GB frame buffer, and
            8K or heavy timeline work. It is a poor buy if you play at 1440p on a mid-range monitor.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3">Before you buy</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-8">
            <li>Founders Edition launched at $1,999. Partner cards cost more and the live price moves.</li>
            <li>Confirm the seller and that the listing is a 5090, not a 5080 or a used card.</li>
            <li>Plan for a strong PSU. The card does not include a monitor or a PC.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            The fastest consumer GeForce card in this generation, and priced like it. Check the
            current Amazon listing before treating any old MSRP as the price.
          </p>

          <AmazonDealBox productName="NVIDIA RTX 5090" href={AMAZON} />

          <div className="mt-8 border-t border-border pt-6">
            <Link
              href="/live-news-feed"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors"
            >
              <Icon name="NewspaperIcon" size={20} variant="outline" />
              <span>Live News Feed</span>
            </Link>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
