"use client";

import { useEffect, useState } from "react";

/**
 * True when the viewport is narrower than `breakpoint` (default 640px). SSR and the
 * first client render return false (desktop-first) so hydration matches; it corrects
 * on mount and on resize. Used to collapse the Stax screens' multi-column grids and
 * swap the AppShell's top tabs for a bottom tab bar on phones.
 */
export function useIsMobile(breakpoint = 640): boolean {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);
  return mobile;
}
