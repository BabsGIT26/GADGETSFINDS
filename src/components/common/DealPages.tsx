import type { ReactNode } from "react";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import RelatedGuides from "@/components/common/RelatedGuides";
import GuideFaq, { ProductListJsonLd, type FaqItem } from "@/components/common/GuideFaq";
import ArticleJsonLd from "@/components/common/ArticleJsonLd";
import TopPicks, { type TopPick } from "@/components/common/TopPicks";
import { CardImage, ProductImage } from "@/components/common/Media";
import { CARD, CONTAINER, CTA, DISCLOSURE, EYEBROW, H1, H2, LEAD, P, PAGE, UL } from "@/lib/layout";
import { isSaleSeason } from "@/lib/sale-season";

export type DealItem = {
  slug: string;
  name: string;
  image: string;
  alt: string;
  href: string;
  card: string;
  fit: string;
  skip: string;
  points: string[];
  limit: string;
  compareName: string;
  compareSlug: string;
  compare: string;
};

const go = (url: string) => `/api/go?url=${encodeURIComponent(url)}`;

function Disclosure() {
  return (
    <p className={DISCLOSURE}>
      <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn
      from qualifying purchases if you buy through links on this page, at no extra cost to you.
    </p>
  );
}

/** Hub page for a sale list: short answer, quick picks, a card grid, a buying guide and an FAQ. */
export function DealHub({
  path,
  eyebrow,
  title,
  answer,
  listName,
  picks,
  items,
  sections,
  faq,
  faqTitle,
}: {
  path: string;
  eyebrow: string;
  title: string;
  answer: string;
  listName: string;
  picks: TopPick[];
  items: DealItem[];
  sections: { heading: string; body: ReactNode[] }[];
  faq: FaqItem[];
  faqTitle: string;
}) {
  return (
    <>
      <Header />
      <main className={PAGE}>
      <article>
        <div className={CONTAINER}>
          <Disclosure />
          <p className={EYEBROW}>{eyebrow}</p>
          <h1 className={H1}>{title}</h1>
          <p className="text-sm text-muted-foreground mb-4">Updated November 2026 · Specs from maker pages and Amazon listings</p>
          <p className="text-sm text-muted-foreground mb-4">Brands do not pay to be included in our guides. These gadgets are often discounted on Black Friday — check today&apos;s price on Amazon.</p>
          <p className={LEAD}>{answer}</p>
          <TopPicks picks={picks} />
          <ProductListJsonLd name={listName} url={path} products={items.map((item) => item.name)} />

          <h2 className={H2}>All the deals we would open</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <div key={item.slug} className="bg-card border border-border rounded-xl overflow-hidden flex flex-col">
                <a href={`${path}/${item.slug}`} aria-label={item.name}>
                  <CardImage src={item.image} alt={item.alt} />
                </a>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-foreground">
                    <a href={`${path}/${item.slug}`} className="hover:text-amber-700">
                      {item.name}
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 flex-1">{item.card}</p>
                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href={`${path}/${item.slug}`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-amber-500 text-sm font-bold hover:bg-amber-400/10"
                    >
                      Who it is for
                    </a>
                    <a
                      href={go(item.href)}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      aria-label={`Check price of ${item.name} on Amazon`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-amber-400 text-zinc-950 text-sm font-extrabold hover:bg-amber-300 transition-colors"
                    >
                      Check price on Amazon
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className={H2}>{section.heading}</h2>
              {section.body.map((paragraph, index) => (
                <p key={index} className={P}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <GuideFaq items={faq} title={faqTitle} />
          <RelatedGuides current={path} />
        </div>
      </article>
      </main>
      <Footer />
    </>
  );
}

/** One product from a sale list, same layout for every category. */
export function DealDetail({
  item,
  hubPath,
  hubLabel,
  noun,
}: {
  item: DealItem;
  hubPath: string;
  hubLabel: string;
  noun: string;
}) {
  const path = `${hubPath}/${item.slug}`;
  const cta = (
    <a
      href={go(item.href)}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      aria-label={`Check price of ${item.name} on Amazon`}
      className={CTA}
    >
      Check price on Amazon
    </a>
  );
  return (
    <>
      <Header />
      <ArticleJsonLd path={path} headline={dealTitle(item.name)} description={item.card} products={[item.name]} />
      <main className={PAGE}>
      <article>
        <div className={CONTAINER}>
          <Disclosure />
          <p className={EYEBROW}>
            <a href={hubPath} className="hover:underline">
              {hubLabel}
            </a>
          </p>
          <h1 className={H1}>{dealTitle(item.name)}</h1>
          <p className="text-sm text-muted-foreground mb-4">Updated November 2026 · Specs from the maker and the Amazon listing</p>
          <p className="text-sm text-muted-foreground mb-4">Brands do not pay to be included in our guides. This gadget is often discounted on Black Friday — check today&apos;s price on Amazon.</p>
          <p className={LEAD}>{item.card}</p>
          <div className="mb-8">{cta}</div>
          <div className={CARD}>
            <ProductImage src={item.image} alt={item.alt} priority />
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">Who this {noun} is for</h2>
            <p className={P}>{item.fit}</p>
          </div>
          <h2 className={H2}>What you get</h2>
          <ul className={UL}>
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <h2 className={H2}>Limits to know</h2>
          <p className={P}>{item.limit}</p>
          <h2 className={H2}>Who should skip it</h2>
          <p className={P}>{item.skip}</p>
          <h2 className={H2}>
            {item.name} vs {item.compareName}
          </h2>
          <p className={P}>
            {item.compare}{" "}
            <a href={`${hubPath}/${item.compareSlug}`} className="underline decoration-amber-500/80 underline-offset-4 hover:text-foreground">
              See the {item.compareName}.
            </a>
          </p>
          <div className="mt-8">{cta}</div>
          <p className="text-xs text-muted-foreground mt-3">The live price, seller and stock are on Amazon.</p>
          <p className={`${P} mt-8`}>
            <a href={hubPath} className="underline decoration-amber-500/80 underline-offset-4 hover:text-foreground">
              See all {hubLabel.toLowerCase()}
            </a>
          </p>
          <RelatedGuides current={hubPath} />
        </div>
      </article>
      </main>
      <Footer />
    </>
  );
}

export function dealTitle(name: string) {
  return isSaleSeason() ? `${name} Black Friday Deal: Who It Is For` : `${name}: Who It Is For`;
}

/** Keyword title tag that fits in 60 characters with the brand suffix. */
export function dealSeoTitle(name: string) {
  const options = isSaleSeason()
    ? [`${name} Black Friday Deal`, `${name} Deal`, name]
    : [`${name} Deal`, name];
  return options.find((option) => `${option} | Gadgets Finds`.length <= 60) ?? name;
}
