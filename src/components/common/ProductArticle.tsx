import type { ReactNode } from "react";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import RelatedGuides, { type Topic } from "@/components/common/RelatedGuides";
import GuideFaq, { type FaqItem } from "@/components/common/GuideFaq";
import ArticleJsonLd from "@/components/common/ArticleJsonLd";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import { LivePrice, ProductPhoto } from "@/components/common/AmazonMedia";
import { CARD, CONTAINER, CTA, DISCLOSURE, EYEBROW, H1, H2, H3, LEAD, P, PAGE, UL } from "@/lib/layout";

const go = (url: string) => url;

export type ArticleSection = {
  id?: string;
  heading: string;
  /** Paragraphs. Strings render as <p>; nodes render as given. */
  body?: ReactNode[];
  bullets?: ReactNode[];
  sub?: { heading: string; body: ReactNode[] }[];
};

/**
 * Standard single-product or single-topic article: the same containers, type
 * scale and 16:9 hero as the roundups, with Best for / Why / Skip and an FAQ.
 */
export default function ProductArticle({
  path,
  eyebrow,
  title,
  description,
  updated = "November 2026",
  answer,
  image,
  cta,
  glance,
  bestFor,
  why,
  skip,
  sections,
  faq,
  faqTitle,
  products,
  dealBox,
  disclosure = true,
  topics,
  after,
}: {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  updated?: string;
  answer: ReactNode;
  image: { src: string; alt: string };
  cta?: { href: string; label?: string; note?: string; asin?: string };
  glance?: [string, string][];
  bestFor?: string;
  why?: ReactNode[];
  skip?: ReactNode[];
  sections: ArticleSection[];
  faq: FaqItem[];
  faqTitle?: string;
  products: string[];
  dealBox?: { productName: string; href: string };
  disclosure?: boolean;
  topics?: Topic[];
  /** Extra block before the FAQ, e.g. comments. */
  after?: ReactNode;
}) {
  const ctaButton = cta ? (
    <div className="my-6">
      <LivePrice url={cta.href} asin={cta.asin} className="mb-3" />
      <a href={go(cta.href)} rel="nofollow sponsored noopener noreferrer" className={CTA}>
        {cta.label ?? "Check price on Amazon"}
      </a>
      {cta.note ? <p className="text-xs text-muted-foreground mt-2">{cta.note}</p> : null}
    </div>
  ) : null;
  return (
    <>
      <Header />
      <ArticleJsonLd path={path} headline={title} description={description} products={products} />
      <main className={PAGE}>
      <article>
        <div className={CONTAINER}>
          {disclosure ? (
            <p className={DISCLOSURE}>
              <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We
              may earn from qualifying purchases if you buy through links on this page, at no extra cost to you.
            </p>
          ) : null}
          <p className={EYEBROW}>{eyebrow}</p>
          <h1 className={H1}>{title}</h1>
          <p className="text-sm text-muted-foreground mb-4">Updated {updated} · Specs from maker pages and Amazon listings</p>
          <p className={LEAD}>{answer}</p>
          {ctaButton}
          <ProductPhoto url={cta?.href} asin={cta?.asin} fallback={image.src} alt={image.alt} variant="hero" />

          {glance || bestFor || why || skip ? (
            <section className={`${CARD} mt-8`}>
              {bestFor ? (
                <p className="mb-4">
                  <span className="inline-block rounded-full bg-amber-400 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-zinc-950">
                    Best for
                  </span>{" "}
                  <span className="text-foreground font-medium">{bestFor}</span>
                </p>
              ) : null}
              {glance ? (
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm mb-2">
                  {glance.map(([k, v]) => (
                    <div key={k} className="flex flex-col border-b border-border pb-2">
                      <dt className="font-semibold text-foreground">{k}</dt>
                      <dd className="text-muted-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}
              {why ? (
                <>
                  <h3 className={H3}>Why we picked it</h3>
                  {why.map((w, i) => (typeof w === "string" ? <p key={i} className={P}>{w}</p> : <div key={i}>{w}</div>))}
                </>
              ) : null}
              {skip ? (
                <>
                  <h3 className={H3}>Who should skip it</h3>
                  {skip.map((w, i) => (typeof w === "string" ? <p key={i} className={P}>{w}</p> : <div key={i}>{w}</div>))}
                </>
              ) : null}
            </section>
          ) : null}

          {sections.map((section) => (
            <section key={section.heading} id={section.id} className="site-scroll">
              <h2 className={H2}>{section.heading}</h2>
              {section.body?.map((b, i) => (typeof b === "string" ? <p key={i} className={P}>{b}</p> : <div key={i} className={P}>{b}</div>))}
              {section.bullets ? (
                <ul className={UL}>
                  {section.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              ) : null}
              {section.sub?.map((s) => (
                <div key={s.heading}>
                  <h3 className={H3}>{s.heading}</h3>
                  {s.body.map((b, i) => (typeof b === "string" ? <p key={i} className={P}>{b}</p> : <div key={i} className={P}>{b}</div>))}
                </div>
              ))}
            </section>
          ))}

          {ctaButton}
          {after}
          <GuideFaq items={faq} title={faqTitle} />
          <RelatedGuides current={path} topics={topics} />
          {dealBox ? <AmazonDealBox productName={dealBox.productName} href={dealBox.href} /> : null}
        </div>
      </article>
      </main>
      <Footer />
    </>
  );
}
