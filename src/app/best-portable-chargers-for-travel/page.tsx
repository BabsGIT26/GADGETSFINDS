import type { Metadata } from "next";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-portable-chargers-for-travel";
const SEO_TITLE = "Best Portable Chargers for Travel in 2026";
const TITLE = "Best Portable Chargers for Travel in 2026";
const DESCRIPTION =
  "The best portable chargers for travel in 2026: four Anker power banks compared by capacity, laptop output and airline carry-on limits. Check today's price.";
const IMG = illustrationPath("powerbank");
const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=${TAG}`;

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "powerbank" });

const products: RoundupProduct[] = [
  {
    id: "anker-20000-87w",
    name: "Anker Power Bank 20,000mAh 87W (built-in USB-C cable)",
    label: "Best overall",
    url: amz("B0CXDQXC3Q"),
    why: "The capacity and wattage that fit a normal trip.",
    specs: [
      ["Capacity", "20,000mAh"],
      ["Top output", "87W shared, up to 65W on one device"],
      ["Carry-on", "Yes, under 100Wh (check the label)"],
      ["Size / weight", "6.2 x 2.9 x 1.0 in, 15.5 oz"],
    ],
    body: [
      "One bank for a phone, a tablet and, in a pinch, a 13- or 14-inch laptop. Up to 65W on one device is enough to top up a light laptop, and the attached USB-C cable means one less thing to dig out of a bag at the gate. Anker says the cable is rated for more than 10,000 bends.",
      "Anker's numbers: an iPhone 15 Pro to about 58 percent, or a MacBook Air to about 52 percent, in 30 minutes, and a full refill of the bank in about 1.5 hours from a 65W charger. The percentage display tells you how much is left before you leave the hotel.",
    ],
    skip: "you only carry a phone. At 15.5 ounces it is heavier than you need; the Nano below is half the weight.",
    image: IMG,
  },
  {
    id: "anker-nano-10000",
    name: "Anker Nano Power Bank 10,000mAh 30W",
    label: "Lightest",
    url: amz("B0C9D7R1B6"),
    why: "A pocket-size bank for a phone on short trips.",
    specs: [
      ["Capacity", "10,000mAh (36Wh)"],
      ["Top output", "30W USB-C"],
      ["Carry-on", "Yes"],
      ["Size / weight", "4.09 x 2.06 x 1.02 in, 7.58 oz"],
    ],
    body: [
      "The bank that disappears in a bag. It has a short built-in USB-C cable plus USB-C and USB-A ports, and the 30W cable fast-charges a phone or a small tablet. At 36Wh there is no airline question at all.",
      "Expect about one and a half to two phone charges, not the three some listings imply. The small screen shows remaining time, and Anker's warranty on this model is 24 months.",
    ],
    skip: "you need to keep a laptop running. 30W will barely slow a MacBook's battery drain.",
    image: IMG,
  },
  {
    id: "anker-prime-27650",
    name: "Anker Prime Power Bank 27,650mAh 250W",
    label: "Best for laptops",
    url: amz("B0BYP2F3SG"),
    why: "140W from one port, still under the 100Wh carry-on line.",
    specs: [
      ["Capacity", "27,650mAh (99.54Wh)"],
      ["Top output", "250W total, up to 140W on one USB-C port"],
      ["Carry-on", "Yes, show the 99.54Wh label"],
      ["Recharge (Anker)", "About 37 minutes with two chargers at 170W"],
    ],
    body: [
      "Buy this when the device that dies is a laptop. One USB-C port delivers up to 140W, which Anker says takes a 16-inch MacBook Pro to about 50 percent in 28 minutes. At 99.54Wh it sits just under the usual 100Wh airline limit for spare batteries.",
      "Fast recharging needs a serious charger; a 30W phone brick will feel slow. The linked listing is the bank alone; the charging base is a separate bundle.",
    ],
    skip: "your heaviest device is a phone. It is heavy and expensive, and the 20,000mAh bank does that job with less weight.",
    image: IMG,
  },
  {
    id: "anker-nano-3-in-1",
    name: "Anker Nano 3-in-1 Power Bank 10,000mAh 30W (USB-C)",
    label: "Best all-in-one",
    url: amz("B0CX4992Z8"),
    why: "Power bank, wall charger and cable in one object.",
    specs: [
      ["Capacity", "10,000mAh"],
      ["Top output", "30W, plugged in or on battery"],
      ["Carry-on", "Yes"],
      ["Size / weight", "4.25 x 2.01 x 1.22 in, about 8.82 oz"],
    ],
    body: [
      "Model A1637 folds US wall prongs into the body. In a hotel, plug it into the outlet and it charges your phone and itself; on the move it is a normal 10,000mAh bank with an attached USB-C cable. Anker says it takes an iPhone 15 Pro to about 50 percent in 25 minutes.",
      "It replaces a bank, a cable and a 30W wall charger, so it is the simplest kit for trips inside the US.",
    ],
    skip: "you travel outside North America often. The prongs are US-style, so you still need a plug adapter, and it is bulkier than the plain Nano.",
    image: IMG,
  },
];

export default function Page() {
  return (
    <Roundup
      path={PATH}
      eyebrow="Travel tech"
      title={TITLE}
      updated="November 2026"
      description={DESCRIPTION}
      answer="The best portable charger for travel for most people is the Anker 20,000mAh 87W power bank with a built-in USB-C cable: several phone charges, enough power for a light laptop, and well under the airline carry-on limit. Choose the Anker Nano 10,000mAh to save weight, and the Anker Prime 27,650mAh when a laptop has to last the flight."
      intro={[
        "All four picks are new Anker listings with USB-C, a charge display and a watt-hour rating under the 100Wh line airlines use for spare lithium batteries. We skip no-name banks on purpose: a printed 50,000mAh on a pack the size of a deck of cards is a warning sign, not a bargain.",
      ]}
      hero={{ src: IMG, alt: "Portable chargers for travel" }}
      tableTitle="Travel power banks compared"
      tableColumns={["Capacity", "Top output", "Carry-on"]}
      products={products}
      extra={[
        {
          id: "airline-rules",
          heading: "Can you take a power bank on a plane?",
          body: [
            "Yes, in carry-on bags only. In the United States, spare lithium-ion batteries and power banks are not allowed in checked luggage. Packs under 100Wh need no airline approval; 101 to 160Wh usually needs approval and is often limited to two; over 160Wh is not allowed on passenger flights.",
            "Airlines use watt-hours, not milliamp-hours. A 10,000mAh bank is usually about 36 to 38Wh and a 20,000mAh bank in the low 70s. Read the figure printed on the pack, and check your airline's page: some are stricter than the FAA minimum, and some do not let you charge a bank from the seat outlet.",
          ],
        },
      ]}
      buyingGuide={{
        heading: "How to choose a travel power bank",
        points: [
          { title: "Capacity", body: "10,000mAh gives a phone one and a half to two charges. 20,000mAh covers a long travel day for a phone and tablet. Go bigger only for a laptop." },
          { title: "Output", body: "30W is plenty for phones. A laptop needs 65W or more from a single USB-C port; a 16-inch laptop wants 100W or more." },
          { title: "Built-in cable", body: "An attached USB-C cable is the one you never forget. Check the port count if you charge two devices at once." },
          { title: "Weight", body: "A 20,000mAh bank weighs about a pound. If the trip is a weekend and you carry only a phone, the lighter Nano is the better companion." },
        ],
      }}
      verdict={[
        "Buy the Anker 20,000mAh 87W with the built-in cable for most trips. Drop to the Nano 10,000mAh when weight matters, step up to the Prime 27,650mAh only when a laptop has to survive the flight, and pick the Nano 3-in-1 if you want to stop packing a wall charger on US trips.",
      ]}
      faqTitle="Travel power bank questions"
      faq={[
        { q: "What is the best portable charger for travel?", a: "The Anker 20,000mAh 87W with the built-in USB-C cable. It charges a phone several times, can help a light laptop, and is under the 100Wh carry-on limit." },
        { q: "What size power bank is allowed on a plane?", a: "Up to 100Wh in carry-on bags without airline approval. Most 10,000mAh and 20,000mAh banks qualify. Power banks are not allowed in checked bags." },
        { q: "How many mAh do I need for a trip?", a: "10,000mAh for a phone on a short trip, 20,000mAh for a full travel day with a phone and tablet, and 25,000mAh or more for a laptop." },
        { q: "Can a power bank charge a laptop?", a: "Yes, if it delivers enough wattage from one USB-C port: about 65W for a 13- or 14-inch laptop, and 100W or more for a 16-inch model." },
      ]}
      dealBox={{ productName: "Portable Chargers and Power Banks", href: `https://www.amazon.com/s?k=portable+charger+power+bank&tag=${TAG}` }}
    />
  );
}
