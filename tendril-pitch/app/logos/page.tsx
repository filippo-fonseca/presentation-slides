// Sprout-T palette explorer — flashier set.
// Push saturation up while staying agtech (earth + plant). Each palette also
// gets a soft accent halo behind the crown node for extra punch.

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Sprout-T palettes (flashy)" };

/* Sprout-T parametrized by primary + accent.  Adds a faint accent-colored
 * halo behind the crown node for the flashier set. */
function SproutT({
  size,
  primary,
  accent,
  glow = true,
}: {
  size: number;
  primary: string;
  accent: string;
  glow?: boolean;
}) {
  const haloId = `halo-${primary.replace("#", "")}-${accent.replace("#", "")}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden>
      {glow && (
        <defs>
          <radialGradient id={haloId} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%"  stopColor={accent} stopOpacity="0.55" />
            <stop offset="60%" stopColor={accent} stopOpacity="0.18" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
      )}
      {/* Soft halo behind the crown */}
      {glow && (
        <circle cx="32" cy="10" r="11" fill={`url(#${haloId})`} />
      )}
      {/* T stem */}
      <path d="M32 58 L 32 22" stroke={primary} strokeWidth="3.6" strokeLinecap="round" />
      {/* Crossbar */}
      <path
        d="M14 22 C 18 22, 22 22, 32 22 C 42 22, 46 22, 50 22"
        stroke={primary} strokeWidth="3.6" strokeLinecap="round"
      />
      {/* Left curl */}
      <path
        d="M14 22 C 10 22, 8 18, 12 14 C 16 10, 22 14, 22 18"
        stroke={primary} strokeWidth="2.3" strokeLinecap="round" fill="none"
      />
      {/* Right curl */}
      <path
        d="M50 22 C 54 22, 56 18, 52 14 C 48 10, 42 14, 42 18"
        stroke={primary} strokeWidth="2.3" strokeLinecap="round" fill="none"
      />
      {/* Stem-to-node line */}
      <line x1="32" y1="22" x2="32" y2="13" stroke={accent} strokeWidth="1.3" opacity="0.75" />
      {/* Crown node */}
      <circle cx="32" cy="10" r="3.4" fill={accent} />
    </svg>
  );
}

type Palette = {
  id: string;
  name: string;
  primary: string;
  accent: string;
  base: "dark" | "light";
  note: string;
};

const PALETTES: Palette[] = [
  {
    id: "F01",
    name: "Electric lime + copper",
    primary: "#C26C2E",
    accent: "#B5E04B",
    base: "dark",
    note: "Warm copper T with a glowing lime crown. Reads as a sprout under a grow light. Most overtly “agtech.”",
  },
  {
    id: "F02",
    name: "Glow copper + matcha",
    primary: "#E07A30",
    accent: "#7BB85A",
    base: "dark",
    note: "Pushed copper and vivid matcha. Both colors louder than the current palette, still earth-tone.",
  },
  {
    id: "F03",
    name: "Marigold + forest",
    primary: "#FFB627",
    accent: "#1f4a30",
    base: "dark",
    note: "Marigold sun-yellow T on near-black with a deep forest crown. Most “harvest” of the set.",
  },
  {
    id: "F04",
    name: "Persimmon + chartreuse",
    primary: "#E5602C",
    accent: "#B5D33D",
    base: "dark",
    note: "Heat + electric green. The flashiest. Reads as a high-energy modern agtech brand.",
  },
  {
    id: "F05",
    name: "Mango + olive",
    primary: "#FF9A3D",
    accent: "#7B8B4A",
    base: "dark",
    note: "Tropical splash grounded by olive. Splashy but not loud.",
  },
  {
    id: "F06",
    name: "Saffron + ivy",
    primary: "#F4B042",
    accent: "#2B6E3C",
    base: "dark",
    note: "Spice and leaf. Saffron T with a deep ivy crown. Confident, slightly heritage.",
  },
  {
    id: "F07",
    name: "Plasma copper + sage glow",
    primary: "#DA702A",
    accent: "#94A56A",
    base: "dark",
    note: "Same DNA as the current palette, dialed up. The flashy version of where we started.",
  },
  {
    id: "F08",
    name: "Citrus + moss",
    primary: "#FF8533",
    accent: "#4D6643",
    base: "dark",
    note: "Bright citrus with a grounded moss crown. Reads alive, sunny, organic.",
  },
  {
    id: "F09",
    name: "Sunset + meadow",
    primary: "#F08030",
    accent: "#5DA34A",
    base: "dark",
    note: "Sunset orange + meadow green. The mark feels like a field at golden hour.",
  },
];

