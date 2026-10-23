import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON = "https://www.amazon.com/Touchscreen-Cleaner-Versatile-Cleaners-Microfiber/dp/B07MB8P28S?tag=gadgetsfindswebsmediavid-20";

export const metadata: Metadata = {
  title: "YTT Touchscreen Screen Cleaner Spray Review — Gadgets Finds",
  description:
    "Portable two-in-one screen cleaner spray and microfiber cloth for phones, iPads, laptops, car touchscreens, and other devices.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/ytt-touchscreen-cleaner",
  },
  openGraph: {
    title: "YTT Touchscreen Screen Cleaner Spray",
    description: "Two-in-one spray and cloth for phones, tablets, laptops, and car screens.",
    url: "https://www.gadgets-finds.com/ytt-touchscreen-cleaner",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71dnnsMpNpL._AC_UL450_SY450_QL70_.jpg",
        width: 1200,
        height: 630,
        alt: "YTT Touchscreen Screen Cleaner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "YTT Touchscreen Screen Cleaner Spray",
    images: ["https://m.media-amazon.com/images/I/71dnnsMpNpL._AC_UL450_SY450_QL70_.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an
            Amazon Associate. We may earn from qualifying purchases if you buy through links on this
            page, at no extra cost to you. Prices and availability change on Amazon.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Screen Care
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            YTT Touchscreen Screen Cleaner Spray
          </h1>
          <p className="text-muted-foreground mb-6">
            Portable two-in-one spray and microfiber cloth for phones, iPads, laptops, car touchscreens, and other electronic devices.
          </p>

          <div className="mb-6">
            <a
              href={AMAZON}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
            >
              VIEW ON AMAZON
            </a>
          </div>

          <div className="mb-10 flex justify-center">
            <img
              src="https://m.media-amazon.com/images/I/71dnnsMpNpL._AC_UL450_SY450_QL70_.jpg"
              alt="YTT Touchscreen Screen Cleaner Spray"
              className="w-full max-w-[280px] h-auto rounded-xl"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            A compact screen cleaner that combines a spray bottle with an attached microfiber cloth. The goal is simple: clean fingerprints and smudges on the go without carrying separate wipes and a bottle.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How it works</h2>
          <p className="text-muted-foreground mb-4">
            You spray a small amount onto the cloth (or lightly onto the screen if you prefer), then wipe. Because the cloth stays attached to the bottle, it’s harder to lose one of the two pieces. Most people use it on phones, tablets, laptop screens, and car touchscreens.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who it’s useful for</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>People who constantly wipe fingerprints off their phone</li>
            <li>Drivers who deal with smudges on the car screen</li>
            <li>Anyone who prefers a reusable option over disposable wipes</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Limitations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Not ideal for camera lenses or very sensitive coatings</li>
            <li>Too much liquid can leave streaks on some screens</li>
            <li>Results vary depending on the type of screen and how dirty it is</li>
          </ul>

          <div className="my-8 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/iftP7v5lzD4"
              title="YTT Touchscreen Cleaner"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            As an Amazon Associate, Gadgets Finds earns from qualifying purchases. Prices and availability change on Amazon.
          </p>

          <AmazonDealBox
            productName="YTT Touchscreen Screen Cleaner Spray"
            href={AMAZON}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
