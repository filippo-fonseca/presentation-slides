"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 3 — The question on the table.
// Two contrasting beats (Ocura vs Agriculture) + a pull-line.

export default function SceneQuestion({ beat }: SceneProps) {
  return (
    <Stage eyebrow="02 · The question on the table">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-8 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          We have the capacity to build the brain.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Where does it create the most value?
          </span>
        </h2>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <div
            aria-hidden={beat < 1}
            className={`neu-raised-sm rounded-2xl p-5 text-left transition-all duration-500 ${
              beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
            }`}
          >
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-soft">
              Blind assistance · Ocura
            </p>
            <p className="mt-2 text-[14px] leading-snug text-foreground/85">
              A moral driver. Genuinely life-changing, but a slow, hard market to monetize,
              and the customer can rarely pay for ROI.
            </p>
          </div>

          <div
            aria-hidden={beat < 1}
            className={`neu-lit rounded-2xl p-5 text-left transition-all duration-500 ${
              beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
            }`}
          >
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
              Agriculture
            </p>
            <p className="mt-2 text-[14px] leading-snug text-foreground">
              A financial driver. Farmers buy ROI today. One of the biggest markets on earth,
              and the one that&apos;s felt, every time, like a conviction, not just a market.
            </p>
          </div>
        </div>

        <p
          className={`max-w-[44ch] text-balance text-[clamp(1.1rem,2.1vw,1.6rem)] italic leading-snug text-accent transition-opacity duration-500 ${
            beat >= 2 ? "opacity-100" : "opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 2}
        >
          Same brain. Completely different economics.
        </p>
      </div>
    </Stage>
  );
}
