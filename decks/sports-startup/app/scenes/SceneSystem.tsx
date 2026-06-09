"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

const NODES = [
  { id: 0, label: "Cameras",            sub: "player-worn, sport-agnostic" },
  { id: 1, label: "Wireless pipeline",  sub: "multi-feed, real-time", tag: "the hard part" },
  { id: 2, label: "Switchable app",     sub: "fan picks the POV, live" },
];

export default function SceneSystem({ beat }: SceneProps) {
  return (
    <Stage eyebrow="02 · What we're building">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 text-center">
        <h2
          className="text-balance font-serif font-medium leading-[1.05] tracking-[-0.015em]"
          style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
        >
          Not a camera company.{" "}
          <span className="italic text-accent-lift">A system.</span>
        </h2>

        {/* Pipeline — three nodes, revealed left to right with beats */}
        <div className="relative w-full">
          {/* connector line */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[8%] right-[8%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/35 to-transparent sm:block"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {NODES.map((n) => {
              const shown = beat >= n.id;
              const isHard = !!n.tag;
              return (
                <div
                  key={n.id}
                  className={`relative rounded-2xl px-5 py-6 text-left transition-all duration-500 ${
                    shown
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-2 opacity-0"
                  } ${isHard ? "neu-lit" : "neu-raised-sm"}`}
                  aria-hidden={!shown}
                >
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-lift">
                    0{n.id + 1}
                  </p>
                  <p className="mt-2 font-serif text-[20px] leading-tight text-foreground">
                    {n.label}
                  </p>
                  <p className="mt-1 text-[12.5px] leading-snug text-foreground/70">
                    {n.sub}
                  </p>
                  {n.tag && (
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-accent-lift">
                      <span className="size-1 rounded-full bg-accent" />
                      {n.tag}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Pull-line — appears after the third node lands */}
        <p
          className={`mx-auto max-w-[54ch] text-balance font-serif italic leading-snug text-accent-lift transition-all duration-500 ${
            beat >= 2 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          style={{ fontSize: "clamp(1.05rem, 1.7vw, 1.4rem)" }}
          aria-hidden={beat < 2}
        >
          The hard part isn't the camera. It's the wireless layer, and it's the same for every sport.
        </p>
      </div>
    </Stage>
  );
}
