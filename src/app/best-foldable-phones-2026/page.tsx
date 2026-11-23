import type { Metadata } from "next";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-foldable-phones-2026";
const SEO_TITLE = "Best Foldable Phones of 2026, Compared";
const TITLE = "Best Foldable Phones of 2026: Pixel, Galaxy Z Fold 8 and iPhone Duo";
const DESCRIPTION =
  "The best foldable phones of 2026: Pixel 11 Pro Fold, Galaxy Z Fold 8, Z Fold 8 Ultra and iPhone Duo compared by weight, screens, zoom and durability. Shop now.";
const IMG = illustrationPath("foldable");
const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=${TAG}`;

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "foldable" });

const products: RoundupProduct[] = [
  {
    id: "pixel-11-pro-fold",
    name: "Google Pixel 11 Pro Fold",
    label: "Best overall",
    url: amz("B0H6R2NGMZ"),
    why: "IP68 and a real 5x telephoto in a foldable.",
    specs: [
      ["Inner / cover screen", "8.0 in / 6.5 in"],
      ["Weight", "239 g"],
      ["Water resistance", "IP68"],
      ["Launch price (maker)", "$1,899"],
    ],
    body: [
      "The most complete foldable for most people: a large 8-inch inner screen, a full-size 6.5-inch cover screen, a real 5x telephoto camera and full IP68 dust and water resistance, which most foldables still lack. Google's Tensor G6 runs clean Android with Gemini built in.",
    ],
    skip: "weight is your priority. At 239 g it is noticeably heavier than the Galaxy Z Fold 8.",
    image: IMG,
  },
  {
    id: "galaxy-z-fold-8",
    name: "Samsung Galaxy Z Fold 8",
    label: "Best for everyday use",
    url: amz("B0H126B3KV"),
    why: "The lightest premium foldable, with a wider cover screen.",
    specs: [
      ["Inner / cover screen", "7.6 in / 5.5 in"],
      ["Weight", "201 g"],
      ["Water resistance", "IP48"],
      ["Launch price (maker)", "$1,899"],
    ],
    body: [
      "At 201 g, about the weight of a large regular phone, this is the foldable that is easiest to carry every day. The wider 5.5-inch cover screen makes one-handed typing feel normal, and it runs the Snapdragon 8 Elite Gen 5 with a 4,800mAh battery and Samsung's long update support.",
    ],
    skip: "you need strong zoom or dust protection. It has no dedicated telephoto and only IP48 dust resistance.",
    image: IMG,
  },
  {
    id: "galaxy-z-fold-8-ultra",
    name: "Samsung Galaxy Z Fold 8 Ultra",
    label: "Biggest screen",
    url: amz("B0H12KX1X4"),
    why: "An 8-inch inner screen and a 200MP main camera.",
    specs: [
      ["Inner / cover screen", "8.0 in / 6.5 in"],
      ["Weight", "215 g"],
      ["Water resistance", "Check the listing"],
      ["Launch price (maker)", "About $2,099"],
    ],
    body: [
      "The bigger Fold for people who want the most screen and the best camera hardware Samsung puts in a foldable, including a 200MP main sensor, in a thinner body than past Ultras.",
    ],
    skip: "you want the lightest fold or the best zoom. The regular Fold 8 is lighter, and the Pixel has the 5x telephoto.",
    image: IMG,
  },
  {
    id: "iphone-duo",
    name: "Apple iPhone Duo",
    label: "Best for iPhone users",
    url: `https://www.amazon.com/s?k=iPhone+Duo&tag=${TAG}`,
    why: "Apple's first foldable, for people staying on iOS.",
    specs: [
      ["Inner / cover screen", "7.6 in / 5.4 in"],
      ["Weight", "About 254 g"],
      ["Water resistance", "IP68"],
      ["Launch price (maker)", "$1,999"],
    ],
    body: [
      "Apple's first foldable is a book-style phone with a 5.4-inch cover screen, a 7.6-inch nano-texture inner display, the A20 Pro chip, a titanium frame and IP68 protection. It is the only foldable that keeps iMessage, FaceTime and your Apple Watch working the way they do on any iPhone.",
    ],
    skip: "weight or zoom matters. It is the heaviest phone here and has no dedicated telephoto camera.",
    note: "Amazon did not list the iPhone Duo itself when we checked on November 22, 2026, so this button opens an Amazon search. Apple and carriers sell it directly.",
    image: IMG,
  },
];

