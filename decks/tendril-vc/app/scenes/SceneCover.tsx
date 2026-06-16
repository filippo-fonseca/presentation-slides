"use client";

import type { SceneProps } from "../DeckClient";
import SwarmOverlay from "../components/SwarmOverlay";
import YaleMark from "../components/YaleMark";
import styles from "../landing.module.css";

// Scene 1 — cover, a faithful echo of the landing hero: the field photo
// backdrop + aurora + scrim, the serif-accented positioning line, the rotating
// swarm diagram below the title, the traits sentence, and the Yale pill.

export default function SceneCover(_props: SceneProps) {
  void _props;
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Hero backdrop — same layers as the website header */}
      <div className={styles.deckEmbed} style={{ position: "absolute", inset: 0 }} aria-hidden>
        <div className={styles.heroPhoto} />
        <div className={styles.aurora} />
        <div className={styles.heroScrim} />
      </div>

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center px-6 text-center sm:px-10">
        <h1 className="animate-fade-up delay-200 mx-auto max-w-[36ch] text-balance text-[clamp(2rem,4.8vw,3.8rem)] font-medium leading-[1.02] tracking-[-0.035em] text-foreground">
          The physically intelligent operating system for the{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            open field.
          </span>
        </h1>

        <div
          className={`${styles.deckEmbed} animate-fade-in delay-300 mt-1 w-full max-w-[420px]`}
          aria-hidden
        >
          <SwarmOverlay className={styles.swarmDeck} />
        </div>

        <p className="animate-fade-up delay-500 mx-auto -mt-1 max-w-[48ch] text-balance text-[clamp(0.95rem,1.3vw,1.12rem)] leading-relaxed text-foreground/80">
          Our system is <span className="text-accent">physically intelligent</span>.{" "}
          <span className="text-accent">Agentic</span>. Oh, and{" "}
          <span className="text-accent-soft">chemical-free</span>.
        </p>

        <div className={`${styles.deckEmbed} animate-fade-up delay-700 w-full max-w-[640px]`}>
          <div className={`${styles.yaleCredit} ${styles.yaleCreditDeck}`}>
            <span className={styles.yaleDot} />
            <span>
              In dev by <strong>engineers and researchers from</strong>{" "}
              <YaleMark height={12} /> working on food security and chemical-free farming to feed a
              growing world without taking more of its land.
            </span>
          </div>
        </div>

        <div className="animate-fade-up delay-1000 mt-6">
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
