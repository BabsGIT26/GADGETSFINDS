import type { Metadata } from "next";
import ArticleJsonLd from "@/components/common/ArticleJsonLd";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import AmazonButton from "@/components/common/AmazonButton";
import CommentSection from "@/components/comments/CommentSection";

const AMAZON =
  "https://www.amazon.com/dp/B0GR19X8DC?tag=gadgetsfindswebsite-20";

const OG_IMAGE = "/assets/illustrations/laptop.svg";
const SHARE_IMAGE = "https://www.gadgets-finds.com/og/laptop";

export const metadata: Metadata = {
  title: "MacBook Air 13-inch M5 — 16GB, 512GB, Silver | Gadgets Finds",
  description:
    "2026 MacBook Air 13-inch with M5 chip, 13.6-inch Liquid Retina, 16GB unified memory, 512GB SSD, Touch ID, Wi-Fi 7. Silver. Price changes on Amazon.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/macbook-air-m5-13-article",
  },
  openGraph: {
    title: "MacBook Air 13-inch M5 — Silver",
    description: "M5, 16GB, 512GB, Liquid Retina, Wi-Fi 7. Price changes.",
    url: "https://www.gadgets-finds.com/macbook-air-m5-13-article",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: SHARE_IMAGE,
        width: 1200,
        height: 630,
        alt: "MacBook Air 13-inch M5 Silver",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "MacBook Air 13-inch M5 — Silver",
    images: [SHARE_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ArticleJsonLd path="/macbook-air-m5-13-article" headline={"MacBook Air 13-inch M5 — 16GB, 512GB, Silver"} description={"2026 MacBook Air 13-inch with M5 chip, 13.6-inch Liquid Retina, 16GB unified memory, 512GB SSD, Touch ID, Wi-Fi 7. Silver. Price changes on Amazon."} products={["Apple MacBook Air 13-inch M5 (16GB, 512GB)"]} />
      <article className="min-h-screen bg-background pt-28 md:pt-16">
        <div className="container mx-auto px-4 pt-2 pb-10 max-w-3xl">
          <p className="text-xs md:text-sm text-foreground mb-3">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Laptops
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            MacBook Air 13-inch — M5, 16GB, 512GB, Silver
          </h1>
          <p className="text-muted-foreground mb-6">
            Apple’s 2026 13.6-inch MacBook Air with the M5 chip: 16GB unified memory, 512GB SSD,
            Liquid Retina display, Touch ID, and Wi-Fi 7. Silver finish. Apple’s list price is $1,299.
            Amazon’s price and stock change, so check the listing for the current price.
          </p>

          <AmazonButton href={AMAZON} />

          <div className="my-8 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/URwVV5tTJIA"
              title="The MacBook Air with M5"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What this laptop is</h2>
          <p className="text-muted-foreground mb-4">
            This is the 13-inch MacBook Air (2026) with the M5 chip, not a Pro. ASIN B0GR19X8DC,
            model MDH74LL/A, Silver. It is the everyday thin-and-light: fanless, MagSafe, and two
            Thunderbolt 4 ports.
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Chip: Apple M5 (10-core CPU, 8- or 10-core GPU depending on config, 16-core Neural Engine)</li>
            <li>Memory: 16GB unified</li>
            <li>Storage: 512GB SSD</li>
            <li>Display: 13.6-inch Liquid Retina, 2560×1664, 500 nits, P3, True Tone</li>
            <li>Camera: 12MP Center Stage</li>
            <li>Connectivity: Wi-Fi 7, Bluetooth 6, Touch ID</li>
            <li>Color: Silver</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Performance and battery</h2>
          <p className="text-muted-foreground mb-4">
            M5 handles school, office, browsing, photo work, and light video. It is not a MacBook Pro
            for long 4K exports or heavy local AI. Apple rates battery at up to 18 hours of video
            streaming and up to 15 hours of wireless web. The 53.8 Wh pack is the same class as recent
            13-inch Airs.
          </p>
          <p className="text-muted-foreground mb-4">
            Ports: MagSafe 3, two Thunderbolt 4 (USB-C) ports, 3.5 mm headphone jack. It supports up to
            two external displays. Fast charge needs a 70W or higher USB-C source; the included adapter
            in the U.S. is the 40W Dynamic Power Adapter.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who it is for</h2>
          <p className="text-muted-foreground mb-4">
            Students, writers, and anyone who wants a quiet Apple laptop that lasts a workday.
            Stay on this config if 16GB and 512GB are enough. Step up to 24GB/32GB or 1TB only if you
            already know you need it — Apple upgrades are not cheap later.
          </p>
          <p className="text-muted-foreground mb-4">
            Skip it if you need HDMI, an SD slot, or sustained high GPU work. That is a Pro or a
            Windows machine with those ports.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Before you click</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Confirm Silver, 16GB, and 512GB on the live Amazon card.</li>
            <li>Sold by Amazon.com is the safer listing.</li>
            <li>Apple lists it at $1,299. Check Amazon for the current price before you pay.</li>
            <li>AppleCare+ is optional and sold separately.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            The right MacBook if you want the 13-inch Air, M5, and a solid base config in Silver.
            Open the Amazon listing to check the current price and stock before you decide.
          </p>

          <div className="w-full flex justify-center py-6 mb-10">
            <AppImage
              src={OG_IMAGE}
              alt="MacBook Air 13-inch M5 Silver"
              className="max-h-[400px] w-auto max-w-full object-contain"
            />
          </div>

          <AmazonDealBox
            productName="MacBook Air 13-inch M5 Silver"
            href={AMAZON}
          />

          <CommentSection articleSlug="macbook-air-m5-13-article" />
        </div>
      </article>
      <Footer />
    </>
  );
}
