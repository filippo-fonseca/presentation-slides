"use client";

import type { SceneProps } from "../DeckClient";
import Mark from "../components/Mark";

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
        <div
          className="animate-fade-in delay-200 mb-5 text-accent"
          style={{ filter: "drop-shadow(0 0 28px rgba(91,176,206,0.5))" }}
        >
          <Mark size={160} />
        </div>

        <p className="neu-raised-sm animate-fade-up delay-300 mb-7 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/80">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(91,176,206,0.85)]" />
          </span>
          Concept preview
        </p>

        <h1
          className="animate-fade-up delay-500 mx-auto max-w-[14ch] text-balance font-serif font-medium leading-[0.98] tracking-[-0.02em] text-foreground"
          style={{ fontSize: "clamp(3rem, 8.5vw, 7rem)" }}
        >
          Eyeline
        </h1>

        <p
          className="animate-fade-up delay-700 mx-auto mt-5 max-w-[44ch] text-balance font-serif italic leading-snug text-accent-lift"
          style={{ fontSize: "clamp(1.05rem, 1.9vw, 1.6rem)" }}
        >
          Watch any sport from inside the action. Live, and switchable.
        </p>

        <div className="animate-fade-up delay-1000 mt-10">
          <span className="neu-raised-sm inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/85">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(91,176,206,0.85)]" />
            </span>
            Press space to begin
          </span>
        </div>
      </div>
    </div>
  );
}
