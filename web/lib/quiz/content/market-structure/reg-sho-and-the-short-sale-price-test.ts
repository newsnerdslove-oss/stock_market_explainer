import type { Question } from "@/lib/quiz/types";

// Quiz for the "Reg SHO & the Short-Sale Price Test" lesson.
export const questions: Question[] = [
  {
    id: "reg-sho-and-the-short-sale-price-test.q1",
    lessonSlug: "reg-sho-and-the-short-sale-price-test",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "reg-sho", "locate"],
    prompt: "Under Reg SHO's **locate requirement (Rule 203)**, before effecting a short sale a broker-dealer must…",
    choices: [
      { id: "a", text: "Wait until after the trade settles to find the shares" },
      { id: "b", text: "Have borrowed, arranged to borrow, or reasonably believe it can borrow the shares" },
      { id: "c", text: "Get written approval from the SEC for each order" },
      { id: "d", text: "Mark the order as long" },
    ],
    correctId: "b",
    explanation:
      "The **locate** requires the firm to have **borrowed**, **arranged to borrow**, or have **reasonable grounds to believe** it can borrow the security so it can be delivered — and it must be done *before* and *on the same day as* the short sale.",
  },
  {
    id: "reg-sho-and-the-short-sale-price-test.q2",
    lessonSlug: "reg-sho-and-the-short-sale-price-test",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "reg-sho", "rule-201"],
    prompt: "**Rule 201** (the alternative uptick rule) is triggered when a covered security falls by at least…",
    choices: [
      { id: "a", text: "5% from the prior close" },
      { id: "b", text: "7% from the prior close" },
      { id: "c", text: "10% from the prior close" },
      { id: "d", text: "20% from the prior close" },
    ],
    correctId: "c",
    explanation:
      "Rule 201's circuit breaker trips on a **10%** intraday decline from the **prior day's closing price**. (7% and 20% are *market-wide* circuit-breaker levels — a different mechanism entirely.)",
  },
  {
    id: "reg-sho-and-the-short-sale-price-test.q3",
    lessonSlug: "reg-sho-and-the-short-sale-price-test",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "reg-sho", "rule-201"],
    prompt: "Once Rule 201 is triggered, short sales for the rest of the day may only execute…",
    choices: [
      { id: "a", text: "Above the national best bid" },
      { id: "b", text: "At or below the national best bid" },
      { id: "c", text: "Only on an uptick from the last trade" },
      { id: "d", text: "Not at all — shorting is banned for the day" },
    ],
    correctId: "a",
    explanation:
      "The restriction allows short sales only at a price **above the national best bid**. It does **not** ban shorting — it just forces short sellers above the bid so long sellers (who can hit the bid) exit first.",
  },
  {
    id: "reg-sho-and-the-short-sale-price-test.q4",
    lessonSlug: "reg-sho-and-the-short-sale-price-test",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "reg-sho", "rule-201", "scenario"],
    prompt:
      "Stock XYZ closed at `$100` Monday. On Tuesday it trades down to `$89` intraday, tripping Rule 201. How long does the short-sale price-test restriction last?",
    choices: [
      { id: "a", text: "Only for the next 5 minutes" },
      { id: "b", text: "The remainder of Tuesday and all of Wednesday" },
      { id: "c", text: "Only the remainder of Tuesday" },
      { id: "d", text: "Until the stock recovers to $100" },
    ],
    correctId: "b",
    explanation:
      "A `$100` close to `$89` is an 11% drop, so Rule 201 triggers. The restriction applies for the **remainder of that day (Tuesday) and all of the following trading day (Wednesday)**.",
  },
  {
    id: "reg-sho-and-the-short-sale-price-test.q5",
    lessonSlug: "reg-sho-and-the-short-sale-price-test",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "reg-sho", "order-marking"],
    prompt: "Under Rule 200, the **'short exempt'** order marking indicates…",
    choices: [
      { id: "a", text: "The seller owns the shares and will deliver them" },
      { id: "b", text: "The order is exempt from the locate requirement" },
      { id: "c", text: "A short sale claiming an exemption from the Rule 201 price test" },
      { id: "d", text: "An order that cannot be executed during a halt" },
    ],
    correctId: "c",
    explanation:
      "**Short exempt** flags a short sale for which the firm is claiming an **exemption from the Rule 201 price-test restriction**, so trading centers don't reject it. A sale where the seller owns and will deliver the shares is marked **long**.",
  },
  {
    id: "reg-sho-and-the-short-sale-price-test.q6",
    lessonSlug: "reg-sho-and-the-short-sale-price-test",
    type: "single",
    difficulty: "hard",
    tags: ["market-structure", "reg-sho", "rule-204"],
    prompt: "**Rule 204** addresses a **fail-to-deliver**. The required remedy is to…",
    choices: [
      { id: "a", text: "Report the fail to the SEC and take no further action" },
      { id: "b", text: "Cancel the original short sale" },
      { id: "c", text: "Wait 30 days for the shares to arrive" },
      { id: "d", text: "Close out the fail by purchasing or borrowing the security by a set deadline" },
    ],
    correctId: "d",
    explanation:
      "Rule 204 requires the participant to **close out** the fail by **purchasing or borrowing** the security no later than the start of regular trading hours on the settlement day following the settlement date. Miss it and the firm must **pre-borrow** before shorting that stock again.",
  },
  {
    id: "reg-sho-and-the-short-sale-price-test.q7",
    lessonSlug: "reg-sho-and-the-short-sale-price-test",
    type: "single",
    difficulty: "hard",
    tags: ["market-structure", "reg-sho", "rule-201", "misconception"],
    prompt: "Which statement about **Rule 201** is accurate?",
    choices: [
      { id: "a", text: "It halts trading in the stock once triggered" },
      { id: "b", text: "It restricts how short sales print but never pauses the stock" },
      { id: "c", text: "Its 10% trigger is measured from the day's high" },
      { id: "d", text: "It bans all short selling for two full days" },
    ],
    correctId: "b",
    explanation:
      "Rule 201 **never halts** the stock — trading continues normally; it only restricts short sales to prices **above the national best bid**. Its 10% trigger is measured from the **prior close** (not the day's high), and it restricts rather than bans shorting.",
  },
];
