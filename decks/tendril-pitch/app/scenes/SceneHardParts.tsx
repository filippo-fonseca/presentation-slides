"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 21 — The hard parts (honest). Six risks, categorized by type so the
// visual mix doesn't read as a wall of identical cards.

type RiskKind = "market" | "execution" | "team";

const RISKS: Array<{ label: string; body: string; kind: RiskKind }> = [
  {
    label: "Commodity margins",
    body: "Thin budgets + John Deere if we chase row crops.",
    kind: "market",
  },
  {
    label: "Specialty market size",
    body: "Higher value per acre, but a more fragmented market.",
    kind: "market",
  },
  {
    label: "Seasonal sales cycle",
    body: "Roughly one buying window per year per grower.",
    kind: "market",
  },
  {
    label: "UV-C power physics",
    body: "Real, but power-hungry. Deliberately a later phase.",
    kind: "execution",
  },
  {
    label: "Hardware is capital-heavy",
    body: "Fleets cost money. RaaS helps but doesn't erase it.",
    kind: "execution",
  },
  {
    label: "We're not agronomists",
    body: "So we embed with farm partners, and one of us goes deep on the crop.",
    kind: "team",
  },
];

const KIND_META: Record<RiskKind, { surface: string; label: string; labelTone: string }> = {
  market:    { surface: "neu-sage",      label: "Market",    labelTone: "text-accent-soft" },
  execution: { surface: "neu-raised-sm", label: "Execution", labelTone: "text-foreground/55" },
  team:      { surface: "neu-lit",       label: "Team",      labelTone: "text-accent" },
};

export default function SceneHardParts({ beat }: SceneProps) {
  return (
    <Stage eyebrow="21 · The hard parts (honest)">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center">
        <div className="mx-auto max-w-[72ch]">
          <p
            className="mb-2 text-balance text-[clamp(0.95rem,1.4vw,1.1rem)] italic leading-snug text-accent-soft"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            I&apos;d rather put every risk on one slide than have you catch me hiding one later…
          </p>
          <h2 className="text-balance text-[clamp(1.8rem,3.6vw,2.8rem)] font-medium leading-[1.05] tracking-[-0.03em]">
            What we&apos;d{" "}
            <span
              className="italic font-normal text-accent"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              have to get right.
            </span>
          </h2>
        </div>

        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {RISKS.map((r, i) => {
            const visible = beat >= i;
            const meta = KIND_META[r.kind];
            return (
              <li
                key={r.label}
                aria-hidden={!visible}
                className={`${meta.surface} rounded-2xl px-4 py-4 text-left transition-all duration-500 ${
                  visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`font-mono text-[9.5px] uppercase tracking-[0.22em] ${meta.labelTone}`}>
                    {meta.label}
                  </span>
                </div>
                <p className="mt-2 text-[clamp(1rem,1.5vw,1.15rem)] font-medium leading-tight tracking-[-0.02em] text-foreground">
                  {r.label}
                </p>
                <p className="mt-1.5 text-[12.5px] leading-snug text-foreground/80">{r.body}</p>
              </li>
            );
          })}
        </ul>

        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/55">
          <span className="text-accent-soft">Market</span>
          <span className="mx-2 text-foreground/35">·</span>
          <span className="text-foreground/65">Execution</span>
          <span className="mx-2 text-foreground/35">·</span>
          <span className="text-accent">Team</span>
        </p>
      </div>
    </Stage>
  );
}
