"use client";

import Image from "next/image";
import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

const BIG_RIGS = [
  { src: "/images/deere-tractor.avif", name: "John Deere", tag: "$500-600K + autonomy fees" },
  { src: "/images/carbon-tractor.webp", name: "Carbon Robotics", tag: "$600K-1.6M, weeds only" },
];

// Scene 9 — small and modular. The microreactor framing (resonates with Also's
// Radiant / Kaleidos). Traits on beat 0, the cost contrast on beat 1.

const TRAITS = [
  { label: "Mass-manufacturable", body: "Built in volume, not welded once. Units, not capital projects." },
  { label: "Modular", body: "Snap in a weeder, a scout, a disease arm. One chassis, many jobs." },
  { label: "Affordable", body: "Priced on the acre tended. Zero grower capex." },
];

export default function SceneSmall({ beat }: SceneProps) {
  return (
    <Stage eyebrow="07 · Small and modular">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          Small{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            and modular.
          </span>
        </h2>

        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {TRAITS.map((t) => (
            <li key={t.label} className="neu-raised rounded-2xl px-5 py-6 text-left">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent-soft">
                {t.label}
              </p>
              <p className="mt-2 text-[13px] leading-snug text-foreground/85">{t.body}</p>
            </li>
          ))}
        </ul>

        <div
          className={`flex max-w-[70ch] flex-col gap-3 transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          <div className="grid grid-cols-2 gap-3">
            {BIG_RIGS.map((r) => (
              <figure key={r.name} className="neu-raised overflow-hidden rounded-2xl">
                <span className="relative block h-28 w-full bg-[#f4f2e9] sm:h-32">
                  <Image
                    src={r.src}
                    alt={r.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </span>
                <figcaption className="flex flex-col gap-0.5 px-4 py-3 text-left">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/55">
                    {r.name}
                  </span>
                  <span className="text-[11.5px] leading-snug text-foreground/70">{r.tag}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="neu-inset rounded-2xl px-5 py-4 text-left text-[13.5px] leading-relaxed text-foreground/80">
            A Deere row-crop tractor runs <span className="text-foreground">$500-600K</span>, plus
            roughly <span className="text-foreground">$50K and annual subscriptions</span> just to
            switch on autonomy, and still no agentic farm OS. A Carbon LaserWeeder is{" "}
            <span className="text-foreground">$600K-$1.6M</span> and only weeds. We are one of many
            small units, priced on the acre.
          </p>
        </div>

        <div
          className={`flex max-w-[70ch] flex-col gap-3 transition-all duration-500 ${
            beat >= 2 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 2}
        >
          <p className="neu-inset rounded-2xl px-5 py-4 text-left text-[13.5px] leading-relaxed text-foreground/80">
            To many farmers, <span className="text-foreground">John Deere is the problem</span>: high
            prices and no control. You are not allowed to fully fix your own machine. Diagnostics
            stay locked to authorized dealers; autonomy and field data sit behind subscriptions. In
            2025 the <span className="text-foreground">FTC sued Deere</span> over exactly this. We
            sell the opposite: small units, priced on the acre, with the grower in command.
          </p>
          <p
            className="text-[clamp(1rem,1.8vw,1.3rem)] italic leading-snug text-accent-soft"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Small, mass-manufacturable, and modular
            <br />
            beats big, centralized, and locked-in.
          </p>
        </div>
      </div>
    </Stage>
  );
}
