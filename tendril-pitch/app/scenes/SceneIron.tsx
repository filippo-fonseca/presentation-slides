"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 15 — Their biggest cost. Four stat cards + an answer block.

const STATS = [
  {
    value: "$200–300K",
    label: "Repairs & maintenance",
    body: "Spent every year: his single biggest line item.",
  },
  {
    value: "$450K",
    label: "New large tractor",
    body: "List price for replacement iron.",
  },
  {
    value: "~$1M",
    label: "New combine harvester",
    body: "One pass per crop, per season.",
  },
  {
    value: "$1.2M",
    label: "Corn picker",
    body: "Used roughly two weeks a year.",
  },
];

const ANSWERS = [
  "No machine to buy: they rent an outcome, not $450K of iron.",
  "Less big, single-purpose iron sitting idle 50 weeks a year.",
  "Fewer giant machines to maintain, and we own the upkeep.",
];

export default function SceneIron({ beat }: SceneProps) {
  return (
    <Stage eyebrow="14 · Their biggest cost">
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-6 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          The most expensive thing on a farm?{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The iron.
          </span>
        </h2>

        <ul className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
          {STATS.map((s, i) => {
            const visible = beat >= i;
            return (
              <li
                key={s.label}
                aria-hidden={!visible}
                className={`neu-raised rounded-2xl px-4 py-5 text-left transition-all duration-500 ${
                  visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
                  {s.label}
                </p>
                <p
                  className="mt-3 font-medium leading-none tracking-[-0.04em] text-accent count-up"
                  style={{ fontSize: "clamp(1.8rem,3.4vw,2.6rem)" }}
                >
                  {s.value}
                </p>
                <p className="mt-3 text-[12.5px] leading-snug text-foreground/80">{s.body}</p>
              </li>
            );
          })}
        </ul>

        <a
          href="https://www.youtube.com/watch?v=D4fDM2Jc4cA"
          target="_blank"
          rel="noopener noreferrer"
          data-no-advance
          className="neu-raised-sm group inline-flex items-center gap-3 rounded-full px-4 py-2.5 text-[13.5px] text-foreground/90 transition-colors hover:text-foreground"
        >
          <span
            aria-hidden
            className="inline-flex h-6 w-9 items-center justify-center rounded-md"
            style={{ background: "#FF0000" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span>
            Real numbers from{" "}
            <span className="text-accent-soft">Matt Griggs&apos;s WIRED interview</span>{" "}
            <span className="text-foreground/55">(2025) · watch on YouTube</span>
          </span>
        </a>

        <div
          aria-hidden={beat < 4}
          className={`neu-lit w-full rounded-2xl p-5 text-left transition-all duration-500 ${
            beat >= 4 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
            What Tendril does to that bill
          </p>
          <ul className="mt-3 space-y-2">
            {ANSWERS.map((a, i) => (
              <li key={i} className="flex gap-3 text-[13.5px] leading-snug text-foreground">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <p
          className={`max-w-[64ch] text-balance text-[clamp(1.1rem,2vw,1.5rem)] italic leading-snug text-accent-soft transition-opacity duration-500 ${
            beat >= 4 ? "opacity-100" : "opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 4}
        >
          Imagine even a 20% improvement (and tangibly, we can offer more later).
          Attack even a slice of a farm&apos;s single biggest cost, and we&apos;re not a
          nice-to-have. We&apos;re essential.
        </p>
      </div>
    </Stage>
  );
}
