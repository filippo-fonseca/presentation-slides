"use client";

import Image from "next/image";
import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Beat 0: Griggs accident — personal story + photo
// Beat 1: Industry-wide stats + the closing argument

const STATS = [
  {
    value: "5×",
    label: "More dangerous than average",
    body: "Agriculture's fatality rate is 18.6 per 100,000 workers — five times higher than the all-industry average. Source: CDC/BLS 2022.",
  },
  {
    value: "36%",
    label: "Of farm deaths involve tractors",
    body: "Roughly 130 tractor-related deaths per year. The machine that does the most work kills the most people. Source: CDC/NIOSH.",
  },
  {
    value: "100K+",
    label: "Non-fatal injuries per year",
    body: "Crop and livestock workers suffer non-fatal injuries at 2× the rate of all private-sector workers. Source: Bureau of Labor Statistics.",
  },
];

export default function SceneSafety({ beat }: SceneProps) {
  return (
    <Stage eyebrow="16 · The human cost">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-5 text-center">
        <h2 className="text-balance text-[clamp(1.8rem,3.8vw,2.8rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          Efficiency and cost.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            And keeping farmers alive.
          </span>
        </h2>

        {/* Beat 0 — Griggs story */}
        <div className="flex w-full flex-col gap-3 sm:flex-row">
          {/* Photo */}
          <div className="neu-raised w-full shrink-0 overflow-hidden rounded-2xl sm:w-[46%]">
            <div className="relative h-52 w-full sm:h-full sm:min-h-[220px]">
              <Image
                src="/press/griggs-combine.png"
                alt="Griggs Farm — combine harvester accident"
                fill
                unoptimized
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/70">
                Griggs Farm · combine accident
              </span>
            </div>
          </div>

          {/* Story */}
          <div className="flex flex-1 flex-col gap-3 text-left">
            <div className="neu-raised flex flex-1 flex-col gap-3 rounded-2xl p-5">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-accent">
                A farmer&apos;s story
              </p>
              <p
                className="text-[14px] font-medium italic leading-snug text-foreground"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                &ldquo;Several years ago he went out the windshield of his combine harvester.&rdquo;
              </p>
              <p className="text-[12.5px] leading-relaxed text-foreground/75">
                Our partner at Griggs Farm — featured in WIRED and Season 1 of the History
                Channel&apos;s{" "}
                <span className="italic">The American Farm</span> — told us this story
                firsthand. He survived. He still farms. And he sees exactly why keeping the
                human out of the hazardous machine matters.
              </p>
              <p className="mt-auto text-[12px] leading-snug text-foreground/55">
                This is not an edge case. It is a Tuesday on a farm.
              </p>
            </div>
          </div>
        </div>

        {/* Beat 1 — industry stats + closer */}
        <div
          className={`flex w-full flex-col gap-4 transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
            {STATS.map((s) => (
              <li key={s.label} className="neu-raised rounded-2xl px-5 py-5 text-left">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
                  {s.label}
                </p>
                <p
                  className="mt-2 font-medium leading-none tracking-[-0.04em] text-accent"
                  style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)" }}
                >
                  {s.value}
                </p>
                <p className="mt-2 text-[12px] leading-snug text-foreground/70">{s.body}</p>
              </li>
            ))}
          </ul>

          <p
            className="max-w-[52ch] text-balance text-[clamp(1.1rem,2.1vw,1.6rem)] italic leading-snug text-accent-soft"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Removing the human from the hazardous machine is not a feature.
            It is the point.
          </p>
        </div>
      </div>
    </Stage>
  );
}
