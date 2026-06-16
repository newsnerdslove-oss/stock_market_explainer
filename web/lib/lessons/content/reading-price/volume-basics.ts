import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "volume-basics",
  title: "Volume Basics",
  level: 1,
  moduleId: "markets-reading-price",
  moduleOrder: 4,
  summary: "The bars under the price — what they count and why they confirm a move.",
  estMinutes: 4,
  sections: [
    {
      type: "text",
      body:
        "Under almost every price chart sits a row of bars most beginners ignore: **volume**. It answers a simple but powerful question — *how many people were actually trading?* A price move backed by heavy volume tells a very different story from the same move on a quiet day.",
    },
    { type: "heading", text: "What volume measures" },
    {
      type: "text",
      body:
        "**Volume** is the number of **shares traded** in a period. On a daily chart, each volume bar is that day's total shares changing hands. Crucially, it counts **shares — not dollars and not people**. A single large institution can create enormous volume on its own; one busy retail trader barely registers.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "volume", def: "The number of shares traded during a period." },
        { term: "average volume", def: "Typical volume over a recent stretch — the baseline you compare a day against." },
        { term: "volume bar", def: "The bar under the price showing one period's volume." },
        { term: "confirmation", def: "Using volume to judge whether a price move has real participation behind it." },
        { term: "volume spike", def: "A sudden burst of volume far above average, often around news." },
        { term: "liquidity", def: "How easily shares can be bought or sold; higher volume usually means more liquidity." },
      ],
    },
    { type: "heading", text: "Why volume confirms a move" },
    {
      type: "text",
      body:
        "Traders use volume to **confirm** price moves. A rise on **high** volume suggests broad conviction — lots of buyers agree. The same rise on **low** volume is weaker and more likely to fizzle. As a tendency (not a guarantee), strong moves tend to come with strong volume.",
    },
    { type: "heading", text: "When volume spikes" },
    {
      type: "list",
      items: [
        "**Earnings reports** — results drop and everyone reacts at once.",
        "**Company news** — a product launch, a lawsuit, a CEO change.",
        "**The open and close** — activity clusters at the start and end of the day.",
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Say a stock normally trades about **1M shares/day**. Today it jumps **+6%** on **5M shares** — five times its average. That **volume spike** signals real conviction behind the move. Now picture the same **+6%** on just **300k shares**: thin participation, more likely to fade.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "A common trap: *high volume means the price is going up.* Not so. Volume measures **activity, not direction**. A big-volume day can just as easily be heavy **selling** — lots of conviction pushing the price **down**.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Always read a price move against its **average volume**. A move backed by well-above-average volume carries more weight than the same move on a sleepy day.",
    },
  ],
};
