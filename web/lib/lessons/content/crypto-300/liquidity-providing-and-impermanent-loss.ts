import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "liquidity-providing-and-impermanent-loss",
  title: "Liquidity Providing & Impermanent Loss",
  level: 3,
  moduleId: "crypto-300",
  moduleOrder: 2,
  summary:
    "How providing liquidity to an AMM earns trading fees — and how impermanent loss quietly eats those fees when the price ratio moves.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "\"Earn passive yield — just deposit and collect fees.\" That pitch is everywhere in DeFi, and it hides the most misunderstood risk in the space: **impermanent loss**. To see it clearly, you first need to understand what an automated market maker actually does with your money.",
    },
    {
      type: "text",
      body:
        "An **AMM** pool holds two assets and prices trades with a simple formula, the **constant product** `x · y = k`. As a **liquidity provider (LP)** you deposit both assets — usually `50/50` by value — and receive **LP tokens** representing your share. Every swap pays a **trading fee** (often `0.3%`), and that fee is split among LPs. So far, so good: you earn a cut of every trade.",
    },
    { type: "heading", text: "Where impermanent loss comes from" },
    {
      type: "text",
      body:
        "**Impermanent loss (IL)** is the shortfall between holding LP tokens versus simply *holding the two tokens in your wallet*. It appears whenever the pool's **price ratio** drifts away from your deposit ratio. When one asset rises, arbitrageurs buy it out of the pool and add the cheaper one — so the pool **rebalances against you**: you end up with more of the loser and less of the winner.",
    },
    {
      type: "text",
      body:
        "IL depends only on the *size* of the ratio change, and it is **symmetric** — a `2x` move up and a `2x` move down both produce about the same `~5.7%` loss versus holding.",
    },
    {
      type: "list",
      items: [
        "`1.25x` ratio change → ~`0.6%` IL",
        "`1.5x` → ~`2%` IL",
        "`2x` → ~`5.7%` IL",
        "`4x` → ~`20%` IL",
        "`5x` → ~`25.5%` IL",
      ],
    },
    {
      type: "text",
      body:
        "It is called *impermanent* because it **reverses if the ratio returns** to where you started. It becomes a **realized (permanent) loss** the moment you withdraw while the ratio is still diverged. The real question is never \"is there IL?\" — there usually is — but **do the fees (plus any rewards) exceed the IL?**",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "AMM", def: "Automated market maker — a pool that prices trades by formula instead of an order book." },
        { term: "Constant product (`x · y = k`)", def: "The rule that keeps the product of the two asset balances constant as trades happen." },
        { term: "Liquidity provider (LP)", def: "Someone who deposits both assets into the pool to earn a share of trading fees." },
        { term: "LP token", def: "A receipt token representing your share of the pool, redeemed to withdraw." },
        { term: "Impermanent loss (IL)", def: "The shortfall versus simply holding the two tokens, caused by the price ratio changing." },
        { term: "Realized loss", def: "IL locked in permanently when you withdraw while the ratio is still diverged." },
        { term: "Trading fee", def: "The cut of each swap (e.g. `0.3%`) paid to LPs." },
      ],
    },
    { type: "heading", text: "A worked example (illustrative numbers)" },
    {
      type: "text",
      body:
        "You deposit `1 ETH` + `$2,000 USDC` when ETH = `$2,000`, a total of `$4,000`. Then ETH **doubles** to `$4,000` (ratio `r = 2`). Arbitrage rebalances the pool to roughly `0.707 ETH` + `~$2,828 USDC`, worth about `$5,657`.",
    },
    {
      type: "list",
      items: [
        "**Had you just held:** `1 ETH ($4,000)` + `$2,000 USDC` = `$6,000`.",
        "**In the pool:** ~`$5,657`.",
        "**Impermanent loss:** ~`$343`, about `5.7%` of the hold value.",
        "**Verdict:** if the fees you earned exceed ~`$343`, you beat holding; if not, you underperformed.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**One-sided exit and reward risk.** If one token crashes toward zero, the pool leaves you holding mostly the *worthless* asset — IL approaches a near-total loss of the good asset. And eye-catching APRs are often **subsidized by a volatile reward token** whose price can fall faster than the rewards add up. Smart-contract bugs in the pool are a further risk on top of IL.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Common misconception:** *\"Providing liquidity is free yield — you just collect fees.\"* Fees are offset by impermanent loss whenever the price ratio moves. Enough divergence (or a crash in one token) can wipe out the fees entirely and leave you **worse off than if you had simply held** the two assets. Stable or tightly correlated pairs (e.g. two stablecoins) have tiny IL; volatile pairs have large IL.",
    },
  ],
};
