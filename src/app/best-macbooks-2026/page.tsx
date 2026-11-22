import type { Metadata } from "next";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-macbooks-2026";
const TITLE = "Best MacBooks to Buy in 2026";
const DESCRIPTION =
  "MacBook Air 13 M5, MacBook Pro 14 M5, MacBook Pro 16 M5 Max, and the new PROLED XDR MacBook Pro compared: specs, who each one is for, and what to skip.";

export const metadata: Metadata = {
  title: `${TITLE} | Gadgets Finds`,
  description: DESCRIPTION,
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: `https://www.gadgets-finds.com${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://www.gadgets-finds.com${PATH}`, type: "article" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

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
      intro={[
        "Apple sells more MacBooks than most people need. For most buyers the choice is simple: the MacBook Air for everyday work, the 14-inch MacBook Pro when you need the better screen and more ports, and the 16-inch M5 Max only when the work is heavy every day.",
        "This guide replaces our older single-model pages for the MacBook Pro M4, the MacBook Air M5, the MacBook Pro M5 Max, and the PROLED XDR MacBook Pro.",
      ]}
      tableColumns={["Chip", "Memory / storage", "Display"]}
      products={products}
      verdict={[
        "Buy the MacBook Air 13 M5 unless you know you need more. Step up to the 14-inch MacBook Pro M5 for the XDR screen, HDMI, and the SD slot. Pay for the 16-inch M5 Max only when long renders or local AI models are your daily work.",
      ]}
      faq={[
        { q: "Should I buy the MacBook Air or the MacBook Pro?", a: "The Air for browsing, school, office work, and light photo edits. The Pro if you need HDMI, an SD slot, the brighter XDR screen, or sustained performance for long exports." },
        { q: "Is the M4 MacBook Pro still worth buying?", a: "Only as a clearly discounted leftover from a trusted seller. When we checked on Nov 22, 2026, the 14-inch M4 was no longer sold new on Amazon, and the M5 model replaced it." },
        { q: "How much memory do I need?", a: "16GB is enough for most people. Choose 24GB or more only if you already run out of memory today, because Apple memory cannot be upgraded later." },
        { q: "Do these prices include tax?", a: "No. This page does not show prices. Read the live price, seller, and tax on Amazon before you pay." },
      ]}
    />
  );
}
