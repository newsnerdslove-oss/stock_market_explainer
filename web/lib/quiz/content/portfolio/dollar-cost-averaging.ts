import type { Question } from "@/lib/quiz/types";

// Quiz for the "Dollar-Cost Averaging vs. Lump Sum" lesson.
export const questions: Question[] = [
  {
    id: "dollar-cost-averaging.q1",
    lessonSlug: "dollar-cost-averaging",
    type: "single",
    difficulty: "easy",
    tags: ["portfolio", "dca", "definition"],
    prompt: "Dollar-cost averaging means…",
    choices: [
      { id: "a", text: "Buying a fixed number of shares each period" },
      { id: "b", text: "Investing a fixed dollar amount at regular intervals, regardless of price" },
      { id: "c", text: "Investing only when the price drops" },
      { id: "d", text: "Putting your entire balance in on a single day" },
    ],
    correctId: "b",
    explanation:
      "DCA invests the **same fixed dollar amount** on a set schedule **regardless of price**. A fixed dollar amount buys *more* shares when prices are low and *fewer* when they're high.",
  },
  {
    id: "dollar-cost-averaging.q2",
    lessonSlug: "dollar-cost-averaging",
    type: "single",
    difficulty: "easy",
    tags: ["portfolio", "dca", "mechanics"],
    prompt: "Under DCA, when the share price is low on a given purchase date, you end up buying…",
    choices: [
      { id: "a", text: "Fewer shares than usual" },
      { id: "b", text: "The same number of shares every time" },
      { id: "c", text: "More shares than usual" },
      { id: "d", text: "No shares until the price rises" },
    ],
    correctId: "c",
    explanation:
      "Because the **dollar amount is fixed**, a lower price means each dollar buys more — so you accumulate **more shares** in cheap months and fewer in expensive ones.",
  },
  {
    id: "dollar-cost-averaging.q3",
    lessonSlug: "dollar-cost-averaging",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "dca", "average-cost"],
    prompt:
      "Over a volatile period of DCA purchases, how does your average **cost** per share compare to the average **price**?",
    choices: [
      { id: "a", text: "Average cost is below the average price" },
      { id: "b", text: "Average cost is above the average price", feedback: "It's the reverse — buying more shares in cheap months pulls the blended cost *below* the simple average price." },
      { id: "c", text: "They are always exactly equal" },
      { id: "d", text: "Average cost is undefined" },
    ],
    correctId: "a",
    explanation:
      "Spending a fixed dollar amount tilts your share count toward low-price months, so the blended (harmonic-mean) **cost** lands **below** the simple average **price** whenever prices vary.",
  },
  {
    id: "dollar-cost-averaging.q4",
    lessonSlug: "dollar-cost-averaging",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["portfolio", "dca", "math"],
    unit: "$",
    prompt:
      "You invest `$100` in month 1 at `$10/share` and `$100` in month 2 at `$5/share`. What is your average cost per share?",
    choices: [
      { id: "a", text: "$7.50" },
      { id: "b", text: "$6.67" },
      { id: "c", text: "$5.00" },
      { id: "d", text: "$10.00" },
    ],
    correctId: "b",
    explanation:
      "Shares: `$100 ÷ $10 = 10` and `$100 ÷ $5 = 20`, so `30` shares for `$200`. Average cost `= $200 ÷ 30 = $6.67` — below the `$7.50` average *price*.",
  },
  {
    id: "dollar-cost-averaging.q5",
    lessonSlug: "dollar-cost-averaging",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["portfolio", "dca", "math"],
    unit: "$",
    prompt:
      "You invest `$1,000` per month for three months at prices `$50`, `$40`, and `$50`. What is your average cost per share (to the nearest cent)?",
    choices: [
      { id: "a", text: "$50.00" },
      { id: "b", text: "$48.00" },
      { id: "c", text: "$46.67", feedback: "That's the average *price* `(50+40+50)÷3`. The average *cost* weights toward the cheap month, so it comes in a bit lower." },
      { id: "d", text: "$46.15" },
    ],
    correctId: "d",
    explanation:
      "Shares: `1000÷50 = 20`, `1000÷40 = 25`, `1000÷50 = 20`, totaling `65` shares for `$3,000`. Average cost `= $3,000 ÷ 65 = $46.15`, below the `$46.67` average price.",
  },
  {
    id: "dollar-cost-averaging.q6",
    lessonSlug: "dollar-cost-averaging",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "lump-sum", "expected-return"],
    prompt:
      "Historically, why has lump-sum investing tended to beat dollar-cost averaging on average return?",
    choices: [
      { id: "a", text: "Because DCA charges higher fees" },
      { id: "b", text: "Because lump sum guarantees you buy at the low" },
      { id: "c", text: "Because markets trend upward, so getting fully invested sooner captures more growth" },
      { id: "d", text: "Because DCA is only allowed in retirement accounts" },
    ],
    correctId: "c",
    explanation:
      "Markets **trend up** over long stretches, so a lump sum that's fully invested **immediately** is exposed to that growth sooner. Vanguard found lump sum beat DCA roughly **two-thirds** of the time over the following year.",
  },
  {
    id: "dollar-cost-averaging.q7",
    lessonSlug: "dollar-cost-averaging",
    type: "single",
    difficulty: "hard",
    tags: ["portfolio", "dca", "behavioral"],
    prompt:
      "What is the strongest case for choosing DCA even though lump sum usually wins on expected return?",
    choices: [
      { id: "a", text: "DCA reliably produces a higher long-run return" },
      { id: "b", text: "It curbs timing risk and enforces discipline — and most people invest from each paycheck anyway" },
      { id: "c", text: "DCA eliminates all market risk" },
      { id: "d", text: "DCA avoids paying taxes on gains" },
    ],
    correctId: "b",
    explanation:
      "DCA's real edge is **behavioral**: an automatic fixed-amount schedule reduces **timing risk** and keeps a hesitant investor from sitting in cash. And most people invest paycheck-by-paycheck, which *is* DCA by default. It does **not** raise return reliably or remove market risk.",
  },
];
