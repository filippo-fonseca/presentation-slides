"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene (the hands) — what the hands actually do. One chassis, swap the limb.
// An abstract render of the swarm sits blurred behind the copy, like the
// landing's concept-render band. The four modules land on beat 0; the "our
// hand pulls it" punch + honest status on beat 1.

const TOOLS = [
  { label: "Weed", body: "Mechanical, chemical-free removal, plant by plant. The v1 job.", live: true },
  { label: "Scout", body: "Leaf-level vision: crop, weed, pest, disease, damage. Builds the live 3D map.", live: true },
  { label: "Treat", body: "An intervention placed precisely on the plant that needs it. Spot, never blanket; e.g. a UV-C disease module.", live: false },
  { label: "Tend", body: "Snap in the tool the season calls for. Same chassis, many jobs, all season.", live: false },
];

export default function SceneHands({ beat }: SceneProps) {
  return (
    <Stage eyebrow="05 · The hands">
      {/* Blurred swarm render backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "url('/images/swarm-render.png') center / cover no-repeat",
          filter: "blur(4px) brightness(0.52) saturate(0.9) contrast(1.04)",
          transform: "scale(1.06)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,11,7,0.64) 0%, rgba(10,11,7,0.48) 42%, rgba(10,11,7,0.78) 100%)",
        }}
      />

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
              className="neu-raised rounded-2xl px-4 py-5 text-left backdrop-blur-md"
              style={
                t.live
                  ? {
                      background:
                        "linear-gradient(148deg, rgba(229,96,44,0.18) 0%, rgba(8,9,5,0.8) 100%)",
                      border: "1px solid rgba(229,96,44,0.42)",
                    }
                  : {
                      background:
                        "linear-gradient(148deg, rgba(22,24,14,0.86) 0%, rgba(6,7,4,0.8) 100%)",
                      border: "1px solid rgba(244,242,233,0.12)",
                    }
              }
            >
              <p className="flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.2em] text-accent">
                {t.label}
                <span
                  className={`font-sans text-[9px] tracking-[0.12em] ${
                    t.live ? "text-accent-soft" : "text-foreground/55"
                  }`}
                >
                  {t.live ? "· v1" : "· roadmap"}
                </span>
              </p>
              <p className="mt-2 text-[13.5px] leading-snug text-foreground">{t.body}</p>
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
          <p className="text-[12px] leading-relaxed text-foreground/65">
            v1 leads with weeding and perception. The other modules are the near-term roadmap on
            the same proven loop. Hardware in development.
          </p>
        </div>
      </div>
    </Stage>
  );
}
