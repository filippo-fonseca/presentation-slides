"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 23 — The ask. Four concrete moves.

const ASKS = [
  {
    label: "Pick the beachhead crop",
    body: "The decision everything else cascades from.",
  },
  {
    label: "Land 2–3 design-partner farms",
    body: "Co-develop with family farms; constant feedback.",
  },
  {
    label: "Become the experts",
    body: "One of us goes deep on the crop and on farming.",
  },
  {
    label: "Scope v1 + split roles",
    body: "Smallest prototype that proves hands + brain.",
  },
];

export default function SceneAsk({ beat }: SceneProps) {
  return (
    <Stage eyebrow="23 · The ask">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          What I want{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            from tonight.
          </span>
        </h2>

        <p
          className="max-w-[58ch] text-balance text-[clamp(1.1rem,1.9vw,1.4rem)] italic leading-snug text-accent-soft"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Let&apos;s commit to exploring this seriously, together.
        </p>

        <ol className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {ASKS.map((a, i) => {
            const visible = beat >= i;
            return (
              <li
                key={a.label}
                aria-hidden={!visible}
                className={`neu-raised-sm rounded-2xl px-5 py-5 text-left transition-all duration-500 ${
                  visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-[clamp(1.05rem,1.6vw,1.2rem)] font-medium leading-tight tracking-[-0.02em] text-foreground">
                  {a.label}
                </p>
                <p className="mt-1.5 text-[13.5px] leading-snug text-foreground/80">{a.body}</p>
              </li>
            );
          })}
        </ol>

        <p className="mx-auto max-w-[68ch] text-balance text-[12.5px] leading-snug text-foreground/65">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
            On allies
          </span>
          <span className="ml-2">
            Someone worth pulling in on the environmental + energy side: Mariia Hodovanets
            (Yale &apos;28, BA Economics &amp; Environmental Engineering, MIT Energy Initiative).
            Met through the Crews dinner. Worth a coffee.
          </span>
        </p>
      </div>
    </Stage>
  );
}
