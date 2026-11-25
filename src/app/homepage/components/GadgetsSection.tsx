"use client";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import { useState } from "react";
import Link from "next/link";
import { CardImage } from "@/components/common/Media";
import Icon from "@/components/ui/AppIcon";
import { isSaleSeason } from "@/lib/sale-season";

interface Gadget {
  name: string;
  brand: string;
  category: string;
  badge?: string;
  badgeColor?: string;
  image: string;
  alt: string;
  href: string;
  highlights: string[];
  contain?: boolean;
}

const gadgets: Gadget[] = [
    {
    name: "16.3-inch MacBook Pro",
    brand: "Apple",
    category: "Laptops",
    badge: "PROLED",
    badgeColor: "bg-zinc-800 text-white",
    image: "/assets/images/macbook-pro-16-proled-amazon.jpg",
    alt: "Silver MacBook Pro with PROLED XDR display",
    href: "/macbook-pro-16-proled-xdr-m5-pro",
    highlights: ["M5 Pro, 24GB, 1TB", "16.3-inch touch OLED", "Silver"],
    contain: true,
  },
    {
    name: "Black Friday robot vacuums",
    brand: "Buying guide",
    category: "Robotics",
    badge: "Black Friday",
    badgeColor: "bg-red-600 text-white",
    image: "/assets/illustrations/vacuum.svg",
    alt: "Black robot vacuum on a Black Friday graphic",
    href: "/black-friday-robot-vacuums",
    highlights: ["Dock or no dock", "Mop or vacuum only", "Read the note first"],
  },
    {
    name: "Black Friday smartwatches",
    brand: "Buying guide",
    category: "Wearables",
    badge: "Black Friday",
    badgeColor: "bg-red-600 text-white",
    image: "/assets/illustrations/watch.svg",
    alt: "Apple Watch Series 12 GPS 42mm in black",
    href: "/black-friday-smartwatches",
    highlights: ["iPhone or Android", "GPS or cellular", "WHOOP is a membership"],
    contain: true,
  },
    {
    name: "MacBook Pro M5 Max",
    brand: "Apple",
    category: "Laptops",
    badge: "M5 Max",
    badgeColor: "bg-zinc-800 text-white",
    image: "/assets/illustrations/laptop.svg",
    alt: "MacBook Pro 16-inch M5 Max",
    href: "/best-macbooks-2026#macbook-pro-16-m5-max",
    highlights: ["36GB / 2TB", "18-core CPU", "Price changes"],
  },  
  {
    name: "Ghost of Yōtei Complete Edition",
    brand: "PlayStation",
    category: "Gaming",
    badge: "Out now",
    badgeColor: "bg-amber-500 text-white",
    image: "/assets/illustrations/game.svg",
    alt: "Ghost of Yotei",
    href: "/best-gaming-consoles-2026#ps5-ghost-of-yotei-bundle",
    highlights: ["Echoes of Sekigahara", "Most Wanted", "PS5 only"],
  },
  {
    name: "MacBook Pro 14 M5",
    brand: "Apple",
    category: "Laptops",
    badge: "Editor's Pick",
    badgeColor: "bg-amber-500 text-white",
    image: "/assets/illustrations/laptop.svg",
    alt: "Apple MacBook Pro 14-inch",
    href: "/best-macbooks-2026#macbook-pro-14-m5",
    highlights: ["M5 chip", "Liquid Retina XDR", "Replaces the M4"],
  },
  {
    name: "NVIDIA RTX 5090",
    brand: "NVIDIA",
    category: "GPUs",
    badge: "Flagship GPU",
    badgeColor: "bg-green-600 text-white",
    image: "/assets/illustrations/gpu.svg",
    alt: "NVIDIA RTX 5090",
    href: "/best-graphics-cards-2026#rtx-5090",
    highlights: ["Blackwell", "32GB class VRAM", "4K gaming"],
  },
  {
    name: "Samsung Galaxy S26 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    badge: "Flagship",
    badgeColor: "bg-blue-600 text-white",
    image: "/assets/illustrations/phone.svg",
    alt: "Samsung Galaxy S26 Ultra",
    href: "/best-phones-2026#galaxy-s26-ultra",
    highlights: ["S Pen", "200MP class camera", "Galaxy AI"],
  },
  {
    name: "Robot vacuums under $300",
    brand: "Buying guide",
    category: "Robotics",
    badge: "Guide",
    badgeColor: "bg-emerald-600 text-white",
    image: "/assets/illustrations/vacuum.svg",
    alt: "eufy RoboVac G30 robot vacuum",
    href: "/best-budget-robot-vacuums-under-300",
    highlights: ["Lefant M210 Pro", "eufy G30", "Roborock Q7 L5"],
  },
  {
    name: "Sony WH-1000XM6",
    brand: "Sony",
    category: "Audio",
    badge: "Headphones",
    badgeColor: "bg-violet-600 text-white",
    image: "/assets/illustrations/headphones.svg",
    alt: "Sony WH-1000XM6",
    href: "/best-noise-cancelling-headphones-2026#sony-wh-1000xm6",
    highlights: ["ANC", "Wireless", "Travel"],
  },
  {
    name: "PlayStation 5",
    brand: "Sony",
    category: "Gaming",
    badge: "Console",
    badgeColor: "bg-sky-600 text-white",
    image: "/assets/illustrations/console.svg",
    alt: "Sony PlayStation 5",
    href: "/best-gaming-consoles-2026#playstation-5",
    highlights: ["On sale now", "4K gaming", "DualSense"],
  },
  {
    name: "PS5 accessories",
    brand: "Buying guide",
    category: "Gaming",
    badge: "Guide",
    badgeColor: "bg-emerald-600 text-white",
    image: "/assets/illustrations/controller.svg",
    alt: "DualSense Edge wireless controller",
    href: "/best-ps5-accessories-2026",
    highlights: ["SSD", "DualSense Edge", "Charging dock"],
  },
    {
    name: "PS5 Digital",
    brand: "Sony",
    category: "Gaming",
    badge: "Deal",
    badgeColor: "bg-red-600 text-white",
    image: "/assets/illustrations/console.svg",
    alt: "PlayStation 5 Digital Edition",
    href: "/best-gaming-consoles-2026#playstation-5",
    highlights: ["Digital Edition", "825GB SSD", "Price changes"],
  },
  {
    name: "Tablets under $150",
    brand: "Buying guide",
    category: "Laptops",
    badge: "Guide",
    badgeColor: "bg-emerald-600 text-white",
    image: "/assets/illustrations/tablet.svg",
    alt: "Amazon Fire HD 10 tablet",
    href: "/best-cheap-tablets-under-150",
    highlights: ["Fire HD 10", "Galaxy Tab A9+", "Lenovo Tab One"],
    contain: true,
  },
    {
    name: "PS5 cooling station",
    brand: "Accessory",
    category: "Gaming",
    badge: "Stand",
    badgeColor: "bg-amber-500 text-white",
    image: "/assets/illustrations/console.svg",
    alt: "PS5 cooling station with controller docks",
    href: "/best-ps5-accessories-2026#cooling-station",
    highlights: ["3-speed fan", "Two DualSense docks", "3 USB ports"],
  },


  {
    name: "Galaxy Z Fold 6",
    brand: "Samsung",
    category: "Smartphones",
    badge: "Foldable",
    badgeColor: "bg-blue-600 text-white",
    image: "/assets/illustrations/foldable.svg",
    alt: "Samsung Galaxy Z Fold 6",
    href: "/best-foldable-phones-2026#older-models",
    highlights: ["Out since 2024", "Folding display", "S Pen"],
  },
  {
    name: "Intel Arc B580",
    brand: "Intel",
    category: "GPUs",
    badge: "Battlemage",
    badgeColor: "bg-cyan-700 text-white",
    image: "/assets/illustrations/gpu.svg",
    alt: "Intel Arc B580",
    href: "/best-graphics-cards-2026#intel-arc-b580",
    highlights: ["12GB GDDR6", "Released 2024", "Value GPU"],
  },
    {
    name: "Roborock Saros Z70",
    brand: "Roborock",
    category: "Robotics",
    badge: "Flagship",
    badgeColor: "bg-red-600 text-white",
    image: "/assets/illustrations/vacuum.svg",
    alt: "Roborock Saros Z70 robot vacuum and mop",
    href: "/roborock-saros-z70-article",
    highlights: ["OmniGrip arm", "Mop dock", "22,000Pa"],
  },
    {
    name: "iPhone 17 vs S26 Ultra",
    brand: "Apple / Samsung",
    category: "Smartphones",
    badge: "Compare",
    badgeColor: "bg-amber-500 text-white",
    image: "/assets/illustrations/phone.svg",
    alt: "iPhone 17 vs Galaxy S26 Ultra",
    href: "/best-phones-2026#iphone-17-vs-galaxy-s26-ultra",
    highlights: ["6.3 vs 6.9 display", "A19 vs Snapdragon", "Dual vs quad camera"],
  },
];

