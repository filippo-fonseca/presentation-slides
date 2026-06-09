"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

const POVS = ["Thrower", "Sweeper's eyes", "Cam on the stone", "Opposing skip"];

const FIT_CRITERIA = [
  "Contained playing surface",
  "Slow enough to follow a single POV",
  "Top tier locked, tier below open",
  "Reachable through Yale",
];

const OTHER_SPORTS = [
  { name: "Squash",  why: "tight court, mic-able, no rights-holder" },
  { name: "Rowing",  why: "cox cam already a meme; 8 simultaneous POVs" },
  { name: "Fencing", why: "mask cam, sub-second tempo, Yale powerhouse" },
  { name: "Lacrosse",why: "helmet sport, college tier wide open" },
];

export default function SceneCurling({ beat }: SceneProps) {
  return (
    <Stage eyebrow="Track 02 · Sports that fit" centered={false}>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-stretch gap-7 pt-10 sm:pt-12">
        <h2
          className="text-balance text-center font-serif font-medium leading-[1.05] tracking-[-0.015em]"
          style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.7rem)" }}
        >
          Take curling.{" "}
          <span className="italic text-accent-lift">It's the kind of sport this is built for.</span>
        </h2>

        {/* Beat 0 — video. The proof: look how POV-able the format is. */}
        <div className="mx-auto w-full max-w-3xl">
          <div className="neu-edge-accent overflow-hidden rounded-2xl">
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                title="Curling: Olympic mixed-doubles, final stone"
                src="https://www.youtube.com/embed/uj-U45zUxP4?autoplay=0&mute=1&rel=0&modestbranding=1"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                data-no-advance
              />
            </div>
          </div>
          <p className="mt-2 text-center font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/55">
            Olympic mixed-doubles · Norway over Canada · final stone
          </p>
        </div>

        {/* Beat 1 — what makes it fit + POV row */}
        <div
          className={`mx-auto flex w-full max-w-5xl flex-col items-center gap-4 transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          <p className="font-serif italic text-[15px] text-accent-lift">
            Now imagine it live, and switchable.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {POVS.map((label, i) => (
              <span key={label} className="flex items-center gap-2">
                <span className="neu-raised-sm rounded-full px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/85">
                  {label}
                </span>
                {i < POVS.length - 1 && <span className="text-foreground/35">→</span>}
              </span>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
            <p className="mr-1 font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/55">
              Why it fits:
            </p>
            {FIT_CRITERIA.map((c) => (
              <span
                key={c}
                className="rounded-full border border-line bg-foreground/[0.03] px-2.5 py-1 text-[11.5px] text-foreground/80"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Beat 2 — same shape fits a handful more */}
        <div
          className={`mx-auto flex w-full max-w-5xl flex-col items-center gap-3 transition-all duration-500 ${
            beat >= 2 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 2}
        >
          <p className="font-serif italic text-[15px] text-accent-lift">
            Same shape, more sports.
          </p>
          <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
            {OTHER_SPORTS.map((s) => (
              <div key={s.name} className="neu-raised-sm rounded-xl px-3 py-3 text-left">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent-lift">
                  {s.name}
                </p>
                <p className="mt-1 text-[12px] leading-snug text-foreground/75">{s.why}</p>
              </div>
            ))}
          </div>
          <p className="mt-1 text-center text-[12.5px] leading-snug text-foreground/65">
            Pick one, prove the engine on it, the others come cheap.
          </p>
        </div>
      </div>
    </Stage>
  );
}
