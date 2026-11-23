import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';

export const metadata: Metadata = {
  title: 'How We Research and Choose Products | Gadgets Finds',
  description:
    'How Gadgets Finds picks the gadgets in its guides: specs, Amazon listing checks, owner reviews, expert reviews, and what we do not claim to have tested.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: { canonical: 'https://www.gadgets-finds.com/how-we-research' },
  openGraph: {
    title: 'How We Research and Choose Products',
    description: 'The checks behind every Gadgets Finds guide, and what we do not claim.',
    url: 'https://www.gadgets-finds.com/how-we-research',
    siteName: 'Gadgets Finds',
    type: 'website',
    images: [{ url: 'https://www.gadgets-finds.com/og-home.png', width: 1200, height: 630, alt: 'Gadgets Finds' }],
  },
};

const STEPS = [
  {
    title: '1. Start from what the product is for',
    body: 'Each guide starts with a budget and a job: a robot vacuum under $300 for pet hair, a tablet a child can drop, a charger for one bag. We only compare products that do that job at that budget.',
  },
  {
    title: '2. Read the maker’s specs',
    body: 'We take battery, suction, screen, storage, weight, and ports from the manufacturer’s own spec pages and the Amazon listing. When the two disagree, we say so or use the more conservative number.',
  },
  {
    title: '3. Check the exact Amazon listing',
    body: 'We link to a specific listing (ASIN), not a search, wherever one clear match exists. Before a product goes into a guide we check that the listing is sold new, is in stock, and is the model we describe. We avoid renewed or used listings unless the guide says so clearly.',
  },
  {
    title: '4. Read owner and expert reviews',
    body: 'We read verified owner reviews for repeated problems, such as batteries that fade, apps that break, or parts that are hard to replace, and we read published expert reviews. A product with a pattern of serious complaints does not make the list.',
  },
  {
    title: '5. Write down the limits',
    body: 'Every pick has a “limitations” or “skip if” section. If a cheaper or simpler product fits most people better, we say that instead of pushing the more expensive one.',
  },
  {
    title: '6. Re-check and replace',
    body: 'Listings go out of stock and models get replaced. When we find that a pick is no longer sold new, we replace it with a current, comparable model and say so on the page.',
  },
];

export default function HowWeResearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-3xl pt-28 md:pt-32">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">How we research and choose products</h1>
        <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
          Gadgets Finds writes buying guides for gadgets sold on Amazon. This page explains how a
          product gets into a guide, and what we do and do not claim.
        </p>

        {STEPS.map((step) => (
          <section key={step.title} className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">{step.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{step.body}</p>
          </section>
        ))}

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">What we do not claim</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
            <li>We do not hands-on test every product. Unless a page says we used it, a guide is research, not a lab test.</li>
            <li>We do not invent star ratings, test scores, or reviewer names.</li>
            <li>Many pages use simple illustrations instead of product photos. Those images are marked as illustrations.</li>
            <li>We do not post live prices. Amazon prices change often, so every product links to the listing for the current price.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">How we make money</h2>
          <p className="text-muted-foreground leading-relaxed">
            We earn a commission when you buy through our Amazon links, at no extra cost to you.
            Brands do not pay to be included, and commissions do not decide which product we
            recommend. Read the full <Link href="/affiliate-disclosure" className="text-primary underline">Affiliate Disclosure</Link>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">Corrections</h2>
          <p className="text-muted-foreground leading-relaxed">
            If something on a page is wrong or out of date, tell us at{' '}
            <a href="mailto:info@gadgets-finds.com" className="text-primary underline">info@gadgets-finds.com</a>{' '}
            or through the <Link href="/contact-us" className="text-primary underline">contact page</Link>. We fix errors and note
            when a product has been replaced.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
