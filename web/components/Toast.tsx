"use client";

import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";

export type ToastTone = "ok" | "info" | "warn" | "err";

interface ToastItem {
  id: number;
  text: string;
  tone: ToastTone;
}

type ToastFn = (text: string, tone?: ToastTone) => void;

const ToastContext = createContext<ToastFn>(() => {});

/** Fire a transient toast from anywhere under <ToastProvider>. */
export function useToast(): ToastFn {
  return useContext(ToastContext);
}

const TONE: Record<ToastTone, string> = {
  ok: "border-up/40 text-up",
  info: "border-learn/40 text-learn",
  warn: "border-streak/40 text-streak",
  err: "border-down/40 text-down",
};

/**
 * App-wide toast stack: brief, auto-dismissing confirmations (e.g. an order
 * fill). Elevation is a lighter surface + border per the design system, not a
 * drop shadow; `aria-live="polite"` announces each one. Auto-dismiss timing is
 * unaffected by reduced-motion (it's not animation), and there's no slide-in, so
 * it's reduced-motion-safe by default.
 */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);
  const nextId = useRef(1);

  const push = useCallback<ToastFn>((text, tone = "ok") => {
    const id = nextId.current++;
    setItems((xs) => [...xs, { id, text, tone }]);
    setTimeout(() => setItems((xs) => xs.filter((t) => t.id !== id)), 4000);
  }, []);

  return (
    <ToastContext.Provider value={push}>
      {children}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex flex-col items-center gap-2 px-4"
        aria-live="polite"
        aria-atomic="false"
      >
        {items.map((t) => (
          <div
            key={t.id}
            className={`pointer-events-auto max-w-sm rounded-md border bg-surface-2 px-4 py-2.5 text-sm ${TONE[t.tone]}`}
            role="status"
          >
            {t.text}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
