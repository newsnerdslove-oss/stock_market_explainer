import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "trading-psychology-and-plan",
  title: "Psychology & the Plan: Process Over Prediction",
  level: 3,
  moduleId: "markets-styles",
  moduleOrder: 6,
  summary: "Why a written plan, a journal, and risk control matter more than prediction — and the emotional traps that wreck accounts.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Across every style in this module, one truth keeps surfacing: the edge isn't *prediction* — it's **process**. You don't control whether any single trade wins; you control your decisions. So the right scoreboard isn't 'did this trade make money?' but **'did I follow my plan?'** A good plan followed can still produce a losing trade, and a reckless gamble can still win. Judge the process, not the coin flip.",
    },
    { type: "heading", text: "The written plan" },
    {
      type: "text",
      body:
        "A **trading plan** decides everything *in advance*, before money and emotion are on the line. A real plan spells out: which **setups** you'll trade, your **entry and exit** rules, your **position sizing**, your **max risk per trade**, your **max daily/weekly loss**, and what you'll **avoid**. Written down, it becomes a contract with yourself — something to point to when the heat of the moment tries to renegotiate.",
    },
    { type: "heading", text: "The two classic traps" },
    {
      type: "list",
      items: [
        "**FOMO** (fear of missing out) — chasing a move that has *already run*, abandoning your rules to jump in late. It usually buys the top.",
        "**Revenge trading** — trying to win back a loss *immediately* with a bigger, unplanned trade. It reliably turns a small loss into a large one.",
      ],
    },
    {
      type: "text",
      body:
        "The antidote to both is a **journal**: a record of every trade *and your reasoning at the time*. Reviewed honestly, it exposes recurring mistakes and tells you whether you actually followed the plan or just remember it that way. The plan sets the rules; the journal proves whether you kept them.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Trading plan", def: "A pre-defined set of rules: which setups, entry/exit, sizing, max risk per trade, and max daily/weekly loss." },
        { term: "Trading journal", def: "A log of every trade plus the reasoning behind it, reviewed to catch recurring mistakes and check plan adherence." },
        { term: "FOMO", def: "Fear of missing out — chasing a move that already ran, abandoning your rules; it tends to buy the top." },
        { term: "Revenge trading", def: "Immediately trying to win back a loss with a bigger, unplanned trade — turning a small loss into a big one." },
        { term: "Tilt", def: "An emotional, off-balance state after a loss or a win where decisions stop following the plan." },
        { term: "Max daily loss", def: "A hard, pre-set limit on what you can lose in a day; when hit, you stop — it keeps a bad day from becoming a disaster." },
      ],
    },
    { type: "heading", text: "Worked walkthrough: when discipline breaks" },
    {
      type: "text",
      body:
        "Your plan: risk **1% per trade** (**$200** on a **$20,000** account), and **stop after 2 losses** in a day. **Trade 1** loses **−$200**. **Trade 2** loses **−$200**. The rule now says: *done for the day.* Instead, stung and chasing a fast mover (**FOMO**), you double size to **$400** of risk on an unplanned setup (**revenge trading**) — and lose **$600**.",
    },
    {
      type: "text",
      body:
        "Add it up: your planned bad day was **2%** (`−$400`). What you actually booked was **5%** (`−$1,000`). The extra loss came not from bad analysis but from **broken discipline**. The most valuable artifact of the whole day is the journal entry: *'ignored daily stop, sized up after losses.'* Name the mistake and it becomes a lesson instead of a habit.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge case: a plan only helps if it's **followed *and* reviewed**. An unjournaled plan can't catch the slow patterns quietly draining the account — and even a fully disciplined trader can still lose. Discipline improves **survival and consistency**; it does not guarantee profit.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'successful trading is mostly about predicting the market correctly.'* It's mostly **risk control** plus **consistently executing a plan**. Even good predictions lose without proper sizing and discipline. The honest framing for this whole module: discipline and risk management explain long-term survival more than any chosen style — and **most active traders still underperform simple buy-and-hold**. Educational content, not financial advice.",
    },
  ],
};
