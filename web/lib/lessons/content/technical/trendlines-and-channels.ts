import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "trendlines-and-channels",
  title: "Trendlines & Channels: Drawing Valid Lines",
  level: 2,
  moduleId: "markets-technical",
  moduleOrder: 6,
  summary: "How to draw a trendline that actually means something — touch points, slope, channels, and breaks.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "A **trendline** turns a series of swings into a single sloping guide. Drawn well, it frames the trend and flags where it might break. Drawn carelessly, it's just a line through random points. These are subjective guides describing *tendencies*, not guarantees — and this is educational material, not financial advice.",
    },
    { type: "heading", text: "Drawing a valid line" },
    {
      type: "text",
      body:
        "You need **at least 2 touch points** to *define* a line — but a third touch is what *confirms* it. An **uptrend line** connects rising swing **lows**, with price staying above it. A **downtrend line** connects falling swing **highs**, with price staying below it. The touches should be genuine reversals, not just any two points you can connect.",
    },
    { type: "heading", text: "Slope matters" },
    {
      type: "text",
      body:
        "A **moderate** slope is sustainable; a **near-vertical (parabolic)** slope is fragile and tends to collapse fast — no trend climbs straight up forever. The angle is a clue to how durable the move is.",
    },
    { type: "heading", text: "Channels" },
    {
      type: "text",
      body:
        "A **channel** is a trendline plus a *parallel* line on the opposite side, bounding price within a band. In an uptrend, draw the trendline along the swing lows, then a parallel line across the swing highs. Price tends to oscillate between the two until it breaks out.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Trendline", def: "A sloping line connecting swing points that frames the trend's direction." },
        { term: "Touch point", def: "A genuine swing reversal the line passes through. 2 to draw, a 3rd to confirm." },
        { term: "Slope", def: "The line's angle — moderate is sustainable, near-vertical (parabolic) is fragile." },
        { term: "Channel", def: "A trendline plus a parallel line bounding price within a band." },
        { term: "Parabolic", def: "A near-vertical, accelerating trend that tends to break down sharply." },
        { term: "Trendline break", def: "A decisive close through the line, ideally on volume." },
        { term: "Swing point", def: "A local high or low where price reversed — the raw material for trendlines." },
      ],
    },
    { type: "heading", text: "Worked example: drawing and projecting" },
    {
      type: "text",
      body:
        "Swing lows form at `$20` in week 1 and `$24` in week 3. The slope is `($24 − $20) / (3 − 1) = $2 per week`. Project forward to week 5: `$20 + ($2 × 4) = $28`. In week 5 price dips to `$28.50` and *bounces* — that's the **3rd touch**, confirming the line.",
    },
    {
      type: "text",
      body:
        "To build the **channel**, draw a parallel line through the week-2 swing high of `$30`. The lower line sits at `$22` in week 2, so the channel is `$8` wide — at week 5 the upper rail is `$28 + $8 = $36`, giving a band of roughly `$28–$36`. Now suppose week 6 *closes* at `$26`, below the projected trendline (~`$30`) — that's a **trendline break**, a warning the uptrend may be over.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Where it fails: **over-fitting**. Any two points define a line, so two touches *without* a confirming third are weak evidence — it's easy to draw a line that fits the past but predicts nothing. And in **choppy** markets, price pokes through trendlines repeatedly, producing false breaks.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"any two points make a tradable trendline.\"* Two points only *define* a line — that's geometry, not signal. A trendline becomes reliable when a **3rd touch** confirms it as a genuine level the market is respecting.",
    },
  ],
};
