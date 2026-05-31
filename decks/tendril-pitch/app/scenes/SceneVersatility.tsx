"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Versatility — the agentic layer isn't tied to plants. SwagBot (Sydney) is
// the same shape, repointed at cattle. Three reveal beats:
//   0 — title + framing + SwagBot card
//   1 — five SwagBot capabilities land
//   2 — italic kicker: same brain, different limbs

const CAPABILITIES = [
  {
    label: "Herding",
    body: "Guides cows to optimal grazing areas. No fences: voice recordings and a towed food trailer train the herd to follow it.",
  },
  {
    label: "Pasture assessment",
    body: "Reads soil moisture, plant type, and vegetation density in real time. Routes animals to the best forage and prevents overgrazing.",
  },
  {
    label: "Livestock monitoring",
    body: "Watches individual cows. Tracks movement and flags health and well-being issues.",
  },
  {
    label: "Targeted spray",
    body: "Computer-vision weed ID with a sprayer that only hits the weeds actually there.",
  },
  {
    label: "Farm maintenance",
    body: "Tows heavy trailers across rugged outback terrain. Replaces the physically demanding work.",
  },
];

/* A tiny cow silhouette to punctuate the SwagBot framing. */
function CowGlyph({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 44" fill="none" aria-hidden>
      {/* Body */}
      <ellipse cx="34" cy="24" rx="20" ry="10" fill="#f4f1ea" opacity="0.92" />
      {/* Patches */}
      <ellipse cx="26" cy="22" rx="6" ry="3.5" fill="#0a0a0a" opacity="0.85" />
      <ellipse cx="42" cy="26" rx="5" ry="3" fill="#0a0a0a" opacity="0.85" />
      {/* Head */}
      <ellipse cx="14" cy="22" rx="7" ry="6" fill="#f4f1ea" />
      {/* Ear */}
      <ellipse cx="11" cy="17" rx="2" ry="3" fill="#f4f1ea" transform="rotate(-25 11 17)" />
      {/* Eye */}
      <circle cx="12" cy="22" r="0.9" fill="#0a0a0a" />
      {/* Horn — chartreuse tendril nod */}
      <line x1="15" y1="16" x2="14" y2="11" stroke="#B5D33D" strokeWidth="1.4" strokeLinecap="round" />
      {/* Legs */}
      <line x1="22" y1="32" x2="22" y2="40" stroke="#f4f1ea" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="30" y1="33" x2="30" y2="40" stroke="#f4f1ea" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="33" x2="40" y2="40" stroke="#f4f1ea" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="48" y1="32" x2="48" y2="40" stroke="#f4f1ea" strokeWidth="2.5" strokeLinecap="round" />
      {/* Tail */}
      <path d="M53 22 C 57 22, 58 26, 56 30" stroke="#f4f1ea" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function SceneVersatility({ beat }: SceneProps) {
  return (
    <Stage eyebrow="27 · Versatility">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-6">
        <div className="mx-auto max-w-[72ch] text-center">
          <p
            className="mb-2 text-balance text-[clamp(0.95rem,1.4vw,1.1rem)] italic leading-snug text-accent-soft"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            One more thing, because this matters for the size of the bet…
          </p>
          <h2 className="text-balance text-[clamp(1.8rem,3.6vw,2.8rem)] font-medium leading-[1.05] tracking-[-0.03em]">
            And it doesn&apos;t have to be{" "}
            <span
              className="italic font-normal text-accent"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              just plants.
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-[64ch] text-balance text-[14.5px] leading-relaxed text-foreground/85">
            The agentic layer wraps anything that lives on a field. A research team at the
            University of Sydney already built the same shape, pointed at cattle.
          </p>
        </div>

        {/* SwagBot intro card */}
        <div className="neu-raised grid w-full grid-cols-1 items-center gap-4 rounded-2xl p-4 sm:grid-cols-[auto_1fr] sm:gap-5">
          <div className="relative mx-auto flex size-28 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-gradient-to-br from-accent/20 to-accent-soft/15 sm:size-32">
            <CowGlyph size={64} />
          </div>
          <div className="text-left">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-soft">
              SwagBot · University of Sydney
            </p>
            <p className="mt-1 text-[clamp(1.05rem,1.6vw,1.2rem)] font-medium leading-tight tracking-[-0.02em] text-foreground">
              A &ldquo;smart cow&rdquo; for large-scale livestock and pasture management.
            </p>
            <p className="mt-2 text-[13px] leading-snug text-foreground/80">
              Autonomous agricultural robot built by researchers in Sydney. Same loop as ours
              (perceive · remember · decide · act), repointed at herds instead of rows. Proof
              that the agentic-layer shape generalizes.
            </p>
          </div>
        </div>

        {/* Five capability cards */}
        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {CAPABILITIES.map((c, i) => {
            const visible = beat >= 1;
            return (
              <li
                key={c.label}
                aria-hidden={!visible}
                className={`neu-raised-sm rounded-2xl px-4 py-4 text-left transition-all duration-500 ${
                  visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
                  {String(i + 1).padStart(2, "0")} · {c.label}
                </p>
                <p className="mt-2 text-[12.5px] leading-snug text-foreground/85">{c.body}</p>
              </li>
            );
          })}
        </ul>

        {/* Kicker */}
        <div
          aria-hidden={beat < 2}
          className={`neu-lit mx-auto w-full max-w-[72ch] rounded-2xl px-5 py-4 text-center transition-all duration-500 ${
            beat >= 2 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
            What this means for us
          </p>
          <p
            className="mx-auto mt-2 max-w-[60ch] text-balance text-[clamp(1.05rem,1.7vw,1.3rem)] italic leading-snug text-foreground"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Same brain. Different limbs. Plants today, cattle tomorrow, anything that lives on
            a field. The agentic layer is the constant.
          </p>
        </div>
      </div>
    </Stage>
  );
}
