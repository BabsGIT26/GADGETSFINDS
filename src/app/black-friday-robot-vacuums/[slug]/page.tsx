import type { Metadata } from "next";
import ArticleJsonLd from "@/components/common/ArticleJsonLd";
import { notFound } from "next/navigation";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import RelatedGuides from "@/components/common/RelatedGuides";
import { VACUUMS, amazonUrl, vacuumBySlug } from "../vacuums";
import { illustrationAlt } from "@/lib/illustrations";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return VACUUMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = vacuumBySlug(slug);
  if (!item) return {};
  const path = `/black-friday-robot-vacuums/${item.slug}`;
  const description = item.card;
  return {
    title: `${item.name} Review | Gadgets Finds`,
    description,
    metadataBase: new URL("https://www.gadgets-finds.com"),
    alternates: { canonical: `https://www.gadgets-finds.com${path}` },
    openGraph: {
      title: `${item.name} — who it is for`,
      description: item.card,
      url: `https://www.gadgets-finds.com${path}`,
      siteName: "Gadgets Finds",
      type: "article",
      images: [{ url: item.image.replace("/assets/illustrations/", "https://www.gadgets-finds.com/og/").replace(".svg", ""), alt: item.alt }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@Gadgets_finds",
      creator: "@Gadgets_finds",
      title: `${item.name} — who it is for`,
      description: item.card,
      images: [item.image.replace("/assets/illustrations/", "https://www.gadgets-finds.com/og/").replace(".svg", "")],
    },
  };
}

function amazonHref(url: string) {
  return `/api/go?url=${encodeURIComponent(url)}`;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = vacuumBySlug(slug);
  if (!item) notFound();
  const href = amazonUrl(item.asin);

  return (
    <>
      <Header />
      <ArticleJsonLd path={`/black-friday-robot-vacuums/${item.slug}`} headline={item.name} description={item.card} products={[item.name]} />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases if you buy through links on this page, at no extra cost to you. Prices and availability change on Amazon.
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">By Gadgets Finds · November 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{item.name}</h1>
          <p className="text-sm text-muted-foreground mb-6">
            <a href="/black-friday-robot-vacuums" className="underline decoration-amber-500/80 underline-offset-4 hover:text-foreground">
              Back to the Black Friday list
            </a>
          </p>
          <div className="rounded-xl border border-border mb-8 py-4 flex items-center justify-center px-4">
            <img src={item.image} alt={illustrationAlt(item.image, item.alt)} className="max-h-72 md:max-h-[22rem] w-auto max-w-full object-contain" />
          </div>
          <h2 className="text-xl font-bold mb-2">Who it is for</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{item.fit}</p>
          <h2 className="text-xl font-bold mb-2">What you are actually buying</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <h2 className="text-xl font-bold mb-2">The limit</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{item.limit}</p>
          <h2 className="text-xl font-bold mb-2">Who should skip it</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{item.skip}</p>
          <h2 className="text-xl font-bold mb-2">Against the {item.compareName}</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {item.compare}{" "}
            <a
              href={`/black-friday-robot-vacuums/${item.compareSlug}`}
              className="underline decoration-amber-500/80 underline-offset-4 hover:text-foreground"
            >
              Read the {item.compareName} note.
            </a>
          </p>
          <a
            href={amazonHref(href)}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            aria-label={`View ${item.name} on Amazon`}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber-400 text-zinc-950 text-sm font-extrabold hover:bg-amber-300 transition-colors"
          >
            View on Amazon
          </a>
          <p className="text-xs text-muted-foreground mt-3">
            The button opens Amazon. The price on that page is the only price that matters.
          </p>
          <RelatedGuides current="/black-friday-robot-vacuums" />
        </div>
      </article>
      <Footer />
    </>
  );
}
