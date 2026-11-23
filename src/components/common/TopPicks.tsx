export type TopPick = {
  /** Short label such as "Best overall" or "Best value". */
  label: string;
  /** Product name as it appears on the page. */
  name: string;
  /** One honest line on who it is for. */
  why: string;
  /** Full Amazon product URL, already carrying the page's own tag. */
  url: string;
};

function goHref(url: string) {
  return `/api/go?url=${encodeURIComponent(url)}`;
}

export default function TopPicks({
  picks,
  title = "Quick picks",
  note,
}: {
  picks: TopPick[];
  title?: string;
  note?: string;
}) {
  return (
    <aside
      aria-label={title}
      className="my-6 rounded-2xl border-2 border-amber-400 bg-amber-400/10 p-4 md:p-6"
    >
      <h2 className="text-xs font-bold uppercase tracking-widest text-amber-800 dark:text-amber-300 mb-3">{title}</h2>
      <ol className="space-y-3">
        {picks.map((pick) => (
          <li
            key={pick.label}
            className="flex flex-col gap-2 rounded-xl bg-background/80 border border-border p-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0">
              <span className="inline-block rounded-full bg-amber-400 px-2 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-zinc-950">
                {pick.label}
              </span>
              <p className="mt-1 font-bold text-foreground leading-snug">{pick.name}</p>
              <p className="text-sm text-foreground/80 leading-snug">{pick.why}</p>
            </div>
            <a
              href={goHref(pick.url)}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              aria-label={`Check price of ${pick.name} on Amazon`}
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-amber-400 px-5 py-2.5 text-sm font-extrabold text-zinc-950 hover:bg-amber-300 transition-colors"
            >
              Check price on Amazon
            </a>
          </li>
        ))}
      </ol>
      {note ? <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{note}</p> : null}
    </aside>
  );
}
