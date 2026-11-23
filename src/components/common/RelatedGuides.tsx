import Link from "next/link";
import { isSaleSeason } from "@/lib/sale-season";

export type Topic = "home" | "mobile" | "computing" | "gaming" | "deals" | "audio" | "travel";

function guides(): { href: string; title: string; topics: Topic[] }[] {
  return [
  { href: "/best-budget-robot-vacuums-under-300", title: "Best robot vacuums under $300", topics: ["home", "deals"] },
  { href: "/roborock-vs-roomba-2026", title: "Roborock vs Roomba: which to buy", topics: ["home"] },
  { href: "/black-friday-robot-vacuums", title: isSaleSeason() ? "Black Friday robot vacuum deals" : "Robot vacuum deals worth buying", topics: ["home", "deals"] },
  { href: "/best-cheap-tablets-under-150", title: "Best cheap tablets under $150", topics: ["mobile", "deals"] },
  { href: "/best-phones-2026", title: "Best phones of 2026", topics: ["mobile"] },
  { href: "/best-foldable-phones-2026", title: "Best foldable phones of 2026", topics: ["mobile"] },
  { href: "/best-smartwatches-under-350", title: "Best smartwatches under $350", topics: ["mobile", "audio"] },
  { href: "/black-friday-smartwatches", title: isSaleSeason() ? "Black Friday smartwatch deals" : "Smartwatch deals worth buying", topics: ["mobile", "deals"] },
  { href: "/best-portable-chargers-for-travel", title: "Best portable chargers for travel", topics: ["mobile", "travel"] },
  { href: "/best-mini-gadgets-under-30", title: "Best tech gadgets under $30", topics: ["travel", "deals", "computing"] },
  { href: "/best-noise-cancelling-headphones-2026", title: "Best noise-cancelling headphones", topics: ["audio", "travel"] },
  { href: "/best-macbooks-2026", title: "Best MacBooks of 2026", topics: ["computing"] },
  { href: "/best-laptops-developers-2026", title: "Best laptops for programming", topics: ["computing"] },
  { href: "/best-graphics-cards-2026", title: "Best graphics cards of 2026", topics: ["computing", "gaming"] },
  { href: "/best-gaming-consoles-2026", title: "Best gaming consoles of 2026", topics: ["gaming"] },
  { href: "/best-ps5-accessories-2026", title: "Best PS5 accessories", topics: ["gaming", "audio"] },
  { href: "/best-amazon-deals-this-week", title: "Best Amazon tech deals this week", topics: ["deals"] },
  ];
}

/** Up to six related guides: same topic first, then the rest in list order. */
export default function RelatedGuides({ current, limit = 6, topics }: { current: string; limit?: number; topics?: Topic[] }) {
  const list = guides();
  const found = list.find((guide) => guide.href === current);
  const self = found ?? (topics ? { href: current, title: "", topics } : undefined);
  const others = list.filter((guide) => guide.href !== current);
  const shared = (guide: (typeof list)[number]) =>
    self ? guide.topics.filter((topic) => self.topics.includes(topic)).length : 0;
  const ranked = [...others].sort((a, b) => shared(b) - shared(a)).slice(0, limit);
  return (
    <nav className="mt-12 mb-4" aria-label="Related guides">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Related buying guides</h2>
      <ul className="grid gap-2 sm:grid-cols-2 text-muted-foreground">
        {ranked.map((guide) => (
          <li key={guide.href}>
            <Link href={guide.href} className="underline underline-offset-4 decoration-amber-500/80 hover:text-foreground">
              {guide.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
