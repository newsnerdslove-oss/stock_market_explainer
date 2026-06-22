import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "basic-vs-diluted-eps",
  title: "Basic vs. diluted EPS",
  level: 1,
  moduleId: "markets-valuation",
  moduleOrder: 6,
  summary: "The two EPS numbers a company reports — and why the smaller, more conservative one is the headline.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "Open any earnings release and you won't see one EPS — you'll see **two**: *basic* and *diluted*. They're built from the same profit, but they count shares differently. Understanding the gap between them is the difference between taking a number at face value and knowing what it really means.",
    },
    { type: "heading", text: "Basic EPS: the starting point" },
    {
      type: "text",
      body:
        "Basic EPS asks a simple question: of the profit left for *common* shareholders, how much did each share earn? It strips out preferred dividends first, because that cash is promised to preferred holders before common holders see a cent: `Basic EPS = (net income − preferred dividends) ÷ weighted-average common shares outstanding`.",
    },
    {
      type: "text",
      body:
        "Two details matter. First, **preferred dividends** are subtracted from the top — they aren't profit attributable to common stock. Second, the share count is a **weighted average** over the period, not a snapshot: if a company had 90M shares for half the year and 110M for the other half, it uses the time-weighted figure (≈100M), not the year-end number.",
    },
    { type: "heading", text: "Diluted EPS: assume the worst" },
    {
      type: "text",
      body:
        "A company often has securities that *could* become common shares — employee stock options, warrants, convertible preferred stock, and convertible bonds. None of them are common shares *yet*, but if they convert, the share count balloons and each existing share's slice of profit shrinks. **Diluted EPS** answers: what would EPS be if every **dilutive** one of these turned into stock?",
    },
    {
      type: "list",
      items: [
        "**Options & warrants** — assume they're exercised, adding shares to the denominator (using the *treasury stock method*, which nets out shares the company could buy back with the exercise proceeds).",
        "**Convertible preferred** — assume it converts: the denominator grows by the new shares, and the numerator gains back the preferred dividends that would no longer be paid.",
        "**Convertible bonds** — assume they convert: the denominator grows, and the numerator gains back the bond's *after-tax* interest expense the company would no longer owe.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Because diluted EPS spreads profit over **more** shares, it is by definition **≤ basic EPS**. It can never be higher. That's exactly why it's the number investors anchor on — it shows the *most conservative*, fully-diluted picture of what a share earns.",
    },
    { type: "heading", text: "A worked example" },
    {
      type: "text",
      body:
        "Suppose a company earns **$120M**, pays **$20M** in preferred dividends, and has a weighted-average **40M** common shares. Basic EPS is `(120 − 20) ÷ 40 = $2.50`. Now say it also has employee options that, if exercised, would add **10M** net new shares. Diluted EPS becomes `100 ÷ 50 = $2.00` — the same $100M profit, but split across 50M shares instead of 40M. The dilution knocked **$0.50** off each share's earnings.",
    },
    { type: "heading", text: "What \"antidilutive\" means" },
    {
      type: "text",
      body:
        "Here's the twist: not every convertible security gets counted. A security is **antidilutive** when assuming its conversion would actually *raise* EPS instead of lowering it — for example, out-of-the-money options whose exercise price sits above the average share price. Including them would make EPS look *better*, which defeats the whole point of a conservative measure.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Antidilutive securities are excluded from diluted EPS.** Under U.S. GAAP, you only fold in a security if it *reduces* EPS. The moment adding it would lift the number, you leave it out — diluted EPS is meant to show the floor, never an inflated figure.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Basic EPS", def: "`(net income − preferred dividends) ÷ weighted-average common shares`. Profit per common share before any conversion." },
        { term: "Diluted EPS", def: "EPS recalculated as if all *dilutive* convertibles, options, and warrants became common shares. Always ≤ basic EPS." },
        { term: "Weighted-average shares", def: "The share count averaged over the reporting period by how long each amount was outstanding — not the period-end snapshot." },
        { term: "Dilutive security", def: "A convertible, option, or warrant whose assumed conversion lowers EPS — it gets included in diluted EPS." },
        { term: "Antidilutive security", def: "One whose assumed conversion would *raise* EPS; it is excluded from the diluted EPS calculation." },
        { term: "Treasury stock method", def: "The convention for options/warrants: assume exercise, then assume the proceeds buy back shares at the average market price — only the net new shares add to the denominator." },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "When you read an earnings headline, default to **diluted EPS** — it's the conservative, fully-diluted number. A wide gap between basic and diluted EPS is a flag that the company has a lot of options or convertibles waiting in the wings.",
    },
  ],
};
