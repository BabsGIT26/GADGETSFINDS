import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import RelatedGuides from "@/components/common/RelatedGuides";
import GuideFaq, { ProductListJsonLd } from "@/components/common/GuideFaq";
import { VACUUMS, amazonUrl } from "./vacuums";

export const metadata: Metadata = {
  title: "Black Friday Robot Vacuums | Gadgets Finds",
  description:
    "Which Black Friday robot vacuum to open first: the Roborock Qrevo 2 Pro, the Qrevo Curv 2 Flow, or a smaller dock, mop, or a robot you empty yourself.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/black-friday-robot-vacuums" },
  openGraph: {
    title: "Black Friday Robot Vacuums",
    description: "How to choose between the dock robots, the mop station, and the simple robots on sale.",
    url: "https://www.gadgets-finds.com/black-friday-robot-vacuums",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: "https://phandroid.com/wp-content/uploads/2022/06/ecovacs-x1-omni-8.jpg",
        alt: "Robot vacuum docked in its station",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    creator: "@Gadgets_finds",
    title: "Black Friday Robot Vacuums",
    description: "How to choose between the dock robots, the mop station, and the simple robots on sale.",
    images: ["https://phandroid.com/wp-content/uploads/2022/06/ecovacs-x1-omni-8.jpg"],
  },
};

function amazonHref(url: string) {
  return `/api/go?url=${encodeURIComponent(url)}`;
}

const FAQ = [
  {
    q: "Do I need a self-empty dock?",
    a: "Only if the bin fills before the week is over. Pet hair usually does. If you live alone and the floors are mostly bare, a robot you empty yourself is simpler and takes less space.",
  },
  {
    q: "Which of these actually mop?",
    a: "The Roborock Qrevo 2 Pro, the Roborock Qrevo Curv 2 Flow, the ECOVACS T90 Pro Omni, and the Roborock Q7 M5+ mop. The eufy C10, Shark AI Ultra, ILIFE A30s, eufy L60, and Lefant M210 Pro vacuum. The two Qrevo 2 Pro listings are the same robot in black and white.",
  },
  {
    q: "Is the eufy L60 the same kind of listing as the others?",
    a: "No. The L60 link on this page is a renewed unit. The others are the standard listings. Read the condition and the return window on Amazon before you treat it as a new robot.",
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
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Black Friday robot vacuums</h1>

          <ProductListJsonLd
            name="Black Friday robot vacuums"
            url="/black-friday-robot-vacuums"
            products={VACUUMS.map((item) => item.name)}
          />

          <div className="grid sm:grid-cols-2 gap-4">
            {VACUUMS.map((item) => (
              <div key={item.slug} className="bg-card border border-border rounded-xl overflow-hidden flex flex-col">
                <a href={`/black-friday-robot-vacuums/${item.slug}`} className="bg-white h-52 flex items-center justify-center px-3">
                  <img src={item.image} alt={item.alt} className="max-h-48 w-auto max-w-full object-contain" />
                </a>
                <div className="p-4 flex flex-col flex-1">
                  <h2 className="text-base font-bold">
                    <a href={`/black-friday-robot-vacuums/${item.slug}`} className="hover:text-amber-700">
                      {item.name}
                    </a>
                  </h2>
                  <p className="text-sm text-muted-foreground mt-2 flex-1">{item.card}</p>
                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href={`/black-friday-robot-vacuums/${item.slug}`}
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

          <p className="text-muted-foreground mt-10 mb-4 leading-relaxed">
            These are the robots showing on Amazon during the sale. They are not the same kind of purchase. The first three are the full Roborock stations. Open those before the smaller robots if you want a dock that empties the bin and deals with the mop.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The Roborock Qrevo 2 Pro, in black and in white, is one robot in two colors. It uses spinning mops. The Roborock Qrevo Curv 2 Flow is the other station, with a roller mop Roborock says cleans itself during the run. Neither of those is the Q7 M5+ further down the page.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Under those, split the rest. A robot with no dock, the Lefant M210 Pro or the ILIFE A30s, is the buy when you will empty the bin yourself. A vacuum with a dock, the eufy C10, the Shark AI Ultra, or the renewed eufy L60, is the buy when pet hair fills a bin in a day. A smaller mop robot, the Roborock Q7 M5+ or the ECOVACS T90 Pro Omni, is the buy when you want the floor washed and you do not want the largest station.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Read the short note first. The Amazon button is there after that, and it does not open until you click it. The price on Amazon is the only price. The longer budget comparison is still the{" "}
            <a href="/best-budget-robot-vacuums-under-300" className="underline decoration-amber-500/80 underline-offset-4 hover:text-foreground">
              robot vacuum guide under $300
            </a>
            .
          </p>

          <GuideFaq items={FAQ} />
          <RelatedGuides current="/black-friday-robot-vacuums" />
        </div>
      </article>
      <Footer />
    </>
  );
}
