"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Beat 0: The repair reality — Griggs' own words, hard cost data, the 20% math
// Beat 1: Family farm stat + food security closer

const STATS = [
  {
    value: "41%",
    label: "Repair cost increase since 2020",
    body: "Parts and labor costs have nearly doubled over two decades. Authorized-dealer lock-in means farmers wait, and pay.",
  },
  {
    value: "$3,348",
    label: "Avg. annual loss from downtime",
    body: "Per farm, per year — just from repair delays and manufacturer restrictions. One 8-hour harvest breakdown costs ~$900.",
    source: true,
  },
  {
    value: "95%",
    label: "Of US farms are family-owned",
    body: "Small family farms under $350K gross income make up 85% of all operations. These are not industrial giants. Source: USDA 2022 Census.",
  },
];

export default function SceneOnus({ beat }: SceneProps) {
  return (
    <Stage eyebrow="17 · Their livelihood, our food">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-6 text-center">

        <div className="flex flex-col items-center gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40">
            Griggs Farm · YouTube
          </p>
          <h2 className="text-balance text-[clamp(1.8rem,3.8vw,2.8rem)] font-medium leading-[1.04] tracking-[-0.03em]">
            &ldquo;Doing more wrenching{" "}
            <span
              className="italic font-normal text-accent"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              than planting.&rdquo;
            </span>
          </h2>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/35">
            See also: &ldquo;A Major In Field Repair!! Cotton Planting Finale&rdquo;
          </p>
        </div>

        {/* Beat 0 — stat cards + 20% math */}
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

        <div className="neu-inset w-full rounded-2xl px-6 py-4 text-left text-[13.5px] leading-relaxed text-foreground/80">
          Offload even{" "}
          <span className="font-semibold text-foreground">20% of the work</span> these machines
          do to a smaller, more reliable robotic swarm and the repair bills shrink, the downtime
          shrinks, and a year that was going to be{" "}
          <span className="font-semibold text-foreground">-$1,100 becomes survivable</span>. For
          a family farm, that math is the difference between staying on the land and losing it.
          A farmer is a lifestyle, not just a job.
        </div>

        {/* Beat 1 — food security + the real stakes */}
        <div
          className={`flex w-full flex-col gap-4 transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="neu-raised rounded-2xl p-5 text-left">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-accent-soft">
                Their problem is our problem
              </p>
              <p className="mt-2 text-[13px] leading-snug text-foreground/85">
                Food production is one of the only issues that affects every single person on
                earth, regardless of country, income, or politics. If family farms cannot
                produce efficiently, the entire supply chain degrades — and there is no backup.
              </p>
            </div>
            <div className="neu-raised rounded-2xl p-5 text-left">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-accent-soft">
                The scale of the dependency
              </p>
              <p className="mt-2 text-[13px] leading-snug text-foreground/85">
                95% of US farms are family operations. They are not Monsanto. They are people
                who inherited land, take on debt every spring, and bet their house on the
                weather. We are building for them, because they are who feeds us.
              </p>
            </div>
          </div>

          <p
            className="max-w-[52ch] text-balance text-[clamp(1.1rem,2.1vw,1.6rem)] italic leading-snug text-accent-soft"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            We depend on these people completely.
            The least we can do is build them better tools.
          </p>
        </div>

      </div>
    </Stage>
  );
}
