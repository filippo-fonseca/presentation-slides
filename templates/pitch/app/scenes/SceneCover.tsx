"use client";

import type { SceneProps } from "../DeckClient";
import Mark from "../components/Mark";

// Example title scene — single beat, centered cover with the brand mark,
// status pill, big headline (sans + italic-serif accent), description line,
// and a "press space to begin" prompt.
export default function SceneCover(_props: SceneProps) {
  void _props;
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-6 sm:px-10">
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 glow-radial blur-3xl"
      />

      {/* Very subtle masked grid */}
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
        {/* Centerpiece mark */}
        <div className="animate-fade-in delay-200 mb-3 text-accent">
          <Mark size={140} />
        </div>

        {/* Status pill */}
        <p className="neu-raised-sm animate-fade-up delay-300 mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/80">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(245,176,106,0.8)]" />
          </span>
          Status · pill
        </p>

        {/* Headline */}
        <h1 className="animate-fade-up delay-500 mx-auto max-w-[17ch] text-balance text-[clamp(2.2rem,5.8vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.035em] text-foreground">
          The bold{" "}
          <span
            className="italic font-normal text-accent-soft"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            thesis
          </span>{" "}
          of the deck.
        </h1>

        <p className="animate-fade-up delay-700 mx-auto mt-3 max-w-[58ch] text-balance text-[clamp(0.92rem,1.15vw,1.075rem)] leading-relaxed text-foreground/80 sm:max-w-[88ch]">
          A two-line description that frames the rest of the deck without giving away the punchline.
        </p>

        {/* Three-word tagline */}
        <p className="animate-fade-up delay-1000 mt-3 font-mono text-[11px] uppercase tracking-[0.32em] text-foreground/55">
          <span className="text-foreground/80">First</span>
          <span className="mx-2 text-foreground/35">·</span>
          <span className="text-foreground/80">Second</span>
          <span className="mx-2 text-foreground/35">·</span>
          <span className="text-foreground/80">Third</span>
        </p>

        {/* Press-to-begin */}
        <div className="animate-fade-up delay-1000 mt-7">
          <span className="neu-raised-sm inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/85">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(245,176,106,0.8)]" />
            </span>
            Press space to begin
          </span>
        </div>
      </div>
    </div>
  );
}
