"use client";

import type { SceneProps } from "../DeckClient";

// Scene 24 — Close. Setup / mission / afterthought / footer.

export default function SceneClose({ beat }: SceneProps) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-6 sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 glow-radial blur-3xl"
      />

      <svg
        aria-hidden
        viewBox="0 0 800 800"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] -translate-x-1/2 -translate-y-1/2 opacity-50"
      >
        <g style={{ transformOrigin: "400px 400px" }}>
          <circle cx="400" cy="400" r="380" stroke="rgba(229, 96, 44,0.20)" strokeWidth="0.6" strokeDasharray="2 8" fill="none" />
        </g>
        <g style={{ transformOrigin: "400px 400px" }}>
          <circle cx="400" cy="400" r="280" stroke="rgba(181, 211, 61,0.22)" strokeWidth="0.6" strokeDasharray="1 6" fill="none" />
        </g>
        <g style={{ transformOrigin: "400px 400px" }}>
          <circle cx="400" cy="400" r="180" stroke="rgba(229, 96, 44,0.30)" strokeWidth="0.6" strokeDasharray="1 5" fill="none" />
        </g>
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="mb-6 max-w-[44ch] text-balance text-[14px] leading-relaxed text-foreground/60">
          A content system manages a website.
        </p>

        <h2 className="max-w-[16ch] text-balance text-[clamp(3rem,8vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.04em] text-foreground">
          We manage{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            the field.
          </span>
        </h2>

        {beat >= 1 && (
          <div className="mt-10 flex flex-col items-center gap-4">
            <p
              className="max-w-[48ch] text-balance text-[clamp(1.05rem,1.7vw,1.3rem)] italic leading-snug text-accent"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              This is the one I want to build for the next ten years.
            </p>
            <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.32em] text-foreground/55">
              Tendril
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
