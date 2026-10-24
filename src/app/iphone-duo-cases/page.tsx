import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";

export const metadata: Metadata = {
  title: "iPhone Duo Cases — Clear, Silicone & Leather Options",
  description: "A selection of cases for the iPhone Duo. Clear, silicone, leather, and protective options.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/iphone-duo-cases" },
  openGraph: {
    title: "iPhone Duo Cases",
    description: "Clear, silicone, and protective cases for the iPhone Duo.",
    url: "https://www.gadgets-finds.com/iphone-duo-cases",
    siteName: "Gadgets Finds",
    type: "article",
  },
};

const cases = [
  {
    name: "Apple iPhone Duo Case",
    color: "Navy Blue",
    description: "Official Apple case. Thin, light, MagSafe compatible.",
    href: "https://www.amazon.com/Apple-iPhone-Duo-Case-complement/dp/B0HJBCCRYD?tag=gadgetsfindswebsmediavid-20",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlIdhTux50lVoW7HkrQGv5brL8gYDk3EeG-ADXgRYvjw&s=10",
  },
  {
    name: "FNTCASE MagSafe Case",
    color: "Black",
    description: "Strong magnets, translucent matte finish, screen protector included.",
    href: "https://www.amazon.com/FNTCASE-iPhone-Duo-Magsafe-Black/dp/B0HDST6F85?tag=gadgetsfindswebsmediavid-20",
    image: "https://fntcase.com/cdn/shop/files/1-_1_7bc141f2-c808-497d-81b6-3959e4f3ba4d_1570x.jpg?v=1789371604",
  },
  {
    name: "TORRAS Q3 Spin",
    color: "Dark",
    description: "Hinge protection with 360° rotating stand.",
    href: "https://www.amazon.com/s?k=TORRAS+Q3+Spin+iPhone+Duo&tag=gadgetsfindswebsmediavid-20",
    image: "https://torraslife.com/cdn/shop/files/c76aa41848c0d10d159b5d6dd1accb60_0910a191-b87e-4cc9-80b9-4fddc739f638.png?v=1789663999&width=1024",
  },
  {
    name: "Spigen Ultra Hybrid Pro",
    color: "Clear",
    description: "Clear case that shows the phone color. Hinge coverage.",
    href: "https://www.amazon.com/s?k=Spigen+Ultra+Hybrid+Pro+iPhone+Duo&tag=gadgetsfindswebsmediavid-20",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIzQ19wkDu8VkAfZSFxuL8TPNiVzPMUbTPHPCHp6THA&s=10",
  },
  {
    name: "OtterBox Defender Series",
    color: "Black",
    description: "Rugged protection with articulating hinge cover.",
    href: "https://www.amazon.com/OtterBox-Foldable-iPhone-Defender-Case/dp/B0HGNPW2NG?tag=gadgetsfindswebsmediavid-20",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAUqeqtDpU1olo7HSIqPdtONBlQO9AfkBrGMylPHG8dA&s=10",
  },
  {
    name: "Pitaka Aramid Case",
    color: "Black",
    description: "Thin aramid fiber with MagSafe support.",
    href: "https://www.amazon.com/s?k=Pitaka+iPhone+Duo+aramid&tag=gadgetsfindswebsmediavid-20",
    image: "https://www.bigw.com.au/medias/sys_master/images/images/hf1/h2f/172314000392222.jpg",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-zinc-900">
        <section className="pt-20 pb-10 px-6 text-center">
          <p className="text-xs tracking-widest uppercase text-zinc-500 mb-3">
            iPhone Duo
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Cases
          </h1>
          <p className="max-w-md mx-auto text-base text-zinc-600">
            Clear, silicone, leather, and protective options designed for the iPhone Duo.
          </p>
        </section>

        <div className="max-w-xl mx-auto px-6 mb-8 text-center">
          <p className="text-xs text-zinc-500">
            <span className="text-red-600 font-medium">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases if you buy through links on this page, at no extra cost to you.
          </p>
        </div>

        <section className="max-w-5xl mx-auto px-6 pb-14">
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

        <section className="max-w-2xl mx-auto px-6 pb-20">
          <h2 className="text-2xl font-semibold mb-4">About these cases</h2>
          <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
            Official Apple cases are the safest match for fit and MagSafe alignment. Third-party options from Spigen, TORRAS, OtterBox, and Pitaka add hinge protection, stands, or thinner materials. Clear cases show the phone’s color. Leather and aramid versions feel more premium but cost more.
          </p>
          <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
            Most good cases cover both halves and the hinge. Check whether the listing includes a screen protector and whether the magnets work with MagSafe or Qi2 chargers. Prices and stock change quickly on new iPhone Duo accessories.
          </p>
          <p className="text-sm text-zinc-600 mb-8 leading-relaxed">
            Always confirm the case is labeled for iPhone Duo before buying. Regular iPhone cases will not fit.
          </p>

          <a
            href="https://www.amazon.com/s?k=iPhone+Duo+case&tag=gadgetsfindswebsmediavid-20"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block text-sm font-medium border border-zinc-900 px-5 py-2.5 rounded-full hover:bg-zinc-900 hover:text-white transition-colors"
          >
            See more iPhone Duo cases
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
