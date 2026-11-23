import type { Metadata } from "next";
import ProductArticle from "@/components/common/ProductArticle";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const PATH = "/samsung-990-pro-4tb-article";
const URL = "https://www.amazon.com/dp/B0CHGT1KFJ?tag=gadgetsfindswebsite-20";
const SEO_TITLE = "Samsung 990 PRO 4TB SSD: Specs and Verdict";
const TITLE = "Samsung 990 PRO 4TB SSD: Specs, PS5 Fit and Who Should Buy It";
const DESCRIPTION =
  "Samsung 990 PRO 4TB SSD: PCIe 4.0 NVMe at 7,450 MB/s, 4GB DRAM and 2,400 TBW. What it suits, PS5 heatsink rules and who should skip it. Check today's price.";

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "ssd" });

const link = "underline decoration-amber-500/80 underline-offset-4 hover:text-foreground";

export default function Page() {
  return (
    <ProductArticle
      path={PATH}
      eyebrow="Storage"
      title={TITLE}
      description={DESCRIPTION}
      topics={["computing", "gaming"]}
      answer="The Samsung 990 PRO 4TB SSD is a fast PCIe 4.0 NVMe drive, rated at 7,450 MB/s read and 6,900 MB/s write, with 4GB of DRAM and a 2,400 TBW warranty. Buy it for a PC that needs a lot of space in one M.2 slot. For a PS5 you also need a heatsink. It was $699.99 on Amazon when we checked on November 22, 2026."
      image={{ src: illustrationPath("ssd"), alt: "Samsung 990 PRO 4TB NVMe SSD" }}
      cta={{ href: URL, note: "Model MZ-V9P4T0B/AM, no heatsink. In stock when we checked; price changes." }}
      bestFor="A PCIe 4.0 desktop or laptop that needs 4TB in one slot"
      glance={[
        ["Interface", "PCIe 4.0 x4, NVMe 2.0, M.2 2280"],
        ["Sequential (Samsung)", "7,450 MB/s read, 6,900 MB/s write"],
        ["Random 4KB QD32", "1,600K read, 1,550K write IOPS"],
        ["Cache / NAND", "4GB LPDDR4, Samsung V-NAND TLC"],
        ["Warranty", "5 years or 2,400 TBW"],
        ["Price when checked", "$699.99 on Amazon, Nov 22, 2026 (Samsung lists $1,099.99)"],
      ]}
      why={[
        "It is one of the fastest PCIe 4.0 drives, with Samsung's own controller and a large 4GB DRAM cache. The 4TB module is single-sided and 2.3mm thick, so it also fits laptops and compact boards that only take that layout. After formatting you get about 3.72TB of usable space.",
      ]}
      skip={[
        "Skip it if your PC will stay on PCIe 3.0 (speed caps near 3,500 MB/s), if you need a portable drive, or if 1TB or 2TB is enough: the smaller 990 PRO models have the same peak sequential speed for less money.",
      ]}
      sections={[
        {
          heading: "Samsung 990 PRO 4TB speed in real use",
          body: [
            "Samsung's sequential ratings show up on large copies: game installs, video projects and disk images. Everyday desktop work is closer to the low-queue figures, 22,000 read and 80,000 write IOPS at queue depth one. The 1.6 million IOPS rating needs deep queues that normal apps do not produce.",
            "Install Samsung Magician to update the firmware and watch temperature and health. Early 990 PRO units had a firmware bug that inflated the wear reading; Samsung fixed it, so update a new drive before moving your files onto it.",
          ],
        },
        {
          heading: "Installing the 990 PRO in a PC",
          body: [
            "On a desktop, use the motherboard's M.2 cover or heatsink if it has one; the controller runs hottest. Leave the factory label on the drive, since removing it can affect the warranty. In an external enclosure, the enclosure limits speed and most will not reach PCIe 4.0 ratings.",
          ],
        },
        {
          heading: "Does the Samsung 990 PRO work in a PS5?",
          body: [
            "Yes. Sony's expansion bay takes PCIe 4.0 M.2 drives from 250GB to 8TB with at least 5,500 MB/s sequential read, and the 990 PRO meets that. This listing has no heatsink, so add one; the finished height must stay within 11.25mm for the cover to close.",
            <>
              Samsung's heatsink 4TB version is MZ-V9P4T0CW. For a console-only purchase, a drive with a PS5-fit heatsink is simpler; our{" "}
              <a href="/best-ps5-accessories-2026" className={link}>best PS5 accessories guide</a> leads with the WD_BLACK SN850P for that reason.
            </>,
          ],
        },
        {
          heading: "Check these before you buy",
          bullets: [
            "The listing should be the 4TB MZ-V9P4T0B/AM (also labelled MZ-V9P4T0BW), sold new, not renewed.",
            "If you want the heatsink version, look for MZ-V9P4T0CW instead.",
            "Make sure your M.2 slot is PCIe 4.0 to get the rated speed.",
          ],
        },
      ]}
      faqTitle="Samsung 990 PRO 4TB questions"
      faq={[
        { q: "Is the Samsung 990 PRO 4TB worth it?", a: "Yes, for a PCIe 4.0 machine that needs about 4TB in one slot and already cools the M.2 drive. If you need less space, the 1TB and 2TB models reach the same peak speed for less." },
        { q: "Does the Samsung 990 PRO 4TB include a heatsink?", a: "Not this model. MZ-V9P4T0B/AM is a bare M.2 drive. The heatsink 4TB version is MZ-V9P4T0CW." },
        { q: "Will the Samsung 990 PRO work in a PS5?", a: "Yes, with a heatsink. The installed height must stay within 11.25mm." },
        { q: "How much space does a 4TB SSD really have?", a: "About 3.72TB after formatting, because drive makers count 1,000 gigabytes per terabyte and Windows counts 1,024." },
      ]}
      products={["Samsung SSD 990 PRO 4TB MZ-V9P4T0B/AM"]}
      dealBox={{ productName: "Samsung 990 PRO 4TB SSD", href: URL }}
    />
  );
}
