import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ProgressProvider } from "@/lib/progress/useProgress";
import { ToastProvider } from "@/components/Toast";
import { AppChrome } from "@/components/kit/AppChrome";

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
// Stax "Warm Campus" brand face for the UI kit (Plus Jakarta Sans).
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const DESCRIPTION =
  "Daily training for stocks & crypto — basics to Series 7-level mastery, with quizzes, a spaced-repetition review, practice exams, and a paper-trading simulator.";

export const metadata: Metadata = {
  title: "Stock Market Explainer",
  description: DESCRIPTION,
  applicationName: "Explainer",
  openGraph: {
    title: "Stock Market Explainer",
    description: DESCRIPTION,
    siteName: "Explainer",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Stock Market Explainer",
    description: DESCRIPTION,
  },
};

// Pins the mobile browser chrome to the canvas of whichever theme is active.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0E14" },
    { media: "(prefers-color-scheme: light)", color: "#F4F6FA" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Applies the saved (or system-preferred) theme before first paint, so there's
// no flash of the wrong theme. Inline + synchronous at the top of <body>.
const THEME_INIT = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <ProgressProvider>
          <ToastProvider>
            <AppChrome>{children}</AppChrome>
          </ToastProvider>
        </ProgressProvider>
      </body>
    </html>
  );
}
