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
    title: "Best mini gadgets under $30",
    href: "/best-mini-gadgets-under-30",
    image: "/og-home.png",
    excerpt: "The full buying guide: small gear under $30 that is actually worth buying.",
  },
  {
    title: "Outlet Extender Stick for Behind Couch",
    href: "/outlet-extender-stick",
    image: "https://m.media-amazon.com/images/I/51DW7RN3fEL.jpg",
    excerpt: "Bring hard-to-reach outlets behind couches and desks within easy reach.",
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
                className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-red-600 transition-colors h-full"
              >
                <div className="aspect-square bg-zinc-800 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-2 flex flex-col flex-1">
                  <h2 className="font-semibold text-sm mb-1 group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs text-gray-400 line-clamp-2 flex-1">{item.excerpt}</p>
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
