"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 4 — The problem.
// Three big stat beats (huge copper numerals).

const STATS = [
  {
    value: "548",
    label: "Herbicide-resistant weeds",
    body: "Documented cases worldwide, and climbing.",
  },
  {
    value: "0",
    label: "New modes of action",
    body: "Since the 1980s. The chemistry pipeline is dry.",
  },
  {
    value: "50–70%",
    label: "Of specialty-crop cost",
    body: "Is labor. Under 2% of farm tasks are automated.",
  },
];

export default function SceneProblem({ beat }: SceneProps) {
  return (
    <Stage eyebrow="03 · The problem">
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-8 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          Farming is stuck on a{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            chemical treadmill
          </span>{" "}
          , and it&apos;s breaking down.
        </h2>

        <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map((s, i) => {
            const visible = beat >= 0; // all three land together on this scene
            return (
              <li
                key={s.label}
                aria-hidden={!visible}
                className={`neu-raised rounded-2xl px-5 py-7 text-left transition-all duration-500 ${
                  visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
                  {s.label}
                </p>
                <p
                  className="mt-3 font-medium leading-none tracking-[-0.04em] text-accent count-up"
                  style={{ fontSize: "clamp(3rem,6vw,5rem)" }}
                >
                  {s.value}
                </p>
                <p className="mt-3 text-[13.5px] leading-snug text-foreground/80">{s.body}</p>
              </li>
            );
          })}
        </ul>

        <p
          className={`max-w-[68ch] text-balance text-[14.5px] leading-relaxed text-foreground/85 transition-opacity duration-500 ${
            beat >= 1 ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          Growers spray more for worse results, can&apos;t find labor, and react blind
          across thousands of acres.
        </p>

        <p
          className={`max-w-[44ch] text-balance text-[clamp(1.1rem,2vw,1.5rem)] italic leading-snug text-accent-soft transition-opacity duration-500 ${
            beat >= 2 ? "opacity-100" : "opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 2}
        >
          A treadmill, and it&apos;s breaking.
        </p>
      </div>
    </Stage>
  );
}