const categories = ["All", "Laptops", "Smartphones", "GPUs", "Robotics", "Audio", "Gaming"];

function displayGadget(gadget: Gadget, sale: boolean): Gadget {
  if (gadget.href === "/black-friday-robot-vacuums") {
    return { ...gadget, name: sale ? gadget.name : "Robot vacuum deals", badge: sale ? "Black Friday" : "Deals" };
  }
  if (gadget.href === "/black-friday-smartwatches") {
    return { ...gadget, name: sale ? gadget.name : "Smartwatch deals", badge: sale ? "Black Friday" : "Deals" };
  }
  return gadget;
}

export default function GadgetsSection({ photos = {} }: { photos?: Record<string, string> }) {
  const [active, setActive] = useState("All");
  const sale = isSaleSeason();
  const visible = (active === "All" ? gadgets : gadgets.filter((g) => g.category === active)).map((g) =>
    displayGadget(g, sale),
  );

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-6 md:mb-4">
              <Icon name="CpuChipIcon" size={14} variant="solid" className="text-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Featured gadgets</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 md:mt-0">
              Hot gadget <span className="text-primary">drops</span>
            </h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base max-w-lg">
              Products you can actually look up today. Prices come later.
            </p>
          </div>
          <Link
            href="/roborock-vs-roomba-2026"
            className="inline-flex items-center gap-2 px-5 py-3 border border-border rounded-lg text-foreground font-semibold text-sm hover:bg-muted transition-all shrink-0 self-start md:self-auto"
          >
            Compare Gadgets
            <Icon name="ScaleIcon" size={16} variant="outline" />
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                cat === active
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visible.map((gadget) => (
            <Link
              key={gadget.name}
              href={gadget.href}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative">
                <CardImage src={photos[gadget.href] ?? gadget.image} alt={gadget.alt} />
                {gadget.badge && (
                  <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full ${gadget.badgeColor}`}>
                    {gadget.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                  {gadget.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-primary font-bold uppercase tracking-wide mb-1">{gadget.brand}</p>
                <h3 className="text-foreground font-bold text-base md:text-lg group-hover:text-primary transition-colors mb-2">
                  {gadget.name}
                </h3>
                <ul className="space-y-1 mb-4 flex-1">
                  {gadget.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon name="CheckCircleIcon" size={12} variant="solid" className="text-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-3 border-t border-border mt-auto">
                  <span className="text-primary text-xs font-semibold flex items-center gap-1">
                    View gadget <Icon name="ArrowRightIcon" size={12} variant="outline" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
