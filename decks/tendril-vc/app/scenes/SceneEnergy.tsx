"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Beat 0: Big machine vs swarm — the energy contrast
// Beat 1: Solar recharge mechanic + the pull-quote

const CONTRAST = [
  {
    side: "Big machine",
    color: "text-foreground/45",
    border: "border-foreground/10",
    items: [
      "Diesel-powered, 6–15 gal/hr",
      "30,000+ lb soil compaction",
      "$40–60/hr in fuel alone",
      "Single task, wide pass",
      "Idle burn while repositioning",
    ],
  },
  {
    side: "Tendril swarm",
    color: "text-accent",
    border: "border-accent/25",
    items: [
      "Fully electric, solar-charged",
      "Featherweight — zero compaction",
      "Near-zero marginal energy cost",
      "Multiple tasks in parallel",
      "No idle — each bot works its row",
    ],
  },
];

const STATS = [
  {
    value: "~0¢",
    label: "Marginal fuel cost per acre",
    body: "In direct sunlight, solar input offsets or exceeds the bot's draw during slow row work. The battery never depletes.",
  },
  {
    value: "Solar",
    label: "Recharges as they work",
    body: "Onboard panels charge continuously during operation. No downtime to drive back to a charger. No diesel tank to refill.",
  },
  {
    value: "0",
    label: "Emissions in the field",
    body: "No exhaust, no fuel spill risk, no diesel particulates over the crop. Electric from the panel to the wheel.",
  },
];

export default function SceneEnergy({ beat }: SceneProps) {
  return (
    <Stage eyebrow="08 · Clean energy by design">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-6 text-center">
        <h2 className="text-balance text-[clamp(1.8rem,3.8vw,2.8rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          Replace the diesel giant{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            with a solar swarm.
          </span>
        </h2>

        {/* Beat 0 — contrast + stat cards */}
        <div className="flex w-full flex-col gap-4">
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
            {CONTRAST.map((col) => (
              <div
                key={col.side}
                className={`neu-raised rounded-2xl p-5 text-left ${col.border} border`}
              >
                <p className={`font-mono text-[10px] uppercase tracking-[0.22em] ${col.color}`}>
                  {col.side}
                </p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12.5px] leading-snug text-foreground/80">
                      <span className={`mt-[3px] shrink-0 text-[8px] ${col.color}`}>■</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
            {STATS.map((s) => (
              <li key={s.label} className="neu-raised rounded-2xl px-5 py-6 text-left">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
                  {s.label}
                </p>
                <p
                  className="mt-3 font-medium leading-none tracking-[-0.04em] text-accent"
                  style={{ fontSize: "clamp(2rem,4.5vw,3.4rem)" }}
                >
                  {s.value}
                </p>
                <p className="mt-3 text-[12.5px] leading-snug text-foreground/75">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Beat 1 — the mechanism + closer */}
        <div
          className={`flex w-full flex-col items-center gap-4 transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          <div className="neu-inset w-full rounded-2xl px-6 py-4 text-left text-[13.5px] leading-relaxed text-foreground/80">
            A conventional self-propelled sprayer covers 100 acres per hour but burns diesel the
            entire time, compacts topsoil with every pass, and idles between rows. A solar swarm
            draws minimal power at field pace. In direct sunlight,{" "}
            <span className="font-medium text-foreground">
              onboard panels generate enough to offset the motors
            </span>
            , meaning the fleet runs continuously through the day without ever stopping to charge.
            The energy cost per acre approaches zero. The compaction cost is exactly zero.
          </div>

          <p
            className="max-w-[52ch] text-balance text-[clamp(1.1rem,2.2vw,1.65rem)] italic leading-snug text-accent-soft"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Power-hungry equipment for one pass a season, or a swarm that never stops, never
            refuels, and gets cheaper every year the sun keeps rising.
          </p>
        </div>
      </div>
    </Stage>
  );
}
