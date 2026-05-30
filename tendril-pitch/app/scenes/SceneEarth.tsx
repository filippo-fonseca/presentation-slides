"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene — Environmental case. The same advantages that make us defensible
// also make us greener. This is one of our core missions, not a side effect.

const PILLARS = [
  {
    label: "Less energy",
    body: "Small, electric, modular units replace diesel iron. Per acre treated, orders of magnitude less fuel and emissions.",
  },
  {
    label: "Fewer chemicals",
    body: "Mechanical, chemical-free weeding by design. The same idea Deere is selling on drift and runoff, taken further: no spray at all in v1.",
  },
  {
    label: "Healthier soil",
    body: "Lighter machines compact the soil less. Per-plant action preserves soil structure and the microbial life the next harvest depends on.",
  },
];

export default function SceneEarth({ beat }: SceneProps) {
  return (
    <Stage eyebrow="16 · The environmental case">
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-7 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 glow-sage blur-3xl"
        />

        <div className="mx-auto max-w-[72ch]">
          <p
            className="mb-2 text-balance text-[clamp(0.95rem,1.4vw,1.1rem)] italic leading-snug text-accent-soft"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            And I want to be clear about something we&apos;ve been understating…
          </p>
          <h2 className="text-balance text-[clamp(1.85rem,3.8vw,2.85rem)] font-medium leading-[1.05] tracking-[-0.03em]">
            This is{" "}
            <span
              className="italic font-normal text-accent-soft"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              better for the land
            </span>{" "}
            <span className="text-foreground/65">we work on.</span>
          </h2>
        </div>

        <p className="max-w-[68ch] text-balance text-[14.5px] leading-relaxed text-foreground/85">
          The same advantages that make us defensible also make us greener. It&apos;s not a
          marketing layer. It&apos;s a core part of why I want to build this.
        </p>

        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {PILLARS.map((p, i) => {
            const visible = beat >= i;
            return (
              <li
                key={p.label}
                aria-hidden={!visible}
                className={`neu-sage rounded-2xl px-4 py-5 text-left transition-all duration-500 ${
                  visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-soft">
                  {String(i + 1).padStart(2, "0")} · {p.label}
                </p>
                <p className="mt-2 text-[13px] leading-snug text-foreground/85">{p.body}</p>
              </li>
            );
          })}
        </ul>

        <p
          className={`max-w-[60ch] text-balance text-[clamp(1.1rem,2vw,1.45rem)] italic leading-snug text-accent transition-opacity duration-500 ${
            beat >= 3 ? "opacity-100" : "opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 3}
        >
          The same fight as the chemical treadmill. Just told from the land&apos;s side.
        </p>
      </div>
    </Stage>
  );
}
