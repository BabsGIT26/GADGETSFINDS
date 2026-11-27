import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import RelatedGuides from "@/components/common/RelatedGuides";
import { LivePrice, PriceDisclaimer, ProductPhoto } from "@/components/common/AmazonMedia";
import { pageMetadata } from "@/lib/seo";
import { CONTAINER, DISCLOSURE, EYEBROW, H1, H2, PAGE } from "@/lib/layout";

export const revalidate = 3600;

const PATH = "/black-friday-gaming-pc";

export const metadata: Metadata = pageMetadata({
  path: PATH,
  title: "Black Friday Gaming PC Parts",
  description:
    "Black Friday gaming PC parts: CPU, graphics card, board, memory, SSD, power supply, cooler and case, with today's Amazon price and percent off.",
  kind: "deals",
});

type Part = { name: string; asin: string; href: string; note: string };

const SECTIONS: { heading: string; parts: Part[] }[] = [
  {
    heading: "Graphics cards",
    parts: [
      { name: "MSI RTX 3060 Ventus 2X 12GB", asin: "B0H4X2M3NY", href: "https://link.amazon/B0iEmcaor", note: "1080p card, and the one on this list with a real markdown." },
      { name: "ASUS Prime RTX 5070 12GB", asin: "B0DS6WPTLL", href: "https://link.amazon/B0aJbwxTb", note: "The current 1440p card. The Amazon price is often above the launch price." },
      { name: "ASUS ROG Astral RTX 5090 32GB", asin: "B0DS2WQZ2M", href: "https://link.amazon/B07l1ujPi", note: "The top card. Buy it only if the budget is already there." },
      { name: "ASUS ROG Strix RTX 4090 24GB", asin: "B0BGT61797", href: "https://link.amazon/B03NFYgyb", note: "Previous flagship. Open the listing before you treat the price as a deal." },
    ],
  },
  {
    heading: "Processors",
    parts: [
      { name: "AMD Ryzen 7 9800X3D", asin: "B0DKFMSMYK", href: "https://link.amazon/B0a3HG0Zp", note: "The gaming CPU. It needs an AM5 board from the list below." },
      { name: "Intel Core Ultra 7 270K Plus", asin: "B0GMLJCBBM", href: "https://link.amazon/B0iLjyK4r", note: "Intel option. It needs an LGA 1851 board, not one of the AM5 boards here." },
      { name: "AMD Ryzen 7 5700X", asin: "B09VCHQHZ6", href: "https://link.amazon/B06SClP26", note: "Older AM4 chip. It does not fit the AM5 motherboards on this page." },
    ],
  },
  {
    heading: "Motherboards",
    parts: [
      { name: "Gigabyte B650 Eagle AX", asin: "B083TZ68H1", href: "https://link.amazon/B09Sufov0", note: "The lower-priced AM5 board. Enough for the 9800X3D." },
      { name: "Gigabyte B850 AORUS Elite WIFI7", asin: "B0DQLHVQSF", href: "https://link.amazon/B0gopjTd0", note: "Mid AM5 board with Wi-Fi 7." },
      { name: "ASUS ROG Strix B850-G Gaming WiFi", asin: "B0FH7MB8WV", href: "https://link.amazon/B0fhgsIh7", note: "Smaller mATX AM5 board. Check the case before you buy it." },
      { name: "ASUS X870 MAX Gaming WIFI7", asin: "B0F8KWHK5B", href: "https://link.amazon/B00Cfg1Ss", note: "Higher AM5 board, with USB4." },
    ],
  },
  {
    heading: "Memory",
    parts: [
      { name: "XPG Lancer Blade DDR5 32GB", asin: "B0CCK6P1HR", href: "https://link.amazon/B0gQFVtG9", note: "32GB at DDR5-6000. The right kit for the AM5 boards above." },
    ],
  },
  {
    heading: "Storage",
    parts: [
      { name: "Samsung 990 1TB", asin: "B0H1NH99GX", href: "https://link.amazon/B02S6r6g3", note: "Enough for Windows and a few games." },
      { name: "Samsung 9100 PRO 2TB", asin: "B0DX2DPJZ5", href: "https://link.amazon/B0gbSX8yj", note: "Faster PCIe 5 drive. The board needs a PCIe 5 slot to hit the rated speed." },
      { name: "Samsung 990 PRO 4TB", asin: "B0CHGT1KFJ", href: "https://link.amazon/B0bozY5xM", note: "The large drive, if the library of games is the point." },
    ],
  },
  {
    heading: "Power supplies",
    parts: [
      { name: "MSI MAG A850GLS 850W", asin: "B0FF7TGMD2", href: "https://link.amazon/B07ADQmSu", note: "850W Gold, enough for the 3060 or the 5070." },
      { name: "Thermaltake Toughpower GT 850W", asin: "B0DJ6DGHCP", href: "https://link.amazon/B03afgV15", note: "Another 850W Gold option with a 12V-2x6 cable." },
      { name: "Rosewill VMG 850W", asin: "B0FFQN6344", href: "https://link.amazon/B08U6i1Ji", note: "850W Gold. Read the recent reviews before you pick it over the MSI." },
      { name: "be quiet! Pure Power 13 M 1000W", asin: "B0FBXX1D17", href: "https://link.amazon/B005SamO7", note: "Open this one if the card is a 4090 or a 5090." },
    ],
  },
  {
    heading: "CPU coolers",
    parts: [
      { name: "Thermalright Peerless Assassin 120 SE", asin: "B0D8RZ65XJ", href: "https://link.amazon/B08iocAKv", note: "The dual-tower cooler to buy for the 9800X3D. Fits AM5." },
      { name: "Cooler Master Hyper 212 Black II", asin: "B07H25DYM3", href: "https://link.amazon/B06NnebcZ", note: "The cheaper tower. Fine for the 5700X, tight for the 9800X3D." },
      { name: "Thermalright Peerless Assassin 120 Vision MAX", asin: "B0GD1CJ71R", href: "https://link.amazon/B0iLzJvS6", note: "Same cooling idea, with a screen on top." },
    ],
  },
  {
    heading: "Cases",
    parts: [
      { name: "Corsair 3500X", asin: "B0FJ2Y9GK1", href: "https://link.amazon/B0b1oJsj3", note: "Panoramic mid-tower. Check the card length before a 4090 or 5090." },
      { name: "MUSETEX ATX mid-tower", asin: "B0FKZ5FVG1", href: "https://link.amazon/B0fcmCdVj", note: "The less expensive case, with fans already in it." },
      { name: "ASUS Prime AP304", asin: "B0H7FZY8GW", href: "https://link.amazon/B05eq7Nmj", note: "ASUS mid-tower. Few reviews so far." },
    ],
  },
];

