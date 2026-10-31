import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON =
  "https://www.amazon.com/dp/B0GR1F53WV?tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "MacBook Pro 16 M5 Max 36GB 2TB — Gadgets Finds",
  description:
    "Apple 2026 16.2-inch MacBook Pro with M5 Max, 18-core CPU, 32-core GPU, 36GB memory, 2TB SSD, Wi-Fi 7. Price changes on Amazon.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/macbook-pro-m5-max-article",
  },
  openGraph: {
    title: "MacBook Pro 16 M5 Max — 36GB / 2TB",
    description: "M5 Max, 18-core CPU, 32-core GPU, 36GB, 2TB. Price changes.",
    url: "https://www.gadgets-finds.com/macbook-pro-m5-max-article",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: "/assets/images/macbook_pro_m5_max.png",
        width: 1200,
        height: 630,
        alt: "Apple MacBook Pro 16-inch M5 Max",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "MacBook Pro 16 M5 Max — 36GB / 2TB",
    images: ["/assets/images/macbook_pro_m5_max.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-28 md:pt-16">
        <div className="container mx-auto px-4 pt-2 pb-10 max-w-3xl">
          <p className="text-sm text-foreground mb-6">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Laptops
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            MacBook Pro 16-inch, M5 Max — 36GB / 2TB
          </h1>
          <p className="text-muted-foreground mb-6">
            Apple’s 2026 16.2-inch MacBook Pro with the <strong>M5 Max</strong>: 18-core CPU,
            32-core GPU, <strong>36GB</strong> unified memory, <strong>2TB</strong> SSD, Wi-Fi 7.
            This Amazon card is the Silver finish. Price and stock change.
          </p>

          <a
            href={AMAZON}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
          >
            VIEW ON AMAZON
          </a>

          <div className="my-8 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/xDHZ1bEEeUI"
              title="MacBook Pro M5 Max review"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="w-full bg-muted flex items-center justify-center py-8 mt-2 mb-6 rounded-lg">
            <AppImage
              src="/assets/images/macbook_pro_m5_max.png"
              alt="Apple MacBook Pro 16-inch M5 Max"
              className="max-h-[400px] w-auto max-w-[85%] object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What this config is</h2>
          <p className="text-muted-foreground mb-4">
            M5 Max is the high chip in the 2026 MacBook Pro line. This exact card is the 32-core
            GPU version with 36GB and 2TB, not the 40-core Max and not a base M5 or M5 Pro.
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Chip: M5 Max, 18-core CPU (6 super + 12 performance), 32-core GPU</li>
            <li>Memory: 36GB unified, about 460GB/s bandwidth</li>
            <li>Storage: 2TB SSD</li>
            <li>Display: 16.2-inch Liquid Retina XDR, 3456×2234, ProMotion up to 120Hz</li>
            <li>Wireless: Wi-Fi 7, Bluetooth 6</li>
            <li>Ports: 3× Thunderbolt 5, HDMI, SDXC, MagSafe 3, headphone jack</li>
            <li>Finish on this ASIN: Silver</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Display and battery</h2>
          <p className="text-muted-foreground mb-4">
            The 16.2-inch Liquid Retina XDR stays the main reason people pick this size.
            1000 nits sustained full-screen, 1600 nits peak on HDR, and ProMotion up to 120Hz.
            Apple rates battery around 16–22 hours depending on the task. Real-world mixed use
            is closer to a full workday plus travel, not a full weekend unplugged.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who it is for</h2>
          <p className="text-muted-foreground mb-4">
            Video, 3D, large photo libraries, and on-device AI. 36GB is enough for most pro
            work. Step to 48GB or 64GB only if you already hit memory walls on an M-series Mac.
            2TB is the useful cut if you keep projects local.
          </p>
          <p className="text-muted-foreground mb-4">
            It also makes sense if you want Thunderbolt 5, multiple external displays, and
            a screen you can actually grade on without an external monitor every day.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Before you click</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Confirm Silver vs Space Black, and 36GB / 2TB, on the live listing.</li>
            <li>Confirm the live price. $3,499 was recent, not a promise.</li>
            <li>Memory and storage are not user-upgradeable.</li>
            <li>This is a 16-inch. The 14-inch M5 Max is a different machine.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            The right MacBook Pro if you want M5 Max power with 2TB already on board. Skip it if
            you only browse and write. Open the Amazon listing before you treat $3,499 as live.
          </p>

          <AmazonDealBox
            productName="MacBook Pro 16 M5 Max 36GB 2TB"
            href={AMAZON}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
