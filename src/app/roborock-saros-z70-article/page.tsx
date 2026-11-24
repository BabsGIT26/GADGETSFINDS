import type { Metadata } from "next";
import ProductArticle from "@/components/common/ProductArticle";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const PATH = "/roborock-saros-z70-article";
const URL = "https://www.amazon.com/dp/B0DSLBZV3F?tag=gadgetsfindswebsite-20";
const SEO_TITLE = "Roborock Saros Z70: Is It Worth Buying?";
const TITLE = "Roborock Saros Z70: Is the Robot Vacuum With an Arm Worth Buying?";
const DESCRIPTION =
  "Roborock Saros Z70: the robot vacuum and mop with an OmniGrip arm, 22,000Pa suction and a 3.14-inch body. Who it suits, who should skip it. Check today's price.";

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "vacuum" });

const link = "underline decoration-amber-500/80 underline-offset-4 hover:text-foreground";

export default function Page() {
  return (
    <ProductArticle
      path={PATH}
      eyebrow="Robot vacuums"
      title={TITLE}
      description={DESCRIPTION}
      topics={["home"]}
      answer="The Roborock Saros Z70 is worth buying only at a deep discount. It is an excellent flagship vacuum and mop with a self-washing dock, but the OmniGrip arm that picks up socks is a bonus, not a reason to pay list price. Compare today's Amazon price with the list price before you buy."
      image={{ src: illustrationPath("vacuum"), alt: "Roborock Saros Z70 robot vacuum and mop" }}
      cta={{ href: URL, note: "Black, model B0DSLBZV3F. In stock and sold by Roborock when we checked; price and stock change." }}
      bestFor="Mixed floors and low furniture, bought on sale"
      glance={[
        ["Suction (Roborock)", "22,000Pa"],
        ["Height", "3.14 in"],
        ["Arm", "OmniGrip, lifts light items up to about 300g"],
        ["Climbs", "Thresholds up to about 4cm (AdaptiLift)"],
        ["Dock", "Empties dust, washes and dries mops, refills water"],
      ]}
      why={[
        "Under the arm, it is one of Roborock's best vac-mops: very high rated suction, mops that lift about 22mm on carpet, an extending side brush and mop for corners, and a dock that does almost all of the maintenance. At 3.14 inches tall it fits under more sofas than most flagship robots.",
      ]}
      skip={[
        "Skip it if you are buying it for the arm. It can pick up socks and tissues, but it is not a robot that tidies shoes, cables or toys, and owner feedback on the arm is mixed. Skip it too if you have little floor space for a large dock, or if the price is back near list.",
      ]}
      sections={[
        {
          heading: "What the Roborock Saros Z70 does",
          body: [
            "The Saros Z70 is a flagship robot vacuum and mop. It vacuums and mops hard floors and low carpet in one run, lifts the mops on carpet, and returns to a dock that empties the bin, washes and dries the mops and refills its water tank.",
            "Its headline feature is OmniGrip, a folding five-axis arm. Roborock says it can lift light objects up to about 300 grams, like socks or tissues, and move them out of the way before cleaning.",
          ],
        },
        {
          heading: "Saros Z70 features that matter",
          bullets: [
            <><strong>3.14-inch height:</strong> reaches under lower sofas and beds than most docked robots.</>,
            <><strong>FlexiArm:</strong> the side brush and mop extend into corners and along baseboards.</>,
            <><strong>AdaptiLift:</strong> raises the body to cross thresholds up to about 4cm.</>,
            <><strong>22,000Pa:</strong> Roborock's peak suction rating. Real pickup still depends on the brush, the floor and the setting.</>,
          ],
        },
        {
          heading: "Is the Saros Z70 worth it at its price?",
          body: [
            "At its $1,999.99 list price, no: you are paying a large premium for the arm. At around half of list, it becomes a fair price for a top-tier vac-mop with the arm as an extra.",
            <>
              If you want the dock and mopping without the arm, compare the Roborock Qrevo S Pro in our{" "}
              <a href="/roborock-vs-roomba-2026" className={link}>Roborock vs Roomba comparison</a>, or the deals in our{" "}
              <a href="/black-friday-robot-vacuums" className={link}>Black Friday robot vacuum guide</a>. On a tight budget, see the{" "}
              <a href="/best-budget-robot-vacuums-under-300" className={link}>best robot vacuums under $300</a>.
            </>,
          ],
        },
        {
          heading: "Check these before you buy",
          bullets: [
            "The listing should say Black and B0DSLBZV3F.",
            "Buy from Amazon or Roborock's own store, not an unknown third-party seller.",
            "Leave floor space and an outlet for the dock.",
            "The robot needs 2.4GHz Wi-Fi for the app.",
          ],
        },
      ]}
      faqTitle="Roborock Saros Z70 questions"
      faq={[
        { q: "Is the Roborock Saros Z70 worth it?", a: "Only at a big discount. It is a very good vac-mop with a self-washing dock, but the arm alone does not justify the list price." },
        { q: "What can the Saros Z70 arm pick up?", a: "Light items up to about 300 grams, such as socks and tissues, according to Roborock. It does not reliably move shoes, cables or clutter." },
        { q: "How tall is the Roborock Saros Z70?", a: "3.14 inches, low enough to clean under many sofas and beds." },
        { q: "Does the Saros Z70 mop carpet?", a: "No. It lifts its mops about 22mm when it detects carpet, so it can vacuum rugs without wetting them." },
      ]}
      products={["Roborock Saros Z70"]}
      dealBox={{ productName: "Roborock Saros Z70", href: URL }}
    />
  );
}
