"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 13 — business model, brief. RaaS on beat 0; the cost it attacks on
// beat 1.

const POINTS = [
  { label: "No grower capex", body: "We own the fleet. They never buy a machine." },
  { label: "Priced per acre tended", body: "Pay for the work done, on the land worked." },
  { label: "Recurring by construction", body: "The season repeats; so does the contract." },
  { label: "Data flywheel", body: "Every acre tended sharpens the next one." },
];

export default function SceneModel({ beat }: SceneProps) {
  return (
    <Stage eyebrow="12 · Business model">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          Robotics-as-a-Service.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            We own the fleet, the uptime, and the data.
          </span>
        </h2>

        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p) => (
            <li key={p.label} className="neu-raised-sm rounded-2xl px-4 py-5 text-left">
              <p className="text-[13.5px] font-medium leading-tight text-foreground">{p.label}</p>
              <p className="mt-1.5 text-[12px] leading-snug text-foreground/70">{p.body}</p>
            </li>
          ))}
        </ul>

        <p
          className={`max-w-[58ch] text-balance text-[clamp(1.05rem,1.9vw,1.4rem)] leading-snug text-foreground transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          It attacks the farm&apos;s single biggest line: the iron.{" "}
          <span className="text-foreground/60">A tractor runs ~$450K, a combine ~$1M.</span>
        </p>
      </div>
    </Stage>
  );
}
