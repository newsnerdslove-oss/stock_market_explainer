import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "asset-allocation",
  title: "Asset Allocation: The Decision That Drives Your Portfolio",
  level: 3,
  moduleId: "markets-portfolio",
  moduleOrder: 1,
  summary:
    "How the high-level mix of stocks, bonds, and cash is set to a target — and why that one choice drives most of a diversified portfolio's return variability over time.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Before you ever pick a single stock, you make a bigger decision — usually without noticing. **How much** of your money sits in stocks versus bonds versus cash? That high-level split is your **asset allocation**, and for a diversified portfolio it shapes your results far more than which individual names you own.",
    },
    {
      type: "heading",
      text: "What asset allocation actually is",
    },
    {
      type: "text",
      body:
        "Asset allocation means dividing your money across broad **asset classes** — typically stocks, bonds, and cash — to suit a goal and a comfort level with risk. Each class behaves differently: **stocks** offer higher expected return with higher volatility, **bonds** offer lower return with steadier income, and **cash** is stable but barely grows. The mix you choose is a *strategic* decision, set deliberately and reviewed over time rather than changed on a whim.",
    },
    {
      type: "list",
      items: [
        "**Stocks** — highest expected return, highest swings.",
        "**Bonds** — lower return, income, smaller swings.",
        "**Cash** — stable and liquid, but little growth.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Asset allocation", def: "How a portfolio is divided across broad asset classes (stocks, bonds, cash) to match a goal and risk level." },
        { term: "Asset class", def: "A group of investments that behave similarly — e.g. stocks, bonds, or cash." },
        { term: "Target weights", def: "The intended percentage of each asset class — e.g. `60%` stocks / `40%` bonds." },
        { term: "Strategic allocation", def: "The long-run mix chosen deliberately, set *before* picking individual securities." },
        { term: "Weighted average return", def: "`Σ(weight × return)` — each class's return scaled by its share of the portfolio." },
        { term: "Liquidity", def: "How quickly an asset can be turned into cash without losing value." },
        { term: "Return variability", def: "How much returns bounce around over time — the *variation*, not the dollar level." },
      ],
    },
    {
      type: "heading",
      text: "Why it matters so much",
    },
    {
      type: "text",
      body:
        "A famous 1986 study by **Brinson, Hood, and Beebower** examined large diversified balanced funds and found that allocation policy explained about **`93.6%`** of the *variability of returns over time*. Read that carefully: it describes how much of the up-and-down *variation across time* the allocation accounts for — **not** that allocation determines `93.6%` of the dollars you earn. It's a statement about the source of the bumps in the ride, not the size of the destination.",
    },
    {
      type: "heading",
      text: "Worked example: computing a portfolio return",
    },
    {
      type: "text",
      body:
        "Suppose you hold a **`60/40`** portfolio — `60%` stocks, `40%` bonds. Over a year stocks return `+10%` and bonds return `+3%`. The portfolio return is the weighted average:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Stocks contribute `0.60 × 10% = 6.0%`.",
        "Bonds contribute `0.40 × 3% = 1.2%`.",
        "Total: `6.0% + 1.2% = 7.2%`.",
      ],
    },
    {
      type: "text",
      body:
        "Add a cash sleeve and the same arithmetic holds. A **`55/35/10`** mix (stocks `+10%`, bonds `+3%`, cash `+1%`) returns `0.55 × 10% + 0.35 × 3% + 0.10 × 1% = 5.5% + 1.05% + 0.10% = 6.65%`. The weights do the heavy lifting.",
    },
    {
      type: "text",
      body:
        "A rough age-based framing says a longer horizon can tolerate more stocks while a near-term goal favors bonds and cash. The old `120 minus age` rule (that share in stocks) is a *simplification*, not a prescription — useful as a starting intuition, not a personal recommendation.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "The `~90%+` figure is widely misread. Later work by **Ibbotson and Kaplan (2000)** found allocation explained about `90%` of return variability *over time* for a fund, but only about `40%` of the variation *across* different funds, and roughly `100%` of the *level* of return on average. Different questions, different numbers — and asset-class behavior is never guaranteed.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"Picking the best stocks matters most for my results.\"* For a diversified portfolio, the high-level allocation drives most of the return variability over time; individual security picks matter far less than the stock/bond/cash split itself.",
    },
  ],
};
