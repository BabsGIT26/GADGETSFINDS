import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import GuideFaq, { ProductListJsonLd } from "@/components/common/GuideFaq";

export const metadata: Metadata = {
  title: "Samsung 990 PRO 4TB Review | Gadgets Finds",
  description:
    "Review of the Samsung 990 PRO 4TB, MZ-V9P4T0B/AM. PCIe 4.0 performance, endurance, pricing, and where the bare M.2 drive belongs.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/samsung-990-pro-4tb-article" },
};

const AMAZON = "https://www.amazon.com/dp/B0CHGT1KFJ?tag=gadgetsfindswebsite-20";

function amazonHref(url: string) {
  return `/api/go?url=${encodeURIComponent(url)}`;
}

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-4xl">
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases if you buy through links on this page, at no extra cost to you. Prices and availability change on Amazon.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Storage</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Samsung 990 PRO 4TB</h1>
          <p className="text-muted-foreground mb-6 text-sm">Last updated: November 18, 2026</p>
          <ProductListJsonLd
            name="Samsung 990 PRO 4TB"
            url="/samsung-990-pro-4tb-article"
            products={["Samsung SSD 990 PRO 4TB MZ-V9P4T0B/AM"]}
          />

          <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
            The 990 PRO 4TB is Samsung’s high-capacity PCIe 4.0 drive for a desktop or laptop that needs one slot to hold a working library. Sequential performance is rated at 7,450 MB/s read and 6,900 MB/s write, with 4GB of DRAM and a warranty of five years or 2,400 TBW.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            This review covers MZ-V9P4T0B/AM, the standard M.2 2280 module. Samsung’s store lists it at $1,099.99. Amazon was recently at $799.99. Confirm the live price on the listing.
          </p>

          <div className="mb-10 bg-card border-2 border-amber-400/60 rounded-2xl overflow-hidden shadow-sm">
            <div className="border-b border-border bg-white py-6">
              <img
                src="/assets/images/samsung-990-pro-4tb.jpg"
                alt="Samsung 990 PRO 4TB NVMe SSD"
                className="mx-auto block w-auto h-auto max-h-72 md:max-h-80 max-w-full object-contain"
              />
            </div>
            <div className="p-6 md:p-8">
              <a
                href={amazonHref(AMAZON)}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                aria-label="View Samsung 990 PRO 4TB on Amazon"
                className="inline-flex items-center justify-center min-w-[220px] px-8 py-3 rounded-full bg-amber-400 text-zinc-950 text-sm font-extrabold hover:bg-amber-300 transition-colors"
              >
                View on Amazon
              </a>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-4">Performance</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            On a PCIe 4.0 x4 slot, the 4TB sits at the top of Samsung’s Gen4 range. The 1TB and 2TB versions share the same sequential ceiling. The 4TB adds capacity, a larger DRAM cache, and a higher random-read rating, up to 1,600,000 IOPS. Sustained copies of game installs, project files, and disk images are where that bandwidth is visible. Day-to-day desktop work depends far more on low-queue response than on the headline figure.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            In a PCIe 3.0 slot the drive remains compatible and still outruns SATA, with throughput limited by the slot, closer to 3,500 MB/s. Formatted capacity lands near 3.72 TB, which is the usual difference between decimal marketing capacity and the operating system’s count.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">In a PC</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The module is single-sided, 80 × 22 × 2.3 mm, so it fits the tighter laptop and small-board slots that reject a double-sided stick. On a desktop, the motherboard’s M.2 cover is the appropriate cooler. Samsung Magician handles firmware, temperature, and drive health. Apply the current firmware before migrating a library. Early 990 PRO units needed a Samsung update after a health-reporting issue, and a current drive should still be brought up to date.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Leave the factory label in place. An external enclosure is a separate purchase, and most enclosures will not carry the drive’s rated PCIe 4.0 speed.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">PlayStation 5</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Sony’s expansion bay accepts a PCIe 4.0 drive of this speed, provided the installed height, cooler included, stays within 11.25 mm. MZ-V9P4T0B/AM leaves that cooler to you. For a console-only setup, a drive that already ships with a PS5-fit heatsink is the cleaner option. The{" "}
            <Link href="/best-ps5-accessories-2026" className="underline underline-offset-4">PS5 accessories guide</Link>{" "}
            covers the WD_BLACK SN850P on that basis. Samsung’s own heatsink 4TB is sold as MZ-V9P4T0CW.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Verdict</h2>
          <div className="rounded-2xl border-2 border-amber-400 bg-amber-400/10 p-6 md:p-8 mb-8">
            <p className="text-muted-foreground leading-relaxed">
              The 990 PRO 4TB is the right 990 PRO when the library, not a higher sequential number, is the reason to spend. Use it in a PCIe 4.0 machine that already cools the M.2 slot, at whatever Amazon is charging the day you buy. A smaller 990 PRO covers the same peak speed if 4TB is more than the build needs.
            </p>
          </div>

          <GuideFaq
            items={[
              { q: "Which Samsung 990 PRO 4TB is this?", a: "MZ-V9P4T0B/AM, the standard module. Retail units are often marked MZ-V9P4T0BW. The heatsink 4TB is MZ-V9P4T0CW." },
              { q: "What speed and warranty does Samsung rate?", a: "Up to 7,450 MB/s read and 6,900 MB/s write on PCIe 4.0, with a 5-year warranty or 2,400 TBW." },
              { q: "Can it expand a PS5?", a: "The speed meets Sony’s requirement. The bay still needs a heatsink, and the finished height must stay within 11.25 mm." },
            ]}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
