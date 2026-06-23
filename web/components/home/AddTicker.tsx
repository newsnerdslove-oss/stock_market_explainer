"use client";

// A compact "add a ticker" input with optional autocomplete, used by the home
// page stock and crypto strips. Calls onAdd with the raw text; the caller
// normalizes and persists.

import { useId, useState } from "react";

export function AddTicker({
  onAdd,
  placeholder = "Add…",
  suggestions = [],
  className = "",
}: {
  onAdd: (value: string) => void;
  placeholder?: string;
  suggestions?: { value: string; label?: string }[];
  className?: string;
}) {
  const [value, setValue] = useState("");
  const listId = useId();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const v = value.trim();
    if (!v) return;
    onAdd(v);
    setValue("");
  }

  return (
    <form onSubmit={submit} className={`flex items-center gap-1.5 ${className}`}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        list={suggestions.length ? listId : undefined}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-28 rounded-md border border-strong bg-canvas px-2 py-1 text-xs uppercase text-ink placeholder:text-faint placeholder:normal-case focus:border-learn focus:outline-none"
      />
      {suggestions.length > 0 && (
        <datalist id={listId}>
          {suggestions.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </datalist>
      )}
      <button type="submit" className="rounded-md border border-strong px-2 py-1 text-xs text-ink transition hover:bg-surface-2">
        Add
      </button>
    </form>
  );
}
