"use client";

import type { SceneProps } from "../DeckClient";

// Scene 15 — the close. No formal ask (this is a scout teaser). Beat 0: the
// turn + the honest stage. Beat 1: the invitation + contact.

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
          <circle cx="400" cy="400" r="380" stroke="rgba(229,96,44,0.20)" strokeWidth="0.6" strokeDasharray="2 8" fill="none" />
        </g>
        <g style={{ transformOrigin: "400px 400px" }}>
          <circle cx="400" cy="400" r="280" stroke="rgba(181,211,61,0.22)" strokeWidth="0.6" strokeDasharray="1 6" fill="none" />
        </g>
        <g style={{ transformOrigin: "400px 400px" }}>
          <circle cx="400" cy="400" r="180" stroke="rgba(229,96,44,0.30)" strokeWidth="0.6" strokeDasharray="1 5" fill="none" />
        </g>
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="max-w-[15ch] text-balance text-[clamp(2.8rem,8vw,6rem)] font-medium leading-[0.98] tracking-[-0.04em] text-foreground">
          Step off the{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            treadmill.
          </span>
        </h2>

        <p className="mt-7 max-w-[56ch] text-balance text-[14px] leading-relaxed text-foreground/70">
          Very early. The intelligence is proven; the swarm is in development; we&apos;re partnering
          with farmers now.
        </p>

        {beat >= 1 && (
          <div className="mt-9 flex flex-col items-center gap-5">
            <p
              className="max-w-[44ch] text-balance text-[clamp(1.1rem,1.9vw,1.45rem)] italic leading-snug text-accent-soft"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              If you back founders who choose hard problems, we&apos;d love to talk.
            </p>
            <a
              href="mailto:filippo.fonseca@yale.edu"
              className="neu-light inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13.5px] font-medium"
              data-no-advance
            >
              filippo.fonseca@yale.edu
            </a>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/45">
              Filippo Fonseca · Emir Ahmed · David Antwi
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
