"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

const FilterContext = createContext("All");

export function DealFilter({
  categories,
  total,
  children,
}: {
  categories: string[];
  total: number;
  children: ReactNode;
}) {
  const [category, setCategory] = useState("All");
  const chips = ["All", ...categories];
  return (
    <FilterContext.Provider value={category}>
      <div className="flex flex-wrap gap-2 mb-3">
        {chips.map((chip) => {
          const on = chip === category;
          return (
            <button
              key={chip}
              type="button"
              onClick={() => setCategory(chip)}
              className={`px-3 py-1.5 rounded-full text-sm font-bold border ${on ? "bg-amber-400 border-amber-400 text-zinc-950" : "border-border text-foreground hover:bg-amber-400/10"}`}
            >
              {chip}
            </button>
          );
        })}
      </div>
      <p className="text-sm text-muted-foreground mb-4">{total} listings Amazon currently marks at 50% off or more.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">{children}</div>
    </FilterContext.Provider>
  );
}

export function DealCard({ category, children }: { category: string; children: ReactNode }) {
  const selected = useContext(FilterContext);
  if (selected !== "All" && selected !== category) return null;
  return <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col">{children}</div>;
}
