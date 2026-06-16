"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 4 — why now. Four doors that opened at once; the window pull-quote
// lands on beat 1.

const DOORS = [
  { label: "Edge vision got cheap", body: "Per-plant classification runs on the robot itself. No datacenter in the loop." },
  { label: "The intelligence exists", body: "We built it. Real-time perception and persistent spatial memory, proven." },
  { label: "Chemistry is being pulled", body: "Faster than it is replaced. Regulation and resistance both bite." },
  { label: "Robotics stayed funded", body: "The supply chain matured. Small autonomous hardware is buildable now." },
];

export default function SceneWhyNow({ beat }: SceneProps) {
  return (
    <Stage eyebrow="03 · Why now">
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          Four things just became true{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            at once.
          </span>
        </h2>

        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {DOORS.map((d, i) => (
            <li key={d.label} className="neu-raised-sm rounded-2xl px-4 py-5 text-left">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent-soft">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-[14px] font-medium leading-snug text-foreground">{d.label}</p>
              <p className="mt-1.5 text-[12.5px] leading-snug text-foreground/70">{d.body}</p>
            </li>
          ))}
        </ul>

        <p
          className={`max-w-[44ch] text-balance text-[clamp(1.2rem,2.2vw,1.7rem)] italic leading-snug text-accent transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 1}
        >
          Unbuildable five years ago. Now, we&apos;re turning it into reality.
        </p>
      </div>
    </Stage>
  );
}
