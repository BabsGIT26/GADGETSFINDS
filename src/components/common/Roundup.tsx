import type { ReactNode } from "react";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import RelatedGuides, { type Topic } from "@/components/common/RelatedGuides";
import GuideFaq, { type FaqItem } from "@/components/common/GuideFaq";
import ArticleJsonLd from "@/components/common/ArticleJsonLd";
import TopPicks from "@/components/common/TopPicks";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import { HeroImage, ProductImage } from "@/components/common/Media";
import { CARD, CONTAINER, CTA, DISCLOSURE, EYEBROW, H1, H2, H3, LEAD, P, PAGE, UL } from "@/lib/layout";

export type RoundupProduct = {
  /** Section anchor, used by the 301s from the old single-product pages. */
  id: string;
  name: string;
  /** "Best for" label, used in Quick picks, the table and the review. */
  label: string;
  /** Full Amazon URL with the page's tag. Leave out when no verified listing exists. */
  url?: string;
  /** One line for the Quick picks box. */
  why: string;
  specs: [string, string][];
  /** "Why we picked it" paragraphs. */
  body: string[];
  /** "Who should skip it". */
  skip?: string;
  /** Product image or illustration (4:3). */
  image?: string;
  /** Short stock or listing note shown above the button. */
  note?: string;
};

export type BuyingPoint = { title: string; body: string };

function goHref(url: string) {
  return `/api/go?url=${encodeURIComponent(url)}`;
}

export default function Roundup({
  path,
  eyebrow,
  title,
  updated,
  answer,
  intro = [],
  hero,
  tableTitle,
  tableColumns,
  products,
  extra,
  buyingGuide,
  verdict,
  faq,
  faqTitle,
  description,
  picksNote,
  dealBox,
  topics,
}: {
  path: string;
  eyebrow: string;
  /** H1: contains the primary keyword. */
  title: string;
  updated: string;
  /** Short answer shown right under the H1; uses the primary keyword. */
  answer: string;
  intro?: string[];
  hero?: { src: string; alt: string };
  /** H2 above the comparison table, e.g. "Best cheap tablets compared". */
  tableTitle: string;
  /** Spec labels shown as table columns, in order. Must match keys in product specs. */
  tableColumns: string[];
  products: RoundupProduct[];
  extra?: { id: string; heading: string; body: ReactNode[] }[];
  buyingGuide?: { heading: string; intro?: string; points: BuyingPoint[] };
  verdict: string[];
  faq: FaqItem[];
  faqTitle?: string;
  description: string;
  picksNote?: string;
  /** Optional Amazon search box at the end, e.g. for more options. */
  dealBox?: { productName: string; href: string };
  topics?: Topic[];
}) {
  const picks = products
    .filter((product) => product.url)
    .slice(0, 3)
    .map((product) => ({ label: product.label, name: product.name, why: product.why, url: product.url! }));
  return (
    <>
      <Header />
      <ArticleJsonLd path={path} headline={title} description={description} products={products.map((p) => p.name)} />
      <main className={PAGE}>
      <article>
        <div className={CONTAINER}>
          <p className={DISCLOSURE}>
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may
            earn from qualifying purchases if you buy through links on this page, at no extra cost to you.
          </p>
          <p className={EYEBROW}>{eyebrow}</p>
          <h1 className={H1}>{title}</h1>
          <p className="text-sm text-muted-foreground mb-4">Updated {updated} · Specs from maker pages and Amazon listings</p>
          <p className={LEAD}>{answer}</p>
          <TopPicks picks={picks} note={picksNote} />
          {intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className={P}>
              {paragraph}
            </p>
          ))}
          {hero ? <HeroImage src={hero.src} alt={hero.alt} priority={false} /> : null}

          <h2 className={H2}>{tableTitle}</h2>
          <div className="overflow-x-auto mb-4 rounded-xl border border-border">
            <table className="w-full text-sm border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-muted/50 text-left">
                  <th className="p-3 font-semibold">Product</th>
                  <th className="p-3 font-semibold">Best for</th>
                  {tableColumns.map((column) => (
                    <th key={column} className="p-3 font-semibold">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  const specs = Object.fromEntries(product.specs);
                  return (
                    <tr key={product.id} className="border-t border-border align-top">
                      <td className="p-3 font-medium">
                        <a href={`#${product.id}`} className="underline underline-offset-4 decoration-amber-500/80">
                          {product.name}
                        </a>
                      </td>
                      <td className="p-3 text-muted-foreground">{product.label}</td>
                      {tableColumns.map((column) => (
                        <td key={column} className="p-3 text-muted-foreground">
                          {specs[column] ?? "—"}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-8">
            We did not lab-test these products and do not publish star ratings or scores. Check the live price, seller and
            stock on Amazon before you buy.
          </p>

          {products.map((product, index) => (
            <section key={product.id} id={product.id} className="scroll-mt-28">
              <h2 className={H2}>
                {index + 1}. {product.name}
              </h2>
              <div className={CARD}>
                {product.image ? <ProductImage src={product.image} alt={product.name} /> : null}
                <p className="mb-4">
                  <span className="inline-block rounded-full bg-amber-400 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-zinc-950">
                    Best for: {product.label.replace(/^Best (for )?/i, "")}
                  </span>
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-2">
                  {product.specs.map(([key, value]) => (
                    <li key={key}>
                      <strong className="text-foreground">{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
                <h3 className={H3}>Why we picked it</h3>
                {product.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className={P}>
                    {paragraph}
                  </p>
                ))}
                {product.skip ? (
                  <>
                    <h3 className={H3}>Who should skip it</h3>
                    <p className={P}>{/^[a-z]/.test(product.skip) ? `Skip it if ${product.skip}` : product.skip}</p>
                  </>
                ) : null}
                {product.note ? <p className="text-sm text-muted-foreground italic mb-4">{product.note}</p> : null}
                {product.url ? (
                  <a
                    href={goHref(product.url)}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    aria-label={`Check price of ${product.name} on Amazon`}
                    className={`${CTA} mt-2`}
                  >
                    Check price on Amazon
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground italic">
                    No Amazon button: we could not confirm a current new listing for this one.
                  </p>
                )}
              </div>
            </section>
          ))}

          {extra?.map((block) => (
            <section key={block.id} id={block.id} className="scroll-mt-28">
              <h2 className={H2}>{block.heading}</h2>
              {block.body.map((paragraph, index) => (
                <p key={index} className={P}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          {buyingGuide ? (
            <section id="buying-guide" className="scroll-mt-28">
              <h2 className={H2}>{buyingGuide.heading}</h2>
              {buyingGuide.intro ? <p className={P}>{buyingGuide.intro}</p> : null}
              {buyingGuide.points.map((point) => (
                <div key={point.title}>
                  <h3 className={H3}>{point.title}</h3>
                  <p className={P}>{point.body}</p>
                </div>
              ))}
            </section>
          ) : null}

          <section className="rounded-2xl border-2 border-amber-400 bg-amber-400/10 p-5 md:p-6 mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Final verdict</h2>
            {verdict.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className={P}>
                {paragraph}
              </p>
            ))}
          </section>

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

