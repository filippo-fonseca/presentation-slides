import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Set true for scenes that should sit on a centered, vertical stack. Default: true. */
  centered?: boolean;
  /** Optional tag line above the headline — e.g. "01 · The problem" */
  eyebrow?: ReactNode;
  className?: string;
};

/* The Stage wraps every scene. Outer container scrolls when the scene is
 * taller than the available viewport; the inner uses min-h-full so short
 * content still centers vertically as before. */
export default function Stage({
  children,
  centered = true,
  eyebrow,
  className = "",
}: Props) {
  return (
    <div className="relative h-full w-full overflow-y-auto [scrollbar-color:rgba(244,241,234,0.18)_transparent] [scrollbar-width:thin]">
      <div
        className={`relative flex min-h-full w-full flex-col ${
          centered ? "items-center justify-center" : ""
        } px-6 py-6 sm:px-10 sm:py-10 ${className}`}
      >
        {eyebrow ? (
          <p className="beat-reveal absolute left-6 top-6 z-10 font-mono text-[10.5px] uppercase tracking-[0.28em] text-foreground/55 sm:left-10 sm:top-8">
            {eyebrow}
          </p>
        ) : null}
        {children}
      </div>
    </div>
  );
}
