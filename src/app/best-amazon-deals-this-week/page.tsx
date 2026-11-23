import type { Metadata } from "next";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-amazon-deals-this-week";
const SEO_TITLE = "Best Amazon Deals This Week: Fire TV Picks";
const TITLE = "Best Amazon Deals This Week: Fire TV Stick 4K, 4K Plus and Cube";
const DESCRIPTION =
  "The best Amazon deals this week on Fire TV: Stick 4K, 4K Plus, 4K Select and Fire TV Cube compared so you open the right one. Check today's live Amazon price.";
const IMG = illustrationPath("streaming");
const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=${TAG}`;

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "streaming" });

const products: RoundupProduct[] = [
  {
    id: "fire-tv-stick-4k",
    name: "Amazon Fire TV Stick 4K (newest model)",
    label: "Best overall",
    url: amz("B0G4XRP464"),
    why: "The current 4K stick with Wi-Fi 6 and the new remote.",
    specs: [
      ["Picture", "4K, HDR10+"],
      ["Wi-Fi", "Wi-Fi 6"],
      ["Buy it if", "You want one 4K stick for a TV"],
    ],
    body: [
      "The current Stick 4K streams in 4K with HDR10+, uses Wi-Fi 6, and can draw power from the TV's USB port with the included cable (Amazon calls this Direct Power). The new remote adds a navigation ring plus TV power and volume buttons.",
      "Netflix, Disney+ and other paid apps still need their own subscriptions; the stick does not make them cheaper.",
    ],
    skip: "your TV and apps are built around Dolby Vision. This stick lists HDR10+, not Dolby Vision; look at the 4K Plus.",
    image: IMG,
  },
  {
    id: "fire-tv-stick-4k-select",
    name: "Amazon Fire TV Stick 4K Select",
    label: "Best value",
    url: amz("B0C6W3D4RM"),
    why: "The cheaper 4K stick when the price gap is real.",
    specs: [
      ["Picture", "4K, HDR10+"],
      ["Wi-Fi", "Check the listing"],
      ["Buy it if", "The newest 4K stick costs much more"],
    ],
    body: [
      "A real 4K HDR10+ stick with a quad-core 1.7GHz processor and 8GB of storage, running the current Fire TV software. It is the fallback when the newest Stick 4K is sold out or clearly more expensive.",
    ],
    skip: "the two sticks are within a few dollars. Take the newer Stick 4K for Wi-Fi 6 and the better remote.",
    image: IMG,
  },
  {
    id: "fire-tv-stick-4k-plus",
    name: "Amazon Fire TV Stick 4K Plus",
    label: "Best for Dolby Vision",
    url: amz("B0F7Z4QZTT"),
    why: "Adds Dolby Vision and Dolby Atmos.",
    specs: [
      ["Picture", "4K, Dolby Vision, HDR10+, Dolby Atmos"],
      ["Wi-Fi", "Wi-Fi 6"],
      ["Buy it if", "Your TV supports Dolby Vision"],
    ],
    body: [
      "The difference from the standard Stick 4K is format support: Dolby Vision, HDR10+ and Dolby Atmos passthrough. That only matters if both your TV and your apps support Dolby Vision. Cloud gaming through Xbox Game Pass and Luna needs a separate subscription and controller.",
    ],
    skip: "your TV does not support Dolby Vision. You would be paying extra for a format you cannot see.",
    image: IMG,
  },
  {
    id: "fire-tv-cube",
    name: "Amazon Fire TV Cube",
    label: "Best for the living room",
    url: amz("B09BZZ3MM7"),
    why: "Wi-Fi 6E, hands-free Alexa and HDMI switching.",
    specs: [
      ["Picture", "4K, Dolby Vision, HDR, Dolby Atmos"],
      ["Wi-Fi", "Wi-Fi 6E"],
      ["Buy it if", "You need HDMI switching or the fastest Fire TV"],
    ],
    body: [
      "Amazon's fastest Fire TV player has an octa-core processor, Wi-Fi 6E, built-in microphones for hands-free Alexa, and an HDMI input so it can switch between the TV, a cable box or a console. There is a microphone off button.",
    ],
    skip: "it is for a bedroom TV. A stick does the same streaming for much less and hides behind the TV.",
    image: IMG,
  },
];

export default function Page() {
  return (
    <Roundup
      path={PATH}
      eyebrow="Deals"
      title={TITLE}
      updated="November 2026"
      description={DESCRIPTION}
      answer="The best Amazon deal this week for most TVs is the newest Fire TV Stick 4K: 4K HDR10+, Wi-Fi 6 and the new remote. Choose the 4K Plus only if your TV supports Dolby Vision, the 4K Select if it is clearly cheaper, and the Fire TV Cube if you need hands-free Alexa and HDMI switching in the living room."
      intro={[
        "These are Amazon's own streaming devices, and their prices change during sale weeks, sometimes overnight. We do not keep a copy of the price; open the listing to see today's number. Before you buy, compare the current price with the regular price on Amazon's page, and make sure you are looking at the current model rather than an older one with a big percent-off banner.",
      ]}
      hero={{ src: IMG, alt: "Fire TV streaming deals" }}
      tableTitle="Fire TV deals compared"
      tableColumns={["Picture", "Wi-Fi", "Buy it if"]}
      products={products}
      extra={[
        {
          id: "what-to-skip",
          heading: "Amazon deals to skip",
          body: [
            "The Fire TV Stick HD is a poor buy next to a current 4K stick: a small saving is not worth giving up 4K and the new remote. Skip no-name Android TV boxes with large percent-off banners; the seller, the return window and the reviews matter more than the crossed-out price.",
            "Lightning deals and Prime-only coupons are different from the main offer on the product page. Check the final total in your cart before you check out.",
          ],
        },
      ]}
      buyingGuide={{
        heading: "How to spot a real Amazon deal",
        points: [
          { title: "Compare against the regular price", body: "A percent-off label only means something against the price the item usually sells for. Check Amazon's page for the typical or list price." },
          { title: "Buy the current model", body: "Older streaming sticks are often discounted the most. Check the model year and Wi-Fi version before you assume it is the same product." },
          { title: "Match the device to the TV", body: "A 4K stick does not make a 1080p TV sharper. Dolby Vision only helps if the TV supports it." },
          { title: "Check the seller", body: "Buy Amazon devices sold by Amazon. Third-party sellers may ship older or open-box units." },
        ],
      }}
      verdict={[
        "Buy the newest Fire TV Stick 4K. Open the 4K Plus only when the TV uses Dolby Vision, the 4K Select only when it is clearly cheaper, and the Fire TV Cube only when you want Wi-Fi 6E, hands-free Alexa and an HDMI switch in the living room.",
      ]}
      faqTitle="Amazon deal questions"
      faq={[
        { q: "What is the best Amazon deal this week?", a: "The newest Fire TV Stick 4K, if its live price still makes sense next to the 4K Plus and the 4K Select. Confirm the price on Amazon before you buy." },
        { q: "Which Fire TV Stick should I buy?", a: "The Fire TV Stick 4K for most TVs, the 4K Plus for TVs with Dolby Vision, and the Fire TV Cube if you need HDMI switching or hands-free Alexa." },
        { q: "Is the cheaper Fire TV Stick HD a better deal?", a: "No. A small saving is not worth giving up 4K and the new remote." },
        { q: "Does a Fire TV Stick include Netflix?", a: "No. Netflix, Disney+ and other paid apps need their own subscriptions." },
      ]}
      dealBox={{ productName: "Amazon Today's Deals", href: `https://www.amazon.com/gp/goldbox?tag=${TAG}` }}
    />
  );
}
