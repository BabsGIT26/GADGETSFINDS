import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";

const TAG = "gadgetsfindswebsite-20";
const PRIME = `https://www.amazon.com/prime?tag=${TAG}`;

export const metadata: Metadata = {
  title: "Free 30-day membership trial before the October sale",
  description:
    "Prime Big Deal Days is October 6–7, 2026. Eligible new members can start a 30-day free trial to shop the sale.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/member-trial" },
  openGraph: {
    title: "Free 30-day membership trial before the October sale",
    description: "Sale is October 6–7. Eligible new accounts only.",
    url: "https://www.gadgets-finds.com/member-trial",
    siteName: "Gadgets Finds",
    type: "article",
  },
};

export default function MemberTrialPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm text-neutral-600">
          Gadgets Finds is an Amazon Associate. We may earn from qualifying
          sign-ups and purchases if you use links on this page, at no extra
          cost to you. This content is provided as is and may change or be
          removed at any time.
        </p>

        <h1 className="mt-6 text-3xl font-semibold">
          Try Amazon Prime for free for 30 days to get access to October Prime Day 2026
        </h1>

        <p className="mt-4 text-lg">
          Prime Big Deal Days takes place Oct. 6–7, and you will need an active
          Prime membership to shop the sale.
        </p>

        <p className="mt-4">
          Eligible new customers can start a 30-day free trial. If you have
          already used a Prime trial, the sign-up will not qualify. The trial
          is billed only if you do not cancel before it ends.
        </p>

        <a
          href={PRIME}
          className="mt-8 inline-block rounded bg-black px-5 py-3 text-white"
          rel="sponsored noopener noreferrer"
        >
          Start the 30-day free trial
        </a>

        <p className="mt-8 text-sm text-neutral-600">
          Deals on the sale still change. A trial does not lock a price.
        </p>
      </main>
      <Footer />
    </>
  );
}
