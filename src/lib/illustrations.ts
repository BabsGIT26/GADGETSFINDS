/**
 * Original, hand-built SVG illustrations, one per product type.
 * They are generic drawings, NOT pictures of the real products, and use no Amazon,
 * manufacturer, or press imagery (Amazon Associates image rules).
 *
 * They are served as /assets/illustrations/<kind>.svg and, as PNG share images
 * for Open Graph / Twitter cards, from /og/<kind>. Both are prerendered at build time.
 *
 * Product data can carry an optional real `image` (for example a PA-API image URL
 * once the Amazon Product Advertising API is available). Use productImage(kind, image)
 * so the illustration is only a fallback.
 */

export const ILLUSTRATION_KINDS = [
  'phone', 'foldable', 'tablet', 'laptop', 'watch', 'headphones', 'earbuds',
  'charger', 'powerbank', 'cable', 'hub', 'ssd', 'gpu', 'console', 'controller',
  'game', 'vr', 'tv', 'streaming', 'smart-display', 'camera', 'tracker',
  'flashlight', 'webcam', 'tripod', 'phone-stand', 'cleaner', 'outlet', 'meter',
  'wheel', 'vacuum', 'stick-vacuum', 'gadget', 'deals', 'smart-home',
] as const;

export type IllustrationKind = (typeof ILLUSTRATION_KINDS)[number];

/** Human-readable nouns for alt text. */
export const ILLUSTRATION_NOUN: Record<IllustrationKind, string> = {
  phone: 'a smartphone', foldable: 'a foldable phone', tablet: 'a tablet', laptop: 'a laptop',
  watch: 'a smartwatch', headphones: 'over-ear headphones', earbuds: 'wireless earbuds',
  charger: 'a USB-C wall charger', powerbank: 'a portable power bank', cable: 'a USB-C cable',
  hub: 'a USB-C hub', ssd: 'an SSD drive', gpu: 'a graphics card', console: 'a game console',
  controller: 'a game controller', game: 'a video game case', vr: 'a VR headset', tv: 'a TV',
  streaming: 'a streaming stick and remote', 'smart-display': 'a smart display',
  camera: 'a home security camera', tracker: 'a Bluetooth tracker tag', flashlight: 'a mini flashlight',
  webcam: 'a webcam', tripod: 'a phone tripod', 'phone-stand': 'a phone stand wallet',
  cleaner: 'a screen cleaner spray', outlet: 'an outlet extender', meter: 'a USB-C power meter',
  wheel: 'a racing wheel', vacuum: 'a robot vacuum with dock', 'stick-vacuum': 'a cordless stick vacuum',
  gadget: 'a small gadget', deals: 'a deal tag', 'smart-home': 'smart home devices',
};

const ACCENT: Record<IllustrationKind, string> = {
  phone: '#2563eb', foldable: '#7c3aed', tablet: '#0ea5e9', laptop: '#6366f1', watch: '#10b981',
  headphones: '#8b5cf6', earbuds: '#06b6d4', charger: '#f59e0b', powerbank: '#f97316', cable: '#14b8a6',
  hub: '#64748b', ssd: '#ef4444', gpu: '#22c55e', console: '#3b82f6', controller: '#6366f1',
  game: '#e11d48', vr: '#a855f7', tv: '#0284c7', streaming: '#f97316', 'smart-display': '#0ea5e9',
  camera: '#16a34a', tracker: '#0891b2', flashlight: '#eab308', webcam: '#2563eb', tripod: '#0d9488',
  'phone-stand': '#db2777', cleaner: '#06b6d4', outlet: '#f59e0b', meter: '#22c55e', wheel: '#dc2626',
  vacuum: '#10b981', 'stick-vacuum': '#8b5cf6', gadget: '#f43f5e', deals: '#ef4444', 'smart-home': '#16a34a',
};

const B = '#1e293b';
const B2 = '#334155';
const D = '#0f172a';
const M = '#94a3b8';
const L = '#e2e8f0';

