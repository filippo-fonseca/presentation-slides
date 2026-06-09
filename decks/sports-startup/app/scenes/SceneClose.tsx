"use client";

import type { SceneProps } from "../DeckClient";

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

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="mb-8 font-mono text-[10.5px] uppercase tracking-[0.32em] text-foreground/55">
          The ask
        </p>

        <h2
          className="max-w-[18ch] text-balance font-serif font-medium leading-[1.02] tracking-[-0.02em] text-foreground"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
        >
          Build the hard part. Walk through the open doors.{" "}
          <span className="italic text-accent-lift">Aim where the attention is.</span>
        </h2>

        <p className="mt-10 max-w-[58ch] text-balance text-[14.5px] leading-relaxed text-foreground/80">
          Engineering: the wireless comms layer, priority one.
        </p>
        <p className="mt-1 max-w-[58ch] text-balance text-[14.5px] leading-relaxed text-foreground/80">
          Curling and college outreach: this week.
        </p>
      </div>
    </div>
  );
}
