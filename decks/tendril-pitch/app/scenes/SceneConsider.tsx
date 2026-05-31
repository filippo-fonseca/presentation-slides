"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Transition slide between Impact and Recap. A quiet, first-person moment
// asking David and Amir to look at the recap with fresh eyes. Minimal on
// purpose — the contrast against the dense recap that follows is the point.

export default function SceneConsider({ beat }: SceneProps) {
  return (
    <Stage eyebrow="25 · One ask">
      <div className="relative z-10 mx-auto flex w-full max-w-[58ch] flex-col items-center gap-7 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 glow-radial blur-3xl"
        />

        <p
          className="text-balance text-[clamp(0.95rem,1.4vw,1.1rem)] italic leading-snug text-accent-soft"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Quick personal aside, before the recap…
        </p>

        <h2
          className="text-balance text-[clamp(2rem,4.6vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.035em]"
        >
          One ask before{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            we land this.
          </span>
        </h2>

        <p className="max-w-[52ch] text-balance text-[clamp(1rem,1.4vw,1.2rem)] leading-relaxed text-foreground/85">
          I spent today on this. Genuinely all of it: the research, the numbers, the names,
          this deck. I think I made the case.
        </p>

        <p
          aria-hidden={beat < 1}
          className={`max-w-[58ch] text-balance text-[clamp(0.95rem,1.35vw,1.15rem)] leading-relaxed text-foreground/75 transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
          }`}
        >
          I made the next slide so we can see the whole argument in one frame, so I don&apos;t
          have to keep rewinding, and so you can sit with it on your own time.
        </p>

        <p
          aria-hidden={beat < 2}
          className={`max-w-[52ch] text-balance text-[clamp(1.1rem,2vw,1.55rem)] italic leading-snug text-accent transition-all duration-500 ${
            beat >= 2 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Please look at it with fresh eyes. Really consider it. I really do think this is the
          one I want to build.
        </p>

        <p
          aria-hidden={beat < 2}
          className={`mt-2 font-mono text-[10.5px] uppercase tracking-[0.32em] text-foreground/55 transition-opacity duration-500 ${
            beat >= 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          — Filippo
        </p>
      </div>
    </Stage>
  );
}
