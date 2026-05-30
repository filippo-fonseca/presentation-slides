"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 9 — Who's already here.
// Horizontal bar chart of venture funding (Aigen highlighted in copper) +
// four competitor beats alongside.

type Bar = { name: string; value: number; accent?: boolean };

const BARS: Bar[] = [
  { name: "Carbon Robotics", value: 177 },
  { name: "Ecorobotix",      value: 150 },
  { name: "Verdant",         value: 46  },
  { name: "Aigen",           value: 19, accent: true },
  { name: "TRIC",            value: 5.5 },
];

const COMPETITORS = [
  {
    name: "Carbon Robotics",
    body: "Tractor-scale laser; 40M-plant data moat; 14 countries.",
  },
  {
    name: "John Deere See & Spray",
    body: "Bought Blue River Tech (~$300M, 2017). Ultimate factory-installs on the flagship sprayer: camera every meter, 2/3 less spray, claims 87% less drift / 93% less runoff. ~$3/acre, 5M+ acres.",
  },
  {
    name: "TRIC Robotics",
    body: "UV-C + bug-vacuum on strawberries, sold as a service.",
  },
  {
    name: "Aigen",
    body: "Small, solar, mechanical “robot crews.” Our closest comparable.",
    accent: true,
  },
];

const MAX = 200; // chart scale upper bound

export default function SceneWhosHere({ beat }: SceneProps) {
  return (
    <Stage eyebrow="08 · Who's already here">
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-5">
        <h2 className="mx-auto text-balance text-center text-[clamp(1.7rem,3.4vw,2.5rem)] font-medium leading-[1.06] tracking-[-0.03em]">
          The space is real.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Already being funded.
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.05fr_1fr]">
          {/* Bar chart */}
          <div className="neu-raised rounded-2xl p-4">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/55">
              Venture funding raised ($M)
            </p>
            <ul className="space-y-2.5">
              {BARS.map((b, i) => {
                const pct = (b.value / MAX) * 100;
                return (
                  <li
                    key={b.name}
                    className="transition-all duration-500"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className={`text-[12.5px] ${b.accent ? "text-accent" : "text-foreground/85"}`}>
                        {b.name}
                      </span>
                      <span className={`font-mono text-[11px] tabular-nums ${b.accent ? "text-accent" : "text-foreground/65"}`}>
                        ${b.value}M
                      </span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-foreground/8">
                      <div
                        className="h-full rounded-full transition-[width] duration-700 ease-out"
                        style={{
                          width: `${pct}%`,
                          background: b.accent
                            ? "linear-gradient(90deg, #E5602C 0%, #f08a5a 100%)"
                            : "linear-gradient(90deg, #B5D33D 0%, #c8e068 100%)",
                          boxShadow: b.accent
                            ? "0 0 12px rgba(229, 96, 44,0.55)"
                            : "0 0 8px rgba(181, 211, 61,0.32)",
                        }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
            <p
              className="mt-3 text-[11.5px] italic leading-snug text-foreground/65"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              John Deere is the incumbent giant. Off this chart entirely.
            </p>
          </div>

          {/* Competitor beats */}
          <ul className="flex flex-col gap-2.5">
            {COMPETITORS.map((c, i) => {
              const visible = beat >= i + 1;
              return (
                <li
                  key={c.name}
                  aria-hidden={!visible}
                  className={`${c.accent ? "neu-lit" : "neu-raised-sm"} rounded-xl px-3.5 py-3 transition-all duration-500 ${
                    visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                  }`}
                >
                  <p
                    className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
                      c.accent ? "text-accent" : "text-accent-soft"
                    }`}
                  >
                    {c.name}
                  </p>
                  <p className="mt-1 text-[12.5px] leading-snug text-foreground/85">{c.body}</p>
                </li>
              );
            })}
            <li
              aria-hidden={beat < 4}
              className={`text-left transition-opacity duration-500 ${
                beat >= 4 ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/55">
                Also in smart-spray: a Dyson subsidiary, and AGZEN (out of MIT).
              </p>
            </li>
          </ul>
        </div>

        <div
          aria-hidden={beat < 5}
          className={`neu-lit mx-auto w-full max-w-[64ch] rounded-2xl px-5 py-4 text-center transition-all duration-500 ${
            beat >= 5 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
            What this actually means
          </p>
          <p
            className="mx-auto mt-2 max-w-[58ch] text-balance text-[clamp(1rem,1.7vw,1.25rem)] italic leading-snug text-foreground"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            This isn&apos;t niche. Deere could acquire us. The{" "}
            <span className="text-accent">swarm</span> + the{" "}
            <span className="text-accent">agentic layer</span> is the shape no one, not even
            them, is building.
          </p>
        </div>
      </div>
    </Stage>
  );
}
