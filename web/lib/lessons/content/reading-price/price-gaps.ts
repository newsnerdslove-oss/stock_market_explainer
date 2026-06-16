import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "price-gaps",
  title: "Price Gaps",
  level: 1,
  moduleId: "markets-reading-price",
  moduleOrder: 7,
  summary: "The blank spaces on a chart where price jumped with no trades in between.",
  estMinutes: 4,
  sections: [
    {
      type: "text",
      body:
        "Sometimes a chart has a literal **blank space** — the stock closed one day and opened the next at a noticeably different price, with nothing drawn in between. That empty space is a **gap**, and it usually means something happened while the market was closed.",
    },
    { type: "heading", text: "What a gap is" },
    {
      type: "text",
      body:
        "A **gap** is a space on the chart where the price **opened notably different from the prior close**, with **no trades in between**. A **gap up** opens higher than the previous close; a **gap down** opens lower. The blank area exists precisely because nobody traded at those in-between prices.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "gap", def: "A blank space where price opened far from the prior close, with no trades between." },
        { term: "gap up", def: "Opening notably higher than the previous close." },
        { term: "gap down", def: "Opening notably lower than the previous close." },
        { term: "prior close", def: "The previous period's closing price — the gap is measured from here." },
        { term: "gap fill", def: "When price later retraces back through the gap. A tendency, not a rule." },
        { term: "catalyst", def: "The news or event that triggered the jump — e.g. earnings." },
      ],
    },
    { type: "heading", text: "Why gaps happen" },
    {
      type: "text",
      body:
        "Gaps usually appear **overnight or over a weekend**, when news arrives while the market is closed. Demand and supply build up with nowhere to go, so the next open jumps to a new price all at once. Common **catalysts** include:",
    },
    {
      type: "list",
      items: [
        "**Earnings** reported after the close or before the open.",
        "**Company news** — a buyout, a recall, a lawsuit.",
        "**Analyst changes** — an upgrade or downgrade.",
        "**Broad or economic news** affecting the whole market.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Traders often talk about a gap **filling** — price drifting back through the blank space later on. It happens often enough to be worth noting, but it's a **tendency, not a rule**; plenty of gaps never fill.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "A stock **closes Tuesday at `$80`**. After the close it reports **strong earnings**. Wednesday it **opens at `$90`** — a `$10` **gap up**. Notice the key point: **nothing traded between `$80` and `$90`**. The price leapt straight there at the open, leaving a blank space on the chart.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "A common misunderstanding: *trades happened at the in-between prices, they just aren't shown.* No — **no trades occurred inside the gap.** That's exactly why the space is empty.",
    },
  ],
};
