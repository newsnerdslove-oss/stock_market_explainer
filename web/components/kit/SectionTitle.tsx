"use client";

import type { ReactNode } from "react";
import { A } from "./theme";

/** A section heading with an optional right-aligned action link. */
export function SectionTitle({
  children,
  action,
  onAction = () => {},
}: {
  children?: ReactNode;
  action?: ReactNode;
  onAction?: () => void;
}) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 14 }}>
      <h2 style={{ margin: 0, fontSize: 19, fontWeight: 800, letterSpacing: "-.01em", color: A.ink }}>{children}</h2>
      {action && (
        <span onClick={onAction} style={{ fontSize: 14, color: A.primary, fontWeight: 700, cursor: "pointer" }}>
          {action}
        </span>
      )}
    </div>
  );
}
