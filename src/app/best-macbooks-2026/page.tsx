import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-macbooks-2026";
const SEO_TITLE = "Best MacBook to Buy in 2026: Air vs Pro";
const TITLE = "Best MacBook to Buy in 2026: Air vs Pro Compared";
const DESCRIPTION =
  "Which MacBook should you buy in 2026? We compare the MacBook Air M5 and the 14- and 16-inch MacBook Pro by screen, ports and power. Check today's price.";
const IMG = illustrationPath("laptop");

export const metadata: Metadata = pageMetadata({
  path: PATH,
  title: SEO_TITLE,
  description: DESCRIPTION,
  ogImage: "/assets/images/macbook-air-13-m5-og.jpg",
});

const products: RoundupProduct[] = [
  {
    id: "macbook-air-13-m5",
    name: "MacBook Air 13-inch (M5, 16GB, 512GB)",
    label: "Best for most people",
    url: `https://www.amazon.com/dp/B0GR19X8DC?tag=${TAG}`,
    why: "Fanless, light, and enough for school and office work.",
    specs: [
      ["Chip", "Apple M5"],
      ["Memory / storage", "16GB / 512GB"],
      ["Display", "13.6-inch Liquid Retina, 2560 x 1664"],
      ["Ports", "MagSafe 3, 2x Thunderbolt 4, headphone jack"],
      ["Battery (Apple rating)", "Up to 18 hours video"],
    ],
    body: [
      "The everyday thin-and-light Mac. It has no fan, so it is silent, and the M5 handles browsing, office work, photo edits, and light video without trouble. Apple lists this configuration at $1,299; Amazon's price moves, so read the live listing.",
      "It supports up to two external displays. Fast charging needs a 70W or higher USB-C charger; the US box ships with a smaller adapter.",
    ],
    skip: "you need HDMI, an SD slot, or long 4K exports. That is a MacBook Pro.",
  },
  {
    id: "macbook-pro-14-m5",
    name: "MacBook Pro 14-inch (M5, 16GB, 1TB)",
    label: "Best for creators and developers",
    url: `https://www.amazon.com/dp/B0FWD623D1?tag=${TAG}`,
    why: "The XDR screen and the ports the Air leaves out.",
    specs: [
      ["Chip", "Apple M5 (10-core CPU, 10-core GPU)"],
      ["Memory / storage", "16GB / 1TB"],
      ["Display", "14.2-inch Liquid Retina XDR, up to 1600 nits HDR peak"],
      ["Ports", "3x Thunderbolt 4, HDMI, SDXC, MagSafe 3, headphone jack"],
      ["Battery (Apple rating)", "All day; same speed on battery as plugged in"],
    ],
    body: [
      "This replaced the 14-inch M4 MacBook Pro, which was no longer sold new on Amazon when we checked on Nov 22, 2026. The M5 keeps the same display and ports and adds a Neural Accelerator in each GPU core, which speeds up on-device AI work.",
      "Most buyers should stay on the base M5. Choose an M5 Pro or M5 Max only if you export big timelines or run virtual machines all day. Pick the storage you will keep, because Apple's upgrades cannot be added later.",
    ],
    skip: "you already own an M4 MacBook Pro. There is no reason to upgrade.",
  },
  {
    id: "macbook-pro-16-m5-max",
    name: "MacBook Pro 16-inch (M5 Max, 36GB, 2TB)",
    label: "Most power",
    url: `https://www.amazon.com/dp/B0GR1F53WV?tag=${TAG}`,
    why: "For video, 3D, big photo libraries, and local AI.",
    specs: [
      ["Chip", "M5 Max, 18-core CPU, 32-core GPU"],
      ["Memory / storage", "36GB / 2TB"],
      ["Display", "16.2-inch Liquid Retina XDR, ProMotion up to 120Hz"],
      ["Ports", "3x Thunderbolt 5, HDMI, SDXC, MagSafe 3, headphone jack"],
      ["Battery (Apple rating)", "About 16 to 22 hours depending on task"],
    ],
    body: [
      "This exact listing is the 32-core GPU M5 Max with 36GB and 2TB in Silver, not the 40-core Max. 36GB is enough for most pro work; go higher only if you already hit memory limits on an M-series Mac.",
      "The 16-inch XDR screen is the reason to pick this size: 1000 nits sustained full-screen and 1600 nits HDR peak, good enough to grade on without an external monitor every day.",
    ],
    skip: "you only browse and write. The MacBook Air does that for far less.",
  },
  {
    id: "macbook-pro-proled-xdr",
    name: "MacBook Pro 14-inch with PROLED XDR display (2026)",
    label: "Newest display",
    url: `https://www.amazon.com/dp/B0HPM6QTTM?tag=${TAG}`,
    why: "Apple's new OLED, touch-enabled MacBook Pro.",
    specs: [
      ["Chip", "M5 Pro or M5 Max, depending on the listing"],
      ["Memory / storage", "Check the exact listing"],
      ["Display", "14.2-inch PROLED XDR (tandem OLED, touch)"],
      ["Ports", "Check the exact listing"],
      ["Battery (Apple rating)", "Check Apple's spec page"],
    ],
    body: [
      "Apple's newest MacBook Pro swaps mini-LED for a tandem OLED panel it calls PROLED XDR and adds touch on the display. It is sold alongside the mini-LED models above, not instead of them.",
      "It is new, so configurations and prices on Amazon vary by listing. Confirm the chip, memory, storage, and seller on the Amazon card before you buy.",
    ],
    skip: "you do not care about OLED or touch. The 14-inch M5 above gives you the same core experience for less.",
  },
];

