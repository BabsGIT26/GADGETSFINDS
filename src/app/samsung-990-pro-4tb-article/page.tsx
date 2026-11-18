import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import GuideFaq, { ProductListJsonLd } from "@/components/common/GuideFaq";

export const metadata: Metadata = {
  title: "Samsung 990 PRO 4TB Review: PCIe 4.0 SSD (MZ-V9P4T0B/AM) | Gadgets Finds",
  description:
    "Samsung 990 PRO 4TB, model MZ-V9P4T0B/AM. PCIe 4.0 NVMe, up to 7,450 MB/s, no heatsink in the box. Who should buy it, and who should pick the heatsink version instead.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/samsung-990-pro-4tb-article" },
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
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            The Samsung 990 PRO 4TB is a PCIe 4.0 NVMe drive for a desktop, a laptop, or a PlayStation 5 that has already run out of room. Samsung rates it at up to 7,450 MB/s read and 6,900 MB/s write. The model in the title you searched, MZ-V9P4T0B/AM, is the bare drive. There is no heatsink in that box.
          </p>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            The same bare drive is also sold as MZ-V9P4T0BW. That is the part printed on many retail units. It is not the heatsink model. The heatsink version is a different part, MZ-V9P4T0CW. If the Amazon title says “with Heatsink,” you are not looking at the drive this page reviews.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">What the 4TB 990 PRO actually is</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl border-2 border-amber-400 bg-amber-400/10 p-5">
              <h3 className="font-bold text-amber-500 mb-2">Speed</h3>
              <p className="text-sm text-muted-foreground">Up to 7,450 MB/s sequential read and 6,900 MB/s sequential write on a PCIe 4.0 x4 slot. Random performance on the 4TB is up to 1,600,000 read IOPS and 1,550,000 write IOPS.</p>
            </div>
            <div className="rounded-xl border-2 border-sky-400 bg-sky-400/10 p-5">
              <h3 className="font-bold text-sky-500 mb-2">Endurance</h3>
              <p className="text-sm text-muted-foreground">2,400 TBW, or five years, whichever comes first. Samsung also lists a 1.5 million hour MTBF. That is a warranty rating, not a promise the drive lasts that many hours in your PC.</p>
            </div>
            <div className="rounded-xl border-2 border-emerald-400 bg-emerald-400/10 p-5">
              <h3 className="font-bold text-emerald-500 mb-2">Inside</h3>
              <p className="text-sm text-muted-foreground">Samsung’s own controller, V-NAND TLC, and 4GB of LPDDR4 cache. The 1TB model has 1GB of DRAM. The 2TB has 2GB. The 4TB is the one with 4GB.</p>
            </div>
            <div className="rounded-xl border-2 border-rose-400 bg-rose-400/10 p-5">
              <h3 className="font-bold text-rose-500 mb-2">No heatsink</h3>
              <p className="text-sm text-muted-foreground">The stick is M.2 2280, about 80 x 22 x 2.3 mm, and about 9 grams. A desktop motherboard cover is the cooler. A PS5 still needs a heatsink that keeps the whole stack under 11.25 mm.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-16 mb-4">Samsung 990 PRO 4TB, MZ-V9P4T0B/AM</h2>
          <div className="mb-8 bg-card border-2 border-amber-400/60 rounded-2xl overflow-hidden shadow-sm">
            <div className="border-b border-border bg-white py-6">
              <img
                src="/assets/images/samsung-990-pro-4tb.jpg"
                alt="Samsung 990 PRO 4TB NVMe SSD without a heatsink"
                className="mx-auto block w-auto h-auto max-h-72 md:max-h-80 max-w-full object-contain"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">
                <a href={amazonHref(AMAZON)} target="_blank" rel="nofollow sponsored noopener noreferrer" className="underline decoration-amber-500/80 underline-offset-4 hover:text-amber-700">Samsung SSD 990 PRO 4TB</a>
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                <li><strong className="text-amber-500">Listing:</strong> MZ-V9P4T0B/AM, also labeled MZ-V9P4T0BW, sold new, no heatsink</li>
                <li><strong className="text-amber-500">Interface:</strong> PCIe 4.0 x4, NVMe 2.0, M.2 2280</li>
                <li><strong className="text-amber-500">Sequential:</strong> up to 7,450 MB/s read, 6,900 MB/s write</li>
                <li><strong className="text-amber-500">Random, 4KB QD32:</strong> up to 1,600K read IOPS, 1,550K write IOPS</li>
                <li><strong className="text-amber-500">Cache and NAND:</strong> 4GB LPDDR4, Samsung V-NAND TLC</li>
                <li><strong className="text-amber-500">Warranty:</strong> 5 years or 2,400 TBW</li>
                <li><strong className="text-amber-500">Power:</strong> Samsung lists about 6.5 W average and 8.6 W burst</li>
                <li><strong className="text-amber-500">Recently seen:</strong> $799.99 on Amazon. Samsung’s own page lists $1,099.99</li>
              </ul>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Those sequential numbers are Samsung’s lab figures on a PCIe 4.0 system. A game does not load twice as fast because the box says 7,450 MB/s. What you feel is the time a large install takes, and the fact that a 4TB library fits on one slot. The 1TB and 2TB 990 PRO hit the same peak sequential speeds. The 4TB is the capacity buy, plus the higher random-read rating and the larger DRAM cache.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Windows will not show 4.00 TB. Drive makers count a terabyte as 1,000 gigabytes. The operating system counts it as 1,024. A full 4TB 990 PRO lands near 3.72 TB of usable space after formatting. That is normal, not a missing chip.
              </p>
              <p className="mt-6 text-sm font-medium">Verdict: The bare 4TB 990 PRO for a PC that already has an M.2 cover. Not the easy PS5 drive.</p>
              <ViewOnAmazon href={AMAZON} name="Samsung 990 PRO 4TB" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">Where the speed shows up</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            A PCIe 4.0 slot is the requirement for the rated speed. In a PCIe 3.0 slot the drive still works, and it still beats a SATA SSD, but it cannot reach 7,450 MB/s. The slot’s ceiling is closer to 3,500 MB/s. If the motherboard is older than that, a cheaper PCIe 3.0 drive is the honest purchase.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Large file copies are where the sequential rating matters: a game install, a video project, a disk image. Everyday desktop work is closer to the low-queue random numbers, which Samsung lists at 22,000 read IOPS and 80,000 write IOPS for a single thread. That is still a fast system drive. It is not the 1.6 million IOPS figure, which needs a deep queue a game rarely produces.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Samsung Magician is the software that matters after the drive is in. Use it to confirm the model, check the temperature, and install the current firmware before you move a library onto it. Early 990 PRO units had a firmware bug that made the health percentage fall too quickly. Samsung patched it. A drive bought in 2026 should still be updated on day one rather than trusted because the box is new.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">Installing it in a PC</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The 990 PRO 4TB in this listing is single-sided and 2.3 mm thick, so it fits the laptops and small boards that refuse a double-sided stick. It does not fit a slot that is already covered by a GPU with no clearance, and it does not turn into an external drive because you want one. This is an internal M.2 drive. An enclosure is a separate product, and a cheap enclosure will not pass 7,450 MB/s.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            On a desktop, use the motherboard’s own M.2 cover if it has one. The controller is the hot part. Samsung’s nickel-coated controller label is not a substitute for that cover in a case with weak airflow. Leave the sticker on the drive. Peeling it off can void the warranty, and it is not how you improve cooling.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">PlayStation 5</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Sony’s expansion bay accepts a PCIe 4.0 M.2 drive from 250 GB to 8 TB with a sequential read of at least 5,500 MB/s. The 990 PRO clears that speed. It does not ship with the heatsink the bay expects. The bare stick plus a cooler you add yourself has to stay at or under 11.25 mm, including the thermal pad. A tall aftermarket sink will not let the bay cover close.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            If the console is the only machine, the simpler buy is a drive that already has the right heatsink. The{" "}
            <Link href="/best-ps5-accessories-2026" className="underline underline-offset-4">PS5 accessories guide</Link>{" "}
            starts with the WD_BLACK SN850P for that reason. Buy this 990 PRO for a PS5 only if you already know which low-profile sink you are pairing with it. Do not buy the heatsink 990 PRO and then add a second sink on top.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">Who should skip it</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-8">
            <li>You need a plug-in portable drive. This is not one.</li>
            <li>The PC only has a PCIe 3.0 slot and you will never move the drive to a newer board.</li>
            <li>The PlayStation 5 is the target and you do not want to fit a heatsink yourself.</li>
            <li>A 1TB or 2TB 990 PRO is enough. The peak sequential speed does not go up at 4TB. You pay for the space, the cache, and the higher random-read rating.</li>
            <li>The listing says renewed, or the title says “with Heatsink” when you wanted the bare MZ-V9P4T0B/AM.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Final verdict</h2>
          <div className="rounded-2xl border-2 border-amber-400 bg-amber-400/10 p-6 md:p-8 mb-8">
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Buy the Samsung 990 PRO 4TB, MZ-V9P4T0B/AM, when one M.2 slot has to hold a large game library or work files and the PC already has a cover for that slot. It is a current PCIe 4.0 drive with Samsung’s controller, 4GB of DRAM, and a 2,400 TBW warranty. The speed rating is real on the right slot. It is not a reason to replace a drive that is already fast and only half full.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Samsung’s store lists this 4TB at $1,099.99. Amazon was recently at $799.99. Both numbers move. Open the button, confirm the title is the 4TB without a heatsink, and read the price on that page before you pay.
            </p>
          </div>

          <GuideFaq
            items={[
              { q: "Is the Samsung 990 PRO 4TB worth it?", a: "Yes if you need about 4TB on one PCIe 4.0 slot and the computer already cools an M.2 drive. The 1TB and 2TB models are the same peak sequential speed if you do not need the space." },
              { q: "Does the MZ-V9P4T0B/AM include a heatsink?", a: "No. That part, also labeled MZ-V9P4T0BW, is the bare drive. The heatsink model is MZ-V9P4T0CW." },
              { q: "Will it work in a PS5?", a: "The speed qualifies, but this box has no heatsink. The PS5 bay needs a cooler, and the drive plus cooler must stay within 11.25 mm." },
              { q: "How much space do you actually get?", a: "About 3.72 TB after formatting. A 4TB drive is sold as 4,000 gigabytes, and Windows counts a larger gigabyte." },
            ]}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
