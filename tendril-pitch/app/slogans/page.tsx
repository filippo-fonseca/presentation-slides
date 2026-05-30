// Slogan chooser. Each option renders as a cover-style lock-up so you can
// see how it lands in the deck's actual typography. Send a number and I'll
// wire it into SceneCover.tsx (and the metadata description / SPEAKER_NOTES).

import type { Metadata } from "next";
import Link from "next/link";
import Mark from "../components/Mark";

export const metadata: Metadata = { title: "Slogan options" };

type Angle =
  | "OS / Management"
  | "Intelligence"
  | "Swarm / Tendrils"
  | "Memory"
  | "Less spray"
  | "Direct";

type Slogan = {
  id: string;
  text: string;
  angle: Angle;
  note: string;
};

const SLOGANS: Slogan[] = [
  // OS / Management
  {
    id: "S01",
    text: "The operating system for the open field.",
    angle: "OS / Management",
    note: "Current. Confident, technical, slightly cold. The “Linux for farms” framing.",
  },
  {
    id: "S02",
    text: "Run the field.",
    angle: "OS / Management",
    note: "Echoes the close (“we manage the field”). Three words, very punchy. Most repeatable.",
  },
  {
    id: "S03",
    text: "Manage the field, don't just farm it.",
    angle: "OS / Management",
    note: "Calls out the shift — from labor to management. Reads as a thesis sentence, not a tagline.",
  },

  // Intelligence
  {
    id: "S04",
    text: "A brain for every acre.",
    angle: "Intelligence",
    note: "Direct restatement of the deck thesis. Warm and easy to remember.",
  },
  {
    id: "S05",
    text: "The agentic layer for the open field.",
    angle: "Intelligence",
    note: "More technical. Targets the YC-fluent crowd. Slightly insider.",
  },
  {
    id: "S06",
    text: "Per-plant intelligence, at fleet scale.",
    angle: "Intelligence",
    note: "Pairs the two strongest specifics. Reads like a product positioning line, not a brand line.",
  },

  // Swarm / Tendrils
  {
    id: "S07",
    text: "Many tendrils. One mind.",
    angle: "Swarm / Tendrils",
    note: "Most on-brand for the name. Cinematic, fits Fraunces italic well.",
  },
  {
    id: "S08",
    text: "Reach every plant.",
    angle: "Swarm / Tendrils",
    note: "Three words. The tendril metaphor without saying tendril.",
  },

  // Memory
  {
    id: "S09",
    text: "A field that remembers.",
    angle: "Memory",
    note: "Leads with the moat. Quietest of the set, most poetic.",
  },
  {
    id: "S10",
    text: "Every plant, remembered.",
    angle: "Memory",
    note: "Compresses moat + perception into three words. Italic-serif-friendly.",
  },

  // Less spray
  {
    id: "S11",
    text: "Less chemistry. More attention.",
    angle: "Less spray",
    note: "Mission-led. Reads as positioning against the chemical treadmill.",
  },
  {
    id: "S12",
    text: "We don't spray. We pay attention.",
    angle: "Less spray",
    note: "First-person, contrarian. Sounds like Filippo on stage, not on a billboard.",
  },

  // Direct
  {
    id: "S13",
    text: "Smaller robots. Bigger brain.",
    angle: "Direct",
    note: "Plain English. Lands the small-plus-smart insight in five words.",
  },
  {
    id: "S14",
    text: "Smart farms. Without the spray.",
    angle: "Direct",
    note: "Closest to a marketing line. Most accessible to non-technical readers.",
  },
];

/* Cover-style lock-up that mirrors SceneCover.tsx so you can see the slogan in
 * the deck's real typography. */
function CoverPreview({ slogan }: { slogan: string }) {
  return (
    <div className="relative flex h-72 w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-background px-4">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 glow-radial blur-3xl"
      />
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-3">
          <Mark size={56} />
        </div>
        <p className="neu-raised-sm mb-3 inline-flex items-center gap-2 rounded-full px-2.5 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.2em] text-foreground/80">
          <span className="size-1 rounded-full bg-accent shadow-[0_0_6px_rgba(229,96,44,0.8)]" />
          Internal: founders&apos; pitch
        </p>
        <h1 className="text-balance text-[clamp(1.8rem,2.8vw,2.6rem)] font-medium leading-[0.96] tracking-[-0.04em] text-foreground">
          Tendril
        </h1>
        <p
          className="mt-2 max-w-[28ch] text-balance text-[clamp(0.85rem,1.05vw,1rem)] italic font-normal leading-snug text-accent-soft"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          {slogan}
        </p>
      </div>
    </div>
  );
}

const ANGLE_TONES: Record<Angle, string> = {
  "OS / Management": "text-accent",
  "Intelligence":    "text-accent-soft",
  "Swarm / Tendrils":"text-accent",
  "Memory":          "text-accent-soft",
  "Less spray":      "text-accent",
  "Direct":          "text-foreground/65",
};

export default function SlogansPage() {
  return (
    <main className="relative min-h-svh bg-background px-6 py-10 text-foreground sm:px-12 sm:py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-3">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-accent-soft">
            Tendril · slogan options
          </p>
          <h1 className="text-balance text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-[1.04] tracking-[-0.03em]">
            Pick the line under{" "}
            <span
              className="italic font-normal text-accent"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              the wordmark.
            </span>
          </h1>
          <p className="max-w-[70ch] text-[14px] leading-relaxed text-foreground/75">
            Fourteen options across six angles. Each preview shows the slogan in
            the deck&apos;s actual cover lock-up (Tendril wordmark in Hanken, slogan
            in italic Fraunces, persimmon glow). Send a number (S01–S14) and I&apos;ll
            wire it into the cover scene and the metadata description.
          </p>
          <Link
            href="/"
            className="neu-raised-sm mt-1 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-foreground"
          >
            <span aria-hidden>←</span> Back to deck
          </Link>
        </header>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SLOGANS.map((s) => (
            <li key={s.id} className="neu-raised flex flex-col gap-4 rounded-2xl p-5">
              <CoverPreview slogan={s.text} />

              <div className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between gap-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                      {s.id}
                    </span>
                    <span
                      className="text-[clamp(1rem,1.5vw,1.15rem)] font-medium leading-tight tracking-[-0.02em] text-foreground"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      <span className="italic">{s.text}</span>
                    </span>
                  </div>
                  <span
                    className={`shrink-0 font-mono text-[9.5px] uppercase tracking-[0.22em] ${ANGLE_TONES[s.angle]}`}
                  >
                    {s.angle}
                  </span>
                </div>
                <p className="text-[12.5px] leading-snug text-foreground/70">{s.note}</p>
              </div>
            </li>
          ))}
        </ul>

        <footer className="border-t border-line pt-6 text-[12.5px] text-foreground/60">
          Pick a number (S01–S14). I&apos;ll wire it into{" "}
          <code className="rounded bg-foreground/10 px-1.5 py-0.5 font-mono text-[12px]">
            SceneCover.tsx
          </code>
          ,{" "}
          <code className="rounded bg-foreground/10 px-1.5 py-0.5 font-mono text-[12px]">
            theme.ts
          </code>{" "}
          (metadata description), and{" "}
          <code className="rounded bg-foreground/10 px-1.5 py-0.5 font-mono text-[12px]">
            SPEAKER_NOTES.md
          </code>
          .
        </footer>
      </div>
    </main>
  );
}
