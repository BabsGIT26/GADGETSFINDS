import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-noise-cancelling-headphones-2026";
const SEO_TITLE = "Best Noise-Cancelling Headphones 2026";
const TITLE = "Best Noise-Cancelling Headphones in 2026";
const DESCRIPTION =
  "The best noise-cancelling headphones in 2026: Sony WH-1000XM6 vs Bose QuietComfort Ultra (2nd Gen), plus a budget Sony pair, by battery and comfort. Shop now.";
const IMG = illustrationPath("headphones");

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "headphones" });

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=${TAG}`;

const products: RoundupProduct[] = [
  {
    id: "sony-wh-1000xm6",
    name: "Sony WH-1000XM6",
    label: "Best overall",
    url: amz("B0F3PT1VBL"),
    why: "Sony's flagship, now folding again for travel.",
    specs: [
      ["Battery (maker rating)", "Up to 30 hours with noise cancelling"],
      ["Noise cancelling", "QN3 processor, 12 microphones"],
      ["Design", "Over-ear, folds"],
      ["Launched", "May 2025, $449.99"],
    ],
    body: [
      "Sony's 2025 flagship uses its QN3 processor and 12 microphones for noise cancelling and calls. Unlike the XM5, it folds flat into a smaller case, which matters if you fly often.",
      "Note the name: Sony sells it as the WH-1000XM6. There is no WH-2000XM6.",
    ],
    skip: "you want the lowest price. The WH-CH720N below does the basics for much less.",
  },
  {
    id: "bose-quietcomfort-ultra-2nd-gen",
    name: "Bose QuietComfort Ultra Headphones (2nd Gen)",
    label: "Best for comfort",
    url: amz("B0FWMM4R8Q"),
    why: "Bose's top headphones, known for a light, soft fit.",
    specs: [
      ["Battery (maker rating)", "Up to 30 hours"],
      ["Noise cancelling", "Bose CustomTune, adjustable modes"],
      ["Design", "Over-ear, folds"],
      ["Launched", "2025"],
    ],
    body: [
      "The second generation of Bose's flagship keeps the fit people buy Bose for and adds longer battery life and wired USB-C audio. This listing is a bundle with a 20W wall charger; check which color and bundle you are buying, because prices differ by color.",
    ],
    skip: "you want the most app settings. Sony's app goes deeper.",
  },
  {
    id: "sony-wh-ch720n",
    name: "Sony WH-CH720N",
    label: "Best budget",
    url: amz("B0BS1QCFHX"),
    why: "Light, cheap, and good enough noise cancelling.",
    specs: [
      ["Battery (maker rating)", "Up to 35 hours"],
      ["Noise cancelling", "Dual Noise Sensor"],
      ["Design", "Over-ear, lightweight"],
      ["Launched", "2023"],
    ],
    body: [
      "A light pair for commuting and study. Noise cancelling is clearly weaker than the flagships, but battery life is long and it supports multipoint, so it can stay connected to a phone and a laptop.",
    ],
    skip: "you fly a lot. Spend more on one of the two flagships.",
  },
];

export default function Page() {
  return (
    <Roundup
      path={PATH}
      eyebrow="Audio"
      title={TITLE}
      updated="November 2026"
      description={DESCRIPTION}
      answer="The best noise-cancelling headphones in 2026 for most people are the Sony WH-1000XM6: strong noise cancelling, a deep app and a folding design for travel. Choose the Bose QuietComfort Ultra (2nd Gen) if comfort on long flights matters most, and the Sony WH-CH720N if you want good-enough noise cancelling for a commute at a much lower price."
      intro={[
        "Sony and Bose are close at the top, so choose by fit and app. If you mostly need quiet on a bus or in a library, a budget pair is enough; the flagships earn their price on long flights, where they block more low engine noise.",
      ]}
      hero={{ src: IMG, alt: "Noise-cancelling headphones buying guide" }}
      tableTitle="Sony vs Bose noise-cancelling headphones compared"
      tableColumns={["Battery (maker rating)", "Noise cancelling", "Launched"]}
      products={products.map((product) => ({ ...product, image: IMG }))}
      buyingGuide={{
        heading: "How to choose noise-cancelling headphones",
        points: [
          { title: "Where you will use them", body: "Planes and trains reward the flagships. For an office, a bus or studying, a budget pair with active noise cancelling is enough." },
          { title: "Comfort", body: "Clamp force and ear-cup depth matter more than specs on a long flight. Bose is known for a lighter, softer fit; Sony offers more app control." },
          { title: "Battery", body: "Look at the maker's rating with noise cancelling on, since that is how you will use them. All three pairs here last a long-haul flight." },
          { title: "Calls and multipoint", body: "If you take calls on a laptop and a phone, check that the model supports multipoint Bluetooth so it can stay connected to both." },
        ],
      }}
      verdict={[
        "Buy the Sony WH-1000XM6 for most people, the Bose QuietComfort Ultra (2nd Gen) if comfort on long flights matters most, and the Sony WH-CH720N if you want good-enough noise cancelling for much less.",
      ]}
      faqTitle="Noise-cancelling headphone questions"
      faq={[
        { q: "Sony or Bose: which noise-cancelling headphones are better?", a: "Both make flagship noise-cancelling headphones. Sony has the deeper app and folds smaller; Bose is known for comfort. Try both on if you can." },
        { q: "Are cheap noise-cancelling headphones worth it?", a: "For commuting and studying, yes. For long flights, the flagships block more engine noise." },
        { q: "Is the Sony WH-2000XM6 a real model?", a: "No. Sony's current flagship is the WH-1000XM6." },
      ]}
    />
  );
}
