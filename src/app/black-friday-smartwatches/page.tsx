import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import RelatedGuides from "@/components/common/RelatedGuides";
import GuideFaq, { ProductListJsonLd } from "@/components/common/GuideFaq";
import { WATCHES, amazonUrl } from "./watches";

export const metadata: Metadata = {
  title: "Black Friday Smartwatches | Gadgets Finds",
  description:
    "How to choose a Black Friday smartwatch: Apple Watch SE 3 or Series 12, Garmin Venu 4 or Instinct 3, WHOOP membership, or the CARBINOX Edge.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/black-friday-smartwatches" },
  openGraph: {
    title: "Black Friday Smartwatches",
    description: "iPhone, Garmin, a screenless membership band, or a budget GPS watch. Read the note before the listing.",
    url: "https://www.gadgets-finds.com/black-friday-smartwatches",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: "https://www.gadgets-finds.com/assets/images/og-black-friday-watches.jpg",
        alt: "A plain smartwatch on a dark background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    creator: "@Gadgets_finds",
    title: "Black Friday Smartwatches",
    description: "iPhone, Garmin, a screenless membership band, or a budget GPS watch. Read the note before the listing.",
    images: ["https://www.gadgets-finds.com/assets/images/og-black-friday-watches.jpg"],
  },
};

function amazonHref(url: string) {
  return `/api/go?url=${encodeURIComponent(url)}`;
}

const FAQ = [
  {
    q: "Which of these work with an Android phone?",
    a: "The Garmin Venu 4, the Garmin Instinct 3, the CARBINOX Edge, and the WHOOP. The three Apple Watches need an iPhone. Do not buy an Apple Watch for an Android phone.",
  },
  {
    q: "Is the WHOOP a smartwatch?",
    a: "No. It is a screenless band sold with 12 months of WHOOP Peak membership. You read the data on the phone. If you wanted a watch face, skip it.",
  },
  {
    q: "What is different about the two Series 12 listings?",
    a: "The 42mm is GPS only, with a black sport band in S/M. The 46mm is GPS + Cellular, with a black sport band in M/L. Cellular still needs a carrier plan. They are not two colors of the same watch.",
  },
  {
    q: "Does GPS mean I can leave my phone at home?",
    a: "GPS means the watch can track a route without the phone. Calls, messages, and maps still need the phone unless the listing says GPS + Cellular, and then you still add a plan. Bluetooth calling on the CARBINOX is not cellular.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-4xl">
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases if you buy through links on this page, at no extra cost to you. Prices and availability change on Amazon.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">By Gadgets Finds · November 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Black Friday smartwatches</h1>

          <ProductListJsonLd
            name="Black Friday smartwatches"
            url="/black-friday-smartwatches"
            products={WATCHES.map((item) => item.name)}
          />

          <div className="grid sm:grid-cols-2 gap-4">
            {WATCHES.map((item) => (
              <div key={item.slug} className="bg-card border border-border rounded-xl overflow-hidden flex flex-col">
                <div className="p-4 flex flex-col flex-1">
                  <h2 className="text-base font-bold">
                    <a href={`/black-friday-smartwatches/${item.slug}`} className="hover:text-amber-700">
                      {item.name}
                    </a>
                  </h2>
                  <p className="text-sm text-muted-foreground mt-2 flex-1">{item.card}</p>
                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href={`/black-friday-smartwatches/${item.slug}`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-amber-500 text-sm font-bold hover:bg-amber-400/10"
                    >
                      See the review
                    </a>
                    <a
                      href={amazonHref(amazonUrl(item.asin))}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      aria-label={`View ${item.name} on Amazon`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-amber-400 text-zinc-950 text-sm font-extrabold hover:bg-amber-300 transition-colors"
                    >
                      View on Amazon
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">How to choose</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            On an iPhone, start with the three Apple Watches. The SE 3 GPS 40mm is the smaller model. The Series 12 GPS 42mm is the current watch, and it still needs the iPhone nearby. The Series 12 GPS + Cellular 46mm can leave the phone at home once a carrier plan is added. Each listing is one case size and one band length.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            On an Android phone, or if the watch should work with either phone, start with Garmin. The Venu 4 is the everyday fitness watch. The Instinct 3 AMOLED is the rugged model. The CARBINOX Edge is the budget GPS watch, and it does not run Garmin software. The WHOOP is not a watch. It is a screenless band sold with 12 months of membership.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Read the short note on a model before you open its Amazon listing. The button stays on this page until you click it. The price on Amazon is the only price. A longer comparison is in the{" "}
            <a href="/best-smartwatches-under-350" className="underline decoration-amber-500/80 underline-offset-4 hover:text-foreground">
              smartwatch guide under $350
            </a>
            .
          </p>

          <GuideFaq items={FAQ} />
          <RelatedGuides current="/black-friday-smartwatches" />
        </div>
      </article>
      <Footer />
    </>
  );
}
