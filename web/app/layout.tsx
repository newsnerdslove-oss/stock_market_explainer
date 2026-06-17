import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ProgressProvider } from "@/lib/progress/useProgress";
import { ToastProvider } from "@/components/Toast";
import { NavBar } from "@/components/NavBar";

// The two brand faces, self-hosted by next/font and exposed as CSS variables
// that tailwind.config.ts points `font-sans` / `font-mono` at. Inter for UI &
// prose; JetBrains Mono (tabular) for every number, ticker, and code span.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stock Market Explainer",
  description: "Daily training for stocks & crypto — basics to advanced, with a paper-trading simulator.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <ProgressProvider>
          <ToastProvider>
            <NavBar />
            {children}
          </ToastProvider>
        </ProgressProvider>
      </body>
    </html>
  );
}
