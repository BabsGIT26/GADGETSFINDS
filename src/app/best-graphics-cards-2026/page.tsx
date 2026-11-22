import type { Metadata } from "next";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-graphics-cards-2026";
const TITLE = "Best Graphics Cards to Buy in 2026";
const DESCRIPTION =
  "RTX 5090, 5080, 5070 Ti, 5070, and 5060 Ti compared, plus Intel Arc B580: memory, power, launch prices, and which card fits your monitor.";

export const metadata: Metadata = {
  title: `${TITLE} | Gadgets Finds`,
  description: DESCRIPTION,
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: `https://www.gadgets-finds.com${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://www.gadgets-finds.com${PATH}`, type: "article" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=${TAG}`;

const products: RoundupProduct[] = [
  {
    id: "rtx-5070-ti",
    name: "ASUS TUF Gaming GeForce RTX 5070 Ti 16GB",
    label: "Best overall",
    url: amz("B0DS6WTXGP"),
    why: "16GB for high-refresh 1440p and entry 4K.",
    specs: [
      ["Memory", "16GB GDDR7"],
      ["Board power (maker rating)", "300W"],
      ["Launch price (maker)", "From $749"],
      ["Best for", "1440p high refresh, 4K with DLSS"],
    ],
    body: [
      "The 5070 Ti is the card most gamers should look at first. It has the same 16GB of memory as the 5080, which matters more every year as games ship with bigger textures. This listing is ASUS's TUF partner card.",
      "Partner cards usually cost more than NVIDIA's launch price. Compare the live price to the 5080 before you buy; if the gap is small, the 5080 is the better buy.",
    ],
    skip: "you play at 1080p. A 5060 Ti does that for far less.",
  },
  {
    id: "rtx-5060-ti",
    name: "ASUS Prime GeForce RTX 5060 Ti 16GB",
    label: "Best value",
    url: amz("B0F4RZDFD5"),
    why: "The 16GB version of NVIDIA's mid-range card.",
    specs: [
      ["Memory", "16GB GDDR7"],
      ["Board power (maker rating)", "180W"],
      ["Launch price (maker)", "From $429"],
      ["Best for", "1080p and 1440p"],
    ],
    body: [
      "Buy the 16GB version, not the 8GB one, unless the price gap is large. 8GB is already a limit in some new games at high settings.",
      "At 180W it runs on a modest power supply and fits most cases.",
    ],
    skip: "you want 4K. Look at the 5070 Ti or above.",
  },
  {
    id: "rtx-5090",
    name: "ASUS TUF Gaming GeForce RTX 5090 32GB",
    label: "Fastest",
    url: amz("B0DS2X13PH"),
    why: "The flagship, with 32GB for 4K and local AI.",
    specs: [
      ["Memory", "32GB GDDR7"],
      ["Board power (maker rating)", "575W"],
      ["Launch price (maker)", "From $1,999 (Founders Edition)"],
      ["Best for", "4K ray tracing, local AI, heavy video"],
    ],
    body: [
      "The RTX 5090 is NVIDIA's flagship GeForce card on the Blackwell architecture, with a 512-bit memory bus and DLSS 4 Multi Frame Generation. NVIDIA rates it at 575W, up from 450W on the 4090, so the power supply and case airflow matter as much as the card.",
      "There is no RTX 5090 Ti. Partner cards like this one sell well above the Founders Edition launch price; confirm the listing is a new 5090 from a trusted seller.",
    ],
    skip: "you play at 1440p on a mid-range monitor. You are paying for headroom you will not use.",
  },
  {
    id: "rtx-5080",
    name: "PNY GeForce RTX 5080 16GB Triple Fan",
    label: "Best for 4K under the 5090",
    url: amz("B0DYRZZJZ1"),
    why: "Faster than the 5070 Ti with the same 16GB.",
    specs: [
      ["Memory", "16GB GDDR7"],
      ["Board power (maker rating)", "360W"],
      ["Launch price (maker)", "From $999"],
      ["Best for", "4K with DLSS, high refresh 1440p"],
    ],
    body: [
      "The 5080 is the fastest card below the 5090, but it keeps 16GB of memory, the same as the 5070 Ti. That makes it a speed upgrade, not a memory upgrade.",
    ],
    skip: "the 5070 Ti is much cheaper on the day you buy.",
  },
  {
    id: "rtx-5070",
    name: "NVIDIA GeForce RTX 5070 12GB",
    label: "Cheapest 1440p RTX 50",
    url: amz("B0F7XHBT13"),
    why: "NVIDIA's own design at the lowest 5070 tier.",
    specs: [
      ["Memory", "12GB GDDR7"],
      ["Board power (maker rating)", "250W"],
      ["Launch price (maker)", "From $549"],
      ["Best for", "1440p"],
    ],
    body: ["A sensible 1440p card. The trade-off is 12GB of memory, so the 16GB 5070 Ti ages better if you keep cards for years."],
  },
  {
    id: "rtx-5060-ti-8gb",
    name: "ASUS Dual GeForce RTX 5060 Ti 8GB",
    label: "Tightest budget",
    url: amz("B0F7W1KVT3"),
    why: "Only when the 16GB model costs much more.",
    specs: [
      ["Memory", "8GB GDDR7"],
      ["Board power (maker rating)", "180W"],
      ["Launch price (maker)", "From $379"],
      ["Best for", "1080p esports"],
    ],
    body: ["Same chip as the 16GB 5060 Ti with half the memory. Fine for esports titles at 1080p; a compromise in new big-budget games."],
  },
  {
    id: "intel-arc-b580",
    name: "Intel Arc B580 12GB",
    label: "Budget alternative",
    why: "Intel's 1080p and 1440p card.",
    specs: [
      ["Memory", "12GB GDDR6"],
      ["Board power (maker rating)", "190W"],
      ["Launch price (maker)", "$249"],
      ["Best for", "1080p and light 1440p"],
    ],
    body: [
      "Intel's Battlemage card launched in December 2024 with 12GB of memory at $249, more memory than NVIDIA offers at that price. Drivers have improved, but older games can still be less consistent than on NVIDIA.",
      "When we checked on Nov 22, 2026, the Intel Limited Edition and the Sparkle B580 listings on Amazon showed as currently unavailable, so there is no button here.",
    ],
  },
];

export default function Page() {
  return (
    <Roundup
      path={PATH}
      eyebrow="Graphics cards"
      title={TITLE}
      updated="November 2026"
      description={DESCRIPTION}
      intro={[
        "Pick the card for your monitor, not for the name on the box. 1080p needs a 5060 Ti. 1440p is the 5070 or 5070 Ti. 4K starts at the 5070 Ti with DLSS and ends at the 5090.",
        "Prices for RTX 50 cards change by the hour and partner cards cost more than NVIDIA's launch prices, so this page lists launch prices only as a reference. This guide replaces our older RTX 50 price list, RTX 5090 page, and Intel Arc B-Series page.",
      ]}
      tableColumns={["Memory", "Board power (maker rating)", "Launch price (maker)"]}
      products={products}
      extra={[
        {
          id: "before-you-buy",
          heading: "Before you buy a graphics card",
          body: [
            "Check your power supply. The board power ratings above are the makers’ figures for the card alone; partner cards with factory overclocks can draw more.",
            "Measure your case. Triple-fan cards are long and thick.",
            "Confirm the exact model on Amazon: memory size, new not renewed, and sold by Amazon or the maker.",
          ],
        },
      ]}
      verdict={[
        "Buy the RTX 5070 Ti for most gaming PCs. Drop to the 5060 Ti 16GB for 1080p and budget 1440p. Buy the 5090 only for 4K with ray tracing or local AI work that needs 32GB.",
      ]}
      faq={[
        { q: "Is there an RTX 5090 Ti?", a: "No. The RTX 5090 is NVIDIA's top GeForce card in the RTX 50 series." },
        { q: "Is 8GB of video memory enough in 2026?", a: "For esports at 1080p, yes. For new big-budget games at high settings, 12GB to 16GB is the safer choice." },
        { q: "Why are RTX 50 prices higher than launch prices?", a: "Demand and partner-card pricing. Launch prices on this page are NVIDIA's reference prices; read the live price on Amazon." },
        { q: "What power supply do I need for an RTX 5090?", a: "NVIDIA rates the card at 575W. Plan for a quality high-wattage power supply with the right 16-pin connector, and check the card maker's recommendation." },
      ]}
    />
  );
}
