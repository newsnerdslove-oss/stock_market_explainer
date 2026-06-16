import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "dex-vs-cex",
  title: "DEX vs CEX: AMMs, Liquidity Pools, and Custody",
  level: 2,
  moduleId: "crypto-200",
  moduleOrder: 5,
  summary: "How decentralized and centralized exchanges differ on custody, pricing, and slippage — and the trade-offs of each.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "There are two broad places to trade a token, and they differ on the question that matters most: **who holds your keys while you trade?** That single difference cascades into how prices are made, what can go wrong, and who (if anyone) can help when it does.",
    },
    { type: "heading", text: "Custodial vs non-custodial" },
    {
      type: "text",
      body:
        "A centralized exchange (**CEX**) is **custodial**: you deposit funds, the exchange holds the keys, and trades match on an **order book** off-chain on its internal ledger. A decentralized exchange (**DEX**) is **non-custodial**: you trade directly from your own wallet through smart contracts, keeping **self-custody** throughout. Many DEXs use an **AMM**.",
    },
    {
      type: "text",
      body:
        "An **AMM** prices trades from a **liquidity pool** using a formula — the classic being constant-product, `x · y = k`. **Liquidity providers (LPs)** deposit pairs of assets and earn a share of the trading fees in return.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "CEX", def: "Centralized exchange — custodial, order-book based, settles on an internal ledger." },
        { term: "DEX", def: "Decentralized exchange — non-custodial, trade from your own wallet via smart contracts." },
        { term: "AMM", def: "Automated market maker — prices trades algorithmically from a pool, e.g. `x · y = k`." },
        { term: "Liquidity pool", def: "Paired assets locked in a contract that an AMM trades against." },
        { term: "Liquidity provider (LP)", def: "Someone who deposits assets into a pool and earns a share of its fees." },
        { term: "Slippage", def: "The difference between expected and executed price, because a trade moves the pool." },
        { term: "Slippage tolerance", def: "A cap you set on how far the price may move before the trade is rejected." },
      ],
    },
    { type: "heading", text: "Slippage and trade-offs" },
    {
      type: "text",
      body:
        "On an AMM, a trade **shifts the pool's balances** and therefore its price, so a large trade relative to the pool size executes worse. **Deeper pools** give steadier prices; you set a **slippage tolerance** to cap how far the price may move before the trade is rejected.",
    },
    {
      type: "list",
      items: [
        "**CEX trade-offs:** more liquidity, fiat on-ramps, and a familiar interface — but you trust a third party with custody (counterparty / insolvency risk) and must pass KYC.",
        "**DEX trade-offs:** self-custody and permissionless access — but you face smart-contract risk, slippage, gas, malicious-token and approval risk, and there is no support desk.",
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "You swap Token A → B on an AMM with a **small pool** (illustrative). The UI quotes about `$1.00` but warns of `3%` price impact, because your trade is large relative to the pool. You set a `1%` **slippage tolerance**, so the trade *exceeds* it and is **rejected** — protecting you from a bad fill. You then split the order into smaller swaps or route through a deeper pool. On a CEX, the same swap would hit an **order book** and settle on the ledger, but the CEX **holds the keys** until you withdraw.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Thin pools mean **severe price impact** plus MEV and front-running risk. And a slippage tolerance set **too high** does the opposite of protecting you — it lets a much worse fill go through.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Misconception:** \"A DEX always gives a better price than a CEX.\" AMM pricing depends on **pool depth** — a shallow pool plus gas can make a DEX *worse*. Neither venue is universally cheaper.",
    },
  ],
};
