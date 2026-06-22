"use client";

import Image from "next/image";
import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Beat 0: Three direct farmer insights from discovery calls
// Beat 1: WIRED video (2M+ views) + partnership signal

const INSIGHTS = [
  {
    tag: "Problem #1",
    quote:
      "Weeds over the last 20 years have quickly adapted to chemistry. We're running out of options.",
    sub: "Herbicide-resistant weeds, soil depletion from tillage fallback, chemistry pipeline running dry.",
    accent: true,
  },
  {
    tag: "Unprompted ask",
    quote:
      "A robot that could go up and down and mechanically get rid of weeds: chopping, targeted lasers, burning.",
    sub: "Said before we described our approach. This is the exact wedge we're building toward.",
    accent: false,
  },
  {
    tag: "Constraint they named",
    quote:
      "We're not in wide-open Midwest fields. Small fields, tree borders. GPS won't work out here.",
    sub: "Small family operation. No capital for enterprise ag tech. Big John Deere assumptions break.",
    accent: false,
  },
];

export default function SceneValidation({ beat }: SceneProps) {
  return (
    <Stage eyebrow="14 · In their own words">
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-6 text-center">
        <h2 className="text-balance text-[clamp(1.8rem,3.8vw,2.8rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          We talked to the farmers.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            They confirmed every bet.
          </span>
        </h2>

        {/* Beat 0 — farmer insight cards */}
        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {INSIGHTS.map((ins) => (
            <li
              key={ins.tag}
              className={`flex flex-col gap-3 rounded-2xl p-5 text-left ${
                ins.accent ? "neu-sage border-accent/20" : "neu-raised"
              }`}
            >
              <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-accent-soft">
                {ins.tag}
              </span>
              <p
                className="text-[13.5px] font-medium leading-snug text-foreground"
                style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic" }}
              >
                &ldquo;{ins.quote}&rdquo;
              </p>
              <p className="mt-auto text-[11.5px] leading-snug text-foreground/60">{ins.sub}</p>
            </li>
          ))}
        </ul>

        {/* Beat 1 — WIRED video + partnership note */}
        <div
          className={`flex w-full flex-col items-center gap-4 transition-all duration-500 sm:flex-row ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          {/* WIRED video embed */}
          <div className="neu-raised w-full overflow-hidden rounded-2xl sm:w-[55%]" data-no-advance>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/D4fDM2Jc4cA"
                title="WIRED — The Future of Farming"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                style={{ border: "none" }}
              />
            </div>
          </div>

          {/* Context */}
          <div className="flex flex-1 flex-col items-start gap-4 text-left">
            <div className="neu-raised w-full rounded-2xl p-5">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-accent-soft">
                WIRED · 2M+ views
              </p>
              <p className="mt-2 text-[13px] leading-snug text-foreground/85">
                The farmer featured in this video is the same one we called.{" "}
                <span className="font-medium text-foreground">He likes what we&apos;re building.</span>{" "}
                WIRED independently confirmed the exact problem we&apos;re attacking: chemical farming
                is failing, and mechanical precision is the only path forward.
              </p>
            </div>
            <div className="neu-sage w-full overflow-hidden rounded-2xl">
              <div className="relative h-24 w-full">
                <Image
                  src="/press/griggs-history-channel.png"
                  alt="The American Farm — History Channel Season 1"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
                <span className="absolute bottom-2 left-3 font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/70">
                  History Channel · The American Farm · S1
                </span>
              </div>
              <div className="p-4">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-accent">
                  Active partnerships
                </p>
                <p className="mt-2 text-[13px] leading-snug text-foreground/85">
                  <span className="font-medium text-foreground">Griggs Farm</span> was featured in
                  Season 1 of the History Channel&apos;s{" "}
                  <span className="italic">The American Farm</span>. We&apos;re working on partnering
                  with them and farms across the country. We&apos;re building with farmers, not at
                  them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Stage>
  );
}
