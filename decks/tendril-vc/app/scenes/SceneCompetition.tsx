"use client";

import Image from "next/image";
import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 09 — the closest comps. Carbon Robotics + Aigen cards on beat 0, the
// public demo-footage observation on beat 1, the "had a baby" thesis line on
// beat 2. Framed as category definition, not a jab: everything cited is public.

const COMPS = [
  {
    logo: "/logos/carbon-robotics-logo.svg",
    name: "Carbon Robotics",
    logoW: 150,
    raised: "$185M+ raised",
    tag: "Big and bulky",
    body: "A tractor-pulled laser weeder. Millimeter-accurate, six figures, one job.",
  },
  {
    logo: "/logos/aigen-logo.svg",
    name: "Aigen",
    logoW: 86,
    raised: "$19M raised",
    tag: "Small but blind",
    body: "A solar robot that blade-weeds. Drives itself, one job, no orchestration.",
  },
];

export default function SceneCompetition({ beat }: SceneProps) {
  return (
    <Stage eyebrow="09 · The closest comps">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-6">
        <h2 className="text-balance text-center text-[clamp(1.8rem,3.8vw,2.8rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          The field&apos;s best-funded names{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            each still do exactly one job.
          </span>
        </h2>

        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {COMPS.map((c) => (
            <div key={c.name} className="neu-raised flex flex-col gap-3 rounded-2xl px-5 py-5">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex w-fit items-center rounded-lg bg-[#f4f2e9] px-3 py-2">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={c.logoW}
                    height={26}
                    unoptimized
                    className="h-[22px] w-auto"
                  />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/45">
                  {c.tag}
                </span>
              </div>
              <p className="text-[12.5px] leading-snug text-foreground/75">{c.body}</p>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-foreground/45">
                {c.raised}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`flex w-full max-w-3xl flex-col gap-2.5 transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/45">
            Even Aigen&apos;s own demo reel hints at it
          </p>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch">
            <div
              className="neu-raised w-full overflow-hidden rounded-2xl sm:w-[55%]"
              data-no-advance
            >
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/u7uVvPGonMw"
                  title="Aigen Element demo video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  style={{ border: "none" }}
                />
              </div>
            </div>
            <blockquote className="neu-raised flex flex-1 flex-col justify-center rounded-2xl px-5 py-4 text-left">
              <p className="text-[13.5px] italic leading-snug text-foreground/85">
                &ldquo;A lousy film with incredibly short sequences showing the robot at work 😞 What
                do they hide??&rdquo;
              </p>
              <footer className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/45">
                Public comment on Aigen&apos;s Element video
              </footer>
            </blockquote>
          </div>
          <p className="text-center text-[12.5px] leading-snug text-foreground/65">
            A point tool is easy to show for two seconds. A system is what actually runs the farm.
          </p>
        </div>

        <p
          className={`max-w-[54ch] text-balance text-center text-[clamp(1.15rem,2.1vw,1.6rem)] italic leading-snug text-accent transition-all duration-500 ${
            beat >= 2 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 2}
        >
          John Deere&apos;s robustness, Aigen&apos;s modularity, glued by Jarvis. That&apos;s the farm
          OS.
        </p>
      </div>
    </Stage>
  );
}
