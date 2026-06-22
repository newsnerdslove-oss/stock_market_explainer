import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "liquidity-and-solvency-ratios",
  title: "Liquidity and Solvency Ratios",
  level: 2,
  moduleId: "markets-fundamental",
  moduleOrder: 11,
  summary:
    "Two questions the balance sheet answers: can the firm pay this year's bills (liquidity), and can it carry its long-term debt (solvency)? Four ratios, with a worked example.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "A profitable company can still fail if it runs out of cash. Balance-sheet ratios split that survival question into two timeframes: **liquidity** asks *can the firm pay its bills this year?*, and **solvency** (also called **leverage**) asks *can it carry its long-term debt at all?* Both pull straight from the balance sheet and income statement.",
    },
    { type: "heading", text: "Liquidity: the current and quick ratios" },
    {
      type: "text",
      body:
        "**Liquidity ratios** compare current assets to current liabilities — things due within 12 months. The **current ratio** = `current assets ÷ current liabilities`. Above `1` means current assets cover current obligations; a common comfort zone is roughly `1.5` to `2`.",
    },
    {
      type: "text",
      body:
        "The **quick ratio** (or **acid-test ratio**) is the stricter cousin: it *excludes inventory* (and prepaid expenses) because those are the slowest current assets to turn into cash. **Quick ratio** = `(current assets − inventory) ÷ current liabilities`. A quick ratio near or above `1` means the firm can meet short-term bills *without* having to sell inventory first.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "The gap between the current ratio and the quick ratio *is* the inventory effect. A retailer with a current ratio of `2.0` but a quick ratio of `0.6` is leaning hard on inventory it still has to sell — a meaningful warning the current ratio alone would hide.",
    },
    { type: "heading", text: "Solvency: debt-to-equity and interest coverage" },
    {
      type: "text",
      body:
        "**Solvency / leverage ratios** look past this year to the whole debt load. **Debt-to-equity (D/E)** = `total liabilities ÷ shareholders' equity` — how much the firm is financed by creditors versus owners. A D/E of `1` means debt and equity finance the company equally; very roughly `1` to `1.5` is often viewed as reasonable, but it swings hard by industry (utilities and banks run high; software runs low).",
    },
    {
      type: "text",
      body:
        "**Interest coverage** (also called *times interest earned*) = `EBIT ÷ interest expense`, where **EBIT** is earnings before interest and taxes. It answers: how many times over could operating profit pay the interest bill? A reading of `1` means profit *exactly* covers interest with nothing to spare; `2` or higher is generally considered healthy, and above `5` is strong.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "D/E is a *stock* measure (the size of the debt pile); interest coverage is a *flow* measure (whether profit can service it). A firm can have high D/E yet comfortable coverage if its earnings are large and steady — which is exactly why lenders look at both.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Liquidity ratio", def: "Measures ability to pay obligations due within ~12 months." },
        { term: "Current ratio", def: "`current assets ÷ current liabilities`. Above 1 covers near-term bills." },
        { term: "Quick (acid-test) ratio", def: "`(current assets − inventory) ÷ current liabilities`. Current ratio excluding inventory." },
        { term: "Solvency / leverage ratio", def: "Measures ability to carry long-term debt." },
        { term: "Debt-to-equity (D/E)", def: "`total liabilities ÷ shareholders' equity`. Creditor financing vs. owner financing." },
        { term: "Interest coverage", def: "`EBIT ÷ interest expense`. Times operating profit covers the interest bill; a.k.a. times interest earned." },
        { term: "EBIT", def: "Earnings before interest and taxes — operating profit used in the coverage ratio." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "A company reports current assets `$400M` (of which inventory is `$150M`), current liabilities `$200M`, total liabilities `$600M`, shareholders' equity `$500M`, EBIT `$180M`, and interest expense `$60M`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Current ratio** = `400 ÷ 200 = 2.0` — `$2` of current assets per `$1` of near-term bills.",
        "**Quick ratio** = `(400 − 150) ÷ 200 = 250 ÷ 200 = 1.25` — still above `1` after stripping out inventory.",
        "**Debt-to-equity** = `600 ÷ 500 = 1.2` — modestly more debt than equity.",
        "**Interest coverage** = `180 ÷ 60 = 3.0` — operating profit covers the interest bill three times over.",
      ],
    },
    {
      type: "text",
      body:
        "Read together: liquidity is solid (current `2.0`, quick `1.25`), and solvency is comfortable (D/E `1.2`, coverage `3.0`). No single ratio is decisive — the picture comes from all four, compared against industry peers and the firm's own trend.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't read a high current ratio as automatically good. An unusually high current ratio can signal *idle* cash or **bloated, slow-moving inventory** that isn't selling — which is why the quick ratio matters. And a 'healthy' number in one industry can be alarming in another, so always benchmark against peers, never against a fixed magic number.",
    },
  ],
};
