"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 2 — Where we already are.
// Lede + four reveal beats (Perceive · Remember · Reason · Act), closing italic.

const BEATS = [
  { label: "Perceive",  body: "See and understand a messy physical scene in real time." },
  { label: "Remember",  body: "Build a persistent spatial map that lasts across sessions." },
  { label: "Reason",    body: "Decide what matters, and what to do about it." },
  { label: "Act",       body: "Take or recommend the right action, then learn." },
];

export default function SceneBrain({ beat }: SceneProps) {
  return (
    <Stage eyebrow="01 · Where we already are">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          We&apos;ve already built the hard part:{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            a brain.
          </span>
        </h2>

        <p className="max-w-[60ch] text-balance text-[14.5px] leading-relaxed text-foreground/80">
          Ocura and our MemER spatial-memory work proved we can build one system that does
          four things at once:
        </p>

        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
          className={`max-w-[52ch] text-balance text-[clamp(1.1rem,2vw,1.5rem)] italic leading-snug text-accent transition-opacity duration-500 ${
            beat >= 4 ? "opacity-100" : "opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 4}
        >
          That stack doesn&apos;t care whether it&apos;s looking at a living room, or a field.
        </p>
      </div>
    </Stage>
  );
}
