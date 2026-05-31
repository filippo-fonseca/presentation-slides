"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 14 — Who we'd call first. Matt Griggs.

const BEATS = [
  {
    label: "Reachable",
    body: "A fifth-generation owner-operator with his own YouTube channel, not a procurement department. Call a dozen like him and we get meetings.",
  },
  {
    label: "Squeezed",
    body: "Commodity margins are razor-thin and tightening with trade and input costs. A farm like this needs the savings most.",
  },
  {
    label: "Already aligned",
    body: "He built his name on reducing synthetic inputs. A chemical-free system is already his philosophy: the ideal first design partner.",
  },
];

export default function SceneGriggs({ beat }: SceneProps) {
  return (
    <Stage eyebrow="13 · Who we'd call first">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-5">
        <h2 className="mx-auto max-w-[40ch] text-balance text-center text-[clamp(1.85rem,3.8vw,2.8rem)] font-medium leading-[1.05] tracking-[-0.03em]">
          This isn&apos;t hypothetical.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Meet Matt Griggs.
          </span>
        </h2>

        {/* Profile row: photo + bio */}
        <div className="neu-raised grid w-full grid-cols-1 items-center gap-4 rounded-2xl p-4 sm:grid-cols-[auto_1fr] sm:gap-5">
          {/* Photo slot — drop a file at /public/images/griggs.jpg to fill */}
          <div className="relative mx-auto size-28 shrink-0 overflow-hidden rounded-full border border-line sm:size-32">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/griggs.jpg"
              alt="Matt Griggs, 5th-generation Tennessee farmer"
              className="size-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 -z-10 flex items-center justify-center bg-gradient-to-br from-[#B5D33D]/30 to-[#E5602C]/30 font-medium tracking-[-0.04em] text-foreground/80"
              style={{ fontSize: "clamp(2.2rem,4vw,2.6rem)", fontFamily: "var(--font-fraunces)" }}
            >
              MG
            </div>
          </div>
          <div className="text-left">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-soft">
              Matt Griggs · Humboldt, TN
            </p>
            <p className="mt-1 text-[clamp(1.05rem,1.6vw,1.2rem)] font-medium leading-tight tracking-[-0.02em] text-foreground">
              5th-generation farmer. ~2,000 acres of cotton, corn, soybeans &amp; wheat.
            </p>
            <p className="mt-2 text-[13px] leading-snug text-foreground/80">
              Watch his WIRED interview and you&apos;ll be shocked at the depth: he talks fluently
              about agronomy, soil health, trade policy, equipment economics, GPS-line precision,
              the mortality rate of farming as a profession. The kind of operator a system like
              ours needs to be built{" "}
              <span className="italic text-accent-soft" style={{ fontFamily: "var(--font-fraunces)" }}>with,</span>{" "}
              not built{" "}
              <span className="italic text-foreground/55" style={{ fontFamily: "var(--font-fraunces)" }}>for.</span>
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/55">
              WIRED · &ldquo;Farmer Answers Farming Questions&rdquo; (2025) · 2.1M views
            </p>
          </div>
        </div>

        {/* Hero stat row — revenue / profit / loss */}
        <div className="neu-lit w-full rounded-2xl px-5 py-5 text-center">
          <div className="grid grid-cols-3 items-end gap-3">
            <div>
              <p
                className="font-medium leading-none tracking-[-0.04em] text-accent count-up"
                style={{ fontSize: "clamp(1.8rem,3.6vw,3rem)" }}
              >
                $1.8M
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
                Annual revenue
              </p>
            </div>
            <div>
              <p
                className="font-medium leading-none tracking-[-0.04em] text-foreground/85 count-up"
                style={{ fontSize: "clamp(1.5rem,3vw,2.4rem)" }}
              >
                $92K
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/55">
                Profit, good year
              </p>
            </div>
            <div>
              <p
                className="font-medium leading-none tracking-[-0.04em] count-up"
                style={{ fontSize: "clamp(1.5rem,3vw,2.4rem)", color: "#c46a6a" }}
              >
                −$300K
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/55">
                Loss, last year
              </p>
            </div>
          </div>
          <p
            className="mx-auto mt-4 max-w-[64ch] text-balance text-[clamp(0.95rem,1.5vw,1.1rem)] italic leading-snug text-accent-soft"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Razor-thin in a good year. Underwater in a bad one. And he&apos;s one of 1.9 million.
          </p>
        </div>

        {/* 3 reasons row */}
        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {BEATS.map((b, i) => {
            const visible = beat >= i + 1;
            return (
              <li
                key={b.label}
                aria-hidden={!visible}
                className={`neu-raised-sm rounded-2xl px-4 py-4 text-left transition-all duration-500 ${
                  visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-soft">
                  {String(i + 1).padStart(2, "0")} · {b.label}
                </p>
                <p className="mt-1.5 text-[13px] leading-snug text-foreground/85">{b.body}</p>
              </li>
            );
          })}
        </ul>

        {/* Free-partner pitch */}
        <div
          aria-hidden={beat < 4}
          className={`neu-lit w-full rounded-2xl p-5 text-left transition-all duration-500 ${
            beat >= 4 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
            How we&apos;d approach him
          </p>
          <p
            className="mt-2 text-balance text-[clamp(1.05rem,1.7vw,1.3rem)] italic leading-snug text-foreground"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            &ldquo;Let us partner with you, for free. We come to your farm, learn how you run it,
            test on your ground. You don&apos;t have to do a thing. If it works and you want to
            buy in later, you get a friend&apos;s rate.&rdquo;
          </p>
          <p className="mt-3 text-[12.5px] leading-snug text-foreground/70">
            There are millions like him. We just have to pick up the phone. I&apos;m sure
            they&apos;d be willing to try.
          </p>
        </div>
      </div>
    </Stage>
  );
}
