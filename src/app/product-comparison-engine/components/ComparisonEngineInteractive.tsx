'use client';

import { useState, useEffect } from 'react';
import ComparisonFilters, { type FilterState } from './ComparisonFilters';
import ProductCard, { type Product } from './ProductCard';
import ComparisonTable from './ComparisonTable';
import SearchBar from './SearchBar';
import Icon from '@/components/ui/AppIcon';

const ComparisonEngineInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    priceRange: [0, 5000],
    brands: [],
    features: [],
    sortBy: 'relevance'
  });
  const [comparedProducts, setComparedProducts] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockProducts: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 16" M4 Max',
    brand: 'Apple',
    category: 'laptops',
    image: "/assets/illustrations/laptop.svg",
    imageAlt: 'MacBook Pro 16-inch with M4 Max chip featuring sleek aluminum design and Liquid Retina XDR display',
    features: ['M4 Max Chip', '64GB RAM', '2TB SSD', 'Liquid Retina XDR'],
    isNew: true,
    affiliateLink: 'https://www.amazon.com/s?k=MacBook+Pro+16+M4+Max&tag=gadgetsfindswebsite-20'
  },
  {
    id: '2',
    name: 'Dell XPS 17 (2025)',
    brand: 'Dell',
    category: 'laptops',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15e1f1c63-1772977582405.png",
    imageAlt: 'Modern Dell XPS 17 laptop with thin bezels displaying colorful screen on white desk',
    features: ['Intel Core Ultra 9', '32GB RAM', '1TB SSD', '4K OLED Display'],
    affiliateLink: 'https://www.amazon.com/s?k=Dell+XPS+17&tag=gadgetsfindswebsite-20'
  },
  {
    id: '3',
    name: 'iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17b82fb7a-1772960574407.png",
    imageAlt: 'Official Apple iPhone 16 Pro Max in Black Titanium showing the titanium design and pro camera system',
    features: ['A18 Pro Chip', '8GB RAM', 'Titanium Design', 'ProMotion 120Hz'],
    isNew: true,
    affiliateLink: 'https://www.amazon.com/s?k=iPhone+16+Pro+Max&tag=gadgetsfindswebsite-20'
  },
  {
    id: '4',
    name: 'Samsung Galaxy S25 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1294d2923-1771486444013.png",
    imageAlt: 'Official Samsung Galaxy S25 Ultra smartphone in Titanium Black with S Pen and titanium frame design',
    features: ['Snapdragon 8 Elite', '12GB RAM', '200MP Camera', 'S Pen Support'],
    affiliateLink: 'https://www.amazon.com/s?k=Samsung+Galaxy+S25+Ultra&tag=gadgetsfindswebsite-20'
  },
  {
    id: '5',
    name: 'Google Pixel 9 Pro',
    brand: 'Google',
    category: 'smartphones',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e439c8ea-1772089098053.png",
    imageAlt: 'Google Pixel 9 Pro in Porcelain color showing the rear camera bar design',
    features: ['Tensor G4', 'AI Photography', '16GB RAM', 'Pure Android'],
    isNew: true,
    affiliateLink: 'https://www.amazon.com/s?k=Google+Pixel+9+Pro&tag=gadgetsfindswebsite-20'
  },
  {
    id: '6',
    name: 'iPad Pro 13" M4',
    brand: 'Apple',
    category: 'tablets',
    image: "https://images.unsplash.com/photo-1631464736523-887526d95b77",
    imageAlt: 'iPad Pro 13-inch M4 with Magic Keyboard and Apple Pencil on minimalist white desk',
    features: ['M4 Chip', 'OLED Display', 'Face ID', 'Thunderbolt 4'],
    affiliateLink: 'https://www.amazon.com/s?k=iPad+Pro+13+M4&tag=gadgetsfindswebsite-20'
  },
  {
    id: '7',
    name: 'Lenovo ThinkPad X1 Carbon Gen 12',
    brand: 'Lenovo',
    category: 'laptops',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f9d6a982-1772126566528.png",
    imageAlt: 'Black Lenovo ThinkPad X1 Carbon Gen 12 laptop with red trackpoint on office desk',
    features: ['Intel Core Ultra 7', '16GB RAM', '512GB SSD', 'Carbon Fiber'],
    affiliateLink: 'https://www.amazon.com/s?k=Lenovo+ThinkPad+X1+Carbon+Gen+12&tag=gadgetsfindswebsite-20'
  },
  {
    id: '8',
    name: 'HP Spectre x360 16',
    brand: 'HP',
    category: 'laptops',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_170c6cb06-1772837119100.png",
    imageAlt: 'Silver HP Spectre x360 convertible laptop in tent mode displaying colorful graphics',
    features: ['Intel Core i7', '32GB RAM', '1TB SSD', '360° Hinge'],
    affiliateLink: 'https://www.amazon.com/s?k=HP+Spectre+x360+16&tag=gadgetsfindswebsite-20'
  },
  {
    id: '9',
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'audio',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c4b2e322-1768327279480.png",
    imageAlt: 'Premium black Sony WH-1000XM5 wireless headphones with noise cancellation on wooden surface',
    features: ['Active Noise Cancellation', '30hr Battery', 'LDAC Support', 'Multipoint'],
    affiliateLink: 'https://www.amazon.com/s?k=Sony+WH-1000XM5&tag=gadgetsfindswebsite-20'
  },
  {
    id: '10',
    name: 'AirPods Pro 2',
    brand: 'Apple',
    category: 'audio',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10bc08a3c-1766254612533.png",
    imageAlt: 'White Apple AirPods Pro 2 with USB-C charging case on minimalist background',
    features: ['Adaptive Audio', 'USB-C Charging', 'H2 Chip', 'Spatial Audio'],
    affiliateLink: 'https://www.amazon.com/s?k=AirPods+Pro+2&tag=gadgetsfindswebsite-20'
  },
  {
    id: '11',
    name: 'Microsoft Surface Pro 10',
    brand: 'Microsoft',
    category: 'tablets',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10b4f6345-1773358566504.png",
    imageAlt: 'Microsoft Surface Pro 10 tablet with detachable keyboard and Surface Pen',
    features: ['Intel Core Ultra', '16GB RAM', '512GB SSD', 'Windows 11 Pro'],
    affiliateLink: 'https://www.amazon.com/s?k=Microsoft+Surface+Pro+10&tag=gadgetsfindswebsite-20'
  },
  {
    id: '12',
    name: 'Samsung Galaxy Tab S10 Ultra',
    brand: 'Samsung',
    category: 'tablets',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d0f18894-1772087077652.png",
    imageAlt: 'Samsung Galaxy Tab S10 Ultra with S Pen displaying vibrant AMOLED screen',
    features: ['Snapdragon 8 Gen 3', '12GB RAM', '14.6" AMOLED', 'S Pen Included'],
    affiliateLink: 'https://www.amazon.com/s?k=Samsung+Galaxy+Tab+S10+Ultra&tag=gadgetsfindswebsite-20'
  },
  {
    id: '13',
    name: 'ASUS ROG Zephyrus G16',
    brand: 'ASUS',
    category: 'laptops',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c1e4216f-1764710898137.png",
    imageAlt: 'ASUS ROG Zephyrus G16 2024 gaming laptop in Eclipse Gray with slim aluminum chassis and Slash Lighting',
    features: ['RTX 4090', 'Intel Core i9', '32GB RAM', '240Hz Display'],
    isNew: true,
    affiliateLink: 'https://www.amazon.com/s?k=ASUS+ROG+Zephyrus+G16&tag=gadgetsfindswebsite-20'
  },
  {
    id: '14',
    name: 'Razer Blade 16',
    brand: 'Razer',
    category: 'laptops',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17d636c84-1767530490600.png",
    imageAlt: 'Razer Blade 16 2024 gaming laptop with black aluminum unibody chassis and green Razer logo',
    features: ['RTX 4090', 'Intel Core i9', '32GB RAM', 'Mini-LED Display'],
    affiliateLink: 'https://www.amazon.com/s?k=Razer+Blade+16&tag=gadgetsfindswebsite-20'
  },
  {
    id: '15',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    category: 'smartphones',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f1c2baf3-1772382695096.png",
    imageAlt: 'OnePlus 12 smartphone with curved display and Hasselblad camera system',
    features: ['Snapdragon 8 Gen 3', '16GB RAM', '100W Charging', 'Hasselblad Camera'],
    affiliateLink: 'https://www.amazon.com/s?k=OnePlus+12&tag=gadgetsfindswebsite-20'
  },
  {
    id: '16',
    name: 'Nothing Phone 2',
    brand: 'Nothing',
    category: 'smartphones',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1be84acf1-1765620864263.png",
    imageAlt: 'Nothing Phone 2 with transparent back design and Glyph Interface lighting',
    features: ['Snapdragon 8+ Gen 1', '12GB RAM', 'Glyph Interface', 'Nothing OS 2.5'],
    affiliateLink: 'https://www.amazon.com/s?k=Nothing+Phone+2&tag=gadgetsfindswebsite-20'
  },
  {
    id: '17',
    name: 'Apple Watch Ultra 2',
    brand: 'Apple',
    category: 'wearables',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e392164d-1772127394733.png",
    imageAlt: 'Apple Watch Ultra 2 with titanium case and orange Alpine Loop band on wrist',
    features: ['S9 Chip', '60hr Battery', 'Precision GPS', 'Titanium Case'],
    affiliateLink: 'https://www.amazon.com/s?k=Apple+Watch+Ultra+2&tag=gadgetsfindswebsite-20'
  },
  {
    id: '18',
    name: 'Samsung Galaxy Watch 7',
    brand: 'Samsung',
    category: 'wearables',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a6225d4e-1772058626574.png",
    imageAlt: 'Samsung Galaxy Watch 7 with round display and stainless steel bezel on dark background',
    features: ['Exynos W1000', 'BioActive Sensor', '40hr Battery', 'Sapphire Crystal'],
    affiliateLink: 'https://www.amazon.com/s?k=Samsung+Galaxy+Watch+7&tag=gadgetsfindswebsite-20'
  },
  {
    id: '19',
    name: 'Garmin Fenix 8 Solar',
    brand: 'Garmin',
    category: 'wearables',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fc52244a-1772282555800.png",
    imageAlt: 'Garmin Fenix 8 Solar rugged smartwatch with solar charging bezel and sport band',
    features: ['Solar Charging', '28-Day Battery', 'Multi-Band GPS', 'Dive Computer'],
    affiliateLink: 'https://www.amazon.com/s?k=Garmin+Fenix+8+Solar&tag=gadgetsfindswebsite-20'
  },
  {
    id: '20',
    name: 'Sony PlayStation 5 Pro',
    brand: 'Sony',
    category: 'gaming',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_110e30074-1785355757060.png",
    imageAlt: 'Sony PlayStation 5 Pro console in white and black design standing upright on entertainment center',
    features: ['Custom AMD GPU', '2TB SSD', '8K Support', 'Ray Tracing'],
    isNew: true,
    affiliateLink: 'https://www.amazon.com/s?k=Sony+PlayStation+5+Pro&tag=gadgetsfindswebsite-20'
  },
  {
    id: '21',
    name: 'Xbox Series X',
    brand: 'Microsoft',
    category: 'gaming',
    image: "https://images.unsplash.com/photo-1620815023653-f65690227267",
    imageAlt: 'Xbox Series X gaming console tower with controller on dark gaming setup',
    features: ['Custom AMD Zen 2', '1TB NVMe SSD', 'Game Pass Ultimate', '120fps Gaming'],
    affiliateLink: 'https://www.amazon.com/s?k=Xbox+Series+X&tag=gadgetsfindswebsite-20'
  },
  {
    id: '22',
    name: 'Nintendo Switch 2',
    brand: 'Nintendo',
    category: 'gaming',
    image: "https://images.unsplash.com/photo-1580841153191-c125597fd4a9",
    imageAlt: 'Nintendo Switch 2 handheld gaming console with detachable Joy-Con controllers',
    features: ['NVIDIA Custom Chip', '4K Docked', 'Mouse Joy-Con', '9hr Battery'],
    isNew: true,
    affiliateLink: 'https://www.amazon.com/s?k=Nintendo+Switch+2&tag=gadgetsfindswebsite-20'
  },
  {
    id: '23',
    name: 'DJI Mavic 3 Pro',
    brand: 'DJI',
    category: 'drones',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14097d5f9-1771889912474.png",
    imageAlt: 'DJI Mavic 3 Pro drone in flight over scenic mountain landscape with triple camera gimbal',
    features: ['Hasselblad Camera', '43-Min Flight', 'Omnidirectional Obstacle', '4K/120fps'],
    affiliateLink: 'https://www.amazon.com/s?k=DJI+Mavic+3+Pro&tag=gadgetsfindswebsite-20'
  },
  {
    id: '24',
    name: 'DJI Mini 4K',
    brand: 'DJI',
    category: 'drones',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15f8de671-1771673198897.png",
    imageAlt: 'Small compact DJI Mini 4K drone with folded arms on white background',
    features: ['4K/60fps', '34-Min Flight', 'Under 249g', 'Level 5 Wind Resistance'],
    affiliateLink: 'https://www.amazon.com/s?k=DJI+Mini+4K&tag=gadgetsfindswebsite-20'
  },
  {
    id: '25',
    name: 'Sony A7R V',
    brand: 'Sony',
    category: 'cameras',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13429e37a-1770708158611.png",
    imageAlt: 'Sony A7R V mirrorless camera with large lens on photographer studio table',
    features: ['61MP Full-Frame', '8K Video', 'AI Autofocus', 'In-Body Stabilization'],
    affiliateLink: 'https://www.amazon.com/s?k=Sony+A7R+V&tag=gadgetsfindswebsite-20'
  },
  {
    id: '26',
    name: 'Canon EOS R6 Mark II',
    brand: 'Canon',
    category: 'cameras',
    image: "https://images.unsplash.com/photo-1603778509452-a8f8fd963357",
    imageAlt: 'Canon EOS R6 Mark II mirrorless camera with 24-70mm lens on wooden surface',
    features: ['40MP Sensor', '40fps Burst', 'Dual Pixel AF', '6K RAW Video'],
    affiliateLink: 'https://www.amazon.com/s?k=Canon+EOS+R6+Mark+II&tag=gadgetsfindswebsite-20'
  },
  {
    id: '27',
    name: 'Meta Quest 3',
    brand: 'Meta',
    category: 'vr-ar',
    image: "https://images.unsplash.com/photo-1660100970983-645655a09b3e",
    imageAlt: 'Meta Quest 3 VR headset with controllers on white background showing mixed reality capabilities',
    features: ['Snapdragon XR2 Gen 2', '4K+ Display', 'Mixed Reality', '2.2hr Battery'],
    affiliateLink: 'https://www.amazon.com/s?k=Meta+Quest+3&tag=gadgetsfindswebsite-20'
  },
  {
    id: '28',
    name: 'Apple Vision Pro',
    brand: 'Apple',
    category: 'vr-ar',
    image: "https://images.unsplash.com/photo-1724076109458-e83ddbe9ae64",
    imageAlt: 'Apple Vision Pro spatial computing headset with EyeSight display on clean surface',
    features: ['M2 + R1 Chip', 'Micro-OLED', 'EyeSight Display', 'visionOS 2'],
    affiliateLink: 'https://www.amazon.com/s?k=Apple+Vision+Pro&tag=gadgetsfindswebsite-20'
  },
  {
    id: '29',
    name: 'Amazon Echo Hub',
    brand: 'Amazon',
    category: 'smart-home',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb4a2ed9-1773063761224.png",
    imageAlt: 'Amazon Echo Hub smart home control panel with touchscreen display on kitchen counter',
    features: ['8" Touchscreen', 'Matter Support', 'Alexa Built-In', 'Smart Home Control'],
    affiliateLink: 'https://www.amazon.com/s?k=Amazon+Echo+Hub&tag=gadgetsfindswebsite-20'
  },
  {
    id: '30',
    name: 'Google Nest Hub Max',
    brand: 'Google',
    category: 'smart-home',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15976b73c-1772455024194.png",
    imageAlt: 'Google Nest Hub Max smart display with Google Assistant showing weather on screen',
    features: ['10" HD Display', 'Face Match', 'Google Assistant', 'Nest Cam Built-In'],
    affiliateLink: 'https://www.amazon.com/s?k=Google+Nest+Hub+Max&tag=gadgetsfindswebsite-20'
  },
  {
    id: '31',
    name: 'Bose QuietComfort Ultra',
    brand: 'Bose',
    category: 'audio',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1557d5265-1772058625496.png",
    imageAlt: 'Bose QuietComfort Ultra headphones with premium cushioned ear cups on white background',
    features: ['World-Class ANC', 'Immersive Audio', '24hr Battery', 'CustomTune Tech'],
    affiliateLink: 'https://www.amazon.com/s?k=Bose+QuietComfort+Ultra&tag=gadgetsfindswebsite-20'
  },
  {
    id: '32',
    name: 'Samsung Galaxy Buds 3 Pro',
    brand: 'Samsung',
    category: 'audio',
    image: "https://images.unsplash.com/photo-1721767462673-24305b9e948c",
    imageAlt: 'Samsung Galaxy Buds 3 Pro earbuds with charging case on gradient background',
    features: ['Blade Design', 'Intelligent ANC', '30hr Total Battery', 'Hi-Fi Sound'],
    isNew: true,
    affiliateLink: 'https://www.amazon.com/s?k=Samsung+Galaxy+Buds+3+Pro&tag=gadgetsfindswebsite-20'
  },
  {
    id: '33',
    name: 'NVIDIA Shield TV Pro',
    brand: 'NVIDIA',
    category: 'smart-home',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_100bce9a0-1765181023079.png",
    imageAlt: 'NVIDIA Shield TV Pro streaming device with remote control on entertainment setup',
    features: ['Tegra X1+ Chip', '4K HDR AI Upscaling', 'GeForce NOW', 'Dolby Vision'],
    affiliateLink: 'https://www.amazon.com/s?k=NVIDIA+Shield+TV+Pro&tag=gadgetsfindswebsite-20'
  },
  {
    id: '34',
    name: 'GoPro Hero 13 Black',
    brand: 'GoPro',
    category: 'cameras',
    image: "https://images.unsplash.com/photo-1686885868974-8985a4bc946c",
    imageAlt: 'GoPro Hero 13 Black action camera mounted on helmet showing rugged waterproof design',
    features: ['5.3K/60fps', 'HyperSmooth 7.0', 'Waterproof 33ft', 'Enduro Battery'],
    isNew: true,
    affiliateLink: 'https://www.amazon.com/s?k=GoPro+Hero+13+Black&tag=gadgetsfindswebsite-20'
  },
  {
    id: '35',
    name: 'Asus ROG Ally X',
    brand: 'ASUS',
    category: 'gaming',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_112762484-1773298732433.png",
    imageAlt: 'ASUS ROG Ally X handheld gaming PC with RGB accents and game on screen',
    features: ['AMD Ryzen Z1 Extreme', '24GB RAM', '1TB SSD', '7" 120Hz Display'],
    isNew: true,
    affiliateLink: 'https://www.amazon.com/s?k=Asus+ROG+Ally+X&tag=gadgetsfindswebsite-20'
  }];


  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch =
    searchQuery === '' ||
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
    filters.category === 'all' || product.category === filters.category;

    const matchesBrands =
    filters.brands.length === 0 ||
    filters.brands.includes(product.brand.toLowerCase());

    return matchesSearch && matchesCategory && matchesBrands;
  });

  const handleCompareToggle = (productId: string) => {
    setComparedProducts((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      if (prev.length >= 4) {
        return prev;
      }
      return [...prev, productId];
    });
  };

  const handleClearComparison = () => {
    setComparedProducts([]);
    setShowComparison(false);
  };

  const comparedProductsData = mockProducts.filter((p) =>
  comparedProducts.includes(p.id)
  );

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded-lg w-3/4"></div>
            <div className="h-16 bg-muted rounded-lg"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="h-96 bg-muted rounded-lg"></div>
              <div className="lg:col-span-3 space-y-4">
                {[1, 2, 3].map((i) =>
                <div key={i} className="h-64 bg-muted rounded-lg"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="bg-gradient-to-br from-brand-secondary/10 via-brand-primary/5 to-transparent py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground">
              Product Comparison Engine
            </h1>
            <p className="text-lg text-muted-foreground">
              Compare key features side by side, then check the current price on Amazon
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        {comparedProducts.length > 0 &&
        <div className="mb-6 bg-primary/10 border border-primary/20 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="ScaleIcon" size={20} variant="outline" className="text-primary" />
              <span className="font-medium text-foreground">
                {comparedProducts.length} product{comparedProducts.length !== 1 ? 's' : ''} selected
              </span>
            </div>
            <button
            onClick={() => setShowComparison(!showComparison)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold text-sm hover:bg-primary/90 transition-colors">

              {showComparison ? 'Hide' : 'Show'} Comparison
            </button>
          </div>
        }

        {showComparison && comparedProducts.length > 0 &&
        <div className="mb-8">
            <ComparisonTable
            products={comparedProductsData}
            onRemove={handleCompareToggle}
            onClear={handleClearComparison} />

          </div>
        }

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <ComparisonFilters onFilterChange={setFilters} />
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} of {mockProducts.length} products
              </p>
              <div className="flex items-center space-x-2">
                <button
                  className="p-2 border border-border rounded-md hover:bg-muted transition-colors"
                  aria-label="Grid view">

                  <Icon name="Squares2X2Icon" size={18} variant="outline" />
                </button>
                <button
                  className="p-2 border border-border rounded-md hover:bg-muted transition-colors"
                  aria-label="List view">

                  <Icon name="ListBulletIcon" size={18} variant="outline" />
                </button>
              </div>
            </div>

            {filteredProducts.length === 0 ?
            <div className="bg-card rounded-lg border border-border p-12 text-center">
                <div className="max-w-md mx-auto space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                    <Icon
                    name="MagnifyingGlassIcon"
                    size={32}
                    variant="outline"
                    className="text-muted-foreground" />

                  </div>
                  <h3 className="font-display font-semibold text-xl text-foreground">
                    No Products Found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filters or search query to find what you're looking for.
                  </p>
                </div>
              </div> :

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) =>
              <ProductCard
                key={product.id}
                product={product}
                onCompare={handleCompareToggle}
                isComparing={comparedProducts.includes(product.id)} />

              )}
              </div>
            }
          </div>
        </div>
      </div>
    </div>);

};

export default ComparisonEngineInteractive;