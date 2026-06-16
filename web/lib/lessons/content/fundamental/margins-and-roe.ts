import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "margins-and-roe",
  title: "Margins and ROE: Measuring Profitability",
  level: 2,
  moduleId: "markets-fundamental",
  moduleOrder: 8,
  summary: "How much of each sales dollar becomes profit, and how hard equity works — with the catch that 'good' is industry-relative.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Two companies both earn `$100M`. One did it on `$300M` of sales, the other on `$3,000M`. Same profit, wildly different *quality*. **Margins** and **return on equity (ROE)** turn raw profit into ratios you can actually compare — as long as you compare the right things.",
    },
    { type: "heading", text: "The three margins" },
    {
      type: "text",
      body:
        "Each margin divides a profit subtotal by revenue, so each measures a different layer of profitability.",
    },
    {
      type: "list",
      items: [
        "**Gross margin** = `gross profit ÷ revenue` = `(revenue − COGS) ÷ revenue` — product profitability.",
        "**Operating margin** = `operating income ÷ revenue` — profitability of running the business.",
        "**Net margin** = `net income ÷ revenue` — what's left after everything.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "By construction, **gross ≥ operating ≥ net**, always — each subtotal subtracts more costs than the one above it. If that order ever breaks, something's wrong with the numbers.",
    },
    { type: "heading", text: "Return on equity" },
    {
      type: "text",
      body:
        "**ROE** = `net income ÷ shareholders' equity` — profit earned per dollar of equity. A mid-teens ROE or higher is often considered strong, but 'good' is **industry-relative** (software runs high, grocery runs thin), so always compare to peers and to the company's own trend.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Gross margin", def: "`gross profit ÷ revenue`. Profit after the direct cost of the product." },
        { term: "Operating margin", def: "`operating income ÷ revenue`. Profit from running the business." },
        { term: "Net margin", def: "`net income ÷ revenue`. Final profit per dollar of sales." },
        { term: "ROE", def: "`net income ÷ shareholders' equity`. Profit generated per dollar of equity." },
        { term: "Leverage", def: "Use of debt; can inflate ROE by shrinking the equity base." },
        { term: "DuPont analysis", def: "Breaks ROE into margin, asset turnover, and leverage to find its true drivers." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "A company reports revenue `$1,000M`, COGS `$600M`, operating income `$170M`, net income `$120M`, and shareholders' equity `$600M`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Gross profit** = `1,000 − 600 = $400M` → **gross margin** = `400 ÷ 1,000 = 40%`.",
        "**Operating margin** = `170 ÷ 1,000 = 17%`.",
        "**Net margin** = `120 ÷ 1,000 = 12%`.",
        "**ROE** = `net income ÷ equity = 120 ÷ 600 = 20%`.",
      ],
    },
    {
      type: "text",
      body:
        "Notice the margins step down `40% → 17% → 12%` as more costs come out — exactly the gross ≥ operating ≥ net order. The `20%` ROE means each dollar of equity generated `$0.20` of profit.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "ROE can be **inflated by debt**: debt-funded buybacks shrink equity, mechanically boosting ROE even without better operations. **DuPont analysis** separates the real drivers (margin, turnover, leverage). And margins differ by industry — cross-industry margin comparisons are misleading. *(One note: ROE sometimes uses average equity; we use ending equity here.)*",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't assume *higher ROE always means a better-run company*. It can be propped up by debt and buybacks that shrink equity. Always check leverage before crediting management for a high ROE.",
    },
  ],
};
