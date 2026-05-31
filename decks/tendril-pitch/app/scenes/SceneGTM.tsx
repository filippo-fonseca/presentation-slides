"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 13 — Go-to-market. Hero stat (96%) + three beats.

const BEATS = [
  {
    label: "Accessible",
    body: "Independent operators we can actually reach; no enterprise procurement, no dealer gatekeepers.",
  },
  {
    label: "Co-developed",
    body: "Sign 2–3 as long-term design partners and build the system with and for them, before we even have a finished product.",
  },
  {
    label: "Underserved",
    body: "Big iron isn't built for them; they feel the chemical and labor squeeze hardest and need the savings most.",
  },
];

export default function SceneGTM({ beat }: SceneProps) {
  return (
    <Stage eyebrow="12 · Go-to-market">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          We don&apos;t chase John Deere&apos;s customers.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            We start at the source.
          </span>
        </h2>

        <div className="neu-lit rounded-2xl px-6 py-7 text-center">
          <p
            className="font-medium leading-none tracking-[-0.04em] text-accent count-up"
            style={{ fontSize: "clamp(3.5rem,7vw,6rem)" }}
          >
            96%
          </p>
          <p className="mx-auto mt-3 max-w-[60ch] text-balance text-[14px] leading-snug text-foreground/85">
            of U.S. farms are family-owned: about 1.9 million of them, and 86% are small family farms.
          </p>
          <p className="mx-auto mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/55">
            Source · USDA ERS, America&apos;s Farms &amp; Ranches at a Glance (2023 data)
          </p>
        </div>

        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {BEATS.map((b, i) => {
            const visible = beat >= i + 1;
            return (
              <li
                key={b.label}
                aria-hidden={!visible}
                className={`neu-raised-sm rounded-2xl px-4 py-5 text-left transition-all duration-500 ${
                  visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-soft">
                  {String(i + 1).padStart(2, "0")} · {b.label}
                </p>
                <p className="mt-2 text-[13.5px] leading-snug text-foreground/85">{b.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Stage>
  );
}
