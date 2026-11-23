import type { Metadata } from "next";
import ProductArticle from "@/components/common/ProductArticle";
import CommentSection from "@/components/comments/CommentSection";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const PATH = "/genz-semi-automatic-slingshot-article";
const AMAZON = "https://www.amazon.com/dp/B0HB4HCB8L?tag=00linktree-pinterest-20";
const SEO_TITLE = "Semi-Automatic Slingshot: Is It Worth It?";
const TITLE = "Semi-Automatic Slingshot With a 12-Round Magazine: Is It Worth It?";
const DESCRIPTION =
  "A semi-automatic slingshot with a 12-round magazine, CNC aluminum frame and fiber optic sight for adult target practice. Who it suits, what to check. See price.";

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "gadget" });

export default function Page() {
  return (
    <ProductArticle
      path={PATH}
      eyebrow="Outdoor gadgets"
      title={TITLE}
      description={DESCRIPTION}
      topics={["deals"]}
      answer="This semi-automatic slingshot is worth it if you want faster target practice than a classic slingshot: a 12-round magazine feeds 8mm steel balls so you can shoot repeatedly without loading each one by hand. It has a CNC aluminum frame and a fiber optic sight. It is a practice tool for adults, not a hunting slingshot."
      image={{ src: illustrationPath("gadget"), alt: "Semi-automatic slingshot with magazine" }}
      cta={{ href: AMAZON, note: "In stock when we checked on November 22, 2026. Price and contents change on Amazon." }}
      bestFor="Adults doing backyard or range target practice"
      glance={[
        ["Frame", "CNC aircraft-grade aluminum"],
        ["Loading", "Magazine-fed, magnetic reload"],
        ["Magazine", "12 rounds"],
        ["Ammo", "8mm steel balls"],
        ["Sight", "Adjustable fiber optic"],
        ["In the box", "Spare bands and parts; steel balls may not be included"],
      ]}
      why={[
        "The magazine is the reason to buy it: you shoot a full string of targets, then reload in one go. The aluminum frame is light and comes apart for cleaning, and spare bands and parts are included.",
      ]}
      skip={[
        "Skip it if you want maximum power or a classic single-shot frame, or if slingshots are restricted where you live. It is for adult target practice only.",
      ]}
      sections={[
        {
          heading: "What a semi-automatic slingshot is",
          body: [
            "A semi-automatic or auto-loading slingshot holds several steel balls in a magazine and loads the next one after each shot. You still draw the bands for every shot, but you skip picking up and seating each ball by hand.",
          ],
        },
        {
          heading: "Check these before you buy",
          bullets: [
            "What is in the box: the seller says steel balls are a bonus and may not ship with every order.",
            "Ammo size: it takes 8mm steel balls; check before reusing ammo you already own.",
            "Local laws and a safe backstop for target practice.",
            "Eye protection for you and anyone nearby.",
          ],
        },
        {
          heading: "Semi-automatic slingshot video",
          body: [
            <div key="video" className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/JFYSGrot8qI"
                title="Semi-automatic magazine slingshot video"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>,
          ],
        },
      ]}
      faqTitle="Semi-automatic slingshot questions"
      faq={[
        { q: "How does a semi-automatic slingshot work?", a: "A magazine holds several steel balls and feeds the next one after each shot, so you do not load each ball by hand. You still pull the bands for every shot." },
        { q: "What ammo does this slingshot use?", a: "8mm steel balls. The seller says they may not be included in every order." },
        { q: "Is a semi-automatic slingshot good for hunting?", a: "No. It is built for rapid target practice, not maximum power." },
      ]}
      products={["Semi-automatic slingshot"]}
      dealBox={{ productName: "Semi-Automatic Slingshot", href: AMAZON }}
      after={<CommentSection articleSlug="genz-semi-automatic-slingshot-article" />}
    />
  );
}
