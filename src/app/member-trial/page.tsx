import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";

const TAG = "gadgetsfindswebsite-20";
const PRIME = `https://www.amazon.com/prime?tag=${TAG}`;

const offers = [
  {
    name: "Amazon Prime",
    detail: "Free for 30 days",
    href: PRIME,
    cta: "Get Deal",
    note: "Eligible new customers only.",
  },
  {
    name: "Prime for Young Adults",
    detail: "$7.49/month (free trial available)",
    href: `https://www.amazon.com/joinyoungadult?tag=${TAG}`,
    cta: "Get Deal",
    note: "18–24 or students. Price can change.",
  },
  {
    name: "Prime Visa Card",
    detail: "$150 gift card at sign-up (earn 5% back at Amazon)",
    href: `https://www.amazon.com/credit/rewardscard?tag=${TAG}`,
    cta: "Learn More",
    note: "Issued by Chase. Approval required.",
  },
];

export const metadata: Metadata = {
  title: "Amazon Prime free trial: 30 days before Prime Big Deal Days",
  description:
    "Start an Amazon Prime free trial before Prime Big Deal Days, October 6–7, 2026. Prime for Young Adults and the Prime Visa card are listed below.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/member-trial" },
  openGraph: {
    title: "Amazon Prime free trial before Prime Big Deal Days",
    description:
      "30-day Amazon Prime trial for eligible new members. Sale is October 6–7, 2026.",
    url: "https://www.gadgets-finds.com/member-trial",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: "/assets/images/PRIME_OCTOBER_2026.png" }],
  },
};

export default function MemberTrialPage() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-20 md:pt-24">
        <div className="container mx-auto px-4 pt-2 pb-10 max-w-3xl">
          <p className="text-sm text-black mb-3 leading-relaxed">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from
            qualifying sign-ups and purchases if you use links on this page, at
            no extra cost to you.
          </p>

         <AppImage
  src="/assets/images/PRIME_OCTOBER_2026.png"
  alt="Amazon Prime before Prime Big Deal Days, October 6 and 7"
  className="w-full max-h-40 md:max-h-80 object-contain mb-4 md:mb-6"
/>

          <h1 className="text-2xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
 Don't miss October Prime Day 2026: Try Amazon Prime free for 30 days!
</h1>

<p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed">
  Prime Big Deal Days is October 6–7, 2026. The member prices on
  those two days need an active Amazon Prime membership.
</p>
<p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 leading-relaxed">
  If you have never used a Prime trial, you can start 30 days free.
</p>

          <a
            href={PRIME}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-amber-400 text-zinc-950 text-sm font-semibold hover:bg-transparent hover:text-foreground border border-amber-400 transition-colors"
          >
            Start your free Amazon Prime trial
          </a>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            The best Amazon Prime offers:
          </h2>

          <ul className="divide-y divide-border border-y border-border">
            {offers.map((o) => (
              <li key={o.name} className="flex items-center gap-4 py-4">
                <div className="min-w-0 flex-1">
                 <p className="font-semibold text-blue-950">{o.name}</p>
                  <p className="text-sm text-foreground">{o.detail}</p>
                  <p className="text-xs text-muted-foreground mt-1">{o.note}</p>
                </div>
                <a
                  href={o.href}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="shrink-0 inline-flex items-center justify-center min-w-28 px-4 py-2.5 rounded-md bg-amber-400 text-zinc-950 text-sm font-semibold hover:bg-amber-300"
                >
                  {o.cta}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </article>
      <Footer />
    </>
  );
}
