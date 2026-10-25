import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import Link from "next/link";

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

          <div className="mb-4">
            <Link href="/mini-gadgets" className="inline-flex items-center text-sm text-red-500 hover:text-red-400 font-medium">
              ← Back to Mini Gadgets
            </Link>
          </div>

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
            The YTT is a small all-in-one screen cleaner. It combines a fine mist spray bottle with a microfiber cloth sleeve that stays attached. The idea is to clean fingerprints and oily marks without carrying a separate bottle and cloth. It’s roughly the size of a large lipstick and fits in a bag, car console, or laptop sleeve.
          </p>
          <p className="text-muted-foreground mb-4">
            Most versions contain about 15 ml of cleaning solution. The liquid is generally alcohol-free and designed for glass and coated screens. Users typically report that a couple of sprays are enough for a phone or tablet.
          </p>

          <div className="my-8 flex justify-center">
            <img
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/newscms/2022_40/1912888/221003-screen-cleaners-2x1-aw.jpg"
              alt="YTT screen cleaner in use"
              className="w-full max-w-md rounded-xl"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">How people use it</h2>
          <p className="text-muted-foreground mb-4">
            The common method is to spray a light mist onto the screen (or onto the cloth), then wipe with the microfiber side. Because the cloth is attached, you don’t have to hunt for a separate wipe. Many reviewers say it works better than dry cloths alone on oily fingerprints.
          </p>
          <p className="text-muted-foreground mb-4">
            It’s frequently used on phones, iPads, MacBooks, and car touchscreens. Some people also try it on monitors and smart TVs. Results are generally better on smaller screens; large TVs can require more liquid and more wiping.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Strengths and limitations</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Convenient for daily fingerprint removal</li>
            <li>Portable and less likely to lose the cloth</li>
            <li>Works on most modern phone and tablet screens</li>
          </ul>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-10">
            <li>Too much liquid can leave streaks on some coatings</li>
            <li>Not ideal for camera lenses or specialized anti-reflective glass</li>
            <li>The cloth eventually needs cleaning or replacement</li>
            <li>Effectiveness varies by screen type and how dirty it is</li>
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
