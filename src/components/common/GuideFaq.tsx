import type { ReactNode } from "react";

export type FaqItem = { q: string; a: string };

function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(items)) }} />
  );
}

export default function GuideFaq({ items, title = "Questions people ask before buying" }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="mt-12 mb-4">
      <FaqJsonLd items={items} />
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{title}</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.q} className="rounded-xl border-2 border-amber-400 bg-amber-400/10 p-5">
            <h3 className="font-semibold text-foreground mb-1">{item.q}</h3>
            <p className="text-foreground/80 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ShortAnswer({ children }: { children: ReactNode }) {
  return (
    <aside className="mb-8 rounded-2xl border border-border bg-card p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Short answer</p>
      <div className="text-foreground leading-relaxed">{children}</div>
    </aside>
  );
}

export function ProductListJsonLd({ name, url, products }: { name: string; url: string; products: string[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: `https://www.gadgets-finds.com${url}`,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
