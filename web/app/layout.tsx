import type { Metadata } from "next";
import "./globals.css";
import { ProgressProvider } from "@/lib/progress/useProgress";

export const metadata: Metadata = {
  title: "Stock Market Explainer",
  description: "Daily training for stocks & crypto — basics to advanced, with a paper-trading simulator.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <ProgressProvider>{children}</ProgressProvider>
      </body>
    </html>
  );
}
