"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Example beat-driven content scene.  Beats progressively reveal more
// material — each `beat >= N` gate adds a section.  Try increasing the
// scene's `beats` count in lib/content.ts and add more gated sections.

export default function SceneContent({ beat }: SceneProps) {
  return (
    <Stage eyebrow="02 · The body">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-7 text-center">
        {/* Beat 0 — headline + lead */}
        <h2 className="text-balance text-[clamp(1.8rem,3.6vw,2.8rem)] font-medium leading-[1.05] tracking-[-0.03em]">
          The thing we are{" "}
          <span
            className="italic font-normal text-accent-soft"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            actually saying.
          </span>
        </h2>

        <p className="max-w-[60ch] text-balance text-[14px] leading-relaxed text-foreground/80">
          A single, plain-language sentence that lands the argument.  Speak it; let it sit.
        </p>

        {/* Beat 1 — three pillars */}
        <div
          className={`grid w-full grid-cols-1 gap-3 sm:grid-cols-3 transition-all duration-500 ${
            beat >= 1
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          {["First", "Second", "Third"].map((label) => (
            <div key={label} className="neu-raised-sm rounded-2xl px-4 py-5 text-left">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-soft">
                {label}
              </p>
              <p className="mt-2 text-[13.5px] leading-snug text-foreground/85">
                One short sentence describing this pillar.  Plain language wins.
              </p>
            </div>
          ))}
        </div>

        {/* Beat 2 — pull quote / manifesto */}
        <p
          className={`max-w-[40ch] text-balance text-[clamp(1.2rem,2vw,1.6rem)] leading-snug italic text-accent-soft transition-all duration-500 ${
            beat >= 2
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0"
          }`}
          style={{ fontFamily: "var(--font-instrument-serif)" }}
          aria-hidden={beat < 2}
        >
          &ldquo;The manifesto line.  Memorable, repeatable, true.&rdquo;
        </p>
      </div>
    </Stage>
  );
}
