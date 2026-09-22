import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';

export const metadata: Metadata = {
  title: 'Cookie Policy — Gadgets Finds Cookie Management',
  description: 'Learn how Gadgets Finds uses cookies and tracking technologies. Manage your cookie preferences and understand our data collection practices.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com/cookies'
  },
  openGraph: {
    title: 'Cookie Policy',
    description: 'Understand how we use cookies and manage your preferences.',
    url: 'https://www.gadgets-finds.com/cookies',
    type: 'website',
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1313faca2-1768801814270.png",
      width: 1200,
      height: 630,
      alt: 'Cookie Policy'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gadgets_finds',
    creator: '@Gadgets_finds',
    title: 'Cookie Policy',
    description: 'Understand how we use cookies and manage your preferences.',
    images: ['https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png']
  }
};

interface SectionProps {
  title: string;
  content: string[];
}

const Section = ({ title, content }: SectionProps) =>
<section className="mb-8">
    <h2 className="text-2xl font-bold text-brand-text-primary mb-4">{title}</h2>
    {content.map((paragraph, index) =>
  <p key={index} className="text-brand-text-secondary mb-4 leading-relaxed">
        {paragraph}
      </p>
  )}
  </section>;


const CookiePolicyPage = () => {
  const sections = [
  {
    title: 'What Are Cookies',
    content: [
    'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.',
    'Cookies set by the website owner (in this case, Gadgets Finds) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website.']

  },
  {
    title: 'How We Use Cookies',
    content: [
    'We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website.',
    'Third parties serve cookies through our website for advertising, analytics, and other purposes. This is described in more detail below.']

  },
  {
    title: 'Types of Cookies We Use',
    content: [
    'Essential Cookies: These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the website, you cannot refuse them without impacting how our website functions.',
    'Performance and Analytics Cookies: These cookies collect information about how you use our website, such as which pages you visit most often and if you receive error messages. These cookies help us improve how our website works and understand user behavior patterns.',
    'Functionality Cookies: These cookies allow our website to remember choices you make (such as your username, language, or region) and provide enhanced, more personalized features. They may also be used to provide services you have requested, such as watching a video or commenting on a blog.',
    'Targeting and Advertising Cookies: These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.']

  },
  {
    title: 'Third-Party Cookies',
    content: [
    'In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on. These third-party services include Google Analytics, social media platforms, and advertising networks.',
    'These third parties may use cookies, web beacons, and other tracking technologies to collect or receive information from our website and elsewhere on the internet and use that information to provide measurement services and target ads.']

  },
  {
    title: 'Managing Cookies',
    content: [
    'You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in our cookie consent banner or by setting or amending your web browser controls.',
    'Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of our website.']

  },
  {
    title: 'Browser Controls',
    content: [
    'You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of our website may become inaccessible or not function properly.',
    'For more information about how to manage cookies in popular browsers: Chrome - Settings > Privacy and Security > Cookies; Firefox - Options > Privacy & Security > Cookies; Safari - Preferences > Privacy > Cookies; Edge - Settings > Privacy > Cookies.']

  },
  {
    title: 'Do Not Track Signals',
    content: [
    'Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online activities tracked. At this time, we do not respond to browser "Do Not Track" signals.']

  },
  {
    title: 'Changes to This Cookie Policy',
    content: [
    'We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies.']

  },
  {
    title: 'Contact Us',
    content: [
    'If you have any questions about our use of cookies or this Cookie Policy, please contact us at info@gadgets-finds.com or write to us at Best Gadgets Finds LLC, 2105 Vista Oeste NW Suite E #3494 Albuquerque, NM 87120.']

  }];


  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-4xl pt-28 md:pt-32">
        <div className="mb-8">
          <Link
            href="/homepage"
            className="text-brand-primary hover:text-brand-primary-hover transition-colors inline-flex items-center mb-6">
            
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text-primary mb-4">
            Cookie Policy
          </h1>
          <p className="text-brand-text-secondary">
            Last Updated: March 24, 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-text-secondary mb-8 text-lg">
            This Cookie Policy explains how Gadgets Finds uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          {sections.map((section, index) =>
          <Section key={index} title={section.title} content={section.content} />
          )}
        </div>
      </div>
      <Footer />
    </div>);

};

export default CookiePolicyPage;