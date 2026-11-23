import type { Metadata } from "next";
import { DealHub } from "@/components/common/DealPages";
import { pageMetadata } from "@/lib/seo";
import { seasonCopy } from "@/lib/sale-season";
import { WATCHES, amazonUrl } from "./watches";

// Re-render hourly so the Black Friday copy switches to the evergreen copy after Cyber Monday.
export const revalidate = 3600;

const PATH = "/black-friday-smartwatches";

const SALE_COPY = {
  seoTitle: "Black Friday Smartwatch Deals 2026",
  heading: "Black Friday Smartwatch Deals 2026: Which to Buy",
  description:
    "Black Friday smartwatch deals 2026: Apple Watch SE 3 and Series 12, Garmin Venu 4 and Instinct 3, WHOOP and a budget GPS watch, matched to your phone. Shop now.",
  listName: "Black Friday smartwatch deals",
};
const EVERGREEN_COPY = {
  seoTitle: "Smartwatch Deals Worth Buying",
  heading: "Smartwatch Deals Worth Buying",
  description:
    "Smartwatch deals worth buying: Apple Watch SE 3 and Series 12, Garmin Venu 4 and Instinct 3, WHOOP and a budget GPS watch, matched to your phone. Shop the deals.",
  listName: "Smartwatch deals",
};

export function generateMetadata(): Metadata {
  const copy = seasonCopy(SALE_COPY, EVERGREEN_COPY);
  return pageMetadata({ path: PATH, title: copy.seoTitle, description: copy.description, kind: "watch" });
}

const PICKS = [
  { label: "Best for iPhone", name: "Apple Watch SE 3 GPS 40mm", why: "The most affordable current Apple Watch." },
  { label: "Best for fitness", name: "Garmin Venu 4 45mm", why: "An everyday fitness watch for iPhone or Android." },
  { label: "Most rugged", name: "Garmin Instinct 3 AMOLED 45mm", why: "Built to be knocked around, with multi-band GPS." },
];

const link = "underline decoration-amber-500/80 underline-offset-4 hover:text-foreground";

export default function Page() {
  const copy = seasonCopy(SALE_COPY, EVERGREEN_COPY);
  const items = WATCHES.map((item) => ({ ...item, href: amazonUrl(item.asin) }));
  return (
    <DealHub
      path={PATH}
      eyebrow="Smartwatch deals"
      title={copy.heading}
      listName={copy.listName}
      answer="The best Black Friday smartwatch deal depends on your phone. On iPhone, the Apple Watch SE 3 is the best value and the Series 12 is the upgrade. On Android, or to work with either phone, the Garmin Venu 4 is the everyday fitness pick and the Instinct 3 AMOLED is the rugged one."
      picks={PICKS.map((pick) => ({ ...pick, url: amazonUrl(WATCHES.find((entry) => entry.name === pick.name)!.asin) }))}
      items={items}
      sections={[
        {
          heading: "How to choose a smartwatch on sale",
          body: [
            "On an iPhone, start with the Apple Watches. The SE 3 GPS 40mm is the smaller, cheaper model. The Series 12 GPS 42mm is the current watch and still needs your iPhone nearby; the Series 12 GPS + Cellular 46mm can leave the phone at home once you add a carrier plan. Each listing is one case size and one band length.",
            "On Android, or if the watch should work with either phone, start with Garmin: the Venu 4 for everyday fitness, the Instinct 3 AMOLED if you want something tough. The CARBINOX Edge is a budget GPS watch that does not run Garmin software. The WHOOP is not a watch at all: it is a screenless band sold with 12 months of membership.",
            <>
              Want a full comparison outside the sale? See our{" "}
              <a href="/best-smartwatches-under-350" className={link}>
                best smartwatches under $350
              </a>{" "}
              guide.
            </>,
          ],
        },
      ]}
      faqTitle="Smartwatch deal questions"
      faq={[
        { q: "Is Black Friday a good time to buy a smartwatch?", a: "Usually, yes. Apple Watch and Garmin models are often discounted during Black Friday and Cyber Monday. Compare the sale price with the regular price on the listing first." },
        { q: "Which of these work with an Android phone?", a: "The Garmin Venu 4, the Garmin Instinct 3, the CARBINOX Edge and the WHOOP. The Apple Watches need an iPhone." },
        { q: "Is the WHOOP a smartwatch?", a: "No. It is a screenless band sold with 12 months of WHOOP Peak membership. You read the data on your phone." },
        { q: "What is the difference between the two Series 12 listings?", a: "The 42mm is GPS only with an S/M band. The 46mm is GPS + Cellular with an M/L band; cellular still needs a carrier plan." },
      ]}
    />
  );
}
