"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 10 — how we're different. The capability table on beat 0, the shape
// line on beat 1, the funded-market comps bar on beat 2.

const ROWS = [
  { cap: "Resolution", tendril: "Per plant", field: "Per field" },
  { cap: "Chemistry", tendril: "Mechanical, chemical-free", field: "Herbicide, on a calendar" },
  { cap: "Scope", tendril: "Whole farm, any crop", field: "One job, one crop" },
  { cap: "Memory", tendril: "Persistent, multi-season", field: "None" },
  { cap: "Decisioning", tendril: "Agentic", field: "Operator / dashboard" },
  { cap: "Capital", tendril: "$0, per acre", field: "$500K-$1.6M+" },
];

const COMPS = [
  { name: "Carbon", raised: 177 },
  { name: "Ecorobotix", raised: 150 },
  { name: "Verdant", raised: 46 },
  { name: "Aigen", raised: 19 },
];
const MAX = 177;

export default function SceneDifferent({ beat }: SceneProps) {
  return (
    <Stage eyebrow="09 · How we're different">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-6">
        <h2 className="text-balance text-center text-[clamp(1.8rem,3.8vw,2.8rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          Big and bulky, or blind.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            We&apos;re the only true farm OS.
          </span>
        </h2>

        <div className="neu-raised w-full overflow-hidden rounded-2xl">
          <div className="grid grid-cols-[0.8fr_1fr_1fr] border-b border-line">
            <span className="border-r border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/45 sm:px-5">
              Capability
            </span>
            <span className="border-r border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent sm:px-5">
              Tendril
            </span>
            <span className="px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/45 sm:px-5">
              The field
            </span>
          </div>
          {ROWS.map((row, i) => (
            <div
              key={row.cap}
              className={`grid grid-cols-[0.8fr_1fr_1fr] items-stretch text-[12.5px] ${
                i === ROWS.length - 1 ? "" : "border-b border-line"
              }`}
            >
              <span className="border-r border-line px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-foreground/55 sm:px-5">
                {row.cap}
              </span>
              <span className="border-r border-line px-4 py-2.5 leading-snug text-foreground sm:px-5">
                {row.tendril}
              </span>
              <span className="px-4 py-2.5 leading-snug text-foreground/55 sm:px-5">{row.field}</span>
            </div>
          ))}
        </div>

        <p
          className={`max-w-[68ch] text-balance text-center text-[13.5px] leading-relaxed text-foreground/80 transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          A swarm that is the{" "}
          <span className="text-foreground">hands, eyes, and ears</span> of the farmer, run by one
          agentic, crop-agnostic OS. The incumbents are big single-purpose machines, or dashboards
          with no hands. We&apos;re neither.
        </p>

        <div
          className={`flex w-full max-w-[60ch] flex-col gap-2 transition-all duration-500 ${
            beat >= 2 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 2}
        >
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/45">
            Capital raised by comps · the market is funded
          </p>
          {COMPS.map((c) => (
            <div key={c.name} className="flex items-center gap-3">
              <span className="w-20 shrink-0 text-right font-mono text-[11px] text-foreground/65">
                {c.name}
              </span>
              <span className="relative h-3 flex-1 overflow-hidden rounded-full bg-foreground/5">
                <span
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    width: `${(c.raised / MAX) * 100}%`,
                    background: "linear-gradient(90deg, #b04518, #ff7a43)",
                  }}
                />
              </span>
              <span className="w-12 shrink-0 font-mono text-[11px] text-foreground/65">
                ${c.raised}M
              </span>
            </div>
          ))}
          <p className="text-center text-[12px] leading-snug text-foreground/55">
            None of them own our shape.
          </p>
        </div>
      </div>
    </Stage>
  );
}
