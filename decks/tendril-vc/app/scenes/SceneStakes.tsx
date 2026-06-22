"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 14 — the stakes.
// Beat 0: global demand frame (50% more food by 2050)
// Beat 1: the personal financial reality — farmers earn -$1,100/year on average
// Beat 2: closer pull-quote

const FARM_STATS = [
  {
    value: "80%",
    label: "Of U.S. farm households",
    body: "rely on off-farm income as their primary source for healthcare, groceries, and daily living expenses.",
  },
  {
    value: "-$1,100",
    label: "Average farm earnings per year",
    body: "Negative. The people feeding the world cannot cover their own costs from farming alone.",
  },
];

export default function SceneStakes({ beat }: SceneProps) {
  return (
    <Stage eyebrow="14 · The stakes">
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-7 text-center">
        <h2 className="text-balance text-[clamp(2rem,4.6vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.035em]">
          By 2050, the world needs 50% more food.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            From the same land, or less.
          </span>
        </h2>

        <p className="max-w-[62ch] text-balance text-[15px] leading-relaxed text-foreground/80">
          The population is exploding. We have to feed billions more people and protect the earth
          long term while we do it. We can&apos;t deforest our way there. Efficiency per acre is the
          only lever, and chemistry has stopped delivering it.
        </p>

        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40">
          Source · UN &amp; FAO, &ldquo;How to Feed the World in 2050&rdquo;
        </p>

        {/* Beat 1 — the personal financial reality */}
        <div
          className={`flex w-full flex-col gap-4 transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
            {FARM_STATS.map((s) => (
              <li key={s.label} className="neu-raised rounded-2xl px-5 py-6 text-left">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
                  {s.label}
                </p>
                <p
                  className="mt-3 font-medium leading-none tracking-[-0.04em] text-accent"
                  style={{ fontSize: "clamp(2.4rem,5vw,4rem)" }}
                >
                  {s.value}
                </p>
                <p className="mt-3 text-[13px] leading-snug text-foreground/75">{s.body}</p>
              </li>
            ))}
          </ul>
          <p className="max-w-[58ch] text-balance text-[14px] leading-relaxed text-foreground/70 mx-auto">
            Slash their input costs and that number starts moving.{" "}
            <span className="font-medium text-foreground">
              That is what precision mechanical weeding does.
            </span>
          </p>
        </div>

        {/* Beat 2 — closer */}
        <p
          className={`max-w-[52ch] text-balance text-[clamp(1.2rem,2.4vw,1.8rem)] italic leading-snug text-accent-soft transition-all duration-500 ${
            beat >= 2 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          style={{ fontFamily: "var(--font-fraunces)" }}
          aria-hidden={beat < 2}
        >
          Farmers are in a fight to feed the world, the hardest and most durable problem there is.
          We&apos;re building the system that helps them win it.
        </p>
      </div>
    </Stage>
  );
}
