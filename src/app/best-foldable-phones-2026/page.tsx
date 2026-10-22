import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";

export const metadata: Metadata = {
  title: "Best Foldable Phones 2026: iPhone Duo vs Galaxy Z Fold 8 vs Pixel",
  description:
    "Premium foldable phone comparison 2025–2026. iPhone Duo, Samsung Galaxy Z Fold 8 and Google Pixel Pro Fold — specs, MKBHD-style insights, and who should buy which.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/best-foldable-phones-2026",
  },
  openGraph: {
    title: "Best Foldable Phones 2026 Comparison",
    description: "iPhone Duo vs Galaxy Z Fold 8 vs Pixel — which premium foldable to buy.",
    url: "https://www.gadgets-finds.com/best-foldable-phones-2026",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: "/assets/images/foldables_2026.png", width: 1200, height: 630, alt: "Premium foldable phones 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "Best Foldable Phones 2026",
    images: ["/assets/images/foldables_2026.png"],
  },
};

const TAG = "gadgetsfindswebsite-20";

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-1 md:pt-1">
        <div className="w-full bg-muted flex items-center justify-center py-10 pb-2">
          <AppImage
            src="/assets/images/foldables_2026.png"
            alt="Premium foldable phones 2026"
            className="max-h-[400px] w-auto max-w-[85%] object-contain rounded-xl"
          />
        </div>

        <div className="container mx-auto px-4 pt-2 pb-10 max-w-3xl">
          <p className="text-sm text-black mb-6">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Foldables</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Best Foldable Phones 2026: Premium Comparison
          </h1>
          <p className="text-muted-foreground mb-6">
            Apple’s first foldable (iPhone Duo), Samsung’s refined Galaxy Z Fold 8, and Google’s Pixel Pro Fold lead the premium foldable segment in late 2025–2026. Here’s a clear comparison based on specs, real-world feedback from reviewers like MKBHD, and who each phone is actually for.
          </p>

          <a
            href={`https://www.amazon.com/s?k=foldable+phones+2026&tag=${TAG}`}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
          >
            VIEW FOLDABLES ON AMAZON
          </a>

          <h2 className="text-2xl font-bold mt-10 mb-3">Quick comparison</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-muted-foreground border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Model</th>
                  <th className="text-left py-2">Starting price</th>
                  <th className="text-left py-2">Weight</th>
                  <th className="text-left py-2">Inner screen</th>
                  <th className="text-left py-2">Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">iPhone Duo</td>
                  <td>$1,999</td>
                  <td>~254 g</td>
                  <td>7.6"</td>
                  <td>Apple ecosystem, polish</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Galaxy Z Fold 8</td>
                  <td>~$1,899</td>
                  <td>~201 g</td>
                  <td>7.6"</td>
                  <td>Lightest, mature Android</td>
                </tr>
                <tr>
                  <td className="py-2">Pixel Pro Fold</td>
                  <td>~$1,899</td>
                  <td>~239 g</td>
                  <td>8.0"</td>
                  <td>Cameras + clean software</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">iPhone Duo — Apple’s first foldable</h2>
          <p className="text-muted-foreground mb-4">
            Announced September 2026, shipping late October. Book-style design with a 5.4" outer display and 7.6" nano-texture inner screen. A20 Pro chip, IP68, titanium frame, up to 2 TB storage. MKBHD called it “first-generation fun”: excellent hinge, animations and build, but heavier than expected, no Face ID (Touch ID instead), weaker cameras than Pro models, and apps that still waste space on the large screen. Best if you live in the Apple ecosystem and want the pocketable big screen.
          </p>
          <a
            href={`https://www.amazon.com/s?k=iPhone+Duo&tag=${TAG}`}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md mb-8"
          >
            VIEW IPHONE DUO ON AMAZON
          </a>

          <h2 className="text-2xl font-bold mt-10 mb-3">Samsung Galaxy Z Fold 8</h2>
          <p className="text-muted-foreground mb-4">
            Samsung’s 2026 book-style foldable. Lighter and thinner than the iPhone Duo (~201 g, 9.7 mm closed). 5.5" outer / 7.6" inner, Snapdragon 8 Elite Gen 5 for Galaxy, strong multitasking and DeX. Reviewers (including MKBHD’s earlier Fold coverage) praise the improved crease, daily usability and software maturity. Cameras are solid but lack a dedicated telephoto on some configs. The safer, more polished Android foldable right now.
          </p>
          <a
            href={`https://www.amazon.com/s?k=Galaxy+Z+Fold+8&tag=${TAG}`}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md mb-8"
          >
            VIEW GALAXY Z FOLD 8 ON AMAZON
          </a>

          <h2 className="text-2xl font-bold mt-10 mb-3">Google Pixel Pro Fold</h2>
          <p className="text-muted-foreground mb-4">
            Google’s latest book-style foldable focuses on camera quality, clean Android, and long software support. Larger inner screen on recent models (~8"), Tensor chip, IP68 on newer versions. Strong for photography and AI features, with a more conventional software experience than Samsung’s heavy multitasking suite. Good middle ground if you want Google’s camera processing and fewer skin customizations.
          </p>
          <a
            href={`https://www.amazon.com/s?k=Google+Pixel+Pro+Fold&tag=${TAG}`}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md mb-8"
          >
            VIEW PIXEL PRO FOLD ON AMAZON
          </a>

          <h2 className="text-2xl font-bold mt-10 mb-3">What reviewers highlight</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li><strong>MKBHD on iPhone Duo:</strong> Fun first-gen product, great hardware polish and hinge, but weight, cameras, missing Face ID and incomplete app optimization are real drawbacks for most people.</li>
            <li>Samsung’s Z Fold line is repeatedly called the most mature daily-driver foldable thanks to years of software and hinge refinement.</li>
            <li>Pixel models are often praised for cameras and software cleanliness over maximum multitasking features.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Which one should you buy?</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-6">
            <li><strong>Already in Apple’s ecosystem</strong> and want the big screen → iPhone Duo (accept the first-gen compromises).</li>
            <li><strong>Want the lightest, most refined Android foldable today</strong> → Galaxy Z Fold 8.</li>
            <li><strong>Prioritize cameras and clean software</strong> → Pixel Pro Fold.</li>
            <li>Most people who just want a phone: stick with a regular flagship. Foldables are still premium, specialized tools.</li>
          </ul>

          <p className="text-sm text-muted-foreground mt-8">
            Prices and availability change on Amazon. Always check the live listing for the exact configuration, condition and current price before buying.
          </p>
        </div>
      </article>
      <Footer />
    </>
  );
}
