import { Simulator } from "@/components/trading/Simulator";

export const metadata = {
  title: "Simulator — Stock Market Explainer",
  description: "Paper-trade stocks with virtual cash — practice what you've learned, risk-free.",
};

export default function SimulatorPage() {
  return (
    <>
      <h1 className="text-3xl font-extrabold tracking-tight text-ink">Simulator</h1>
      <p className="mt-2 font-semibold text-muted">
        Practice trading with <span className="font-mono text-ink">$100,000</span>{" "}
        of virtual cash — no real money. Buy and sell, and watch your P&amp;L move.
      </p>

      <div className="mt-8">
        <Simulator />
      </div>

      <footer className="mt-16 border-t border-strong pt-6 text-xs font-semibold text-faint">
        Educational only · paper trading only · not financial advice.
      </footer>
    </>
  );
}
