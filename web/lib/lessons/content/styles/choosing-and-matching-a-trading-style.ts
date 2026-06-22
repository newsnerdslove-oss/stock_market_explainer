import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "choosing-and-matching-a-trading-style",
  title: "Choosing & Matching a Trading Style",
  level: 2,
  moduleId: "markets-styles",
  moduleOrder: 7,
  summary:
    "How to match a style to YOU — the active↔passive spectrum, its real tradeoffs in time, capital, stress, and taxes, and the honest evidence that low-cost indexing beats most active traders.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "This whole module has walked the **active↔passive spectrum** — scalping, day trading, swing trading, position trading, and buy-and-hold investing. The natural last question is *'which one is right for me?'* The honest answer is that the best style isn't the one with the highest theoretical return — it's the one you can **actually execute** given your time, capital, temperament, and goals. A style you can't stick to has a return of roughly zero.",
    },
    {
      type: "heading",
      text: "The spectrum, from fastest to slowest",
    },
    {
      type: "list",
      items: [
        "**Scalping** — seconds to minutes; many trades a day; demands constant screen time and razor-thin cost control.",
        "**Day trading** — minutes to hours; flat overnight; high screen time, high cost drag, low win rate.",
        "**Swing trading** — days to weeks; check-in once or twice a day; carries overnight and weekend gap risk.",
        "**Position trading** — weeks to months; a few decisions a month; rides longer trends.",
        "**Buy-and-hold investing** — years to decades; mostly passive; lets compounding and the market's long-term drift do the work.",
      ],
    },
    {
      type: "text",
      body:
        "Notice the pattern: as you move from passive to active, the **frequency** of decisions rises — and with it the **time, stress, and cost** required. Faster is not better or worse; it's a different set of demands. The job is to match those demands to your real life, not to an idealized version of it.",
    },
    {
      type: "heading",
      text: "The four fit factors",
    },
    {
      type: "list",
      items: [
        "**Time** — Can you watch screens all day (scalp/day), check in daily (swing), or only review weekly/monthly (position/invest)? Be honest about a day job.",
        "**Capital** — Faster styles multiply costs and need a buffer to survive drawdowns. Note: even after the **$25,000** pattern-day-trader minimum was removed in 2026 (see below), more capital lowers *risk of ruin*, not difficulty.",
        "**Temperament** — Can you sit through volatility without panic-selling, or does watching ticks all day push you into FOMO and revenge trades? Stress tolerance is a real constraint.",
        "**Goals** — Saving for retirement in 30 years is a different problem than trying to generate monthly income. The time horizon of your *goal* should anchor the style.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Active↔passive spectrum", def: "The range of styles from constant trading (scalping) to rarely trading (buy-and-hold investing), ordered by how frequently you make decisions." },
        { term: "Buy-and-hold investing", def: "A passive approach: buy broad assets and hold for years, letting compounding and long-term market drift work, with minimal trading." },
        { term: "Screen time", def: "How many hours you must actively watch the market to run a style — high for scalping/day trading, low for investing." },
        { term: "Pattern Day Trader (PDT) rule", def: "The legacy FINRA rule that flagged 4+ day trades in 5 business days in a margin account and required $25,000 minimum equity — eliminated effective June 4, 2026." },
        { term: "Cost drag", def: "The cumulative loss to spreads, commissions, slippage, and taxes; it grows with trading frequency and compounds against active styles." },
        { term: "Tax efficiency", def: "Keeping more of your return by triggering fewer or lower-taxed gains — long-term holdings (held >1 year) are taxed at lower U.S. rates than short-term." },
        { term: "Index fund", def: "A fund that simply tracks a broad market index at very low cost, the core tool of low-cost passive investing." },
      ],
    },
    {
      type: "heading",
      text: "Costs and taxes tilt the field toward patience",
    },
    {
      type: "text",
      body:
        "Two forces quietly punish high frequency. First, **cost drag**: every trade pays a spread and possibly a commission, and loses a little to slippage. Trade often and these compound against you. Second, **taxes**. Under **IRS Topic 409**, a gain on an asset held **one year or less is short-term**, taxed as **ordinary income** at your graduated rate. Hold **more than one year** and it's **long-term**, taxed at the lower **0%, 15%, or 20%** rates. Active styles realize gains constantly at the higher short-term rate; buy-and-hold defers and qualifies for the lower one. (Tax rules vary by account and situation — this is education, not tax advice.)",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "The **$25,000** barrier is mostly history: effective **June 4, 2026** (FINRA Regulatory Notice 26-10), FINRA eliminated the Pattern Day Trader rule and its $25k minimum, replacing them with **real-time intraday margin** standards under Rule 4210. There's an **18-month phase-in through October 20, 2027**, so brokers migrate at different speeds — confirm what *your* broker currently applies. Lower capital barrier, same difficulty.",
    },
    {
      type: "heading",
      text: "The honest evidence: passive usually wins",
    },
    {
      type: "text",
      body:
        "Here's the uncomfortable finding that should anchor any style choice. S&P's **SPIVA** scorecards consistently show that over a **15-year** horizon, **no major fund category** has had a *majority* of active managers beat its benchmark — and for U.S. **large-cap** funds, **more than 90%** underperformed the index after costs. These are full-time professionals. Retail day traders fare worse: Brazil and Taiwan research found roughly **97%** of long-term day traders lost money and **fewer than 1%** were reliably profitable after costs. Low-cost passive indexing isn't the boring default — for most people it's the *evidence-backed* one.",
    },
    {
      type: "text",
      body:
        "This doesn't mean active trading is forbidden — it means you should choose it with eyes open, size it as a small, deliberate sleeve rather than your retirement, and judge yourself on **process** (did I follow my plan?) over any single result. The right style is the intersection of what the evidence supports and what you can sustain.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "A practical default many use: a **low-cost index core** for long-term goals (the part the evidence favors), plus an optional small active 'satellite' only if you have the time, temperament, and risk capital for it. Start passive; earn the right to go active.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'the most active style makes the most money.'* The opposite is usually true after costs and taxes — frequency raises **cost and error**, not returns, and most active traders underperform a simple **buy-and-hold index**. Match the style to your time, capital, temperament, and goals; when in doubt, the low-cost passive path is the one the data backs. Educational content, not financial advice.",
    },
  ],
};