const DARK_BG  = "#0a0a0a";
const LIGHT_BG = "#f4f1ea";

export default function LogosPage() {
  return (
    <main className="relative min-h-svh bg-background px-6 py-10 text-foreground sm:px-12 sm:py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-3">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-accent-soft">
            Tendril · Sprout-T · flashier palettes
          </p>
          <h1 className="text-balance text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-[1.04] tracking-[-0.03em]">
            Louder. But still{" "}
            <span
              className="italic font-normal text-accent"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              soil-and-sun.
            </span>
          </h1>
          <p className="max-w-[70ch] text-[14px] leading-relaxed text-foreground/75">
            Nine higher-saturation palettes on the Sprout-T, each with a soft halo behind
            the crown node for that grow-light glow. Earth tones only (copper / mango /
            saffron / citrus paired with lime / matcha / ivy / forest). Send a number
            (F01–F09) and I&apos;ll wire it into{" "}
            <code className="rounded bg-foreground/10 px-1.5 py-0.5 font-mono text-[12px]">
              app/components/Mark.tsx
            </code>{" "}
            and the deck picks it up.
          </p>
          <Link
            href="/"
            className="neu-raised-sm mt-1 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-foreground"
          >
            <span aria-hidden>←</span> Back to deck
          </Link>
        </header>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PALETTES.map((p) => {
            const primaryBg = p.base === "dark" ? DARK_BG : LIGHT_BG;
            const secondaryBg = p.base === "dark" ? LIGHT_BG : DARK_BG;
            return (
              <li key={p.id} className="neu-raised flex flex-col gap-4 rounded-2xl p-5">
                {/* Big preview on primary background */}
                <div
                  className="relative flex h-48 items-center justify-center rounded-xl"
                  style={{ background: primaryBg }}
                >
                  <SproutT size={130} primary={p.primary} accent={p.accent} />
                </div>

                {/* Swap sample + scale row */}
                <div className="grid grid-cols-[1fr_2fr] gap-2">
                  <div
                    className="flex items-center justify-center rounded-xl"
                    style={{ background: secondaryBg }}
                  >
                    <SproutT size={48} primary={p.primary} accent={p.accent} glow={false} />
                  </div>
                  <div className="flex items-end justify-around gap-2 rounded-xl bg-foreground/5 px-3 py-2">
                    {[40, 28, 18].map((s) => (
                      <div key={s} className="flex flex-col items-center gap-1">
                        <SproutT
                          size={s}
                          primary={p.primary}
                          accent={p.accent}
                          glow={s >= 28}
                        />
                        <span className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-foreground/55">
                          {s}px
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Wordmark sample on cream */}
                <div
                  className="flex items-center justify-between gap-3 rounded-xl px-4 py-3"
                  style={{ background: LIGHT_BG }}
                >
                  <span
                    className="text-[18px] font-medium tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-fraunces)", color: "#0a0a0a" }}
                  >
                    <span className="italic">Tendril</span>
                  </span>
                  <SproutT size={28} primary={p.primary} accent={p.accent} glow={false} />
                </div>

                {/* Caption + hex values */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                      {p.id}
                    </span>
                    <span className="text-[15px] font-medium tracking-[-0.01em] text-foreground">
                      {p.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[10.5px] text-foreground/65">
                    <span
                      className="inline-block size-3 rounded-sm"
                      style={{ background: p.primary }}
                      aria-hidden
                    />
                    <span className="uppercase tracking-[0.12em]">{p.primary}</span>
                    <span className="mx-1 text-foreground/35">/</span>
                    <span
                      className="inline-block size-3 rounded-sm"
                      style={{ background: p.accent }}
                      aria-hidden
                    />
                    <span className="uppercase tracking-[0.12em]">{p.accent}</span>
                  </div>
                  <p className="text-[12.5px] leading-snug text-foreground/70">{p.note}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <footer className="border-t border-line pt-6 text-[12.5px] text-foreground/60">
          Pick a number (F01–F09). The halo behind the crown auto-drops at small sizes so
          the mark stays clean in the deck header.
        </footer>
      </div>
    </main>
  );
}
