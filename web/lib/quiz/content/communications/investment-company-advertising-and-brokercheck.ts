import type { Question } from "@/lib/quiz/types";

// Quiz for "Fund Advertising & BrokerCheck Disclosure".
// Series 7 Function 1 — every question carries the fn:1 tag.
export const questions: Question[] = [
  {
    id: "investment-company-advertising-and-brokercheck.q1",
    lessonSlug: "investment-company-advertising-and-brokercheck",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "investment-company", "rule-482"],
    prompt:
      "A mutual fund advertisement that quotes performance must show average annual total return for which standardized periods?",
    choices: [
      { id: "a", text: "1, 3, and 5 years", feedback: "Close, but the standardized periods under Rule 482 are 1, 5, and 10 years — not 3." },
      { id: "b", text: "1, 5, and 10 years" },
      { id: "c", text: "Year-to-date only" },
      { id: "d", text: "5, 10, and 20 years", feedback: "Rule 482 requires 1, 5, and 10 years (or life of fund), not 20." },
    ],
    correctId: "b",
    explanation:
      "Under SEC `Rule 482`, performance ads must quote **average annual total return** for **1-, 5-, and 10-year** periods (or the life of the fund if shorter).",
  },
  {
    id: "investment-company-advertising-and-brokercheck.q2",
    lessonSlug: "investment-company-advertising-and-brokercheck",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "investment-company", "rule-482"],
    prompt:
      "How must the standardized average annual total return figures in a fund ad treat the fund's sales charge?",
    choices: [
      { id: "a", text: "Ignore it entirely so returns look cleaner" },
      { id: "b", text: "Reflect only half the sales charge" },
      { id: "c", text: "Reflect the maximum sales charge (or disclose that the figure does not)" },
      { id: "d", text: "Reflect the minimum breakpoint discount", feedback: "Standardized returns reflect the MAXIMUM applicable load, not a breakpoint discount." },
    ],
    correctId: "c",
    explanation:
      "Standardized returns must **reflect the maximum sales load/fee**; if a quoted figure does not deduct the load, the ad must **disclose** that.",
  },
  {
    id: "investment-company-advertising-and-brokercheck.q3",
    lessonSlug: "investment-company-advertising-and-brokercheck",
    type: "single",
    difficulty: "easy",
    tags: ["fn:1", "communications", "investment-company", "rule-482"],
    prompt: "Which legend must appear in a Rule 482 fund performance advertisement?",
    choices: [
      { id: "a", text: "That past performance does not guarantee future results and return/principal value will fluctuate" },
      { id: "b", text: "That the fund is guaranteed by the SEC", feedback: "The SEC guarantees nothing. The required legend warns that past performance does not guarantee future results." },
      { id: "c", text: "That returns are projected to continue" },
      { id: "d", text: "That the fund is FDIC insured" },
    ],
    correctId: "a",
    explanation:
      "The required legend states the data is **past performance**, that **past performance does not guarantee future results**, and that **return and principal value will fluctuate**.",
  },
  {
    id: "investment-company-advertising-and-brokercheck.q4",
    lessonSlug: "investment-company-advertising-and-brokercheck",
    type: "single",
    difficulty: "hard",
    tags: ["fn:1", "communications", "investment-company", "rule-482"],
    prompt:
      "A fund ad does NOT already quote returns current to a recent month-end. To satisfy Rule 482, it must:",
    choices: [
      { id: "a", text: "File the ad with the SEC ten days before use", feedback: "Rule 482's month-end requirement is about availability of current data, not an SEC pre-filing window." },
      { id: "b", text: "Provide a toll-free/collect phone number or website where investors can obtain data current to the most recent month-end" },
      { id: "c", text: "Mail printed updates to every prospect monthly" },
      { id: "d", text: "Remove all performance figures", feedback: "It need not drop performance — it must make month-end data available via phone or website." },
    ],
    correctId: "b",
    explanation:
      "Rule 482 requires a **toll-free (or collect) phone number or website** for data **current to the most recent month-end**, unless the ad already quotes returns current to within **seven business days**.",
  },
  {
    id: "investment-company-advertising-and-brokercheck.q5",
    lessonSlug: "investment-company-advertising-and-brokercheck",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "brokercheck", "rule-2210"],
    prompt:
      "Under FINRA Rule 2210(d)(8), where must a member firm place a readily apparent reference and hyperlink to BrokerCheck?",
    choices: [
      { id: "a", text: "Only inside the firm's online account-login portal" },
      { id: "b", text: "Only in printed prospectuses" },
      { id: "c", text: "On the initial webpage intended for retail investors and any webpage with a registered person's professional profile" },
      { id: "d", text: "Nowhere — BrokerCheck references are optional", feedback: "They are mandatory under Rule 2210(d)(8) on retail-facing and profile pages." },
    ],
    correctId: "c",
    explanation:
      "`Rule 2210(d)(8)` requires a readily apparent BrokerCheck reference and hyperlink on the **initial retail-facing webpage** and any **webpage with a registered person's professional profile**.",
  },
  {
    id: "investment-company-advertising-and-brokercheck.q6",
    lessonSlug: "investment-company-advertising-and-brokercheck",
    type: "single",
    difficulty: "hard",
    tags: ["fn:1", "communications", "brokercheck", "rule-2210"],
    prompt:
      "A firm buries its BrokerCheck link only in the website footer. Under Rule 2210, this is:",
    choices: [
      { id: "a", text: "Generally insufficient — a footer placement usually fails the 'readily apparent' standard" },
      { id: "b", text: "Always fully compliant, since the link technically exists", feedback: "Mere existence is not enough; FINRA says a footer generally fails the 'readily apparent' standard." },
      { id: "c", text: "Required — the footer is the only permitted location" },
      { id: "d", text: "Irrelevant because BrokerCheck links are never mandatory" },
    ],
    correctId: "a",
    explanation:
      "The link must be **readily apparent** — visible without significant scrolling. FINRA states a **footer** placement **generally does not** satisfy the standard.",
  },
  {
    id: "investment-company-advertising-and-brokercheck.q7",
    lessonSlug: "investment-company-advertising-and-brokercheck",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "investment-company", "rule-482"],
    prompt:
      "An ad states only: 'Our fund returned 22% last year — best in class!' Which Rule 482 deficiency is present?",
    choices: [
      { id: "a", text: "It uses too many standardized periods" },
      { id: "b", text: "It shows a single year instead of the standardized 1-, 5-, and 10-year average annual total returns" },
      { id: "c", text: "It over-discloses the maximum sales charge", feedback: "The problem is the opposite — it omits the load, the legend, and the standardized periods." },
      { id: "d", text: "Nothing — a single best year fully complies" },
    ],
    correctId: "b",
    explanation:
      "The ad shows a **single year**, not the standardized **1-, 5-, and 10-year average annual total returns**; it also omits the **maximum sales charge**, the **legend**, and a **month-end** data source.",
  },
];
