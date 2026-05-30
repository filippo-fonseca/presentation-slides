"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 5 — Why now (and why it's big).

const BEATS = [
  {
    label: "YC named it",
    body: "Garry Tan's Summer 2026 request: low-pesticide AI ag, a “generational” opportunity.",
  },
  {
    label: "AI got cheap",
    body: "Edge vision and sensing finally make per-plant action affordable.",
  },
  {
    label: "Robotics stayed funded",
    body: "Farm robotics held up straight through the broader agtech downturn.",
  },
  {
    label: "Rules tightening",
    body: "Regulators squeeze pesticides harder every year.",
  },
];

export default function SceneWhyNow({ beat }: SceneProps) {
  return (
    <Stage eyebrow="04 · Why now (and why it's big)">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          The doors{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            all opened at once.
          </span>
        </h2>

        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {BEATS.map((b, i) => {
            const visible = beat >= i;
            return (
              <li
                key={b.label}
                aria-hidden={!visible}
                className={`neu-raised-sm rounded-2xl px-4 py-5 text-left transition-all duration-500 ${
                  visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-soft">
                  {String(i + 1).padStart(2, "0")} · {b.label}
                </p>
                <p className="mt-2 text-[13.5px] leading-snug text-foreground/85">{b.body}</p>
              </li>
            );
          })}
        </ul>

        <p
          className={`max-w-[60ch] text-balance text-[clamp(1.1rem,1.9vw,1.4rem)] italic leading-snug text-accent transition-opacity duration-500 ${
            beat >= 3 ? "opacity-100" : "opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 3}
        >
          And our market isn&apos;t one crop&apos;s weed budget. It&apos;s the entire
          management spend of every acre we run.
        </p>
      </div>
    </Stage>
  );
}
