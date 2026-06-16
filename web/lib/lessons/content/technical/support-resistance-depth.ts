import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "support-resistance-depth",
  title: "Support & Resistance: Role Reversal and Fakeouts",
  level: 2,
  moduleId: "markets-technical",
  moduleOrder: 5,
  summary: "Where price tends to stall and turn — what makes a level strong, why broken levels flip roles, and how to tell a breakout from a fakeout.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "**Support** is a price zone where buyers have repeatedly stepped in; **resistance** is where sellers have. They're the map of where price has *tended* to stall and turn. Notice the word *tended* — these are probabilistic zones, not walls, and nothing here is financial advice.",
    },
    { type: "heading", text: "Role reversal: the polarity flip" },
    {
      type: "text",
      body:
        "The signature insight at this level: once a level *breaks*, it flips roles. Broken **support becomes resistance**, and broken **resistance becomes support**. This **role reversal** (polarity flip) happens because the traders who defended the old level now have a reason to act at the same price after price returns to it.",
    },
    { type: "heading", text: "What makes a level matter" },
    {
      type: "list",
      items: [
        "**Round numbers** — `$50`, `$100`, `$1000` act as psychological S/R because orders and attention cluster there.",
        "**Prior swing highs and lows** — natural S/R; the market remembers where it last turned.",
        "**More touches** strengthen a level — but a level tested *too* many times can weaken, as the orders defending it get used up.",
        "S/R are **zones**, not exact lines — think of a band, not a single price.",
      ],
    },
    { type: "heading", text: "Breakout vs fakeout" },
    {
      type: "text",
      body:
        "A genuine **breakout** is a decisive *close* beyond the level, ideally on strong volume. A **fakeout** pierces the level intrabar but then closes back inside — a trap. The discipline: wait for **confirmation** — a close beyond the level, or a successful *retest* where price comes back, touches the old level, and holds.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Support", def: "A zone where buyers have repeatedly stepped in, halting declines." },
        { term: "Resistance", def: "A zone where sellers have repeatedly stepped in, halting advances." },
        { term: "Role reversal (polarity)", def: "A broken level flips: old support becomes resistance, old resistance becomes support." },
        { term: "Round number", def: "Whole-dollar levels (`$50`, `$100`) where orders and attention cluster." },
        { term: "Fakeout", def: "An intrabar pierce of a level that closes back inside — a false break." },
        { term: "Retest", def: "Price returning to a broken level to test whether it now holds in its new role." },
        { term: "Zone", def: "S/R is a price band, not a single exact line." },
      ],
    },
    { type: "heading", text: "Worked example: a clean role reversal" },
    {
      type: "text",
      body:
        "A stock fails near `$50` three times — closing `49.90`, `50.10`, `49.95` — defining `$50` as resistance (a *zone* around the round number, not a razor line). Then it **closes at `$52` on 2× average volume**: a decisive breakout. Later it pulls back to `$50.20` and *bounces*. The old `$50` **resistance is now support** — textbook role reversal.",
    },
    {
      type: "text",
      body:
        "Contrast a fakeout: price spikes to `$51` intraday but then **closes at `$48.50`** on only average volume. It never *closed* above resistance — the level held, and the spike was a trap.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Where it fails: in a **strong trend**, price can slice straight through levels with barely a reaction — S/R gets overridden by momentum. And **stop-hunts** / liquidity grabs deliberately pierce a level to trigger stops, then reverse — which is exactly why an intrabar pierce alone isn't enough.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"if a level breaks, the move is real.\"* An intrabar pierce is **not** a break. You need a *close* beyond the level — ideally with volume and/or a successful retest. Acting on the spike alone is how traders get caught in fakeouts and stop-hunts.",
    },
  ],
};
