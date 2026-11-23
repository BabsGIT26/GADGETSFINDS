import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-phones-2026";
const SEO_TITLE = "Best Phones to Buy in 2026: Android & iPhone";
const TITLE = "Best Phones to Buy in 2026: Android and iPhone Picks";
const DESCRIPTION =
  "The best phones to buy in 2026, compared: Galaxy S26 Ultra, Pixel 11 Pro XL, Galaxy S26 FE and iPhone 17 by screen, camera and value. See today's price.";
const IMG = illustrationPath("phone");

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "phone" });

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=${TAG}`;

const products: RoundupProduct[] = [
  {
    id: "galaxy-s26-ultra",
    name: "Samsung Galaxy S26 Ultra (256GB, unlocked)",
    label: "Best Android flagship",
    url: amz("B0G4SWDH8P"),
    why: "Big QHD screen, S Pen, and the longest zoom here.",
    specs: [
      ["Screen", "6.9-inch QHD AMOLED, 120Hz"],
      ["Chip", "Snapdragon 8 Elite Gen 5 for Galaxy"],
      ["Cameras", "200MP main plus telephoto and ultrawide"],
      ["Extras", "Built-in S Pen"],
    ],
    body: [
      "Samsung's 2026 Ultra, on sale since March 2026, with a launch price from $1,299 for 256GB. The reasons to pay for it are the large screen, the S Pen in the body, and the telephoto cameras.",
      "Confirm the listing is the US unlocked model sold by Amazon before you buy.",
    ],
    skip: "you want a phone you can use with one hand, or you will never touch the S Pen or the zoom. The S26 FE costs far less.",
  },
  {
    id: "pixel-11-pro-xl",
    name: "Google Pixel 11 Pro XL (256GB, unlocked)",
    label: "Best for Google software",
    url: amz("B0H83824JZ"),
    why: "Clean Android with Gemini and a large display.",
    specs: [
      ["Screen", "6.8-inch Super Actua display"],
      ["Chip", "Google Tensor"],
      ["Cameras", "Triple rear, up to 120x Super Res Zoom (Google figure)"],
      ["Extras", "IP68, Gemini built in"],
    ],
    body: [
      "Google's large Pro phone. Google lists a 30-plus hour battery, IP68 protection, and up to 120x digital zoom. Pick it for Google's software and camera processing rather than raw specs.",
    ],
    skip: "you want a stylus or the longest optical zoom. That is the S26 Ultra.",
  },
  {
    id: "galaxy-s26-fe",
    name: "Samsung Galaxy S26 FE (256GB, unlocked)",
    label: "Best value",
    url: amz("B0H7SPJHDH"),
    why: "Most of the Galaxy experience for much less.",
    specs: [
      ["Screen", "Check the listing"],
      ["Chip", "Exynos 2400 (per the Amazon listing)"],
      ["Cameras", "Triple rear"],
      ["Extras", "8GB RAM, 256GB storage"],
    ],
    body: [
      "Samsung's Fan Edition keeps the Galaxy software and features at a lower price. The Amazon listing shows a list price of $799.99 and lower sale prices; read the live price.",
    ],
    skip: "you need the best low-light zoom. The Ultra is the camera phone.",
  },
  {
    id: "iphone-17",
    name: "Apple iPhone 17",
    label: "Best iPhone for most people",
    why: "The base iPhone now has a 120Hz screen.",
    specs: [
      ["Screen", "6.3-inch OLED, ProMotion 120Hz"],
      ["Chip", "Apple A19"],
      ["Cameras", "Dual 48MP rear"],
      ["Extras", "256GB base storage, launch price from $799"],
    ],
    body: [
      "Apple's September 2025 iPhone 17 brought the 120Hz ProMotion screen to the base model and started at 256GB. It is the iPhone most people should buy.",
      "Apple sells the iPhone 17 through its own store and carriers. We could not confirm a new, unlocked iPhone 17 listing sold by Amazon, so there is no Amazon button.",
    ],
    skip: "you want a telephoto camera or a 6.9-inch screen. Look at the Galaxy S26 Ultra or Apple's Pro models.",
  },
];

export default function Page() {
  return (
    <Roundup
      path={PATH}
      eyebrow="Phones"
      title={TITLE}
      updated="November 2026"
      description={DESCRIPTION}
      answer="The best phone to buy in 2026 depends first on iPhone or Android. On Android, the Galaxy S26 Ultra is the best phone overall for its big screen, S Pen and zoom cameras; the Pixel 11 Pro XL is the pick for Google's software; and the Galaxy S26 FE is the best value. On iPhone, the iPhone 17 is the right model for most people."
      intro={[
        "Your messages, photos, watch and earbuds usually decide iPhone or Android more than any spec sheet does. After that, choose by size and camera: a big screen with zoom, or a smaller phone that is easy to hold. Want a phone that folds? See our foldable phones guide.",
      ]}
      hero={{ src: IMG, alt: "Best phones of 2026 buying guide" }}
      tableTitle="Best phones of 2026 compared"
      tableColumns={["Screen", "Chip", "Cameras"]}
      products={products.map((product) => ({ ...product, image: IMG }))}
      extra={[
        {
          id: "iphone-17-vs-galaxy-s26-ultra",
          heading: "iPhone 17 vs Galaxy S26 Ultra",
          body: [
            "These are not twins. The iPhone 17 is the smaller phone: 6.3 inches, two rear cameras, and a launch price from $799. The S26 Ultra is a 6.9-inch phone with an S Pen and telephoto cameras, from $1,299 at launch.",
            "Buy the iPhone 17 if you already use iMessage, an Apple Watch or AirPods and want a lighter phone. Buy the Ultra if you take a lot of zoom photos, want the S Pen, or want the biggest screen.",
          ],
        },
      ]}
      buyingGuide={{
        heading: "How to choose the best phone for you",
        points: [
          { title: "Pick the platform first", body: "Switching between iPhone and Android costs time: chats, photos, paid apps and accessories. Stay where your watch, earbuds and family are unless something really bothers you." },
          { title: "Size", body: "Phones near 6.3 inches are easy to use with one hand. 6.8 to 6.9 inches is better for video and reading, but heavier in a pocket." },
          { title: "Camera", body: "Every phone here takes good daytime photos. Telephoto lenses matter for kids' sports, concerts and travel. If you rarely zoom, do not pay for it." },
          { title: "Storage", body: "256GB is a safe size for most people. None of these phones takes a microSD card." },
          { title: "Unlocked and seller", body: "Buy the US unlocked model, confirm your carrier supports it, and check that Amazon or the maker is the seller." },
        ],
      }}
      verdict={[
        "On Android, buy the Galaxy S26 Ultra for the screen, S Pen and zoom; the Pixel 11 Pro XL for Google's software; or the Galaxy S26 FE to spend less. On iPhone, the iPhone 17 is the right model for most people.",
      ]}
      faqTitle="Phone buying questions"
      faq={[
        { q: "What is the best phone to buy right now?", a: "The Galaxy S26 Ultra if you want the most capable Android phone, the iPhone 17 if you use Apple devices, and the Galaxy S26 FE if you want to spend less." },
        { q: "Is the Galaxy S26 Ultra worth it over the S26 FE?", a: "Only if you will use the S Pen, the telephoto cameras or the larger QHD screen. For calls, apps and everyday photos, the FE is the better value." },
        { q: "Is it better to buy an unlocked phone?", a: "Usually. Unlocked phones work on the major US carriers and are easier to resell. Confirm your carrier supports the exact model first." },
        { q: "Why is there no Amazon button for the iPhone 17?", a: "We could not confirm a new, unlocked iPhone 17 sold by Amazon. Buy it from Apple or your carrier." },
      ]}
    />
  );
}
