import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";

const AMAZON_CLEAR = "https://www.amazon.com/s?k=iPhone+Duo+case+clear&tag=gadgetsfindswebsmediavid-20";
const AMAZON_SILICONE = "https://www.amazon.com/s?k=iPhone+Duo+case+silicone&tag=gadgetsfindswebsmediavid-20";
const AMAZON_LEATHER = "https://www.amazon.com/s?k=iPhone+Duo+case+leather&tag=gadgetsfindswebsmediavid-20";
const AMAZON_ALL = "https://www.amazon.com/s?k=iPhone+Duo+phone+case&tag=gadgetsfindswebsmediavid-20";

export const metadata: Metadata = {
  title: "iPhone Duo Cases — Clear, Silicone & Leather Options",
  description:
    "A curated selection of cases for the iPhone Duo. Clear, silicone, and leather options in multiple colors.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/iphone-duo-cases" },
  openGraph: {
    title: "iPhone Duo Cases",
    description: "Clean, protective cases for the iPhone Duo.",
    url: "https://www.gadgets-finds.com/iphone-duo-cases",
    siteName: "Gadgets Finds",
    type: "article",
  },
};

const cases = [
  {
    name: "Clear Case",
    color: "Transparent",
    description: "Shows the original finish. Slim and protective.",
    href: AMAZON_CLEAR,
    bg: "bg-zinc-100",
    accent: "border-zinc-300",
  },
  {
    name: "Silicone Case",
    color: "Midnight",
    description: "Soft-touch silicone with a refined matte finish.",
    href: AMAZON_SILICONE,
    bg: "bg-zinc-900",
    accent: "border-zinc-700",
  },
  {
    name: "Silicone Case",
    color: "Starlight",
    description: "Light and clean. Easy to grip.",
    href: AMAZON_SILICONE,
    bg: "bg-stone-100",
    accent: "border-stone-300",
  },
  {
    name: "Silicone Case",
    color: "Pink",
    description: "Soft color with a smooth feel.",
    href: AMAZON_SILICONE,
    bg: "bg-rose-100",
    accent: "border-rose-200",
  },
  {
    name: "Leather Case",
    color: "Black",
    description: "Premium leather that develops a natural patina.",
    href: AMAZON_LEATHER,
    bg: "bg-zinc-800",
    accent: "border-zinc-600",
  },
  {
    name: "Leather Case",
    color: "Brown",
    description: "Warm tone that ages well over time.",
    href: AMAZON_LEATHER,
    bg: "bg-amber-900",
    accent: "border-amber-700",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-zinc-900">
        {/* Hero */}
        <section className="pt-28 pb-20 px-6 text-center">
          <p className="text-sm tracking-widest uppercase text-zinc-500 mb-4">
            For iPhone Duo
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            Cases
          </h1>
          <p className="max-w-xl mx-auto text-lg text-zinc-600 leading-relaxed">
            Designed to complement the iPhone Duo. Thin, precise, and available in clear, silicone, and leather finishes.
          </p>
        </section>

        {/* Disclosure */}
        <div className="max-w-2xl mx-auto px-6 mb-16 text-center">
          <p className="text-xs text-zinc-500">
            <span className="text-red-600 font-medium">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases if you buy through links on this page, at no extra cost to you.
          </p>
        </div>

        {/* Cases grid */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((item) => (
              <a
                key={item.name + item.color}
                href={item.href}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="group block rounded-3xl border border-zinc-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`${item.bg} aspect-[4/5] flex items-end p-6`}>
                  <div className="w-full">
                    <div className={`h-32 rounded-2xl border ${item.accent} bg-white/40 backdrop-blur-sm`} />
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">
                    {item.color}
                  </p>
                  <h2 className="text-xl font-medium mb-2 group-hover:text-zinc-700">
                    {item.name}
                  </h2>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="text-sm font-medium text-zinc-900 group-hover:underline">
                    View on Amazon →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Bottom note */}
        <section className="border-t border-zinc-200 py-16 text-center px-6">
          <p className="text-sm text-zinc-500 max-w-md mx-auto">
            Availability and colors change. Always confirm the exact model and finish on the Amazon listing before purchasing.
          </p>
          <a
            href={AMAZON_ALL}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block mt-6 text-sm font-medium border border-zinc-900 px-6 py-3 rounded-full hover:bg-zinc-900 hover:text-white transition-colors"
          >
            See all iPhone Duo cases
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
