import type { Metadata } from "next";
import ProductArticle from "@/components/common/ProductArticle";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const PATH = "/outlet-extender-stick";
const AMAZON = "https://www.amazon.com/Extender-Stick-360%C2%B0-Rotating-Adjustable-Protection/dp/B0H3P79YX2?tag=gadgetsfindswebsmediavid-20";
const SEO_TITLE = "Outlet Extender Stick for Behind a Couch";
const TITLE = "Outlet Extender Stick for Behind a Couch: Reach Hidden Outlets";
const DESCRIPTION =
  "An outlet extender stick brings outlets behind a couch, bed or desk within reach: 23 to 35 inches, 6 AC outlets plus USB and a rotating head. Check the price.";

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "outlet" });

export default function Page() {
  return (
    <ProductArticle
      path={PATH}
      eyebrow="Home"
      title={TITLE}
      description={DESCRIPTION}
      topics={["home", "deals"]}
      answer="An outlet extender stick plugs into a wall outlet hidden behind a couch, bed or desk and brings the sockets up to where you can reach them, without moving furniture. The one we link adjusts from about 23 to 35 inches, has 6 AC outlets plus USB ports and a 360° rotating head."
      image={{ src: illustrationPath("outlet"), alt: "Outlet extender stick behind a couch" }}
      cta={{ href: AMAZON, note: "Price and stock change on Amazon." }}
      bestFor="Outlets blocked by a sofa, bed or heavy desk"
      glance={[
        ["Length", "Adjustable, about 23 to 34.8 in"],
        ["Outlets", "6 AC plus USB ports"],
        ["Head", "Rotates 360°"],
        ["Safety", "Overload switch with reset"],
      ]}
      why={[
        "It solves one annoying problem cheaply: you stop crawling behind the sofa to plug in a lamp or a charger. Renters who cannot move furniture or add outlets get usable sockets at arm's height, and the USB ports charge a phone without a separate adapter.",
      ]}
      skip={[
        "Skip it if you need a long run across a room (use a proper extension cord) or a surge protector for a TV and console setup on the floor.",
      ]}
      sections={[
        {
          heading: "How an outlet extender stick works",
          body: [
            "The stick plugs straight into the wall outlet and telescopes upward behind the furniture, with the sockets at the top. The rotating head lets it fit an outlet that is mounted sideways or in a tight corner. Most people just let it rest against the wall; it needs no tools to install.",
          ],
        },
        {
          heading: "What to check before you buy an outlet extender",
          bullets: [
            "The shortest and longest length: measure from the outlet to the top of your sofa or headboard.",
            "The number and type of outlets: AC only, or AC plus USB-A and USB-C.",
            "Whether the head rotates and how far.",
            "Overload protection, and the total load you plan to plug in.",
          ],
        },
        {
          heading: "Outlet extender stick video",
          body: [
            <div key="video" className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/RGU_XLSoH9A"
                title="Outlet extender stick video"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>,
          ],
        },
      ]}
      faqTitle="Outlet extender questions"
      faq={[
        { q: "How do I reach an outlet behind a couch?", a: "Use an outlet extender stick. It plugs into the hidden outlet and raises the sockets to the top of the couch so you can plug things in without moving it." },
        { q: "Is an outlet extender safe?", a: "Choose one with overload protection and do not plug in more than its rated load. Avoid running heaters or other high-power appliances through it." },
        { q: "Can I use an outlet extender behind a bed?", a: "Yes. Measure from the outlet to the top of the headboard and choose a stick that reaches that height." },
      ]}
      products={["Outlet extender stick"]}
      dealBox={{ productName: "Outlet Extender Stick for Behind Couch", href: AMAZON }}
    />
  );
}
