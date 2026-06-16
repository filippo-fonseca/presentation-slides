"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 3 — the problem, made literal. Three stat cards + the mechanism line
// on beat 0; the anti-entropy pull-quote on beat 1.

const STATS = [
  { value: "548", label: "Resistant weeds", body: "documented herbicide-resistant cases, and climbing." },
  { value: "0", label: "New modes of action", body: "since the 1980s, with the chemistry pipeline now dry." },
  { value: "50-70%", label: "Of specialty-crop cost", body: "is labor, and under 2% of farm tasks are automated." },
];

export default function SceneProblem({ beat }: SceneProps) {
  return (
    <Stage eyebrow="02 · The problem">
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          Chemical farming{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            amplifies
          </span>{" "}
          the decay it&apos;s meant to fight.
        </h2>

        <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map((s) => (
            <li key={s.label} className="neu-raised rounded-2xl px-5 py-7 text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
                {s.label}
              </p>
              <p
                className="mt-3 font-medium leading-none tracking-[-0.04em] text-accent count-up"
                style={{ fontSize: "clamp(2.6rem,5.5vw,4.6rem)" }}
              >
                {s.value}
              </p>
              <p className="mt-3 text-[13px] leading-snug text-foreground/80">{s.body}</p>
            </li>
          ))}
        </ul>

        <p className="max-w-[64ch] text-balance text-[clamp(1rem,1.7vw,1.25rem)] leading-relaxed text-foreground/85">
          Growers spray more every season, on a calendar, across acres{" "}
          <span className="font-semibold text-foreground">no one ever sees plant by plant</span>.
          Resistance compounds while soil thins and inputs keep climbing.
        </p>

        <p
          className={`max-w-[40ch] text-balance text-[clamp(1.2rem,2.2vw,1.7rem)] italic leading-snug text-accent transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 1}
        >
          That is decay, amplified.
        </p>
      </div>
    </Stage>
  );
}
