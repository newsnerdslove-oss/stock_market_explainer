import type { Question } from "@/lib/quiz/types";

// Quiz for the "What Counts as a 'Recommendation'" lesson.
export const questions: Question[] = [
  {
    id: "what-counts-as-a-recommendation.q1",
    lessonSlug: "what-counts-as-a-recommendation",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "suitability", "reg-bi", "recommendation"],
    prompt:
      "How does FINRA determine whether a communication is a 'recommendation' that triggers `Rule 2111` or `Reg BI`?",
    choices: [
      { id: "a", text: "By a bright-line list of phrases that always count as recommendations" },
      { id: "b", text: "A facts-and-circumstances test, case by case, based on content, context, and presentation" },
      { id: "c", text: "Only when the customer signs a written advisory agreement" },
      { id: "d", text: "Only when a commission is charged on the trade" },
    ],
    correctId: "b",
    explanation:
      "There is no bright-line definition. Whether something is a recommendation is a **facts-and-circumstances** inquiry decided case by case — would a reasonable person view it, given its content, context, and presentation, as a call to action?",
  },
  {
    id: "what-counts-as-a-recommendation.q2",
    lessonSlug: "what-counts-as-a-recommendation",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "suitability", "hold", "recommendation"],
    prompt:
      "A rep tells a client, 'You should keep holding your `XYZ` shares — don't sell.' Is this a recommendation?",
    choices: [
      { id: "a", text: "No — a recommendation only covers buying or selling, never holding" },
      { id: "b", text: "No — holding is passive, so it is never advice" },
      { id: "c", text: "Yes — an explicit recommendation to hold a specific security is covered" },
      { id: "d", text: "Only if the rep charges a fee for the advice", feedback: "A fee isn't the trigger. An explicit hold recommendation is advice the customer can rely on, so it is covered regardless of how the rep is paid." },
    ],
    correctId: "c",
    explanation:
      "An **explicit recommendation to hold** a specific security is covered. A decision to hold is a passive strategy, but an explicit 'keep holding this' is advice the customer is expected to rely on, so it triggers the analysis.",
  },
  {
    id: "what-counts-as-a-recommendation.q3",
    lessonSlug: "what-counts-as-a-recommendation",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "suitability", "not-a-recommendation"],
    prompt: "Which of the following is generally NOT a recommendation?",
    choices: [
      { id: "a", text: "General market commentary that names no specific security and isn't a tailored call to act" },
      { id: "b", text: "A tailored email telling one client to buy a specific named fund this week" },
      { id: "c", text: "An explicit instruction to a client to hold a specific stock" },
      { id: "d", text: "Suggesting a client move assets into a specific named bond fund" },
    ],
    correctId: "a",
    explanation:
      "**General market commentary** — broad observations about rates or sectors with no specific security and no tailored call to action — is not a recommendation. The other choices each point at a specific security as a call to act.",
  },
  {
    id: "what-counts-as-a-recommendation.q4",
    lessonSlug: "what-counts-as-a-recommendation",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "reg-bi", "hold", "implicit"],
    prompt:
      "Under `Reg BI`, a broker agrees to monitor a retail customer's account but then makes no buy or sell suggestion at all. Can this silence be a recommendation?",
    choices: [
      { id: "a", text: "No — silence can never be a recommendation under any rule" },
      { id: "b", text: "Yes — under Reg BI, an agreement to monitor plus subsequent silence can be an implicit recommendation to hold" },
      { id: "c", text: "No — only Rule 2111 covers implicit holds, never Reg BI" },
      { id: "d", text: "Yes — but only if the account loses money", feedback: "Outcome isn't the trigger. The implicit hold arises from the monitoring agreement plus silence, regardless of whether the account gains or loses." },
    ],
    correctId: "b",
    explanation:
      "Under `Reg BI`, when a broker **agrees to monitor** an account and then stays silent, that silence can be an **implicit hold** recommendation. Note the contrast: `Rule 2111` reaches explicit holds but does not broaden to implicit holds.",
  },
  {
    id: "what-counts-as-a-recommendation.q5",
    lessonSlug: "what-counts-as-a-recommendation",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "suitability", "unsolicited", "scenario"],
    prompt:
      "A customer calls and says, 'Buy me 100 shares of `ACME` today' — the rep gave no input. How is this best characterized?",
    choices: [
      { id: "a", text: "A rep recommendation, fully subject to the Care Obligation" },
      { id: "b", text: "An unsolicited order — not a recommendation by the rep" },
      { id: "c", text: "An implicit hold recommendation" },
      { id: "d", text: "General market commentary", feedback: "Commentary is a broad, untailored message. This is a specific customer-directed order to trade, which makes it an unsolicited order, not commentary." },
    ],
    correctId: "b",
    explanation:
      "When the **customer** decides and directs the trade, the rep didn't recommend it — it's an **unsolicited order**. The rep marks it unsolicited and must not have induced it.",
  },
  {
    id: "what-counts-as-a-recommendation.q6",
    lessonSlug: "what-counts-as-a-recommendation",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "suitability", "asset-allocation", "not-a-recommendation"],
    prompt:
      "A rep shows a client an asset-allocation model: '60% equities, 40% fixed income,' naming no specific securities. Under the suitability framework, is this generally a recommendation?",
    choices: [
      { id: "a", text: "Yes — any allocation advice is always a securities recommendation" },
      { id: "b", text: "Yes — because percentages were used" },
      { id: "c", text: "No — an allocation across general asset classes that names no specific securities generally is not a recommendation" },
      { id: "d", text: "No — because allocation models are always considered general education and nothing more", feedback: "The reason isn't that models are 'always education.' It's specifically that this one names no particular securities — only general asset classes — that keeps it outside the framework." },
    ],
    correctId: "c",
    explanation:
      "An asset-allocation model that names only **general asset classes** (equities, fixed income) without identifying specific securities generally is **not** a recommendation under the suitability framework. Naming particular securities would change the analysis.",
  },
  {
    id: "what-counts-as-a-recommendation.q7",
    lessonSlug: "what-counts-as-a-recommendation",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "suitability", "disclaimer", "scenario"],
    prompt:
      "A rep sends a client a tailored message urging the purchase of a specific named stock, stamped 'This is not a recommendation.' Does the disclaimer remove the obligation?",
    choices: [
      { id: "a", text: "Yes — a clear disclaimer always controls and removes the obligation" },
      { id: "b", text: "Yes — disclaimers convert any message into general education" },
      { id: "c", text: "No — if content and presentation reasonably make it a call to action, a disclaimer does not save it" },
      { id: "d", text: "No — but only because stocks are involved", feedback: "The security type isn't the point. The message is a tailored call to act on a specific security, so a 'not a recommendation' label can't override its content and presentation." },
    ],
    correctId: "c",
    explanation:
      "A rep cannot escape the obligation with a 'not a recommendation' disclaimer when the communication, by its **content and presentation**, reasonably would be viewed as a call to action. Substance controls over labels.",
  },
];
