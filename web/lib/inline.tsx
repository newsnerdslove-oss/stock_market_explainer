import { Fragment, type ReactNode } from "react";

// Tiny inline formatter shared by lesson prose and quiz text: turns **bold**,
// *italic*, and `code` into React nodes. Intentionally minimal — content only
// needs emphasis and inline code. Bold is matched before italic so `**x**`
// never falls into the single-`*` branch.
export function inline(text: string): ReactNode[] {
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g).filter(Boolean);
  return tokens.map((tok, i) => {
    if (tok.startsWith("**") && tok.endsWith("**")) {
      return (
        <strong key={i} className="font-medium text-ink">
          {tok.slice(2, -2)}
        </strong>
      );
    }
    if (tok.startsWith("*") && tok.endsWith("*")) {
      return <em key={i}>{tok.slice(1, -1)}</em>;
    }
    if (tok.startsWith("`") && tok.endsWith("`")) {
      return (
        <code key={i} className="rounded bg-surface-2 px-1 py-0.5 font-mono text-[0.85em] text-up">
          {tok.slice(1, -1)}
        </code>
      );
    }
    return <Fragment key={i}>{tok}</Fragment>;
  });
}
