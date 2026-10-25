import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mini Gadgets — Gadgets Finds",
  description: "Small useful gadgets for everyday carry. Screen cleaners, tools, and compact accessories.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/mini-gadgets" },
  openGraph: {
    title: "Mini Gadgets",
    description: "Small useful gadgets and accessories.",
    url: "https://www.gadgets-finds.com/mini-gadgets",
    siteName: "Gadgets Finds",
    images: [{ url: "/og-home.png", width: 1200, height: 630, alt: "Mini Gadgets" }],
  },
};

const gadgets = [
  {
    title: "YTT Touchscreen Screen Cleaner Spray",
    href: "/ytt-touchscreen-cleaner",
    image: "https://m.media-amazon.com/images/I/71dnnsMpNpL._AC_UL450_SY450_QL70_.jpg",
    excerpt: "Two-in-one spray and microfiber cloth for phones, tablets, laptops, and car screens.",
  },
  {
    title: "Outlet Extender Stick for Behind Couch",
    href: "/outlet-extender-stick",
    image: "https://m.media-amazon.com/images/I/51DW7RN3fEL.jpg",
    excerpt: "Bring hard-to-reach outlets behind couches and desks within easy reach.",
  },
  {
    title: "Ultra-Slim Magnetic Power Bank",
    href: "/ultra-slim-magnetic-power-bank",
    image: "https://m.media-amazon.com/images/I/51FsefzzP3L.jpg",
    excerpt: "Ultra-thin MagSafe-compatible power bank with Qi2 wireless charging.",
  },
  {
    title: "Apple AirTag",
    href: "/apple-airtag",
    image: "https://m.media-amazon.com/images/I/61Qd9Z9caRL.jpg",
    excerpt: "Precision tracker that works with the Find My network.",
  },
  {
    title: "USB-C Power Meter",
    href: "/usb-c-power-meter",
    image: "https://m.media-amazon.com/images/I/61xiYeMNojL.jpg",
    excerpt: "Test voltage, current, and wattage of your chargers and cables.",
  },
  {
    title: "Mini GaN Charger 65W",
    href: "/mini-gan-charger-65w",
    image: "https://m.media-amazon.com/images/I/51nKMY3u+hL.jpg",
    excerpt: "Compact GaN charger with multiple ports for phones and laptops.",
  },
  {
    title: "Phone Cooler Ice Card",
    href: "/phone-cooler-ice-card",
    image: "https://m.media-amazon.com/images/I/51FsefzzP3L.jpg",
    excerpt: "Magnetic phone cooler that keeps your phone cool during gaming.",
  },
  {
    title: "Ultra-Mini Webcam",
    href: "/ultra-mini-webcam",
    image: "https://m.media-amazon.com/images/I/51nKMY3u+hL.jpg",
    excerpt: "Tiny 4K webcam that fits in a pocket for video calls.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-black text-white pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-5xl">
          <p className="text-xs text-gray-400 mb-6">
            <span className="text-red-500 font-semibold">Disclosure:</span> Gadgets Finds is an
            Amazon Associate. We may earn from qualifying purchases.
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">Mini Gadgets</h1>
          <p className="text-gray-300 mb-10 text-lg max-w-2xl">
            Small tools and accessories that solve everyday annoyances.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {gadgets.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-red-600 transition-colors"
              >
                <div className="aspect-square bg-zinc-800 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-2">
                  <h2 className="font-semibold text-sm mb-1 group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs text-gray-400 line-clamp-2">{item.excerpt}</p>
                  <span className="inline-block mt-2 text-red-500 text-xs font-medium">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
