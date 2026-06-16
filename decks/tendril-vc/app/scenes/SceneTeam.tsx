"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 5 — the team that already built the brain (moved up: most-weighted at
// pre-seed). Founders on beat 0, proof on beat 1, the honest gap + the
// founder-market-fit line on beat 2.

const FOUNDERS = [
  { initials: "FF", name: "Filippo Fonseca", cred: "Mechanical Eng. (ABET) · EECS" },
  { initials: "EA", name: "Emir Ahmed", cred: "EECS" },
  { initials: "DA", name: "David Antwi", cred: "EECS" },
];

const PROOF = [
  { label: "Spatial-MemER", body: "Persistent spatial memory, built with Stanford researchers." },
  { label: "iSpy", body: "The visual backbone: perception that classifies the scene." },
  { label: "Recognized", body: "Winners of YHack and the Google AI Hackathon at Yale, 2026." },
];

export default function SceneTeam({ beat }: SceneProps) {
  return (
    <Stage eyebrow="04 · The brain">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          We didn&apos;t start with robots.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            We started with the brain.
          </span>
        </h2>

        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {FOUNDERS.map((f) => (
            <li key={f.name} className="neu-raised flex items-center gap-3 rounded-2xl px-4 py-4 text-left">
              <span
                className="flex size-12 shrink-0 items-center justify-center rounded-full font-mono text-[13px] tracking-[0.04em] text-accent"
                style={{ border: "1.5px solid rgba(229,96,44,0.55)", background: "rgba(229,96,44,0.08)" }}
                aria-hidden
              >
                {f.initials}
              </span>
              <span>
                <span className="block text-[14.5px] font-medium leading-tight text-foreground">
                  {f.name}
                </span>
                <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/60">
                  {f.cred}
                </span>
              </span>
            </li>
          ))}
        </ul>
        <p className="-mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/45">
          Yale · class of 2028
        </p>

        <ul
          className={`grid w-full grid-cols-1 gap-3 sm:grid-cols-3 transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          {PROOF.map((p) => (
            <li key={p.label} className="neu-sage rounded-2xl px-4 py-4 text-left">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent-soft">
                {p.label}
              </p>
              <p className="mt-2 text-[12.5px] leading-snug text-foreground/85">{p.body}</p>
            </li>
          ))}
        </ul>

        <div
          className={`flex max-w-[64ch] flex-col gap-3 transition-all duration-500 ${
            beat >= 2 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 2}
        >
          <p className="text-balance text-[13.5px] leading-relaxed text-foreground/75">
            We&apos;re not agronomists yet. We&apos;re closing that the only honest way: talking
            to and partnering with the farmers who&apos;d use this, right now.
          </p>
          <p
            className="text-balance text-[clamp(1.1rem,2vw,1.5rem)] italic leading-snug text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            A hardware company would have to build the intelligence from scratch. We start from
            it, and give it hands.
          </p>
        </div>
      </div>
    </Stage>
  );
}
