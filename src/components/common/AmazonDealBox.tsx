type Props = {
  productName: string;
  href: string;
};

export default function AmazonDealBox({ productName, href }: Props) {
  return (
    <aside className="my-10 rounded-2xl border border-border bg-card p-6">
      <p className="text-sm font-bold text-foreground mb-2">Buy {productName}</p>
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
      >
        View on Amazon
      </a>
      <p className="text-xs text-muted-foreground mt-3">
        As an Amazon Associate, Gadgets Finds earns from qualifying purchases. Prices and
        availability change on Amazon.
      </p>
    </aside>
  );
}
