import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "short-selling-on-margin",
  title: "Short Selling on Margin",
  level: 3,
  moduleId: "markets-margin",
  moduleOrder: 4,
  summary:
    "How shorting works, the 150% margin it requires, and why its losses are theoretically unlimited — plus recalls and buy-ins you don't control.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Most investors buy hoping a stock rises. A **short sale** flips that: you bet a stock will *fall*. It can work — but the risk profile is brutally different. When you buy, the worst case is losing `100%`. When you short, the loss has *no ceiling*.",
    },
    {
      type: "heading",
      text: "How a short works",
    },
    {
      type: "text",
      body:
        "You **borrow** shares, **sell** them now, and plan to **buy them back** (called **cover**) later at a lower price, returning the borrowed shares and pocketing the difference. You profit if the price falls. Shorting **requires a margin account**, and under **Reg SHO** the broker must arrange a **locate** — confirm the shares can be borrowed — before you short.",
    },
    {
      type: "heading",
      text: "The margin on a short",
    },
    {
      type: "text",
      body:
        "Reg T initial margin for a short is `150%` of the short's market value: the `100%` sale proceeds are held *plus* `50%` of your own margin on top. FINRA's **short maintenance margin** is `30%` of current market value (with a `$5/share` minimum for stocks priced at `$5` or more).",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Short sale", def: "Borrowing shares, selling them now, and buying them back later — profiting if the price falls." },
        { term: "Locate", def: "Reg SHO's requirement that the broker confirm shares are available to borrow before you short." },
        { term: "Cover", def: "Buying back the borrowed shares to close a short position." },
        { term: "Buy-in", def: "A forced cover: the broker buys shares to close your short, often at a bad price." },
        { term: "Short maintenance margin", def: "FINRA's `30%` of current market value (min `$5/share` for stocks ≥ `$5`)." },
        { term: "Short squeeze", def: "A sharp price rise that forces shorts to cover, pushing the price even higher." },
        { term: "Borrow fee", def: "The cost to borrow shares — high for hard-to-borrow names; you also owe any dividends paid while short." },
      ],
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "text",
      body:
        "You short 100 shares at `$50` = `$5,000`. Initial margin at `150%` is `$7,500`: the `$5,000` proceeds held plus `$2,500` of your own margin.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Falls to `$40`: cover for `$4,000` → profit `$5,000 − $4,000 = +$1,000`",
        "Rises to `$70`: cover for `$7,000` → loss `$5,000 − $7,000 = −$2,000` (maintenance check: `30% × $7,000 = $2,100`)",
        "Rises to `$120`: cover for `$12,000` → loss `−$7,000` on a `$2,500` stake",
      ],
    },
    {
      type: "text",
      body:
        "See the asymmetry: the gain is capped (the stock can only fall to `$0`), but the loss grows without limit as the price climbs.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge case: in a **short squeeze**, a rising price forces shorts to cover, driving the price higher still. If the lender **recalls** the borrowed shares, the broker can **buy you in** — forcing a cover at the worst possible price. Hard-to-borrow **borrow fees** can quietly erase even a winning short.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"Shorting is just the mirror image of buying — same risk.\"* It isn't. A long position's max loss is `100%`; a short's loss is theoretically **unlimited** because the price can rise forever. You also face recalls and buy-ins you don't control, plus borrow fees and owed dividends. This is educational content, not financial advice.",
    },
  ],
};
