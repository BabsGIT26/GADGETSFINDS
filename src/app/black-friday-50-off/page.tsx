import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import RelatedGuides from "@/components/common/RelatedGuides";
import GuideFaq, { ProductListJsonLd } from "@/components/common/GuideFaq";
import { LivePrice, PriceDisclaimer, ProductPhoto } from "@/components/common/AmazonMedia";
import { getAmazonItem } from "@/lib/amazon/catalog";
import { illustrationPath } from "@/lib/illustrations";
import { CONTAINER, CTA, DISCLOSURE, EYEBROW, H1, H2, P, PAGE } from "@/lib/layout";
import { pageMetadata } from "@/lib/seo";
import { CATEGORIES, DEALS, amazonUrl, type Deal, type DealCategory } from "./deals";
import { DealCard, DealFilter } from "./filter";
import { MoreDeals } from "./MoreDeals";

export const revalidate = 3600;

const PATH = "/black-friday-50-off";
const SEO_TITLE = "Black Friday Deals at 50% Off";
const TITLE = "Black Friday Deals at 50% Off or More";
const DESCRIPTION =
  "Black Friday deals at 50% off or more: headphones, TVs, smart home, vacuums and kitchen gear. Filter by category. Amazon sets the discount.";

const ART: Record<DealCategory, "gadget" | "deals" | "smart-home" | "vacuum"> = {
  Audio: "gadget",
  "TV & streaming": "deals",
  "Smart home": "smart-home",
  Kitchen: "gadget",
  Vacuums: "vacuum",
};

const OG_IMAGE =
  "https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2026/10/15/node_1746632/69662044/public/2026/10/15/107959403.png?itok=5E9mqopU1792562748";

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "deals", ogImage: OG_IMAGE });

export default async function Page() {
  const live: Deal[] = [];
  for (const deal of DEALS) {
    const item = await getAmazonItem(deal.asin);
    if (item?.savingsPercent != null && item.savingsPercent >= 50) {
      live.push(deal);
    }
  }
  const categories = CATEGORIES.filter((category) => live.some((deal) => deal.category === category));

  return (
    <>
      <Header />
      <main className={PAGE}>
        <article>
          <div className={CONTAINER}>
            <p className={DISCLOSURE}>
              <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn
              from qualifying purchases if you buy through links on this page, at no extra cost to you.
            </p>
            <p className={EYEBROW}>Black Friday</p>
            <h1 className={H1}>{TITLE}</h1>
            <ProductListJsonLd name="Black Friday deals at 50% off or more" url={PATH} products={live.map((deal) => deal.name)} />
            {live.length === 0 ? (
              <p className={P}>None of the tracked listings are at 50% off on Amazon right now. The page checks again within an hour.</p>
            ) : (
              <DealFilter categories={categories} total={live.length}>
                {live.map((deal) => (
                  <DealCard key={deal.asin} category={deal.category}>
                    <ProductPhoto asin={deal.asin} fallback={illustrationPath(ART[deal.category])} alt={deal.name} variant="deal" />
                    <div className="p-3 sm:p-4 flex flex-col flex-1">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{deal.category}</p>
                      <h2 className="mt-1 h-10 sm:h-12 text-sm sm:text-base font-bold leading-5 sm:leading-6 text-foreground">
                        <span className="block truncate">{deal.name}</span>
                        <span className="block truncate font-medium">{deal.detail}</span>
                      </h2>
                      <p className="mt-2 h-8 sm:h-10 text-xs sm:text-sm leading-4 sm:leading-5 text-muted-foreground line-clamp-2">{deal.note}</p>
                      <LivePrice asin={deal.asin} compact className="mt-3" />
                      <a
                        href={amazonUrl(deal.asin)}
                        rel="nofollow sponsored noopener noreferrer"
                        aria-label={`Check price of ${deal.name} on Amazon`}
                        className="mt-3 inline-flex items-center justify-center px-3 py-2 rounded-full bg-amber-400 text-zinc-950 text-xs sm:text-sm font-extrabold hover:bg-amber-300"
                      >
                        Check on Amazon
                      </a>
                    </div>
                  </DealCard>
                ))}
              </DealFilter>
            )}
            <MoreDeals />
            <PriceDisclaimer className="mt-3" />
            <h2 className={H2}>How the 50% line works</h2>
            <p className={P}>
              A product stays on this page only when Amazon's own discount is 50% or higher. If the listing price or the sale price moves, the product drops off or comes back on the next refresh. The card shows the current price, the old listing price, and the percent.
            </p>
            <p className={P}>
              Headphones, streaming sticks and smart displays are the bulk of the list. Kitchen tools and robot vacuums are here when they clear the same 50% line. A bundle is one Amazon listing, so the percent is for the pair, not each piece.
            </p>
            <GuideFaq
              title="Black Friday 50% off questions"
              items={[
                { q: "Why did a product disappear?", a: "Amazon's discount fell under 50%, or the listing stopped sending a discount. The page reads that number about once an hour." },
                { q: "Are these the only 50% off products on Amazon?", a: "No. This is a curated set of tech, home and kitchen electronics, not every item in Amazon's sale." },
                { q: "Does the percent include a coupon I have to click?", a: "No. The percent is the discount Amazon attaches to the listing itself. A coupon you have to clip is separate." },
              ]}
            />
            <RelatedGuides current={PATH} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
