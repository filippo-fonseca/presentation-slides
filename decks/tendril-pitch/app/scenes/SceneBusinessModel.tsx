"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 12 — Business model. Robotics-as-a-Service.

const BEATS = [
  {
    label: "No grower capex",
    body: "They subscribe to an outcome, not a machine.",
  },
  {
    label: "Per acre tended",
    body: "Pricing scales with the work actually done.",
  },
  {
    label: "Recurring revenue",
    body: "We run the fleet and guarantee uptime.",
  },
  {
    label: "Data flywheel",
    body: "Every acre makes the brain smarter.",
  },
];

export default function SceneBusinessModel({ beat }: SceneProps) {
  return (
    <Stage eyebrow="11 · Business model">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.03em]">
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Robotics-as-a-Service.
          </span>
        </h2>

        <p className="max-w-[60ch] text-balance text-[14.5px] leading-relaxed text-foreground/80">
          No six-figure machine for the grower to buy. We own the fleet, the uptime, and the data.
        </p>

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
      </div>
    </Stage>
  );
}
