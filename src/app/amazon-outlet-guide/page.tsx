import type { Metadata } from "next";
import ProductArticle from "@/components/common/ProductArticle";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const PATH = "/amazon-outlet-guide";
const AMAZON_OUTLET = "https://www.amazon.com/outlet?tag=gadgetsfindswebsite-20";
const SEO_TITLE = "Amazon Outlet: What It Is and How to Use It";
const TITLE = "Amazon Outlet: What It Is and How to Find Real Deals";
const DESCRIPTION =
  "Amazon Outlet explained: what it sells, how it differs from Amazon Warehouse and Renewed, and how to find it in the app in two minutes. Open Amazon Outlet now.";

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "deals" });

const link = "underline decoration-amber-500/80 underline-offset-4 hover:text-foreground";

export default function Page() {
  return (
    <ProductArticle
      path={PATH}
      eyebrow="Deal guides"
      title={TITLE}
      description={DESCRIPTION}
      topics={["deals"]}
      answer="Amazon Outlet is Amazon's overstock and closeout section: new products that did not sell at full price, such as last sizes, extra colors and older models, marked down to clear the warehouse. It is worth opening when you know the kind of product you want and do not mind last season's color or bundle."
      image={{ src: illustrationPath("deals"), alt: "Amazon Outlet deals" }}
      cta={{ href: AMAZON_OUTLET, label: "Open Amazon Outlet" }}
      bestFor="Flexible shoppers looking for new, discounted overstock"
      why={[
        "Outlet gathers markdowns in one grid instead of scattering them across normal search results. It is strongest for headphones, home, kitchen, clothing and accessories, plus some laptops and monitors.",
      ]}
      skip={[
        "Skip it if you need one exact current flagship today. If the phone or console you want is not in the grid, it is not hidden; it simply is not overstock.",
      ]}
      sections={[
        {
          heading: "Amazon Outlet vs Amazon Warehouse and Renewed",
          body: [
            <>
              Amazon Warehouse (now Amazon Resale) sells returned and open-box items, and Amazon Renewed sells refurbished products. Outlet is meant for <strong>new</strong> excess stock. Always read the condition on the listing: if it says used or open-box, you are not in Outlet anymore. Our{" "}
              <a href="/best-gaming-consoles-2026#playstation-5" className={link}>gaming consoles guide</a> explains why we do not link renewed consoles.
            </>,
          ],
        },
        {
          heading: "How to find Amazon Outlet",
          bullets: [
            "On the website: open the All menu, then Programs & Features, then Amazon Outlet.",
            "In the Amazon app: go to Deals, then Amazon Outlet.",
            "Pick a category first; the full grid is too big to browse.",
            "Ignore a large percentage off if you would not buy the brand at full price.",
            "Compare the same model on its normal product page before you pay.",
          ],
        },
        {
          heading: "Is Amazon Outlet worth it?",
          body: [
            <>
              Yes, if you are flexible on color or version. The discounts are real markdowns on new stock, but they change through the day and are not always the lowest price. For tech we have already compared, start with our{" "}
              <a href="/best-amazon-deals-this-week" className={link}>best Amazon deals this week</a> and{" "}
              <a href="/best-mini-gadgets-under-30" className={link}>best tech gadgets under $30</a>, then check Outlet for the same items.
            </>,
          ],
        },
      ]}
      faqTitle="Amazon Outlet questions"
      faq={[
        { q: "What is Amazon Outlet?", a: "Amazon's section for new overstock and closeout products, discounted to clear warehouse space." },
        { q: "Are Amazon Outlet items new?", a: "Outlet is for new excess stock. Used and open-box items are sold through Amazon Resale (formerly Warehouse), and refurbished items through Amazon Renewed. Check the condition on each listing." },
        { q: "How do I find Amazon Outlet in the app?", a: "Open Deals in the Amazon app and choose Amazon Outlet, or search for Amazon Outlet." },
        { q: "Is Amazon Outlet cheaper than regular Amazon?", a: "Often, but not always. Compare the same model on its normal product page before buying." },
      ]}
      products={["Amazon Outlet"]}
      dealBox={{ productName: "Amazon Outlet", href: AMAZON_OUTLET }}
    />
  );
}
