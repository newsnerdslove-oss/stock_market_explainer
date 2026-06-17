import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "day-trading",
  title: "Day Trading: Intraday Speed, Real Costs",
  level: 3,
  moduleId: "markets-styles",
  moduleOrder: 1,
  summary: "What day trading really is, the cost and regulatory realities, and why most who try it lose.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Day trading is the fastest-moving style on the active-trading ladder. A **day trader** opens and closes positions within a single session — holding for *minutes to hours* — and ends every day flat, with **no overnight positions**. The appeal is obvious: no waking up to bad news, just clean intraday moves. The reality is harder, and it starts with understanding what you're actually trading.",
    },
    {
      type: "text",
      body:
        "A day trader isn't betting on what a company is *worth*. With a holding period of hours, fundamentals barely move. Instead you're trading **liquidity and volatility** — short-term supply and demand, momentum, and the way price reacts to news and order flow. That's a different game from investing, and it comes with its own scoreboard.",
    },
    { type: "heading", text: "Why most day traders lose" },
    {
      type: "text",
      body:
        "Day trading is the **lowest-win-rate retail style**, and the reason is mechanical, not mystical. High frequency *multiplies costs*. Every trade pays a spread, possibly a commission, and loses a little to **slippage** (filling at a worse price than you saw). Do that dozens of times a day and the costs compound against you. Layer on behavioral mistakes — chasing, oversizing, revenge trades — and the math gets brutal.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Day trade", def: "Buying and selling (or shorting and covering) the *same security* on the *same day* — a same-day round-trip." },
        { term: "Round-trip", def: "A matched open and close in one security. Multiple partial round-trips in a day can each count separately (your broker computes it)." },
        { term: "Pattern Day Trader (legacy)", def: "The historical FINRA label: 4+ day trades in 5 business days in a margin account, if they were >6% of total trades." },
        { term: "Minimum equity requirement", def: "Under the legacy PDT rule, a flagged account had to hold at least $25,000 to keep day trading." },
        { term: "Intraday margin", def: "Real-time, position-based margin that measures your buying power as you trade — the framework now replacing the legacy count-and-$25k trigger." },
        { term: "Slippage", def: "The difference between the price you expected and the price you actually got — worse fills cost real money at high frequency." },
      ],
    },
    { type: "heading", text: "The PDT rule — and its 2026 overhaul" },
    {
      type: "text",
      body:
        "You've probably heard of the **$25,000 rule**. Historically, FINRA's **Pattern Day Trader** rule worked like this: if you placed **4 or more day trades in 5 business days** in a margin account (and they were more than 6% of your total trades), your account was flagged as a PDT. A flagged account needed at least **$25,000** in equity to keep day trading, and in exchange could access up to **4× intraday buying power**. Fall below $25k and the broker would restrict further day trading.",
    },
    {
      type: "text",
      body:
        "That framework is being replaced. Effective **June 4, 2026** (FINRA Regulatory Notice 26-10), FINRA eliminated the Pattern Day Trader rule and the $25,000 minimum, swapping them for **real-time intraday margin** standards tied to your actual buying power. There's an **18-month phase-in through October 20, 2027**, so brokers are migrating at different speeds — *always confirm what your own broker currently applies.* One crucial point: removing the $25k barrier lowers the **capital** required, not the **difficulty**. The odds didn't change.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "**Cash accounts** sidestep PDT entirely — there's no day-trade count to trip — but they're limited by **T+1 settlement**: you can't reuse proceeds until the prior sale settles, which caps how often you can trade.",
    },
    { type: "heading", text: "Walkthrough: does Maria get flagged?" },
    {
      type: "text",
      body:
        "Maria has a **margin account with $8,000**. Monday through Thursday she does **3 same-day round-trips**. On Friday she buys and sells **NVDA** in one session — her **4th day trade in 5 business days**. Under the *legacy* PDT rule, that flags her as a Pattern Day Trader, and because her equity is **below $25,000**, her broker restricts further day trading. Under the *post-June-2026* framework, the count-and-$25k trigger is gone — what matters is her real-time **intraday margin** and buying power. Which rule actually bites depends on whether Maria's broker has migrated yet. The honest answer: *she has to check with her broker.*",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge case: a 'day trade' is a same-security buy and sell on the same day — and **partial or multiple round-trips can each count** (your broker does the counting). During the 2026–2027 phase-in, two different brokers can legitimately apply **different rules on the same day**.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'day trading is the fastest way to get rich.'* It's the fastest way to **transact**, not to profit. In a major Brazil study, roughly **97% of people who day-traded for 300+ days lost money**; Taiwan research found **fewer than 1%** of day traders are reliably profitable after costs. High frequency raises your costs and your error rate — it does not raise your returns. This is education, not financial advice.",
    },
  ],
};
