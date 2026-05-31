"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene — The bigger picture. Food security + yield framing. Sits between the
// ask and the close as the why-this-matters reminder.

export default function SceneImpact({ beat }: SceneProps) {
  return (
    <Stage eyebrow="24 · The bigger picture">
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-7 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 glow-radial blur-3xl"
        />

        <div className="mx-auto max-w-[72ch]">
          <p
            className="mb-2 text-balance text-[clamp(0.95rem,1.4vw,1.1rem)] italic leading-snug text-accent-soft"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            And quietly, this is also the thing I can&apos;t stop thinking about…
          </p>
          <h2 className="text-balance text-[clamp(1.85rem,3.8vw,2.85rem)] font-medium leading-[1.05] tracking-[-0.03em]">
            Two billion more mouths.{" "}
            <span
              className="italic font-normal text-accent"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              The same amount of land.
            </span>
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          <div
            aria-hidden={beat < 0}
            className="neu-raised rounded-2xl px-4 py-6"
          >
            <p
              className="font-medium leading-none tracking-[-0.04em] text-accent count-up"
              style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)" }}
            >
              +2B
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
              People by 2084
            </p>
            <p className="mt-2 text-[12.5px] leading-snug text-foreground/80">
              UN-mid projection. We have to feed them on roughly the same arable land we have today,
              without clearing more forest.
            </p>
          </div>

          <div
            aria-hidden={beat < 1}
            className={`neu-lit rounded-2xl px-4 py-6 transition-all duration-500 ${
              beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
            }`}
          >
            <p
              className="font-medium leading-none tracking-[-0.04em] text-accent count-up"
              style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)" }}
            >
              +20%
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
              Yield, plausibly
            </p>
            <p className="mt-2 text-[12.5px] leading-snug text-foreground">
              What an honest, per-plant agentic system could squeeze out of the same acre. Not
              promised. Tangibly possible. That alone reframes a generational problem.
            </p>
          </div>

          <div
            aria-hidden={beat < 2}
            className={`neu-sage rounded-2xl px-4 py-6 transition-all duration-500 ${
              beat >= 2 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
            }`}
          >
            <p
              className="font-medium leading-none tracking-[-0.04em] text-accent-soft count-up"
              style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)" }}
            >
              0
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
              New land cleared
            </p>
            <p className="mt-2 text-[12.5px] leading-snug text-foreground/85">
              The honest answer is efficiency, not expansion. Same forests, healthier soil, more
              food per acre. The land doesn&apos;t get bigger. The brain on it does.
            </p>
          </div>
        </div>

        <p
          className={`max-w-[68ch] text-balance text-[clamp(1.1rem,2vw,1.5rem)] italic leading-snug text-accent transition-opacity duration-500 ${
            beat >= 3 ? "opacity-100" : "opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 3}
        >
          Get this right, and the world notices. That&apos;s the kind of company I want to build.
        </p>
      </div>
    </Stage>
  );
}
