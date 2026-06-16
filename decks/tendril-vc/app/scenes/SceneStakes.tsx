"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 14 — the stakes. The demographic frame on beat 0; the durable-problem
// pull-quote on beat 1.

export default function SceneStakes({ beat }: SceneProps) {
  return (
    <Stage eyebrow="13 · The stakes">
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(2rem,4.6vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.035em]">
          There will be ten billion people by 2060.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The same land, or less.
          </span>
        </h2>

        <p className="max-w-[58ch] text-balance text-[15px] leading-relaxed text-foreground/80">
          We can&apos;t deforest our way there. Efficiency per acre is the only lever, and chemistry
          has stopped delivering it.
        </p>

        <p
          className={`max-w-[52ch] text-balance text-[clamp(1.2rem,2.4vw,1.8rem)] italic leading-snug text-accent-soft transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 1}
        >
          Food is the hardest, most necessary, most durable problem there is. We&apos;re building the
          system that resists decay in the field.
        </p>
      </div>
    </Stage>
  );
}
