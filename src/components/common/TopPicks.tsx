import { LivePrice, PriceDisclaimer, ProductPhoto, amazonItemFor } from "@/components/common/AmazonMedia";

export type TopPick = {
  /** Short label such as "Best overall" or "Best value". */
  label: string;
  /** Product name as it appears on the page. */
  name: string;
  /** One honest line on who it is for. */
  why: string;
  /** Full Amazon product URL, already carrying the page's own tag. */
  url: string;
  /** Illustration used when no Amazon photo is available. */
  image?: string;
};

function goHref(url: string) {
  return `/api/go?url=${encodeURIComponent(url)}`;
}

export default async function TopPicks({
  picks,
  title = "Quick picks",
  note,
  plainLabels = false,
  compactMobile = false,
}: {
  picks: TopPick[];
  title?: string;
  note?: string;
  plainLabels?: boolean;
  compactMobile?: boolean;
}) {
  const items = await Promise.all(picks.map((pick) => amazonItemFor({ url: pick.url })));
  const anyPrice = items.some((item) => item && (item.price || item.availability === "OUT_OF_STOCK"));
  return (
    <aside
      aria-label={title}
      className={
        compactMobile
          ? "my-4 rounded-2xl border-2 border-amber-400 bg-amber-400/10 p-3 md:my-6 md:p-6"
          : "my-6 rounded-2xl border-2 border-amber-400 bg-amber-400/10 p-4 md:p-6"
      }
    >
      <h2 className="text-xs font-bold uppercase tracking-widest text-amber-800 dark:text-amber-300 mb-3">{title}</h2>
      <ol className={compactMobile ? "space-y-2 md:space-y-3" : "space-y-3"}>
        {picks.map((pick) => (
          <li
            key={pick.label}
            className={
              compactMobile
                ? "flex flex-col gap-2 rounded-xl bg-background/80 border border-border p-2.5 sm:flex-row sm:items-center sm:justify-between md:gap-3 md:p-3"
                : "flex flex-col gap-3 rounded-xl bg-background/80 border border-border p-3 sm:flex-row sm:items-center sm:justify-between"
            }
          >
            <div className="flex min-w-0 items-center gap-3">
              <ProductPhoto url={pick.url} fallback={pick.image} alt={pick.name} variant="thumb" />
              <div className="min-w-0">
                <span
                  className={
                    plainLabels
                      ? "block text-[11px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400"
                      : "inline-block rounded-full bg-amber-400 px-2 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-zinc-950"
                  }
                >
                  {pick.label}
                </span>
                <p className={compactMobile ? "mt-1 text-[15px] font-bold text-foreground leading-snug md:text-base" : "mt-1 font-bold text-foreground leading-snug"}>{pick.name}</p>
                <p className={compactMobile ? "text-[13px] text-foreground/80 leading-snug md:text-sm" : "text-sm text-foreground/80 leading-snug"}>{pick.why}</p>
                <LivePrice url={pick.url} compact className="mt-1" />
              </div>
            </div>
            <a
              href={goHref(pick.url)}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              aria-label={`Check price of ${pick.name} on Amazon`}
              className={
                compactMobile
                  ? "inline-flex shrink-0 items-center justify-center rounded-full bg-amber-400 px-4 py-2 text-[13px] font-extrabold text-zinc-950 hover:bg-amber-300 transition-colors md:px-5 md:py-2.5 md:text-sm"
                  : "inline-flex shrink-0 items-center justify-center rounded-full bg-amber-400 px-5 py-2.5 text-sm font-extrabold text-zinc-950 hover:bg-amber-300 transition-colors"
              }
            >
              Check price on Amazon
            </a>
          </li>
        ))}
      </ol>
      {note ? <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{note}</p> : null}
      {anyPrice ? <PriceDisclaimer className="mt-2" /> : null}
    </aside>
  );
}
