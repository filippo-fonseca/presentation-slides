"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

export default function SceneProblem({ beat }: SceneProps) {
  return (
    <Stage eyebrow="01 · The gap">
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center">
        <h2
          className="text-balance font-serif font-medium leading-[1.05] tracking-[-0.015em]"
          style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
        >
          Broadcasting still decides{" "}
          <span className="italic text-accent-lift">what you get to see.</span>
        </h2>

        {/* Beat 0 */}
        <p
          className={`max-w-[58ch] text-balance text-[15px] leading-relaxed text-foreground/85 transition-all duration-500 ${
            beat >= 0 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          Forty years of fixed cameras, and a director in a truck picking the shot.
        </p>

        {/* Beat 1 */}
        <div
          className={`flex max-w-[60ch] flex-col gap-2 text-balance transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          <p className="text-[15px] leading-relaxed text-foreground/85">
            POV is the most viral format in sports.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/55">
            Helmet cams, mic'd-up players · six-figure engagement clips
          </p>
        </div>

        {/* Beat 2 */}
        <p
          className={`max-w-[42ch] text-balance font-serif italic leading-snug text-accent-lift transition-all duration-500 ${
            beat >= 2 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          style={{ fontSize: "clamp(1.15rem, 2vw, 1.55rem)" }}
          aria-hidden={beat < 2}
        >
          But all of it is replay. Nobody makes it live and switchable.
        </p>
      </div>
    </Stage>
  );
}
