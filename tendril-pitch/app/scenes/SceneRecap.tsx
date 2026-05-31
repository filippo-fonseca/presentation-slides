"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Recap — the whole deck in one frame. Six columns of a story arc with the
// supporting bullets densely packed under each. Built to talk over.

type Phase = {
  label: string;
  title: string;
  bullets: string[];
  /** Visual tone for the column. */
  tone: "muted" | "copper" | "lit" | "sage";
};

const PHASES: Phase[] = [
  {
    label: "01 · Problem",
    title: "Chemical treadmill",
    bullets: [
      "548 herbicide-resistant weeds",
      "0 new modes of action since '80s",
      "50–70% labor cost · ~2% automated",
      "Iron: $200–300K/yr maintenance",
    ],
    tone: "muted",
  },
  {
    label: "02 · Brain",
    title: "Ocura, repointed",
    bullets: [
      "Persistent spatial memory",
      "Notice-first proactivity",
      "Same intelligence layer",
      "Multi-year head start",
    ],
    tone: "copper",
  },
  {
    label: "03 · Product",
    title: "Agentic loop",
    bullets: [
      "Perceive · Remember · Decide · Act",
      "Per-plant + whole-field vSLAM",
      "Swarm cross-validation",
      "Small, modular, chemical-free v1",
    ],
    tone: "lit",
  },
  {
    label: "04 · Market",
    title: "Family farms",
    bullets: [
      "96% family-owned (1.9M of them)",
      "Reachable · squeezed · aligned",
      "Matt Griggs: $1.8M rev → $92K / −$300K",
      "We call, we don't pitch",
    ],
    tone: "sage",
  },
  {
    label: "05 · Model",
    title: "RaaS + dataset",
    bullets: [
      "Per acre tended, no grower capex",
      "Free design-partner pilots",
      "Memory compounds = moat",
      "Dataset itself is a revenue line",
    ],
    tone: "copper",
  },
  {
    label: "06 · Vision",
    title: "Bigger picture",
    bullets: [
      "+2B mouths by 2084",
      "Same arable land, 0 cleared",
      "+20% yield is plausible",
      "Better for the land, by design",
    ],
    tone: "lit",
  },
];

const TONE_CLASSES: Record<Phase["tone"], { surface: string; label: string }> = {
  muted:  { surface: "neu-raised-sm",            label: "text-foreground/55" },
  copper: { surface: "neu-raised-sm",            label: "text-accent-soft" },
  lit:    { surface: "neu-lit",                  label: "text-accent" },
  sage:   { surface: "neu-sage",                 label: "text-accent-soft" },
};

const HERO_STATS = [
  { value: "548",   label: "Resistant weeds" },
  { value: "0",     label: "New chemistry" },
  { value: "1.9M",  label: "Family farms" },
  { value: "$300M", label: "Deere paid for Blue River" },
  { value: "+2B",   label: "Mouths by 2084" },
  { value: "+20%",  label: "Yield plausible" },
];

export default function SceneRecap({ beat }: SceneProps) {
  return (
    <Stage eyebrow="26 · Recap">
      <div className="relative z-10 mx-auto flex w-full max-w-[88rem] flex-col gap-4">
        {/* Header */}
        <div className="mx-auto max-w-[80ch] text-center">
          <h2 className="text-balance text-[clamp(1.65rem,3.2vw,2.4rem)] font-medium leading-[1.05] tracking-[-0.025em]">
            All of it,{" "}
            <span
              className="italic font-normal text-accent"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              in one frame.
            </span>
          </h2>
          <p
            className="mx-auto mt-2 max-w-[64ch] text-balance text-[clamp(0.95rem,1.4vw,1.1rem)] italic leading-snug text-accent-soft"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Same brain as Ocura, repointed at the most economically rational market on earth.
          </p>
        </div>

        {/* Story arc — 6 columns with arrows between */}
        <div className="relative">
          <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-6">
            {PHASES.map((p, i) => {
              const meta = TONE_CLASSES[p.tone];
              return (
                <li key={p.label} className="relative">
                  <div className={`${meta.surface} relative h-full rounded-xl px-3 py-3.5`}>
                    <p className={`font-mono text-[9.5px] uppercase tracking-[0.22em] ${meta.label}`}>
                      {p.label}
                    </p>
                    <p className="mt-1.5 text-[clamp(0.95rem,1.4vw,1.1rem)] font-medium leading-tight tracking-[-0.02em] text-foreground">
                      {p.title}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {p.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2 text-[11.5px] leading-snug text-foreground/80"
                        >
                          <span
                            aria-hidden
                            className="mt-1.5 size-1 shrink-0 rounded-full bg-foreground/50"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow to the next column (desktop only) */}
                  {i < PHASES.length - 1 && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-[7px] top-1/2 hidden -translate-y-1/2 text-accent/70 lg:block"
                    >
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path
                          d="M0 5 H 12 M 8 1 L 12 5 L 8 9"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>

        {/* Hero stats strip */}
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
          {HERO_STATS.map((s) => (
            <div
              key={s.label}
              className="neu-raised-sm rounded-xl px-3 py-3 text-center"
            >
              <p
                className="font-medium leading-none tracking-[-0.04em] text-accent count-up"
                style={{ fontSize: "clamp(1.2rem,2.3vw,1.85rem)" }}
              >
                {s.value}
              </p>
              <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/65">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom kicker — Why us, condensed */}
        <div
          aria-hidden={beat < 1}
          className={`neu-lit mx-auto w-full max-w-[80ch] rounded-2xl px-5 py-4 text-center transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
            Why us
          </p>
          <p
            className="mx-auto mt-2 max-w-[72ch] text-balance text-[clamp(1rem,1.65vw,1.25rem)] italic leading-snug text-foreground"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Brain we already built · swarm + agentic, no one else is shaped like this ·
            built with Yale engineers focused on food security and chemical-free farming ·
            and a market that pays for ROI today.
          </p>
        </div>
      </div>
    </Stage>
  );
}
