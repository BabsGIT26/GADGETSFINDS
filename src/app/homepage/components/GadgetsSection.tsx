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
    highlights: ["M4 Pro chip", "24GB unified memory", "22-hr battery"],
  },
  {
    name: "NVIDIA RTX 5090",
    brand: "NVIDIA",
    category: "GPUs",
    rating: 4.8,
    badge: "Best GPU",
    badgeColor: "bg-green-600 text-white",
    image: "/assets/images/nvidia_rtx_six_zero_nine_zero_ti.png",
    alt: "NVIDIA RTX 5090",
    href: "/nvidia-rtx-6090-ti-article",
    highlights: ["32GB GDDR7", "Blackwell", "4K gaming"],
  },
  {
    name: "Samsung Galaxy S26 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    rating: 4.7,
    badge: "Top Rated",
    badgeColor: "bg-blue-600 text-white",
    image: "/assets/images/samsung_galaxy_s_twenty_six_ultra.png",
    alt: "Samsung Galaxy S26 Ultra",
    href: "/samsung-galaxy-s26-ultra-article",
    highlights: ["200MP camera", "S Pen", "Galaxy AI"],
  },
  {
    name: "Tesla Optimus Gen 3",
    brand: "Tesla",
    category: "Robotics",
    rating: 4.6,
    badge: "Watch",
    badgeColor: "bg-red-600 text-white",
    image: "/assets/images/tesla_optimus_gen_three.png",
    alt: "Tesla Optimus Gen 3",
    href: "/tesla-optimus-gen-3-article",
    highlights: ["Humanoid robot", "Factory 2026", "Not retail yet"],
  },
  {
    name: "Sony WH-1000XM6",
    brand: "Sony",
    category: "Audio",
    rating: 4.7,
    badge: "Audio",
    badgeColor: "bg-violet-600 text-white",
    image: "/assets/images/no_image.png",
    alt: "Sony WH-1000XM6",
    href: "/sony-wh-2000xm6-review-article",
    highlights: ["ANC", "Long battery", "Travel pick"],
  },
  {
    name: "Apple Vision Pro 2",
    brand: "Apple",
    category: "XR",
    rating: 4.5,
    image: "/assets/images/no_image.png",
    alt: "Apple Vision Pro 2",
    href: "/apple-vision-pro-2-article",
    highlights: ["Spatial computing", "Apple silicon", "In development"],
  },
  {
    name: "Meta Quest 4",
    brand: "Meta",
    category: "XR",
    rating: 4.4,
    image: "/assets/images/no_image.png",
    alt: "Meta Quest 4",
    href: "/meta-quest-4-article",
    highlights: ["Standalone VR", "Gaming", "Lower price tier"],
  },
  {
    name: "PlayStation 6",
    brand: "Sony",
    category: "Gaming",
    rating: 4.6,
    image: "/assets/images/no_image.png",
    alt: "PlayStation 6",
    href: "/sony-playstation-6-article",
    highlights: ["Next-gen console", "Sony", "Upcoming"],
  },
  {
    name: "Galaxy Z Fold 6",
    brand: "Samsung",
    category: "Smartphones",
    rating: 4.5,
    image: "/assets/images/no_image.png",
    alt: "Samsung Galaxy Z Fold 6",
    href: "/samsung-galaxy-z-fold-6-article",
    highlights: ["Foldable", "Big screen", "S Pen support"],
  },
  {
    name: "Intel Arc B-Series",
    brand: "Intel",
    category: "GPUs",
    rating: 4.3,
    image: "/assets/images/no_image.png",
    alt: "Intel Arc B-Series",
    href: "/intel-arc-b-series-article",
    highlights: ["Battlemage", "Value GPU", "Intel"],
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
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Today's Deals</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Hot gadget <span className="text-primary">drops</span>
            </h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base max-w-lg">
              Handpicked gadgets — open a card for the full write-up. Prices come later.
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
