import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "swing-trading",
  title: "Swing Trading: Catching the Multi-Day Move",
  level: 3,
  moduleId: "markets-styles",
  moduleOrder: 2,
  summary: "How swing trading captures multi-day moves with technical setups — and why gap risk shapes every position.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "If day trading is a sprint, **swing trading** is a series of measured jogs. A swing trader holds for *days to a few weeks*, aiming to capture a single **swing** in price — a move from support to resistance, a breakout that follows through, or a pullback that resumes the trend. You hold **overnight**, which is exactly where the style's signature risk lives.",
    },
    {
      type: "text",
      body:
        "Swing trading pairs naturally with the **technical setups** from the 200-level — moving averages, support and resistance, momentum. You're looking for a clean setup with a defined entry, a clear invalidation point, and a target that pays you for the risk. Because you trade *far less often* than a day trader, you carry **lower cost drag and less screen time** — but you take on **event exposure** that day traders avoid.",
    },
    { type: "heading", text: "Gap risk is the core risk" },
    {
      type: "text",
      body:
        "The defining hazard of holding overnight is the **gap**: price can open far away from where it closed, jumping right past your stop. A stop-loss is a *trigger*, not a guaranteed exit price. If bad news hits after hours, your stop fires at the next available price — which can be much worse than the level you set. That single fact dictates how you size.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Swing", def: "One directional leg of price movement — e.g. a bounce from support up to resistance — that you try to capture end to end." },
        { term: "Gap", def: "A jump between one session's close and the next session's open, leaving an empty space on the chart. It can leap over your stop." },
        { term: "Pullback", def: "A temporary counter-move against the prevailing trend — often a lower-risk entry to join the trend." },
        { term: "Reward-to-risk (R:R)", def: "Potential gain divided by potential loss. Entry $50, stop $47, target $59 → reward $9 vs risk $3 = 3:1." },
        { term: "Support / resistance", def: "Price levels where buying (support) or selling (resistance) has historically clustered — common entry, stop, and target anchors." },
      ],
    },
    { type: "heading", text: "Worked example: sizing for the swing" },
    {
      type: "text",
      body:
        "**XYZ** pulls back to a rising 20-day moving average at **$50** and prints a reversal candle. You enter at **$50**, set a stop at **$47** (risk **$3**/share), and target **$59** (reward **$9**) — a clean **3:1 reward-to-risk**. Your account is **$20,000** and you risk **1%** per trade = **$200**. Position size = `$200 ÷ $3 ≈ 66 shares`. That's a disciplined, pre-defined risk before you ever click buy.",
    },
    {
      type: "text",
      body:
        "Now the gap bites. Overnight, XYZ reports something ugly and **opens at $44** — well below your $47 stop. Your stop is a trigger, so it fills near **$44**, not $47. Instead of the planned ~$200 loss, you lose about `(50 − 44) × 66 ≈ $396` — roughly **double**. Nothing was 'broken'; this is the *normal* cost of carrying a position overnight, and it's why swing traders size for a worse-than-stop outcome.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge cases: a stop is a **trigger, not a guaranteed price** — gaps fill beyond it. And in **choppy, range-bound** markets, swing setups generate **whipsaw** losses: you get stopped out repeatedly as price chops sideways with no real swing to ride.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'my stop-loss caps my maximum loss.'* A stop caps loss only in **continuous** trading. Overnight **gaps can blow straight through** a stop, so plan and size as if the fill could be worse than your stop level. Avoid holding through known **binary events** like earnings unless it's intentional and sized for the gap. Educational content, not financial advice.",
    },
  ],
};