export function tint(hex: string, t: number): string {
  const n = parseInt(hex.slice(1), 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => Math.round(c + (255 - c) * t));
  return '#' + ch.map((c) => c.toString(16).padStart(2, '0')).join('');
}

function screen(x: number, y: number, w: number, h: number, A: string, r = 6): string {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="#0b1220"/>
<rect x="${x + w * 0.1}" y="${y + h * 0.14}" width="${w * 0.55}" height="${h * 0.09}" rx="${h * 0.045}" fill="${A}"/>
<rect x="${x + w * 0.1}" y="${y + h * 0.3}" width="${w * 0.38}" height="${h * 0.09}" rx="${h * 0.045}" fill="${A}" opacity=".6"/>
<rect x="${x + w * 0.1}" y="${y + h * 0.46}" width="${w * 0.8}" height="${h * 0.38}" rx="${Math.min(8, h * 0.08)}" fill="${tint(A, 0.55)}" opacity=".35"/>`;
}

function product(k: IllustrationKind, A: string): string {
  switch (k) {
    case 'phone':
      return `<rect x="122" y="34" width="76" height="152" rx="16" fill="${B}"/>${screen(128, 46, 64, 128, A, 10)}
<rect x="148" y="39" width="24" height="5" rx="2.5" fill="${D}"/>
<g transform="translate(206 70) rotate(12)"><rect width="48" height="96" rx="12" fill="${B2}"/><circle cx="14" cy="16" r="7" fill="${D}"/><circle cx="14" cy="34" r="7" fill="${D}"/><circle cx="32" cy="24" r="4" fill="${A}"/></g>`;
    case 'foldable':
      return `<rect x="88" y="44" width="72" height="136" rx="10" fill="${B}"/><rect x="160" y="44" width="72" height="136" rx="10" fill="${B2}"/>
${screen(94, 52, 64, 120, A, 6)}${screen(162, 52, 64, 120, A, 6)}<rect x="157" y="44" width="6" height="136" fill="${D}"/>`;
    case 'tablet':
      return `<rect x="72" y="46" width="176" height="128" rx="14" fill="${B}"/>${screen(82, 56, 156, 108, A, 8)}
<circle cx="160" cy="51" r="2.5" fill="${M}"/>`;
    case 'laptop':
      return `<rect x="86" y="52" width="148" height="100" rx="8" fill="${B}"/>${screen(94, 60, 132, 84, A, 4)}
<path d="M62 158 H258 L246 172 H74 Z" fill="${M}"/><rect x="62" y="152" width="196" height="8" rx="3" fill="#cbd5e1"/><rect x="144" y="152" width="32" height="4" rx="2" fill="${M}"/>`;
    case 'watch':
      return `<rect x="136" y="30" width="48" height="44" rx="10" fill="${tint(A, 0.2)}"/><rect x="136" y="146" width="48" height="44" rx="10" fill="${tint(A, 0.2)}"/>
<rect x="120" y="64" width="80" height="92" rx="24" fill="${B}"/><rect x="128" y="72" width="64" height="76" rx="18" fill="#0b1220"/>
<text x="160" y="112" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="22" font-weight="700" fill="#fff">10:09</text>
<circle cx="148" cy="130" r="5" fill="${A}"/><circle cx="160" cy="130" r="5" fill="#f59e0b"/><circle cx="172" cy="130" r="5" fill="#ef4444"/>
<rect x="200" y="96" width="7" height="20" rx="3" fill="${B2}"/>`;
    case 'headphones':
      return `<path d="M104 132 V108 C104 62 216 62 216 108 V132" stroke="${B}" stroke-width="14" fill="none" stroke-linecap="round"/>
<rect x="86" y="112" width="44" height="66" rx="18" fill="${B}"/><rect x="190" y="112" width="44" height="66" rx="18" fill="${B}"/>
<rect x="96" y="122" width="24" height="46" rx="10" fill="${A}" opacity=".85"/><rect x="200" y="122" width="24" height="46" rx="10" fill="${A}" opacity=".85"/>`;
    case 'earbuds':
      return `<rect x="104" y="96" width="112" height="84" rx="34" fill="#f8fafc" stroke="${M}" stroke-width="3"/><path d="M106 124 H214" stroke="${M}" stroke-width="3"/>
<circle cx="160" cy="146" r="5" fill="${A}"/>
<g transform="translate(118 44) rotate(-18)"><circle cx="16" cy="16" r="16" fill="#f8fafc" stroke="${M}" stroke-width="3"/><rect x="10" y="26" width="12" height="34" rx="6" fill="#f8fafc" stroke="${M}" stroke-width="3"/></g>
<g transform="translate(182 38) rotate(18)"><circle cx="16" cy="16" r="16" fill="#f8fafc" stroke="${M}" stroke-width="3"/><rect x="10" y="26" width="12" height="34" rx="6" fill="#f8fafc" stroke="${M}" stroke-width="3"/></g>`;
    case 'charger':
      return `<rect x="96" y="60" width="84" height="96" rx="16" fill="#f8fafc" stroke="${M}" stroke-width="3"/>
<rect x="118" y="36" width="8" height="28" rx="2" fill="${M}"/><rect x="150" y="36" width="8" height="28" rx="2" fill="${M}"/>
<rect x="126" y="100" width="24" height="9" rx="4.5" fill="${D}"/><rect x="126" y="118" width="24" height="9" rx="4.5" fill="${D}"/>
<path d="M136 80 L130 92 H140 L134 104" stroke="${A}" stroke-width="4" fill="none" stroke-linejoin="round"/>
<path d="M150 156 C150 192 230 188 232 150" stroke="${D}" stroke-width="7" fill="none" stroke-linecap="round"/><rect x="224" y="126" width="16" height="28" rx="4" fill="${B2}"/>`;
    case 'powerbank':
      return `<rect x="96" y="52" width="128" height="132" rx="20" fill="${B}"/><rect x="108" y="64" width="104" height="44" rx="8" fill="#0b1220"/>
<text x="160" y="95" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="24" font-weight="700" fill="${A}">86%</text>
<rect x="120" y="128" width="80" height="12" rx="6" fill="${B2}"/><rect x="120" y="128" width="62" height="12" rx="6" fill="${A}"/>
<rect x="136" y="160" width="20" height="8" rx="4" fill="${D}"/><rect x="164" y="160" width="20" height="8" rx="4" fill="${D}"/>`;
    case 'cable':
      return `<path d="M92 70 C92 150 228 60 228 150" stroke="${B}" stroke-width="10" fill="none" stroke-linecap="round"/>
<path d="M92 70 C92 150 228 60 228 150" stroke="${A}" stroke-width="3" fill="none" stroke-dasharray="6 8" stroke-linecap="round"/>
<rect x="80" y="38" width="24" height="36" rx="6" fill="${B2}"/><rect x="86" y="28" width="12" height="12" rx="3" fill="${M}"/>
<rect x="216" y="146" width="24" height="36" rx="6" fill="${B2}"/><rect x="222" y="180" width="12" height="12" rx="3" fill="${M}"/>`;
    case 'hub':
      return `<rect x="70" y="92" width="170" height="56" rx="14" fill="${M}"/><rect x="70" y="92" width="170" height="10" rx="5" fill="#cbd5e1"/>
<rect x="88" y="114" width="26" height="14" rx="3" fill="${D}"/><rect x="124" y="114" width="20" height="14" rx="3" fill="${D}"/><rect x="154" y="114" width="20" height="14" rx="3" fill="${D}"/><rect x="184" y="116" width="16" height="9" rx="4.5" fill="${D}"/>
<circle cx="222" cy="120" r="4" fill="${A}"/><path d="M240 120 C262 120 258 70 276 70" stroke="${D}" stroke-width="6" fill="none"/>`;
    case 'ssd':
      return `<rect x="64" y="96" width="192" height="52" rx="6" fill="${B}"/><rect x="72" y="104" width="44" height="36" rx="3" fill="${D}"/>
<rect x="124" y="104" width="36" height="36" rx="3" fill="${D}"/><rect x="168" y="104" width="36" height="36" rx="3" fill="${D}"/>
<rect x="212" y="110" width="30" height="24" rx="3" fill="${A}"/><path d="M246 100 V144" stroke="#fbbf24" stroke-width="6" stroke-dasharray="3 3"/>`;
    case 'gpu':
      return `<rect x="56" y="78" width="208" height="88" rx="12" fill="${B}"/><rect x="56" y="78" width="208" height="10" rx="5" fill="${A}"/>
<circle cx="108" cy="124" r="30" fill="${D}"/><circle cx="108" cy="124" r="22" fill="none" stroke="${B2}" stroke-width="6" stroke-dasharray="10 6"/><circle cx="108" cy="124" r="7" fill="${M}"/>
<circle cx="190" cy="124" r="30" fill="${D}"/><circle cx="190" cy="124" r="22" fill="none" stroke="${B2}" stroke-width="6" stroke-dasharray="10 6"/><circle cx="190" cy="124" r="7" fill="${M}"/>
<rect x="76" y="166" width="120" height="10" fill="#fbbf24"/>`;
    case 'console':
      return `<path d="M120 40 Q150 36 156 60 L156 182 L112 182 Q100 110 120 40 Z" fill="#f8fafc" stroke="${M}" stroke-width="3"/>
<rect x="150" y="48" width="30" height="134" rx="6" fill="${D}"/><path d="M174 40 Q206 36 212 64 Q222 120 206 182 L176 182 L176 40 Z" fill="#f8fafc" stroke="${M}" stroke-width="3"/>
<rect x="158" y="70" width="14" height="4" rx="2" fill="${A}"/>`;
    case 'controller':
      return `<path d="M92 92 Q110 74 160 80 Q210 74 228 92 Q250 140 236 168 Q224 182 206 162 L188 142 H132 L114 162 Q96 182 84 168 Q70 140 92 92 Z" fill="${B}"/>
<rect x="112" y="100" width="8" height="26" rx="2" fill="${M}"/><rect x="103" y="109" width="26" height="8" rx="2" fill="${M}"/>
<circle cx="200" cy="100" r="5" fill="${A}"/><circle cx="212" cy="112" r="5" fill="#f59e0b"/><circle cx="188" cy="112" r="5" fill="#ef4444"/><circle cx="200" cy="124" r="5" fill="#10b981"/>
<circle cx="140" cy="134" r="9" fill="${D}"/><circle cx="180" cy="134" r="9" fill="${D}"/>`;
    case 'game':
      return `<rect x="110" y="38" width="100" height="144" rx="6" fill="${A}"/><rect x="110" y="38" width="100" height="22" rx="6" fill="${D}"/>
<rect x="120" y="70" width="80" height="80" rx="4" fill="${tint(A, 0.4)}"/><path d="M128 140 L150 100 L166 124 L178 110 L194 140 Z" fill="${D}" opacity=".5"/><circle cx="182" cy="88" r="8" fill="#fde68a"/>
<rect x="120" y="158" width="50" height="8" rx="4" fill="#fff" opacity=".8"/>`;
    case 'vr':
      return `<path d="M104 96 C80 96 74 116 104 118" stroke="${B2}" stroke-width="8" fill="none"/><path d="M216 96 C240 96 246 116 216 118" stroke="${B2}" stroke-width="8" fill="none"/>
<rect x="96" y="80" width="128" height="72" rx="30" fill="#f8fafc" stroke="${M}" stroke-width="3"/><rect x="108" y="92" width="104" height="44" rx="20" fill="${D}"/>
<circle cx="136" cy="114" r="10" fill="${A}" opacity=".6"/><circle cx="184" cy="114" r="10" fill="${A}" opacity=".6"/>`;
    case 'tv':
      return `<rect x="58" y="44" width="204" height="122" rx="6" fill="${D}"/>${screen(64, 50, 192, 110, A, 3)}
<rect x="150" y="166" width="20" height="14" fill="${B2}"/><rect x="118" y="178" width="84" height="8" rx="4" fill="${B}"/>`;
    case 'streaming':
      return `<rect x="70" y="100" width="110" height="40" rx="10" fill="${B}"/><rect x="180" y="112" width="26" height="16" rx="3" fill="${M}"/>
<circle cx="96" cy="120" r="5" fill="${A}"/>
<rect x="222" y="54" width="36" height="128" rx="18" fill="${B2}"/><circle cx="240" cy="80" r="11" fill="${D}"/><circle cx="240" cy="80" r="4" fill="${A}"/>
<circle cx="232" cy="108" r="4" fill="${M}"/><circle cx="248" cy="108" r="4" fill="${M}"/><circle cx="232" cy="124" r="4" fill="${M}"/><circle cx="248" cy="124" r="4" fill="${M}"/>`;
    case 'smart-display':
      return `<path d="M96 170 L120 64 H220 L236 170 Z" fill="#cbd5e1"/><rect x="104" y="48" width="140" height="98" rx="10" fill="${B}"/>${screen(112, 56, 124, 82, A, 6)}`;
    case 'camera':
      return `<rect x="208" y="70" width="18" height="70" rx="4" fill="${M}"/><path d="M216 110 H186" stroke="${M}" stroke-width="8"/>
<rect x="86" y="74" width="112" height="76" rx="30" fill="#f8fafc" stroke="${M}" stroke-width="3"/>
<circle cx="126" cy="112" r="24" fill="${D}"/><circle cx="126" cy="112" r="12" fill="#1e3a5f"/><circle cx="121" cy="107" r="4" fill="#fff" opacity=".8"/><circle cx="172" cy="98" r="4" fill="${A}"/>`;
    case 'tracker':
      return `<circle cx="160" cy="116" r="54" fill="#f8fafc" stroke="${M}" stroke-width="3"/><circle cx="160" cy="116" r="38" fill="${L}"/>
<circle cx="160" cy="116" r="12" fill="${A}"/><path d="M160 62 V44" stroke="${M}" stroke-width="4"/><circle cx="160" cy="38" r="9" fill="none" stroke="${B2}" stroke-width="5"/>
<path d="M226 92 Q238 116 226 140" stroke="${A}" stroke-width="4" fill="none" opacity=".7"/><path d="M240 82 Q258 116 240 150" stroke="${A}" stroke-width="4" fill="none" opacity=".4"/>`;
    case 'flashlight':
      return `<path d="M210 100 L268 72 V160 L210 132 Z" fill="#fde68a" opacity=".7"/>
<rect x="84" y="98" width="100" height="36" rx="12" fill="${B}"/><rect x="180" y="92" width="32" height="48" rx="8" fill="${B2}"/><circle cx="208" cy="116" r="14" fill="#fef9c3"/>
<rect x="110" y="110" width="16" height="12" rx="3" fill="${A}"/><circle cx="72" cy="116" r="12" fill="none" stroke="${M}" stroke-width="5"/>`;
    case 'webcam':
      return `<rect x="96" y="70" width="128" height="58" rx="28" fill="${B}"/><circle cx="160" cy="99" r="20" fill="${D}"/><circle cx="160" cy="99" r="10" fill="#1e3a5f"/><circle cx="156" cy="95" r="3" fill="#fff"/>
<circle cx="200" cy="90" r="4" fill="${A}"/><path d="M160 128 V150" stroke="${B2}" stroke-width="8"/><path d="M124 168 L160 150 L196 168" stroke="${B2}" stroke-width="8" fill="none" stroke-linecap="round"/>`;
    case 'tripod':
      return `<rect x="132" y="34" width="56" height="96" rx="10" fill="${B}"/>${screen(137, 40, 46, 84, A, 6)}
<rect x="152" y="130" width="16" height="14" fill="${B2}"/><path d="M160 144 L118 192 M160 144 L202 192 M160 144 V194" stroke="${B2}" stroke-width="7" stroke-linecap="round"/>`;
    case 'phone-stand':
      return `<path d="M100 170 L132 90 L156 90 L130 170 Z" fill="${A}"/><rect x="132" y="42" width="72" height="132" rx="14" fill="${B}"/>${screen(138, 50, 60, 116, A, 8)}
<rect x="96" y="166" width="120" height="12" rx="6" fill="${tint(A, 0.2)}"/>`;
    case 'cleaner':
      return `<rect x="132" y="70" width="56" height="112" rx="14" fill="${B}"/><rect x="138" y="96" width="44" height="56" rx="6" fill="${A}" opacity=".85"/>
<rect x="142" y="46" width="36" height="28" rx="6" fill="${B2}"/><rect x="178" y="52" width="18" height="8" rx="3" fill="${B2}"/>
<circle cx="214" cy="52" r="3" fill="${A}"/><circle cx="226" cy="44" r="3" fill="${A}" opacity=".7"/><circle cx="226" cy="60" r="3" fill="${A}" opacity=".7"/>
<rect x="196" y="150" width="56" height="34" rx="4" fill="#cbd5e1"/><path d="M196 160 H252 M196 170 H252" stroke="#f8fafc" stroke-width="2"/>`;
    case 'outlet':
      return `<rect x="100" y="36" width="56" height="50" rx="8" fill="#f8fafc" stroke="${M}" stroke-width="3"/><rect x="118" y="52" width="5" height="14" fill="${D}"/><rect x="133" y="52" width="5" height="14" fill="${D}"/>
<rect x="122" y="86" width="12" height="70" fill="#f8fafc" stroke="${M}" stroke-width="3"/>
<rect x="96" y="150" width="128" height="40" rx="10" fill="#f8fafc" stroke="${M}" stroke-width="3"/>
<rect x="114" y="164" width="16" height="10" rx="2" fill="${D}"/><rect x="152" y="164" width="16" height="10" rx="2" fill="${D}"/><rect x="190" y="164" width="16" height="10" rx="2" fill="${A}"/>`;
    case 'meter':
      return `<rect x="104" y="70" width="112" height="84" rx="14" fill="${B}"/><rect x="116" y="82" width="88" height="46" rx="6" fill="#0b1220"/>
<text x="160" y="104" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="16" font-weight="700" fill="${A}">20.1V</text>
<text x="160" y="122" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="13" fill="#fbbf24">3.02A</text>
<rect x="80" y="104" width="24" height="16" rx="4" fill="${M}"/><rect x="216" y="104" width="24" height="16" rx="4" fill="${M}"/>`;
    case 'wheel':
      return `<rect x="150" y="150" width="20" height="34" fill="${B2}"/><rect x="110" y="178" width="100" height="10" rx="5" fill="${B}"/>
<circle cx="160" cy="104" r="62" fill="none" stroke="${B}" stroke-width="16"/><path d="M104 112 H216" stroke="${B}" stroke-width="16"/><path d="M160 112 V160" stroke="${B}" stroke-width="14"/>
<circle cx="160" cy="112" r="18" fill="${B2}"/><circle cx="160" cy="112" r="7" fill="${A}"/><rect x="154" y="40" width="12" height="10" rx="2" fill="${A}"/>`;
    case 'vacuum':
      return `<rect x="176" y="46" width="84" height="132" rx="12" fill="${B}"/><rect x="186" y="58" width="64" height="44" rx="6" fill="${B2}"/><circle cx="242" cy="66" r="4" fill="${A}"/>
<ellipse cx="128" cy="176" rx="76" ry="10" fill="#0b1f3a" opacity=".12"/><ellipse cx="128" cy="150" rx="74" ry="26" fill="${B2}"/><ellipse cx="128" cy="144" rx="74" ry="26" fill="${B}"/>
<ellipse cx="128" cy="140" rx="22" ry="8" fill="${D}"/><circle cx="128" cy="139" r="4" fill="${A}"/><path d="M62 150 Q128 176 194 150" stroke="${A}" stroke-width="3" fill="none" opacity=".7"/>`;
    case 'stick-vacuum':
      return `<path d="M182 46 L132 172" stroke="${M}" stroke-width="10" stroke-linecap="round"/><rect x="172" y="36" width="52" height="40" rx="12" fill="${A}"/><rect x="200" y="70" width="18" height="34" rx="6" fill="${B}"/>
<path d="M98 174 H170 Q178 174 176 184 H96 Q92 174 98 174 Z" fill="${B}"/><rect x="104" y="180" width="64" height="4" fill="${A}"/>`;
    case 'smart-home':
      return `<path d="M90 120 L160 64 L230 120 V182 H90 Z" fill="#f8fafc" stroke="${M}" stroke-width="3"/><rect x="146" y="140" width="28" height="42" rx="3" fill="${B2}"/>
<rect x="104" y="128" width="28" height="22" rx="3" fill="${tint(A, 0.5)}"/><rect x="188" y="128" width="28" height="22" rx="3" fill="${tint(A, 0.5)}"/>
<circle cx="160" cy="104" r="10" fill="${D}"/><circle cx="160" cy="104" r="4" fill="${A}"/>`;
    case 'deals':
      return `<path d="M100 60 H190 L240 116 L178 178 L100 100 Z" fill="${A}"/><circle cx="122" cy="82" r="10" fill="#fff"/>
<text x="176" y="130" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="34" font-weight="800" fill="#fff" transform="rotate(45 176 124)">%</text>
<path d="M112 70 C80 40 60 70 84 92" stroke="${B2}" stroke-width="4" fill="none"/>`;
    case 'gadget':
    default:
      return `<rect x="104" y="64" width="112" height="112" rx="24" fill="${B}"/><rect x="118" y="78" width="84" height="48" rx="8" fill="#0b1220"/>
<rect x="128" y="90" width="44" height="7" rx="3.5" fill="${A}"/><rect x="128" y="104" width="28" height="7" rx="3.5" fill="${A}" opacity=".6"/>
<circle cx="136" cy="148" r="10" fill="${B2}"/><circle cx="184" cy="148" r="10" fill="${A}"/><path d="M216 92 h18 M216 120 h18" stroke="${M}" stroke-width="5" stroke-linecap="round"/>`;
  }
}

export function isIllustrationKind(k: string): k is IllustrationKind {
  return (ILLUSTRATION_KINDS as readonly string[]).includes(k);
}

/** Build an illustration as an SVG string (viewBox 320x240). */
export function illustrationSvg(kind: string, opts: { label?: string } = {}): string {
  const k: IllustrationKind = isIllustrationKind(kind) ? kind : 'gadget';
  const A = ACCENT[k];
  const label = opts.label ?? `Illustration of ${ILLUSTRATION_NOUN[k]} (not a product photo)`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" width="640" height="480" role="img" aria-label="${label}"><title>${label}</title>
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${tint(A, 0.9)}"/><stop offset="1" stop-color="${tint(A, 0.74)}"/></linearGradient></defs>
<rect width="320" height="240" fill="url(#g)"/>
<circle cx="282" cy="30" r="78" fill="${A}" opacity=".12"/><circle cx="30" cy="226" r="62" fill="${A}" opacity=".1"/>
<ellipse cx="160" cy="206" rx="120" ry="9" fill="#0b1f3a" opacity=".08"/>
${product(k, A)}
</svg>`;
}

/** Public path of the static illustration file. */
export const illustrationPath = (kind: IllustrationKind) => `/assets/illustrations/${kind}.svg`;

/** Absolute PNG share image (Open Graph / Twitter) for a kind. */
export const illustrationOg = (kind: IllustrationKind) => `https://www.gadgets-finds.com/og/${kind}`;

/** Use a real product image when one is set (e.g. PA-API), otherwise the illustration. */
export function productImage(kind: IllustrationKind, image?: string | null): string {
  return image || illustrationPath(kind);
}

/** Alt text for an illustration standing in for a product. */
export function illustrationAlt(src: string, alt: string): string {
  if (!src.includes('/assets/illustrations/') || /^illustration/i.test(alt)) return alt;
  return `Illustration, not a product photo: ${alt}`;
}
