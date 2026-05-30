"use client";

import type { SceneProps } from "../DeckClient";
import Mark from "../components/Mark";

// Scene 1 — cinematic cover.
// Tendril mark centerpiece, status pill, headline with italic-serif accent,
// attribution, "press space to begin" affordance.

export default function SceneCover(_props: SceneProps) {
  void _props;
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-6 sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 glow-radial blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="animate-fade-in delay-200 mb-4">
          <Mark size={160} />
        </div>

        <p className="neu-raised-sm animate-fade-up delay-300 mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/80">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(229, 96, 44,0.8)]" />
          </span>
          Internal: founders&apos; pitch
        </p>

        <h1
          className="animate-fade-up delay-500 mx-auto text-balance text-[clamp(3rem,9vw,7rem)] italic leading-[0.96] tracking-[-0.045em] text-foreground"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 600 }}
        >
          Tendril
        </h1>

        <p
          className="animate-fade-up delay-700 mx-auto mt-4 max-w-[48ch] text-balance text-[clamp(1.05rem,1.6vw,1.5rem)] italic font-normal text-accent-soft"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          An agentic operating system for the open field.
        </p>

        <p className="animate-fade-up delay-1000 mt-8 font-mono text-[11px] uppercase tracking-[0.32em] text-foreground/55">
          <span className="text-foreground/80">Filippo</span>
          <span className="mx-2 text-foreground/35">·</span>
          <span className="text-foreground/80">for David &amp; Amir</span>
          <span className="mx-2 text-foreground/35">·</span>
          <span className="text-foreground/80">May 2026</span>
        </p>

        <div className="animate-fade-up delay-1000 mt-8">
          <span className="neu-raised-sm inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/85">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(229, 96, 44,0.8)]" />
            </span>
            Press space to begin
          </span>
        </div>
      </div>
    </div>
  );
}
