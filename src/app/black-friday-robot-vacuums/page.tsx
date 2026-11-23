import type { Metadata } from "next";
import { DealHub } from "@/components/common/DealPages";
import { pageMetadata } from "@/lib/seo";
import { seasonCopy } from "@/lib/sale-season";
import { VACUUMS, amazonUrl } from "./vacuums";

// Re-render hourly so the Black Friday copy switches to the evergreen copy after Cyber Monday.
export const revalidate = 3600;

const PATH = "/black-friday-robot-vacuums";

const SALE_COPY = {
  seoTitle: "Black Friday Robot Vacuum Deals 2026",
  heading: "Black Friday Robot Vacuum Deals 2026: Which to Buy",
  description:
    "Black Friday robot vacuum deals 2026: Roborock Qrevo 2 Pro, Q7 M5+, eufy, Shark and Lefant, sorted by dock, mop and budget so you open the right one. Shop now.",
  listName: "Black Friday robot vacuum deals",
};
const EVERGREEN_COPY = {
  seoTitle: "Robot Vacuum Deals Worth Buying",
  heading: "Robot Vacuum Deals Worth Buying",
  description:
    "Robot vacuum deals worth buying: Roborock Qrevo 2 Pro, Q7 M5+, eufy, Shark and Lefant, sorted by dock, mop and budget so you open the right one. Shop now.",
  listName: "Robot vacuum deals",
};

export function generateMetadata(): Metadata {
  const copy = seasonCopy(SALE_COPY, EVERGREEN_COPY);
  return pageMetadata({ path: PATH, title: copy.seoTitle, description: copy.description, kind: "vacuum" });
}

const PICKS = [
  { label: "Best overall", name: "Roborock Qrevo 2 Pro (Black)", why: "Vacuum, spinning mops, and a dock that empties, washes and dries." },
  { label: "Best value", name: "Roborock Q7 M5+", why: "A Roborock vacuum and mop with a self-empty dock." },
  { label: "Best budget", name: "Lefant M210 Pro", why: "A simple daily robot with no dock; you empty it." },
];

const link = "underline decoration-amber-500/80 underline-offset-4 hover:text-foreground";

export default function Page() {
  const copy = seasonCopy(SALE_COPY, EVERGREEN_COPY);
  const items = VACUUMS.map((item) => ({ ...item, href: amazonUrl(item.asin) }));
  return (
    <DealHub
      path={PATH}
      eyebrow="Robot vacuum deals"
      title={copy.heading}
      listName={copy.listName}
      answer="The best Black Friday robot vacuum deal for most homes is the Roborock Qrevo 2 Pro: it vacuums, mops, and its dock empties the bin and washes and dries the mops. The Roborock Q7 M5+ is the value pick with a self-empty dock, and the Lefant M210 Pro is the budget robot if you are happy to empty it yourself."
      picks={PICKS.map((pick) => ({ ...pick, url: amazonUrl(VACUUMS.find((entry) => entry.name === pick.name)!.asin) }))}
      items={items}
      sections={[
        {
          heading: "How to choose a robot vacuum on sale",
          body: [
            "Decide on the dock first. The Roborock Qrevo 2 Pro (black or white, the same robot) and the Qrevo Curv 2 Flow are full stations: they empty the dust, refill water, and wash the mops. They suit mostly hard floors and need floor space for a tall base.",
            "If you want the floor washed without the biggest station, look at the Roborock Q7 M5+ or the ECOVACS T90 Pro Omni. If pet hair fills a bin every day, a vacuum with a self-empty dock, like the eufy C10, the Shark AI Ultra or the renewed eufy L60, saves the daily chore.",
            "If you live alone and do not mind emptying a bin, a robot with no dock, the Lefant M210 Pro or the ILIFE A30s, is the cheapest and takes the least space.",
            <>
              Want a longer comparison with buying advice? See our{" "}
              <a href="/best-budget-robot-vacuums-under-300" className={link}>
                best robot vacuums under $300
              </a>{" "}
              and{" "}
              <a href="/roborock-vs-roomba-2026" className={link}>
                Roborock vs Roomba
              </a>{" "}
              guides.
            </>,
          ],
        },
      ]}
      faqTitle="Robot vacuum deal questions"
      faq={[
        { q: "Is Black Friday a good time to buy a robot vacuum?", a: "Usually, yes. Robot vacuums are among the most discounted categories during Black Friday and Cyber Monday. Compare the sale price with the regular price on the listing before you buy." },
        { q: "Do I need a self-empty dock?", a: "Only if the bin fills before the week is over, which pet hair usually causes. If you live alone with mostly bare floors, a robot you empty yourself is simpler and smaller." },
        { q: "Which of these robot vacuums also mop?", a: "The Roborock Qrevo 2 Pro, Qrevo Curv 2 Flow, Q7 M5+ and the ECOVACS T90 Pro Omni mop. The eufy C10, Shark AI Ultra, ILIFE A30s, eufy L60 and Lefant M210 Pro only vacuum." },
        { q: "Is the eufy L60 listing new?", a: "No. The eufy L60 link is a renewed unit. Read the condition and return window on Amazon before you treat it as new." },
      ]}
    />
  );
}
