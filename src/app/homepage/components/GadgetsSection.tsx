"use client";

import { useState } from "react";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

interface Gadget {
  name: string;
  brand: string;
  category: string;
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
    name: "MacBook Pro M4",
    brand: "Apple",
    category: "Laptops",
    rating: 4.9,
    badge: "Editor's Pick",
    badgeColor: "bg-amber-500 text-white",
    image: "/assets/images/macbook_pro_m_four.png",
    alt: "Apple MacBook Pro M4",
    href: "/macbook-pro-m4-article",
    highlights: ["M4 chip", "Liquid Retina XDR", "ProMotion 120Hz"],
  },
  {
    name: "NVIDIA RTX 5090",
    brand: "NVIDIA",
    category: "GPUs",
    rating: 4.8,
    badge: "Flagship GPU",
    badgeColor: "bg-green-600 text-white",
    image: "/assets/images/nvidia_rtx_six_zero_nine_zero_ti.png",
    alt: "NVIDIA RTX 5090",
    href: "/nvidia-rtx-6090-ti-article",
    highlights: ["Blackwell", "32GB class VRAM", "4K gaming"],
  },
  {
    name: "Samsung Galaxy S26 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    rating: 4.7,
    badge: "Flagship",
    badgeColor: "bg-blue-600 text-white",
    image: "/assets/images/samsung_galaxy_s_twenty_six_ultra.png",
    alt: "Samsung Galaxy S26 Ultra",
    href: "/samsung-galaxy-s26-ultra-article",
    highlights: ["S Pen", "200MP class camera", "Galaxy AI"],
  },
  {
    name: "Tesla Optimus Gen 3",
    brand: "Tesla",
    category: "Robotics",
    rating: 4.6,
    badge: "Not retail",
    badgeColor: "bg-red-600 text-white",
    image: "/assets/images/tesla_optimus_gen_three.png",
    alt: "Tesla Optimus Gen 3",
    href: "/tesla-optimus-gen-3-article",
    highlights: ["Humanoid", "Target $20K–$30K", "Not sold to public yet"],
  },
  {
    name: "Sony WH-1000XM6",
    brand: "Sony",
    category: "Audio",
    rating: 4.7,
    badge: "Headphones",
    badgeColor: "bg-violet-600 text-white",
    image: "/assets/images/sony_wh_1000xm6.png",
    alt: "Sony WH-1000XM6",
    href: "/sony-wh-2000xm6-review-article",
    highlights: ["ANC", "Wireless", "Travel"],
  },
  {
    name: "PlayStation 5",
    brand: "Sony",
    category: "Gaming",
    rating: 4.8,
    badge: "Console",
    badgeColor: "bg-sky-600 text-white",
    image: "/assets/images/playstation_5.png",
    alt: "Sony PlayStation 5",
    href: "/product-comparison-engine",
    highlights: ["On sale now", "4K gaming", "DualSense"],
  },
  {
    name: "Meta Quest 3",
    brand: "Meta",
    category: "XR",
    rating: 4.5,
    badge: "VR",
    badgeColor: "bg-indigo-600 text-white",
    image: "/assets/images/meta_quest_3.png",
    alt: "Meta Quest 3",
    href: "/product-comparison-engine",
    highlights: ["Standalone VR", "Color mixed reality", "In stores"],
  },
  {
    name: "Apple Vision Pro",
    brand: "Apple",
    category: "XR",
    rating: 4.4,
    badge: "Released 2024",
    badgeColor: "bg-zinc-700 text-white",
    image: "/assets/images/apple_vision_pro.png",
    alt: "Apple Vision Pro",
    href: "/product-comparison-engine",
    highlights: ["Spatial computing", "First generation", "On sale"],
  },
  {
    name: "Galaxy Z Fold 6",
    brand: "Samsung",
    category: "Smartphones",
    rating: 4.5,
    badge: "Foldable",
    badgeColor: "bg-blue-600 text-white",
    image: "/assets/images/samsung_galaxy_z_fold_6.png",
    alt: "Samsung Galaxy Z Fold 6",
    href: "/samsung-galaxy-z-fold-6-article",
    highlights: ["Out since 2024", "Folding display", "S Pen"],
  },
  {
    name: "Intel Arc B580",
    brand: "Intel",
    category: "GPUs",
    rating: 4.3,
    badge: "Battlemage",
    badgeColor: "bg-cyan-700 text-white",
    image: "/assets/images/intel_arc_b580.png",
    alt: "Intel Arc B580",
    href: "/intel-arc-b-series-article",
    highlights: ["12GB GDDR6", "Released 2024", "Value GPU"],
  },
];

const categories = ["All", "Laptops", "Smartphones", "GPUs", "Robotics", "Audio", "XR", "Gaming"];

export default function GadgetsSection() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? gadgets : gadgets.filter((g) => g.category === active);

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <Icon name="CpuChipIcon" size={14} variant="solid" className="text-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Featured gadgets</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Hot gadget <span className="text-primary">drops</span>
            </h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base max-w-lg">
              Products you can actually look up today. Prices come later.
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
              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-primary font-bold uppercase tracking-wide mb-1">{gadget.brand}</p>
                <h3 className="text-foreground font-bold text-base md:text-lg group-hover:text-primary transition-colors mb-2">
                  {gadget.name}
                </h3>
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-3.5 h-3.5 ${star <= Math.round(gadget.rating) ? "text-amber-400" : "text-muted"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{gadget.rating}</span>
                </div>
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
