import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON_OUTLET =
  "https://www.amazon.com/outlet?tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "Amazon Outlet explained — Gadgets Finds",
  description:
    "What Amazon Outlet is, how it differs from Warehouse, and how to shop overstock and clearance without treating it like a secret 50% off vault.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/amazon-outlet-guide" },
  openGraph: {
    title: "Amazon Outlet explained — Gadgets Finds",
    description: "Public clearance and overstock. Not a hidden club.",
    url: "https://www.gadgets-finds.com/amazon-outlet-guide",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: "/og-home.png", width: 1200, height: 630, alt: "Gadgets Finds" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "Amazon Outlet explained — Gadgets Finds",
    images: ["/og-home.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Guides</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            Amazon Outlet: what it is (and what it isn’t)
          </h1>
          <p className="text-sm text-muted-foreground mb-8">By Gadgets Finds</p>

          <p className="text-muted-foreground mb-6">
            Amazon Outlet is a <strong>public</strong> section of Amazon: leftover stock, overstock,
            and clearance. The official door is{" "}
            <a
              className="text-primary underline"
              href={AMAZON_OUTLET}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
            >
              amazon.com/outlet
            </a>
            . It is not a membership vault and Amazon does not hide it from “most people” as a
            conspiracy. It is simply easy to miss if you only use the home search bar.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Outlet vs Warehouse vs a normal listing</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-6">
            <li>
              <strong>Outlet</strong> — mostly <strong>new</strong> excess / clearance. Packaging can
              look messy. Read the condition line on the listing.
            </li>
            <li>
              <strong>Warehouse / Renewed</strong> — used, returned, or refurbished. Different
              program. A “Renewed PS5” is not Outlet just because it is cheaper.
            </li>
            <li>
              <strong>Normal Amazon</strong> — current retail catalog. Outlet cards sit on top of
              that catalog with a clearance badge when Amazon puts them there.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Are discounts “20–90%, average 50%+”?</h2>
          <p className="text-muted-foreground mb-4">
            No reliable public average applies to the whole Outlet. Some rows are 15% off a TV.
            Some electronics look huge because the “list” price was already inflated. Treat every
            badge as <strong>this listing, today</strong>. If a post promises a fixed range for the
            entire Outlet, it is marketing, not a spec.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">How to shop it without getting burned</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-6">
            <li>Open the offer: sold by Amazon vs a third-party dealer.</li>
            <li>Condition: New, Outlet, Open-box — not the same.</li>
            <li>Compare the same model on the regular product page before you buy.</li>
            <li>Returns follow the listing. Screenshot price and seller.</li>
            <li>Stock rotates. A “drop” can vanish in hours. That is inventory, not a secret timer.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Gadgets: what is worth opening Outlet for</h2>
          <p className="text-muted-foreground mb-4">
            Useful when you already know the model (headphones, a laptop SKU, a console bundle) and
            you are checking whether Outlet undercuts the live retail card. Weak when you browse
            Outlet first and discover a random brand. We would rather start from a product we
            already cover —{" "}
            <Link href="/playstation-5-article" className="text-primary underline">
              PS5
            </Link>
            , phones, audio — then see if Outlet has that exact line.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">What we will not do on this page</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-6">
            <li>Call Outlet a secret club.</li>
            <li>Quote a fake site-wide average discount.</li>
            <li>Pretend Gadgets Finds is Amazon.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            Outlet is a real aisle. Use it as a price check, not as a religion. If the cut is real
            on a model you already wanted, it is worth the click. If the only hook is “hidden 50%
            off everything,” skip it.
          </p>

          <AmazonDealBox productName="Amazon Outlet" href={AMAZON_OUTLET} />

          <p className="text-xs text-muted-foreground mt-6">
            As an Amazon Associate, Gadgets Finds earns from qualifying purchases. Prices and
            stock change.
          </p>
        </div>
      </article>
      <Footer />
    </>
  );
}
