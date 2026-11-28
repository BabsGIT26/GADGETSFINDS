import type { Metadata } from "next";
import ProductArticle from "@/components/common/ProductArticle";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";
import { getAmazonItem } from "@/lib/amazon/catalog";

const PATH = "/samsung-9100-pro-2tb-article";
const URL = "https://link.amazon/B06vnd9Xw";
const ASIN = "B0DX2DPJZ5";
const SEO_TITLE = "Samsung 9100 PRO 2TB: Specs and Verdict";
const TITLE = "Samsung 9100 PRO 2TB SSD: Specs, PCIe 5.0 and Who Should Buy It";
const DESCRIPTION =
  "Samsung 9100 PRO 2TB: PCIe 5.0 NVMe at 14,700 MB/s, 2GB DRAM and 1,200 TBW. When it beats the 990 PRO, and who should skip it.";
const PRODUCT_PHOTO = "https://m.media-amazon.com/images/I/3137jN3vkqL._SL500_.jpg";

export async function generateMetadata(): Promise<Metadata> {
  const item = await getAmazonItem(ASIN);
  return pageMetadata({
    path: PATH,
    title: SEO_TITLE,
    description: DESCRIPTION,
    kind: "ssd",
    ogImage: item?.image?.url || PRODUCT_PHOTO,
  });
}

const link = "underline decoration-amber-500/80 underline-offset-4 hover:text-foreground";

export default function Page() {
  return (
    <ProductArticle
      path={PATH}
      eyebrow="Storage"
      title={TITLE}
      description={DESCRIPTION}
      topics={["computing", "gaming"]}
      answer="The Samsung 9100 PRO 2TB is a PCIe 5.0 NVMe SSD, rated at 14,700 MB/s read and 13,400 MB/s write, with 2GB of DRAM and a 1,200 TBW warranty. Buy it for a desktop that has a PCIe 5.0 M.2 slot. On a PCIe 4.0 board, or in a PS5, it cannot reach that speed."
      image={{ src: illustrationPath("ssd"), alt: "Samsung 9100 PRO 2TB NVMe SSD" }}
      cta={{ href: URL, asin: ASIN, percentOnly: true, note: "Model MZ-VAP2T0B/AM, no heatsink. Price and stock change on Amazon." }}
      bestFor="A desktop with a real PCIe 5.0 M.2 slot and a heatsink over the drive"
      glance={[
        ["Interface", "PCIe 5.0 x4, NVMe 2.0, M.2 2280"],
        ["Sequential (Samsung)", "14,700 MB/s read, 13,400 MB/s write"],
        ["Random, deep queue", "1,850K read, 2,600K write IOPS"],
        ["Cache / NAND", "2GB LPDDR4X, Samsung V-NAND TLC"],
        ["Warranty", "5 years or 1,200 TBW"],
        ["Size", "80.15 × 22.15 × 2.38 mm, no heatsink"],
      ]}
      why={[
        "Samsung rates the 2TB 9100 PRO at about twice the sequential speed of the 990 PRO, and it uses less energy per megabyte moved. The 2GB DRAM cache and TLC NAND are the parts that keep that speed up on large copies. After formatting, a 2TB drive shows about 1.86TB.",
      ]}
      skip={[
        "Skip it if the PC only has PCIe 4.0 or 3.0 slots. The drive still works, but the speed falls back to the slot, so a 990 PRO is the cheaper way to get the same result. Skip it for a laptop that has no M.2 heatsink: this drive draws about 8W while reading.",
        "Skip it if you need 4TB in one slot. The 9100 PRO also comes in 4TB, and the 990 PRO 4TB is the PCIe 4.0 option.",
      ]}
      sections={[
        {
          heading: "Samsung 9100 PRO 2TB speed in real use",
          body: [
            "The 14,700 MB/s figure is for a large sequential copy on a PCIe 5.0 slot, with Samsung's Intelligent TurboWrite cache still active. Game installs, video projects and disk images are where you notice it. Opening apps and a normal desktop do not produce the 1.85 million IOPS rating, which needs a deep queue.",
            "Install Samsung Magician, update the firmware, and watch temperature. A long write that pushes the controller past its thermal limit will slow the drive down until it cools. The motherboard heatsink is what keeps a Gen 5 drive at the rated speed.",
          ],
        },
        {
          heading: "Installing the 9100 PRO in a PC",
          body: [
            "Use a CPU-linked M.2 slot that the board manual marks as PCIe 5.0. A chipset slot is often PCIe 4.0 even on a new board, and the drive will not hit 14,700 MB/s there. Fit the board's M.2 cover. Leave the factory label on; peeling it off can affect the warranty.",
            <>
              On a PCIe 4.0 board, look at the{" "}
              <a href="/samsung-990-pro-4tb-article" className={link}>Samsung 990 PRO 4TB</a> instead if you also want more space. The parts list on our{" "}
              <a href="/black-friday-gaming-pc" className={link}>gaming PC deals page</a> includes both drives.
            </>,
          ],
        },
        {
          heading: "Does the Samsung 9100 PRO work in a PS5?",
          body: [
            "It fits the expansion bay, and the read rating is above Sony's 5,500 MB/s minimum. The PS5 slot is PCIe 4.0, so you do not get the 14,700 MB/s number. This listing has no heatsink, and the console needs one. The finished height, drive plus heatsink, has to stay within 11.25mm.",
            <>
              For a console-only purchase, a drive sold with a PS5-fit heatsink is simpler. Our{" "}
              <a href="/best-ps5-accessories-2026" className={link}>best PS5 accessories guide</a> covers that.
            </>,
          ],
        },
        {
          heading: "Check these before you buy",
          bullets: [
            "The listing should be the 2TB MZ-VAP2T0B/AM (also labelled MZ-VAP2T0BW), sold new, not renewed.",
            "This model has no heatsink. Confirm the listing if you expected one in the box.",
            "The M.2 slot has to be PCIe 5.0 x4 to reach the rated speed.",
            "The board needs a heatsink over the drive. Plan on about 8W while it is reading.",
          ],
        },
      ]}
      faqTitle="Samsung 9100 PRO 2TB questions"
      faq={[
        { q: "Is the Samsung 9100 PRO 2TB worth it over the 990 PRO?", a: "Only on a PCIe 5.0 slot. Samsung rates it at 14,700 MB/s read against 7,450 MB/s for the 990 PRO. On a PCIe 4.0 board the two land in the same range, and the 990 PRO costs less." },
        { q: "Does the Samsung 9100 PRO 2TB include a heatsink?", a: "Not this model. MZ-VAP2T0B/AM is a bare M.2 2280 drive, 2.38mm thick. Use the motherboard cover, or pick a listing that includes a heatsink." },
        { q: "Will the Samsung 9100 PRO work in a PS5?", a: "Yes, at PCIe 4.0 speed, and only with a heatsink. The installed height must stay within 11.25mm. You will not see 14,700 MB/s in a PS5." },
        { q: "How much space does the 2TB model really have?", a: "About 1.86TB after formatting. Samsung counts 1,000 gigabytes per terabyte, and Windows counts 1,024." },
      ]}
      products={["Samsung SSD 9100 PRO 2TB MZ-VAP2T0B/AM"]}
      dealBox={{ productName: "Samsung 9100 PRO 2TB SSD", href: URL }}
    />
  );
}
