import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | Gadgets Finds',
  description:
    'Gadgets Finds is an Amazon Associate and earns from qualifying purchases. How our affiliate links work, what that means for you, and how it affects our guides.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: { canonical: 'https://www.gadgets-finds.com/affiliate-disclosure' },
  openGraph: {
    title: 'Affiliate Disclosure',
    description: 'How Gadgets Finds earns money from Amazon links.',
    url: 'https://www.gadgets-finds.com/affiliate-disclosure',
    siteName: 'Gadgets Finds',
    type: 'website',
    images: [{ url: 'https://www.gadgets-finds.com/og-home.png', width: 1200, height: 630, alt: 'Gadgets Finds' }],
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-3xl pt-28 md:pt-32">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Affiliate disclosure</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: November 22, 2026</p>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">Amazon Associates</h2>
          <p className="text-muted-foreground leading-relaxed">
            Gadgets Finds (Best Gadgets Finds LLC) is a participant in the Amazon Services LLC
            Associates Program, an affiliate advertising program designed to provide a means for
            sites to earn advertising fees by advertising and linking to Amazon.com.{' '}
            <strong>As an Amazon Associate we earn from qualifying purchases.</strong>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">What that means for you</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
            <li>Most product buttons and product names on this site are affiliate links to Amazon.</li>
            <li>If you buy after clicking one, Amazon may pay us a commission. You pay the same price.</li>
            <li>Amazon sets the price, stock, shipping, and returns. We do not sell anything ourselves.</li>
            <li>Affiliate links are marked with rel=&quot;sponsored&quot; for search engines.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">How it affects our picks</h2>
          <p className="text-muted-foreground leading-relaxed">
            Brands do not pay to be included in our guides. The commission rate does not decide which product we recommend.
            See <Link href="/how-we-research" className="text-primary underline">How We Research</Link>{' '}
            for how products are chosen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">Click tracking</h2>
          <p className="text-muted-foreground leading-relaxed">
            Amazon buttons pass through our own redirect so we can count which recommendations are
            used. We do not see what you buy. Details are in our{' '}
            <Link href="/privacy-policy" className="text-primary underline">Privacy Policy</Link>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">Questions</h2>
          <p className="text-muted-foreground leading-relaxed">
            Email <a href="mailto:info@gadgets-finds.com" className="text-primary underline">info@gadgets-finds.com</a>{' '}
            or use our <Link href="/contact-us" className="text-primary underline">contact page</Link>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
