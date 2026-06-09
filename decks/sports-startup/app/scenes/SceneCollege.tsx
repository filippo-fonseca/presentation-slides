"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

const COLLEGE_CHIPS = ["Harvard–Yale football", "NCAA hockey", "Division III"];

const REASONS = [
  "The engine pays off whatever door opens first.",
  "Curling: a fast yes, plus real footage.",
  "College: the eyeballs.",
];

export default function SceneCollege({ beat }: SceneProps) {
  return (
    <Stage eyebrow="Track 03 · Why parallel">
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center">
        <h2
          className="text-balance font-serif font-medium leading-[1.05] tracking-[-0.015em]"
          style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
        >
          Go big, but{" "}
          <span className="italic text-accent-lift">skip the top.</span>
        </h2>

        {/* Beat 0 */}
        <div
          className={`flex max-w-[64ch] flex-col items-center gap-2 transition-all duration-500 ${
            beat >= 0 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          <p className="text-[15px] leading-relaxed text-foreground/85">
            NFL and NBA are billion-dollar rights with ESPN and NBC. We can't touch them yet.
          </p>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/55">
            Same pattern as curling · top tier locked, tier below open
          </p>
        </div>

        {/* Beat 1 — college chips */}
        <div
          className={`flex w-full flex-col items-center gap-3 transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          <p className="font-serif text-[17px] leading-snug text-foreground/90">
            Our open tier is <span className="italic text-accent-lift">college.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {COLLEGE_CHIPS.map((c) => (
              <span
                key={c}
                className="neu-raised-sm rounded-full px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/85"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/55">
            Helmet sports · easy form factor
          </p>
        </div>

        {/* Beat 2 — why all three */}
        <div
          className={`flex w-full flex-col items-center gap-3 transition-all duration-500 ${
            beat >= 2 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 2}
        >
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-lift">
            Why all three at once?
          </p>
          <ul className="grid w-full max-w-3xl grid-cols-1 gap-2 sm:grid-cols-3">
            {REASONS.map((r) => (
              <li key={r} className="neu-raised-sm rounded-xl px-3 py-3 text-left text-[12.5px] leading-snug text-foreground/85">
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-2 max-w-[58ch] font-serif italic text-[15px] leading-snug text-accent-lift">
            Two and three tell us which form factor to lock. We can be on many sports. That's the exciting part.
          </p>
        </div>
      </div>
    </Stage>
  );
}
