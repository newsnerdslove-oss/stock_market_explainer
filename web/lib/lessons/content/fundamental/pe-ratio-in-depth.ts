import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "pe-ratio-in-depth",
  title: "P/E Ratio in Depth: Trailing, Forward, and PEG",
  level: 2,
  moduleId: "markets-fundamental",
  moduleOrder: 4,
  summary: "Beyond the basic P/E: how trailing differs from forward, how PEG adjusts for growth, and when the ratio quietly lies.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "You already know **`P/E = price ÷ EPS`** — dollars paid per $1 of annual earnings. But which earnings? Last year's or next year's? And is a high P/E always expensive? This lesson sharpens the tool with two refinements the pros lean on: the trailing-vs-forward split, and the PEG ratio.",
    },
    { type: "heading", text: "Trailing vs. forward" },
    {
      type: "list",
      items: [
        "**Trailing P/E** uses the last 12 months of *actual* reported EPS — backward-looking but factual.",
        "**Forward P/E** uses *projected* EPS for the next 12 months — forward-looking but only as good as the estimate.",
      ],
    },
    {
      type: "text",
      body:
        "Comparing the two is informative. If **trailing > forward**, the market expects EPS to *grow* (rising earnings shrink the forward multiple). If **trailing < forward**, the market expects earnings to *decline*.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Forward P/E rests on analyst estimates, which can be wrong. A low forward P/E that depends on optimistic forecasts isn't truly cheap until those earnings actually show up.",
    },
    { type: "heading", text: "PEG: P/E adjusted for growth" },
    {
      type: "text",
      body:
        "A high P/E can be justified by fast growth. The **PEG ratio** scales for that: `PEG = P/E ÷ earnings growth rate (%)`. As a rough heuristic: **PEG ≈ 1** is fairly priced, **< 1** may be undervalued, **> 1** may be overvalued.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Trailing P/E", def: "`price ÷ last-12-months actual EPS`. Backward-looking and factual." },
        { term: "Forward P/E", def: "`price ÷ projected next-12-months EPS`. Forward-looking; depends on estimates." },
        { term: "PEG ratio", def: "`P/E ÷ earnings growth rate (%)`. Adjusts the P/E for expected growth." },
        { term: "Value trap", def: "A stock that looks cheap on a low P/E but is cheap because prospects are deteriorating." },
        { term: "Cyclical", def: "A company whose earnings swing with the economic cycle, distorting point-in-time P/E." },
        { term: "Earnings growth rate", def: "The expected annual percentage growth in EPS, used as the PEG denominator." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "A stock trades at `$60`. Trailing EPS is `$3`, expected earnings growth is `25%`, and forward (next-12-month) EPS is `$4`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Trailing P/E** = `price ÷ trailing EPS = 60 ÷ 3 = 20`.",
        "**PEG** = `P/E ÷ growth rate = 20 ÷ 25 = 0.8`.",
        "**Forward P/E** = `price ÷ forward EPS = 60 ÷ 4 = 15`.",
      ],
    },
    {
      type: "text",
      body:
        "A trailing P/E of `20` looks rich on its own, but a **PEG of `0.8`** says it's reasonable *given* `25%` growth. And the forward P/E of `15` (below trailing) confirms the market expects earnings to rise.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "PEG has blind spots. For a low- or no-growth company, the tiny denominator makes PEG explode to a meaningless number. PEG is also only as reliable as the growth estimate it's built on, and a single point-in-time P/E badly misreads cyclicals and companies with one-time items.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't assume *a low P/E always means cheap*. It can reflect declining prospects — a **value trap**. Conversely, a high P/E can be fully justified by growth. The number needs context, not a reflex.",
    },
  ],
};
