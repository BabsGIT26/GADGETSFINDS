import type { Metadata } from "next";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-phones-2026";
const TITLE = "Best Phones to Buy in 2026";
const DESCRIPTION =
  "Galaxy S26 Ultra, Pixel 11 Pro XL, Galaxy S26 FE, and iPhone 17 compared: screens, cameras, chips, and which phone fits how you use it.";

export const metadata: Metadata = {
  title: `${TITLE} | Gadgets Finds`,
  description: DESCRIPTION,
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: `https://www.gadgets-finds.com${PATH}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://www.gadgets-finds.com${PATH}`, type: "article" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

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
    skip: "you want a phone you can use with one hand.",
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
      intro={[
        "The first choice is iPhone or Android. Your messages, photos, watch, and earbuds decide that more than any spec sheet. After that, choose by size and camera: big screen and zoom, or a smaller phone that lasts the day.",
        "This guide replaces our older Galaxy S26 Ultra page and our iPhone vs Galaxy comparison pages. Looking for a foldable? See our foldable phones guide.",
      ]}
      tableColumns={["Screen", "Chip", "Cameras"]}
      products={products}
      extra={[
        {
          id: "iphone-17-vs-galaxy-s26-ultra",
          heading: "iPhone 17 vs Galaxy S26 Ultra",
          body: [
            "These are not twins. The iPhone 17 is the smaller phone: 6.3 inches, two rear cameras, and a launch price from $799. The S26 Ultra is a 6.9-inch work phone with an S Pen and telephoto cameras, from $1,299.",
            "Buy the iPhone 17 if you already use iMessage, an Apple Watch, or AirPods, and want a lighter phone. Buy the Ultra if you live on zoom photos, want the S Pen, or want the biggest screen.",
            "Older iPhone 16 Pro vs Galaxy comparisons are out of date: both phones have newer replacements listed above.",
          ],
        },
      ]}
      verdict={[
        "On Android, buy the Galaxy S26 Ultra for the screen, S Pen, and zoom; the Pixel 11 Pro XL for Google's software; or the Galaxy S26 FE to spend less. On iPhone, the iPhone 17 is the right model for most people.",
      ]}
      faq={[
        { q: "Is the Galaxy S26 Ultra worth it over the S26 FE?", a: "Only if you will use the S Pen, the telephoto cameras, or the larger QHD screen. For calls, apps, and everyday photos, the FE is the better value." },
        { q: "Why is there no Amazon button for the iPhone 17?", a: "We could not confirm a new, unlocked iPhone 17 sold by Amazon. Buy it from Apple or your carrier." },
        { q: "Should I buy an unlocked phone?", a: "Unlocked phones work on the major US carriers and are easier to resell. Confirm your carrier supports the model before you buy." },
        { q: "Where are foldable phones?", a: "In our separate guide to the best foldable phones of 2026." },
      ]}
    />
  );
}
