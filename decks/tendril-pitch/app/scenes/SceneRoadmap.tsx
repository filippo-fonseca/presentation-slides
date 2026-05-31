"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 20 — Roadmap. Three phases; Phase 1 highlighted (now).

const PHASES = [
  {
    label: "Phase 1 · Now",
    title: "The core",
    body: "The OS + one small robot doing chemical-free weeding in one crop. Live field-health map from day one.",
    here: true,
  },
  {
    label: "Phase 2 · Expand",
    title: "Modalities & crops",
    body: "Same brain, same chassis, new snap-in tools. Add non-chemical UV-C disease treatment and more crops.",
  },
  {
    label: "Phase 3 · Platform",
    title: "The field OS",
    body: "Spot-treatment, fungicide, seeding: working in tandem across the fleet, running farms at scale.",
  },
];

export default function SceneRoadmap({ beat }: SceneProps) {
  return (
    <Stage eyebrow="20 · Roadmap">
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          Narrow now.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Inevitable later.
          </span>
        </h2>

        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {PHASES.map((p, i) => {
            const visible = beat >= i;
            return (
              <li
                key={p.label}
                aria-hidden={!visible}
                className={`${p.here ? "neu-lit" : "neu-raised-sm"} rounded-2xl px-5 py-6 text-left transition-all duration-500 ${
                  visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <p className={`font-mono text-[10.5px] uppercase tracking-[0.22em] ${p.here ? "text-accent" : "text-accent-soft"}`}>
                  {p.label}
                </p>
                <p className="mt-3 text-[clamp(1.05rem,1.7vw,1.25rem)] font-medium leading-tight tracking-[-0.02em] text-foreground">
                  {p.title}
                </p>
                <p className="mt-2 text-[13px] leading-snug text-foreground/80">{p.body}</p>
              </li>
            );
          })}
        </ul>

        <p className="max-w-[68ch] text-balance text-[14px] italic leading-snug text-accent-soft" style={{ fontFamily: "var(--font-fraunces)" }}>
          The constant across all three phases: the perception, memory, and agentic core.
        </p>
      </div>
    </Stage>
  );
}
