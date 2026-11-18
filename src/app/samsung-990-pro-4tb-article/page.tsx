import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import GuideFaq, { ProductListJsonLd } from "@/components/common/GuideFaq";

export const metadata: Metadata = {
  title: "Samsung 990 PRO 4TB Review: PCIe 4.0 SSD (MZ-V9P4T0B/AM) | Gadgets Finds",
  description:
    "Samsung 990 PRO 4TB, model MZ-V9P4T0B/AM. PCIe 4.0 NVMe rated to 7,450 MB/s read and 6,900 MB/s write, with a 5-year or 2,400 TBW warranty.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/samsung-990-pro-4tb-article" },
  openGraph: {
    title: 'Samsung 990 PRO 4TB Review',
    description: 'PCIe 4.0 NVMe SSD, model MZ-V9P4T0B/AM. Rated to 7,450 MB/s read and 6,900 MB/s write.',
    url: 'https://www.gadgets-finds.com/samsung-990-pro-4tb-article',
    siteName: "Gadgets Finds",
    type: "article",
    images: [{
      url: "https://www.gadgets-finds.com/assets/images/samsung-990-pro-4tb.jpg",
      width: 1600,
      height: 1200,
      alt: "Samsung 990 PRO 4TB NVMe SSD",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    creator: "@Gadgets_finds",
    title: 'Samsung 990 PRO 4TB Review',
    description: 'PCIe 4.0 NVMe SSD, model MZ-V9P4T0B/AM. Rated to 7,450 MB/s read and 6,900 MB/s write.',
    images: ['https://www.gadgets-finds.com/assets/images/samsung-990-pro-4tb.jpg'],
  },
};

const AMAZON = "https://www.amazon.com/dp/B0CHGT1KFJ?tag=gadgetsfindswebsite-20";

function amazonHref(url: string) {
  return `/api/go?url=${encodeURIComponent(url)}`;
}

function ViewOnAmazon({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={amazonHref(href)}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      aria-label={`View ${name} on Amazon`}
      className="inline-flex items-center justify-center mt-6 min-w-[220px] px-8 py-3 rounded-full bg-amber-400 text-zinc-950 text-sm font-extrabold hover:bg-amber-300 transition-colors"
    >
      View on Amazon
    </a>
  );
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
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Samsung SSD 990 PRO 4TB Review
          </h1>
          <p className="text-muted-foreground mb-2 text-sm">Last updated: November 18, 2026</p>
          <ProductListJsonLd
            name="Samsung 990 PRO 4TB"
            url="/samsung-990-pro-4tb-article"
            products={["Samsung SSD 990 PRO 4TB MZ-V9P4T0B/AM"]}
          />
          <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
            The Samsung 990 PRO 4TB is a PCIe 4.0 NVMe SSD for desktops, laptops, and the PlayStation 5 expansion bay. Samsung rates sequential performance at 7,450 MB/s read and 6,900 MB/s write. The reviewed model is MZ-V9P4T0B/AM.
          </p>
          <ViewOnAmazon href={AMAZON} name="Samsung 990 PRO 4TB" />
          <p className="text-muted-foreground mt-8 mb-10 leading-relaxed">
            Retail packaging for this module is also marked MZ-V9P4T0BW. Samsung sells a separate 4TB with an attached heatsink under MZ-V9P4T0CW. The button above opens the MZ-V9P4T0B/AM listing.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">What the 4TB 990 PRO actually is</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl border-2 border-amber-400 bg-amber-400/10 p-5">
              <h3 className="font-bold text-amber-500 mb-2">Speed</h3>
              <p className="text-sm text-muted-foreground">Up to 7,450 MB/s sequential read and 6,900 MB/s sequential write on a PCIe 4.0 x4 slot. Random performance on the 4TB is rated up to 1,600,000 read IOPS and 1,550,000 write IOPS.</p>
            </div>
            <div className="rounded-xl border-2 border-sky-400 bg-sky-400/10 p-5">
              <h3 className="font-bold text-sky-500 mb-2">Endurance</h3>
              <p className="text-sm text-muted-foreground">2,400 TBW or five years, whichever comes first. Samsung also publishes a 1.5 million hour MTBF. Both figures are warranty ratings.</p>
            </div>
            <div className="rounded-xl border-2 border-emerald-400 bg-emerald-400/10 p-5">
              <h3 className="font-bold text-emerald-500 mb-2">Inside</h3>
              <p className="text-sm text-muted-foreground">Samsung’s in-house controller, V-NAND TLC, and 4GB of LPDDR4. The 1TB 990 PRO carries 1GB of DRAM, and the 2TB carries 2GB.</p>
            </div>
            <div className="rounded-xl border-2 border-rose-400 bg-rose-400/10 p-5">
              <h3 className="font-bold text-rose-500 mb-2">Cooling</h3>
              <p className="text-sm text-muted-foreground">M.2 2280, about 80 x 22 x 2.3 mm and 9 grams. A desktop motherboard cover handles cooling. A PS5 installation needs a heatsink within Sony’s 11.25 mm height limit.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-16 mb-4">Samsung 990 PRO 4TB, MZ-V9P4T0B/AM</h2>
          <div className="mb-8 bg-card border-2 border-amber-400/60 rounded-2xl overflow-hidden shadow-sm">
            <div className="border-b border-border bg-white py-6">
              <img
                src="/assets/images/samsung-990-pro-4tb.jpg"
                alt="Samsung 990 PRO 4TB NVMe SSD"
                className="mx-auto block w-auto h-auto max-h-72 md:max-h-80 max-w-full object-contain"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">
                <a href={amazonHref(AMAZON)} target="_blank" rel="nofollow sponsored noopener noreferrer" className="underline decoration-amber-500/80 underline-offset-4 hover:text-amber-700">Samsung SSD 990 PRO 4TB</a>
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                <li><strong className="text-amber-500">Listing:</strong> MZ-V9P4T0B/AM, also labeled MZ-V9P4T0BW, sold new</li>
                <li><strong className="text-amber-500">Interface:</strong> PCIe 4.0 x4, NVMe 2.0, M.2 2280</li>
                <li><strong className="text-amber-500">Sequential:</strong> up to 7,450 MB/s read, 6,900 MB/s write</li>
                <li><strong className="text-amber-500">Random, 4KB QD32:</strong> up to 1,600K read IOPS, 1,550K write IOPS</li>
                <li><strong className="text-amber-500">Cache and NAND:</strong> 4GB LPDDR4, Samsung V-NAND TLC</li>
                <li><strong className="text-amber-500">Warranty:</strong> 5 years or 2,400 TBW</li>
                <li><strong className="text-amber-500">Power:</strong> about 6.5 W average and 8.6 W burst, per Samsung</li>
                <li><strong className="text-amber-500">Recently seen:</strong> $799.99 on Amazon. Samsung’s store lists $1,099.99</li>
              </ul>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The sequential figures are Samsung’s ratings on a PCIe 4.0 test system. In practice they show up on large copies: game installs, video projects, disk images. The 1TB and 2TB 990 PRO share the same peak sequential speeds. The 4TB is the capacity choice, with the larger DRAM cache and the higher random-read rating.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                After formatting, usable space is about 3.72 TB. Manufacturers count a terabyte as 1,000 gigabytes. Windows counts 1,024.
              </p>
              <p className="mt-6 text-sm font-medium">Verdict: the 4TB 990 PRO for a PC that already cools its M.2 slot.</p>
              <ViewOnAmazon href={AMAZON} name="Samsung 990 PRO 4TB" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">Where the speed shows up</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Rated speed requires a PCIe 4.0 x4 slot. In a PCIe 3.0 slot the drive remains compatible and still ahead of SATA, with throughput capped nearer 3,500 MB/s. On an older board that will stay PCIe 3.0, a less expensive drive is the more sensible match.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Large transfers are the sequential workload. Ordinary desktop use sits closer to Samsung’s low-queue figures, 22,000 read IOPS and 80,000 write IOPS at a queue depth of one. The 1.6 million IOPS rating needs a deep queue that typical applications do not produce.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Samsung Magician is the tool for firmware, temperature, and health once the drive is installed. Early 990 PRO units had a firmware issue that accelerated the reported wear figure. Samsung corrected it. Update a new drive before moving a library onto it.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">Installing it in a PC</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The 4TB module is single-sided and 2.3 mm thick, which suits laptops and compact boards that only accept that layout. Clearance still has to exist beside the GPU. Used in an external enclosure, the drive is limited by the enclosure, and most of them will not pass a PCIe 4.0 rating.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            On a desktop, use the motherboard’s M.2 cover where one is fitted. The controller runs hottest, and the nickel coating on the package does not replace that cover in a poorly ventilated case. Leave the factory label on the drive. Removing it can affect the warranty.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">PlayStation 5</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Sony’s expansion bay takes a PCIe 4.0 M.2 drive from 250 GB to 8 TB with a sequential read of at least 5,500 MB/s. The 990 PRO meets the speed requirement. MZ-V9P4T0B/AM requires a separate heatsink, and the finished height, thermal pad included, must stay within 11.25 mm so the bay cover closes.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            For a console-only purchase, a drive that already includes a PS5-fit heatsink is the simpler route. The{" "}
            <Link href="/best-ps5-accessories-2026" className="underline underline-offset-4">PS5 accessories guide</Link>{" "}
            leads with the WD_BLACK SN850P for that reason. Samsung’s heatsink 4TB is MZ-V9P4T0CW, and that version does not need a second cooler stacked on top.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">Who should skip it</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-8">
            <li>A portable, bus-powered drive is the actual requirement.</li>
            <li>The PC is staying on PCIe 3.0, with no plan to move the drive later.</li>
            <li>The PlayStation 5 is the only machine, and fitting a heatsink is not part of the plan.</li>
            <li>1TB or 2TB is enough capacity. Peak sequential speed does not rise at 4TB. The extra cost buys space, cache, and the higher random-read rating.</li>
            <li>The listing is renewed, or the title specifies the heatsink model when MZ-V9P4T0B/AM is the intended part.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Final verdict</h2>
          <div className="rounded-2xl border-2 border-amber-400 bg-amber-400/10 p-6 md:p-8 mb-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Samsung 990 PRO 4TB, MZ-V9P4T0B/AM, fits a PC that needs one M.2 slot for a large library and already has a cover on that slot. It is a current PCIe 4.0 drive with Samsung’s controller, 4GB of DRAM, and a 2,400 TBW warranty. The speed rating holds on a PCIe 4.0 slot. A drive that is already fast and only half full does not need replacing for the sake of the number on the box.
            </p>
            <p className="text-muted-foreground">
              Samsung lists this 4TB at $1,099.99. Amazon was recently at $799.99. Both move. Use the button, confirm the 4TB MZ-V9P4T0B/AM listing, and check the price on that page.
            </p>
          </div>

          <GuideFaq
            items={[
              { q: "Is the Samsung 990 PRO 4TB worth it?", a: "For a PCIe 4.0 machine that needs about 4TB in one slot and already cools the M.2 drive, yes. The 1TB and 2TB 990 PRO models reach the same peak sequential speed when the extra capacity is unnecessary." },
              { q: "Does the MZ-V9P4T0B/AM include a heatsink?", a: "The module ships as a bare M.2 drive. Retail units are often labeled MZ-V9P4T0BW. Samsung’s heatsink 4TB is MZ-V9P4T0CW." },
              { q: "Will it work in a PS5?", a: "The rated speed meets Sony’s requirement. The bay still needs a heatsink, and the installed height must stay within 11.25 mm." },
              { q: "How much space do you actually get?", a: "About 3.72 TB after formatting. The 4TB rating uses 4,000 gigabytes. Windows uses a larger gigabyte." },
            ]}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
