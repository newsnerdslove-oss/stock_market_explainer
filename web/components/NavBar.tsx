"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProgress } from "@/lib/progress/useProgress";
import { ThemeToggle } from "@/components/ThemeToggle";

const DESTINATIONS = [
  { href: "/learn", label: "Learn" },
  { href: "/today", label: "Today" },
  { href: "/exam", label: "Exam" },
  { href: "/study", label: "Study" },
  { href: "/progress", label: "Progress" },
  { href: "/simulator", label: "Simulator" },
];

// Routes redesigned in the Stax kit carry their own AppShell nav — suppress this
// (legacy) bar there so the two don't stack. Grows as more screens convert.
const STAX_ROUTES = ["/settings", "/notifications", "/search"];

/**
 * Persistent top navigation across the six destinations, with the brand mark and
 * a compact streak counter. Sticky, with a translucent canvas backdrop. On
 * narrow screens the row scrolls horizontally (no hamburger needed); every link
 * is a ≥40px-tall tap target. The active route is highlighted via usePathname.
 */
export function NavBar() {
  const pathname = usePathname();
  const { progress, hydrated } = useProgress();
  const streak = hydrated ? progress.streak.current : 0;

  if (STAX_ROUTES.some((r) => pathname === r || pathname.startsWith(`${r}/`))) return null;

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-canvas/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/" className="mr-2 flex shrink-0 items-center gap-2 rounded-md py-1.5 pr-1" aria-label="Home">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-up text-sm font-medium text-canvas">
            $
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-ink sm:inline">Explainer</span>
        </Link>

        {DESTINATIONS.map((d) => {
          const active = pathname === d.href || pathname.startsWith(`${d.href}/`);
          return (
            <Link
              key={d.href}
              href={d.href}
              aria-current={active ? "page" : undefined}
              className={`shrink-0 rounded-md px-3 py-2 text-sm transition ${
                active ? "bg-surface-2 text-ink" : "text-muted hover:bg-surface hover:text-ink"
              }`}
            >
              {d.label}
            </Link>
          );
        })}

        <div className="ml-auto flex shrink-0 items-center gap-1 pl-2">
          {streak > 0 && (
            <span className="flex items-center gap-1 font-mono text-xs text-streak" title="Day streak">
              🔥 {streak}
            </span>
          )}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
