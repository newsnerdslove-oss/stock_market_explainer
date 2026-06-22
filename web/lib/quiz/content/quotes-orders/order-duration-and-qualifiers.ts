import type { Question } from "@/lib/quiz/types";

// Quiz for the "Order Duration & Qualifiers (Day, GTC, AON, FOK, IOC)" lesson.
export const questions: Question[] = [
  {
    id: "order-duration-and-qualifiers.q1",
    lessonSlug: "order-duration-and-qualifiers",
    type: "single",
    difficulty: "easy",
    tags: ["orders", "time-in-force", "day-order"],
    prompt: "A **Day** order that hasn't filled by the regular-session close will…",
    choices: [
      { id: "a", text: "Carry over automatically into the next trading day", feedback: "That's closer to a GTC order — a Day order does not roll forward." },
      { id: "b", text: "Expire" },
      { id: "c", text: "Convert into a market order at the close" },
      { id: "d", text: "Stay open for 60–90 days" },
    ],
    correctId: "b",
    explanation:
      "A **Day** order is good only for the current regular session. If it hasn't filled by the close, it **expires** — it doesn't roll into after-hours or the next day.",
  },
  {
    id: "order-duration-and-qualifiers.q2",
    lessonSlug: "order-duration-and-qualifiers",
    type: "single",
    difficulty: "easy",
    tags: ["orders", "time-in-force", "gtc"],
    prompt: "What does **GTC** stand for, and what does it do?",
    choices: [
      { id: "a", text: "Good-Til-Cancelled — it keeps working across sessions until filled or cancelled" },
      { id: "b", text: "Guaranteed-To-Clear — the broker guarantees a fill" },
      { id: "c", text: "Get-The-Close — it always fills at the closing price" },
      { id: "d", text: "Good-This-Cycle — it lasts exactly one trading day" },
    ],
    correctId: "a",
    explanation:
      "**GTC** = **Good-Til-Cancelled**: it stays active across days until it fills or you cancel it. Brokers usually cap it (often around 60–90 days), after which it auto-expires.",
  },
  {
    id: "order-duration-and-qualifiers.q3",
    lessonSlug: "order-duration-and-qualifiers",
    type: "single",
    difficulty: "medium",
    tags: ["orders", "qualifiers", "ioc"],
    prompt: "Which qualifier fills **whatever is available right now** and cancels the rest, allowing a partial fill?",
    choices: [
      { id: "a", text: "AON (All-Or-None)", feedback: "AON forbids partial fills — it must fill in full or not at all." },
      { id: "b", text: "FOK (Fill-Or-Kill)", feedback: "FOK also forbids partials — it's the entire order immediately, or cancel." },
      { id: "c", text: "IOC (Immediate-Or-Cancel)" },
      { id: "d", text: "GTC (Good-Til-Cancelled)" },
    ],
    correctId: "c",
    explanation:
      "**IOC** takes whatever shares are available immediately and cancels the unfilled remainder. It's the one qualifier here that **allows a partial fill**.",
  },
  {
    id: "order-duration-and-qualifiers.q4",
    lessonSlug: "order-duration-and-qualifiers",
    type: "single",
    difficulty: "medium",
    tags: ["orders", "qualifiers", "aon", "fok"],
    prompt: "The key difference between **AON** and **FOK** is that…",
    choices: [
      { id: "a", text: "AON allows partial fills but FOK does not", feedback: "Neither allows partial fills — both require the entire order. The difference is timing." },
      { id: "b", text: "Both require the entire order, but only FOK requires it immediately" },
      { id: "c", text: "AON is a time-in-force and FOK is a price type" },
      { id: "d", text: "FOK can work for days while AON must fill instantly" },
    ],
    correctId: "b",
    explanation:
      "Both **AON** and **FOK** demand the *entire* order with **no partials**. The difference is immediacy: **FOK** must fill in full *right now* or cancel, while **AON** has **no immediacy requirement** and can keep working until it can fill completely.",
  },
  {
    id: "order-duration-and-qualifiers.q5",
    lessonSlug: "order-duration-and-qualifiers",
    type: "single",
    difficulty: "hard",
    tags: ["orders", "qualifiers", "fok", "application", "scenario"],
    prompt:
      "You enter an **FOK** order for 1,000 shares, but only **400** are available at your price this instant. What happens?",
    choices: [
      { id: "a", text: "You get the 400 and the rest keeps working", feedback: "That's IOC behavior — FOK does not allow a partial fill." },
      { id: "b", text: "The entire order is cancelled — you get nothing" },
      { id: "c", text: "You get the 400 and the other 600 cancel" },
      { id: "d", text: "It waits until all 1,000 become available" },
    ],
    correctId: "b",
    explanation:
      "**FOK** requires the **entire** order **immediately**. Since all 1,000 can't fill at once right now, the whole order is **cancelled** — no partial, no waiting.",
  },
  {
    id: "order-duration-and-qualifiers.q6",
    lessonSlug: "order-duration-and-qualifiers",
    type: "single",
    difficulty: "hard",
    tags: ["orders", "qualifiers", "aon", "application", "scenario"],
    prompt:
      "You enter an **AON** order for 1,000 shares, but only **400** are available right now. What does it do?",
    choices: [
      { id: "a", text: "Fills the 400 immediately and cancels the rest", feedback: "That's IOC — AON refuses any partial fill." },
      { id: "b", text: "Cancels the whole order instantly", feedback: "That's FOK — AON has no immediacy requirement, so it doesn't cancel just because it can't fill now." },
      { id: "c", text: "Keeps working until all 1,000 can fill at once (or you cancel / it expires)" },
      { id: "d", text: "Fills 400 now and the remaining 600 as a separate Day order" },
    ],
    correctId: "c",
    explanation:
      "**AON** must fill in full or not at all, but it has **no immediacy requirement**. It won't take the 400 — it keeps **working** until all 1,000 can fill together, you cancel it, or it expires.",
  },
  {
    id: "order-duration-and-qualifiers.q7",
    lessonSlug: "order-duration-and-qualifiers",
    type: "single",
    difficulty: "hard",
    tags: ["orders", "qualifiers", "comparison", "application"],
    prompt:
      "You want as many shares as you can get **right this second** and are happy with a partial fill, but you do **not** want any leftover order resting in the book. Which qualifier fits?",
    choices: [
      { id: "a", text: "IOC (Immediate-Or-Cancel)" },
      { id: "b", text: "AON (All-Or-None)", feedback: "AON forbids partial fills and can sit working — the opposite of what you want." },
      { id: "c", text: "FOK (Fill-Or-Kill)", feedback: "FOK would cancel everything unless the full size fills at once — it won't give you a partial." },
      { id: "d", text: "GTC (Good-Til-Cancelled)", feedback: "GTC is about duration, not partial-fill behavior, and it leaves the remainder resting." },
    ],
    correctId: "a",
    explanation:
      "**IOC** grabs whatever is available immediately (a partial fill is fine) and **cancels the rest** — so nothing is left resting in the book. That's exactly the described goal.",
  },
];
