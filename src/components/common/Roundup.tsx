import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import RelatedGuides from "@/components/common/RelatedGuides";
import GuideFaq, { type FaqItem } from "@/components/common/GuideFaq";
import ArticleJsonLd from "@/components/common/ArticleJsonLd";
import TopPicks from "@/components/common/TopPicks";

export type RoundupProduct = {
  /** Section anchor, used by the 301s from the old single-product pages. */
  id: string;
  name: string;
  /** Short label for the Top picks box and the table. */
  label: string;
  /** Full Amazon URL with the page's tag. Leave out when no verified listing exists. */
  url?: string;
  /** One line for the Top picks box. */
  why: string;
  specs: [string, string][];
  body: string[];
  skip?: string;
};

function goHref(url: string) {
  return `/api/go?url=${encodeURIComponent(url)}`;
}

export default function Roundup({
  path,
  eyebrow,
  title,
  updated,
  intro,
  tableColumns,
  products,
  extra,
  verdict,
  faq,
  description,
}: {
  path: string;
  eyebrow: string;
  title: string;
  updated: string;
  intro: string[];
  /** Spec labels shown as table columns, in order. Must match keys in product specs. */
  tableColumns: string[];
  products: RoundupProduct[];
  extra?: { id: string; heading: string; body: string[] }[];
  verdict: string[];
  faq: FaqItem[];
  description: string;
}) {
  const picks = products
    .filter((product) => product.url)
    .slice(0, 3)
    .map((product) => ({ label: product.label, name: product.name, why: product.why, url: product.url! }));
  return (
    <>
      <Header />
      <ArticleJsonLd path={path} headline={title} description={description} products={products.map((p) => p.name)} />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-4xl">
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases if you buy through links on this page, at no extra cost to you. Prices and availability change on Amazon.
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{eyebrow}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-muted-foreground mb-2 text-sm">Last updated: {updated}</p>
          <TopPicks picks={picks} />
          {intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-muted-foreground mb-5 leading-relaxed">
              {paragraph}
            </p>
          ))}
          <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
            This page summarizes maker specs and public listings. We did not lab-test these products, and we do not
            publish star ratings or scores. Read the live price, seller, and stock on Amazon before you buy.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Compare at a glance</h2>
          <div className="overflow-x-auto mb-10 rounded-xl border border-border">
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

          {products.map((product, index) => (
            <section key={product.id} id={product.id} className="scroll-mt-28 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-2">
                {index + 1}. {product.name}
              </h2>
              <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-4">{product.label}</p>
              <div className="bg-card border-2 border-amber-400/60 rounded-2xl p-6 md:p-8 shadow-sm">
                <ul className="text-sm text-muted-foreground space-y-1 mb-5">
                  {product.specs.map(([key, value]) => (
                    <li key={key}>
                      <strong className="text-amber-500">{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
                {product.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {product.skip ? (
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    <strong className="text-foreground">Skip it if:</strong> {product.skip}
                  </p>
                ) : null}
                {product.url ? (
                  <a
                    href={goHref(product.url)}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    aria-label={`View ${product.name} on Amazon`}
                    className="inline-flex items-center justify-center mt-2 min-w-[220px] px-8 py-3 rounded-full bg-amber-400 text-zinc-950 text-sm font-extrabold hover:bg-amber-300 transition-colors"
                  >
                    View on Amazon
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground italic">No Amazon button: we could not confirm a current new listing for this one.</p>
                )}
              </div>
            </section>
          ))}

          {extra?.map((block) => (
            <section key={block.id} id={block.id} className="scroll-mt-28 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">{block.heading}</h2>
              {block.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-muted-foreground mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <div className="rounded-2xl border-2 border-amber-400 bg-amber-400/10 p-6 md:p-8 my-10">
            <h2 className="text-2xl font-bold mb-3">Final verdict</h2>
            {verdict.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-muted-foreground mb-3 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <GuideFaq items={faq} />
          <RelatedGuides current={path} />
        </div>
      </article>
      <Footer />
    </>
  );
}
