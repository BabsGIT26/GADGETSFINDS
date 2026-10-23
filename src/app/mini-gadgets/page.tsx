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
  // Add more mini gadgets here later
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-semibold text-lg mb-2 group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-400 line-clamp-2">{item.excerpt}</p>
                  <span className="inline-block mt-3 text-red-500 text-sm font-medium">
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
