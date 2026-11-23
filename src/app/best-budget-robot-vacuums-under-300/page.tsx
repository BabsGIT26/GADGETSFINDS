import type { Metadata } from "next";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-budget-robot-vacuums-under-300";
const SEO_TITLE = "Best Robot Vacuums Under $300 in 2026";
const TITLE = "Best Robot Vacuums Under $300 in 2026: Budget Picks";
const DESCRIPTION =
  "The best robot vacuums under $300 in 2026: Roborock Q7 L5 with LiDAR and a mop, eufy C10 with a self-empty dock, and the Lefant M210 Pro. Check today's price.";
const IMG = illustrationPath("vacuum");
const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=${TAG}`;

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "vacuum" });

const products: RoundupProduct[] = [
  {
    id: "roborock-q7-l5",
    name: "Roborock Q7 L5",
    label: "Best overall",
    url: amz("B0F3337BV7"),
    why: "LiDAR mapping, strong suction and a mop for well under $300.",
    specs: [
      ["Navigation", "LiDAR, saves multiple floor maps"],
      ["Suction (Roborock)", "8,000Pa"],
      ["Mop", "Yes, 270ml water tank, removable pad"],
      ["Dock", "Charging only, no self-empty"],
      ["Price when checked", "$119.99 on Amazon, Nov 22, 2026"],
    ],
    body: [
      "This is the robot most people under $300 should buy. LiDAR means it maps the home, cleans in straight rows instead of bouncing around, and lets you set no-go zones and room schedules in the Roborock app. Roborock rates it at 8,000Pa, and both brushes are designed to resist hair wrap.",
      "The mop is a simple drag pad with three water levels. It wipes up dust and light marks on hard floors; it does not scrub dried spills like the spinning mops on pricier stations. The listing is sold by Roborock and shipped by Amazon.",
    ],
    skip: "you do not want to empty a bin every day or two. There is no self-empty dock, so look at the eufy C10.",
    image: IMG,
  },
  {
    id: "eufy-c10",
    name: "eufy C10 with self-empty station",
    label: "Best self-empty",
    url: amz("B0GD1XTMFN"),
    why: "A self-emptying dock and LiDAR for about $220.",
    specs: [
      ["Navigation", "Laser (LiDAR) mapping"],
      ["Suction (eufy)", "4,000Pa"],
      ["Dock", "Self-empty, 3L bag, about 60 days per bag"],
      ["Height", "2.85 in"],
      ["Price when checked", "$219.99 on Amazon, Nov 22, 2026"],
    ],
    body: [
      "Pick the C10 if pet hair or a busy household fills a robot bin fast. The robot empties itself into a 3-liter bag in the station, and eufy says one bag lasts about 60 days. LiDAR mapping, schedules and room cleaning work from the eufy app.",
      "At 2.85 inches tall it fits under more beds and sofas than most docked robots, and an extending side brush reaches into corners. It vacuums only: there is no mop.",
    ],
    skip: "you want the floor mopped too, or you would rather not buy replacement dust bags. The Roborock Q7 L5 mops and costs less.",
    image: IMG,
  },
  {
    id: "lefant-m210-pro",
    name: "Lefant M210 Pro",
    label: "Best under $100",
    url: amz("B0CYL7273B"),
    why: "The cheapest robot here worth buying, and the slimmest.",
    specs: [
      ["Navigation", "Infrared sensors, no map"],
      ["Runtime (Lefant)", "Up to 120 minutes"],
      ["Size", "11 in wide, 2.99 in tall"],
      ["Dock", "Charging only"],
      ["Price when checked", "$94.99 on Amazon, Nov 22, 2026"],
    ],
    body: [
      "A small, quiet robot for a studio, a bedroom or a small apartment with hard floors. It has no roller brush, just a wide suction opening, so hair does not wrap around anything. You get six cleaning modes, three suction levels, schedules in the Lefant app and Alexa or Google Assistant control.",
      "Without LiDAR it cannot draw a map or clean room by room, and it covers a big home less evenly than the Roborock. For daily upkeep in a small space, that matters less than the price.",
    ],
    skip: "you have several rooms or thick carpet. A mapping robot like the Q7 L5 covers a larger home far better for about $25 more.",
    image: IMG,
  },
];

export default function Page() {
  return (
    <Roundup
      path={PATH}
      eyebrow="Robot vacuums"
      title={TITLE}
      updated="November 2026"
      description={DESCRIPTION}
      answer="The best robot vacuum under $300 for most homes is the Roborock Q7 L5: LiDAR mapping, 8,000Pa of suction and a mop, at $119.99 when we checked. Choose the eufy C10 if you want a dock that empties the bin for you, and the Lefant M210 Pro if your space is small and your budget is under $100."
      intro={[
        "Under $300 you are choosing between three things: a map, a mop and a self-empty dock. Very few robots in this price range do all three well, so the picks below each lead with the one that matters most. Every pick is a new listing on Amazon; we do not include renewed units here.",
      ]}
      hero={{ src: IMG, alt: "Budget robot vacuums under $300" }}
      tableTitle="Budget robot vacuums compared"
      tableColumns={["Navigation", "Dock", "Price when checked"]}
      products={products}
      extra={[
        {
          id: "older-models",
          heading: "What about the eufy G30 and Roomba 600?",
          body: [
            "Older guides still recommend the eufy RoboVac G30 and the iRobot Roomba 600 series. Neither has LiDAR, and we could not find a current new listing for the G30 on Amazon. The Roomba 600 series is mostly sold renewed now. For the same money, the Roborock Q7 L5 maps the home and mops.",
          ],
        },
      ]}
      buyingGuide={{
        heading: "How to choose a cheap robot vacuum",
        intro: "Decide which chore you want to stop doing, then match it to the feature.",
        points: [
          { title: "Navigation", body: "LiDAR robots map the home, clean in rows and let you block off rooms. Robots without it wander and miss spots; they are fine for one or two small rooms." },
          { title: "Self-empty dock", body: "Worth it with pets or a busy home. Without one you empty a small bin every day or two. Docks need replacement bags." },
          { title: "Mopping", body: "Budget robots drag a damp pad. It keeps dust down on hard floors but will not scrub dried spills. Spinning mops cost more." },
          { title: "Height", body: "Measure under your sofa and bed. Robots under about 3 inches tall reach the dust that collects there." },
          { title: "Wi-Fi", body: "All three picks need 2.4GHz Wi-Fi for the app. Most routers broadcast it, but check if yours is set to 5GHz only." },
        ],
      }}
      verdict={[
        "Buy the Roborock Q7 L5 unless you have a reason not to. Spend more on the eufy C10 only for the self-empty dock, and save with the Lefant M210 Pro if you live in a small space. For bigger sale discounts on docked and mopping robots, see our Black Friday robot vacuum deals.",
      ]}
      faqTitle="Budget robot vacuum questions"
      faq={[
        { q: "What is the best robot vacuum under $300?", a: "The Roborock Q7 L5 for most homes. It has LiDAR mapping, 8,000Pa of suction and a mop, and was $119.99 on Amazon when we checked." },
        { q: "Is a cheap robot vacuum worth it?", a: "Yes, for daily upkeep. A budget robot keeps dust and hair under control between deep cleans. It will not replace an upright vacuum on stairs or thick rugs." },
        { q: "Do I need LiDAR on a robot vacuum?", a: "For more than one or two rooms, yes. LiDAR lets the robot map the home, clean efficiently and skip areas you block off." },
        { q: "Which budget robot vacuum is best for pet hair?", a: "The eufy C10, because the self-empty dock handles a bin that fills fast. The Roborock Q7 L5 also has anti-tangle brushes if you do not need a dock." },
        { q: "Can a robot vacuum under $300 mop?", a: "Some can. The Roborock Q7 L5 vacuums and mops at the same time with a damp pad, which is fine for light cleaning on hard floors." },
      ]}
      dealBox={{ productName: "Robot Vacuums Under $300", href: `https://www.amazon.com/s?k=robot+vacuum+under+300&tag=${TAG}` }}
    />
  );
}
