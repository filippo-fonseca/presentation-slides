"use client";

import type { SceneProps } from "../DeckClient";

const ASKS = [
  {
    num: "01",
    label: "Engine",
    ask: "Point engineering at the wireless comms layer.",
    when: "this quarter",
  },
  {
    num: "02",
    label: "Wedge",
    ask: "Shortlist the sport. Curling leads; squash, rowing, fencing in the running.",
    when: "this week",
  },
  {
    num: "03",
    label: "Lighthouse",
    ask: "Open the college conversations. Harvard–Yale football, NCAA hockey.",
    when: "this week",
  },
];

export default function SceneClose(_props: SceneProps) {
  void _props;
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-6 sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 glow-radial blur-3xl"
      />

      <svg
        aria-hidden
        viewBox="0 0 800 800"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] -translate-x-1/2 -translate-y-1/2 opacity-50"
      >
        <g style={{ transformOrigin: "400px 400px" }}>
          <circle cx="400" cy="400" r="380" stroke="rgba(91,176,206,0.18)" strokeWidth="0.6" strokeDasharray="2 8" fill="none" />
        </g>
        <g style={{ transformOrigin: "400px 400px" }}>
          <circle cx="400" cy="400" r="280" stroke="rgba(244,241,234,0.15)" strokeWidth="0.6" strokeDasharray="1 6" fill="none" />
        </g>
        <g style={{ transformOrigin: "400px 400px" }}>
          <circle cx="400" cy="400" r="180" stroke="rgba(91,176,206,0.28)" strokeWidth="0.6" strokeDasharray="1 5" fill="none" />
        </g>
      </svg>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-7 font-mono text-[10.5px] uppercase tracking-[0.32em] text-foreground/55">
          The ask
        </p>

        <h2
          className="max-w-[22ch] text-balance font-serif font-medium leading-[1.02] tracking-[-0.02em] text-foreground"
          style={{ fontSize: "clamp(2rem, 4.6vw, 3.6rem)" }}
        >
          Build the hard part. Walk through the open doors.{" "}
          <span className="italic text-accent-lift">Aim where the attention is.</span>
        </h2>

        <div className="mt-10 grid w-full grid-cols-1 gap-3 text-left sm:grid-cols-3">
          {ASKS.map((a) => (
            <div key={a.num} className="neu-raised rounded-2xl px-5 py-5">
              <div className="flex items-baseline justify-between">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-lift">
                  {a.num} · {a.label}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/55">
                  {a.when}
                </p>
              </div>
              <p className="mt-3 font-serif text-[15px] leading-snug text-foreground/90">
                {a.ask}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-7 font-serif italic text-[15px] text-accent-lift">
          Three tracks, in parallel. Let's go.
        </p>
      </div>
    </div>
  );
}
