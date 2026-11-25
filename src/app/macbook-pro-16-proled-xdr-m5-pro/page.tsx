import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import CommentSection from "@/components/comments/CommentSection";

const AMAZON = "https://www.amazon.com/dp/B0HPM9B9Q4?tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "16.3-inch MacBook Pro PROLED XDR, M5 Pro, Silver — Gadgets Finds",
  description:
    "The silver 16.3-inch MacBook Pro with a touch PROLED XDR display, M5 Pro (18-core CPU, 20-core GPU), 24GB memory, and 1TB storage.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/macbook-pro-16-proled-xdr-m5-pro",
  },
  openGraph: {
    title: "16.3-inch MacBook Pro PROLED XDR, M5 Pro, Silver",
    description:
      "Touch OLED, M5 Pro, 24GB unified memory, and 1TB. This listing is the silver 16-inch, not the M5 Max.",
    url: "https://www.gadgets-finds.com/macbook-pro-16-proled-xdr-m5-pro",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: "/assets/images/macbook-pro-16-proled-og-3.jpg",
        alt: "Silver MacBook Pro with PROLED XDR display",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "16.3-inch MacBook Pro PROLED XDR, M5 Pro, Silver",
    description: "M5 Pro, 24GB, 1TB, touch OLED. Confirm this exact configuration on Amazon.",
    images: ["/assets/images/macbook-pro-16-proled-og-3.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-28 md:pt-32">
        <div className="container mx-auto px-4 pt-2 pb-10 max-w-3xl">
          <p className="text-xs md:text-sm text-foreground mb-6">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Laptops</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            16.3-inch MacBook Pro with PROLED XDR, silver
          </h1>
          <p className="text-sm text-muted-foreground mb-8">By Gadgets Finds</p>

          <p className="text-muted-foreground mb-6">
            This listing is for the 2026 16.3-inch MacBook Pro in Silver, featuring the PROLED XDR display, M5 Pro chip (18-core CPU / 20-core GPU), 24GB of unified memory, and 1TB of SSD storage. Note that this is the standard M5 Pro tier—not the 14-inch variant or the M5 Max—and both memory and storage are fixed at purchase.
          </p>

          <p className="mb-8">
            <a
              href={AMAZON}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-amber-400 text-zinc-950 text-sm font-semibold hover:bg-transparent hover:text-foreground border border-amber-400 transition-colors"
            >
              View on Amazon
            </a>
          </p>

          <div className="w-full flex justify-center py-6 mb-10">
            <img
              src="/assets/images/macbook-pro-16-proled-amazon.jpg"
              alt="Silver MacBook Pro with the PROLED XDR display"
              className="max-h-[28rem] w-auto max-w-full object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">The screen</h2>
          <p className="text-muted-foreground mb-6">
            Apple calls this panel PROLED XDR. On the 16-inch model it is a 16.3-inch tandem
            OLED, 3472 by 2266, at 254 pixels per inch. Apple lists a 10,000,000:1 contrast
            ratio, 1,000 nits sustained full-screen, and 2,000 nits peak. ProMotion moves
            between 10Hz and 120Hz. The glass is touch, with a Dynamic Island, and this is
            the first MacBook Pro that works that way. A nano-texture glass option exists on
            other configurations. Confirm the glass on the Amazon page before you buy, because
            this silver listing is the standard coating unless the title says otherwise.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">The chip in this box</h2>
          <p className="text-muted-foreground mb-6">
            The M5 Pro here is the 18-core CPU, split by Apple into 6 super cores and 12
            performance cores, plus a 20-core GPU, a 16-core Neural Engine, and 307GB/s of
            memory bandwidth. This configuration ships with 24GB of unified memory and a 1TB
            SSD. The same chip can be ordered with 48GB or 64GB, and with 2TB or 4TB, but
            those are different listings. The M5 Max starts at 36GB, drives more external
            displays, and is heavier by a tenth of a pound. Do not treat those numbers as
            this laptop.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Ports, battery, and size</h2>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>Three Thunderbolt 5 ports, HDMI, an SDXC card slot, MagSafe 3, and a headphone jack.</li>
            <li>Apple says the M5 Pro can run up to three external displays and still use the built-in screen.</li>
            <li>100Wh battery. Apple rates the M5 Pro at up to 24 hours of video streaming and up to 17 hours of wireless web.</li>
            <li>Apple recommends at least a 94W charger. Fast charge needs a 140W or higher USB-C PD source.</li>
            <li>Wi-Fi 7, Bluetooth 6, and a 12MP Center Stage camera.</li>
            <li>4.0 pounds for the M5 Pro. The case is 0.63 inches thick, 14.0 inches wide, and 9.62 inches deep.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Skip it if</h2>
          <p className="text-muted-foreground mb-8">
            Skip it if you mostly browse, write, and edit photos. A MacBook Air does that for
            less, and the older mini-LED MacBook Pro is still sold next to this one. Skip it
            if you already know you need 48GB or more, because 24GB is fixed in this listing.
            The wider comparison is the{" "}
            <Link href="/best-macbooks-2026" className="text-primary underline">
              MacBook guide
            </Link>
            . The price on Amazon is the only price that matters for this silver configuration.
          </p>

          <AmazonDealBox productName="16-inch MacBook Pro PROLED XDR M5 Pro silver" href={AMAZON} />

          <CommentSection articleSlug="macbook-pro-16-proled-xdr-m5-pro" />
        </div>
      </article>
      <Footer />
    </>
  );
}
