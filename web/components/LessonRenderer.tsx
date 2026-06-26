import type { Section } from "@/lib/lessons/types";
import { CandleAnatomy } from "@/components/charts/CandleAnatomy";
import { PayoffDiagram } from "@/components/charts/PayoffDiagram";
import { Icon } from "@/components/kit/Icon";
import { inline } from "@/lib/inline";

// Callout tone → icon + colour. Matches the Warm Campus lesson treatment (s_lesson).
const callout = {
  info: { icon: "info", ring: "border-learn/40 bg-learn/[0.08]", fg: "text-learn" },
  tip: { icon: "lightbulb", ring: "border-up/40 bg-up/[0.08]", fg: "text-up" },
  warn: { icon: "triangle-alert", ring: "border-streak/40 bg-streak/[0.08]", fg: "text-streak" },
} as const;

const charts = {
  "candle-anatomy": CandleAnatomy,
} as const;

function SectionBlock({ section }: { section: Section }) {
  switch (section.type) {
    case "heading":
      return <h2 className="mt-10 text-2xl font-extrabold tracking-tight text-ink">{section.text}</h2>;

    case "text":
      return <p className="mt-4 leading-relaxed text-muted">{inline(section.body)}</p>;

    case "list":
      return section.ordered ? (
        <ol className="mt-4 list-decimal space-y-2 pl-6 font-medium text-muted marker:text-faint">
          {section.items.map((it, i) => (
            <li key={i} className="leading-relaxed">{inline(it)}</li>
          ))}
        </ol>
      ) : (
        <ul className="mt-4 list-disc space-y-2 pl-6 font-medium text-muted marker:text-faint">
          {section.items.map((it, i) => (
            <li key={i} className="leading-relaxed">{inline(it)}</li>
          ))}
        </ul>
      );

    case "callout": {
      const c = callout[section.tone ?? "info"];
      return (
        <div className={`mt-6 flex items-start gap-3 rounded-[18px] border p-4 text-sm leading-relaxed ${c.ring}`}>
          <span className={`mt-0.5 shrink-0 ${c.fg}`}>
            <Icon name={c.icon} size={18} />
          </span>
          <div className="font-medium text-ink">{inline(section.body)}</div>
        </div>
      );
    }

    case "keyTerms":
      return (
        <dl className="mt-6 space-y-3 rounded-[22px] border border-strong bg-surface p-5 shadow-sm">
          {section.terms.map((t, i) => (
            <div key={i}>
              <dt className="font-extrabold text-ink">{t.term}</dt>
              <dd className="mt-1 text-sm font-medium leading-relaxed text-muted">{inline(t.def)}</dd>
            </div>
          ))}
        </dl>
      );

    case "chart": {
      const Chart = charts[section.kind as keyof typeof charts];
      if (!Chart) return null;
      return (
        <figure className="mt-8 rounded-[22px] border border-strong bg-surface p-5 shadow-sm">
          <div className="rounded-2xl border border-hairline bg-canvas p-4">
            <Chart />
          </div>
          {section.caption && <figcaption className="mt-3 text-center text-xs font-semibold text-faint">{section.caption}</figcaption>}
        </figure>
      );
    }

    case "payoff":
      return (
        <figure className="mt-8 rounded-[22px] border border-strong bg-surface p-5 shadow-sm">
          <div className="rounded-2xl border border-hairline bg-canvas p-4">
            <PayoffDiagram legs={section.legs} title={section.title} />
          </div>
          {section.caption && <figcaption className="mt-3 text-center text-xs font-semibold text-faint">{section.caption}</figcaption>}
        </figure>
      );
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
