import { resolveAmazonAffiliateUrl } from "@/lib/amazon-affiliate";

type Props = {
  productName: string;
  href: string;
};

export default function AmazonDealBox({ productName, href }: Props) {
  const affiliateHref = resolveAmazonAffiliateUrl(productName, href);

  return (
    <div className="my-8">
      <a
        href={affiliateHref}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        aria-label={`View ${productName} on Amazon. Affiliate link.`}
        className="inline-flex items-center justify-center min-w-[240px] px-8 py-4 rounded-full bg-amber-400 text-zinc-950 text-base font-extrabold hover:bg-amber-300 transition-colors"
      >
        View product on Amazon · Affiliate link →
      </a>
    </div>
  );
}
