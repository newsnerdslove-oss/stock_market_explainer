import type { Section } from "@/lib/lessons/types";
import { CandleAnatomy } from "@/components/charts/CandleAnatomy";
import { inline } from "@/lib/inline";

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
