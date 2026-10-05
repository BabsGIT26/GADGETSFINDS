import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";

const TAG = "gadgetsfindswebsite-20";
const PRIME = `https://www.amazon.com/prime?tag=${TAG}`;

export const metadata: Metadata = {
  title: "30 days free if you still qualify for the October 6–7 sale",
  description:
    "Prime Big Deal Days is October 6–7, 2026. Eligible new customers can start a 30-day Prime trial and shop the member sale.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/member-trial" },
  openGraph: {
    title: "30 days free if you still qualify for the October 6–7 sale",
    description: "Eligible new accounts only. Prices on the sale still move.",
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
      <article className="min-h-screen bg-background pt-31 md:pt-16">
        <div className="container mx-auto px-4 pt-2 pb-10 max-w-3xl">
          <p className="text-sm text-black mb-3 leading-relaxed">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from
            qualifying sign-ups and purchases if you use links on this page, at
            no extra cost to you.
          </p>
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            This content is provided as is and may change or be removed at any
            time.
          </p>

          <AppImage
            src="/assets/images/PRIME_OCTOBER_2026.png"
            alt="October member sale, October 6 and 7"
            className="w-full max-h-80 object-contain mb-6"
          />

          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            30 days free if you still qualify for the October 6–7 sale
          </h1>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            Prime Big Deal Days is October 6–7, 2026. The member prices on
            those two days need an active Amazon Prime membership.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            If you have never used a Prime trial, you can start 30 days free.
            A past trial does not qualify. Cancel before the trial ends or the
            membership bills. A trial does not lock a deal price.
          </p>

          <a
            href={PRIME}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-amber-400 text-zinc-950 text-sm font-semibold hover:bg-transparent hover:text-foreground border border-amber-400 transition-colors"
          >
            Check if the 30-day trial is open
          </a>
        </div>
      </article>
      <Footer />
    </>
  );
}
