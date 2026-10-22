import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON_IPHONE_DUO = "https://www.amazon.com/s?k=iPhone+Duo&tag=gadgetsfindswebsite-20";
const AMAZON_ZFOLD8 = "https://www.amazon.com/dp/B0H126B3KV?tag=gadgetsfindswebsite-20";
const AMAZON_ZFOLD8_ULTRA = "https://www.amazon.com/s?k=Galaxy+Z+Fold+8+Ultra&tag=gadgetsfindswebsite-20";
const AMAZON_PIXEL_FOLD = "https://www.amazon.com/dp/B0H6R2NGMZ?tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "Best Foldable Phones 2026: iPhone Duo vs Galaxy Z Fold 8 vs Pixel 11 Pro Fold | Gadgets Finds",
  description:
    "Premium comparison of the top foldable phones in 2026. iPhone Duo, Samsung Galaxy Z Fold 8, Galaxy Z Fold 8 Ultra, and Google Pixel 11 Pro Fold. Specs, MKBHD insights, videos, and Amazon links.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/best-foldable-phones-2026",
  },
  openGraph: {
    title: "Best Foldable Phones 2026 Comparison",
    description: "iPhone Duo, Galaxy Z Fold 8, Pixel 11 Pro Fold — premium foldables compared with videos and reviews.",
    url: "https://www.gadgets-finds.com/best-foldable-phones-2026",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: "https://macdailynews.com/wp-content/uploads/2026/09/260911_iphone_duo.png",
        width: 1200,
        height: 630,
        alt: "Best Foldable Phones 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "Best Foldable Phones 2026",
    images: ["https://macdailynews.com/wp-content/uploads/2026/09/260911_iphone_duo.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-4xl">
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an
            Amazon Associate. We may earn from qualifying purchases if you buy through links on this
            page, at no extra cost to you. Prices and availability change on Amazon.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Comparison
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Best Foldable Phones 2026
          </h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Apple finally entered the foldable market with the iPhone Duo. Samsung refined its Galaxy Z Fold 8 line, and Google improved the Pixel 11 Pro Fold. Here’s how the top premium options compare in late 2026, including insights and videos from reviewers like Marques Brownlee (MKBHD).
          </p>

          {/* Hero comparison image */}
          <div className="mb-10 rounded-xl overflow-hidden">
            <img
              src="https://cdn.neowin.com/news/images/uploaded/2026/09/1790266513_foldables_16x9_gray_left_full.webp"
              alt="iPhone Duo, Galaxy Z Fold 8 Ultra and Pixel 11 Pro Fold comparison"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Phone</th>
                  <th className="text-left p-3">Starting Price</th>
                  <th className="text-left p-3">Inner / Cover</th>
                  <th className="text-left p-3">Weight</th>
                  <th className="text-left p-3">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-semibold">iPhone Duo</td>
                  <td className="p-3">$1,999</td>
                  <td className="p-3">7.6" / 5.4"</td>
                  <td className="p-3">254 g</td>
                  <td className="p-3">iPhone users who want the fold</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Galaxy Z Fold 8</td>
                  <td className="p-3">$1,899</td>
                  <td className="p-3">7.6" / 5.5"</td>
                  <td className="p-3">201 g</td>
                  <td className="p-3">Lightest, most daily-friendly</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Galaxy Z Fold 8 Ultra</td>
                  <td className="p-3">$2,099</td>
                  <td className="p-3">8.0" / 6.5"</td>
                  <td className="p-3">215 g</td>
                  <td className="p-3">Bigger screen + better cameras</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Pixel 11 Pro Fold</td>
                  <td className="p-3">$1,899</td>
                  <td className="p-3">8.0" / 6.5"</td>
                  <td className="p-3">239 g</td>
                  <td className="p-3">IP68 + real zoom</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* iPhone Duo */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Apple iPhone Duo</h2>
            <div className="mb-6 rounded-xl overflow-hidden">
              <img
                src="https://macdailynews.com/wp-content/uploads/2026/09/260911_iphone_duo.png"
                alt="Apple iPhone Duo"
                className="w-full h-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4">
              Apple’s first foldable. Book-style design with a 5.4-inch cover screen and 7.6-inch inner display (nano-texture). Powered by the A20 Pro, IP68, titanium build. Starts at $1,999.
            </p>
            <p className="text-muted-foreground mb-4">
              MKBHD tested it for over a week and called it “first-generation fun.” He praised the hinge, animations, and overall polish, but noted the weight, weaker cameras compared to Pro models, lack of Face ID (Touch ID instead), and apps that aren’t fully optimized for the large screen. His take: most people should skip it unless they specifically want the foldable experience.
            </p>

            {/* MKBHD iPhone Duo video */}
            <div className="aspect-video mb-6 rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/ESABTN4VtrA"
                title="MKBHD iPhone Duo Review"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            <ul className="list-disc pl-5 text-muted-foreground space-y-1 mb-6">
              <li>Strongest software polish and animations</li>
              <li>Heaviest of the group (~254 g)</li>
              <li>No dedicated telephoto</li>
              <li>Best if you are already in the Apple ecosystem</li>
            </ul>
            <a
              href={AMAZON_IPHONE_DUO}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
            >
              VIEW ON AMAZON
            </a>
          </section>

          {/* Galaxy Z Fold 8 */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Samsung Galaxy Z Fold 8</h2>
            <div className="mb-6 rounded-xl overflow-hidden">
              <img
                src="https://www.sammyfans.com/wp-content/uploads/2026/08/mkbhd-galaxy-z-fold-8-review-img.jpg"
                alt="Galaxy Z Fold 8"
                className="w-full h-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4">
              The lightest premium foldable right now at just 201 g. Passport-style shape with a wider cover screen (5.5") that feels more natural one-handed. Inner screen is 7.6". Snapdragon 8 Elite Gen 5, 4,800 mAh battery.
            </p>
            <p className="text-muted-foreground mb-4">
              MKBHD was more impressed than he expected. He liked the thinner, more usable cover screen and said the form factor felt daily-drivable. Main trade-offs are the lack of a dedicated telephoto and only IP48 dust resistance.
            </p>

            {/* MKBHD Z Fold 8 video */}
            <div className="aspect-video mb-6 rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/Z6z_feacXW8"
                title="MKBHD Galaxy Z Fold 8 Review"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            <ul className="list-disc pl-5 text-muted-foreground space-y-1 mb-6">
              <li>Lightest major foldable</li>
              <li>Best cover screen usability</li>
              <li>Strong software support from Samsung</li>
              <li>Cameras are good but not Ultra-level</li>
            </ul>
            <a
              href={AMAZON_ZFOLD8}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
            >
              VIEW ON AMAZON
            </a>
          </section>

          {/* Galaxy Z Fold 8 Ultra */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Samsung Galaxy Z Fold 8 Ultra</h2>
            <p className="text-muted-foreground mb-4">
              The bigger, more feature-packed version. 8-inch inner screen, 6.5-inch cover, 200 MP main camera, and a thinner body. Starts around $2,099.
            </p>
            <p className="text-muted-foreground mb-4">
              Better if you want the largest possible screen and stronger camera hardware. It’s heavier than the regular Fold 8 and still carries the usual foldable compromises on zoom compared to a non-folding Ultra.
            </p>
            <a
              href={AMAZON_ZFOLD8_ULTRA}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
            >
              VIEW ON AMAZON
            </a>
          </section>

          {/* Pixel 11 Pro Fold */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Google Pixel 11 Pro Fold</h2>
            <div className="mb-6 rounded-xl overflow-hidden">
              <img
                src="https://i.guim.co.uk/img/media/465c638d2a524d24640b81b56960b158ce2eba32/811_172_5328_4263/master/5328.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&precrop=40:21,offset-x50,offset-y0"
                alt="Google Pixel 11 Pro Fold"
                className="w-full h-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4">
              8-inch inner display, 6.5-inch cover, full IP68 rating, and a real 5x telephoto. Tensor G6 chip. Starts at $1,899.
            </p>
            <p className="text-muted-foreground mb-4">
              Frequently recommended as the best overall foldable for most people because it combines a large screen, proper dust/water resistance, and usable zoom. Software is clean and AI features are strong.
            </p>
            <a
              href={AMAZON_PIXEL_FOLD}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
            >
              VIEW ON AMAZON
            </a>
          </section>

          <h2 className="text-2xl font-bold mt-10 mb-4">Quick Verdict</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-8">
            <li><strong>Already on iPhone and want the fold?</strong> iPhone Duo.</li>
            <li><strong>Want the lightest and most usable daily foldable?</strong> Galaxy Z Fold 8.</li>
            <li><strong>Want maximum screen + camera?</strong> Galaxy Z Fold 8 Ultra.</li>
            <li><strong>Want IP68 + real zoom?</strong> Pixel 11 Pro Fold.</li>
          </ul>

          <p className="text-sm text-muted-foreground mb-8">
            Prices and stock change. Always confirm the live listing on Amazon before buying. As an Amazon Associate, Gadgets Finds earns from qualifying purchases.
          </p>

          <AmazonDealBox
            productName="Top Foldable Phones 2026"
            href={AMAZON_ZFOLD8}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
