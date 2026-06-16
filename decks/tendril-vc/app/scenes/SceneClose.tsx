"use client";

import type { SceneProps } from "../DeckClient";

// Example closing scene — large centered mission line with concentric rings.
// Beat 0: mission only.  Beat 1: mission + CTA.

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
          <circle cx="400" cy="400" r="380" stroke="rgba(245,176,106,0.18)" strokeWidth="0.6" strokeDasharray="2 8" fill="none" />
        </g>
        <g style={{ transformOrigin: "400px 400px" }}>
          <circle cx="400" cy="400" r="280" stroke="rgba(244,241,234,0.15)" strokeWidth="0.6" strokeDasharray="1 6" fill="none" />
        </g>
        <g style={{ transformOrigin: "400px 400px" }}>
          <circle cx="400" cy="400" r="180" stroke="rgba(245,176,106,0.25)" strokeWidth="0.6" strokeDasharray="1 5" fill="none" />
        </g>
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="mb-8 font-mono text-[10.5px] uppercase tracking-[0.32em] text-foreground/55">
          The close
        </p>

        <h2 className="max-w-[16ch] text-balance text-[clamp(2.8rem,7.5vw,6rem)] font-medium leading-[0.98] tracking-[-0.04em] text-foreground">
          The mission, in{" "}
          <span
            className="italic font-normal text-accent-soft"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            one breath.
          </span>
        </h2>

        {beat >= 1 && (
          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="max-w-[44ch] text-balance text-[14px] leading-relaxed text-foreground/80">
              A short call to action: what you want the room to do next.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:speaker@example.com"
                className="neu-light inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13.5px] font-medium"
                data-no-advance
              >
                speaker@example.com
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
