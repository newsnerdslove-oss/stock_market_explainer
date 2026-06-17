import type { Question } from "@/lib/quiz/types";

// Quiz for the "DeFi Lending & Borrowing: Over-Collateralized Loans" lesson.
export const questions: Question[] = [
  {
    id: "defi-lending-and-borrowing.q1",
    lessonSlug: "defi-lending-and-borrowing",
    type: "single",
    difficulty: "easy",
    tags: ["defi", "lending", "collateral"],
    prompt: "Why must DeFi loans be **over-collateralized**?",
    choices: [
      { id: "a", text: "There is no credit check or recourse, so collateral is the protocol's only protection" },
      { id: "b", text: "Regulators require a 150% deposit on all crypto loans" },
      { id: "c", text: "It guarantees the borrower a profit" },
      { id: "d", text: "Because gas fees are expensive", feedback: "Gas is a transaction cost, unrelated to why the loan needs excess collateral." },
    ],
    correctId: "a",
    explanation:
      "DeFi lending is **permissionless** with no identity, credit score, or legal recourse. If a borrower walks away, the protocol can only fall back on the collateral — so it must be worth **more** than the loan.",
  },
  {
    id: "defi-lending-and-borrowing.q2",
    lessonSlug: "defi-lending-and-borrowing",
    type: "single",
    difficulty: "medium",
    tags: ["defi", "rates", "utilization"],
    prompt: "What primarily drives the **borrow rate** in a lending pool?",
    choices: [
      { id: "a", text: "A central bank's policy rate" },
      { id: "b", text: "Pool **utilization** — `borrowed ÷ supplied`" },
      { id: "c", text: "The borrower's credit score" },
      { id: "d", text: "The number of suppliers, regardless of how much is borrowed" },
    ],
    correctId: "b",
    explanation:
      "Rates are set **algorithmically by utilization**. High utilization means little free liquidity, so rates climb to attract suppliers and slow borrowing. The borrow rate is always above the supply rate.",
  },
  {
    id: "defi-lending-and-borrowing.q3",
    lessonSlug: "defi-lending-and-borrowing",
    type: "single",
    difficulty: "easy",
    tags: ["defi", "health-factor"],
    prompt: "A loan is **liquidatable** when its health factor is…",
    choices: [
      { id: "a", text: "Below `1`" },
      { id: "b", text: "Above `1`", feedback: "`HF > 1` is the safe zone — liquidation only begins once it drops below `1`." },
      { id: "c", text: "Exactly `2`" },
      { id: "d", text: "Any positive number" },
    ],
    correctId: "a",
    explanation:
      "`HF = (collateral value × liquidation threshold) ÷ debt value`. `HF > 1` is safe; once `HF` drops **below `1`**, the loan can be liquidated.",
  },
  {
    id: "defi-lending-and-borrowing.q4",
    lessonSlug: "defi-lending-and-borrowing",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["defi", "health-factor", "math", "scenario"],
    prompt:
      "You deposited ETH now worth `$14,000` with an `80%` liquidation threshold, and you owe `$12,000`. What is your health factor?",
    choices: [
      { id: "a", text: "1.17" },
      { id: "b", text: "1.00" },
      { id: "c", text: "0.93" },
      { id: "d", text: "0.80", feedback: "That's just the threshold — you still have to divide collateral × threshold by the debt." },
    ],
    correctId: "c",
    explanation:
      "`HF = (14,000 × 0.80) ÷ 12,000 = 11,200 ÷ 12,000 = 0.93`. Below `1`, so the loan is **liquidatable**.",
  },
  {
    id: "defi-lending-and-borrowing.q5",
    lessonSlug: "defi-lending-and-borrowing",
    type: "single",
    difficulty: "medium",
    tags: ["defi", "liquidation"],
    prompt: "When your loan is liquidated, what does the **liquidator** get?",
    choices: [
      { id: "a", text: "Only the exact debt they repaid, nothing more" },
      { id: "b", text: "The collateral they seize **plus** a ~`5-10%` liquidation bonus paid out of your collateral" },
      { id: "c", text: "A government tax credit" },
      { id: "d", text: "Nothing — liquidation is done for free by the protocol" },
    ],
    correctId: "b",
    explanation:
      "A liquidator repays part of your debt, seizes collateral, and keeps a **liquidation bonus/penalty** of roughly `5-10%` — paid by you. That reward is what makes liquidation bots show up instantly.",
  },
  {
    id: "defi-lending-and-borrowing.q6",
    lessonSlug: "defi-lending-and-borrowing",
    type: "single",
    difficulty: "medium",
    tags: ["defi", "health-factor", "risk"],
    prompt: "Which of these can push your health factor **below `1`**?",
    choices: [
      { id: "a", text: "Only a fall in your collateral's price" },
      { id: "b", text: "Only a rise in the borrowed asset's price" },
      { id: "c", text: "Either a falling collateral price **or** a rising borrowed-asset price" },
      { id: "d", text: "Neither — only missing a payment can" },
    ],
    correctId: "c",
    explanation:
      "Both sides matter. Falling collateral shrinks the numerator; a rising borrowed-asset price grows the debt in the denominator. **Either** can drop `HF` below `1`.",
  },
  {
    id: "defi-lending-and-borrowing.q7",
    lessonSlug: "defi-lending-and-borrowing",
    type: "single",
    difficulty: "hard",
    tags: ["defi", "oracle", "stablecoin", "scenario"],
    prompt:
      "Your loan sits at `HF = 1.05`, fully backed by a stablecoin you assumed was steady. The stablecoin de-pegs from `$1.00` to `$0.92`. What likely happens?",
    choices: [
      { id: "a", text: "Nothing — stablecoins can't affect health factor" },
      { id: "b", text: "Your collateral value drops ~`8%`, pushing `HF` below `1` and making the loan liquidatable" },
      { id: "c", text: "The protocol automatically tops up your collateral" },
      { id: "d", text: "Your borrow rate falls, raising `HF`" },
    ],
    correctId: "b",
    explanation:
      "Stablecoin collateral is **not** risk-free. An ~`8%` de-peg cuts your collateral value ~`8%`. With `HF` already at `1.05`, that's enough to drop below `1` and trigger liquidation — even though the asset you were watching never moved.",
  },
  {
    id: "defi-lending-and-borrowing.q8",
    lessonSlug: "defi-lending-and-borrowing",
    type: "single",
    difficulty: "hard",
    tags: ["defi", "oracle", "risk"],
    prompt: "What is **oracle risk** in a lending protocol?",
    choices: [
      { id: "a", text: "The chance an admin manually changes your loan terms" },
      { id: "b", text: "A manipulated or laggy price feed wrongly liquidating a healthy loan or letting bad debt build" },
      { id: "c", text: "The risk that interest rates are too low" },
      { id: "d", text: "The danger of supplying too little collateral on purpose" },
    ],
    correctId: "b",
    explanation:
      "Health factors are computed from a price **oracle**. If that feed is manipulated or lagging, the protocol can liquidate a sound position or fail to liquidate an unsound one — leaving the pool with bad debt.",
  },
  {
    id: "defi-lending-and-borrowing.q9",
    lessonSlug: "defi-lending-and-borrowing",
    type: "single",
    difficulty: "easy",
    tags: ["defi", "custody"],
    prompt: "DeFi lending pools are best described as…",
    choices: [
      { id: "a", text: "Non-custodial and permissionless — smart contracts hold funds and anyone can participate" },
      { id: "b", text: "Run by a bank that holds your deposits" },
      { id: "c", text: "Available only to accredited investors" },
      { id: "d", text: "Insured by the government against loss" },
    ],
    correctId: "a",
    explanation:
      "Funds sit in **smart contracts**, not a company's account (non-custodial), and there's no application or approval (permissionless). That openness is exactly why over-collateralization and automatic liquidation are required.",
  },
];
