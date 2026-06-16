"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 7 — what the hands actually do. One chassis, swap the limb. The four
// modules land on beat 0; the "our hand pulls it" punch + honest status on
// beat 1.

const TOOLS = [
  { label: "Weed", body: "Mechanical, chemical-free removal, plant by plant. The v1 job.", live: true },
  { label: "Scout", body: "Leaf-level vision: crop, weed, pest, disease, damage. Builds the live 3D map.", live: true },
  { label: "Treat", body: "An intervention placed precisely on the plant that needs it. Spot, never blanket; e.g. a UV-C disease module.", live: false },
  { label: "Tend", body: "Snap in the tool the season calls for. Same chassis, many jobs, all season.", live: false },
];

export default function SceneHands({ beat }: SceneProps) {
  return (
    <Stage eyebrow="06 · The hands">
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          The brain is the company.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            But the hands do real work.
          </span>
        </h2>

        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((t) => (
            <li
              key={t.label}
              className={`${t.live ? "neu-lit" : "neu-raised-sm"} rounded-2xl px-4 py-5 text-left`}
            >
              <p className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent">
                {t.label}
                <span
                  className={`font-sans text-[8.5px] tracking-[0.12em] ${
                    t.live ? "text-accent-soft" : "text-foreground/40"
                  }`}
                >
                  {t.live ? "· v1" : "· roadmap"}
                </span>
              </p>
              <p className="mt-2 text-[12.5px] leading-snug text-foreground/85">{t.body}</p>
            </li>
          ))}
        </ul>

        <div
          className={`flex max-w-[56ch] flex-col gap-3 transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          <p className="text-balance text-[clamp(1.2rem,2.2vw,1.7rem)] leading-snug text-foreground">
            A dashboard tells you a weed is there.{" "}
            <span className="italic text-accent" style={{ fontFamily: "var(--font-fraunces)" }}>
              Our hand pulls it.
            </span>
          </p>
          <p className="text-[12px] leading-relaxed text-foreground/55">
            v1 leads with weeding and perception. The other modules are the near-term roadmap on
            the same proven loop. Hardware in development.
          </p>
        </div>
      </div>
    </Stage>
  );
}
