import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "mpt-and-efficient-frontier",
  title: "Modern Portfolio Theory: The Efficient Frontier & Sharpe Ratio",
  level: 3,
  moduleId: "markets-portfolio",
  moduleOrder: 3,
  summary:
    "How Modern Portfolio Theory judges a portfolio by its risk and return together — using the efficient frontier and the Sharpe ratio to compare options fairly.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Suppose Fund A returned `12%` and Fund B returned `8%`. Which is better? You *can't* answer yet — you don't know how much risk each took to get there. **Modern Portfolio Theory** is the framework that forces you to look at risk and return *together*, instead of being dazzled by a single big number.",
    },
    {
      type: "heading",
      text: "The big idea",
    },
    {
      type: "text",
      body:
        "**MPT**, introduced by Harry **Markowitz in 1952**, evaluates a *whole portfolio* by its combined expected return and risk — not asset by asset. Because mixing low-correlation assets can lower risk without sacrificing return, diversification is sometimes called \"the only free lunch in investing.\"",
    },
    {
      type: "heading",
      text: "The efficient frontier",
    },
    {
      type: "text",
      body:
        "Plot every possible portfolio on a chart of *return* (vertical) versus *risk* (horizontal). The **efficient frontier** is the upper edge of that cloud: the set of portfolios delivering the **highest expected return for each level of risk**. Any portfolio sitting *below* the frontier is inefficient — you could get more return for the same risk, or the same return for less risk.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Modern Portfolio Theory (MPT)", def: "Framework (Markowitz, 1952) that evaluates portfolios by combined risk and return." },
        { term: "Efficient frontier", def: "The portfolios offering the highest expected return at each level of risk." },
        { term: "Sharpe ratio", def: "`(Rₚ − R_f) ÷ σₚ` — excess return per unit of risk." },
        { term: "Risk-free rate (R_f)", def: "The return on a near-riskless asset, like short-term government debt." },
        { term: "Excess return", def: "Return above the risk-free rate: `Rₚ − R_f`." },
        { term: "Risk-adjusted return", def: "Return measured relative to the risk taken to earn it." },
        { term: "Standard deviation (σ)", def: "How much returns spread around their average — the usual measure of risk." },
      ],
    },
    {
      type: "heading",
      text: "The Sharpe ratio: comparing fairly",
    },
    {
      type: "text",
      body:
        "The **Sharpe ratio** scores a portfolio by how much *excess* return it earns per unit of risk: `Sharpe = (Rₚ − R_f) ÷ σₚ`. A higher Sharpe means more reward for each unit of volatility. As a rough convention, above `1` is good, above `2` is very good, and above `3` is excellent — guidelines, not laws.",
    },
    {
      type: "heading",
      text: "Worked example: which portfolio wins?",
    },
    {
      type: "text",
      body:
        "Compare three portfolios with a risk-free rate of `R_f = 2%`:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Portfolio A: return `8%`, `σ = 12%` → `(8 − 2) ÷ 12 = 6 ÷ 12 = 0.5`.",
        "Portfolio B: return `12%`, `σ = 20%` → `(12 − 2) ÷ 20 = 10 ÷ 20 = 0.5`.",
        "Portfolio C: return `10%`, `σ = 10%` → `(10 − 2) ÷ 10 = 8 ÷ 10 = 0.8`.",
      ],
    },
    {
      type: "text",
      body:
        "B earned the highest raw return — yet its Sharpe (`0.5`) only ties A, because that extra `4` points of return came entirely from taking more risk. **Portfolio C wins** on a risk-adjusted basis with `0.8`: it squeezes the most excess return out of each unit of volatility.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "The Sharpe ratio assumes standard deviation fully captures risk. But `σ` penalizes upside swings the same as downside ones, and it understates fat-tail (rare-crash) risk. The **Sortino ratio** addresses the first issue by using only downside deviation. And MPT's inputs are historical estimates — garbage in, garbage out.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"The portfolio with the highest return is the best.\"* A higher return often just reflects more risk. The Sharpe ratio exists precisely to compare return *per unit of risk* — that's the fair comparison.",
    },
  ],
};
