"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

const POVS = ["Thrower", "Sweeper's eyes", "Cam on the stone", "Opposing skip"];

const MARKET = [
  {
    head: "Semi-popular, room to grow",
    body: "Top curling videos pull millions of views, but they're old explainers, not this.",
  },
  {
    head: "Top is locked, the tier below is open",
    body: "Olympics sit on NBC and Peacock. USA Curling self-streams its championships on YouTube with a tiny crew. No rights-holder to fight.",
  },
  {
    head: "We have a door today",
    body: "Yale runs a national-caliber program.",
  },
];

export default function SceneCurling({ beat }: SceneProps) {
  return (
    <Stage eyebrow="Track 02 · Start here" centered={false}>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-stretch gap-7 pt-10 sm:pt-12">
        <h2
          className="text-balance text-center font-serif font-medium leading-[1.05] tracking-[-0.015em]"
          style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.7rem)" }}
        >
          <span className="italic text-accent-lift">Curling.</span>{" "}
          The most POV-able sport nobody's filming right.
        </h2>

        {/* Beat 0 — video. Always present so the speaker can let it run; beats 1/2 layer below. */}
        <div className="mx-auto w-full max-w-3xl">
          <div className="neu-edge-accent overflow-hidden rounded-2xl">
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                title="Curling: Olympic mixed-doubles, final stone"
                src="https://www.youtube.com/embed/uj-U45zUxP4?autoplay=0&mute=1&rel=0&modestbranding=1"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                data-no-advance
              />
            </div>
          </div>
          <p className="mt-2 text-center font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/55">
            Olympic mixed-doubles · Norway over Canada · final stone
          </p>
        </div>

        {/* Beat 1 — POV switch row */}
        <div
          className={`mx-auto flex w-full max-w-4xl flex-col items-center gap-3 transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          <p className="font-serif italic text-[15px] text-accent-lift">
            Now imagine it live, and switchable.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {POVS.map((label, i) => (
              <span key={label} className="flex items-center gap-2">
                <span className="neu-raised-sm rounded-full px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/85">
                  {label}
                </span>
                {i < POVS.length - 1 && <span className="text-foreground/35">→</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Beat 2 — market chips */}
        <div
          className={`grid w-full grid-cols-1 gap-3 transition-all duration-500 sm:grid-cols-3 ${
            beat >= 2 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 2}
        >
          {MARKET.map((m) => (
            <div key={m.head} className="neu-raised-sm rounded-2xl px-4 py-4 text-left">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent-lift">
                {m.head}
              </p>
              <p className="mt-2 text-[12.5px] leading-snug text-foreground/80">
                {m.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Stage>
  );
}
