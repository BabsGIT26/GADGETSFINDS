import type { Metadata } from "next";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-cheap-tablets-under-150";
const SEO_TITLE = "Best Cheap Tablets Under $150 (2026 Picks)";
const TITLE = "Best Cheap Tablets Under $150 in 2026";
const DESCRIPTION =
  "The best cheap tablets under $150 in 2026: Fire HD 8, Lenovo Tab One and Amazon Kids Tablet 8 compared by screen, apps and storage. Check today's price.";
const IMG = illustrationPath("tablet");
const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=${TAG}`;

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "tablet" });

const products: RoundupProduct[] = [
  {
    id: "fire-hd-8",
    name: "Amazon Fire HD 8 (2024)",
    label: "Best overall",
    url: amz("B0CVDN4QS6"),
    why: "The cheapest new tablet here from a known brand.",
    specs: [
      ["Software", "Fire OS (no Google Play)"],
      ["Screen", "8-inch, 1280 x 800"],
      ["RAM / storage", "3GB / 32GB, microSD up to 1TB"],
      ["Battery (Amazon rating)", "Up to 13 hours mixed use"],
    ],
    body: [
      "For reading, Prime Video and one-person streaming, the Fire HD 8 does the job for the least money. The 2024 refresh raised the 32GB model to 3GB of RAM, kept USB-C and the microSD slot, and moved the rear camera to 5MP. It was in stock and sold by Amazon when we checked on November 22, 2026.",
      "The screen is the compromise: 1280 x 800 on 8 inches is fine for Kindle books and a show in bed, but soft next to a 1080p panel. The linked configuration is the black 32GB model with lock-screen ads; the ad-free and 64GB versions cost more.",
    ],
    skip: "you need Gmail, Chrome or another Google Play app every day. Fire OS does not include the Play Store.",
    image: IMG,
  },
  {
    id: "lenovo-tab-one",
    name: "Lenovo Tab One",
    label: "Best Android tablet",
    url: amz("B0F1NHSFMF"),
    why: "Google Play, 4GB of RAM and a folio stand in the box.",
    specs: [
      ["Software", "Android with Google Play"],
      ["Screen", "8.7-inch, 1340 x 800"],
      ["RAM / storage", "4GB / 64GB, microSD"],
      ["Battery (Lenovo rating)", "Up to 12.5 hours of YouTube"],
    ],
    body: [
      "The cheapest way to get a real Android tablet with the Play Store from a brand you know. It runs a MediaTek Helio G85 with 4GB of RAM and 64GB of storage, so Chrome, Gmail and Maps behave like they do on a budget Android phone. The folio case in the box folds into a stand, which saves buying one later.",
      "It was in stock and sold by Amazon under $150 when we checked on November 22, 2026. Expect two or three years of useful life: Lenovo's update support is shorter than Samsung's.",
    ],
    skip: "the live price has climbed past $150, or you want a 10-inch screen for a couch. Then the Fire HD 8 is the better buy today.",
    image: IMG,
  },
  {
    id: "amazon-kids-tablet-8",
    name: "Amazon Kids Tablet 8",
    label: "Best for kids aged 3 to 6",
    url: amz("B0FLB1NJPY"),
    why: "A kid-proof bumper, a year of Kids+, and parent-approved Google Play.",
    specs: [
      ["Software", "Android with Google Play, parent-managed"],
      ["Screen", "8.7-inch"],
      ["RAM / storage", "4GB / 64GB"],
      ["In the box", "Bumper case with kickstand, 1 year of Amazon Kids+"],
    ],
    body: [
      "Amazon's current kids tablet replaces the Fire HD 10 Kids, which is no longer sold new. The soft bumper has a built-in kickstand, so it survives the couch and the car seat, and the bundle includes a year of Amazon Kids+, the ad-free catalog of books, games and videos for young children.",
      "Unlike older Fire Kids tablets, it runs Android, so a parent can approve apps from Google Play. Both you and your child need Google accounts, and apps from older Fire tablets do not carry over. It is new, so there are few owner reviews yet; read the recent ones before you buy.",
    ],
    skip: "your child is older than 6, or you do not want Kids+ to auto-renew after the first year. Buy a regular tablet and a case instead.",
    image: IMG,
  },
  {
    id: "fire-hd-10",
    name: "Amazon Fire HD 10 (2023)",
    label: "Best big screen (when in stock)",
    why: "A 10.1-inch 1080p-class screen for Prime households.",
    specs: [
      ["Software", "Fire OS (no Google Play)"],
      ["Screen", "10.1-inch, 1920 x 1200"],
      ["RAM / storage", "3GB / 32GB, microSD up to 1TB"],
      ["Battery (Amazon rating)", "Up to 13 hours"],
    ],
    body: [
      "When it is available, the Fire HD 10 is the upgrade for anyone who watches on a couch or a kitchen counter: the 1920 x 1200 panel is a clear step up from the Fire HD 8. Amazon rates the 2023 model about 25 percent faster than the 2021 version, and a 9W adapter is in the box.",
    ],
    skip: "you need Google Play apps. The Lenovo Tab One runs full Android.",
    note: "No button: on November 22, 2026 this listing was out of stock on Amazon. Use the Fire HD 8 until it returns.",
    image: IMG,
  },
  {
    id: "galaxy-tab-a9-plus",
    name: "Samsung Galaxy Tab A9+",
    label: "Best Android screen (when under $150)",
    why: "An 11-inch 90Hz screen and four speakers.",
    specs: [
      ["Software", "Android with Google Play (One UI)"],
      ["Screen", "11-inch, 1920 x 1200, 90Hz"],
      ["RAM / storage", "4GB / 64GB, microSD up to 1TB"],
      ["Audio", "Four speakers, Dolby Atmos"],
    ],
    body: [
      "On paper this is the best Android tablet near this budget: a bigger, smoother 90Hz screen, four speakers and Samsung's longer update support. It only fits this guide when a new US unit is on sale at or under $150. Avoid international imports, which are often cheaper but carry no US warranty.",
    ],
    skip: "you want a stylus. The Tab A9+ does not support the S Pen.",
    note: "No button: on November 22, 2026 Amazon had no featured new offer for this model, and other sellers were above $150.",
    image: IMG,
  },
];

export default function Page() {
  return (
    <Roundup
      path={PATH}
      eyebrow="Tablets"
      title={TITLE}
      updated="November 22, 2026"
      description={DESCRIPTION}
      answer="The best cheap tablet under $150 right now is the Amazon Fire HD 8 for reading and streaming, and the Lenovo Tab One if you need Google Play apps. For a young child, the Amazon Kids Tablet 8 adds a bumper case and a year of Kids+. All three were in stock on Amazon under $150 when we checked on November 22, 2026."
      intro={[
        "A tablet under $150 is a streaming, reading and browsing device, not a laptop replacement. What separates the good ones is the software (Fire OS or full Android), the screen size, and whether you can add storage. Every tablet here has a microSD slot, and none of them is renewed or refurbished.",
      ]}
      picksNote="The Fire HD 10 and Galaxy Tab A9+ are reviewed at the end without buttons: on November 22, 2026 one was out of stock and the other had no new offer under $150."
      hero={{ src: IMG, alt: "Cheap tablets under $150" }}
      tableTitle="Cheap tablets under $150 compared"
      tableColumns={["Software", "Screen", "RAM / storage"]}
      products={products}
      extra={[
        {
          id: "renewed-ipad",
          heading: "Should you buy a renewed iPad instead?",
          body: [
            "A new iPad costs well over $150. A certified renewed older iPad sometimes appears near that price and has better software and longer updates than a Fire tablet, but it is a used device with a shorter warranty and no microSD slot. If you go that way, read the condition, battery note and seller carefully. We do not link one here.",
          ],
        },
      ]}
      buyingGuide={{
        heading: "How to choose a cheap tablet",
        points: [
          { title: "Fire OS or Android", body: "Fire OS is built around Prime Video, Kindle, Audible and Alexa, and it has no Google Play Store. Choose Android (Lenovo or Samsung) if you need Gmail, Chrome, Google Maps or a specific Play Store app." },
          { title: "Screen size", body: "8 inches is good for reading and one-person video. For a shared screen on a couch or in a kitchen, a 10- or 11-inch 1080p-class panel is worth waiting for." },
          { title: "Storage", body: "32GB fills up fast after the system takes its share. Add a microSD card if you download shows for trips." },
          { title: "Ads and seller", body: "Cheaper Fire tablets show lock-screen ads; the ad-free version costs more. Check the style selector and that Amazon or the maker is the seller." },
          { title: "Avoid no-name tablets", body: "Unbranded Android tablets often overstate RAM, ship with chargers you should not trust, and never get security updates." },
        ],
      }}
      verdict={[
        "Buy the Amazon Fire HD 8 for streaming and reading, the Lenovo Tab One if you need Google Play, and the Amazon Kids Tablet 8 for a child aged 3 to 6. When the Fire HD 10 is back in stock, it is the big-screen upgrade for Prime households.",
      ]}
      faqTitle="Cheap tablet questions"
      faq={[
        { q: "What is the best tablet under $150?", a: "Right now, the Amazon Fire HD 8 for streaming and reading, or the Lenovo Tab One if you need the Play Store. The Fire HD 10 is the bigger upgrade when it is back in stock." },
        { q: "Can you install Google Play on a Fire tablet?", a: "Not officially. Sideloading Google services is unsupported and can break after an update. Buy an Android tablet if you need Play Store apps." },
        { q: "Is the Galaxy Tab A9+ still worth buying?", a: "Yes, when a new US unit is back at or under $150. On November 22, 2026 Amazon had no featured new offer, so the Lenovo Tab One is the Android pick until then." },
        { q: "Is a cheap tablet good for kids?", a: "Yes, with a case and parental controls. The Amazon Kids Tablet 8 includes both, plus a year of Kids+ that auto-renews unless you cancel." },
      ]}
      dealBox={{ productName: "Tablets Under $150", href: `https://www.amazon.com/s?k=tablets+under+150&tag=${TAG}` }}
    />
  );
}
