import { Fragment, type ReactNode } from "react";
import type { Section } from "@/lib/lessons/types";
import { CandleAnatomy } from "@/components/charts/CandleAnatomy";

// Tiny inline formatter: turns **bold**, *italic*, and `code` into React nodes.
// Intentionally minimal — lesson prose only needs emphasis and inline code.
// Bold is matched before italic so `**x**` never falls into the single-`*` branch.
function inline(text: string): ReactNode[] {
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

// Color encodes meaning (design principle #3): learn=violet, up=green, streak=amber.
const calloutStyles = {
  info: "border-learn/40 bg-learn/10 text-learn",
  tip: "border-up/40 bg-up/10 text-up",
  warn: "border-streak/40 bg-streak/10 text-streak",
} as const;

const charts = {
  "candle-anatomy": CandleAnatomy,
} as const;

function SectionBlock({ section }: { section: Section }) {
  switch (section.type) {
    case "heading":
      return <h2 className="mt-10 text-xl font-medium tracking-tight text-ink">{section.text}</h2>;

    case "text":
      return <p className="mt-4 leading-relaxed text-muted">{inline(section.body)}</p>;

    case "list":
      return section.ordered ? (
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-muted marker:text-faint">
          {section.items.map((it, i) => (
            <li key={i} className="leading-relaxed">{inline(it)}</li>
          ))}
        </ol>
      ) : (
        <ul className="mt-4 list-disc space-y-2 pl-6 text-muted marker:text-faint">
          {section.items.map((it, i) => (
            <li key={i} className="leading-relaxed">{inline(it)}</li>
          ))}
        </ul>
      );

    case "callout": {
      const tone = section.tone ?? "info";
      return (
        <div className={`mt-6 rounded-lg border p-4 text-sm leading-relaxed ${calloutStyles[tone]}`}>
          {inline(section.body)}
        </div>
      );
    }

    case "keyTerms":
      return (
        <dl className="mt-6 space-y-3 rounded-lg border border-strong bg-surface p-5">
          {section.terms.map((t, i) => (
            <div key={i}>
              <dt className="font-medium text-ink">{t.term}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-muted">{inline(t.def)}</dd>
            </div>
          ))}
        </dl>
      );

    case "chart": {
      const Chart = charts[section.kind];
      return (
        <figure className="mt-8 flex flex-col items-center rounded-lg border border-strong bg-surface p-6">
          <Chart />
          {section.caption && (
            <figcaption className="mt-3 text-center text-xs text-faint">{section.caption}</figcaption>
          )}
        </figure>
      );
    }
  }
}

export function LessonRenderer({ sections }: { sections: Section[] }) {
  return (
    <div>
      {sections.map((section, i) => (
        <SectionBlock key={i} section={section} />
      ))}
    </div>
  );
}
