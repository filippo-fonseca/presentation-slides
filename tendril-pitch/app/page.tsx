import Link from "next/link";
import Mark from "./components/Mark";
import Rotator from "./components/Rotator";
import YaleMark from "./components/YaleMark";

const ROTATING_PHRASES = [
  "the open field.",
  "every plant.",
  "1.9M family farms.",
  "the soil itself.",
  "every grower.",
];

const PILLARS = [
  {
    label: "Sees every plant",
    body: "Small robots roll through your field and look at every leaf. Weeds, pests, disease, damage. Nothing slips through.",
  },
  {
    label: "Learns your land",
    body: "Your field gets smarter the longer we run it. We remember which corners need help year after year, so problems get caught before they spread.",
  },
  {
    label: "Knows what to do",
    body: "You get a clear, plain-language picture of what each acre needs. The easy decisions, we make for you. The big ones, you make with confidence.",
  },
  {
    label: "Does it gently",
    body: "No blanket spraying. Our robots handle weeds and pests mechanically and treat plants one at a time. Less chemistry, less compaction, less waste.",
  },
];

export default function Home() {
  return (
    <main className="relative flex min-h-svh flex-col overflow-x-clip bg-background text-foreground grain">
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-foreground focus-visible:px-3 focus-visible:py-2 focus-visible:text-[13px] focus-visible:font-medium focus-visible:text-background"
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="relative z-30 flex shrink-0 items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-center gap-2.5 text-foreground/90 transition-colors hover:text-foreground">
          <Mark size={28} />
          <span
            className="text-[19px] italic tracking-[-0.025em]"
            style={{ fontFamily: "var(--font-fraunces)", fontWeight: 600 }}
          >
            Tendril
          </span>
        </Link>
        <nav className="flex items-center gap-2.5">
          <Link
            href="/deck"
            className="neu-raised-sm hidden h-9 items-center gap-2 rounded-full px-4 font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/85 transition-colors hover:text-foreground sm:inline-flex"
          >
            Pitch deck
          </Link>
          <a
            href="mailto:filippo.fonseca@yale.edu"
            className="neu-light inline-flex h-9 items-center gap-2 rounded-full px-4 font-mono text-[10.5px] uppercase tracking-[0.22em]"
          >
            Get in touch
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="main"
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-10 text-center sm:px-10 sm:py-6"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 glow-radial blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        <div className="animate-fade-in delay-200 relative mb-4">
          <Mark size={160} />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <p className="neu-raised-sm animate-fade-up delay-300 mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/80">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(229,96,44,0.8)]" />
            </span>
            Agtech · in development
          </p>

          {/* Headline: static text with the italic rotating phrase inline. */}
          <h1 className="animate-fade-up delay-500 mx-auto max-w-[28ch] text-balance text-center text-[clamp(1.85rem,4.8vw,3.8rem)] font-medium leading-[1.04] tracking-[-0.035em] text-foreground">
            An agentic operating system for{" "}
            <span
              className="italic font-normal text-accent-soft"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              <Rotator phrases={ROTATING_PHRASES} />
            </span>
          </h1>

          <p className="animate-fade-up delay-700 mx-auto mt-5 max-w-[58ch] text-balance text-[clamp(0.92rem,1.15vw,1.075rem)] leading-relaxed text-foreground/80 sm:max-w-[78ch]">
            We are building the brain that runs a farm: perception, memory, decision, action.
            Delivered through a coordinated fleet of small, modular, chemical-free robots, and
            a live field-health dashboard. Designed with family farms, not for them.
          </p>

          <p className="animate-fade-up delay-1000 mt-3 font-mono text-[11px] uppercase tracking-[0.32em] text-foreground/55">
            <span className="text-foreground/80">Smaller</span>
            <span className="mx-2 text-foreground/35">·</span>
            <span className="text-foreground/80">Smarter</span>
            <span className="mx-2 text-foreground/35">·</span>
            <span className="text-foreground/80">Greener</span>
          </p>

          <div className="animate-fade-up delay-1000 mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3">
            <Link
              href="/deck"
              className="neu-light inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13.5px] font-medium"
            >
              View the pitch deck
              <span aria-hidden>→</span>
            </Link>
            <a
              href="mailto:filippo.fonseca@yale.edu"
              className="neu-raised-sm inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13.5px] text-foreground/90 transition-colors hover:text-foreground"
            >
              Get in touch
            </a>
          </div>

          {/* Yale credit strip */}
          <div className="animate-fade-up delay-1000 mt-6 flex flex-col items-center gap-1.5 text-[12px] text-foreground/65">
            <span className="flex items-center gap-2">
              Built by engineers at <YaleMark height={13} /> on global food security and
              chemical-free farming.
            </span>
          </div>
        </div>
      </section>

      {/* What it does — for the grower */}
      <section className="relative z-10 border-t border-line px-6 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="mx-auto max-w-[68ch] text-center">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-accent-soft">
              On the farm
            </p>
            <h2 className="mt-2 text-balance text-[clamp(1.6rem,3vw,2.4rem)] font-medium leading-[1.05] tracking-[-0.025em]">
              Your farm,{" "}
              <span
                className="italic font-normal text-accent"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                smarter every season.
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-[58ch] text-balance text-[14px] leading-relaxed text-foreground/75">
              We send small robots into your field. They look at every plant, learn what
              your land needs, and quietly take care of the work that doesn&apos;t need to
              be yours.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <li
                key={p.label}
                className="neu-raised-sm rounded-2xl px-4 py-5 text-left"
              >
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-soft">
                  {String(i + 1).padStart(2, "0")} · {p.label}
                </p>
                <p className="mt-2 text-[13.5px] leading-snug text-foreground/85">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mission strip */}
      <section className="relative z-10 px-6 pb-10 sm:px-10 sm:pb-12">
        <div className="mx-auto max-w-5xl">
          <div className="neu-lit rounded-2xl px-6 py-8 text-center">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-accent">
              The bigger picture
            </p>
            <p
              className="mx-auto mt-3 max-w-[62ch] text-balance text-[clamp(1.05rem,1.85vw,1.4rem)] italic leading-snug text-foreground"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Two billion more mouths by 2084. The same arable land. The only real lever
              is efficiency per acre, without clearing more forest. That&apos;s the company.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 shrink-0 border-t border-line">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-2 px-6 py-4 text-[11.5px] text-foreground/70 sm:flex-row sm:items-center sm:px-10">
          <p>
            <a
              href="https://www.ers.usda.gov/data-products/ag-and-food-statistics-charting-the-essentials/farming-and-farm-income/"
              target="_blank"
              rel="noopener noreferrer"
              title="Source: USDA ERS, America's Farms & Ranches at a Glance (2023)"
              className="text-foreground/90 underline decoration-foreground/20 underline-offset-[3px] transition-colors hover:text-foreground hover:decoration-foreground/60"
            >
              96% of U.S. farms are family-owned.
            </a>{" "}
            About 1.9 million of them. We&apos;re building with them, not for them.
          </p>
          <div className="flex items-center gap-5 font-mono text-[10.5px] uppercase tracking-[0.16em]">
            <span>© 2026 Tendril</span>
            <Link href="/deck" className="transition-colors hover:text-foreground">
              Pitch deck
            </Link>
            <a
              href="mailto:filippo.fonseca@yale.edu"
              className="transition-colors hover:text-foreground"
            >
              filippo.fonseca@yale.edu
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
