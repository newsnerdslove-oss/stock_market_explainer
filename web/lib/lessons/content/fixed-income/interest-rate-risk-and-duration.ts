import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "interest-rate-risk-and-duration",
  title: "Interest-Rate Risk & Duration",
  level: 3,
  moduleId: "markets-fixed-income",
  moduleOrder: 4,
  summary: "Duration turns the price-yield seesaw into a number — how much your bond moves when rates move.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "We know rising rates push existing bond prices down — that's the central risk of owning bonds. But *how much* do they fall? The answer is **duration**, the single number that measures a bond's sensitivity to interest-rate moves.",
    },
    {
      type: "heading",
      text: "Duration as a sensitivity gauge",
    },
    {
      type: "text",
      body:
        "Duration is quoted *in years*, but think of it as a multiplier for rate moves. The key estimate is `% price change ≈ −modified duration × change in yield`. FINRA's rule of thumb: for each `1`-percentage-point change in rates, a bond's price moves the *opposite* way by roughly its duration. A duration-`10` bond loses about `10%` if rates rise `1` point.",
    },
    {
      type: "heading",
      text: "What drives duration",
    },
    {
      type: "list",
      items: [
        "**Longer maturity → higher duration.** Cash flows arrive further out, so the price is more rate-sensitive.",
        "**Lower coupon → higher duration.** Less cash comes back early, so more value sits in the distant par repayment.",
        "Put together: a **long-maturity, low-coupon** bond is the most sensitive to rate changes.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Interest-rate risk", def: "The risk that rising rates push the price of an existing bond down." },
        { term: "Duration", def: "A measure (in years) of how much a bond's price moves when rates change." },
        { term: "Modified duration", def: "The figure used directly in `% price change ≈ −modified duration × Δyield`." },
        { term: "Macaulay duration", def: "The weighted-average time to receive a bond's cash flows. A zero-coupon bond's Macaulay duration equals its maturity." },
        { term: "Convexity", def: "A correction for the curvature the linear duration estimate misses." },
        { term: "Basis point", def: "One-hundredth of a percentage point. `100` basis points (bps) = `1%`." },
      ],
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "A bond has modified duration `7` and a price of `$1,000`. Rates rise `0.50%` (`50` bps).",
        "Estimated change: `−7 × 0.0050 = −0.035 = −3.5%`.",
        "New price ≈ `$1,000 × (1 − 0.035) = $965`.",
        "If rates instead *fell* `0.50%`: `−7 × (−0.0050) = +3.5%`, so ≈ `$1,035`.",
        "Compare a duration-`3` bond under the same `+0.50%`: `−3 × 0.0050 = −1.5%` — far less sensitive.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Duration is a **linear** estimate of a **curved** relationship. It's accurate for small moves (about `25`–`50` bps); for big swings, **convexity** corrects the gap. It also assumes a parallel shift in the curve and is less reliable for callable or putable bonds, which use *effective duration*.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't assume two bonds maturing on the *same date* carry the same rate risk. The one with the **lower coupon** has higher duration and will move more when rates change.",
    },
  ],
};
