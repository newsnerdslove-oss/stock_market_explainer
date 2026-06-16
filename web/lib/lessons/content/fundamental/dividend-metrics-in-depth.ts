import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "dividend-metrics-in-depth",
  title: "Dividend Metrics: Payout, Coverage, and Yield Traps",
  level: 2,
  moduleId: "markets-fundamental",
  moduleOrder: 6,
  summary: "A fat dividend yield can be a trap. Learn to judge whether a payout is actually sustainable using payout ratio and coverage.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "A high dividend yield looks like free money — until the dividend gets cut and the stock drops with it. The skill isn't spotting big yields; it's judging whether a dividend is *sustainable*. Three metrics do most of that work. *(This is educational material, not financial advice.)*",
    },
    { type: "heading", text: "Payout and retention" },
    {
      type: "text",
      body:
        "The **payout ratio** = `dividends ÷ net income` (equivalently, `DPS ÷ EPS`) — the share of profit paid out. What's kept is the **retention ratio** = `1 − payout`, reinvested in the business. A payout **above 100%** means the company is paying out *more than it earns* — funded by reserves or debt, which usually can't last.",
    },
    { type: "heading", text: "Coverage" },
    {
      type: "text",
      body:
        "Flip the payout over and you get **dividend coverage** = `net income ÷ dividends` (or `EPS ÷ DPS`). Higher is safer: `2×` means earnings are twice the dividend, a comfortable cushion; close to `1×` means little room for a bad year.",
    },
    { type: "heading", text: "Yield and the trap" },
    {
      type: "text",
      body:
        "**Dividend yield** = `annual DPS ÷ price`. Because price is the denominator, a *falling* price mechanically *raises* the yield. A **yield trap** is a sky-high yield that's really signaling an upcoming cut — the market has already marked the price down in anticipation.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Sanity-check every dividend against **free cash flow** — dividends are paid in cash, not accounting profit. A company can show a fine payout ratio on net income yet lack the actual cash to keep paying.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Payout ratio", def: "`dividends ÷ net income` (or `DPS ÷ EPS`). Share of profit paid as dividends." },
        { term: "Retention ratio", def: "`1 − payout`. Share of profit reinvested in the business." },
        { term: "Dividend coverage", def: "`net income ÷ dividends` (or `EPS ÷ DPS`). How many times earnings cover the dividend." },
        { term: "Dividend yield", def: "`annual DPS ÷ price`. Income return relative to the share price." },
        { term: "Yield trap", def: "A high yield that signals a likely dividend cut, usually from a falling price." },
        { term: "DPS", def: "Dividend per share — the cash dividend paid on each share." },
        { term: "REIT", def: "Real estate investment trust; must distribute most taxable income, so high payouts are normal." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "A company reports net income `$200M`, dividends `$150M`, EPS `$4`, DPS `$3`, and a share price of `$50`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Payout ratio** = `dividends ÷ net income = 150 ÷ 200 = 75%`.",
        "**Retention ratio** = `1 − 0.75 = 25%`.",
        "**Coverage** = `net income ÷ dividends = 200 ÷ 150 = 1.33×`.",
        "**Yield** = `DPS ÷ price = 3 ÷ 50 = 6%`.",
      ],
    },
    {
      type: "text",
      body:
        "A `75%` payout with `1.33×` coverage means the dividend is funded — but with **little cushion**. One weak year could pressure it.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Context matters. The payout ratio uses *net income*, which includes non-cash items, so a company can show a healthy ratio yet have low free cash flow. And some structures are different by design: **REITs** must distribute roughly `90%` of taxable income, so a `90%+` payout is *normal* for them, not a red flag.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't assume *a higher yield is always better*. A spiking yield is often a **yield trap** — the price fell because the market expects a cut. Sustainability beats the headline yield every time.",
    },
  ],
};
