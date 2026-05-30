"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 8 — The unfair advantage.

const PARALLELS = [
  {
    label: "Persistent spatial memory",
    ocura: "In Ocura, it remembers a user's patterns and day-to-day life (that was the idea).",
    field: "In a field, it remembers exactly where the weeds and disease keep returning.",
  },
  {
    label: "“Notice-first” proactivity",
    ocura: "In Ocura, it flags the approaching cyclist.",
    field: "In a field, it catches the outbreak before it spreads.",
  },
];

export default function SceneUnfair({ beat }: SceneProps) {
  return (
    <Stage eyebrow="07 · The unfair advantage">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-8 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          This is literally Ocura&apos;s{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            intelligence layer,
          </span>{" "}
          only repointed.
        </h2>

        <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {PARALLELS.map((p, i) => {
            const visible = beat >= i;
            return (
              <li
                key={p.label}
                aria-hidden={!visible}
                className={`neu-raised rounded-2xl p-5 text-left transition-all duration-500 ${
                  visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-soft">
                  {p.label}
                </p>
                <p className="mt-3 text-[13.5px] leading-snug text-foreground/70">
                  <span className="text-foreground/55">Ocura · </span>{p.ocura}
                </p>
                <p className="mt-2 text-[14px] leading-snug text-foreground">
                  <span className="text-accent-soft">Field · </span>{p.field}
                </p>
              </li>
            );
          })}
        </ul>

        <p
          className={`max-w-[50ch] text-balance text-[clamp(1.15rem,2.1vw,1.55rem)] italic leading-snug text-accent transition-opacity duration-500 ${
            beat >= 2 ? "opacity-100" : "opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 2}
        >
          A hardware company would have to build the brain from scratch. We start from it.
        </p>
      </div>
    </Stage>
  );
}
