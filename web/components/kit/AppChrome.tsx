"use client";

import { ViewTransition } from "react";
import { usePathname } from "next/navigation";
import { StaxShell } from "@/components/kit/StaxShell";

// Routes that render full-screen with no app shell (their own layout).
const FULLSCREEN = ["/login"];

/**
 * The single app chrome: wraps every page in the Stax shell (top tabs + bottom tab
 * bar), except full-screen routes. Replaces the old global NavBar — one shell, one
 * look, app-wide. The page content crossfades on navigation while the shell stays put.
 */
export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const fullscreen = FULLSCREEN.some((r) => pathname === r || pathname.startsWith(`${r}/`));
  if (fullscreen) return <ViewTransition>{children}</ViewTransition>;
  return (
    <StaxShell>
      <ViewTransition>{children}</ViewTransition>
    </StaxShell>
  );
}