export default function Page() {
  return (
    <Roundup
      path={PATH}
      eyebrow="Foldable phones"
      title={TITLE}
      updated="November 2026"
      description={DESCRIPTION}
      answer="The best foldable phone of 2026 for most people is the Google Pixel 11 Pro Fold: it pairs a big 8-inch screen with IP68 water resistance and a real 5x zoom. The Galaxy Z Fold 8 is the lightest and easiest to use every day, the Z Fold 8 Ultra has the biggest screen, and the iPhone Duo is the pick if you want to stay on iPhone."
      intro={[
        "Foldables still cost more than regular flagships and give up something for the hinge: weight, zoom, or dust protection. Choose the compromise you can live with. The table lists makers' launch prices for reference; Amazon and carrier prices change often.",
      ]}
      hero={{ src: IMG, alt: "Foldable phones compared" }}
      tableTitle="Foldable phones compared"
      tableColumns={["Inner / cover screen", "Weight", "Water resistance"]}
      products={products}
      extra={[
        {
          id: "older-models",
          heading: "Is the Galaxy Z Fold 6 still worth buying?",
          body: [
            "The Galaxy Z Fold 6 launched in 2024 and has since been replaced by the Z Fold 7 and the Z Fold 8 line above. It can still be a fair buy as a clearly discounted new unit from a trusted seller, but a newer Fold gets software updates for longer.",
          ],
        },
      ]}
      buyingGuide={{
        heading: "How to choose a foldable phone",
        points: [
          { title: "Weight", body: "Foldables range from about 200 g to over 250 g. If it will live in a jeans pocket, the lighter Galaxy Z Fold 8 is the easiest to carry." },
          { title: "Cover screen", body: "A wider cover screen (5.5 inches or more) means you can use the phone closed like a normal phone and open it only for reading, video or multitasking." },
          { title: "Durability", body: "IP68 means dust and water protection. IP48 handles water but not fine dust or sand. Consider a case and the maker's protection plan." },
          { title: "Camera", body: "Foldables usually trail regular flagships on zoom. If you shoot a lot of telephoto, the Pixel 11 Pro Fold's 5x lens is the strongest here." },
          { title: "Platform", body: "Staying on iPhone means the iPhone Duo. On Android, Samsung and Google both promise long software support." },
        ],
      }}
      verdict={[
        "Buy the Pixel 11 Pro Fold for the best all-round foldable, the Galaxy Z Fold 8 if lightness and one-handed use matter most, the Z Fold 8 Ultra for the largest screen and camera, and the iPhone Duo if you are staying with Apple.",
      ]}
      faqTitle="Foldable phone questions"
      faq={[
        { q: "What is the best foldable phone in 2026?", a: "The Google Pixel 11 Pro Fold for most people, thanks to IP68 protection and a 5x telephoto. The Galaxy Z Fold 8 is the lightest and easiest to carry." },
        { q: "Are foldable phones durable?", a: "They are much sturdier than early models, but the inner screen is still softer than glass. Use a case, avoid sand and pockets with keys, and consider the maker's protection plan." },
        { q: "Is a foldable phone worth it?", a: "Worth it if you read, multitask or watch video on your phone a lot and value the bigger screen. If you mainly take photos and message, a regular flagship costs less and zooms better." },
        { q: "Does Apple make a foldable iPhone?", a: "Yes. The iPhone Duo is Apple's first foldable, with a 7.6-inch inner display and a 5.4-inch cover screen." },
      ]}
      dealBox={{ productName: "Top Foldable Phones 2026", href: `https://www.amazon.com/s?k=foldable+phones&tag=${TAG}` }}
    />
  );
}
