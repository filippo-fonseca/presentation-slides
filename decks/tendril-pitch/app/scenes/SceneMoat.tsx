"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 11 — The moat. Four beats stacking the defensibility argument.

const BEATS = [
  {
    label: "Persistent field memory",
    body: "Learns each field's recurring problems and pre-empts them; worth more every season.",
  },
  {
    label: "A compounding 3D dataset",
    body: "Every acre feeds crop, weed & disease data back; our own plant foundation-model.",
  },
  {
    label: "Switching cost by outcome",
    body: "Leaving means losing the intelligence about your fields, not just swapping a vendor.",
  },
  {
    label: "Tool & crop extensibility",
    body: "The same core monetizes more jobs and more acreage over time.",
  },
];

export default function SceneMoat({ beat }: SceneProps) {
  return (
    <Stage eyebrow="10 · The moat">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          Hardware gets copied.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            A field that remembers does not.
          </span>
        </h2>

        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {BEATS.map((b, i) => {
            const visible = beat >= i;
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

        <div
          aria-hidden={beat < 4}
          className={`neu-lit w-full rounded-2xl p-5 text-left transition-all duration-500 ${
            beat >= 4 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
            And the dataset itself is a product
          </p>
          <p className="mt-2 text-[14px] leading-snug text-foreground">
            Live, ground-truth plant + agronomy data at continental scale is something
            big-ag and big-tech (Deere, Bayer, Microsoft, Google) will pay for, and a
            real lever in any acquisition conversation. The moat doubles as a revenue line.
          </p>
        </div>
      </div>
    </Stage>
  );
}
