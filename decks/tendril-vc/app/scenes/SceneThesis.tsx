"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 2 — the thesis. Three differentiators land on beat 0; the shape
// (a swarm of small chemical-free robots) lands as the beat-1 pull-quote.

const TRAITS = [
  {
    label: "Cohesive · crop-agnostic",
    body: "One general-purpose system for the daily work and the season-long plan. Not single-task gadgets. Not one-crop bets.",
  },
  {
    label: "Agentic",
    body: "It perceives, remembers, decides, and acts. The field runs on a loop, not a calendar.",
  },
  {
    label: "Built with the grower",
    body: "For the small family farms that are most of US agriculture, co-developed with the people who work the land.",
  },
];

export default function SceneThesis({ beat }: SceneProps) {
  return (
    <Stage eyebrow="01 · The thesis">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-8 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          One cohesive system for the whole field.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Any crop.
          </span>
        </h2>

        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {TRAITS.map((t) => (
            <li key={t.label} className="neu-raised rounded-2xl px-5 py-6 text-left">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent-soft">
                {t.label}
              </p>
              <p className="mt-3 text-[13.5px] leading-snug text-foreground/85">{t.body}</p>
            </li>
          ))}
        </ul>

        <p
          className={`max-w-[52ch] text-balance text-[clamp(1.1rem,2vw,1.5rem)] italic leading-snug text-accent-soft transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 1}
        >
          A swarm of small, modular, chemical-free robots. The chemical treadmill is what we
          replace.
        </p>
      </div>
    </Stage>
  );
}
