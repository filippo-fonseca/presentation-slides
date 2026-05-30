"use client";

import Image from "next/image";
import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";
import TendrilRobot from "../components/TendrilRobot";

// Scene 10 — How we're different. Two-column comparison: Aigen vs Tendril.

const ROWS = [
  {
    aigen: "A robot that weeds (one machine, one job).",
    tendril: "A field OS: the robot is one swappable limb.",
  },
  {
    aigen: "Acts pass by pass, no memory.",
    tendril: "Remembers &amp; pre-empts: memory is the moat.",
  },
  {
    aigen: "Weeding only, idle much of the season.",
    tendril: "Modular multi-tool: weed → UV-C → spot-treat → seed.",
  },
  {
    aigen: "One larger, general-purpose rover.",
    tendril: "A tunable swarm, and the dashboard is the product.",
  },
];

export default function SceneHowDifferent({ beat }: SceneProps) {
  return (
    <Stage eyebrow="09 · How we're different">
      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-6">
        <div className="text-center">
          <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
            Aigen proved small robots can weed.{" "}
            <span
              className="italic font-normal text-accent"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              We make them a system.
            </span>
          </h2>
        </div>

        {/* Visual contrast row — Deere · Aigen · Tendril */}
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { label: "John Deere", caption: "Big iron + AI spray boom.", src: "/images/deere.jpg" },
            { label: "Aigen",      caption: "Small + solar, but a one-job robot.", src: "/images/aigen.jpg" },
          ].map((c) => (
            <div key={c.label} className="neu-raised-sm overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={c.src}
                  alt={c.label}
                  fill
                  sizes="(min-width: 640px) 30vw, 90vw"
                  className="object-cover opacity-90"
                  unoptimized
                />
              </div>
              <div className="px-3 py-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/55">
                  {c.label}
                </p>
                <p className="mt-0.5 text-[12.5px] leading-snug text-foreground/80">
                  {c.caption}
                </p>
              </div>
            </div>
          ))}
          <div className="neu-lit overflow-hidden rounded-2xl">
            <div className="relative flex aspect-[4/3] w-full items-center justify-center bg-background/30">
              <TendrilRobot height={170} />
            </div>
            <div className="px-3 py-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                Tendril
              </p>
              <p className="mt-0.5 text-[12.5px] leading-snug text-foreground">
                Small + agentic. The robot is one swappable limb of a farm OS.
              </p>
            </div>
          </div>
        </div>

        <div className="neu-raised overflow-hidden rounded-2xl">
          {/* Header row */}
          <div className="grid grid-cols-[1.4fr_1.4fr] gap-3 border-b border-line px-5 py-3 sm:px-6">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/55">
              Aigen
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
              Tendril
            </span>
          </div>

          {ROWS.map((row, i) => {
            const visible = beat >= i;
            const isLast = i === ROWS.length - 1;
            return (
              <div
                key={i}
                aria-hidden={!visible}
                className={`grid grid-cols-[1.4fr_1.4fr] items-start gap-3 px-5 py-4 text-[13.5px] sm:px-6 ${
                  isLast ? "" : "border-b border-line"
                } transition-all duration-500 ${
                  visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
                }`}
              >
                <span className="text-foreground/65 leading-snug">{row.aigen}</span>
                <span className="text-foreground leading-snug">{row.tendril}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Stage>
  );
}
