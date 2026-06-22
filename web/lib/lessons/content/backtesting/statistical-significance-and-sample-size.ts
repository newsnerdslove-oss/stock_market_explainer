import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "statistical-significance-and-sample-size",
  title: "Sample Size & Statistical Significance",
  level: 3,
  moduleId: "markets-backtesting",
  moduleOrder: 5,
  summary:
    "A dazzling win rate over 10 trades is often just luck. Enough trades — and enough different market regimes — are what turn a backtest into evidence.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Flip a fair coin ten times and getting `7` heads wouldn't shock anyone — yet `70%` heads sounds like a remarkable edge. That's the whole problem with small backtests in one sentence. A strategy that goes `7-for-10` looks brilliant, but ten trades simply isn't enough to tell **skill** from **luck**. The question every backtest must answer isn't only *\"did it make money?\"* but *\"did it make enough trades, across enough conditions, that the result is unlikely to be a fluke?\"*",
    },
    {
      type: "text",
      body:
        "**Sample size** is the number of independent trades (or signals) your backtest actually produced. **Statistical significance** is the flip side: how confident you can be that a result reflects a real effect rather than random chance. The two are joined at the hip — *more trades make a given edge more believable, and fewer trades make even a big edge easy to dismiss.* A `+30%` return over `8` trades and a `+30%` return over `800` trades are not remotely the same claim.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Sample size", def: "The number of independent trades or signals a backtest generated. More is better for trusting the result." },
        { term: "Statistical significance", def: "How confident you can be that a result reflects a real effect rather than random luck." },
        { term: "Confidence", def: "Informally, how sure you are the measured edge is real; it rises as sample size grows and the effect stays consistent." },
        { term: "Outlier", def: "A single extreme trade whose size lets it dominate the average when the sample is small." },
        { term: "Market regime", def: "A stretch of market with consistent character — bull, bear, low-vol, high-vol, rising or falling rates." },
        { term: "Law of large numbers", def: "As the number of trades grows, the average result converges toward the strategy's true expected edge." },
      ],
    },
    { type: "heading", text: "Why ten trades can't be trusted" },
    {
      type: "text",
      body:
        "With a tiny sample, **noise swamps signal**. Suppose two strategies both have a true `52%` win rate. Over just `10` trades, one might land `7` wins and the other `4` purely by chance — and you'd \"conclude\" the first is far better when they're identical underneath. The **law of large numbers** is the cure: as the number of trades grows, the measured win rate and average return drift toward the strategy's *true* expected value. Ten trades sit nowhere near that convergence; several hundred get you much closer.",
    },
    {
      type: "text",
      body:
        "There's a precise version of this. The uncertainty in an estimated average shrinks in proportion to `1 / √n`, where `n` is the number of trades. Because of that square-root, you have to *quadruple* the sample to *halve* the error bar. Going from `25` trades to `100` only cuts your uncertainty in half — which is exactly why moving from `10` to `500` trades is such a large jump in trustworthiness, and why nudging from `10` to `15` barely helps.",
    },
    { type: "heading", text: "How one outlier hijacks a small sample" },
    {
      type: "text",
      body:
        "In a small sample, a **single outlier** can manufacture an entire \"edge.\" Imagine `12` trades where `11` roughly break even and one lucky winner returns `+120%`. The backtest reports a glowing average — but strip out that one trade and the strategy is flat. The headline number was really *one* event wearing a costume. With `500` trades, no single result can move the average much, so the average finally describes the *strategy* rather than a lucky accident. Always ask: **how does the result look with the best one or two trades removed?**",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "A fast gut-check before you trust any backtest: count the trades, then ask whether your conclusion survives deleting the single biggest winner. If a couple of trades carry the whole result, you have an anecdote, not evidence.",
    },
    { type: "heading", text: "The hidden trap: a short window is one regime" },
    {
      type: "text",
      body:
        "Sample size isn't only *trade count* — it's also *variety*. A backtest can rack up `400` trades and still be dangerously narrow if they all happened in **one market regime**. A trend-following system tested only across `2013-2019` (a long, calm bull market) might look unstoppable, yet it never met a bear market, a volatility spike, or a rising-rate regime. You haven't tested the strategy; you've tested *one kind of weather*. The fix is to span **multiple regimes** — bull and bear, calm and chaotic — so the result reflects markets in general, not a single lucky era.",
    },
    {
      type: "list",
      items: [
        "**Few trades** → the result could easily be luck; treat it as a hint, not proof.",
        "**Many trades in one regime** → trades are plentiful but *redundant*; it still hasn't been stress-tested across conditions.",
        "**Many trades across several regimes** → the strongest case that an edge is real and durable.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"a `90%` win rate proves the strategy works.\"* Over `10` trades, `90%` is one bad trade away from `80%` and well within the range of pure luck. A modest `55%` win rate over `600` trades is far stronger evidence of a real edge. And even a large, multi-regime sample is still **hypothetical** — it raises your confidence, it never guarantees the future.",
    },
  ],
};
