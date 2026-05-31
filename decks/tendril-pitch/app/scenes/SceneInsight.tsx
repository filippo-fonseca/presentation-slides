"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 6 — The insight. Two beats — the second is the punch.

export default function SceneInsight({ beat }: SceneProps) {
  return (
    <Stage eyebrow="05 · The insight">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-10 text-center">
        <p
          className={`max-w-[28ch] text-balance text-[clamp(1.8rem,4vw,3rem)] font-medium leading-[1.06] tracking-[-0.03em] transition-opacity duration-500 ${
            beat >= 0 ? "text-foreground/45" : "opacity-0"
          }`}
        >
          Everyone else builds{" "}
          <span
            className="italic font-normal text-foreground/55"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            hardware that happens to use AI.
          </span>
        </p>

        <div
          aria-hidden={beat < 1}
          className={`transition-all duration-700 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
          }`}
        >
          <p
            className="max-w-[24ch] text-balance text-[clamp(2.2rem,5vw,3.8rem)] font-medium leading-[0.98] tracking-[-0.035em] text-foreground"
          >
            We build{" "}
            <span
              className="italic font-normal text-accent"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              the intelligence.
            </span>{" "}
            The robots are its{" "}
            <span
              className="italic font-normal text-accent-soft"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              tendrils:
            </span>{" "}
            hands and eyes in the field.
          </p>
        </div>
      </div>
    </Stage>
  );
}
