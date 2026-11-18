"use client";

export default function AmazonButton({
  href,
  children = "VIEW ON AMAZON",
  className = "inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md",
  productName,
  asin,
}: {
  href: string;
  children?: React.ReactNode;
  className?: string;
  productName?: string;
  asin?: string;
}) {
  const tracked = `/api/go?url=${encodeURIComponent(href)}`;

  function fireAmazonClick() {
    // X pixel
    if (typeof window !== "undefined" && (window as any).twq) {
      (window as any).twq("event", "tw-pwfa9-rj4tg", {
        value: null,
        contents: [
          {
            content_type: null,
            content_id: asin || null,
            content_name: productName || null,
            content_price: null,
            num_items: null,
            content_group_id: null,
          },
        ],
        conversion_id: null,
      });
    }

    // GA4 is recorded once for every Amazon link by AmazonClickTracker.
  }

  return (
    <a
      href={tracked}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      onClick={fireAmazonClick}
      className={className}
    >
      {children}
    </a>
  );
}
