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

export default function GuideFaq({ items }: { items: FaqItem[] }) {
  return (
    <section className="mt-10 mb-4">
      <FaqJsonLd items={items} />
      <h2 className="text-2xl font-bold mb-4">Questions people ask before buying</h2>
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.q}>
            <h3 className="font-semibold mb-1">{item.q}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.a}</p>
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
