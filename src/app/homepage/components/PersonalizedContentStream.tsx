'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CardImage } from '@/components/common/Media';
import Icon from '@/components/ui/AppIcon';
import { illustrationAlt } from '@/lib/illustrations';
import { isSaleSeason } from '@/lib/sale-season';

interface ContentItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  alt: string;
  author: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  fit?: "contain";
}

const PersonalizedContentStream = ({ photos = {} }: { photos?: Record<string, string> }) => {
  const [activeFilter, setActiveFilter] = useState('See All');

  const filters = ['See All', 'Latest', 'Trending', 'Reviews', 'Guides'];

  const contentItems: ContentItem[] = [
    {
      id: 29,
      title: isSaleSeason() ? "Black Friday Gaming PC Parts" : "Gaming PC Parts",
      excerpt: "CPU, graphics card, motherboard, memory, SSD, power supply, cooler, and case. Today's Amazon price, percent off, and amount off.",
      category: "Buying Guide",
      image: "/assets/illustrations/gpu.svg",
      alt: "MSI RTX 3060 Ventus 2X graphics card",
      author: "Gadgets Finds",
      publishedDate: "November 27, 2026",
      readTime: "6 min read",
      tags: ["Gaming PC", "Black Friday", "GPU", "Buying Guide"],
      fit: "contain",
    },
    {
      id: 27,
      title: isSaleSeason() ? "Black Friday Robot Vacuums" : "Robot Vacuum Deals",
      excerpt: "Dock, mop station, or a robot you empty yourself. Short notes on the models showing on Amazon, then the listing.",
      category: "Buying Guide",
      image: "/assets/illustrations/vacuum.svg",
      alt: "Black robot vacuum on a Black Friday graphic",
      author: "Gadgets Finds",
      publishedDate: "November 19, 2026",
      readTime: "6 min read",
      tags: ["Robot Vacuum", "Black Friday", "Buying Guide"],
    },
    {
      id: 28,
      title: isSaleSeason() ? "Black Friday Smartwatches" : "Smartwatch Deals",
      excerpt: "Apple Watch, Garmin, a WHOOP membership, or a budget GPS watch. The phone decides it before the listing does.",
      category: "Buying Guide",
      image: "/assets/illustrations/watch.svg",
      alt: "Apple Watch Series 12 GPS 42mm in black",
      author: "Gadgets Finds",
      publishedDate: "November 20, 2026",
      readTime: "7 min read",
      tags: ["Smartwatch", "Black Friday", "Apple Watch", "Garmin"],
      fit: "contain",
    },
    {
      id: 26,
      title: "Samsung 990 PRO 4TB Review",
      excerpt: "PCIe 4.0 NVMe up to 7,450 MB/s. The MZ-V9P4T0B/AM box has no heatsink. Read that before you buy it for a PS5.",
      category: "Storage",
      image: "/assets/illustrations/ssd.svg",
      alt: "Samsung 990 PRO 4TB NVMe SSD",
      author: "Gadgets Finds",
      publishedDate: "November 18, 2026",
      readTime: "8 min read",
      tags: ["Samsung", "SSD", "990 PRO", "Storage"],
      fit: "contain",
    },
    {
      id: 25,
      title: "Best Budget Robot Vacuums Under $300 (2026)",
      excerpt: "Strong cleaning, better navigation, and solid pet hair performance without spending $500+.",
      category: "Buying Guide",
      image: "/assets/illustrations/vacuum.svg",
      alt: "eufy RoboVac G30 robot vacuum",
      author: "Gadgets Finds",
      publishedDate: "November 17, 2026",
      readTime: "8 min read",
      tags: ["Robot Vacuum", "Roborock", "Budget", "Buying Guide"],
    },
    {
      id: 24,
      title: "Best PS5 Accessories Worth Buying in 2026",
      excerpt: "SSD expansion, headsets, DualSense Edge, charging docks — what actually improves the PS5 experience.",
      category: "Buying Guide",
      image: "/assets/illustrations/controller.svg",
      alt: "DualSense Edge wireless controller",
      author: "Gadgets Finds",
      publishedDate: "November 17, 2026",
      readTime: "8 min read",
      tags: ["PS5", "Accessories", "SSD", "Buying Guide"],
    },
    {
      id: 23,
      title: "Roborock vs Roomba in 2026: Which Is Better?",
      excerpt: "Direct comparison on suction, navigation, mopping, and value. Roborock wins for most people.",
      category: "Comparison",
      image: "/assets/illustrations/vacuum.svg",
      alt: "Roborock Qrevo S Pro robot vacuum and mop",
      author: "Gadgets Finds",
      publishedDate: "November 17, 2026",
      readTime: "10 min read",
      tags: ["Roborock", "Roomba", "Robot Vacuum", "Comparison"],
    },
    {
      id: 22,
      title: "Best Cheap Tablets Under $150 in 2026",
      excerpt: "Fire HD 10, Galaxy Tab A9+, Fire HD 8, and Lenovo Tab One. New listings only, with the prices that actually fit under $150.",
      category: "Buying Guide",
      image: "/assets/illustrations/tablet.svg",
      alt: "Amazon Fire HD 10 tablet",
      author: "Gadgets Finds",
      publishedDate: "November 17, 2026",
      readTime: "8 min read",
      tags: ["Tablets", "Fire HD", "Budget", "Buying Guide"],
      fit: "contain",
    },
    {
      id: 21,
      title: "Best Portable Chargers for Travel in 2026",
      excerpt: "Four new Anker banks: 20,000mAh at 87W, a pocket Nano, a 99.54Wh laptop Prime, and a 3-in-1 with a wall plug.",
      category: "Buying Guide",
      image: "/assets/illustrations/powerbank.svg",
      alt: "Anker 20,000mAh power bank",
      author: "Gadgets Finds",
      publishedDate: "November 17, 2026",
      readTime: "7 min read",
      tags: ["Power Bank", "Travel", "Anker", "Buying Guide"],
      fit: "contain",
    },
    {
      id: 20,
      title: "Best Smartwatches Under $350 in 2026",
      excerpt: "Apple Watch SE 3, Galaxy Watch 7, Forerunner 165, and Pixel Watch 3, matched to the phone you already own.",
      category: "Buying Guide",
      image: "/assets/illustrations/watch.svg",
      alt: "Apple Watch SE 3",
      author: "Gadgets Finds",
      publishedDate: "November 17, 2026",
      readTime: "8 min read",
      tags: ["Smartwatch", "Apple Watch", "Garmin", "Buying Guide"],
    },
    {
      id: 19,
      title: "Best Mini Gadgets Under $30 in 2026",
      excerpt: "An Anker 45W charger, a 5-in-1 hub, a 100W cable two-pack, and a Galaxy SmartTag2, each under $30.",
      category: "Buying Guide",
      image: "/assets/illustrations/charger.svg",
      alt: "Anker Nano 45W charger",
      author: "Gadgets Finds",
      publishedDate: "November 17, 2026",
      readTime: "6 min read",
      tags: ["Mini Gadgets", "Accessories", "Budget", "Buying Guide"],
    },
    {
      id: 18,
      title: "Best Amazon Deals This Week",
      excerpt: "Fire TV Stick 4K, 4K Plus, 4K Select, and Fire TV Cube. Open the guide, then read the live price on Amazon.",
      category: "Deals",
      image: "/assets/illustrations/streaming.svg",
      alt: "Amazon Fire TV Stick 4K with remote",
      author: "Gadgets Finds",
      publishedDate: "November 17, 2026",
      readTime: "8 min read",
      tags: ["Amazon", "Deals", "Fire TV", "Guide"],
    },
    {
      id: 17,
      title: "Logitech G29 Driving Force Racing Wheel and Pedals",
      excerpt: "Dual-motor force feedback, stainless steel paddle shifters, leather cover. For PS5, PS4, PC and Mac. Price changes.",
      category: "Gaming",
      image: "/assets/illustrations/wheel.svg",
      alt: "Logitech G29 Driving Force Racing Wheel and Pedals",
      author: "Gadgets Finds",
      publishedDate: "November 15, 2026",
      readTime: "5 min read",
      tags: ["Logitech", "G29", "Racing Wheel", "PS5"],
    },
    {
      id: 16,
      title: "Samsung 65-Inch S85H Series OLED 4K Smart TV (2026)",
      excerpt: "Vision AI, NQ4 AI Gen2, OLED HDR, 4K AI Upscaling, Premium Gaming Pack. Price and stock change.",
      category: "TVs",
      image: "/assets/illustrations/tv.svg",
      alt: "Samsung 65-Inch S85H OLED",
      author: "Gadgets Finds",
      publishedDate: "November 7, 2026",
      readTime: "5 min read",
      tags: ["Samsung", "OLED", "TV", "S85H"],
      fit: "contain",
    },
    {
      id: 15,
      title: "PlayStation 5 Pro — 2TB",
      excerpt: "Stronger GPU, PSSR, faster ray tracing, 2TB SSD, DualSense. No disc drive. Price and stock change.",
      category: "Gaming",
      image: "/assets/illustrations/console.svg",
      alt: "PlayStation 5 Pro",
      author: "Gadgets Finds",
      publishedDate: "November 7, 2026",
      readTime: "5 min read",
      tags: ["PS5", "PS5 Pro", "Sony", "Console"],
    },
    {
      id: 14,
      title: "MacBook Air 13-inch M5 — 16GB, 512GB, Silver",
      excerpt: "2026 Air with M5, 13.6-inch Liquid Retina, Touch ID, and Wi-Fi 7. The price on Amazon is the one that counts.",
      category: "Laptops",
      image: "/assets/illustrations/laptop.svg",
      alt: "MacBook Air 13-inch M5 Silver",
      author: "Gadgets Finds",
      publishedDate: "November 4, 2026",
      readTime: "5 min read",
      tags: ["Apple", "MacBook Air", "M5", "Laptop"],
    },
    {
      id: 13,
      title: "Xbox Series X Digital 1TB Robot White",
      excerpt: "All-digital Series X with 1TB SSD, true 4K up to 120 FPS, matching white controller. Price and stock change.",
      category: "Gaming",
      image: "/assets/illustrations/console.svg",
      alt: "Xbox Series X Digital Robot White",
      author: "Gadgets Finds",
      publishedDate: "October 31, 2026",
      readTime: "5 min read",
      tags: ["Xbox", "Series X", "Digital", "Robot White"],
      fit: "contain",
    },
    {
      id: 12,
      title: "Apple's First Touchscreen MacBook Pro with PROLED XDR OLED Display",
      excerpt: "Tandem OLED, 2000 nits, touch, Dynamic Island, M5 Pro & Max. The biggest MacBook Pro redesign in years.",
      category: "News",
      image: "/assets/illustrations/laptop.svg",
      alt: "Apple MacBook Pro with PROLED XDR Display",
      author: "Gadgets Finds",
      publishedDate: "October 29, 2026",
      readTime: "8 min read",
      tags: ["Apple", "MacBook Pro", "OLED", "Touchscreen"],
    },
    {
      id: 11,
      title: "Lowest Prices for NVIDIA RTX 50-Series GPUs on Amazon Right Now",
      excerpt: "Current lowest prices for RTX 5090, 5080, 5070 Ti, 5070, and 5060 Ti as prices skyrocket. Check stock and deals.",
      category: "Deals",
      image: "/assets/illustrations/gpu.svg",
      alt: "ASUS ROG Astral GeForce RTX 5090",
      author: "Gadgets Finds",
      publishedDate: "October 28, 2026",
      readTime: "5 min read",
      tags: ["GPUs", "NVIDIA", "RTX 50", "Deals", "Amazon"],
    },
    { id: 1,
      title: "iPhone Duo Cases",
        excerpt: "Clear, silicone, leather, and protective options designed for the iPhone Duo.",
        category: "Accessories",
        image: "/assets/illustrations/foldable.svg",
        alt: "iPhone Duo Cases",
        author: "Gadgets Finds",
        publishedDate: "October 24, 2026",
        readTime: "3 min read",
        tags: ["iPhone Duo", "Cases", "Accessories"],
    },
    {
      id: 3,
      title: "Amazon Outlet explained",
      excerpt: "Public clearance and overstock — not a secret club. How to read Outlet vs Warehouse.",
      category: "Guide",
      image: "/assets/illustrations/deals.svg",
      alt: "Gadgets Finds",
      author: "",
      publishedDate: "2026-09-28",
      readTime: "6 min read",
      tags: ["Amazon", "Outlet", "Guide"]
    },
    {
      id: 5,
      title: "Smart Home Security Systems: 2026 Comparison and Recommendations",
      excerpt: "Comprehensive analysis of the top smart home security systems, from DIY options to professional monitoring.",
      category: "Comparison",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e3b7e4f7-1765090734789.png",
      alt: "Modern smart home security camera mounted on white wall",
      author: "",
      publishedDate: "Jul 11, 2026",
      readTime: "15 min read",
      tags: ["Smart Home", "Security", "Comparison"]
    },
    {
      id: 6,
      title: "iPhone 16 Pro vs Samsung Galaxy S26 Ultra: Ultimate Camera Showdown",
      excerpt: "How iPhone 16 Pro and Galaxy S26 Ultra compare on paper for photography.",
      category: "Comparison",
      image: "https://images.unsplash.com/photo-1730226172459-2cb1baa93762",
      alt: "iPhone and Samsung Galaxy smartphones side by side comparison on white background",
      author: "",
      publishedDate: "Jun 28, 2026",
      readTime: "10 min read",
      tags: ["Smartphones", "Photography", "Comparison"]
    },
    {
      id: 8,
      title: "Sony WH-2000XM6 Review: The New King of Noise Cancellation",
      excerpt: "Sony's latest flagship headphones set a new standard for active noise cancellation and audio quality.",
      category: "Review",
      image: "/assets/illustrations/headphones.svg",
      alt: "Sony WH-1000XM6 wireless headphones",
      author: "",
      publishedDate: "Aug 7, 2026",
      readTime: "8 min read",
      tags: ["Audio", "Headphones", "Review"]
    },
    {
      id: 9,
      title: "Best Laptops for Developers in 2026: Complete Buying Guide",
      excerpt: "A 2026 buying guide to laptops for coding, from budget machines to workstations.",
      category: "Buying Guide",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_178ed799d-1785088751486.png",
      alt: "Modern laptop with code editor displayed on screen in dark workspace",
      author: "",
      publishedDate: "2026-03-18",
      readTime: "12 min read",
      tags: ["Laptops", "Development", "Buying Guide"]
    },
    {
      id: 10,
      title: "Best Amazon Deals This Week",
      excerpt: "Fire TV prices checked on November 17, 2026. Confirm the current price before you buy.",
      category: "Deals",
      image: "/assets/illustrations/streaming.svg",
      alt: "Amazon Fire TV Stick 4K with remote",
      author: "Gadgets Finds",
      publishedDate: "November 17, 2026",
      readTime: "8 min read",
      tags: ["Amazon", "Fire TV", "Deals"],
    },
  ];

  const articleRoutes: { [key: number]: string } = {
    29: "/black-friday-gaming-pc",
    27: "/black-friday-robot-vacuums",
    28: "/black-friday-smartwatches",
    26: "/samsung-990-pro-4tb-article",
    25: "/best-budget-robot-vacuums-under-300",
    24: "/best-ps5-accessories-2026",
    23: "/roborock-vs-roomba-2026",
    22: "/best-cheap-tablets-under-150",
    21: "/best-portable-chargers-for-travel",
    20: "/best-smartwatches-under-350",
    19: "/best-mini-gadgets-under-30",
    18: "/best-amazon-deals-this-week",
    17: "/best-ps5-accessories-2026#racing-wheel",
    16: "/samsung-65-s85h-oled-article",
    15: "/best-gaming-consoles-2026#playstation-5-pro",
    14: "/best-macbooks-2026#macbook-air-13-m5",
    13: "/best-gaming-consoles-2026#xbox-series-x-digital",
    12: "/best-macbooks-2026#macbook-pro-proled-xdr",
    11: "/best-graphics-cards-2026",
    1: "/iphone-duo-cases",
    3: "/amazon-outlet-guide",
    5: "/smart-home-security-systems-article",
    6: "/best-phones-2026#iphone-17-vs-galaxy-s26-ultra",
    8: "/best-noise-cancelling-headphones-2026#sony-wh-1000xm6",
    9: "/best-laptops-developers-2026",
    10: "/best-amazon-deals-this-week",
  };

  const getFilteredItems = (): ContentItem[] => {
    switch (activeFilter) {
      case "Latest":
        return [...contentItems].sort((a, b) => {
          const dateA = new Date(a.publishedDate).getTime();
          const dateB = new Date(b.publishedDate).getTime();
          return dateB - dateA;
        });
      case "Trending":
        return contentItems.filter(
          (item) => item.category === "News" || item.category === "Comparison"
        );
      case "Reviews":
        return contentItems.filter((item) => item.category === "Review");
      case "Guides":
        return contentItems.filter(
          (item) => item.category === "Guide" || item.category === "Buying Guide"
        );
      case "See All":
      default:
        return contentItems;
    }
  };

  const filteredItems = getFilteredItems();

  const guideIds = [29, 28, 27, 26, 25, 24, 23, 22, 21];
  const guideItems = guideIds
    .map((id) => contentItems.find((item) => item.id === id))
    .filter((item): item is ContentItem => Boolean(item));

  // Server and client render the same full list, so nothing shifts when the page hydrates.
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h2 className="text-2xl font-bold text-foreground">Recommended</h2>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <Link
            key={item.id}
            href={articleRoutes[item.id] || "/"}
            className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <CardImage src={photos[articleRoutes[item.id]] ?? item.image} alt={item.alt} priority={index < 3} />
            <div className="p-5">
              <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded mb-2">
                {item.category}
              </span>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{item.excerpt}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Icon name="Clock" size={14} />
                {item.readTime}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PersonalizedContentStream;
