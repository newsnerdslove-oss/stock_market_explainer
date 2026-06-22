import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "what-counts-as-a-recommendation",
  title: "What Counts as a 'Recommendation'",
  level: 4,
  moduleId: "markets-suitability",
  moduleOrder: 10,
  summary:
    "The suitability and Reg BI obligations only switch on when there's a 'recommendation' — a call to action to buy, sell, or hold a specific security or strategy, judged by a facts-and-circumstances reasonable-person test.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Both FINRA `Rule 2111` (suitability) and SEC **`Reg BI`** are triggered by the same event: a **recommendation**. No recommendation, no obligation. So the threshold question on the exam and in practice is always — *was this a recommendation?* Everything downstream (best interest, the three suitability pillars, the four Reg BI obligations) hangs on that single trigger.",
    },
    {
      type: "text",
      body:
        "FINRA deliberately does **not** give a bright-line definition of 'recommendation.' Instead, whether a communication is a recommendation is a **facts-and-circumstances** inquiry, decided **case by case**. The guiding question: given the communication's **content, context, and presentation**, would a **reasonable person** view it as a **call to action** — a *suggestion* that the customer engage in or refrain from a particular securities transaction or strategy?",
    },
    { type: "heading", text: "The reasonable-person 'call to action' test" },
    {
      type: "list",
      items: [
        "**Content** — does the message point at a *specific* security or strategy, or is it generic? The more particularized and tailored to one customer, the more it looks like a recommendation.",
        "**Context** — was it part of an ongoing advisory relationship, or a one-off broadcast? A tailored message to a single customer weighs toward 'recommendation.'",
        "**Presentation** — is it framed as a *suggestion to act* ('you should buy this') versus neutral information ('here are last quarter's returns')?",
        "**Disclaimers don't save you** — a rep cannot escape the obligation by stapling on a 'this is not a recommendation' disclaimer when the communication, by its content and presentation, reasonably would be viewed as one.",
      ],
    },
    { type: "heading", text: "A recommendation to HOLD is still a recommendation" },
    {
      type: "text",
      body:
        "This is the most-tested trap. A recommendation isn't only 'buy' or 'sell' — an **explicit recommendation to HOLD** a specific security is covered. A decision to hold is a passive *strategy*, but an explicit 'keep holding this' is advice a customer can be expected to **rely on**, so it triggers the suitability/best-interest analysis just like a buy or sell.",
    },
    {
      type: "text",
      body:
        "There is a scope nuance: `Rule 2111` reaches **explicit** hold recommendations but does **not** broaden the rule to **implicit** holds. Under `Reg BI`, however, a hold can be **implicit** — when a broker **agrees to monitor** a retail customer's account and then makes no buy/sell recommendation, that silence can itself be a recommendation to hold. So 'I never told them to do anything' is not automatically a safe harbor.",
    },
    { type: "heading", text: "What is NOT a recommendation" },
    {
      type: "list",
      items: [
        "**General education** — explaining how options work, what a bond ladder is, or how diversification reduces risk, without urging the customer to act on a specific security.",
        "**General market commentary** — broad observations about the economy, rates, or sectors that aren't a tailored call to act on a particular security.",
        "**Unsolicited customer orders** — when the *customer* decides and directs the trade, the rep didn't recommend it. (The rep still must mark it unsolicited and may not have *induced* it.)",
        "**Asset-allocation models that name no specific securities** — a model that says '60% equities / 40% fixed income' as general *asset classes*, without naming particular securities, generally is not a recommendation under the suitability framework.",
      ],
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A rep emails one client: 'Given your retirement timeline, you should move your `XYZ` shares into the `ABC` bond fund this week.' That names specific securities, is tailored to one customer, and is framed as a call to act — clearly a **recommendation**, fully inside `Reg BI`. Contrast: a firm-wide newsletter saying 'rising rates often pressure long-duration bonds' is **general market commentary** — no specific security, no tailored call to action — **not** a recommendation.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Recommendation", def: "The trigger for Rule 2111 and Reg BI: a communication that a reasonable person would view as a call to action to buy, sell, or hold a specific security or strategy." },
        { term: "Facts-and-circumstances test", def: "Whether a communication is a recommendation is decided case by case from its content, context, and presentation — there is no bright-line definition." },
        { term: "Call to action", def: "A suggestion that the customer engage in or refrain from a particular securities transaction or strategy; the hallmark of a recommendation." },
        { term: "Hold recommendation", def: "An explicit recommendation to keep holding a specific security; covered because the customer is expected to rely on it." },
        { term: "Implicit hold (Reg BI)", def: "Under Reg BI, agreeing to monitor a retail account and then staying silent can itself be a recommendation to hold." },
        { term: "Unsolicited order", def: "A trade the customer decides and directs; not a recommendation by the rep, who marks it unsolicited." },
        { term: "General market commentary", def: "Broad observations about markets, rates, or sectors not tailored as a call to act on a specific security — not a recommendation." },
        { term: "Asset-allocation model", def: "Allocations across general asset classes (e.g., 60/40) that name no specific securities; generally not a recommendation under suitability." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'a recommendation only means telling someone to buy or sell.'* No — an **explicit recommendation to HOLD** a specific security is covered too, and under `Reg BI` even an **implicit** hold (agreeing to monitor, then staying silent) can count. A 'not a recommendation' disclaimer also won't save a message that, by content and presentation, reasonably looks like a call to action.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
