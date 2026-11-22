"use client";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";

const miniGadgets = [
  {
    name: "GenZ Semi-Auto Slingshot",
    image: "/assets/illustrations/gadget.svg",
    alt: "Semi-automatic rapid fire slingshot",
    href: "/genz-semi-automatic-slingshot-article",
    badge: "Rapid Fire",
  },
];

export default function MiniGadgetsSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Mini <span className="text-primary">Gadgets</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {miniGadgets.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all"
            >
              <div className="relative h-40 bg-muted">
                <AppImage
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                {item.badge && (
                  <span className="absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-full bg-red-600 text-white">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
