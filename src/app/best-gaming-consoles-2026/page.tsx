import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-gaming-consoles-2026";
const SEO_TITLE = "Best Gaming Console in 2026: PS5 vs Xbox";
const TITLE = "Best Gaming Console to Buy in 2026: PS5 vs Xbox";
const DESCRIPTION =
  "Which gaming console should you buy in 2026? PS5 Pro, PS5, Xbox Series X Digital and Series S compared by storage, discs and 4K. Check today's Amazon price.";
const IMG = illustrationPath("console");

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "console" });

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
    why: "A PS5 bundle with a limited gold design.",
    note: "No Amazon button: when we checked on November 22, 2026, this limited bundle had no featured offer on Amazon. We will add the link back if it returns.",
    skip: "you do not care about the design or the included game. A standard PS5 plus the game you want usually costs less.",
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
    skip: "you have a 4K TV and want the sharpest image in enhanced games. That is the PS5 Pro.",
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
      answer="The best gaming console to buy in 2026 is the PS5 Pro if you play PlayStation games on a 4K TV, and the standard PS5 for everyone else on PlayStation. Xbox players with Game Pass should buy the Xbox Series X Digital, or the Xbox Series S for a smaller TV and a tighter budget."
      intro={[
        "Choose the ecosystem before the hardware: your friends, your saved games and the exclusives you care about matter more than any spec. Then match the console to your TV. A 4K TV makes the PS5 Pro and Series X worth it; a 1080p TV does not. Sony and Microsoft raised US console prices in 2025, so check the live price.",
      ]}
      hero={{ src: IMG, alt: "PS5 vs Xbox console buying guide" }}
      tableTitle="PS5 vs Xbox consoles compared"
      tableColumns={["Storage", "Disc drive", "Target"]}
      products={products.map((product) => ({ ...product, image: IMG }))}
      buyingGuide={{
        heading: "How to choose a gaming console",
        points: [
          { title: "Ecosystem", body: "PlayStation has Sony's exclusives and PlayStation Plus. Xbox has Game Pass, which includes Microsoft's own games on day one. Your friends list often decides this." },
          { title: "Your TV", body: "On a 4K TV, the PS5 Pro and Series X look sharper. On a 1080p TV, the standard PS5 or the Series S gives you nearly the same picture for less." },
          { title: "Discs or digital", body: "Digital consoles cost less up front, but you cannot buy used or borrowed games. The PS5 Pro has no drive; Sony sells one separately." },
          { title: "Storage", body: "Big games fill 1TB fast. Budget for an M.2 SSD on PS5 or an expansion card on Xbox if you keep many games installed." },
        ],
      }}
      verdict={[
        "PlayStation players with a 4K TV should buy the PS5 Pro; everyone else should buy a new standard PS5. Xbox players with Game Pass should buy the Series X Digital, or the Series S for a smaller TV and budget.",
      ]}
      faqTitle="Console buying questions"
      faq={[
        { q: "Which console is better, PS5 or Xbox?", a: "Neither is better for everyone. Pick PS5 for Sony's exclusives and if your friends play there; pick Xbox if you want Game Pass and Microsoft's games on day one." },
        { q: "Is the PS5 Pro worth it over the standard PS5?", a: "On a 4K TV with games that are PS5 Pro Enhanced, yes. On a 1080p TV, or for older games, the standard PS5 is enough." },
        { q: "Does the PS5 Pro have a disc drive?", a: "No. Sony sells the disc drive separately." },
        { q: "Should I buy a renewed console?", a: "Only when the price gap is large and the warranty is clear. A new console sold by Amazon or the maker is the safer buy." },
      ]}
    />
  );
}
