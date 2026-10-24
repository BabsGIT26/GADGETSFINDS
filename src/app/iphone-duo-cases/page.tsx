 import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";

const AMAZON_CLEAR = "https://www.amazon.com/s?k=iPhone+Duo+case+clear&tag=gadgetsfindswebsmediavid-20";
const AMAZON_SILICONE = "https://www.amazon.com/s?k=iPhone+Duo+case+silicone&tag=gadgetsfindswebsmediavid-20";
const AMAZON_LEATHER = "https://www.amazon.com/s?k=iPhone+Duo+case+leather&tag=gadgetsfindswebsmediavid-20";
const AMAZON_ALL = "https://www.amazon.com/s?k=iPhone+Duo+phone+case&tag=gadgetsfindswebsmediavid-20";

export const metadata: Metadata = {
  title: "iPhone Duo Cases — Clear, Silicone & Leather",
  description:
    "A selection of cases for the iPhone Duo. Clear, silicone, and leather options.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/iphone-duo-cases" },
  openGraph: {
    title: "iPhone Duo Cases",
    description: "Clear, silicone, and leather cases for the iPhone Duo.",
    url: "https://www.gadgets-finds.com/iphone-duo-cases",
    siteName: "Gadgets Finds",
    type: "article",
  },
};

const cases = [
  {
    name: "Clear Case",
    color: "Transparent",
    description: "Shows the original finish. Slim profile.",
    href: AMAZON_CLEAR,
    image: "https://m.media-amazon.com/images/I/71a1k6r0cJL._AC_SL1500_.jpg",
  },
  {
    name: "Silicone Case",
    color: "Midnight",
    description: "Soft-touch matte finish.",
    href: AMAZON_SILICONE,
    image: "https://m.media-amazon.com/images/I/61oQ2a1v3sL._AC_SL1500_.jpg",
  },
  {
    name: "Silicone Case",
    color: "Starlight",
    description: "Light and easy to grip.",
    href: AMAZON_SILICONE,
    image: "https://m.media-amazon.com/images/I/71Yk2v3b0QL._AC_SL1500_.jpg",
  },
  {
    name: "Silicone Case",
    color: "Pink",
    description: "Soft color, smooth surface.",
    href: AMAZON_SILICONE,
    image: "https://m.media-amazon.com/images/I/71g9t4x8m3L._AC_SL1500_.jpg",
  },
  {
    name: "Leather Case",
    color: "Black",
    description: "Develops a natural patina.",
    href: AMAZON_LEATHER,
    image: "https://m.media-amazon.com/images/I/71w3b5n9p2L._AC_SL1500_.jpg",
  },
  {
    name: "Leather Case",
    color: "Brown",
    description: "Warm tone that ages well.",
    href: AMAZON_LEATHER,
    image: "https://m.media-amazon.com/images/I/71c8d2k4n1L._AC_SL1500_.jpg",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-zinc-900">
        {/* Hero */}
        <section className="pt-20 pb-12 px-6 text-center">
          <p className="text-xs tracking-widest uppercase text-zinc-500 mb-3">
            iPhone Duo
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Cases
          </h1>
          <p className="max-w-md mx-auto text-base text-zinc-600">
            Clear, silicone, and leather options designed to fit the iPhone Duo.
          </p>
        </section>

        {/* Disclosure */}
        <div className="max-w-xl mx-auto px-6 mb-10 text-center">
          <p className="text-xs text-zinc-500">
            <span className="text-red-600 font-medium">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases if you buy through links on this page, at no extra cost to you.
          </p>
        </div>

        {/* Cases grid */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {cases.map((item) => (
              <a
                key={item.name + item.color}
                href={item.href}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="group block rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-square bg-zinc-50 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.name} ${item.color}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
                    {item.color}
                  </p>
                  <h2 className="text-sm font-medium mb-1 group-hover:text-zinc-700">
                    {item.name}
                  </h2>
                  <p className="text-xs text-zinc-600 leading-snug mb-2">
                    {item.description}
                  </p>
                  <span className="text-xs font-medium text-zinc-900 group-hover:underline">
                    View on Amazon →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Content under cards */}
        <section className="max-w-2xl mx-auto px-6 pb-20">
          <h2 className="text-2xl font-semibold mb-4">About these cases</h2>
          <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
            Clear cases show the original finish of the iPhone Duo while adding light protection against scratches. Silicone cases offer a soft-touch surface and come in several colors. Leather cases develop a natural patina over time and feel more premium.
          </p>
          <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
            Most of these options are designed to be thin so the phone stays close to its original size. Button covers and precise cutouts are standard on the better versions. Availability of exact colors and materials changes, so it is worth checking the current listing.
          </p>
          <p className="text-sm text-zinc-600 mb-8 leading-relaxed">
            None of these cases include MagSafe-style magnets unless specifically stated on the product page. If wireless charging or a wallet attachment matters to you, confirm the details before buying.
          </p>

          <a
            href={AMAZON_ALL}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block text-sm font-medium border border-zinc-900 px-5 py-2.5 rounded-full hover:bg-zinc-900 hover:text-white transition-colors"
          >
            See all iPhone Duo cases
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
