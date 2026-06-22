import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "contract-adjustments-splits-and-dividends",
  title: "Options Contract Adjustments (Splits & Dividends)",
  level: 4,
  moduleId: "markets-adv-options",
  moduleOrder: 10,
  summary:
    "When a stock splits, the OCC re-prices your listed options so total value is preserved. Even splits multiply contracts and divide the strike; uneven splits change the deliverable and strike instead; ordinary cash dividends are not adjusted at all.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "A listed option is a contract on **`100` shares** at a fixed **strike**. When the company does a corporate action — a stock split, a stock dividend, a special cash dividend — the **`OCC` (Options Clearing Corporation)** steps in and **adjusts** the open contracts so the holder is left **economically whole**: the *total* value controlled doesn't change, only how it's expressed. The exam tests two clean mechanics (even vs. uneven splits) and one trap (**ordinary cash dividends are not adjusted**).",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "The governing principle, straight from the **`OCC`**: adjust the deliverable and strike so **exercising yields the same dollar outcome** as before. Everything below is just that one idea applied to different splits. Verified against **theocc.com** and **optionseducation.org**.",
    },
    { type: "heading", text: "Even (whole-number) splits — multiply the contracts" },
    {
      type: "text",
      body:
        "An **even / whole-number forward split** (`2:1`, `3:1`, `4:1`) is handled by the **multiply-the-contracts** method. The **number of contracts** goes up by the split ratio, the **strike** is divided by that same ratio, and the **contract size stays `100` shares** (the multiplier stays `100`). Nothing about the contract becomes 'non-standard.'",
    },
    {
      type: "list",
      items: [
        "**`2:1`** → you hold **twice as many** contracts, each strike **halved**, still `100` shares each.",
        "**`3:1`** → **three times** as many contracts, strike divided by `3`.",
        "**Deliverable stays `100`** shares per contract — the symbol is unchanged.",
      ],
    },
    { type: "heading", text: "Worked: a 2-for-1 split" },
    {
      type: "text",
      body:
        "You are long **`1`** `XYZ` `60` call. `XYZ` declares a **`2-for-1`** split.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Contracts:** `1 × 2 = 2` calls.",
        "**Strike:** `60 ÷ 2 = 30`.",
        "**Deliverable:** still `100` shares each (`2 × 100 = 200` shares total — the stock count exactly doubled, just like the split).",
        "**Value check:** before, `1` call controlled `100 × $60 = $6,000` of exercise value; after, `2` calls control `2 × 100 × $30 = $6,000`. Unchanged.",
      ],
    },
    { type: "heading", text: "Uneven splits & stock dividends — adjust the deliverable" },
    {
      type: "text",
      body:
        "An **uneven split** (`3:2`, `5:4`) or a **stock dividend** can't be expressed as whole extra contracts, so the `OCC` uses the **adjust-the-deliverable** method instead. Here the **number of contracts stays the same**, but the **deliverable (shares per contract) and the strike both change**, and the contract becomes **non-standard** (an adjusted symbol, multiplier still `100`).",
    },
    {
      type: "list",
      items: [
        "**Contracts:** unchanged.",
        "**Deliverable:** `100 ×` the split ratio (`3:2` → `100 × 3/2 = 150` shares).",
        "**Strike:** `×` the inverse ratio (`3:2` → strike `× 2/3`).",
      ],
    },
    { type: "heading", text: "Worked: a 3-for-2 split" },
    {
      type: "text",
      body:
        "You are long **`1`** `XYZ` `60` call. `XYZ` declares a **`3-for-2`** split (for every `2` shares you get `3`).",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Contracts:** still `1` — uneven splits do **not** create extra contracts.",
        "**Deliverable:** `100 × 3/2 = 150` shares.",
        "**Strike:** `60 × 2/3 = 40`.",
        "**Value check:** before, `100 × $60 = $6,000`; after, `150 × $40 = $6,000`. Unchanged — the holder is economically whole.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Decision rule: if the split is a **whole number** (`2:1`, `3:1`), think **'more contracts, lower strike, deliverable stays `100`.'** If it's a **fraction** (`3:2`, `5:4`) or a **stock dividend**, think **'same number of contracts, bigger deliverable, lower strike — now non-standard.'**",
    },
    { type: "heading", text: "Cash dividends — the trap" },
    {
      type: "text",
      body:
        "Here's the point candidates miss: **ordinary cash dividends are NOT adjusted.** A company paying its regular quarterly dividend does **not** change your strike or deliverable — that expected income is already baked into the option's price. The `OCC` only adjusts cash distributions it deems **non-ordinary** — typically a **special / large one-time cash dividend** — and even then on a **case-by-case** basis.",
    },
    {
      type: "list",
      items: [
        "**Ordinary (regular) cash dividend** → **no adjustment**. Strike and deliverable stay put.",
        "**Special / large one-time cash dividend** → **may be adjusted** by the `OCC` (case-by-case).",
        "Contrast with **stock** dividends, which **are** adjusted via the deliverable method above.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "OCC", def: "The Options Clearing Corporation — issues and guarantees listed options and decides how contracts are adjusted for corporate actions." },
        { term: "Contract adjustment", def: "Re-pricing of an open option (strike, deliverable, and/or number of contracts) so the holder is left economically whole after a corporate action." },
        { term: "Even / whole-number split", def: "A 2:1, 3:1, etc. forward split — handled by multiplying the number of contracts and dividing the strike; deliverable stays 100 shares." },
        { term: "Uneven split", def: "A 3:2, 5:4, etc. split — handled by adjusting the deliverable (100 × ratio) and the strike (× inverse ratio); number of contracts unchanged." },
        { term: "Deliverable", def: "The shares one contract delivers on exercise — normally 100, but changed by uneven splits and stock dividends, making the contract non-standard." },
        { term: "Stock dividend", def: "Shares paid as a dividend; adjusted like an uneven split via the deliverable, not by adding contracts." },
        { term: "Ordinary cash dividend", def: "A regular cash dividend — NOT adjusted by the OCC; already reflected in the option's price." },
        { term: "Special cash dividend", def: "A large one-time cash distribution the OCC may deem non-ordinary and adjust on a case-by-case basis." },
        { term: "Multiplier", def: "Stays 100 through these adjustments; the deliverable share count is what changes on uneven splits." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'A stock split or dividend makes my option worth more or less.'* No — `OCC` adjustments are **value-neutral** by design (`shares × strike` is preserved). And the regular *quarterly cash* dividend triggers **no adjustment at all**. Per **theocc.com / optionseducation.org**. This is educational content, not financial advice.",
    },
  ],
};
