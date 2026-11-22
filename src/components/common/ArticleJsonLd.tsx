import { PAGE_DATES, SITE_UPDATED } from '@/lib/page-dates';

const BASE = 'https://www.gadgets-finds.com';

/**
 * Article + ItemList structured data for single-product and comparison pages.
 * No ratings, review scores, or prices are included: we only describe what the
 * page is about, so nothing here can drift from the visible content.
 */
export default function ArticleJsonLd({
  path,
  headline,
  description,
  products,
  includeArticle = true,
}: {
  path: string;
  headline: string;
  description?: string;
  products: string[];
  includeArticle?: boolean;
}) {
  const url = `${BASE}${path}`;
  const graph: Record<string, unknown>[] = [];
  if (includeArticle) {
    graph.push({
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: headline.slice(0, 110),
      ...(description ? { description } : {}),
      url,
      mainEntityOfPage: url,
      dateModified: PAGE_DATES[path] ?? SITE_UPDATED,
      author: { '@type': 'Organization', name: 'Gadgets Finds', url: BASE },
      publisher: {
        '@type': 'Organization',
        name: 'Gadgets Finds',
        logo: { '@type': 'ImageObject', url: `${BASE}/apple-touch-icon.png` },
      },
      ...(products.length ? { about: products.map((name) => ({ '@type': 'Thing', name })) } : {}),
    });
  }
  if (products.length) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#products`,
      name: `Products covered: ${headline}`.slice(0, 150),
      url,
      itemListElement: products.map((name, index) => ({ '@type': 'ListItem', position: index + 1, name })),
    });
  }
  const schema = { '@context': 'https://schema.org', '@graph': graph };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
