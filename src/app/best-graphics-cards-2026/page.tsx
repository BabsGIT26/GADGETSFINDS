import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-graphics-cards-2026";
const SEO_TITLE = "Best Graphics Cards for Gaming in 2026";
const TITLE = "Best Graphics Cards for Gaming in 2026: RTX 50 and Arc";
const DESCRIPTION =
  "The best graphics cards for gaming in 2026: RTX 5090, 5080, 5070 Ti, 5070, 5060 Ti and Intel Arc B580, matched to 1080p, 1440p and 4K. Check today's price.";
const IMG = illustrationPath("gpu");

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "gpu" });

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
    skip: "you plan to keep the card for years at 1440p. The 16GB 5070 Ti has more headroom.",
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
    skip: "the 16GB 5060 Ti costs only a little more. 8GB is already tight in new games.",
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
    skip: "you play older games that Intel drivers handle less well, or you want DLSS. Buy NVIDIA.",
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
      answer="The best graphics card for gaming in 2026 for most PCs is the RTX 5070 Ti 16GB: it handles high-refresh 1440p and entry-level 4K. For 1080p and budget 1440p, the RTX 5060 Ti 16GB is the best value. Buy the RTX 5090 only for 4K with ray tracing or local AI work that needs 32GB of memory."
      intro={[
        "Pick the card for your monitor, not for the name on the box: 1080p needs a 5060 Ti, 1440p is the 5070 or 5070 Ti, and 4K starts at the 5070 Ti with DLSS. RTX 50 prices change by the hour and partner cards cost more than NVIDIA's launch prices, so the table lists launch prices only as a reference.",
      ]}
      hero={{ src: IMG, alt: "Graphics card buying guide" }}
      tableTitle="RTX 50 and Arc graphics cards compared"
      tableColumns={["Memory", "Board power (maker rating)", "Launch price (maker)"]}
      products={products.map((product) => ({ ...product, image: IMG }))}
      buyingGuide={{
        heading: "How to choose a graphics card",
        points: [
          { title: "Match the card to your monitor", body: "1080p at 60 to 144Hz: RTX 5060 Ti or Arc B580. 1440p high refresh: RTX 5070 or 5070 Ti. 4K: RTX 5070 Ti with DLSS, the 5080, or the 5090." },
          { title: "Video memory", body: "8GB is enough for esports at 1080p. For new big-budget games at high settings, 12GB to 16GB is the safer choice and lasts longer." },
          { title: "Power supply", body: "The board power figures are the makers' ratings for the card alone. Factory-overclocked partner cards can draw more, and the 5090 needs a quality high-wattage supply with the right 16-pin connector." },
          { title: "Case size", body: "Triple-fan cards are long and thick. Measure the space in your case before you buy." },
          { title: "Listing check", body: "Confirm the memory size, that the card is new rather than renewed, and that Amazon or the maker is the seller." },
        ],
      }}
      verdict={[
        "Buy the RTX 5070 Ti for most gaming PCs. Drop to the 5060 Ti 16GB for 1080p and budget 1440p. Buy the 5090 only for 4K with ray tracing or local AI work that needs 32GB.",
      ]}
      faqTitle="Graphics card buying questions"
      faq={[
        { q: "What is the best graphics card for 1440p gaming?", a: "The RTX 5070 Ti 16GB for high-refresh 1440p, or the RTX 5070 if you want to spend less and play at medium-to-high settings." },
        { q: "Is 8GB of video memory enough in 2026?", a: "For esports at 1080p, yes. For new big-budget games at high settings, 12GB to 16GB is the safer choice." },
        { q: "Is there an RTX 5090 Ti?", a: "No. The RTX 5090 is NVIDIA's top GeForce card in the RTX 50 series." },
        { q: "What power supply do I need for an RTX 5090?", a: "NVIDIA rates the card at 575W. Plan for a quality high-wattage power supply with the right 16-pin connector, and check the card maker's recommendation." },
      ]}
    />
  );
}
