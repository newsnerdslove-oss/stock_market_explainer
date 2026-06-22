import type { Question } from "@/lib/quiz/types";

// Quiz for the "Crypto Taxes for Investors" lesson.
export const questions: Question[] = [
  {
    id: "crypto-taxes-for-investors.q1",
    lessonSlug: "crypto-taxes-for-investors",
    type: "single",
    difficulty: "easy",
    tags: ["property", "classification", "irs"],
    prompt: "How does the IRS classify crypto for US tax purposes, and why does it matter?",
    choices: [
      { id: "a", text: "As foreign currency, so it's taxed only on conversion to dollars", feedback: "The IRS explicitly says digital assets are property, not currency — that's the whole point." },
      { id: "b", text: "As property, so capital-gain rules apply to every disposal" },
      { id: "c", text: "As a security, so wash-sale rules apply to it" },
      { id: "d", text: "As collectibles, taxed at a flat 28% rate" },
    ],
    correctId: "b",
    explanation:
      "The IRS treats digital assets as **property**, not currency. That single classification means capital-gain rules apply to every disposal — and is also why the wash-sale rule (which targets securities) currently doesn't reach crypto.",
  },
  {
    id: "crypto-taxes-for-investors.q2",
    lessonSlug: "crypto-taxes-for-investors",
    type: "single",
    difficulty: "medium",
    tags: ["disposal", "swap", "capital-gains"],
    prompt: "You trade `1 BTC` directly for some ETH on an exchange. No dollars hit your bank. What's the tax consequence?",
    choices: [
      { id: "a", text: "Nothing — you never cashed out to fiat" },
      { id: "b", text: "Only the ETH you received is taxed, as income" },
      { id: "c", text: "It's a disposal of the BTC — you owe capital gains/loss on the BTC's change in value" },
      { id: "d", text: "Nothing until you eventually sell the ETH for dollars" },
    ],
    correctId: "c",
    explanation:
      "A **crypto-to-crypto swap is a disposal**. You're taxed as if you sold the BTC for its fair market value and rebought — so you owe capital gains or loss on the BTC, even though no dollars moved. \"I didn't cash out to fiat\" is not a defense.",
  },
  {
    id: "crypto-taxes-for-investors.q3",
    lessonSlug: "crypto-taxes-for-investors",
    type: "single",
    difficulty: "easy",
    tags: ["holding-period", "short-term", "long-term"],
    prompt: "What separates a **short-term** capital gain from a **long-term** one on crypto?",
    choices: [
      { id: "a", text: "Holding one year or less is short-term; holding more than one year is long-term" },
      { id: "b", text: "Short-term is under $10,000 of gain; long-term is above it" },
      { id: "c", text: "Short-term applies to swaps; long-term applies to sales for dollars" },
      { id: "d", text: "Short-term is held under 30 days; long-term is anything longer" },
    ],
    correctId: "a",
    explanation:
      "The line is exactly one year. Held **one year or less** → short-term, taxed at ordinary income rates. Held **more than one year** → long-term, taxed at lower preferential rates. The size of the gain doesn't change the character.",
  },
  {
    id: "crypto-taxes-for-investors.q4",
    lessonSlug: "crypto-taxes-for-investors",
    type: "single",
    difficulty: "medium",
    tags: ["staking", "ordinary-income", "fmv"],
    prompt: "Per IRS Revenue Ruling 2023-14, how are staking rewards taxed?",
    choices: [
      { id: "a", text: "As a long-term capital gain, since staking takes time" },
      { id: "b", text: "Not at all until you sell the rewarded coins" },
      { id: "c", text: "As a tax-free return of capital" },
      { id: "d", text: "As ordinary income at fair market value when you gain dominion and control" },
    ],
    correctId: "d",
    explanation:
      "Revenue Ruling 2023-14 treats staking rewards as **ordinary income** at their **fair market value** in the year you gain *dominion and control* (when they become yours to transfer). That FMV then becomes your cost basis for a later capital-gains calculation.",
  },
  {
    id: "crypto-taxes-for-investors.q5",
    lessonSlug: "crypto-taxes-for-investors",
    type: "single",
    difficulty: "hard",
    tags: ["ordinary-income", "cost-basis", "double-taxation"],
    prompt: "You earn `1 ETH` from staking when it's worth `$3,000`, hold it, then later sell it for `$4,000`. What do you owe?",
    choices: [
      { id: "a", text: "A single `$4,000` capital gain at sale" },
      { id: "b", text: "`$3,000` ordinary income at receipt, plus a `$1,000` capital gain at sale" },
      { id: "c", text: "`$4,000` ordinary income at sale and nothing at receipt" },
      { id: "d", text: "`$1,000` ordinary income only — the rest is a tax-free return of basis" },
    ],
    correctId: "b",
    explanation:
      "Income crypto is taxed twice in different ways. The `$3,000` FMV at receipt is **ordinary income** and becomes your **cost basis**. Selling at `$4,000` then produces a **`$1,000` capital gain** on the change since receipt.",
  },
  {
    id: "crypto-taxes-for-investors.q6",
    lessonSlug: "crypto-taxes-for-investors",
    type: "single",
    difficulty: "medium",
    tags: ["cost-basis", "record-keeping"],
    prompt: "Why is cost-basis tracking so important in crypto specifically?",
    choices: [
      { id: "a", text: "Because the IRS taxes the highest balance you held during the year" },
      { id: "b", text: "Because crypto income is exempt if you keep no records" },
      { id: "c", text: "Because if you can't prove your basis, the IRS can treat it as zero and tax the full proceeds as gain" },
      { id: "d", text: "Because cost basis determines whether a swap is taxable at all" },
    ],
    correctId: "c",
    explanation:
      "The IRS requires gains computed in USD with records to back them up. With coins moving across exchanges and wallets and every swap a disposal, basis is hard to reconstruct — and if you **can't prove it, it can be treated as zero**, taxing the entire proceeds as gain.",
  },
  {
    id: "crypto-taxes-for-investors.q7",
    lessonSlug: "crypto-taxes-for-investors",
    type: "single",
    difficulty: "hard",
    tags: ["wash-sale", "section-1091", "regulatory"],
    prompt: "What's the current status of the **wash-sale rule** (IRC §1091) as applied to crypto?",
    choices: [
      { id: "a", text: "It always applied to crypto, just like stocks" },
      { id: "b", text: "It permanently exempts crypto by statute, so this can never change" },
      { id: "c", text: "It bars any crypto loss harvested within 30 days of rebuying" },
      { id: "d", text: "It currently doesn't apply to crypto, because §1091 targets securities — but proposals could change that" },
    ],
    correctId: "d",
    explanation:
      "§1091 disallows a loss when you rebuy a **security** within 30 days. Crypto is treated as **property**, not a security, so the rule **currently doesn't apply** — you can harvest a crypto loss and rebuy immediately. But closing this gap has appeared in draft bills since 2021, so treat it as a quirk that **could change**.",
  },
];
