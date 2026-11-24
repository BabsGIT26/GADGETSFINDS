import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';

export const metadata: Metadata = {
  title: 'About Gadgets Finds — Tech Reviews & Honest Recommendations',
  description: 'How Gadgets Finds researches gadgets: manufacturer specs, verified owner reviews, and expert reviews, with a clear affiliate disclosure on every guide.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com/about-us'
  },
  openGraph: {
    title: 'About Gadgets Finds',
    description: 'Research-based gadget guides with clear affiliate disclosure.',
    url: 'https://www.gadgets-finds.com/about-us',
    type: 'website',
    images: [
    {
      url: 'https://img.rocket.new/generatedImages/rocket_gen_img_142fa928a-1770670098681.png',
      width: 1200,
      height: 630,
      alt: 'Gadgets Finds About Us'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gadgets_finds',
    creator: '@Gadgets_finds',
    title: 'About Gadgets Finds',
    description: 'Research-based gadget guides with clear affiliate disclosure.',
    images: ['https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png']
  }
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-primary/20 to-transparent pb-20 border-b border-slate-800 site-pad-top">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="text-brand-primary hover:text-brand-primary-hover transition-colors inline-flex items-center mb-8">
            
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-text-primary mb-6">
            About Gadgets Finds
          </h1>
          <p className="text-xl text-brand-text-secondary max-w-3xl">
            Your source for honest and detailed tech reviews and recommendations.
          </p>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-16 border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-text-primary mb-4">Our Mission</h2>
              <p className="text-brand-text-secondary leading-relaxed">
                To provide honest, comprehensive, and accessible technology reviews that help consumers make informed purchasing decisions.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-text-primary mb-4">Our Vision</h2>
              <p className="text-brand-text-secondary leading-relaxed">
                To be a trusted and independent source of technology information and reviews.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="py-16 border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-text-primary mb-6">Our Story</h2>
          <div className="space-y-4 text-brand-text-secondary leading-relaxed">
            <p>
              Gadgets Finds was created to offer straightforward, research-based buying guides. Many review sites prioritize affiliate revenue over honesty — we aim to do things differently.
            </p>
            <p>
              We do not run a test lab. Our picks come from manufacturer specs and documentation, verified owner reviews, and published expert reviews, and we say plainly when a number is the maker's claim rather than something we measured.
            </p>
            <p>
              We maintain editorial independence and are transparent about our affiliate relationships when they exist.
            </p>
          </div>
        </div>
      </section>
      {/* Review Methodology */}
      <section className="py-16 border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-text-primary mb-6">Our Review Methodology</h2>
          <div className="space-y-6">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
              <h3 className="text-xl font-bold text-brand-text-primary mb-3">How We Research</h3>
              <p className="text-brand-text-secondary">
                We compare manufacturer specs and data sheets, read verified owner reviews for recurring problems, and check what independent expert reviewers report. We do not claim hands-on results we did not get.
              </p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
              <h3 className="text-xl font-bold text-brand-text-primary mb-3">Editorial Independence</h3>
              <p className="text-brand-text-secondary">
                Our reviews are not influenced by advertisers or manufacturers. Affiliate relationships are clearly disclosed and do not affect our editorial decisions.
              </p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
              <h3 className="text-xl font-bold text-brand-text-primary mb-3">Transparency & Accountability</h3>
              <p className="text-brand-text-secondary">
                We disclose how we research, our affiliate relationships, and update guides when prices, stock, or products change.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>);

};

export default AboutPage;