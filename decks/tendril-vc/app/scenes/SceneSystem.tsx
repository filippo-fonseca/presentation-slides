"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";
import SwarmOverlay from "../components/SwarmOverlay";
import styles from "../landing.module.css";

// Scene 6 — the system. The agentic loop (Perceive → Remember → Decide → Act)
// over the landing's swarm visual: diverse terrestrial inputs feeding one core.
// The crop-agnostic hammer lands on beat 1.

const LOOP = ["Perceive", "Remember", "Decide", "Act"];

export default function SceneSystem({ beat }: SceneProps) {
  return (
    <Stage eyebrow="05 · The system">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-5 text-center">
        <h2 className="text-balance text-[clamp(1.8rem,3.8vw,2.8rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          Small machines. One{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            agentic loop.
          </span>{" "}
          Every acre, any crop.
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em]">
          {LOOP.map((step, i) => (
            <span key={step} className="inline-flex items-center gap-2">
              <span className="neu-raised-sm rounded-full px-3 py-1 text-foreground/85">{step}</span>
              {i < LOOP.length - 1 && <span className="text-accent/70">→</span>}
            </span>
          ))}
        </div>

        <div className={styles.deckEmbed} aria-hidden>
          <SwarmOverlay className={styles.swarmDeck} />
        </div>

        <p
          className={`-mt-2 max-w-[60ch] text-balance text-[clamp(1.1rem,2vw,1.5rem)] italic leading-snug text-accent-soft transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 1}
        >
          The core doesn&apos;t care what&apos;s growing. The same loop runs corn, cotton,
          tomatoes, vines: swap the limb, not the brain.
        </p>
      </div>
    </Stage>
  );
}
