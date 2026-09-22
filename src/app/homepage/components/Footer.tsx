'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import AppImage from '@/components/ui/AppImage';


const Footer = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date()?.getFullYear());
  }, []);

  const footerLinks = {
    Company: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Contact', href: '/contact-us' },
    ],
    Resources: [
      { label: 'Comparisons', href: '/product-comparison-engine' },
      { label: 'Tech Trends', href: '/tech-trends-2026' },
      { label: 'Live News', href: '/live-news-feed' },
    ],
    Community: [
      { label: 'Events', href: '/ces-2026-hub' },
      { label: 'Search', href: '/unified-search' },
      { label: 'Newsletter', href: '/newsletter-signup' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const socialLinks = [
    { 
      name: 'Twitter', 
      href: 'https://x.com/Gadgets_finds',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: 'Pinterest', 
      href: 'https://www.pinterest.com/best_gadgets_finds/',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
        </svg>
      )
    },
  ];

  return (
    <footer className="bg-brand-dark border-t border-slate-800">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="lg:col-span-2">
            <Link href="/homepage" className="flex items-center space-x-3 mb-4 md:mb-6 group">
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-black flex items-center justify-center transform transition-transform group-hover:scale-105 overflow-hidden">
                  <AppImage
                    src="/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png"
                    alt="Gadgets finds Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg md:text-xl text-brand-text-primary tracking-tight">
                  Gadgets Finds
                </span>
                <span className="font-mono text-xs text-brand-primary tracking-wider">Tech News & Reviews</span>
              </div>
            </Link>
            <p className="text-brand-text-secondary text-sm mb-3 md:mb-4">
              Discovering and sharing the best trending gadgets with honest reviews and recommendations.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-brand-primary rounded-lg flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-dark transform hover:scale-110"
                  aria-label={social?.name}
                >
                  <span className="text-brand-text-secondary hover:text-white transition-colors">
                    {social?.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks)?.map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-brand-text-primary mb-3 md:mb-4 text-sm md:text-base">{category}</h3>
              <ul className="space-y-2">
                {links?.map((link) => (
                  <li key={link?.label}>
                    <Link
                      href={link?.href}
                      className="text-brand-text-secondary hover:text-brand-primary text-sm transition-colors inline-block py-1"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-brand-text-secondary text-xs md:text-sm">
              {isHydrated ? `© ${currentYear}` : '© 2026'} Best Gadgets Finds LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;