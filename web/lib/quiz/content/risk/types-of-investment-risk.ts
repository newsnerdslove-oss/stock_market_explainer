import type { Question } from "@/lib/quiz/types";

// Quiz for the "Types of Investment Risk" lesson.
export const questions: Question[] = [
  {
    id: "types-of-investment-risk.q1",
    lessonSlug: "types-of-investment-risk",
    type: "single",
    difficulty: "easy",
    tags: ["risk", "taxonomy", "systematic", "concept"],
    prompt:
      "Which kind of risk can diversification reduce?",
    choices: [
      { id: "a", text: "Non-systematic (company/sector-specific) risk" },
      { id: "b", text: "Systematic (market-wide) risk", feedback: "Diversification can't touch market-wide risk — a broad shock reprices everything at once." },
      { id: "c", text: "Interest-rate risk" },
      { id: "d", text: "Inflation risk" },
    ],
    correctId: "a",
    explanation:
      "Diversification spreads capital so company- and sector-specific shocks partly cancel — that's **non-systematic** risk. **Systematic** risk (market, rate, inflation, currency, political) hits the whole market and can't be diversified away.",
  },
  {
    id: "types-of-investment-risk.q2",
    lessonSlug: "types-of-investment-risk",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "taxonomy", "systematic", "classification"],
    prompt:
      "Which of these is a **systematic** risk?",
    choices: [
      { id: "a", text: "Credit (default) risk" },
      { id: "b", text: "Interest-rate risk" },
      { id: "c", text: "Liquidity risk" },
      { id: "d", text: "Business risk" },
    ],
    correctId: "b",
    explanation:
      "Interest-rate risk comes from market-wide forces and moves all bonds at once, so it's **systematic**. Credit, liquidity, and business risk all attach to a specific issuer — they're **non-systematic** and diversifiable.",
  },
  {
    id: "types-of-investment-risk.q3",
    lessonSlug: "types-of-investment-risk",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "taxonomy", "non-systematic", "classification"],
    prompt:
      "An investor worries that one specific company in the portfolio could go bankrupt. Which risk is that, and is it diversifiable?",
    choices: [
      { id: "a", text: "Business risk — non-systematic, so diversifiable" },
      { id: "b", text: "Market risk — systematic, not diversifiable", feedback: "A single company's bankruptcy is specific to that firm, not the whole market — it's business risk." },
      { id: "c", text: "Inflation risk — systematic, not diversifiable" },
      { id: "d", text: "Business risk — systematic, not diversifiable", feedback: "Business risk is the textbook *non-systematic* risk; it's exactly what diversification reduces." },
    ],
    correctId: "a",
    explanation:
      "Risk tied to one company's operations or survival is **business risk** — a non-systematic risk. Holding many uncorrelated names makes any single firm's collapse a small part of the whole, so it *is* diversifiable.",
  },
  {
    id: "types-of-investment-risk.q4",
    lessonSlug: "types-of-investment-risk",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "inflation", "purchasing-power", "concept"],
    prompt:
      "A retiree holds a fixed-rate bond. Prices in the economy rise faster than the bond's yield. Which risk is biting?",
    choices: [
      { id: "a", text: "Inflation (purchasing-power) risk" },
      { id: "b", text: "Reinvestment risk", feedback: "Reinvestment risk is about redeploying returned cash at lower rates — not about prices outrunning a fixed yield." },
      { id: "c", text: "Liquidity risk" },
      { id: "d", text: "Call risk" },
    ],
    correctId: "a",
    explanation:
      "When a fixed return fails to keep pace with rising prices, the *real* value of the money shrinks — that's **inflation / purchasing-power risk**, a systematic risk that hits long-term bonds and cash hardest.",
  },
  {
    id: "types-of-investment-risk.q5",
    lessonSlug: "types-of-investment-risk",
    type: "single",
    difficulty: "hard",
    tags: ["risk", "call", "reinvestment", "rates"],
    prompt:
      "Interest rates fall sharply. Which pair of risks is most likely to hurt a bondholder now?",
    choices: [
      { id: "a", text: "Call risk and reinvestment risk" },
      { id: "b", text: "Interest-rate risk and inflation risk", feedback: "Falling rates push bond *prices up*, so interest-rate risk helps here, not hurts." },
      { id: "c", text: "Credit risk and liquidity risk" },
      { id: "d", text: "Currency risk and political risk" },
    ],
    correctId: "a",
    explanation:
      "Falling rates trigger **call risk** (issuers redeem high-coupon bonds early) and **reinvestment risk** (returned cash now earns less). Both bite when rates *fall*; rising rates would hurt bond prices instead.",
  },
  {
    id: "types-of-investment-risk.q6",
    lessonSlug: "types-of-investment-risk",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "liquidity", "non-systematic", "concept"],
    prompt:
      "Which describes **liquidity (marketability) risk**?",
    choices: [
      { id: "a", text: "The chance an issuer fails to pay interest or principal" },
      { id: "b", text: "The chance you can't sell quickly, or only at a steep discount" },
      { id: "c", text: "The chance rates rise and bond prices fall" },
      { id: "d", text: "The chance a foreign government changes its laws" },
    ],
    correctId: "b",
    explanation:
      "Liquidity risk is about *exit*: too few buyers, so you sell slowly or only by accepting a deep discount. The first choice is credit/default risk, the third is interest-rate risk, and the fourth is political risk.",
  },
  {
    id: "types-of-investment-risk.q7",
    lessonSlug: "types-of-investment-risk",
    type: "single",
    difficulty: "hard",
    tags: ["risk", "systematic", "diversification", "misconception"],
    prompt:
      "An investor owns 40 uncorrelated stocks across many sectors. A recession reprices the entire market lower. What does this show?",
    choices: [
      { id: "a", text: "Diversification failed — they should have owned even more names" },
      { id: "b", text: "Systematic risk remains even in a well-diversified equity portfolio" },
      { id: "c", text: "The portfolio must have had hidden credit risk" },
      { id: "d", text: "Reinvestment risk caused the broad decline", feedback: "A market-wide recession is systematic market risk, not reinvestment risk, which concerns redeploying returned cash." },
    ],
    correctId: "b",
    explanation:
      "Even a perfectly diversified equity portfolio carries full **systematic** risk. Diversification neutralizes only non-systematic (company/sector) risk; a recession is a market-wide shock that no number of stock holdings can diversify away.",
  },
];