function PartRow({ part }: { part: Part }) {
  return (
    <article className="flex gap-3 sm:gap-4 border border-border rounded-xl bg-card p-3 sm:p-4">
      <ProductPhoto asin={part.asin} alt={part.name} variant="thumb" />
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-bold text-foreground">{part.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{part.note}</p>
        <LivePrice asin={part.asin} compact className="mt-2" />
        <a
          href={part.href}
          rel="nofollow sponsored noopener noreferrer"
          className="mt-3 inline-flex items-center justify-center px-4 py-2 rounded-full bg-amber-400 text-zinc-950 text-sm font-extrabold hover:bg-amber-300"
        >
          View on Amazon
        </a>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <main className={PAGE}>
        <article>
          <div className={CONTAINER}>
            <p className={DISCLOSURE}>
              <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn
              from qualifying purchases if you buy through links on this page, at no extra cost to you.
            </p>
            <p className={EYEBROW}>Gaming PC parts</p>
            <h1 className={H1}>Black Friday gaming PC parts</h1>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl">
              The price and the percent off come from Amazon and change through the sale. The Ryzen 7
              9800X3D, the motherboards, and the DDR5 kit are one build. The Intel chip needs a different board. The Ryzen
              7 5700X is AM4 and does not fit these boards.
            </p>
            {SECTIONS.map((section) => (
              <section key={section.heading} className="mb-10">
                <h2 className={H2}>{section.heading}</h2>
                <div className="grid gap-3">
                  {section.parts.map((part) => (
                    <PartRow key={part.asin} part={part} />
                  ))}
                </div>
              </section>
            ))}
            <PriceDisclaimer />
            <RelatedGuides current={PATH} topics={["computing", "gaming", "deals"]} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
