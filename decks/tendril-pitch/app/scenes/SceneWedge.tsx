"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 19 — The wedge (v1). Crop-agnostic core, specializes in the big
// commodity crops first. We pick by calling farmers, not by spreadsheet.

export default function SceneWedge({ beat }: SceneProps) {
  return (
    <Stage eyebrow="19 · The wedge (v1)">
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-6 text-center">
        <h2 className="text-balance text-[clamp(1.85rem,3.8vw,2.85rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          Start narrow:{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            one tool, one crop, one prototype.
          </span>
        </h2>

        <p className="max-w-[68ch] text-balance text-[14.5px] leading-relaxed text-foreground/85">
          v1 is the OS plus a single small modular robot doing chemical-free mechanical weeding in
          one crop, producing a live 3D field map from day one. That alone proves the hands and the
          brain.
        </p>

        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          <div
            aria-hidden={beat < 1}
            className={`neu-lit rounded-2xl p-5 text-left transition-all duration-500 ${
              beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
            }`}
          >
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
              Crop-agnostic at the core
            </p>
            <p className="mt-2 text-[13.5px] leading-snug text-foreground">
              The brain is the same brain. We tune the perception model and the tool head per crop,
              but the OS doesn&apos;t change.
            </p>
          </div>

          <div
            aria-hidden={beat < 1}
            className={`neu-raised-sm rounded-2xl p-5 text-left transition-all duration-500 ${
              beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
            }`}
          >
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-soft">
              Specialize in the big crops first
            </p>
            <p className="mt-2 text-[13.5px] leading-snug text-foreground/85">
              We optimize hard for one of the major commodity crops on day one (corn, cotton,
              soybeans, wheat). High-value specialty crops stay on the table as a faster-proof
              option, not the default path.
            </p>
          </div>
        </div>

        <div
          aria-hidden={beat < 2}
          className={`neu-raised-sm w-full rounded-2xl px-5 py-4 text-left transition-all duration-500 ${
            beat >= 2 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-soft">
            How we pick
          </p>
          <p
            className="mt-2 text-[clamp(1rem,1.65vw,1.2rem)] italic leading-snug text-foreground/90"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            We just have to pick up the phone. Talk to twenty farmers, learn what hurts most, pick
            the crop where our system saves them the most money the fastest. The decision is
            empirical, not theoretical.
          </p>
        </div>
      </div>
    </Stage>
  );
}
