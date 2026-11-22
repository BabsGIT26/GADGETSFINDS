import type { Metadata } from "next";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-gaming-consoles-2026";
const TITLE = "Best Gaming Consoles to Buy in 2026";
const DESCRIPTION =
  "PS5 Pro, PS5, Xbox Series X Digital, and Xbox Series S compared: storage, disc drives, resolution targets, and which console fits how you play.";

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
    id: "playstation-5-pro",
    name: "PlayStation 5 Pro (2TB)",
    label: "Best PlayStation",
    url: amz("B0FTMY4YZ2"),
    why: "The fastest PS5, for 4K TVs and enhanced games.",
    specs: [
      ["Storage", "2TB SSD"],
      ["Disc drive", "No (sold separately)"],
      ["Target", "4K TVs, PS5 Pro Enhanced games"],
      ["Launched", "November 2024"],
    ],
    body: [
      "The PS5 Pro has a stronger GPU than the standard PS5, AI upscaling Sony calls PSSR, and a 2TB SSD. The gains show in games Sony labels PS5 Pro Enhanced, on a 4K TV.",
      "It has no disc drive. If you own PS5 or PS4 discs, budget for Sony's add-on drive.",
    ],
    skip: "you play on a 1080p TV, or you mostly play older or indie games. The standard PS5 is enough.",
  },
  {
    id: "xbox-series-x-digital",
    name: "Xbox Series X Digital Edition (1TB)",
    label: "Best Xbox",
    url: amz("B0DCD9LGHY"),
    why: "Full Series X power without a disc drive.",
    specs: [
      ["Storage", "1TB SSD"],
      ["Disc drive", "No"],
      ["Target", "4K TVs, Game Pass"],
      ["Launched", "October 2024"],
    ],
    body: [
      "Same performance as the disc Series X, in white, with no disc drive. It makes the most sense if you play through Game Pass or buy digital.",
    ],
    skip: "you buy used discs. A disc console saves more over time.",
  },
  {
    id: "xbox-series-s",
    name: "Xbox Series S (512GB)",
    label: "Best value",
    url: amz("B0D932YWSZ"),
    why: "The smallest current console, for 1080p and 1440p TVs.",
    specs: [
      ["Storage", "512GB SSD"],
      ["Disc drive", "No"],
      ["Target", "1080p and 1440p, up to 120fps"],
      ["Launched", "November 2020"],
    ],
    body: [
      "The lowest-cost way into current-generation games, and a good second console for a bedroom TV. 512GB fills quickly with big games, so plan on a storage card or regular deletes.",
    ],
    skip: "you have a 4K TV and care about image quality. That is a Series X or PS5.",
  },
  {
    id: "ps5-ghost-of-yotei-bundle",
    name: "PlayStation 5 – Ghost of Yōtei Gold Limited Edition bundle",
    label: "Best collector bundle",
    url: amz("B0FN47PSCP"),
    why: "A PS5 bundle with a limited gold design.",
    specs: [
      ["Storage", "Check the listing"],
      ["Disc drive", "Check the listing"],
      ["Target", "Fans of Ghost of Yōtei"],
      ["Launched", "October 2025"],
    ],
    body: [
      "A limited-edition PS5 bundle styled for Ghost of Yōtei, Sucker Punch's follow-up to Ghost of Tsushima. Buy it for the design and the game together; the console inside is a PS5.",
      "Limited bundles sell out and third-party sellers mark them up. Check who sells the listing before you pay.",
    ],
  },
  {
    id: "playstation-5",
    name: "PlayStation 5 (standard and Digital Edition)",
    label: "Standard PS5",
    why: "The PS5 most people need.",
    specs: [
      ["Storage", "1TB SSD (current Slim models)"],
      ["Disc drive", "Standard: yes. Digital Edition: no"],
      ["Target", "1080p and 4K TVs"],
      ["Launched", "Slim models from November 2023"],
    ],
    body: [
      "For most PlayStation players the standard PS5 is still the right buy; the Pro only pays off on a 4K TV.",
      "When we checked on Nov 22, 2026, the PS5 Digital Edition listing we used to link was unavailable and the PS5 listing was a renewed unit, so we removed both buttons. Buy a new PS5 sold by Amazon or Sony, and avoid renewed units unless the price makes up for the shorter warranty.",
    ],
  },
];

export default function Page() {
  return (
    <Roundup
      path={PATH}
      eyebrow="Gaming"
      title={TITLE}
      updated="November 2026"
      description={DESCRIPTION}
      intro={[
        "Choose the ecosystem first. Your friends, your saved games, and the exclusives you care about matter more than any spec. Then choose the TV: a 4K TV makes the PS5 Pro and Series X worth it, a 1080p TV does not.",
        "Sony and Microsoft raised US console prices in 2025, so read the live price on Amazon. This guide replaces our older pages for the PS5, PS5 Pro, PS5 Digital Edition, Xbox Series X Digital, and the Ghost of Yōtei bundle.",
      ]}
      tableColumns={["Storage", "Disc drive", "Target"]}
      products={products}
      verdict={[
        "PlayStation players with a 4K TV should buy the PS5 Pro; everyone else should buy a new standard PS5. Xbox players with Game Pass should buy the Series X Digital, or the Series S for a smaller TV and a smaller budget.",
      ]}
      faq={[
        { q: "Is the PS5 Pro worth it over the standard PS5?", a: "On a 4K TV with games that are PS5 Pro Enhanced, yes. On a 1080p TV, or for older games, the standard PS5 is enough." },
        { q: "Does the PS5 Pro have a disc drive?", a: "No. Sony sells the disc drive separately." },
        { q: "Can the Xbox Series X Digital play discs?", a: "No. It is all-digital. Buy the disc Series X if you use physical games." },
        { q: "Should I buy a renewed console?", a: "Only when the price gap is large and the warranty is clear. A new console sold by Amazon or the maker is the safer buy." },
      ]}
    />
  );
}
