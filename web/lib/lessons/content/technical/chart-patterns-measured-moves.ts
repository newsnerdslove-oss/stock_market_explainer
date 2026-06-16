import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "chart-patterns-measured-moves",
  title: "Chart Patterns: Tops, Bottoms, and Measured Moves",
  level: 2,
  moduleId: "markets-technical",
  moduleOrder: 8,
  summary: "The big multi-bar shapes — head & shoulders, double tops, triangles, flags — and how to compute a price target.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Where candlesticks read one or two bars, **chart patterns** read whole structures — the tops, bottoms, and consolidations that play out over weeks. Many come with a **measured move**: a rough price target derived from the pattern's own size. Targets are *statistical guidelines*, not promises — and this is educational material only.",
    },
    { type: "heading", text: "Head & shoulders" },
    {
      type: "text",
      body:
        "A **head & shoulders top** is three peaks: a higher middle peak (the *head*) flanked by two lower peaks (the *shoulders*), all sharing a **neckline**. A close *below* the neckline signals a bearish reversal. The measured-move **target** = `neckline − (head height above neckline)`. The **inverse head & shoulders** is the bullish mirror at a bottom.",
    },
    { type: "heading", text: "Double tops and bottoms" },
    {
      type: "text",
      body:
        "A **double top** (an \"M\") is two similar peaks; it turns bearish on a break *below* the middle trough. Target = `breakdown level − (peak − trough)`. A **double bottom** (a \"W\") is the bullish version: target = `breakout level + (peak − trough)`.",
    },
    { type: "heading", text: "Triangles and flags" },
    {
      type: "list",
      items: [
        "**Ascending triangle** — flat top, rising lows → bullish bias.",
        "**Descending triangle** — flat bottom, falling highs → bearish bias.",
        "**Symmetrical triangle** — converging lines; the breakout *direction* decides. Target ≈ the widest height projected from the breakout.",
        "**Flags / pennants** — a brief consolidation after a sharp move (the *flagpole*); usually a continuation. Target ≈ flagpole height projected from the breakout.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Head & shoulders", def: "Three peaks (head highest, shoulders lower) on a shared neckline; bearish on a neckline break." },
        { term: "Neckline", def: "The line connecting the lows of an H&S; the trigger level when broken." },
        { term: "Measured move", def: "A target derived from the pattern's height projected from the breakout — a guideline, not a guarantee." },
        { term: "Double top / bottom", def: "Two similar peaks (M, bearish) or troughs (W, bullish) confirmed by a break past the middle." },
        { term: "Triangle", def: "Converging price; ascending = bullish, descending = bearish, symmetrical = breakout decides." },
        { term: "Flag / pennant", def: "A short consolidation after a sharp move; a continuation pattern." },
        { term: "Flagpole", def: "The sharp move that precedes a flag; its height sets the flag's target." },
      ],
    },
    { type: "heading", text: "Worked example: H&S measured move" },
    {
      type: "text",
      body:
        "Left shoulder `$55`, head `$60`, right shoulder `$56`, neckline `$50`. The **head height** above the neckline is `$60 − $50 = $10`. On a break of the neckline at `$50`, the target = `$50 − $10 = $40`.",
    },
    {
      type: "text",
      body:
        "And a **double bottom**: troughs at `$20`, with a middle peak at `$26` — a height of `$26 − $20 = $6`. On a breakout above `$26`, the target = `$26 + $6 = $32`.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Where it fails: **failed breakouts** are common — price breaks the neckline (or trigger), then snaps right back; breaks on *weak volume* fail more often. And beware **over-recognition** (apophenia): the brain finds H&S and triangles in random noise, so a sloppy, ill-defined shape carries no edge.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"the measured move is a prediction that must be hit.\"* It's a **statistical guideline**, nothing more. Price routinely undershoots or overshoots the target, and patterns fail outright. Treat targets as approximate, lean on volume for credibility, and always plan for the pattern not working.",
    },
  ],
};
