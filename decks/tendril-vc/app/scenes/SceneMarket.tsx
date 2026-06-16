"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 12 — who we build with. Market sized qualitatively-but-specifically
// (no fake bottom-up TAM in a teaser). Stats on beat 0, the reachability line
// on beat 1.

const STATS = [
  { value: "~96%", label: "Family-owned" },
  { value: "~1.9M", label: "US farms" },
  { value: "86%", label: "Small" },
];

export default function SceneMarket({ beat }: SceneProps) {
  return (
    <Stage eyebrow="11 · Who we build with">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-8 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          Built{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            with and for
          </span>{" "}
          the small family farms that are most of US agriculture.
        </h2>

        <ul className="grid w-full max-w-3xl grid-cols-3 gap-4">
          {STATS.map((s) => (
            <li key={s.label} className="neu-raised rounded-2xl px-4 py-6">
              <p
                className="font-medium leading-none tracking-[-0.04em] text-accent count-up"
                style={{ fontSize: "clamp(2rem,4.5vw,3.4rem)" }}
              >
                {s.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/60">
                {s.label}
              </p>
            </li>
          ))}
        </ul>

        <p className="max-w-[60ch] text-balance text-[14px] leading-relaxed text-foreground/80">
          Crop-agnostic means every one of them is addressable, not one crop&apos;s budget.
        </p>

        <p
          className={`max-w-[48ch] text-balance text-[clamp(1.1rem,2vw,1.5rem)] italic leading-snug text-accent-soft transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 1}
        >
          Reachable, squeezed, and underserved: no procurement, no dealer gate.
        </p>
      </div>
    </Stage>
  );
}
