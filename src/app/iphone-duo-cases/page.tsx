import type { Metadata } from "next";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const TAG = "gadgetsfindswebsmediavid-20";
const PATH = "/iphone-duo-cases";
const SEO_TITLE = "Best iPhone Duo Cases in 2026";
const TITLE = "Best iPhone Duo Cases in 2026: Clear, Rugged and MagSafe";
const DESCRIPTION =
  "The best iPhone Duo cases in 2026: FNTCASE, TORRAS Q3 Spin, Spigen clear, OtterBox Defender, Pitaka aramid and Apple's case, compared on hinge cover. Shop now.";
const IMG = illustrationPath("foldable");
const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=${TAG}`;

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "foldable" });

const products: RoundupProduct[] = [
  {
    id: "fntcase-magsafe",
    name: "FNTCASE MagSafe Case for iPhone Duo",
    label: "Best value",
    url: amz("B0HDST6F85"),
    why: "Hinge protection, MagSafe magnets and a screen protector for the lowest price.",
    specs: [
      ["Style", "Translucent matte, black"],
      ["Hinge cover", "Yes, full hinge"],
      ["MagSafe", "Yes"],
      ["Price when checked", "From $12.23, Nov 22, 2026"],
    ],
    body: [
      "The cheapest case here that still covers both halves and the hinge. Strong magnets hold MagSafe chargers and wallets, and the listing includes a screen protector for the outer display.",
    ],
    skip: "you want a premium feel. The matte plastic is fine but does not feel like Apple's or Pitaka's cases.",
    image: IMG,
  },
  {
    id: "torras-q3-spin",
    name: "TORRAS Q3 Spin for iPhone Duo",
    label: "Best with stand",
    url: amz("B0HGDS2DZC"),
    why: "A 360° rotating magnetic stand plus hinge protection.",
    specs: [
      ["Style", "Dark"],
      ["Hinge cover", "Yes"],
      ["MagSafe", "Yes, with rotating stand"],
      ["Price when checked", "$69.99, Nov 22, 2026"],
    ],
    body: [
      "The rotating ring folds out into a stand in portrait or landscape, which is handy for video calls and watching on the inner screen. It also covers the hinge.",
    ],
    skip: "you want the thinnest case. The stand adds bulk to a phone that is already thick when folded.",
    image: IMG,
  },
  {
    id: "spigen-ultra-hybrid-pro",
    name: "Spigen Ultra Hybrid Pro for iPhone Duo",
    label: "Best clear",
    url: amz("B0GYQH6WFJ"),
    why: "Shows off the phone's color and still covers the hinge.",
    specs: [
      ["Style", "Crystal clear"],
      ["Hinge cover", "Yes"],
      ["MagSafe", "Check the listing"],
      ["Price when checked", "$34.99, Nov 22, 2026"],
    ],
    body: [
      "Pick this if you bought the iPhone Duo for its color. Spigen's clear hybrid design pairs a rigid back with a softer frame and covers the hinge.",
    ],
    skip: "you dislike how clear cases can show scratches and slowly yellow over time.",
    image: IMG,
  },
  {
    id: "apple-iphone-duo-case",
    name: "Apple iPhone Duo Case",
    label: "Best fit",
    url: "https://www.amazon.com/Apple-iPhone-Duo-Case-complement/dp/B0HJBCCRYD?tag=gadgetsfindswebsmediavid-20",
    why: "Apple's own case: thin, light and aligned for MagSafe.",
    specs: [
      ["Style", "Navy Blue"],
      ["Hinge cover", "Check the listing"],
      ["MagSafe", "Yes"],
      ["Price when checked", "$79.00, Nov 22, 2026"],
    ],
    body: [
      "The safest choice for exact fit and MagSafe alignment, in a slim design that keeps the phone easy to fold. It costs more than most third-party cases.",
    ],
    skip: "you drop your phone often. A rugged case like the OtterBox protects more.",
    image: IMG,
  },
  {
    id: "otterbox-defender",
    name: "OtterBox Defender Series Pro XT for iPhone Duo",
    label: "Most rugged",
    url: "https://www.amazon.com/OtterBox-Foldable-iPhone-Defender-Case/dp/B0HGNPW2NG?tag=gadgetsfindswebsmediavid-20",
    why: "The most protective case here, with an articulating hinge cover.",
    specs: [
      ["Style", "Black"],
      ["Hinge cover", "Yes, articulating"],
      ["MagSafe", "Check the listing"],
      ["Price when checked", "$89.99, Nov 22, 2026"],
    ],
    body: [
      "For job sites, kids and clumsy hands. The Defender name means thick, layered protection, and the hinge cover moves with the phone as it folds.",
    ],
    skip: "you want a slim phone. It is the bulkiest and most expensive case here.",
    image: IMG,
  },
  {
    id: "pitaka-aramid",
    name: "Pitaka Aramid Case for iPhone Duo",
    label: "Thinnest",
    url: "https://www.amazon.com/dp/B0HGLHGRST?tag=gadgetsfindswebsmediavid-20",
    why: "Thin aramid fiber that feels almost caseless.",
    specs: [
      ["Style", "Black/grey aramid"],
      ["Hinge cover", "Check the listing"],
      ["MagSafe", "Yes"],
      ["Price when checked", "$47.49, Nov 22, 2026"],
    ],
    body: [
      "Aramid fiber is very thin and stiff, so the case adds almost no bulk and resists scratches. It protects against scuffs more than drops.",
    ],
    skip: "you want real drop protection. Choose the OtterBox or TORRAS instead.",
    image: IMG,
  },
];

export default function Page() {
  return (
    <Roundup
      path={PATH}
      eyebrow="iPhone Duo"
      title={TITLE}
      updated="November 2026"
      description={DESCRIPTION}
      answer="The best iPhone Duo case for most people is the FNTCASE MagSafe case: it covers both halves and the hinge, has MagSafe magnets and includes a screen protector, for a fraction of Apple's price. Choose the TORRAS Q3 Spin for a built-in stand, the Spigen Ultra Hybrid Pro to show off the color, and the OtterBox Defender for the most protection."
      intro={[
        "Every case here is labelled for the iPhone Duo; regular iPhone cases will not fit. We compare them on hinge coverage, MagSafe support, bulk and price. Prices are what Amazon showed on November 22, 2026, and new accessories change price quickly.",
      ]}
      hero={{ src: IMG, alt: "iPhone Duo cases" }}
      tableTitle="iPhone Duo cases compared"
      tableColumns={["Hinge cover", "MagSafe", "Price when checked"]}
      products={products}
      buyingGuide={{
        heading: "How to choose an iPhone Duo case",
        points: [
          { title: "Hinge protection", body: "The hinge is the most exposed part of a foldable. Prefer a case that covers it, or one with a cover that moves as the phone folds." },
          { title: "MagSafe and Qi2", body: "If you use MagSafe chargers, wallets or car mounts, check the listing says the case has MagSafe magnets." },
          { title: "Bulk", body: "A folded iPhone Duo is already thick. Rugged cases and stands add more; aramid and Apple's case add the least." },
          { title: "Screen protector", body: "Some cases include a protector for the outer screen. Do not apply your own film to the inner folding screen." },
        ],
      }}
      verdict={[
        "Buy the FNTCASE for the best value, the TORRAS Q3 Spin if you want a stand, the Spigen if you want to see the color, and the OtterBox if protection matters most. For the phone itself, see our best foldable phones guide.",
      ]}
      faqTitle="iPhone Duo case questions"
      faq={[
        { q: "What is the best iPhone Duo case?", a: "The FNTCASE MagSafe case for most people. It covers the hinge, has MagSafe magnets and includes a screen protector at a low price." },
        { q: "Do regular iPhone cases fit the iPhone Duo?", a: "No. The iPhone Duo folds, so it needs a case made specifically for it." },
        { q: "Do iPhone Duo cases work with MagSafe?", a: "Many do, including Apple's, FNTCASE, TORRAS and Pitaka. Check each listing for MagSafe or Qi2 magnets." },
        { q: "Should an iPhone Duo case cover the hinge?", a: "Yes, if you want drop protection. The hinge is the most exposed part of a foldable phone." },
      ]}
      topics={["mobile"]}
      dealBox={{ productName: "iPhone Duo Cases", href: `https://www.amazon.com/s?k=iPhone+Duo+case&tag=${TAG}` }}
    />
  );
}
