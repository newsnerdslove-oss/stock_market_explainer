import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "loss-recovery-math",
  title: "Loss Recovery Math: The Cost of Getting Even",
  level: 2,
  moduleId: "markets-risk",
  moduleOrder: 7,
  summary: "The exact gain it takes to climb back from any loss — and why losses fight you harder the deeper they get.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Lose `20%` and you'd think a `20%` gain puts you back. It doesn't — and the gap between the loss and the gain you need is the single most important idea in risk management. This lesson is the engine room behind every rule in this module.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "`Gain needed = Loss ÷ (1 − Loss)`. After a loss, you're rebuilding from a *smaller* base, so the required gain is always larger.",
    },
    {
      type: "text",
      body:
        "The gap stays tiny for small losses and then widens nonlinearly:",
    },
    {
      type: "list",
      items: [
        "`−5%` → `+5.26%`",
        "`−10%` → `+11.11%`",
        "`−20%` → `+25%`",
        "`−25%` → `+33.33%`",
        "`−30%` → `+42.86%`",
        "`−40%` → `+66.67%`",
        "`−50%` → `+100%`",
        "`−60%` → `+150%`",
        "`−75%` → `+300%`",
        "`−90%` → `+900%`",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Loss recovery", def: "Returning to your prior balance after a loss." },
        { term: "Recovery gain", def: "`Loss ÷ (1 − Loss)` — the percentage rise required to get back to even." },
        { term: "Compounding", def: "Returns stacking on returns. It works for you on gains and against you on losses." },
        { term: "Recovery asymmetry", def: "The required gain always exceeds the loss, and the gap grows as losses deepen." },
        { term: "Capital base", def: "The balance you're growing from. Each loss shrinks it, raising the gain needed." },
        { term: "Sequence of losses", def: "How successive losses multiply (e.g. `0.90 × 0.90`) rather than simply add." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Start at `$10,000`. A single deep loss versus two shallow ones tells the whole story.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**One −50%**: `$10,000 → $5,000`. Recovery = `$5,000 ÷ $5,000 = +100%`.",
        "**One −10%**: `$10,000 → $9,000`. Recovery = `$1,000 ÷ $9,000 = +11.11%` — almost symmetric.",
        "**Two −10% in a row**: `$10,000 → $9,000 → $8,100`. That's `0.90 × 0.90 = 0.81`, a `−19%` combined loss (not `−20%`). Recovery = `$1,900 ÷ $8,100 = +23.46%`.",
      ],
    },
    {
      type: "text",
      body:
        "Keep losses small and recovery stays near-symmetric and survivable. Let them run deep and the math turns against you fast. Gains compound favorably; losses compound unfavorably — so **avoiding deep losses beats chasing big gains**.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge cases: people anchor to the loss percentage and underestimate the climb — after `−33%` you actually need `+50%`. And small losses *stack*: ten straight `−5%` trades give `0.95^10 ≈ −40%`, which then needs `+66.7%` to undo.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"Lose 20%, a 20% gain gets me back.\"* After `−20%` you hold only `80%` of your money, so you need `+25%` on that smaller base. The recovery is always larger than the loss, and the gap only grows.",
    },
  ],
};
