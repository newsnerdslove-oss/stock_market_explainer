import type { Question } from "@/lib/quiz/types";

// Quiz for the "Options Contract Adjustments (Splits & Dividends)" lesson.
export const questions: Question[] = [
  {
    id: "contract-adjustments-splits-and-dividends.q1",
    lessonSlug: "contract-adjustments-splits-and-dividends",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "adjustments", "splits"],
    unit: "contracts",
    prompt:
      "You are long `1` `XYZ` `60` call. `XYZ` does a **`2-for-1`** split. How many contracts do you now hold?",
    choices: [
      { id: "a", text: "1", feedback: "An even split multiplies the contracts — a 2:1 split doubles 1 contract to 2." },
      { id: "b", text: "2" },
      { id: "c", text: "4", feedback: "That would be a 4:1 split; a 2:1 split doubles 1 contract to 2." },
      { id: "d", text: "100" },
    ],
    correctId: "b",
    explanation:
      "Even (whole-number) splits use the multiply-the-contracts method: `1 × 2 = 2` contracts. The strike is halved to `30` and each still delivers `100` shares.",
  },
  {
    id: "contract-adjustments-splits-and-dividends.q2",
    lessonSlug: "contract-adjustments-splits-and-dividends",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "adjustments", "splits", "strike"],
    unit: "$",
    prompt:
      "After that **`2-for-1`** split on the `XYZ` `60` call, what is the **new strike**?",
    choices: [
      { id: "a", text: "$120", feedback: "On a forward split the strike goes down, not up: 60 ÷ 2 = 30." },
      { id: "b", text: "$60", feedback: "The strike must change on a 2:1 split — it's divided by the ratio: 60 ÷ 2 = 30." },
      { id: "c", text: "$30" },
      { id: "d", text: "$20" },
    ],
    correctId: "c",
    explanation:
      "Even split: strike is divided by the ratio → `60 ÷ 2 = 30`. Value check: `2` contracts `× 100 × $30 = $6,000`, same as `1 × 100 × $60` before.",
  },
  {
    id: "contract-adjustments-splits-and-dividends.q3",
    lessonSlug: "contract-adjustments-splits-and-dividends",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "adjustments", "splits"],
    prompt:
      "After an even **`2-for-1`** split, what is the **deliverable** (shares per contract)?",
    choices: [
      { id: "a", text: "Still 100 shares per contract" },
      { id: "b", text: "200 shares per contract", feedback: "Even splits don't change the deliverable — they add contracts. The deliverable stays 100; you just hold twice as many contracts." },
      { id: "c", text: "50 shares per contract", feedback: "The deliverable isn't cut on an even split — it stays 100, and the contract count doubles instead." },
      { id: "d", text: "It varies by broker" },
    ],
    correctId: "a",
    explanation:
      "On an even split the deliverable **stays `100`** shares per contract and the contract remains standard; the *number of contracts* is what doubles.",
  },
  {
    id: "contract-adjustments-splits-and-dividends.q4",
    lessonSlug: "contract-adjustments-splits-and-dividends",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "adjustments", "splits", "deliverable"],
    unit: "shares",
    prompt:
      "You are long `1` `XYZ` `60` call. `XYZ` does a **`3-for-2`** split. What is the new **deliverable** per contract?",
    choices: [
      { id: "a", text: "100 shares", feedback: "An uneven split adjusts the deliverable: 100 × 3/2 = 150 shares (the contract count stays at 1)." },
      { id: "b", text: "200 shares", feedback: "That would be a 2:1 result on contracts; a 3:2 split changes the deliverable to 100 × 3/2 = 150." },
      { id: "c", text: "300 shares" },
      { id: "d", text: "150 shares" },
    ],
    correctId: "d",
    explanation:
      "Uneven split → adjust the deliverable: `100 × 3/2 = 150` shares. The **number of contracts stays `1`** and the contract becomes non-standard.",
  },
  {
    id: "contract-adjustments-splits-and-dividends.q5",
    lessonSlug: "contract-adjustments-splits-and-dividends",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "adjustments", "splits", "strike"],
    unit: "$",
    prompt:
      "For that **`3-for-2`** split on the `XYZ` `60` call, what is the **new strike**?",
    choices: [
      { id: "a", text: "$90", feedback: "On a forward split the strike falls. Multiply by the inverse ratio: 60 × 2/3 = 40." },
      { id: "b", text: "$40" },
      { id: "c", text: "$30", feedback: "That would be a 2:1 result (60 ÷ 2). A 3:2 split multiplies the strike by 2/3: 60 × 2/3 = 40." },
      { id: "d", text: "$20" },
    ],
    correctId: "b",
    explanation:
      "Uneven split: strike `×` inverse ratio = `60 × 2/3 = 40`. Value check: `150 × $40 = $6,000`, identical to `100 × $60` before the split.",
  },
  {
    id: "contract-adjustments-splits-and-dividends.q6",
    lessonSlug: "contract-adjustments-splits-and-dividends",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "adjustments", "dividends"],
    prompt:
      "A company pays its **regular quarterly cash dividend**. How does the `OCC` adjust the listed options?",
    choices: [
      { id: "a", text: "It lowers the strike by the dividend amount", feedback: "Ordinary cash dividends trigger no adjustment — the income is already reflected in the option's price." },
      { id: "b", text: "It increases the deliverable", feedback: "The deliverable is changed by stock dividends and uneven splits, not by an ordinary cash dividend." },
      { id: "c", text: "It makes no adjustment — ordinary cash dividends are not adjusted" },
      { id: "d", text: "It cancels the contract" },
    ],
    correctId: "c",
    explanation:
      "**Ordinary cash dividends are NOT adjusted.** Only a **special / large one-time** cash dividend the `OCC` deems non-ordinary may be adjusted, case-by-case.",
  },
  {
    id: "contract-adjustments-splits-and-dividends.q7",
    lessonSlug: "contract-adjustments-splits-and-dividends",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "adjustments", "splits", "principle"],
    prompt:
      "Which best states the **principle** behind every `OCC` contract adjustment?",
    choices: [
      { id: "a", text: "The strike is always rounded to the nearest $5", feedback: "Adjusted strikes are computed to preserve value, not rounded to standard increments." },
      { id: "b", text: "The holder always ends up with more total value", feedback: "Adjustments are value-neutral, not value-adding — total exercise value is preserved, not increased." },
      { id: "c", text: "The number of contracts never changes", feedback: "Even splits do change the contract count; only uneven splits leave it unchanged." },
      { id: "d", text: "Adjust strike and deliverable so exercising yields the same dollar outcome as before" },
    ],
    correctId: "d",
    explanation:
      "Every `OCC` adjustment is **value-neutral**: `shares × strike` (the aggregate exercise value) is preserved so the holder is left economically whole.",
  },
];
