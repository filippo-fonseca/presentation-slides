"use client";

import type { SceneProps } from "../DeckClient";
import Mark from "../components/Mark";

// Scene 1 — cover. Mark centerpiece, "For Also Capital" pill, the full
// positioning line as the headline (with an italic-serif accent on "open
// field"), the one-line definition, founder attribution.

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
        <div className="animate-fade-in delay-200 mb-5 text-accent">
          <Mark size={120} />
        </div>

        <p className="neu-raised-sm animate-fade-up delay-300 mb-7 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/80">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(229,96,44,0.8)]" />
          </span>
          For Also Capital
        </p>

        <h1 className="animate-fade-up delay-500 mx-auto max-w-[18ch] text-balance text-[clamp(2rem,5vw,3.7rem)] font-medium leading-[1.0] tracking-[-0.035em] text-foreground">
          The physically intelligent operating system for the{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            open field.
          </span>
        </h1>

        <p className="animate-fade-up delay-700 mx-auto mt-5 max-w-[56ch] text-balance text-[clamp(0.95rem,1.3vw,1.15rem)] leading-relaxed text-foreground/75">
          A crop-agnostic, agentic farm OS, delivered through a swarm of small,
          chemical-free robots.
        </p>

        <p className="animate-fade-up delay-1000 mt-8 font-mono text-[10.5px] uppercase tracking-[0.28em] text-foreground/55">
          <span className="text-foreground/80">Filippo Fonseca</span>
          <span className="mx-2 text-foreground/35">·</span>
          <span className="text-foreground/80">Emir Ahmed</span>
          <span className="mx-2 text-foreground/35">·</span>
          <span className="text-foreground/80">David Antwi</span>
          <span className="mx-2 text-foreground/35">·</span>
          <span className="text-foreground/80">Yale · 2026</span>
        </p>

        <div className="animate-fade-up delay-1000 mt-8">
          <span className="neu-raised-sm inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/85">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(229,96,44,0.8)]" />
            </span>
            Press space to begin
          </span>
        </div>
      </div>
    </div>
  );
}
