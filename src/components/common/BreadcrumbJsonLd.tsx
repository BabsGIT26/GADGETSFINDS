'use client';

import { usePathname } from 'next/navigation';

const BASE = 'https://www.gadgets-finds.com';

// Words that should keep a fixed spelling when a URL slug becomes a name.
const WORDS: Record<string, string> = {
  ps5: 'PS5', rtx: 'RTX', usb: 'USB', oled: 'OLED', xdr: 'XDR', proled: 'PROLED', tb: 'TB', se: 'SE',
  iphone: 'iPhone', macbook: 'MacBook', i: 'i', ai: 'AI', gan: 'GaN', ssd: 'SSD', led: 'LED', hd: 'HD',
  m4: 'M4', m5: 'M5', s26: 'S26', s85h: 'S85H', g29: 'G29', z70: 'Z70', x: 'X', vs: 'vs', genz: 'GenZ',
  maggo: 'MagGo', imini: 'iMini', a30s: 'A30s', l60: 'L60', c10: 'C10', t90: 'T90', m210: 'M210', q7: 'Q7',
  '30w': '30W', '65w': '65W', '40mm': '40mm', '42mm': '42mm', '46mm': '46mm', '4tb': '4TB',
};

const NAMES: Record<string, string> = {
  'about-us': 'About Us',
  'contact-us': 'Contact',
  'privacy-policy': 'Privacy Policy',
  'terms-of-service': 'Terms of Service',
  cookies: 'Cookie Policy',
  'how-we-research': 'How We Research',
  'affiliate-disclosure': 'Affiliate Disclosure',
};

function nameFor(segment: string) {
  if (NAMES[segment]) return NAMES[segment];
  return segment
    .replace(/-article$/, '')
    .split('-')
    .map((w) => WORDS[w] ?? (/^\d/.test(w) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ')
    .replace('I Phone', 'iPhone');
}

/** BreadcrumbList structured data for every page except the home page. */
export default function BreadcrumbJsonLd() {
  const pathname = usePathname() || '/';
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0 || segments[0] === 'api') return null;

  const items = [{ name: 'Home', url: `${BASE}/` }];
  let path = '';
  for (const segment of segments) {
    path += `/${segment}`;
    items.push({ name: nameFor(decodeURIComponent(segment)), url: `${BASE}${path}` });
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
