import Link from "next/link";
import { Simulator } from "@/components/trading/Simulator";

export const metadata = {
  title: "Simulator — Stock Market Explainer",
  description: "Paper-trade stocks with virtual cash — practice what you've learned, risk-free.",
};

export default function SimulatorPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-sm text-muted transition hover:text-ink">
          ← Home
        </Link>
        <Link href="/today" className="text-sm text-learn transition hover:opacity-80">
          Daily review →
        </Link>
      </div>

      <h1 className="mt-4 text-4xl font-medium tracking-tight">Simulator</h1>
      <p className="mt-3 text-muted">
        Practice trading with <span className="font-mono text-ink">$100,000</span> of virtual cash — no real money.
        Buy and sell, and watch your P&amp;L move.
      </p>

      <Simulator />

      <footer className="mt-16 border-t border-hairline pt-6 text-xs text-faint">
        Educational only · paper trading only · not financial advice.
      </footer>
    </main>
  );
}
