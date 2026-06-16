import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "drawdown",
  title: "Drawdown and the Recovery Asymmetry",
  level: 2,
  moduleId: "markets-risk",
  moduleOrder: 5,
  summary: "How far you've fallen from your peak — and why digging out of a deep hole takes far more than the fall that put you there.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "**Drawdown** measures how far your account has dropped from its highest point. It's the metric that tells you, honestly, how bad a rough patch really was — and it hides a brutal piece of arithmetic.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "`Drawdown = (Peak − Trough) ÷ Peak`. To get back, the gain you need is `Loss ÷ (1 − Loss)`.",
    },
    {
      type: "text",
      body:
        "That recovery formula is **nonlinear** — the deeper the hole, the disproportionately bigger the climb out:",
    },
    {
      type: "list",
      items: [
        "`−10%` → needs `+11.1%`",
        "`−20%` → needs `+25%`",
        "`−25%` → needs `+33.3%`",
        "`−50%` → needs `+100%`",
        "`−75%` → needs `+300%`",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Drawdown", def: "`(Peak − Trough) ÷ Peak` — the percentage decline from a high-water mark." },
        { term: "Maximum drawdown", def: "The largest peak-to-trough drop over a period. A core survivability metric." },
        { term: "Peak / trough", def: "The high point before a decline and the low point at the bottom of it." },
        { term: "Recovery gain", def: "The percentage rise needed to return to the prior peak: `Loss ÷ (1 − Loss)`." },
        { term: "Loss-recovery asymmetry", def: "The fact that the required recovery gain always exceeds the loss, and grows faster as losses deepen." },
        { term: "High-water mark", def: "The highest value the account has ever reached — the reference point for drawdown." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Start at a peak of `$10,000`. Compare a shallow drawdown with a deep one:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**−20%**: `$10,000 → $8,000`. Recovery = `$2,000 ÷ $8,000 = +25%` (matching `0.20 ÷ 0.80`).",
        "**−50%**: `$10,000 → $5,000`. Recovery = `$5,000 ÷ $5,000 = +100%` (matching `0.50 ÷ 0.50`).",
      ],
    },
    {
      type: "text",
      body:
        "The `−50%` loss is only `2.5×` larger than the `−20%` loss, but it needs `+100%` versus `+25%` — **four times** the recovery. That accelerating penalty is exactly why the 1–2% rule matters: keeping drawdowns shallow keeps the climb back near-symmetric.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge cases: the recovery gain applies to the **reduced** balance, not the original — `+100%` on `$5,000` only gets you back to `$5,000` of profit, i.e. `$10,000` total. And a `−100%` loss is mathematically unrecoverable: the required gain is infinite. Treat **maximum drawdown** as a number to plan for in advance.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"A 50% loss just needs a 50% gain to recover.\"* After `−50%` you hold half your money, so you must **double** it — that's `+100%`, not `+50%`. The recovery percentage always exceeds the loss percentage.",
    },
  ],
};
