import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "coins-vs-tokens",
  title: "Coins vs. tokens",
  level: 1,
  moduleId: "crypto-100",
  moduleOrder: 1,
  summary: "Not all crypto is Bitcoin — and a coin and a token aren't the same thing.",
  estMinutes: 4,
  sections: [
    {
      type: "text",
      body:
        "People say *\"crypto\"* like it's one thing. It isn't. There are thousands of different assets, and the first useful split is **coin vs. token** — a distinction that decides which network an asset lives on and how you even send it.",
    },
    {
      type: "heading",
      text: "First, what's a blockchain?",
    },
    {
      type: "text",
      body:
        "A **cryptocurrency** is digital money recorded on a **blockchain**. In one breath: a blockchain is a shared, tamper-resistant public ledger — a chain of grouped transactions that a whole network can verify, with **no central authority** in charge. No single bank or company owns the record; the network keeps it honest.",
    },
    {
      type: "heading",
      text: "Coin vs. token",
    },
    {
      type: "text",
      body:
        "A **coin** is the *native* asset of its own blockchain. **BTC** is the coin of the Bitcoin network; **ETH** is the coin of Ethereum. A coin usually pays the **network fee** (often called *gas*) needed to move value on that chain.",
    },
    {
      type: "text",
      body:
        "A **token** is issued *on top of* an existing blockchain rather than running its own. **USDC**, for example, is a token built on Ethereum using a standard called **ERC-20**. Tokens can represent many things: a currency, in-app credits, voting rights in a project, or a claim on something.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "The one-line rule: **a coin has its own blockchain; a token rides on someone else's.**",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Cryptocurrency", def: "Digital money recorded on a blockchain." },
        { term: "Blockchain", def: "A shared, tamper-resistant public ledger maintained by a network — no central authority." },
        { term: "Coin", def: "The native asset of its own blockchain (e.g. BTC, ETH); usually pays network fees." },
        { term: "Token", def: "An asset issued on top of an existing blockchain (e.g. USDC, an ERC-20 token on Ethereum)." },
        { term: "Gas / network fee", def: "The fee paid in a chain's native coin to record a transaction." },
        { term: "Stablecoin", def: "A token designed to track a steady value, typically ~`$1` (e.g. USDC)." },
      ],
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "text",
      body:
        "**ETH** is a *coin* — native to Ethereum, and it pays the gas to use the network. **USDC** is a *token* — an ERC-20 living on Ethereum. So to *send* USDC, you also need a little **ETH** in the same wallet to cover the gas fee. The token can't pay its own way; it leans on the host chain's coin.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common myth: *\"coin and token mean the same thing, and all crypto is basically Bitcoin.\"* No — a coin runs its own blockchain, while a token is *issued on* one, and Bitcoin is just one asset among thousands.",
    },
  ],
};
