import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Gadget {
  name: string;
  brand: string;
  category: string;
  price: string;
  rating: number;
  badge?: string;
  badgeColor?: string;
  image: string;
  alt: string;
  href: string;
  highlights: string[];
}

const gadgets: Gadget[] = [
  {
    name: 'MacBook Pro M4',
    brand: 'Apple',
    category: 'Laptops',
    price: 'From $1,999',
    rating: 4.9,
    badge: "Editor's Pick",
    badgeColor: 'bg-amber-500 text-white',
    image: '/assets/images/macbook_pro_m_four.png',
    alt: 'Apple MacBook Pro M4 laptop with Liquid Retina XDR display on a desk',
    href: '/macbook-pro-m4-article',
    highlights: ['M4 Pro chip', '24GB unified memory', '22-hr battery'],
  },
  {
    name: 'NVIDIA RTX 5090',
    brand: 'NVIDIA',
    category: 'GPUs',
    price: 'From $1,999',
    rating: 4.8,
    badge: 'Best GPU 2025',
    badgeColor: 'bg-green-600 text-white',
    image: '/assets/images/nvidia_rtx_six_zero_nine_zero_ti.png',
    alt: 'NVIDIA RTX 5090 graphics card with triple-fan cooling system',
    href: '/nvidia-rtx-6090-ti-article',
    highlights: ['32GB GDDR7', 'Blackwell architecture', '4K 240fps gaming'],
  },
  {
    name: 'Samsung Galaxy S26 Ultra',
    brand: 'Samsung',
    category: 'Smartphones',
    price: 'From $1,299',
    rating: 4.7,
    badge: 'Top Rated',
    badgeColor: 'bg-blue-600 text-white',
    image: '/assets/images/samsung_galaxy_s_twenty_six_ultra.png',
    alt: 'Samsung Galaxy S26 Ultra smartphone with S Pen and quad camera system',
    href: '/samsung-galaxy-s26-ultra-article',
    highlights: ['200MP quad camera', 'Snapdragon 8 Gen 4', 'S Pen included'],
  },
  {
    name: 'Tesla Optimus Gen 3',
    brand: 'Tesla',
    category: 'Robotics',
    price: '$20K–$30K target',
    rating: 4.6,
    badge: 'Most Anticipated',
    badgeColor: 'bg-red-600 text-white',
    image: '/assets/images/tesla_optimus_gen_three.png',
    alt: 'Tesla Optimus Gen 3 humanoid robot standing in a white studio environment',
    href: '/tesla-optimus-gen-3-article',
    highlights: ['22 DOF tendon-driven hands', 'AI5 chip + Grok AI', 'Factory deployment 2026'],
  },
];

const categories = ['All', 'Laptops', 'Smartphones', 'GPUs', 'Robotics'];

export default function GadgetsSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <Icon name="CpuChipIcon" size={14} variant="solid" className="text-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Top Gadgets 2026</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Gadgets Worth <span className="text-primary">Your Attention</span>
            </h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base max-w-lg">
              Handpicked hardware that's redefining what's possible — reviewed, rated, and ranked by our editors.
            </p>
          </div>
          <Link
            href="/product-comparison-engine"
            className="inline-flex items-center gap-2 px-5 py-3 border border-border rounded-lg text-foreground font-semibold text-sm hover:bg-muted transition-all shrink-0 self-start md:self-auto"
          >
            Compare Gadgets
            <Icon name="ScaleIcon" size={16} variant="outline" />
          </Link>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-default ${
                cat === 'All' ?'bg-primary text-primary-foreground border-primary' :'bg-card text-muted-foreground border-border'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Gadget cards — asymmetric grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {gadgets.map((gadget, i) => (
            <Link
              key={gadget.name}
              href={gadget.href}
              className={`group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col ${
                i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <AppImage
                  src={gadget.image}
                  alt={gadget.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {gadget.badge && (
                  <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full ${gadget.badgeColor}`}>
                    {gadget.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                  {gadget.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-primary font-bold uppercase tracking-wide mb-1">{gadget.brand}</p>
                <h3 className="text-foreground font-bold text-base md:text-lg group-hover:text-primary transition-colors mb-2">
                  {gadget.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-3.5 h-3.5 ${star <= Math.round(gadget.rating) ? 'text-amber-400' : 'text-muted'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{gadget.rating}/5</span>
                </div>

                {/* Highlights */}
                <ul className="space-y-1 mb-4 flex-1">
                  {gadget.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon name="CheckCircleIcon" size={12} variant="solid" className="text-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-border mt-auto">
                  <span className="text-sm font-bold text-foreground">{gadget.price}</span>
                  <span className="text-primary text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read Review <Icon name="ArrowRightIcon" size={12} variant="outline" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/product-comparison-engine"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all"
          >
            <Icon name="CpuChipIcon" size={18} variant="outline" />
            Explore All Gadgets & Compare
          </Link>
        </div>
      </div>
    </section>
  );
}
