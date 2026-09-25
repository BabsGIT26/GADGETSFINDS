import { resolveAmazonAffiliateUrl } from "@/lib/amazon-affiliate";

type Props = {
  productName: string;
  href: string;
};

export default function AmazonDealBox({ productName, href }: Props) {
  const affiliateHref = resolveAmazonAffiliateUrl(productName, href);
  const isDirectProductLink = affiliateHref.includes("/dp/");

  return (
    <aside className="my-12 rounded-2xl border border-amber-500/40 bg-zinc-950 text-white p-6 md:p-8 shadow-lg">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-2">
        {isDirectProductLink ? "Official listing" : "Amazon search · Affiliate link"}
      </p>
      <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
        Check {productName} on Amazon
      </h2>
      <p className="text-sm text-zinc-300 mb-6 max-w-xl">
        Live price and stock are on Amazon. We may earn a commission if you buy through this link.
      </p>
      <a
        href={affiliateHref}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="inline-flex items-center justify-center w-full md:w-auto min-w-[240px] px-8 py-4 rounded-full bg-amber-400 text-zinc-950 text-base font-extrabold hover:bg-amber-300 transition-colors"
      >
        {isDirectProductLink ? "View product on Amazon · Affiliate link →" : "Search Amazon · Affiliate link →"}
      </a>
      <p className="text-[11px] leading-relaxed text-zinc-400 mt-5">
        As an Amazon Associate, Gadgets Finds earns from qualifying purchases. Prices and
        availability change on Amazon.
      </p>
    </aside>
  );
}