export default function Page() {
  return (
    <Roundup
      path={PATH}
      eyebrow="Laptops"
      title={TITLE}
      updated="November 2026"
      description={DESCRIPTION}
      answer="The best MacBook to buy in 2026 for most people is the 13-inch MacBook Air with M5: silent, light and fast enough for school, office work and photo edits. Choose the 14-inch MacBook Pro M5 if you need the brighter XDR screen, HDMI and an SD slot. The 16-inch M5 Max is only worth it for heavy video, 3D or local AI work every day."
      intro={[
        "Below are the four MacBooks worth considering, a side-by-side table, and the three choices that matter most: Air or Pro, how much memory, and how much storage. Apple memory and storage cannot be upgraded later, so those two decide how long the Mac stays useful.",
      ]}
      hero={{ src: IMG, alt: "MacBook Air and MacBook Pro buying guide" }}
      tableTitle="MacBook Air vs MacBook Pro: specs compared"
      tableColumns={["Chip", "Memory / storage", "Display"]}
      products={products.map((product) => ({ ...product, image: IMG }))}
      buyingGuide={{
        heading: "How to choose the right MacBook",
        points: [
          { title: "Air or Pro", body: "The Air has no fan and two Thunderbolt ports. The Pro adds a fan for long sustained loads, a brighter XDR screen, HDMI, an SD card slot and a third Thunderbolt port. If you do not know you need those, buy the Air." },
          { title: "Memory", body: "16GB is enough for browsing, office apps, coding and photo work. Pick 24GB or more only if you already run out of memory today with virtual machines, large Xcode or Docker builds, or local AI models." },
          { title: "Storage", body: "512GB is the practical minimum if you keep photos or projects on the Mac. External SSDs are cheap, but they are one more thing to carry." },
          { title: "Screen size", body: "13 or 14 inches is the travel size. The 16-inch Pro is heavier and makes sense when the laptop replaces a desktop monitor most days." },
          { title: "Charger", body: "Fast charging the Air needs a 70W or larger USB-C charger. Check what is in the box on the listing before you buy." },
        ],
      }}
      verdict={[
        "Buy the MacBook Air 13 M5 unless you know you need more. Step up to the 14-inch MacBook Pro M5 for the XDR screen, HDMI and the SD slot. Pay for the 16-inch M5 Max only when long renders or local AI models are your daily work.",
      ]}
      faqTitle="MacBook buying questions"
      faq={[
        { q: "Is the MacBook Air or the MacBook Pro better?", a: "The Air is better for most people: lighter, silent and cheaper. The Pro is better if you need HDMI, an SD slot, the brighter XDR screen, or steady performance during long exports and builds." },
        { q: "Which MacBook is best for students?", a: "The 13-inch MacBook Air with M5. It handles schoolwork, browsing and light creative work, and it is the lightest Mac in this guide." },
        { q: "Is 16GB of RAM enough on a MacBook?", a: "Yes, for most people. Choose 24GB or more only for virtual machines, large code builds, or local AI models, because memory cannot be added later." },
        { q: "Is the M4 MacBook Pro still worth buying?", a: "Only as a clearly discounted leftover from a trusted seller. When we checked on Nov 22, 2026, the 14-inch M4 was no longer sold new on Amazon, and the M5 model replaced it." },
      ]}
    />
  );
}
