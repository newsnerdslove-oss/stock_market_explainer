import type { Question } from "@/lib/quiz/types";

// Quiz for the "Callable, Refunded, Convertible & Put Bonds" lesson.
export const questions: Question[] = [
  {
    id: "callable-refunded-convertible-put-bonds.q1",
    lessonSlug: "callable-refunded-convertible-put-bonds",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["fn:3", "convertible-bonds", "parity"],
    unit: "$",
    prompt:
      "A bond is convertible at `$25` and the stock trades at `$30`. What is the bond's parity price?",
    choices: [
      { id: "a", text: "$1,250", feedback: "That uses a ratio of 25 shares — but the ratio is 1,000 ÷ 25 = 40." },
      { id: "b", text: "$1,200" },
      { id: "c", text: "$750" },
      { id: "d", text: "$1,000" },
    ],
    correctId: "b",
    explanation:
      "`ratio = $1,000 ÷ $25 = 40 shares`; `bond parity = $30 × 40 = $1,200`.",
  },
  {
    id: "callable-refunded-convertible-put-bonds.q2",
    lessonSlug: "callable-refunded-convertible-put-bonds",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["fn:3", "convertible-bonds", "conversion-ratio"],
    prompt:
      "A bond is convertible at `$40`. How many shares does each `$1,000` bond convert into?",
    choices: [
      { id: "a", text: "40" },
      { id: "b", text: "25" },
      { id: "c", text: "4", feedback: "Divide $1,000 by the conversion price, not the price by 10." },
      { id: "d", text: "16" },
    ],
    correctId: "b",
    explanation:
      "`conversion ratio = $1,000 ÷ conversion price = $1,000 ÷ $40 = 25 shares`.",
  },
  {
    id: "callable-refunded-convertible-put-bonds.q3",
    lessonSlug: "callable-refunded-convertible-put-bonds",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "convertible-bonds", "parity"],
    unit: "$",
    prompt:
      "A bond converts at `$50` and the stock trades at `$55`. What is the bond's parity price?",
    choices: [
      { id: "a", text: "$1,100" },
      { id: "b", text: "$1,250", feedback: "Ratio is 1,000 ÷ 50 = 20 shares, then × $55." },
      { id: "c", text: "$2,750" },
      { id: "d", text: "$1,000" },
    ],
    correctId: "a",
    explanation:
      "`ratio = $1,000 ÷ $50 = 20 shares`; `bond parity = $55 × 20 = $1,100`.",
  },
  {
    id: "callable-refunded-convertible-put-bonds.q4",
    lessonSlug: "callable-refunded-convertible-put-bonds",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "convertible-bonds", "parity"],
    unit: "$",
    prompt:
      "A bond convertible at `$40` trades at `$1,200`. What is the parity price of the stock?",
    choices: [
      { id: "a", text: "$30", feedback: "Divide the bond price by the ratio (25), not by the conversion price." },
      { id: "b", text: "$48" },
      { id: "c", text: "$50" },
      { id: "d", text: "$25" },
    ],
    correctId: "b",
    explanation:
      "`ratio = $1,000 ÷ $40 = 25 shares`; `stock parity = bond price ÷ ratio = $1,200 ÷ 25 = $48`.",
  },
  {
    id: "callable-refunded-convertible-put-bonds.q5",
    lessonSlug: "callable-refunded-convertible-put-bonds",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "pre-refunded", "credit-quality"],
    prompt:
      "A muni is \"pre-refunded to the call date.\" What backs the escrow and what is its credit quality?",
    choices: [
      { id: "a", text: "Corporate bonds; speculative grade" },
      { id: "b", text: "U.S. government securities; effectively AAA" },
      { id: "c", text: "The issuer's taxing power; unchanged quality", feedback: "Pre-refunding replaces the backing with an escrow of U.S. governments — quality rises." },
      { id: "d", text: "Bank letters of credit; below investment grade" },
    ],
    correctId: "b",
    explanation:
      "Refunding proceeds are escrowed in **U.S. government securities** until the call date, making the bond **effectively AAA** and trading to the call date.",
  },
  {
    id: "callable-refunded-convertible-put-bonds.q6",
    lessonSlug: "callable-refunded-convertible-put-bonds",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "put-bonds", "embedded-options"],
    prompt: "Which embedded option favors the **investor**?",
    choices: [
      { id: "a", text: "The call feature" },
      { id: "b", text: "The put feature" },
      { id: "c", text: "Advance refunding", feedback: "Refunding is an issuer action; the put is what protects the investor." },
      { id: "d", text: "The sinking fund" },
    ],
    correctId: "b",
    explanation:
      "A **put** lets the investor sell back at par on set dates — protection against rising rates. The call favors the issuer; the put is its mirror image.",
  },
  {
    id: "callable-refunded-convertible-put-bonds.q7",
    lessonSlug: "callable-refunded-convertible-put-bonds",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "callable-bonds", "call-protection"],
    prompt: "What is **call protection**?",
    choices: [
      { id: "a", text: "Insurance that repays the bond if the issuer defaults" },
      { id: "b", text: "A period after issuance during which the issuer cannot call the bond" },
      { id: "c", text: "A guarantee the bond will be called at a premium" },
      { id: "d", text: "The investor's right to demand early redemption", feedback: "That's a put; call protection just blocks the issuer's call for a set period." },
    ],
    correctId: "b",
    explanation:
      "**Call protection** bars the issuer from redeeming the bond for a set period after issuance, shielding the investor from an early call.",
  },
  {
    id: "callable-refunded-convertible-put-bonds.q8",
    lessonSlug: "callable-refunded-convertible-put-bonds",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "pre-refunded", "misconception"],
    prompt:
      "\"A call feature and a refunding both hurt the bondholder, so pre-refunded bonds are still risky.\" What's the best correction?",
    choices: [
      { id: "a", text: "Correct — pre-refunded bonds carry the same risk as any callable muni" },
      { id: "b", text: "A pre-refunded bond is escrowed in U.S. governments and is one of the safest muni positions (effectively AAA)" },
      { id: "c", text: "Pre-refunded bonds lose their tax exemption" },
      { id: "d", text: "Refunding always lowers the bond's credit rating" },
    ],
    correctId: "b",
    explanation:
      "Escrowing refunding proceeds in U.S. governments **upgrades** the credit to effectively AAA. Separate the issuer's call option (bad for the investor) from the credit upgrade escrowing produces.",
  },
];
