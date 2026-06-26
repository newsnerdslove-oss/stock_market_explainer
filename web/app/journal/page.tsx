import { Journal } from "@/components/trading/Journal";

export const metadata = {
  title: "Trade journal — Stock Market Explainer",
  description: "Your closed paper trades: win rate, expectancy, profit factor, and the per-trade record.",
};

export default function JournalPage() {
  return <Journal />;
}
