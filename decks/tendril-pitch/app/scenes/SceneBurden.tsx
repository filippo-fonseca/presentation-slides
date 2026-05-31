"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 17 — The knowledge burden.

const HATS = ["Agronomist", "Pathologist", "Mechanic", "Electrician", "…and more"];

export default function SceneBurden({ beat }: SceneProps) {
  return (
    <Stage eyebrow="17 · The knowledge burden">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          A grower already has to be{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            every kind of expert.
          </span>
        </h2>

        <blockquote className="neu-raised-sm w-full rounded-2xl px-6 py-5 text-left">
          <p
            className="text-balance text-[clamp(1.05rem,1.95vw,1.45rem)] italic leading-snug text-foreground/90"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            &ldquo;Beyond growing the food and fiber we all use, a farmer has to be an agronomist,
            a pathologist, a mechanic, sometimes even an electrician, carrying a huge base of
            knowledge just to succeed.&rdquo;
          </p>
          <footer className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/55">
            Paraphrased from Matt Griggs, WIRED (2025)
          </footer>
        </blockquote>

        <ul className="flex flex-wrap items-center justify-center gap-2">
          {HATS.map((h) => (
            <li
              key={h}
              className="rounded-full border border-line bg-foreground/5 px-3 py-1.5 text-[12px] text-foreground/75"
              style={{ borderColor: "rgba(181, 211, 61,0.28)" }}
            >
              {h}
            </li>
          ))}
        </ul>

        <div
          aria-hidden={beat < 1}
          className={`neu-lit w-full rounded-2xl p-5 text-left transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
            Tendril is the expertise, always on
          </p>
          <p className="mt-2 text-[14px] leading-snug text-foreground">
            Our agentic layer reads the field, spots the disease, flags the failing part, and turns
            it into a decision tailored to their farm. They run the operation. The system carries
            the specialties.
          </p>
        </div>

        <p
          className={`max-w-[52ch] text-balance text-[clamp(1.1rem,2vw,1.5rem)] italic leading-snug text-accent transition-opacity duration-500 ${
            beat >= 2 ? "opacity-100" : "opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 2}
        >
          We don&apos;t hand them another tool to master. The intelligence carries the load.
        </p>
      </div>
    </Stage>
  );
}
