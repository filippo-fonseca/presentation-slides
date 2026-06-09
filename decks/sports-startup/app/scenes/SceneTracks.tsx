"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

const PILLARS = [
  {
    id: 0,
    num: "01",
    label: "Engine",
    role: "the heavy lift",
    body: "Build the sport-agnostic wireless core. Starts today, before anything sport-specific.",
  },
  {
    id: 1,
    num: "02",
    label: "Wedge",
    role: "start here",
    body: "A POV-perfect sport with an open door. Curling leads the list; squash, rowing, and fencing fit the same shape.",
  },
  {
    id: 2,
    num: "03",
    label: "Lighthouse",
    role: "get noticed",
    body: "Big sports through college, not the pro leagues. The visibility play.",
  },
];

export default function SceneTracks({ beat }: SceneProps) {
  return (
    <Stage eyebrow="03 · The plan">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 text-center">
        <h2
          className="text-balance font-serif font-medium leading-[1.05] tracking-[-0.015em]"
          style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
        >
          Three tracks,{" "}
          <span className="italic text-accent-lift">in parallel.</span>
        </h2>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {PILLARS.map((p) => {
            const shown = beat >= p.id;
            return (
              <div
                key={p.id}
                className={`neu-raised rounded-2xl px-6 py-7 text-left transition-all duration-500 ${
                  shown
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-2 opacity-0"
                }`}
                aria-hidden={!shown}
              >
                <div className="flex items-baseline justify-between">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-lift">
                    {p.num} · {p.label}
                  </p>
                  <p className="font-serif italic text-[12.5px] text-foreground/55">
                    {p.role}
                  </p>
                </div>
                <p className="mt-4 font-serif text-[16.5px] leading-snug text-foreground/90">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Stage>
  );
}
