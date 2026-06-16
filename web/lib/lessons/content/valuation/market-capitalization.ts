import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "market-capitalization",
  title: "Market capitalization",
  level: 1,
  moduleId: "markets-valuation",
  moduleOrder: 3,
  summary: "The real measure of a company's size — and why the share price isn't it.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "Ask which is the *bigger* company — one whose stock trades at $800 or one at $25 — and most beginners point at the $800 stock. That's the trap. The share price tells you almost nothing about size. **Market capitalization** does.",
    },
    { type: "heading", text: "The formula" },
    {
      type: "text",
      body:
        "Market cap is the total value the market puts on a company's equity: `market cap = share price × shares outstanding`. It's what you'd pay, in theory, to buy every share at today's price. Because it folds in the *number* of shares, it captures size in a way the price tag alone never can.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "A $25 stock with **4 billion** shares is worth `25 × 4B = $100B`. An $800 stock with **10 million** shares is worth `800 × 10M = $8B`. The cheaper-looking stock is the far bigger company. Always multiply.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Market capitalization", def: "`share price × shares outstanding` — the total market value of a company's equity, and the standard measure of its size." },
        { term: "Large cap", def: "Roughly $10B and up — established, widely-held companies (a rough convention, not an official line)." },
        { term: "Mid cap", def: "Roughly $2B–$10B — companies past the startup stage but still growing." },
        { term: "Small cap", def: "Roughly $300M–$2B — smaller, often faster-growing and more volatile." },
        { term: "Shares outstanding", def: "The total count of a company's shares held by all investors." },
      ],
    },
    { type: "heading", text: "The size buckets" },
    {
      type: "list",
      items: [
        "**Large cap** — about **$10B+**. The biggest names sometimes get called *mega cap* once they pass ~$200B. More established, generally less volatile.",
        "**Mid cap** — about **$2B–$10B**. A middle ground of growth and stability.",
        "**Small cap** — about **$300M–$2B**. Smaller companies with more room to grow — and more risk.",
      ],
    },
    {
      type: "text",
      body:
        "These cutoffs are **industry conventions**, not official rules — different data providers draw the lines slightly differently. As a rule of thumb, *larger* tends to mean more established and steadier; *smaller* tends to mean faster potential growth alongside bigger swings.",
    },
    { type: "heading", text: "Why it matters" },
    {
      type: "text",
      body:
        "Market cap is how the market sorts companies by size, and major indices like the **S&P 500** weight their members by it — the biggest companies count the most. One caveat: market cap is the value of the *equity*, not the price to buy the whole business. A buyout (the **enterprise value**) also accounts for the company's debt and cash.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**\"Higher share price = bigger company\" is false.** Size depends on price *and* share count. A company can run its share price up or down with a split without changing its market cap one cent. To compare sizes, multiply price × shares — never eyeball the price tag.",
    },
  ],
};
