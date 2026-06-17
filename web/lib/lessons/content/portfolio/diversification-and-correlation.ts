import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "diversification-and-correlation",
  title: "Diversification & Correlation",
  level: 3,
  moduleId: "markets-portfolio",
  moduleOrder: 2,
  summary:
    "Why combining assets that don't move in lockstep can push a portfolio's volatility below the simple average of its parts — and where that magic comes from.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "\"Don't put all your eggs in one basket\" is the oldest advice in investing. But the *real* power of diversification isn't just owning more things — it's owning things that **don't move together**. When one zigs while another zags, their swings partly cancel, and the combined portfolio is calmer than its pieces.",
    },
    {
      type: "heading",
      text: "Correlation: the dial that controls the benefit",
    },
    {
      type: "text",
      body:
        "**Correlation (`ρ`)** measures how two assets move relative to each other. It runs from `−1` (perfectly opposite) through `0` (unrelated) to `+1` (perfectly together). The whole diversification benefit comes from holding assets with `ρ < +1`: their ups and downs don't line up, so some of the volatility nets out.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Correlation (ρ)", def: "How two assets move together, from `−1` (opposite) to `+1` (in lockstep)." },
        { term: "Diversification", def: "Combining assets so their independent swings partly offset, lowering overall risk." },
        { term: "Portfolio variance / volatility", def: "Variance (`σ²ₚ`) measures spread of returns; volatility (`σₚ`) is its square root — the standard measure of risk." },
        { term: "Systematic risk", def: "Market-wide risk that hits everything — non-diversifiable." },
        { term: "Unsystematic risk", def: "Company- or sector-specific risk — diversifiable by holding varied assets." },
        { term: "Covariance", def: "Unscaled co-movement of two assets; correlation is covariance standardized to the `−1…+1` range." },
        { term: "Hedge", def: "A position that tends to move opposite another, offsetting its losses." },
      ],
    },
    {
      type: "heading",
      text: "The two-asset formula",
    },
    {
      type: "text",
      body:
        "For two assets the portfolio variance is `σ²ₚ = w₁²σ₁² + w₂²σ₂² + 2·w₁·w₂·σ₁·σ₂·ρ`, and the volatility is `σₚ = √σ²ₚ`. That final cross term — the one with `ρ` in it — is where diversification lives. Push `ρ` down and the whole expression shrinks.",
    },
    {
      type: "heading",
      text: "Worked example: same assets, three correlations",
    },
    {
      type: "text",
      body:
        "Take two equal-weight assets (`w = 50%` each), each with volatility `σ = 20%` (so `σ² = 0.04`). Watch what `ρ` does:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "`ρ = +1`: `σ²ₚ = 0.25×0.04 + 0.25×0.04 + 2×0.5×0.5×0.2×0.2×1 = 0.01 + 0.01 + 0.02 = 0.04` → `σₚ = 20%`. No benefit — equal to the weighted average.",
        "`ρ = 0`: `σ²ₚ = 0.01 + 0.01 + 0 = 0.02` → `σₚ = √0.02 = 14.14%`. Risk drops well below the average.",
        "`ρ = −1`: `σ²ₚ = 0.01 + 0.01 − 0.02 = 0` → `σₚ = 0%`. The swings fully cancel.",
      ],
    },
    {
      type: "text",
      body:
        "A realistic stock/bond mix shows the same effect. With `60/40`, `σ_stock = 15%`, `σ_bond = 5%`, and `ρ = 0.10`: `σ²ₚ = 0.6²×0.15² + 0.4²×0.05² + 2×0.6×0.4×0.15×0.05×0.10 = 0.0081 + 0.0004 + 0.00036 = 0.00886`, so `σₚ = √0.00886 = 9.41%`. That's below the weighted-average volatility of `0.6×15% + 0.4×5% = 11.0%` — a small but real free reduction in risk.",
    },
    {
      type: "heading",
      text: "Two kinds of risk",
    },
    {
      type: "text",
      body:
        "Diversification works on **unsystematic risk** — the company- and sector-specific stuff that can be averaged away by holding many varied assets. It does **not** remove **systematic risk**, the market-wide risk that moves everything at once. No amount of diversification protects you from a broad market drop.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Correlations aren't stable. In a crash they tend to drift toward `+1` — assets that normally diverge suddenly fall together, so diversification weakens exactly when you want it most (2008 was a vivid example). But \"everything goes to 1\" is an oversimplification, and volatility itself spikes too. All these estimates are backward-looking.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"More holdings always means more diversified.\"* What matters is **low correlation**, not raw count. Fifty tech stocks that all rise and fall together add almost nothing — you've multiplied the same bet, not spread it.",
    },
  ],
};
