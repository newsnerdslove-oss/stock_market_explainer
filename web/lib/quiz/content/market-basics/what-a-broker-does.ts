import type { Question } from "@/lib/quiz/types";

// Quiz for the "What a Broker Does" lesson.
export const questions: Question[] = [
  {
    id: "what-a-broker-does.q1",
    lessonSlug: "what-a-broker-does",
    type: "single",
    difficulty: "easy",
    tags: ["broker", "access"],
    prompt: "Why does an individual need a **broker** to trade stocks?",
    choices: [
      { id: "a", text: "Brokers guarantee a profit on each trade" },
      { id: "b", text: "Individuals can't trade directly on an exchange" },
      { id: "c", text: "It's required to avoid paying taxes" },
      { id: "d", text: "Brokers set the price of every stock" },
    ],
    correctId: "b",
    explanation:
      "Exchange access is restricted to members, so individuals reach the market **through a broker** acting as an authorized middleman.",
  },
  {
    id: "what-a-broker-does.q2",
    lessonSlug: "what-a-broker-does",
    type: "single",
    difficulty: "easy",
    tags: ["brokerage-account"],
    prompt: "What does a **brokerage account** hold?",
    choices: [
      { id: "a", text: "Only cash, never securities" },
      { id: "b", text: "Your cash and your securities" },
      { id: "c", text: "Shares owned by other investors" },
      { id: "d", text: "The company's earnings" },
    ],
    correctId: "b",
    explanation:
      "A **brokerage account** holds both your **cash and your securities**.",
  },
  {
    id: "what-a-broker-does.q3",
    lessonSlug: "what-a-broker-does",
    type: "single",
    difficulty: "easy",
    tags: ["settlement", "t+1"],
    prompt: "When does a U.S. stock trade **settle**?",
    choices: [
      { id: "a", text: "T+1 — one business day after the trade" },
      { id: "b", text: "Instantly, at execution" },
      { id: "c", text: "T+3 — three business days after" },
      { id: "d", text: "At the end of the calendar month" },
    ],
    correctId: "a",
    explanation:
      "Since **May 28, 2024**, U.S. stock trades settle on **T+1** — one business day after the trade.",
  },
  {
    id: "what-a-broker-does.q4",
    lessonSlug: "what-a-broker-does",
    type: "single",
    difficulty: "medium",
    tags: ["execution"],
    prompt: "What does it mean when your order is **executed**?",
    choices: [
      { id: "a", text: "The shares and cash have officially transferred" },
      { id: "b", text: "Your order has been matched and the price is locked in" },
      { id: "c", text: "Your broker has cancelled the order" },
      { id: "d", text: "The company has approved your purchase" },
    ],
    correctId: "b",
    explanation:
      "**Execution** is the moment your order is **matched and the price locks in**. The official transfer happens later, at settlement.",
  },
  {
    id: "what-a-broker-does.q5",
    lessonSlug: "what-a-broker-does",
    type: "single",
    difficulty: "medium",
    tags: ["order-routing"],
    prompt: "Where does a broker **route** your order to be filled?",
    choices: [
      { id: "a", text: "Directly to the company's headquarters" },
      { id: "b", text: "To a venue such as an exchange or market maker" },
      { id: "c", text: "To the SEC for approval" },
      { id: "d", text: "To another retail investor by email" },
    ],
    correctId: "b",
    explanation:
      "The broker **routes** your order to a venue — an **exchange or a market maker** — where it gets executed.",
  },
  {
    id: "what-a-broker-does.q6",
    lessonSlug: "what-a-broker-does",
    type: "single",
    difficulty: "medium",
    tags: ["fees", "payment-for-order-flow"],
    prompt: "Which of these is a real way brokers make money?",
    choices: [
      { id: "a", text: "Taking a cut of the company's profits" },
      { id: "b", text: "Payment for order flow" },
      { id: "c", text: "Charging the exchange a listing fee" },
      { id: "d", text: "Setting the stock's market price" },
    ],
    correctId: "b",
    explanation:
      "Brokers earn through commissions and fees, interest on cash, and **payment for order flow** — being paid to route orders to certain venues.",
  },
  {
    id: "what-a-broker-does.q7",
    lessonSlug: "what-a-broker-does",
    type: "single",
    difficulty: "hard",
    tags: ["settlement", "t+1", "application"],
    prompt:
      "You buy shares on a **Thursday** with no holidays that week. When does the trade settle?",
    choices: [
      { id: "a", text: "Thursday, the same day" },
      { id: "b", text: "Friday" },
      { id: "c", text: "The following Monday" },
      { id: "d", text: "The following Thursday" },
    ],
    correctId: "b",
    explanation:
      "T+1 means **one business day** later. A Thursday trade (no holidays) settles **Friday**.",
  },
  {
    id: "what-a-broker-does.q8",
    lessonSlug: "what-a-broker-does",
    type: "single",
    difficulty: "hard",
    tags: ["misconception", "execution", "settlement", "application"],
    prompt:
      "Your `$250` buy order shows 'executed' on Monday. What has actually happened?",
    choices: [
      { id: "a", text: "The price is locked in, but the official transfer settles Tuesday (T+1)" },
      { id: "b", text: "The shares and cash have already fully transferred", feedback: "Execution only locks the price — the official transfer is settlement, which is T+1." },
      { id: "c", text: "Nothing is final until you confirm again" },
      { id: "d", text: "The order will execute again on Tuesday" },
    ],
    correctId: "a",
    explanation:
      "'Executed' locks the **price** on Monday. The official transfer of shares and cash — **settlement** — happens Tuesday on T+1.",
  },
];
