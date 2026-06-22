import type { Question } from "@/lib/quiz/types";

// Quiz for the "What's Marginable (and What Isn't)" lesson.
export const questions: Question[] = [
  {
    id: "non-marginable-securities-and-special-margin.q1",
    lessonSlug: "non-marginable-securities-and-special-margin",
    type: "single",
    difficulty: "easy",
    tags: ["margin", "marginable"],
    prompt: "Which of these is generally **non-marginable** (must be paid for in full)?",
    choices: [
      { id: "a", text: "An exchange-listed blue-chip stock" },
      { id: "b", text: "A U.S. Treasury note" },
      { id: "c", text: "A call option you buy (long)" },
      { id: "d", text: "A corporate bond", feedback: "Corporate bonds are marginable — brokers extend good-faith credit against them." },
    ],
    correctId: "c",
    explanation:
      "Long options are paid in full under Reg T; they only enter margin math as *cover*. Listed stocks, Treasuries, and corporate bonds are all marginable.",
  },
  {
    id: "non-marginable-securities-and-special-margin.q2",
    lessonSlug: "non-marginable-securities-and-special-margin",
    type: "single",
    difficulty: "easy",
    tags: ["margin", "new-issue"],
    prompt: "Roughly how long after pricing must a **new issue** (e.g., an IPO) be paid for in full before it becomes marginable?",
    choices: [
      { id: "a", text: "About 30 days" },
      { id: "b", text: "About 3 days" },
      { id: "c", text: "1 year" },
      { id: "d", text: "It's marginable immediately" },
    ],
    correctId: "a",
    explanation:
      "The primary market sits outside Reg T, so a new issue is non-marginable for roughly `30` days after pricing — it must season in the market before acquiring loan value.",
  },
  {
    id: "non-marginable-securities-and-special-margin.q3",
    lessonSlug: "non-marginable-securities-and-special-margin",
    type: "single",
    difficulty: "medium",
    tags: ["margin", "mutual-funds"],
    prompt: "What's the correct statement about **mutual fund shares** and margin?",
    choices: [
      { id: "a", text: "They can be bought on margin like any listed stock" },
      { id: "b", text: "They can never have any loan value, ever" },
      { id: "c", text: "They can't be bought on margin, but can be used as collateral after being held ~30 days" },
      { id: "d", text: "They require a 50% Reg T deposit at purchase" },
    ],
    correctId: "c",
    explanation:
      "Reg T requires fund purchases to be paid in full. After roughly `30` days of holding, the shares can acquire loan value and serve as collateral.",
  },
  {
    id: "non-marginable-securities-and-special-margin.q4",
    lessonSlug: "non-marginable-securities-and-special-margin",
    type: "single",
    difficulty: "medium",
    tags: ["margin", "maintenance", "exempt"],
    prompt: "Why do U.S. Treasury and municipal bonds carry much lower maintenance margin than the **25%** on stocks?",
    choices: [
      { id: "a", text: "They are exempt securities treated as far safer collateral, so requirements run as low as ~1–7%" },
      { id: "b", text: "They are non-marginable, so no maintenance applies" },
      { id: "c", text: "Reg T forbids any maintenance on bonds" },
      { id: "d", text: "Their maintenance is actually higher than stocks at 50%" },
    ],
    correctId: "a",
    explanation:
      "Exempt securities (U.S. government and municipal obligations) are safer collateral. Treasuries run roughly `1%`–`6%` by maturity and other exempt securities about `7%` — far below the `25%` equity floor.",
  },
  {
    id: "non-marginable-securities-and-special-margin.q5",
    lessonSlug: "non-marginable-securities-and-special-margin",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["margin", "maintenance", "math"],
    unit: "$",
    prompt: "You hold `$30,000` of municipal bonds at a `7%` maintenance requirement. What equity must you keep?",
    choices: [
      { id: "a", text: "$7,500", feedback: "That's `25%` — the rate for *stocks*, not exempt municipal bonds." },
      { id: "b", text: "$2,100" },
      { id: "c", text: "$300" },
      { id: "d", text: "$15,000" },
    ],
    correctId: "b",
    explanation:
      "`7% × $30,000 = $2,100`. Munis are exempt securities, so they sit far below the `25%` ($7,500) that the same dollar amount of stock would require.",
  },
  {
    id: "non-marginable-securities-and-special-margin.q6",
    lessonSlug: "non-marginable-securities-and-special-margin",
    type: "single",
    difficulty: "medium",
    tags: ["margin", "otc", "low-priced"],
    prompt: "A thinly traded OTC stock trading at `$2` a share is best described as…",
    choices: [
      { id: "a", text: "Marginable at the standard Reg T 50%" },
      { id: "b", text: "An exempt security with ~7% maintenance" },
      { id: "c", text: "Non-marginable — a 100% requirement, so no loan value" },
      { id: "d", text: "Marginable only after 30 days" },
    ],
    correctId: "c",
    explanation:
      "Low-priced (typically under `$5`) and thinly traded OTC stocks are non-margin, non-exempt securities requiring `100%` of market value — the broker lends nothing against them.",
  },
  {
    id: "non-marginable-securities-and-special-margin.q7",
    lessonSlug: "non-marginable-securities-and-special-margin",
    type: "single",
    difficulty: "hard",
    tags: ["margin", "scenario", "loan-value"],
    prompt:
      "Your margin account holds: a just-bought IPO, long call options opened today, a 6-month-old mutual fund position, and listed blue-chip stock. Which gives you usable loan value right now?",
    choices: [
      { id: "a", text: "The IPO and the long calls" },
      { id: "b", text: "The mutual fund and the blue-chip stock" },
      { id: "c", text: "Only the long calls" },
      { id: "d", text: "All four equally" },
    ],
    correctId: "b",
    explanation:
      "The fresh IPO (un-seasoned, ~30 days) and the long calls (paid in full) have zero loan value. The blue-chip stock is marginable, and the mutual fund — held well past 30 days — can now serve as collateral.",
  },
];
