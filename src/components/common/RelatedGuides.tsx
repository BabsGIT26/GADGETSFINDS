import Link from "next/link";

const GUIDES = [
  { href: "/best-budget-robot-vacuums-under-300", title: "Best budget robot vacuums under $300" },
  { href: "/black-friday-robot-vacuums", title: "Black Friday robot vacuums" },
  { href: "/roborock-vs-roomba-2026", title: "Roborock vs Roomba in 2026" },
  { href: "/best-ps5-accessories-2026", title: "Best PS5 accessories in 2026" },
  { href: "/best-cheap-tablets-under-150", title: "Best cheap tablets under $150" },
  { href: "/best-portable-chargers-for-travel", title: "Best portable chargers for travel" },
  { href: "/best-smartwatches-under-350", title: "Best smartwatches under $350" },
  { href: "/black-friday-smartwatches", title: "Black Friday smartwatches" },
  { href: "/best-mini-gadgets-under-30", title: "Best mini gadgets under $30" },
  { href: "/best-amazon-deals-this-week", title: "Best Amazon deals this week" },
] as const;

export default function RelatedGuides({ current }: { current: string }) {
  const others = GUIDES.filter((guide) => guide.href !== current);
  return (
    <nav className="mt-12 mb-4" aria-label="Related guides">
      <h2 className="text-2xl font-bold mb-4">Related guides</h2>
      <ul className="space-y-2 text-muted-foreground">
        {others.map((guide) => (
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
