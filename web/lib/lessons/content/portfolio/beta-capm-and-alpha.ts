import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "beta-capm-and-alpha",
  title: "Beta, CAPM & Alpha",
  level: 2,
  moduleId: "markets-portfolio",
  moduleOrder: 6,
  summary:
    "How beta measures a stock's exposure to market-wide risk, how CAPM turns that beta into an expected return, and why alpha is the return you earn above what CAPM predicts.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Diversification scrubs away company-specific risk, but it can't remove **market risk** — the tide that lifts or sinks every boat at once. So the next question is sharp: *how much* of that market risk does a given stock carry? The answer is a single number called **beta**, and it's the hinge that connects risk to the return you should expect.",
    },
    {
      type: "heading",
      text: "Beta: sensitivity to the market",
    },
    {
      type: "text",
      body:
        "**Beta (`β`)** measures how much a stock moves *relative to the overall market* — its exposure to **systematic (market) risk**, the risk diversification can't erase. The market itself, by definition, has a beta of exactly `1`. Everything else is measured against that benchmark.",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "`β > 1` — **amplifies** the market. A stock with `β = 1.5` tends to move about `1.5×` as much as the market: when the market rises `10%`, it rises roughly `15%`; when the market falls `10%`, it falls roughly `15%`.",
        "`β < 1` (but positive) — **dampens** the market. A stock with `β = 0.5` moves about half as much: a `10%` market move maps to roughly a `5%` move. Think utilities and consumer staples.",
        "`β = 1` — moves **in step** with the market, on average.",
        "`β < 0` (**negative**) — moves **inversely**. When the market rises, it tends to fall, and vice versa. Genuinely negative-beta assets are rare; gold and certain hedges sometimes show it in stressed periods.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Beta is about *direction and magnitude versus the market*, not raw size of swings. A `β = 2` stock isn't necessarily \"twice as risky\" in every sense — it's twice as sensitive to **market** moves. Its own company-specific jitter is a separate thing diversification can still smooth out.",
    },
    {
      type: "heading",
      text: "CAPM: turning beta into an expected return",
    },
    {
      type: "text",
      body:
        "The **Capital Asset Pricing Model (CAPM)** says investors should be paid for two things: the time value of money (the risk-free rate) and the market risk they take on (their beta). It packs that into one line:",
    },
    {
      type: "text",
      body:
        "`E(R) = R_f + β × (R_m − R_f)`",
    },
    {
      type: "text",
      body:
        "Here `E(R)` is the stock's **expected return**, `R_f` is the **risk-free rate** (short-term government debt), `R_m` is the **expected market return**, and `(R_m − R_f)` is the **market risk premium** — the extra reward for holding the market instead of T-bills. Beta scales that premium up or down to fit the individual stock.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Beta (β)", def: "A stock's sensitivity to market moves — its exposure to systematic (market) risk. The market's beta is `1`." },
        { term: "Systematic risk", def: "Market-wide risk that hits everything at once; non-diversifiable. Beta measures it." },
        { term: "CAPM", def: "Capital Asset Pricing Model: `E(R) = R_f + β × (R_m − R_f)` — the return an asset should earn for its market risk." },
        { term: "Risk-free rate (R_f)", def: "The return on a near-riskless asset, like short-term Treasury bills." },
        { term: "Market risk premium", def: "`R_m − R_f` — the extra expected return for holding the market over the risk-free asset." },
        { term: "Alpha (α)", def: "Realized return minus the CAPM-expected return — performance above or below what the risk taken justifies." },
        { term: "Standard deviation (σ)", def: "The spread of an asset's own returns — a measure of *total* risk, both systematic and unsystematic." },
      ],
    },
    {
      type: "heading",
      text: "Worked example: pricing in the risk",
    },
    {
      type: "text",
      body:
        "Suppose the risk-free rate is `R_f = 4%`, the expected market return is `R_m = 10%`, and a stock has `β = 1.5`. First find the market risk premium: `R_m − R_f = 10% − 4% = 6%`. Then plug in:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Scale the premium by beta: `1.5 × 6% = 9%`.",
        "Add back the risk-free rate: `E(R) = 4% + 9% = 13%`.",
      ],
    },
    {
      type: "text",
      body:
        "CAPM says this stock *should* be expected to return `13%` — more than the market's `10%`, because its `β = 1.5` makes it carry more market risk. Run the same numbers with a defensive `β = 0.5` and you get `E(R) = 4% + 0.5 × 6% = 7%`: less market risk, less expected reward.",
    },
    {
      type: "heading",
      text: "Alpha: beating the benchmark",
    },
    {
      type: "text",
      body:
        "CAPM gives the return you *should* expect. **Alpha (`α`)** is what you *actually* got, minus that expectation: `α = realized return − E(R)`. If the `β = 1.5` stock above (expected `13%`) actually delivered `16%`, its alpha is `16% − 13% = +3%` — three points of return the risk alone doesn't explain, often credited to skill (or luck). A return of `10%` would be a **negative alpha** of `−3%`: it underperformed what its risk justified, even though `10%` sounds fine in isolation.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Positive alpha is the holy grail of active management — return *above* the benchmark for the risk taken. It's also famously hard to sustain: after fees, the majority of active funds fail to beat their benchmark over long stretches, which is much of the case for low-cost index investing.",
    },
    {
      type: "heading",
      text: "Beta vs. standard deviation: two different risks",
    },
    {
      type: "text",
      body:
        "Don't confuse the two risk measures. **Standard deviation (`σ`)** captures **total risk** — every wobble in a stock's own returns, market-driven *and* company-specific. **Beta** captures only the **systematic** slice: the part tied to the market. A biotech with one binary drug trial can have huge `σ` (total risk) yet a modest `β`, because most of its volatility is idiosyncratic — diversifiable — not market risk. CAPM rewards beta, not standard deviation, precisely because the company-specific part can be diversified away and so the market won't pay you to bear it.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"A higher-beta stock always earns more.\"* CAPM gives an **expected** return, not a promise. High beta means high *exposure* to the market — when the market drops, that `β = 1.5` stock is expected to fall harder. Beta is also estimated from past data and drifts over time, so it's a guide, not a guarantee.",
    },
  ],
};
