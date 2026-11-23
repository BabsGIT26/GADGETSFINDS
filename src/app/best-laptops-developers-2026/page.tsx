import type { Metadata } from "next";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-laptops-developers-2026";
const SEO_TITLE = "Best Laptops for Programming in 2026";
const TITLE = "Best Laptops for Programming in 2026: Developer Picks";
const DESCRIPTION =
  "The best laptops for programming in 2026: MacBook Pro 14 M5 for most developers, MacBook Air M5 for value, and the M5 Max for big builds. Compare prices.";
const IMG = illustrationPath("laptop");
const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=${TAG}`;

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "laptop" });

const products: RoundupProduct[] = [
  {
    id: "macbook-pro-14-m5",
    name: "MacBook Pro 14 (M5, 16GB, 1TB)",
    label: "Best overall",
    url: amz("B0FWD623D1"),
    why: "Fans, more ports and a bigger SSD for daily development work.",
    specs: [
      ["Chip", "Apple M5, 10-core CPU, 10-core GPU"],
      ["Memory / storage", "16GB / 1TB"],
      ["Display", "14.2-inch Liquid Retina XDR"],
      ["Ports", "3x Thunderbolt 4, HDMI, SDXC, MagSafe 3"],
    ],
    body: [
      "The best laptop for programming for most developers. The M5 is fast at the single-threaded work that dominates compiles, test runs and IDE indexing, and the fan keeps it at full speed through long builds where the fanless Air slows down. Apple says it runs at the same speed on battery as plugged in.",
      "The 1TB SSD leaves room for Docker images, simulators and node_modules, and HDMI plus an SD slot mean fewer dongles at a desk. macOS gives you a Unix shell, Homebrew and Xcode, which you need for iPhone and Mac apps.",
    ],
    skip: "you mostly write web front ends or scripts. The MacBook Air does that for less money and less weight.",
    image: IMG,
  },
  {
    id: "macbook-air-13-m5",
    name: "MacBook Air 13 (M5, 16GB, 512GB)",
    label: "Best value",
    url: amz("B0GR19X8DC"),
    why: "Silent, light and fast enough for web, scripting and student work.",
    specs: [
      ["Chip", "Apple M5"],
      ["Memory / storage", "16GB / 512GB"],
      ["Display", "13.6-inch Liquid Retina, 2560 x 1664"],
      ["Ports", "2x Thunderbolt 4, MagSafe 3, headphone jack"],
    ],
    body: [
      "The cheapest Mac we would code on. 16GB of memory is enough for an editor, a browser full of docs, a local dev server and a couple of containers. It has no fan, so it is completely silent, and Apple rates the battery at up to 18 hours of video.",
      "The trade-off is sustained speed: long builds and heavy test suites make it throttle, and two USB-C ports means a hub at the desk.",
    ],
    skip: "you build large projects, run several VMs or need more than one external display often. Get the MacBook Pro 14.",
    image: IMG,
  },
  {
    id: "macbook-pro-16-m5-max",
    name: "MacBook Pro 16 (M5 Max, 36GB, 2TB)",
    label: "Most power",
    url: amz("B0GR1F53WV"),
    why: "For big codebases, local AI models, VMs and game engines.",
    specs: [
      ["Chip", "M5 Max, 18-core CPU, 32-core GPU"],
      ["Memory / storage", "36GB / 2TB"],
      ["Display", "16.2-inch Liquid Retina XDR, up to 120Hz"],
      ["Ports", "3x Thunderbolt 5, HDMI, SDXC, MagSafe 3"],
    ],
    body: [
      "Buy this when the laptop is your build server. The 18-core CPU cuts full rebuilds of large projects, 36GB of unified memory holds several VMs or a mid-size local language model, and the 32-core GPU helps with Metal, ML and game-engine work.",
      "The 16-inch screen fits an editor and a terminal side by side without an external monitor. It is heavy and expensive, so only buy it if your workload actually uses the cores and memory.",
    ],
    skip: "your work is web or mobile development. The 14-inch M5 is much cheaper and lighter and still very fast for it.",
    image: IMG,
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
      answer="The best laptop for programming for most developers is the MacBook Pro 14 with the M5 chip: fast single-core speed for builds, a fan for long compiles, 1TB of storage and all-day battery. The MacBook Air M5 is the value pick for web and scripting work, and the MacBook Pro 16 M5 Max is for large builds, VMs and local AI models."
      intro={[
        "All three picks are current Apple listings on Amazon with 16GB of memory or more. We compare them on the specs that matter for coding: CPU speed, memory, storage, ports and screen size. If you need Windows or Linux, read the section below the picks first.",
      ]}
      hero={{ src: IMG, alt: "Laptops for programming" }}
      tableTitle="Programming laptops compared"
      tableColumns={["Chip", "Memory / storage", "Display"]}
      products={products}
      extra={[
        {
          id: "windows-linux",
          heading: "Best laptop for programming on Windows or Linux",
          body: [
            "If your stack needs Windows (.NET desktop, DirectX, some enterprise tools) or you want to run Linux on the hardware itself, a Mac is the wrong choice. Look for a laptop with a recent Intel Core Ultra, AMD Ryzen AI or Snapdragon X chip, at least 16GB of memory that is ideally upgradeable, a 1TB SSD and a keyboard you have tried.",
            "For Linux, business lines such as Lenovo ThinkPad and Dell Pro are the safest choices, because their Wi-Fi, sleep and firmware updates are well supported. We do not list specific Windows models here yet because we could not confirm current listings we would recommend.",
          ],
        },
      ]}
      buyingGuide={{
        heading: "How to choose a laptop for coding",
        points: [
          { title: "Memory", body: "16GB is the minimum for development in 2026. Choose 32GB or more for Docker, Android emulators or VMs. Memory is not upgradeable on most thin laptops, including every MacBook." },
          { title: "Processor", body: "Single-core speed decides how fast builds and tests feel. Extra cores help big compiles and parallel test runs." },
          { title: "Storage", body: "512GB fills up fast with SDKs, containers and simulators. 1TB is the comfortable size." },
          { title: "Screen and ports", body: "A 14-inch screen is a good balance for travel. If you work at a desk, check how many external monitors the laptop supports and whether it has HDMI." },
          { title: "Operating system", body: "You need macOS to build iPhone and Mac apps. Windows suits .NET and game development. Linux runs well on business laptops with good driver support." },
        ],
      }}
      verdict={[
        "Buy the MacBook Pro 14 M5 if you code every day. Save with the MacBook Air M5 for web, scripting and school work, and step up to the MacBook Pro 16 M5 Max only for heavy builds, VMs or local AI models. Compare every current model in our best MacBooks guide.",
      ]}
      faqTitle="Programming laptop questions"
      faq={[
        { q: "What is the best laptop for programming?", a: "For most developers, the MacBook Pro 14 with the M5 chip. It is fast, quiet, has a fan for long builds and lasts all day on battery." },
        { q: "How much RAM do I need for programming?", a: "16GB for web and general development. 32GB or more if you run Docker, Android emulators, virtual machines or local AI models." },
        { q: "Is a MacBook Air good enough for programming?", a: "Yes, for web development, scripting and learning to code. It slows down on long builds because it has no fan." },
        { q: "Is a Mac or Windows laptop better for coding?", a: "A Mac if you build iPhone or Mac apps or want a Unix shell out of the box. Windows if your stack is .NET or game development. Both work for web development." },
      ]}
      dealBox={{ productName: "Laptops for Programming", href: `https://www.amazon.com/s?k=laptop+for+programming&tag=${TAG}` }}
    />
  );
}
