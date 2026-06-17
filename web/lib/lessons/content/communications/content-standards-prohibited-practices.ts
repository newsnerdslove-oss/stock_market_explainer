import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "content-standards-prohibited-practices",
  title: "Content Standards: Fair & Balanced, No Guarantees, No Promissory Claims",
  level: 4,
  moduleId: "markets-communications",
  moduleOrder: 3,
  summary:
    "Every communication, regardless of category, must be fair, balanced, and free of exaggerated, promissory, or misleading claims.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Category decides approval and filing; **content standards apply to every category**. The general standard [`2210(d)(1)`] rests on **principles of fair dealing and good faith**: communications must be **fair and balanced** and give a **sound basis to evaluate the facts**.",
    },
    { type: "heading", text: "What is prohibited" },
    {
      type: "list",
      items: [
        "No **false, exaggerated, unwarranted, promissory, or misleading** statement or claim.",
        "**Material omissions** are prohibited — you cannot omit a material fact or qualification if doing so makes the communication **misleading**.",
        "**No predicting or projecting performance** [`2210(d)(1)(F)`] — may not predict/project performance, imply past performance will recur, or make exaggerated/unwarranted forecasts.",
        "**No guarantees** — may not imply guaranteed gains; comparisons must disclose **all material differences**, including the **presence or absence of guarantees or insurance**.",
        "Communications must **reflect risks**, and required regulatory disclosures must be **clear and prominent**.",
      ],
    },
    { type: "heading", text: "The narrow exceptions to the no-projection rule" },
    {
      type: "text",
      body:
        "The ban on projecting performance has **limited exceptions**: **hypothetical illustrations of mathematical principles** (e.g., compounding), certain **investment-analysis tools** that meet FINRA's conditions, and **reasonable-basis price targets in research reports**. Outside those, projecting future returns is prohibited.",
    },
    { type: "heading", text: "Worked scenario — three violations in one line" },
    {
      type: "text",
      body:
        "An ad reads: *'Our fund returned `18%` last year — expect the same next year, guaranteed.'* This breaks **three** standards at once.",
    },
    {
      type: "list",
      items: [
        "**Predicting/projecting performance** ('expect the same next year').",
        "**Implying past performance will recur** (last year's `18%` carried forward).",
        "An **implied guarantee** ('guaranteed') on a non-guaranteed product.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "General standard [2210(d)(1)]", def: "Fair dealing and good faith; fair and balanced; a sound basis to evaluate the facts." },
        { term: "Promissory claim", def: "A prohibited statement implying assured gains or outcomes." },
        { term: "Material omission", def: "Leaving out a fact/qualification that makes the communication misleading — prohibited." },
        { term: "No projection [2210(d)(1)(F)]", def: "May not predict/project performance or imply past performance will recur." },
        { term: "Projection exceptions", def: "Hypothetical math illustrations, qualifying investment-analysis tools, and reasonable-basis research price targets." },
        { term: "Guarantee disclosure", def: "Comparisons must disclose material differences, including presence/absence of guarantees or insurance." },
        { term: "Clear and prominent", def: "Required regulatory disclosures must be conspicuous, not buried." },
        { term: "Fair and balanced", def: "The overarching requirement for all communications regardless of category." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'As long as the numbers are true, I can present them however I like.'* No — even **true** figures become violations if presented in an **exaggerated, promissory, or non-balanced** way, or if **material risks or qualifications are omitted**.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
