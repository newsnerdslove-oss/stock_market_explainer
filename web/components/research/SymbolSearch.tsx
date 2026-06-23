"use client";

// Reusable ticker lookup: a free-text symbol input with autocomplete from the
// known company names that navigates to /symbol/[ticker]. Used standalone on the
// home page and inside ResearchBar on the symbol page.

import { useState } from "react";
import { useRouter } from "next/navigation";
import { COMPANY_NAMES } from "@/lib/stocks/names";

const SUGGESTIONS = Object.keys(COMPANY_NAMES);

export function SymbolSearch({
  className = "",
  inputClassName = "w-44",
  placeholder = "Search a symbol…",
  buttonLabel = "Go",
  autoFocus = false,
}: {
  className?: string;
  inputClassName?: string;
  placeholder?: string;
  buttonLabel?: string;
  autoFocus?: boolean;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function go(e: React.FormEvent) {
    e.preventDefault();
    const sym = query.trim().toUpperCase();
    if (sym) router.push(`/symbol/${encodeURIComponent(sym)}`);
  }

  return (
    <form onSubmit={go} className={`flex items-center gap-2 ${className}`}>
      {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        list="symbol-suggestions"
        placeholder={placeholder}
        aria-label="Search a symbol"
        autoFocus={autoFocus}
        className={`${inputClassName} rounded-md border border-strong bg-canvas px-3 py-1.5 text-sm uppercase text-ink placeholder:text-faint placeholder:normal-case focus:border-learn focus:outline-none`}
      />
      <datalist id="symbol-suggestions">
        {SUGGESTIONS.map((s) => (
          <option key={s} value={s}>
            {COMPANY_NAMES[s]}
          </option>
        ))}
      </datalist>
      <button type="submit" className="rounded-md border border-strong px-3 py-1.5 text-sm text-ink transition hover:bg-surface-2">
        {buttonLabel}
      </button>
    </form>
  );
}
