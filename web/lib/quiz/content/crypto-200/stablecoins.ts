import type { Question } from "@/lib/quiz/types";

// Quiz for the "Stablecoins and the Peg" lesson.
export const questions: Question[] = [
  {
    id: "stablecoins.q1",
    lessonSlug: "stablecoins",
    type: "single",
    difficulty: "easy",
    tags: ["stablecoins", "peg"],
    prompt: "What does it mean for a stablecoin to **depeg**?",
    choices: [
      { id: "a", text: "It is delisted from every exchange" },
      { id: "b", text: "It trades meaningfully away from its target value" },
      { id: "c", text: "It permanently converts into a different token" },
      { id: "d", text: "It pays out a dividend to holders" },
    ],
    correctId: "b",
    explanation:
      "A **depeg** means trading meaningfully away from the target value (usually `$1`). The peg is a *maintained target*, not a guarantee.",
  },
  {
    id: "stablecoins.q2",
    lessonSlug: "stablecoins",
    type: "single",
    difficulty: "easy",
    tags: ["stablecoins", "fiat-backed"],
    prompt: "A **fiat-backed** stablecoin typically holds reserves of…",
    choices: [
      { id: "a", text: "Cash and short-term Treasuries" },
      { id: "b", text: "Over-collateralized crypto in smart contracts" },
      { id: "c", text: "A companion algorithmic token" },
      { id: "d", text: "Physical gold bars only" },
    ],
    correctId: "a",
    explanation:
      "Fiat-backed coins (e.g. `USDC`, `USDT`) claim reserves of **cash and short-term Treasuries** and redeem roughly `1:1`. The risks are reserve quality, redemption access, and counterparty/banking exposure.",
  },
  {
    id: "stablecoins.q3",
    lessonSlug: "stablecoins",
    type: "single",
    difficulty: "medium",
    tags: ["stablecoins", "designs"],
    prompt: "Which stablecoin design has historically been the **most fragile**?",
    choices: [
      { id: "a", text: "Fiat-backed" },
      { id: "b", text: "Crypto-collateralized" },
      { id: "c", text: "Algorithmic" },
      { id: "d", text: "Over-collateralized", feedback: "Over-collateralization is a buffer used by crypto-collateralized designs, not a separate fragile category." },
    ],
    correctId: "c",
    explanation:
      "**Algorithmic** designs hold the peg via supply changes and a companion token instead of full reserves — historically the most fragile, as TerraUSD (UST) showed in 2022.",
  },
  {
    id: "stablecoins.q4",
    lessonSlug: "stablecoins",
    type: "single",
    difficulty: "medium",
    tags: ["stablecoins", "crypto-collateralized"],
    prompt: "What makes a **crypto-collateralized** stablecoin like `DAI` distinctive?",
    choices: [
      { id: "a", text: "It is backed only by a sister token's supply changes" },
      { id: "b", text: "It is minted only against more than `$1` of locked crypto per `$1` minted" },
      { id: "c", text: "It holds no collateral at all" },
      { id: "d", text: "It is redeemable directly for bank cash `1:1`" },
    ],
    correctId: "b",
    explanation:
      "It is **over-collateralized** — you lock more than `$1` of crypto per `$1` minted — and positions auto-liquidate if the collateral falls too far. Risks: collateral crashes, liquidations, and smart-contract bugs.",
  },
  {
    id: "stablecoins.q5",
    lessonSlug: "stablecoins",
    type: "single",
    difficulty: "hard",
    tags: ["stablecoins", "depeg", "scenario", "history"],
    prompt: "A fiat-backed coin briefly drops to about `$0.87` after a bank holding some of its reserves fails. What's the key lesson?",
    choices: [
      { id: "a", text: "Only algorithmic coins can ever depeg" },
      { id: "b", text: "Even reserve-backed coins carry banking and counterparty risk" },
      { id: "c", text: "Fiat-backed coins are mathematically incapable of depegging" },
      { id: "d", text: "The drop proves the coin had no reserves at all" },
    ],
    correctId: "b",
    explanation:
      "This mirrors **USDC in March 2023**, which fell near `$0.87` when reserves were exposed to a failed bank (SVB) and recovered within days. Even reserve-backed coins carry **banking and counterparty risk**.",
  },
  {
    id: "stablecoins.q6",
    lessonSlug: "stablecoins",
    type: "single",
    difficulty: "medium",
    tags: ["stablecoins", "transparency", "scenario"],
    prompt: "To judge how reliable a fiat-backed stablecoin is, you should mainly check…",
    choices: [
      { id: "a", text: "Reserve composition, attestations/audits, and redemption rights" },
      { id: "b", text: "The number of social-media followers the issuer has" },
      { id: "c", text: "How many exchanges list it" },
      { id: "d", text: "The size of its companion algorithmic token" },
    ],
    correctId: "a",
    explanation:
      "Reserve transparency matters: check **reserve composition**, **attestations/audits**, and **redemption rights**. \"Backed\" is only as good as what backs it and whether you can actually redeem.",
  },
  {
    id: "stablecoins.q7",
    lessonSlug: "stablecoins",
    type: "single",
    difficulty: "hard",
    tags: ["stablecoins", "history", "algorithmic"],
    prompt: "Which event is the canonical example of an **algorithmic** stablecoin failure?",
    choices: [
      { id: "a", text: "USDC briefly trading near `$0.87` in 2023" },
      { id: "b", text: "TerraUSD (UST) collapsing from ~`$1` to cents in May 2022" },
      { id: "c", text: "DAI raising its over-collateralization ratio" },
      { id: "d", text: "USDT publishing a reserve attestation" },
    ],
    correctId: "b",
    explanation:
      "**TerraUSD (UST)** collapsed from about `$1` to cents within days in May 2022 as its paired token `LUNA` spiraled — the canonical algorithmic failure.",
  },
  {
    id: "stablecoins.q8",
    lessonSlug: "stablecoins",
    type: "single",
    difficulty: "medium",
    tags: ["stablecoins", "misconception"],
    prompt: "Which statement is correct about the dollar peg?",
    choices: [
      { id: "a", text: "Because they're pegged to the dollar, stablecoins can never depeg" },
      { id: "b", text: "The peg is a maintained target, and both algorithmic and fiat-backed coins have traded below `$1`" },
      { id: "c", text: "Only crypto-collateralized coins have ever depegged" },
      { id: "d", text: "A peg is legally guaranteed by the government" },
    ],
    correctId: "b",
    explanation:
      "The peg is a **maintained target**, not a guarantee. Algorithmic (UST, 2022) **and** fiat-backed (USDC, 2023) coins have both traded below `$1`.",
  },
  {
    id: "stablecoins.q9",
    lessonSlug: "stablecoins",
    type: "single",
    difficulty: "hard",
    tags: ["stablecoins", "depeg", "causes"],
    prompt: "Which of these can cause a stablecoin to depeg, even apart from issuer fraud?",
    choices: [
      { id: "a", text: "A banking failure, an oracle glitch, a liquidity crunch, or a confidence run" },
      { id: "b", text: "Nothing — only the issuer can ever cause a depeg" },
      { id: "c", text: "Only a change in the company's logo" },
      { id: "d", text: "An increase in the number of holders" },
    ],
    correctId: "a",
    explanation:
      "A peg can break from causes **beyond the issuer** — banking failure, oracle glitch, liquidity crunch, or a confidence-driven run. \"Backed\" is only as good as what backs it and whether you can redeem.",
  },
];
