import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "options-rules-position-limits",
  title: "The Rulebook: Position & Exercise Limits (OCC / FINRA 2360)",
  level: 4,
  moduleId: "markets-adv-options",
  moduleOrder: 4,
  summary:
    "Learn the contract caps that stop anyone from cornering a stock through options — the five position-limit tiers, the 5-day exercise limit, and how 'same-side' positions aggregate.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "**FINRA Rule 2360** caps how many option contracts a single account (or group acting together) may hold on the **same side of the market**. The purpose is plain: stop anyone from building a controlling stock position through options. The exam tests the **five tiers**, the **5-day exercise limit**, and — most importantly — **which positions aggregate**.",
    },
    { type: "heading", text: "The five position-limit tiers" },
    {
      type: "list",
      items: [
        "The standard equity-option tiers are `25,000` / `50,000` / `75,000` / `200,000` / `250,000` contracts on the **same side of the market**.",
        "The **most actively traded large-caps** carry the top limit of `250,000` contracts.",
        "What sets the tier: the underlying's **6-month trading volume** and **shares outstanding (float)** — larger, more liquid names get higher limits.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "You do **not** need to memorize the exact sub-thresholds that map a stock to a tier — those are exchange-rule detail. Know the **five contract figures** and the **qualifying concept** (volume + float).",
    },
    { type: "heading", text: "Same side of the market" },
    {
      type: "list",
      items: [
        "**Bullish aggregate:** long calls + short puts (both profit if the stock rises).",
        "**Bearish aggregate:** long puts + short calls (both profit if the stock falls).",
        "**Opposite sides are NOT netted** — a bullish position does not offset a bearish one.",
      ],
    },
    { type: "heading", text: "Exercise limit" },
    {
      type: "text",
      body:
        "Separately, an account may **not exercise more than the position-limit number** of contracts of a single class within any **5 consecutive business days**. So a `250,000`-limit name also caps exercises at `250,000` contracts per rolling 5-business-day window.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "An account holds long `150,000` `XYZ` calls and short `120,000` `XYZ` puts; the position limit is `250,000`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Both legs are **bullish**, so they aggregate: `150,000 + 120,000 = 270,000` contracts on the bullish side.",
        "`270,000 > 250,000` → **violation** of the position limit.",
        "A separately held `80,000` long puts is **bearish**, so it does **not** offset the bullish side — it is counted on its own.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "FINRA Rule 2360", def: "The rule governing options position and exercise limits." },
        { term: "Position limit", def: "Max contracts allowed on the same side of the market: 25k / 50k / 75k / 200k / 250k." },
        { term: "Same side of the market", def: "Bullish = long calls + short puts; bearish = long puts + short calls." },
        { term: "Aggregation", def: "Combining same-side positions toward the limit; opposite sides are not netted." },
        { term: "Exercise limit", def: "No more than the position-limit number of contracts of a class exercised within 5 consecutive business days." },
        { term: "Float / shares outstanding", def: "Together with 6-month volume, sets which tier a stock falls into." },
        { term: "Purpose of the limits", def: "Prevent building a controlling stock position through options." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'Long calls and long puts cancel out toward the limit.'* They sit on **opposite** sides and are counted **separately**. Long calls aggregate with **short puts** (both bullish), not with long puts. This is educational content, not financial advice.",
    },
  ],
};
