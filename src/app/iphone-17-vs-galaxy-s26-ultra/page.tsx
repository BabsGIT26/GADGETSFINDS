import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON_IPHONE = "https://www.amazon.com/s?k=iPhone+17&tag=gadgetsfindswebsite-20";
const AMAZON_S26 =
  "https://www.amazon.com/s?k=Samsung+Galaxy+S26+Ultra&tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "iPhone 17 vs Galaxy S26 Ultra — Gadgets Finds",
  description:
    "iPhone 17 (6.3-inch, A19) versus Samsung Galaxy S26 Ultra: display, cameras, battery, software, and who should buy which. Prices change on Amazon.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/iphone-17-vs-galaxy-s26-ultra" },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-sm text-black mb-6">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Comparison
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            iPhone 17 vs Galaxy S26 Ultra
          </h1>
          <p className="text-sm text-muted-foreground mb-8">By Gadgets Finds</p>

          <p className="text-muted-foreground mb-4">
            These are not twins. The iPhone 17 is Apple’s smaller 2025 flagship: 6.3-inch
            panel, A19, dual rear cameras, launch price from $799. The Galaxy S26 Ultra is
            Samsung’s 2026 note-style slab: 6.9-inch QHD, S Pen, quad camera, Snapdragon 8
            Elite Gen 5 for Galaxy, launch from about $1,299.
          </p>
          <p className="text-muted-foreground mb-8">
            This page is a spec and buyer guide from public listings — not a two-week studio
            test. Confirm storage, seller, and price on Amazon before you pay.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href={AMAZON_IPHONE}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-amber-400 text-zinc-950 text-sm font-semibold hover:bg-amber-300"
            >
              iPhone 17 on Amazon
            </a>
            <a
              href={AMAZON_S26}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-amber-400 text-zinc-950 text-sm font-semibold hover:bg-amber-300"
            >
              S26 Ultra on Amazon
            </a>
          </div>

          <div className="w-full flex justify-center py-6 mb-10">
            <AppImage
              src="/assets/images/samsung_galaxy_s_twenty_six_ultra.png"
              alt="Samsung Galaxy S26 Ultra"
              className="max-h-[360px] w-auto max-w-full object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">The split in one screen</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-muted-foreground border border-border">
              <thead>
                <tr className="bg-muted text-foreground">
                  <th className="p-3 text-left"> </th>
                  <th className="p-3 text-left">iPhone 17</th>
                  <th className="p-3 text-left">S26 Ultra</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 font-medium text-foreground">Launched</td>
                  <td className="p-3">Sep 2025</td>
                  <td className="p-3">Mar 2026</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Display</td>
                  <td className="p-3">6.3" OLED, 120Hz</td>
                  <td className="p-3">6.9" QHD AMOLED, 120Hz</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Chip</td>
                  <td className="p-3">A19</td>
                  <td className="p-3">Snapdragon 8 Elite Gen 5 (Galaxy)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">RAM (typical)</td>
                  <td className="p-3">8GB</td>
                  <td className="p-3">12GB / 16GB</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Rear cameras</td>
                  <td className="p-3">Dual</td>
                  <td className="p-3">Quad + 5x tele</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Battery (rated)</td>
                  <td className="p-3">~3,692 mAh</td>
                  <td className="p-3">5,000 mAh</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">OS</td>
                  <td className="p-3">iOS 26</td>
                  <td className="p-3">Android 16, One UI</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">S Pen</td>
                  <td className="p-3">No</td>
                  <td className="p-3">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">Display and size</h2>
          <p className="text-muted-foreground mb-6">
            If you want one-hand reach and a lighter pocket, the 17 wins on paper. The Ultra is
            a work slab: more pixels, more glass, S Pen. Outdoor brightness is excellent on
            both families; Samsung’s panel is simply larger. Do not buy the Ultra “for the
            name” if you hate phablets.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Cameras</h2>
          <p className="text-muted-foreground mb-6">
            Apple’s 17 is a dual-camera phone. Fine for most people; weaker when you live on
            zoom. The Ultra stacks a 200MP wide with 3x and 5x teles. That is the hardware
            reason to pay Samsung money. Color science is still a taste fight: Apple flatter
            and stickier in iCloud, Samsung punchier and more knobs in the app.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Speed and software</h2>
          <p className="text-muted-foreground mb-6">
            A19 vs Snapdragon 8 Elite Gen 5: both flagship-fast in 2026. The real fork is
            iOS vs Android, iMessage / Find My vs sideload and DeX-style desktop, and which
            watch and buds you already own. Seven years of updates are the talking point on
            both sides — verify the current policy on the box you actually buy.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Battery</h2>
          <p className="text-muted-foreground mb-6">
            The Ultra’s 5,000 mAh class pack plus faster wired charging is the safer all-day
            bet on spec sheets. The 17 is smaller and will depend more on how hard you push
            the screen. Neither listing includes a charger in many regions — read the Amazon
            “what’s in the box.”
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Price</h2>
          <p className="text-muted-foreground mb-8">
            Street prices move. The 17 often undercuts the Ultra because it is last autumn’s
            small iPhone, not the Pro Max. The Ultra is the expensive Android. Ignore a
            random “50% off” badge; open the seller and the condition (new vs Renewed).
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who should buy which</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-8">
            <li>iPhone 17 — already in Apple, want smaller, do not need 5x zoom or a stylus.</li>
            <li>S26 Ultra — Android, zoom, S Pen, biggest screen, okay with the size and MSRP.</li>
            <li>Need Pro Max size on iOS? That is a different SKU than the 17. Do not mix them.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            Ecosystem first, camera zoom second, pocket size third. There is no universal
            winner. Check the live Amazon cards — storage and seller change the deal more
            than a headline spec.
          </p>

          <AmazonDealBox productName="iPhone 17" href={AMAZON_IPHONE} />
          <div className="h-6" />
          <AmazonDealBox productName="Galaxy S26 Ultra" href={AMAZON_S26} />
        </div>
      </article>
      <Footer />
    </>
  );
}
