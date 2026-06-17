import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "what-backtesting-is-and-why",
  title: "What Backtesting Is (and What It Can't Tell You)",
  level: 3,
  moduleId: "markets-backtesting",
  moduleOrder: 1,
  summary: "A backtest replays a rules-based strategy on history to estimate how it would have done — useful, but hypothetical, not a crystal ball.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "You have a trading idea: *buy when the 50-day average crosses above the 200-day*. Before risking a cent, you'd love to know — would this have worked? A **backtest** is how you ask. It replays your strategy on past data and reports how it *would have* performed. The catch is hidden in those two words: *would have*.",
    },
    {
      type: "text",
      body:
        "A backtest applies a **fully-specified, rules-based strategy** to historical data. *Fully-specified* means every decision is mechanical — entry, exit, position **sizing**, and the **universe** of assets are all defined in advance with no room for gut feel. If any step relies on discretion (\"I'd probably sell around here\"), you can't backtest it honestly, because you can't replay a hunch.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Backtest", def: "Applying a fully-specified, rules-based strategy to historical data to estimate how it would have performed." },
        { term: "Rules-based (mechanical) strategy", def: "A strategy where every decision — entry, exit, sizing, universe — is defined in advance, with no discretion." },
        { term: "Hypothetical performance", def: "Simulated results from a backtest. Regulators stress it does not reflect actual performance, and past performance can't predict the future." },
        { term: "Equity curve", def: "A line showing the strategy's account value over time — the visual summary of a backtest." },
      ],
    },
    { type: "heading", text: "In-sample vs. out-of-sample" },
    {
      type: "text",
      body:
        "The most important idea in backtesting is splitting your history. **In-sample (IS)** data is what you use to design and tune the strategy. **Out-of-sample (OOS)** data is held back, untouched, and used *once* to check whether the strategy generalizes to data it never saw. You must reserve the OOS set **before** you start tuning — the moment you peek at it to make a decision, it quietly becomes in-sample and stops validating anything.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "In-sample data", def: "The slice of history used to design and tune the strategy." },
        { term: "Out-of-sample data", def: "A slice held back, untouched, and used once to test generalization." },
      ],
    },
    { type: "heading", text: "What a backtest can — and can't — tell you" },
    {
      type: "list",
      items: [
        "**Can** show that a historical edge existed over the period tested.",
        "**Can** sketch a rough risk profile — how deep the drawdowns got across sampled conditions.",
        "**Cannot** prove the edge is real skill rather than luck.",
        "**Cannot** show how you'd do in an unseen market regime.",
        "**Cannot** guarantee your actual fills, costs, or slippage in live trading.",
      ],
    },
    {
      type: "text",
      body:
        "The healthiest way to think about a backtest is as a **falsification tool**: a cheap way to *reject* bad ideas before they cost real money. A strategy that fails its backtest is almost certainly not worth trading. A strategy that passes has merely survived one test — it is not blessed.",
    },
    { type: "heading", text: "Walkthrough: a 50/200 crossover on SPY" },
    {
      type: "text",
      body:
        "Say you test a 50/200-day moving-average crossover on SPY from `2005` to `2024`. You split it: `2005-2018` becomes your in-sample set to design and tune, and you lock `2019-2024` as out-of-sample. After tuning on IS, you run the locked OOS set exactly once. If OOS results look roughly like IS, that's *weak* evidence the rules generalize. If OOS **collapses**, your IS result was probably noise. Either way, the test still hasn't told you whether `2025` and beyond will resemble *any* regime in your data.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "A single IS/OOS split is just **one sample** of how the strategy might have been validated — a different cut-point could tell a different story. **Walk-forward** testing (a later lesson) addresses this. And treat OOS like a one-shot exam: if it fails and you re-run it after tweaking, you've destroyed its value — it's now in-sample.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"if the backtest is profitable, the strategy works.\"* A profitable backtest only shows the rules **fit the past**. Whether they capture a durable edge is a separate question — and because the results are hypothetical, they do **not** guarantee future performance.",
    },
  ],
};
