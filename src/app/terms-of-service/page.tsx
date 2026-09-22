import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service — Gadgets Finds Legal Agreement',
  description: 'Read the terms and conditions for using Gadgets Finds website. Understand your rights, responsibilities, and our policies.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com/terms-of-service'
  },
  openGraph: {
    title: 'Terms of Service',
    description: 'Review our terms and conditions for using Gadgets Finds.',
    url: 'https://www.gadgets-finds.com/terms-of-service',
    type: 'website',
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1e4258af3-1765002521468.png",
      width: 1200,
      height: 630,
      alt: 'Terms of Service'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gadgets_finds',
    creator: '@Gadgets_finds',
    title: 'Terms of Service',
    description: 'Review our terms and conditions for using Gadgets Finds.',
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


const TermsOfServicePage = () => {
  const sections = [
  {
    title: 'Acceptance of Terms',
    content: [
    'By accessing and using Gadgets Finds, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
    'We reserve the right to modify these terms at any time. Your continued use of the website following any changes indicates your acceptance of the new terms.']

  },
  {
    title: 'Use License',
    content: [
    'Permission is granted to temporarily access the materials (information or software) on Gadgets Finds for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.',
    'Under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on Gadgets Finds; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.']

  },
  {
    title: 'User Accounts',
    content: [
    'When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.',
    'You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account.']

  },
  {
    title: 'Intellectual Property',
    content: [
    'The service and its original content, features, and functionality are and will remain the exclusive property of Gadgets Finds and its licensors. The service is protected by copyright, trademark, and other laws of both the United States and foreign countries.',
    'Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Gadgets Finds.']

  },
  {
    title: 'User Content',
    content: [
    'Our service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, or other material. You are responsible for the content that you post on or through the service, including its legality, reliability, and appropriateness.',
    'By posting content on or through the service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the service. You retain any and all of your rights to any content you submit, post or display on or through the service.']

  },
  {
    title: 'Prohibited Uses',
    content: [
    'You may not use our service for any illegal or unauthorized purpose nor may you, in the use of the service, violate any laws in your jurisdiction. You must not transmit any worms or viruses or any code of a destructive nature.',
    'You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the service without express written permission by us. You may not use our products for any illegal or unauthorized purpose nor may you violate any laws.']

  },
  {
    title: 'Affiliate Disclosure',
    content: [
    'Gadgets Finds participates in various affiliate marketing programs, which means we may earn commissions on purchases made through our links to retailer sites. This comes at no additional cost to you and helps support our content creation.',
    'Our reviews and recommendations are based on our honest opinions and thorough testing. Affiliate relationships do not influence our editorial content or product evaluations.']

  },
  {
    title: 'Disclaimer',
    content: [
    'The materials on Gadgets Finds are provided on an "as is" basis. Gadgets Finds makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
    'Gadgets Finds does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.']

  },
  {
    title: 'Limitations',
    content: [
    'In no event shall Gadgets Finds or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Gadgets Finds, even if Gadgets Finds or an authorized representative has been notified orally or in writing of the possibility of such damage.']

  },
  {
    title: 'Governing Law',
    content: [
    'These terms shall be governed and construed in accordance with the laws of the State of New Mexico, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights.']

  },
  {
    title: 'Contact Information',
    content: [
    'If you have any questions about these Terms of Service, please contact us at info@gadgets-finds.com or write to us at Best Gadgets Finds LLC, 2105 Vista Oeste NW Suite E #3494 Albuquerque, NM 87120.']

  }];


  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-4xl pt-28 md:pt-32 flex-1">
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
            Terms of Service
          </h1>
          <p className="text-brand-text-secondary">
            Last Updated: March 24, 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-text-secondary mb-8 text-lg">
            Please read these Terms of Service carefully before using the Gadgets Finds website. Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms.
          </p>

          {sections.map((section, index) =>
          <Section key={index} title={section.title} content={section.content} />
          )}
        </div>
      </div>
      <Footer />
    </div>);

};

export default TermsOfServicePage;