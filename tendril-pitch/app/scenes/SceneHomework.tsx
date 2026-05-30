"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 18 — We did our homework.
// Four farming stages with rich detail; we can touch all four, but we
// start at Crop Management (stage 3) where the pain and our edge are sharpest.

const STAGES = [
  {
    label: "Soil preparation",
    when: "Pre-season",
    body: "Till the earth to loosen it, manage weeds, and integrate organic matter or fertilizers for adequate nitrogen, phosphorus, and potassium.",
  },
  {
    label: "Planting & sowing",
    when: "Spring / optimal climate window",
    body: "Place seeds or seedlings at precise depths and spacing. Modern planters map fields by GPS down to the centimeter.",
  },
  {
    label: "Crop management",
    when: "Growing season",
    body: "Deliver consistent water, monitor pests and disease, and apply targeted interventions when needed. The maintenance phase.",
    here: true,
  },
  {
    label: "Harvesting",
    when: "Maturity peak",
    body: "Gather the crop at peak value. From labor-intensive hand-picking to combines that cut, thresh, and clean grain in a single pass.",
  },
];

export default function SceneHomework({ beat }: SceneProps) {
  return (
    <Stage eyebrow="18 · We did our homework">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-5">
        <div className="mx-auto max-w-[72ch] text-center">
          <p
            className="mb-2 text-balance text-[clamp(0.95rem,1.4vw,1.1rem)] italic leading-snug text-accent-soft"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            I did (too much) research on how farming and crops actually work this entire day…
          </p>
          <h2 className="text-balance text-[clamp(1.8rem,3.6vw,2.8rem)] font-medium leading-[1.05] tracking-[-0.03em]">
            Every crop runs on the{" "}
            <span
              className="italic font-normal text-accent"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              same four stages.
            </span>{" "}
            <span className="text-foreground/65">We can touch all four.</span>
          </h2>
        </div>

        <ol className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((s, i) => {
            const visible = beat >= 0;
            const isHere = !!s.here;
            const dimmed = beat >= 1 && !isHere;
            return (
              <li
                key={s.label}
                aria-hidden={!visible}
                className={`relative flex flex-col rounded-2xl px-4 py-5 text-left transition-all duration-500 ${
                  isHere ? "neu-lit" : "neu-raised-sm"
                } ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"} ${
                  dimmed ? "opacity-70" : ""
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {isHere && (
                  <span className="absolute -top-2.5 left-3 inline-flex items-center gap-1.5 rounded-full bg-background px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-accent">
                    <span className="size-1 rounded-full bg-accent shadow-[0_0_8px_rgba(229, 96, 44,0.8)]" />
                    We start here
                  </span>
                )}
                <p
                  className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
                    isHere ? "text-accent" : "text-accent-soft"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")} · {s.when}
                </p>
                <p className="mt-2 text-[clamp(1rem,1.5vw,1.15rem)] font-medium leading-tight tracking-[-0.02em] text-foreground">
                  {s.label}
                </p>
                <p className="mt-2 text-[12.5px] leading-snug text-foreground/80">{s.body}</p>
              </li>
            );
          })}
        </ol>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr]">
          {/* Why we start there — copper-lit, focal, "this is where we plant our flag" */}
          <div
            aria-hidden={beat < 2}
            className={`neu-lit relative rounded-xl px-4 py-3.5 transition-all duration-500 ${
              beat >= 2 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="inline-flex size-5 items-center justify-center rounded-full"
                style={{ background: "rgba(229, 96, 44,0.18)" }}
              >
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <circle cx="6" cy="6" r="5" stroke="#E5602C" strokeWidth="1.2" />
                  <circle cx="6" cy="6" r="1.6" fill="#E5602C" />
                </svg>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                Why we start there
              </span>
            </div>
            <p className="mt-2 text-[13px] leading-snug text-foreground">
              Crop management is the most painful and the most automatable, and it&apos;s exactly
              where our perception + memory edge is sharpest.
            </p>
          </div>

          {/* Where we expand — sage tint, lighter, "later horizons" */}
          <div
            aria-hidden={beat < 3}
            className={`neu-sage relative rounded-xl px-4 py-3.5 transition-all duration-500 ${
              beat >= 3 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="inline-flex size-5 items-center justify-center rounded-full"
                style={{ background: "rgba(181, 211, 61,0.20)" }}
              >
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M2 6 L10 6 M7 3 L10 6 L7 9" stroke="#B5D33D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
                Where we expand
              </span>
            </div>
            <p className="mt-2 text-[13px] leading-snug text-foreground/85">
              The same brain runs planting and soil prep next. Harvest is the hardest to automate,
              so it comes last.
            </p>
          </div>
        </div>
      </div>
    </Stage>
  );
}
