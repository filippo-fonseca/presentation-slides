"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 11 — the moat. Four compounding advantages on beat 0; the pull-quote
// on beat 1.

const POINTS = [
  { label: "Persistent field memory", body: "The field is mapped once and remembered, season after season." },
  { label: "A compounding dataset", body: "3D, per-plant, multi-season. It deepens with every pass." },
  { label: "Switching cost by outcome", body: "Leaving means losing the field's own history." },
  { label: "The data is a revenue line", body: "Not just defensibility: the record itself is a product." },
];

export default function SceneMoat({ beat }: SceneProps) {
  return (
    <Stage eyebrow="10 · The moat">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          Hardware gets copied.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            A field that remembers does not.
          </span>
        </h2>

        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {POINTS.map((p) => (
            <li key={p.label} className="neu-raised rounded-2xl px-5 py-5 text-left">
              <p className="text-[14px] font-medium leading-tight text-foreground">{p.label}</p>
              <p className="mt-1.5 text-[12.5px] leading-snug text-foreground/70">{p.body}</p>
            </li>
          ))}
        </ul>

        <p
          className={`max-w-[48ch] text-balance text-[clamp(1.2rem,2.2vw,1.7rem)] italic leading-snug text-accent transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 1}
        >
          The robots are the hands. The memory is the company.
        </p>
      </div>
    </Stage>
  );
}
