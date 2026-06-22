import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "index-options-leaps",
  title: "Index Options & LEAPS: Cash Settlement, European Style & 60/40 Tax",
  level: 4,
  moduleId: "markets-adv-options",
  moduleOrder: 7,
  summary:
    "Understand why broad-based index options settle in cash, exercise European-style, get special 1256 60/40 tax treatment, and how LEAPS extend the time horizon.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Index options trade like equity options but settle and tax very differently — a favorite exam trap. The headline facts: **broad-based index options are cash-settled, European-style, and get Section 1256 60/40 tax treatment**. **LEAPS** just stretch any option's time horizon.",
    },
    { type: "heading", text: "Broad-based index options" },
    {
      type: "list",
      items: [
        "Examples: `SPX`, `NDX`, `RUT`, `DJX`.",
        "**Cash-settled:** the ITM amount × the multiplier is paid in cash — **no stock changes hands**.",
        "**Generally European-style:** exercisable **only at expiration**.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "GOTCHA: `OEX` (the S&P 100) is **American-style** — the classic exception. `XEO` is the **European** version of the S&P 100. This is educational content, not financial advice.",
    },
    { type: "heading", text: "Section 1256 / 60-40 tax" },
    {
      type: "list",
      items: [
        "Broad-based, cash-settled index options are **Section 1256 contracts**.",
        "Gains/losses are taxed **60% long-term / 40% short-term**, **regardless of holding period**, and are **marked-to-market at year-end**.",
        "`SPX` = 1256 (60/40). `SPY` (the ETF option) = an **ordinary equity option**, taxed by **actual holding period**.",
        "Narrow-based index options are generally taxed like equity options.",
      ],
    },
    { type: "heading", text: "LEAPS" },
    {
      type: "text",
      body:
        "**LEAPS** (Long-term Equity AnticiPation Securities) are listed options that, upon listing, have terms **greater than 1 year, up to about 3 years (~39 months)**. They exist on both equities and indexes. The long horizon means **more time value → a higher premium**.",
    },
    { type: "heading", text: "Worked example — 1256 60/40" },
    {
      type: "text",
      body:
        "A trader books a `$10,000` gain on `SPX` options held just `20 days`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "`SPX` options are Section 1256 → **60% long-term**: `0.60 × 10,000 = $6,000`.",
        "**40% short-term**: `0.40 × 10,000 = $4,000` — even though held under a year.",
        "The same `$10,000` gain on `SPY` options held `20 days` = **100% short-term** (`$10,000`), because SPY options follow the actual holding period.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Broad-based index option", def: "An option on a broad index (SPX, NDX, RUT, DJX) — cash-settled and generally European." },
        { term: "Cash settlement", def: "The ITM amount × multiplier is paid in cash; no shares are delivered." },
        { term: "European-style", def: "Exercisable only at expiration — typical for broad-based index options." },
        { term: "OEX exception", def: "OEX (S&P 100) is American-style; XEO is its European counterpart." },
        { term: "Section 1256 contract", def: "Broad-based cash-settled index options taxed 60/40 and marked-to-market at year-end." },
        { term: "60/40 treatment", def: "60% of the gain/loss is long-term, 40% short-term, regardless of holding period." },
        { term: "SPY vs. SPX tax", def: "SPY options are ordinary equity options (holding-period tax); SPX gets 1256 60/40." },
        { term: "LEAPS", def: "Long-dated options (>1 year up to ~3 years / ~39 months at listing) with large time value and higher premiums." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'All index options are taxed/settled the same as the ETF that tracks the index.'* `SPX` (cash-settled, European, broad-based) gets **1256 60/40**; `SPY` options are **physically settled equity options taxed by holding period**. This is educational content, not financial advice.",
    },
  ],
};
