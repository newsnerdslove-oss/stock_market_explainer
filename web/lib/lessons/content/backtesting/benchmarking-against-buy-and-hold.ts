import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "benchmarking-against-buy-and-hold",
  title: "Benchmarking Against Buy-and-Hold",
  level: 3,
  moduleId: "markets-backtesting",
  moduleOrder: 6,
  summary:
    "A strategy's return means nothing in a vacuum — compare it to buy-and-hold of the same asset, on a risk-adjusted basis, after costs and taxes.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Your backtest says the strategy made `8%` a year. Good? You can't tell yet. If simply **buying and holding** the same asset returned `12%` over the identical period, your clever strategy *destroyed* value — all that trading earned you less than doing nothing. A return is only meaningful next to the right **benchmark**, and for a single-asset or index strategy the right benchmark is almost always buy-and-hold of that same asset or index.",
    },
    { type: "heading", text: "Pick the right benchmark" },
    {
      type: "text",
      body:
        "The benchmark must match what your strategy is *actually* doing. A strategy that trades only the **S&P 500** should be measured against holding the S&P 500 (e.g., an index fund or `SPY`) over the **same dates**, not against a savings account or some unrelated index. Compare apples to apples: same asset, same period, same starting capital. Beating an *easier* benchmark than the one you could have trivially held is just moving the goalposts.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "A subtle cheat: testing your strategy on `2009-2021` (a long bull market) and bragging about the raw return — when buy-and-hold of the same index *also* soared. The market did the work; your strategy may have added nothing, or worse, given some of it back.",
    },
    { type: "heading", text: "Beat it on a risk-adjusted basis" },
    {
      type: "text",
      body:
        "Raw return isn't the finish line. A strategy that returns `10%` with gut-wrenching swings and a `50%` drawdown is *worse* than buy-and-hold returning `9%` with a `20%` drawdown — you'd never survive the first one to collect its returns. The honest comparison is **risk-adjusted**: line up **Sharpe ratios** and **maximum drawdowns** side by side. If your strategy's edge is just `+1%` of return bought with double the volatility, it isn't an edge.",
    },
    {
      type: "text",
      body:
        "The classic single number for \"did you beat the benchmark?\" is **alpha** — the return your strategy earned *above* what the benchmark delivered for the same risk exposure. Positive alpha after costs is the prize. Many active strategies show positive *raw* return but **negative alpha**: they made money only because the market went up, and they did it less efficiently than just holding the index.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Benchmark", def: "The do-nothing alternative you measure a strategy against — for a single asset/index, usually buy-and-hold of that same asset over the same period." },
        { term: "Buy-and-hold", def: "Purchasing the asset once and holding it for the whole period, with no trading in between — the baseline an active strategy must beat." },
        { term: "Alpha", def: "Return earned above the benchmark for the same risk exposure — the part attributable to skill rather than just market movement." },
        { term: "Risk-adjusted return", def: "Return measured relative to the risk taken (e.g., Sharpe ratio, return vs. max drawdown), not raw percentage alone." },
        { term: "Hurdle", def: "The extra return an active strategy must clear — costs, taxes, and the benchmark's own return — before it's genuinely worth running." },
        { term: "Wash sale", def: "A disallowed loss when you buy a substantially identical security within 30 days before or after selling at a loss (IRC §1091); the loss is added to the replacement's cost basis." },
      ],
    },
    { type: "heading", text: "Complexity must earn its keep" },
    {
      type: "text",
      body:
        "Every added rule, indicator, and parameter is a cost: more to overfit, more to break in a new regime, more to monitor. So a complex strategy has to clear a higher bar — it must beat buy-and-hold by *enough* to justify the extra fragility and effort. If a 12-parameter model edges out a one-line buy-and-hold by a hair, the simpler choice usually wins. **Parsimony** isn't laziness; it's robustness.",
    },
    { type: "heading", text: "Costs and taxes raise the hurdle" },
    {
      type: "text",
      body:
        "Buy-and-hold trades essentially **once**. An active strategy trades constantly, and every round trip pays commissions, **bid-ask spreads**, and **slippage**. That turnover is a permanent headwind the benchmark doesn't face — so the active strategy must out-earn buy-and-hold *by more than its total trading costs* just to break even against it.",
    },
    {
      type: "text",
      body:
        "Taxes widen the gap further in a taxable account. Holding a position for **one year or less** produces **short-term** capital gains, which the IRS taxes at **ordinary income rates**; holding for **more than one year** qualifies as **long-term**, taxed at lower preferential rates. A high-turnover strategy realizes mostly short-term gains and pays the higher rate, while buy-and-hold defers gains for years and taxes them long-term. The **wash sale** rule adds another trap: sell at a loss and rebuy a substantially identical security within **30 days** (before or after), and the loss is **disallowed** — added to the replacement's cost basis instead.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Put it together as a **hurdle**: to be worth running, an active strategy must beat buy-and-hold *after* trading costs *and* after the higher tax drag on short-term gains. A pre-tax, pre-cost edge of a couple percent can vanish entirely once both are subtracted.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"positive return means the strategy works.\"* In a rising market almost everything is up. The real questions are: did it beat buy-and-hold of the same asset, on a **risk-adjusted** basis, **after** costs and taxes — and is the added complexity worth it? If not, the benchmark wins.",
    },
  ],
};
