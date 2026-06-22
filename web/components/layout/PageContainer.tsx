import type { ReactNode } from "react";

// Shared page shell. One place defines app-wide width + responsive horizontal
// padding so every route lines up with the NavBar instead of each page picking
// its own max-w-*. Data/chart/table pages use the full wide width; text-heavy
// reading pages pass size="prose" to keep a comfortable reading measure.
type Size = "wide" | "prose";

const MAX_W: Record<Size, string> = {
  wide: "max-w-7xl",
  prose: "max-w-3xl",
};

export function PageContainer({
  size = "wide",
  className = "",
  children,
}: {
  size?: Size;
  className?: string;
  children: ReactNode;
}) {
  return (
    <main className={`mx-auto w-full ${MAX_W[size]} px-4 sm:px-6 lg:px-8 ${className}`}>{children}</main>
  );
}
