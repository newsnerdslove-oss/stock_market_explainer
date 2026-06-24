"use client";

import type { CSSProperties, ReactNode } from "react";
import { A } from "./theme";

/** Rounded surface card. Lifts on hover when `hover` or `onClick` is set. */
export function Card({
  children,
  pad = 20,
  style,
  onClick,
  hover = false,
}: {
  children?: ReactNode;
  pad?: number;
  style?: CSSProperties;
  onClick?: () => void;
  hover?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        background: A.card,
        border: `1px solid ${A.border}`,
        borderRadius: A.radius,
        padding: pad,
        boxShadow: A.shadow,
        cursor: onClick ? "pointer" : "default",
        transition: "transform .15s ease, box-shadow .15s ease",
        ...style,
      }}
      onMouseEnter={(e) => {
        if (hover || onClick) {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = A.shadowLg;
        }
      }}
      onMouseLeave={(e) => {
        if (hover || onClick) {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = A.shadow;
        }
      }}
    >
      {children}
    </div>
  );
}
