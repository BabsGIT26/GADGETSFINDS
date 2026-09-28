import type { Metadata } from "next";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON_OUTLET = "https://www.amazon.com/outlet?tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "Amazon Outlet — Gadgets Finds",
  description:
    "Amazon Outlet is the overstock and closeout shelf: how to use it for gadgets without treating it like a second store.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/amazon-outlet-guide" },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="w-full bg-muted flex items-center justify-center py-10">
          <AppImage
            src="/assets/images/amazon_outlet.png"
            alt="Amazon Outlet"
            className="max-h-[400px] w-auto max-w-[85%] object-contain"
          />
        </div>

        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an
            Amazon Associate. We may earn from qualifying purchases if you
            <br />
            buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Guides</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">Amazon Outlet</h1>
          <p className="text-sm text-muted-foreground mb-8">By Gadgets Finds</p>

          <p className="text-muted-foreground mb-6">
            Most people never leave Amazon’s search bar. Outlet is the other door: a single grid
            where leftover inventory is priced to leave the warehouse.
          </p>
          <p className="text-muted-foreground mb-4">
            It is Amazon’s overstock and closeout shelf — last sizes, extra colors, products that
            did not move at full price. Open it when you already know the kind of thing you want
            and you can live with last season’s finish.
          </p>

          <p className="mb-8">
            <a
              href={AMAZON_OUTLET}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-amber-500 text-sm font-semibold text-foreground hover:bg-amber-400 hover:text-zinc-950 transition-colors"
            >
              Open Amazon Outlet →
            </a>
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Why it exists</h2>
          <p className="text-muted-foreground mb-6">
            Warehouses cost money. When a model piles up, Amazon would rather cut the price than
            keep stacking boxes. Outlet is that cut, gathered in one URL instead of buried on
            page eight of a normal search.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">What to expect</h2>
          <p className="text-muted-foreground mb-6">
            Useful for headphones, home, kitchen, apparel, accessories, some laptops and monitors.
            Unreliable when you need one exact current flagship today. If the PS5 or phone you
            want is not in the grid, it is not hidden. It simply is not Outlet stock.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Outlet is not Warehouse</h2>
          <p className="text-muted-foreground mb-6">
            Warehouse and Renewed are returns and refurbished units. Outlet is meant for{" "}
            <strong>new</strong> excess. Always read the condition on the listing. If the card
            says open-box, you are no longer in the same aisle. Our{" "}
            <Link href="/playstation-5-article" className="text-primary underline">
              PS5 guide
            </Link>{" "}
            uses a Renewed listing — that is a different program.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How to use it in two minutes</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-6">
            <li>Web: All menu → Programs & Features → Amazon Outlet.</li>
            <li>App: Deals and Savings → Amazon Outlet.</li>
            <li>Filter a category first.</li>
            <li>Ignore a loud % if you would not buy the brand at full price.</li>
            <li>Compare the same model on the regular product page before you pay.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">How we treat it</h2>
          <p className="text-muted-foreground mb-6">
            We do not republish the whole grid. We open Outlet when a gadget we already cover
            might be cheaper there. If the cut is real, the listing is worth a click. If it is
            noise, we close it.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Worth opening now</h2>
          <p className="text-muted-foreground mb-8">
            If you are already shopping electronics or home and you can accept a color or bundle
            that is not on the hero banner, start at Outlet, then decide. The live catalog is on
            Amazon; it changes through the day.
          </p>

          <AmazonDealBox productName="Amazon Outlet" href={AMAZON_OUTLET} />
        </div>
      </article>
      <Footer />
    </>
  );
}
