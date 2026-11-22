import type { Metadata } from "next";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-noise-cancelling-headphones-2026";
const TITLE = "Best Noise-Cancelling Headphones in 2026";
const DESCRIPTION =
  "Sony WH-1000XM6, Bose QuietComfort Ultra (2nd Gen), and Sony WH-CH720N compared: battery, noise cancelling, comfort, and who each pair is for.";

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
      intro={[
        "The two flagships, Sony and Bose, are close. Choose by fit and app: Sony for the deeper app and folding design, Bose for comfort. If you mostly need quiet on a bus, a budget pair is enough.",
        "This guide replaces our older single-model Sony headphones review.",
      ]}
      tableColumns={["Battery (maker rating)", "Noise cancelling", "Launched"]}
      products={products}
      verdict={[
        "Buy the Sony WH-1000XM6 for most people, the Bose QuietComfort Ultra (2nd Gen) if comfort on long flights matters most, and the Sony WH-CH720N if you want good-enough noise cancelling for much less.",
      ]}
      faq={[
        { q: "Is the Sony WH-2000XM6 a real model?", a: "No. Sony's current flagship is the WH-1000XM6." },
        { q: "Sony or Bose?", a: "Both are flagship noise-cancelling headphones. Sony has the deeper app and folds smaller; Bose is known for comfort. Try both if you can." },
        { q: "Are cheap noise-cancelling headphones worth it?", a: "For commuting and studying, yes. For long flights, the flagships block more engine noise." },
      ]}
    />
  );
}
