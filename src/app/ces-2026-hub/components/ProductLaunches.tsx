'use client';

import { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Product {
  id: number;
  name: string;
  company: string;
  category: string;
  launchDate: string;
  image: string;
  alt: string;
  description: string;
  featured: boolean;
  saved: boolean;
}

const realProducts: Product[] = [
{
  id: 1,
  name: "Galaxy Z TriFold",
  company: "Samsung",
  category: "Smartphones",
  launchDate: "Jan 6, 2026",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18d39db87-1786556939690.png",
  alt: "Samsung Galaxy Z TriFold smartphone unfolded into a 10-inch tablet with three display panels",
  description: "Samsung's groundbreaking tri-fold smartphone unfolds into a 10-inch AMOLED tablet. Features Snapdragon 8 Elite, 200MP camera, Samsung DeX desktop mode, and three-app multitasking. Winner of Best Overall at CES 2026.",
  featured: true,
  saved: false
},
{
  id: 2,
  name: "ThinkPad X9 Aura Edition",
  company: "Lenovo",
  category: "Laptops",
  launchDate: "Jan 7, 2026",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11a3753a5-1772836056896.png",
  alt: "Lenovo ThinkPad X9 Aura Edition ultrabook laptop with slim profile on desk",
  description: "Powered by Intel Core Ultra 9 with Intel Arc graphics, 32GB LPDDR5X RAM, and a stunning 14\" OLED display with 120Hz refresh rate. Unveiled at Lenovo Tech World keynote at CES 2026.",
  featured: true,
  saved: false
},
{
  id: 3,
  name: "CLOiD Home Robot",
  company: "LG Electronics",
  category: "Robotics",
  launchDate: "Jan 6, 2026",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_185fbac57-1786556939994.png",
  alt: "LG CLOiD AI-powered home robot with two articulated arms and wheeled base performing household tasks",
  description: "World-premiered at CES 2026, LG CLOiD is an AI-powered home robot with two 7-DOF arms, five-fingered hands, and autonomous navigation. Folds laundry, prepares meals, and integrates with LG's ThinQ smart home ecosystem.",
  featured: true,
  saved: false
},
{
  id: 4,
  name: "Zenbook DUO (2026)",
  company: "ASUS",
  category: "Laptops",
  launchDate: "Jan 7, 2026",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19abb063a-1786556940675.png",
  alt: "ASUS Zenbook DUO 2026 dual-screen laptop with two 14-inch OLED displays open on a desk",
  description: "CES 2026 Innovation Award winner featuring dual 14\" 3K OLED displays, Intel Core Ultra X9 Series 3 processor, 99Wh dual-battery, and full Ceraluminum chassis. Redefines dual-screen productivity.",
  featured: false,
  saved: false
},
{
  id: 5,
  name: "AFEELA 1 Electric Vehicle",
  company: "Sony Honda Mobility",
  category: "Automotive",
  launchDate: "Jan 6, 2026",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19bb0a252-1786556940162.png",
  alt: "Sony Honda AFEELA 1 electric vehicle pre-production model on display at CES 2026 with sleek futuristic design",
  description: "Sony Honda Mobility's AFEELA 1 debuted as a pre-production model at CES 2026, with US customer deliveries confirmed for late 2026. Features 40 sensors, AI-powered ADAS, PlayStation 5 game streaming, and a $90,000 starting price.",
  featured: false,
  saved: false
},
{
  id: 6,
  name: "Xperia 1 VII",
  company: "Sony",
  category: "Smartphones",
  launchDate: "Jan 9, 2026",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14a9bb6d6-1772414317361.png",
  alt: "Sony Xperia 1 VII flagship smartphone with Zeiss camera optics and 4K OLED display",
  description: "Professional-grade smartphone with Zeiss T* optics, 4K 120Hz OLED display, Snapdragon 8 Elite, and real-time AI subject tracking. Showcased at Sony's CES 2026 Innovation Day.",
  featured: false,
  saved: false
}];

const STORAGE_KEY = 'ces2026_saved_products';

export default function ProductLaunches() {
  const [products, setProducts] = useState<Product[]>(realProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openShareId, setOpenShareId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const shareRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Load saved state from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const savedIds: number[] = JSON.parse(saved);
        setProducts(realProducts.map((p) => ({ ...p, saved: savedIds.includes(p.id) })));
      }
    } catch {




      // ignore parse errors
    }}, []); // Close share dropdown when clicking outside
  useEffect(() => {const handleClickOutside = (e: MouseEvent) => {
        if (openShareId !== null) {
          const ref = shareRefs.current[openShareId];
          if (ref && !ref.contains(e.target as Node)) {
            setOpenShareId(null);
          }
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [openShareId]);

  const toggleSaved = (productId: number) => {
    const updated = products.map((p) =>
    p.id === productId ? { ...p, saved: !p.saved } : p
    );
    setProducts(updated);
    try {
      const savedIds = updated.filter((p) => p.saved).map((p) => p.id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
    } catch {




      // ignore storage errors
    }};const getProductUrl = (product: Product) => {const base = typeof window !== 'undefined' ? window.location.origin : 'https://gadgets-finds.com';
    return `${base}/ces-2026-hub?product=${encodeURIComponent(product.name)}`;
  };

  const handleCopyLink = (product: Product) => {
    const url = getProductUrl(product);
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(product.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const handleShareTo = (platform: string, product: Product) => {
    const url = encodeURIComponent(getProductUrl(product));
    const text = encodeURIComponent(`Check out the ${product.name} by ${product.company} — unveiled at CES 2026!`);
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      reddit: `https://reddit.com/submit?url=${url}&title=${text}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`
    };
    window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
    setOpenShareId(null);
  };

  const categories = ["All", "Smartphones", "Laptops", "Robotics", "Automotive"];

  const filteredProducts = selectedCategory === "All" ?
  products :
  products.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Notable Product Announcements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The most significant products unveiled at CES 2026 in Las Vegas
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) =>
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            selectedCategory === category ?
            'bg-primary text-primary-foreground' :
            'bg-card text-muted-foreground hover:bg-muted'}`
            }>
            
              {category}
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) =>
          <div
            key={product.id}
            className={`bg-card rounded-xl overflow-hidden transition-all hover:shadow-xl ${
            product.featured ? 'ring-2 ring-brand-primary' : ''}`
            }>
            
              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={product.image}
                alt={product.alt}
                className="w-full h-full object-cover transition-transform hover:scale-110" />
              
                {product.featured &&
              <div className="absolute top-3 left-3 px-3 py-1 bg-brand-primary text-white text-xs font-semibold rounded-full">
                    FEATURED
                  </div>
              }
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                  {product.category}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-display font-bold text-xl text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-brand-primary font-semibold">{product.company}</p>
                </div>

                <p className="text-sm text-foreground mb-4 line-clamp-3">
                  {product.description}
                </p>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Icon name="CalendarIcon" size={16} variant="outline" />
                  <span>Announced {product.launchDate}</span>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Save Product button — persists to localStorage */}
                  <button
                  onClick={() => toggleSaved(product.id)}
                  title={product.saved ? 'Remove from saved' : 'Save this product'}
                  className={`flex-1 px-4 py-2 rounded-lg font-semibold text-sm transition-all flex items-center justify-center space-x-2 ${
                  product.saved ?
                  'bg-success text-success-foreground' :
                  'bg-primary text-primary-foreground hover:bg-primary/90'}`
                  }>
                  
                    <Icon
                    name={product.saved ? "CheckIcon" : "BookmarkIcon"}
                    size={16}
                    variant="solid" />
                  
                    <span>{product.saved ? 'Saved' : 'Save Product'}</span>
                  </button>

                  {/* Share button — functional dropdown */}
                  <div
                  className="relative"
                  ref={(el) => {shareRefs.current[product.id] = el;}}>
                  
                    <button
                    onClick={() => setOpenShareId(openShareId === product.id ? null : product.id)}
                    title="Share this product"
                    className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors">
                    
                      <Icon name="ShareIcon" size={20} variant="outline" />
                    </button>

                    {openShareId === product.id &&
                  <div className="absolute bottom-full right-0 mb-2 w-52 bg-card border border-border rounded-xl shadow-2xl z-50 overflow-hidden">
                        <div className="px-4 py-2 border-b border-border">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Share Product</p>
                        </div>
                        <div className="p-1">
                          {/* Copy Link */}
                          <button
                        onClick={() => handleCopyLink(product)}
                        className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm text-foreground">
                        
                            <Icon name={copiedId === product.id ? "CheckIcon" : "LinkIcon"} size={16} variant="outline" />
                            <span>{copiedId === product.id ? 'Link Copied!' : 'Copy Link'}</span>
                          </button>
                          {/* X / Twitter */}
                          <button
                        onClick={() => handleShareTo('twitter', product)}
                        className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm text-foreground">
                        
                            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            <span>Share on X</span>
                          </button>
                          {/* Facebook */}
                          <button
                        onClick={() => handleShareTo('facebook', product)}
                        className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm text-foreground">
                        
                            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            <span>Share on Facebook</span>
                          </button>
                          {/* LinkedIn */}
                          <button
                        onClick={() => handleShareTo('linkedin', product)}
                        className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm text-foreground">
                        
                            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            <span>Share on LinkedIn</span>
                          </button>
                          {/* Reddit */}
                          <button
                        onClick={() => handleShareTo('reddit', product)}
                        className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm text-foreground">
                        
                            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                            </svg>
                            <span>Share on Reddit</span>
                          </button>
                          {/* WhatsApp */}
                          <button
                        onClick={() => handleShareTo('whatsapp', product)}
                        className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm text-foreground">
                        
                            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>Share on WhatsApp</span>
                          </button>
                        </div>
                      </div>
                  }
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}