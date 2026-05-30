"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 22 — Why us. The rare overlap: huge market × our capability × real conviction.

const PILLARS = [
  { label: "Huge market", glyph: "✦" },
  { label: "Our capability", glyph: "✦" },
  { label: "Real conviction", glyph: "✦" },
];

export default function SceneWhyUs({ beat }: SceneProps) {
  return (
    <Stage eyebrow="22 · Why us">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-10 text-center">
        <h2 className="text-balance text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.03em]">
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The rare overlap.
          </span>
        </h2>

        <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:items-stretch sm:justify-center sm:gap-2">
          {PILLARS.map((p, i) => {
            const visible = beat >= 0;
            return (
              <div key={p.label} className="flex items-center gap-2 sm:gap-3">
                <div
                  aria-hidden={!visible}
                  className={`neu-lit w-56 rounded-2xl px-5 py-7 text-center transition-all duration-500 ${
                    visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                  }`}
                >
                  <p className="text-[clamp(1.25rem,2.2vw,1.55rem)] font-medium leading-tight tracking-[-0.02em] text-foreground">
                    {p.label}
                  </p>
                </div>
                {i < PILLARS.length - 1 && (
                  <span className="font-mono text-[18px] text-accent-soft sm:text-[22px]" aria-hidden>
                    ×
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <p
          className={`max-w-[60ch] text-balance text-[clamp(1.1rem,2vw,1.5rem)] italic leading-snug text-accent-soft transition-opacity duration-500 ${
            beat >= 1 ? "opacity-100" : "opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 1}
        >
          A hardware company never had to build the brain. We start from it, and give it hands and legs.
        </p>
      </div>
    </Stage>
  );
}
