"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Beat 0: Walter's story — the human cost of parts pairing and locked diagnostics
// Beat 1: Deere's financial model + the legal claim + broader pattern

export default function SceneLockIn({ beat }: SceneProps) {
  return (
    <Stage eyebrow="09 · The lock-in tax">
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-5 text-center">
        <h2 className="text-balance text-[clamp(1.8rem,3.8vw,2.8rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          A $150 part.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            A $5,000 bill.
          </span>
        </h2>

        {/* Beat 0 — Walter's story */}
        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <div className="neu-raised flex flex-1 flex-col gap-3 rounded-2xl p-5 text-left">
            <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-accent">
              Walter's tractor · hay season
            </p>
            <p className="text-[13px] leading-relaxed text-foreground/85">
              His tractor kept randomly shutting down. The fuel filter — the only
              self-serviceable fix — did nothing. The dealer couldn't come for{" "}
              <span className="font-medium text-foreground">a week</span>. Once the tractor was
              brought in, diagnosis took{" "}
              <span className="font-medium text-foreground">a month</span>. Root cause: a faulty
              sensor. Swapped in a couple of hours. The part cost{" "}
              <span className="font-medium text-foreground">$150</span>.
            </p>
            <p className="text-[13px] leading-relaxed text-foreground/85">
              Final bill:{" "}
              <span className="font-semibold text-accent">~$5,000</span>. Plus a hay crop
              degraded by rain that fell during the wait. Hay quality does not pause for dealer
              availability.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-[38%]">
            <div className="neu-raised flex flex-1 flex-col gap-2 rounded-2xl p-5 text-left">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-accent-soft">
                Why it can't be fixed faster
              </p>
              <p className="text-[12.5px] leading-snug text-foreground/80">
                Modern tractors require proprietary software to diagnose faults{" "}
                <span className="italic">and</span> to reprogram replacement parts. John Deere
                will not sell, lend, or rent those tools to farmers or independent mechanics.
                Only authorized dealers can run the software.
              </p>
            </div>
            <div className="neu-sage flex flex-1 flex-col gap-2 rounded-2xl p-5 text-left">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-accent">
                Parts pairing
              </p>
              <p className="text-[12.5px] leading-snug text-foreground/80">
                Even a genuine OEM replacement part won't work until dealer software pairs it to
                the machine. Farmers are locked out of their own equipment by design.
              </p>
            </div>
          </div>
        </div>

        {/* Beat 1 — the business model behind it + the legal claim */}
        <div
          className={`flex w-full flex-col gap-3 transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="neu-raised rounded-2xl px-5 py-5 text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
                Service vs. equipment profit
              </p>
              <p
                className="mt-2 font-medium leading-none tracking-[-0.04em] text-accent"
                style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
              >
                5×
              </p>
              <p className="mt-2 text-[12px] leading-snug text-foreground/70">
                John Deere earns five times more profit from service and repair than from
                selling new equipment. The breakdown is the product.
              </p>
            </div>
            <div className="neu-raised rounded-2xl px-5 py-5 text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
                Profits up · CEO pay up
              </p>
              <p
                className="mt-2 font-medium leading-none tracking-[-0.04em] text-accent"
                style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
              >
                61% / 160%
              </p>
              <p className="mt-2 text-[12px] leading-snug text-foreground/70">
                Deere profits up 61% in recent years. CEO compensation up 160%. The farmer's
                repair bill is a line item in that growth.
              </p>
            </div>
            <div className="neu-raised rounded-2xl px-5 py-5 text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
                This is not unique to Deere
              </p>
              <p
                className="mt-2 font-medium leading-none tracking-[-0.04em] text-accent"
                style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
              >
                Apple. Harley. McDonald's.
              </p>
              <p className="mt-2 text-[12px] leading-snug text-foreground/70">
                Parts pairing started with Apple. Harley voids warranties for non-dealer repairs.
                Taylor (McDonald's soft serve machines) locks out techs. The farmer just has more
                to lose.
              </p>
            </div>
          </div>

          <p
            className="max-w-[58ch] text-balance text-[clamp(1.1rem,2.1vw,1.6rem)] italic leading-snug text-accent-soft"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            John Deere is now arguing that farmers don&apos;t legally own their tractors.
            We think the farmer should own the field and everything in it.
          </p>
        </div>
      </div>
    </Stage>
  );
}
