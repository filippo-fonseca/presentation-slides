"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";
import FarmFile from "../components/FarmFile";
import styles from "../landing.module.css";

// Scene 8 — the .farm file + the funnel. The animated inspector (reused from
// the landing) sits beside the funnel; "Execution, not advice" lands on beat 1.

const FUNNEL = [
  { k: "Inputs", v: "The swarm, stationary cameras, soil and weather sensors, the grower." },
  { k: "Compiles to one .farm file", v: "Aggregative, interpretable, exportable, dynamic." },
  { k: "The agentic layer decides", v: "With the grower, not instead of them." },
  { k: "Execution is not abstract", v: "Real robots actuate the call, in the field." },
];

export default function SceneFarmFile({ beat }: SceneProps) {
  return (
    <Stage eyebrow="06 · The .farm file">
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-5">
        <span className="neu-inset inline-flex items-center gap-2 rounded-lg px-3.5 py-2 font-mono text-[12.5px] tracking-tight text-foreground/65">
          <span className="size-1.5 rounded-full bg-accent-soft shadow-[0_0_8px_rgba(181,211,61,0.8)]" />
          2026-06-15
          <span className="font-bold text-accent">.farm</span>
        </span>
        <h2 className="text-balance text-center text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          Every day on the farm compiles to{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            one file.
          </span>
        </h2>

        <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className={styles.deckEmbed}>
            <FarmFile />
          </div>

          <ol className="flex flex-col gap-2.5">
            {FUNNEL.map((f, i) => (
              <li key={f.k} className="neu-raised-sm flex gap-3 rounded-xl px-4 py-3 text-left">
                <span className="mt-0.5 font-mono text-[11px] text-accent-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-[13.5px] font-medium leading-tight text-foreground">
                    {f.k}
                  </span>
                  <span className="mt-0.5 block text-[12px] leading-snug text-foreground/70">
                    {f.v}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div
          className={`flex flex-col items-center gap-2 text-center transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          <p
            className="max-w-[60ch] text-balance text-[clamp(1.1rem,2.1vw,1.55rem)] italic leading-snug text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Execution can then easily be enacted through the robotic team at the agent (and the
            farmer&apos;s) disposal.
          </p>
        </div>
      </div>
    </Stage>
  );
}
