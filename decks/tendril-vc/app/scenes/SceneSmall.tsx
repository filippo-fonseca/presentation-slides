"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 9 — small and modular. The microreactor framing (resonates with Also's
// Radiant / Kaleidos). Traits on beat 0, the cost contrast on beat 1.

const TRAITS = [
  { label: "Mass-manufacturable", body: "Built in volume, not welded once. Units, not capital projects." },
  { label: "Modular", body: "Snap in a weeder, a scout, a disease arm. One chassis, many jobs." },
  { label: "Affordable", body: "Priced on the acre tended. Zero grower capex." },
];

export default function SceneSmall({ beat }: SceneProps) {
  return (
    <Stage eyebrow="07 · Small and modular">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          Small{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            and modular.
          </span>
        </h2>

        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {TRAITS.map((t) => (
            <li key={t.label} className="neu-raised rounded-2xl px-5 py-6 text-left">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent-soft">
                {t.label}
              </p>
              <p className="mt-2 text-[13px] leading-snug text-foreground/85">{t.body}</p>
            </li>
          ))}
        </ul>

        <div
          className={`flex max-w-[70ch] flex-col gap-3 transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          <p className="neu-inset rounded-2xl px-5 py-4 text-[13.5px] leading-relaxed text-foreground/80">
            A Deere row-crop tractor runs <span className="text-foreground">$500-600K</span>, plus
            roughly <span className="text-foreground">$50K and annual subscriptions</span> just to
            switch on autonomy, and still no agentic farm OS. A Carbon LaserWeeder is{" "}
            <span className="text-foreground">$600K-$1.6M</span> and only weeds. We are one of many
            small units, priced on the acre.
          </p>
          <p
            className="text-[clamp(1rem,1.8vw,1.3rem)] italic leading-snug text-accent-soft"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Small, mass-manufacturable, and modular
            <br />
            beats big and centralized.
          </p>
        </div>
      </div>
    </Stage>
  );
}
