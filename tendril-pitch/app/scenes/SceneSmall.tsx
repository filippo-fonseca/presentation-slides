"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";
import SwarmField from "../components/SwarmField";

// Scene 16 — Why small wins. Setup quote + three pillars + kicker.

const PILLARS = [
  {
    label: "No oversized loads",
    body: "Small, modular units; nothing enormous to creep down a public road.",
  },
  {
    label: "A swarm, not a monolith",
    body: "Scale by adding units; if one goes down, the field still gets covered.",
  },
  {
    label: "Gentle on the land",
    body: "Lighter machines mean less soil compaction, and they reach where big iron can't.",
  },
];

export default function SceneSmall({ beat }: SceneProps) {
  return (
    <Stage eyebrow="15 · Why small wins">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          Small isn&apos;t a compromise.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            It&apos;s the advantage.
          </span>
        </h2>

        <div className="neu-raised w-full rounded-2xl p-4 sm:p-5">
          <SwarmField height={220} />
        </div>

        <blockquote className="neu-raised-sm relative w-full rounded-2xl px-6 py-4 text-left">
          <p
            className="text-balance text-[clamp(1rem,1.85vw,1.35rem)] italic leading-snug text-foreground/90"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            &ldquo;The machines got enormous. The roads stayed the same.&rdquo;
          </p>
          <footer className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/55">
            Paraphrased from Matt Griggs, WIRED (2025), on moving giant equipment down
            increasingly busy public roads.
          </footer>
        </blockquote>

        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {PILLARS.map((p, i) => {
            const visible = beat >= i;
            return (
              <li
                key={p.label}
                aria-hidden={!visible}
                className={`neu-raised-sm rounded-2xl px-4 py-5 text-left transition-all duration-500 ${
                  visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-soft">
                  {String(i + 1).padStart(2, "0")} · {p.label}
                </p>
                <p className="mt-2 text-[13.5px] leading-snug text-foreground/85">{p.body}</p>
              </li>
            );
          })}
        </ul>

        <div
          aria-hidden={beat < 3}
          className={`flex w-full flex-col items-center gap-2 transition-opacity duration-500 ${
            beat >= 3 ? "opacity-100" : "opacity-0"
          }`}
        >
          <p
            className="max-w-[68ch] text-balance text-center text-[clamp(1.05rem,1.85vw,1.35rem)] italic leading-snug text-foreground/85"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Deere and Carbon are betting on bigger. Aigen went small, but built a single-task robot.
          </p>
          <p
            className="max-w-[60ch] text-balance text-center text-[clamp(1.15rem,2vw,1.5rem)] italic leading-snug text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            We&apos;re the only ones building small{" "}
            <span className="text-accent-soft">+</span> agentic{" "}
            <span className="text-accent-soft">+</span> a full farm OS.
          </p>
        </div>
      </div>
    </Stage>
  );
}
