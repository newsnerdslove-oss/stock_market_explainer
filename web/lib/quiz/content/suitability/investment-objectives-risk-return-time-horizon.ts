import type { Question } from "@/lib/quiz/types";

// Quiz for the "Investment Objectives: Risk, Return, and Time Horizon" lesson.
export const questions: Question[] = [
  {
    id: "investment-objectives-risk-return-time-horizon.q1",
    lessonSlug: "investment-objectives-risk-return-time-horizon",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "suitability", "objectives", "scenario"],
    prompt:
      "A 70-year-old retiree needs steady cash flow and wants to protect principal. Which recommendation best fits her objectives?",
    choices: [
      { id: "a", text: "Aggressive growth funds and low-priced speculative stocks", feedback: "Growth and speculation pursue appreciation while accepting large losses — the opposite of an income-plus-preservation objective for someone who needs the cash flow now." },
      { id: "b", text: "High-grade bonds, preferred stock, and dividend-paying equities" },
      { id: "c", text: "Long-dated call options on volatile tech names" },
      { id: "d", text: "A concentrated position in a single biotech startup" },
    ],
    correctId: "b",
    explanation:
      "Income plus preservation points to high-grade bonds, preferred stock, and dividend equities — steady cash flow with relatively protected principal. Growth and speculative products are mismatched.",
  },
  {
    id: "investment-objectives-risk-return-time-horizon.q2",
    lessonSlug: "investment-objectives-risk-return-time-horizon",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "risk", "inflation"],
    prompt: "Which risk most threatens a long-horizon investor who holds everything in cash?",
    choices: [
      { id: "a", text: "Market risk" },
      { id: "b", text: "Inflation (purchasing-power) risk" },
      { id: "c", text: "Call risk" },
      { id: "d", text: "Credit/default risk", feedback: "Cash and insured deposits carry little default risk. The real danger over decades is that purchasing power erodes faster than the money grows — inflation risk." },
    ],
    correctId: "b",
    explanation:
      "All-cash defeats market risk but maximizes **inflation/purchasing-power risk** over a long horizon — returns fail to keep pace with rising prices, eroding real wealth.",
  },
  {
    id: "investment-objectives-risk-return-time-horizon.q3",
    lessonSlug: "investment-objectives-risk-return-time-horizon",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "tax", "municipal-bonds", "scenario"],
    prompt:
      "A high-tax-bracket investor wants tax-advantaged income held in a taxable brokerage account. Which product fits best?",
    choices: [
      { id: "a", text: "Corporate high-yield bonds" },
      { id: "b", text: "A money-market fund" },
      { id: "c", text: "Municipal bonds" },
      { id: "d", text: "Growth stocks paying no dividends", feedback: "Non-dividend growth stocks generate appreciation, not the tax-advantaged income the investor asked for. Munis deliver federally tax-exempt income suited to a high bracket." },
    ],
    correctId: "c",
    explanation:
      "Municipal bonds produce federally tax-exempt interest, making them well suited to a high-bracket investor seeking tax-advantaged income in a taxable account.",
  },
  {
    id: "investment-objectives-risk-return-time-horizon.q4",
    lessonSlug: "investment-objectives-risk-return-time-horizon",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "objectives"],
    prompt: "Which objective is best matched to common stock and growth funds?",
    choices: [
      { id: "a", text: "Preservation of capital" },
      { id: "b", text: "Income" },
      { id: "c", text: "Growth (capital appreciation)" },
      { id: "d", text: "Liquidity" },
    ],
    correctId: "c",
    explanation:
      "Common stock and growth funds aim to increase the value of principal over time — the **growth** objective.",
  },
  {
    id: "investment-objectives-risk-return-time-horizon.q5",
    lessonSlug: "investment-objectives-risk-return-time-horizon",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "constraints"],
    prompt: "Which three constraints bound a customer's investment objective?",
    choices: [
      { id: "a", text: "Risk tolerance, time horizon, and liquidity needs" },
      { id: "b", text: "Commission, spread, and ticket charge" },
      { id: "c", text: "Beta, alpha, and standard deviation" },
      { id: "d", text: "Coupon, par, and maturity" },
    ],
    correctId: "a",
    explanation:
      "Every objective is framed by three constraints: **risk tolerance**, **time horizon**, and **liquidity needs**.",
  },
  {
    id: "investment-objectives-risk-return-time-horizon.q6",
    lessonSlug: "investment-objectives-risk-return-time-horizon",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "objectives", "speculation"],
    prompt: "Which set of products aligns with a speculation objective?",
    choices: [
      { id: "a", text: "Treasuries, CDs, and money-market funds" },
      { id: "b", text: "Options, low-priced volatile stocks, and leveraged products" },
      { id: "c", text: "Investment-grade corporate bonds and preferred stock" },
      { id: "d", text: "Fixed annuities and dividend equities", feedback: "Fixed annuities and dividend stocks serve income, not speculation. Speculation pursues large gains while accepting large losses — options and leverage." },
    ],
    correctId: "b",
    explanation:
      "Speculation accepts large potential losses for large potential gains, aligning with options, volatile low-priced stocks, and leveraged products.",
  },
  {
    id: "investment-objectives-risk-return-time-horizon.q7",
    lessonSlug: "investment-objectives-risk-return-time-horizon",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "scenario", "growth", "time-horizon"],
    prompt:
      "A 30-year-old with stable income, high risk tolerance, and a 35-year horizon says her goal is to 'build wealth.' Which recommendation is suitable?",
    choices: [
      { id: "a", text: "Hold the entire portfolio in a money-market fund for safety", feedback: "Over 35 years this 'safe' choice maximizes inflation/purchasing-power risk and won't build wealth — a mismatch with both her objective and her long horizon." },
      { id: "b", text: "A diversified portfolio of equities and growth funds" },
      { id: "c", text: "Short-term CDs rolled every six months" },
      { id: "d", text: "A single concentrated municipal bond position" },
    ],
    correctId: "b",
    explanation:
      "Her objective is growth and her long horizon and high risk tolerance can absorb volatility, so a diversified equity/growth-fund portfolio fits. All-cash would expose her to inflation risk and fail to build wealth.",
  },
  {
    id: "investment-objectives-risk-return-time-horizon.q8",
    lessonSlug: "investment-objectives-risk-return-time-horizon",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "risk", "objectives"],
    prompt:
      "Why is it inaccurate to say a Treasury bill is 'the safest investment for everyone'?",
    choices: [
      { id: "a", text: "T-bills carry high default risk" },
      { id: "b", text: "Risk is objective-relative: a T-bill safe for preservation can be unsuitable for a long-horizon growth goal due to inflation risk" },
      { id: "c", text: "T-bills cannot be sold before maturity" },
      { id: "d", text: "T-bills always lose money" },
    ],
    correctId: "b",
    explanation:
      "There is no universal 'safe.' A T-bill protects principal (good for preservation) but locks in low returns that lose to inflation over decades — unsuitable for a long-horizon growth objective.",
  },
];
