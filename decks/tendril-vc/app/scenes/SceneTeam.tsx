"use client";

import Image from "next/image";
import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene (the brain) — moved late so the deck leads with the system. Founders
// with real photos + bios on beat 0; the proven work (Spatial-MemER, iSpy,
// PosturePoke) on beat 1; the honest gap + founder-market-fit line on beat 2.

const FOUNDERS = [
  {
    name: "Filippo Fonseca",
    photo: "/people/filippo.png",
    role: "Hardware, systems & spatial AI",
    bio: "Mechanical Eng. (ABET) + EECS. Robotics, spatial AI, and humanist hardware, built across Stanford, Harvard Medical School, and Yale.",
    linkedin: "https://www.linkedin.com/in/filippo-fonseca/",
  },
  {
    name: "Emir Ahmed",
    photo: "/people/emir.jpeg",
    role: "Computer vision & architecture",
    bio: "EECS. Robotics and ML researcher building human-centered systems; Robotics Lead on the Yale Rover Project.",
    linkedin: "https://www.linkedin.com/in/emir-ahmed-6016422a1/",
  },
  {
    name: "David Antwi",
    photo: "/people/david.jpeg",
    role: "Orchestration, memory & eval",
    bio: "Self-taught full-stack engineer shipping AI products end to end, from search infra to assistive wearables.",
    linkedin: "https://www.linkedin.com/in/david-antwi-b17727205/",
  },
];

const ISPY_COVERAGE =
  "https://techreviewafrica.com/news/4926/ghanaian-student-leads-yale-team-to-second-place-at-google-ai-hackathon-with-vision-assist-device";

// Stanford + Yale lockup, on a light chip so both read on the dark card.
function ResearchMarks() {
  return (
    <span className="inline-flex items-center gap-2 rounded-md bg-[#f4f2e9] px-2 py-1">
      <Image
        src="/logos/stanford-logo.png"
        alt="Stanford"
        width={18}
        height={18}
        unoptimized
        className="h-[18px] w-auto"
      />
      <span className="h-3.5 w-px bg-black/15" />
      <Image
        src="/logos/yale-mark.png"
        alt="Yale"
        width={27}
        height={18}
        unoptimized
        className="h-[13px] w-auto"
      />
    </span>
  );
}

export default function SceneTeam({ beat }: SceneProps) {
  return (
    <Stage eyebrow="12 · The brain">
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-6 text-center">
        <h2 className="text-balance text-[clamp(1.8rem,3.8vw,2.8rem)] font-medium leading-[1.04] tracking-[-0.03em]">
          We didn&apos;t start with robots.{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            We started with the brain.
          </span>
        </h2>

        {/* Beat 0 — founders */}
        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {FOUNDERS.map((f) => (
            <li key={f.name} className="neu-raised flex flex-col gap-3 rounded-2xl p-4 text-left">
              <div className="flex items-center gap-3">
                <Image
                  src={f.photo}
                  alt={f.name}
                  width={52}
                  height={52}
                  unoptimized
                  className="size-[52px] shrink-0 rounded-full object-cover"
                  style={{ border: "1.5px solid rgba(229,96,44,0.5)" }}
                />
                <span>
                  <span className="block text-[14px] font-medium leading-tight text-foreground">
                    {f.name}
                  </span>
                  <span className="mt-0.5 block font-mono text-[9.5px] uppercase tracking-[0.14em] text-accent-soft">
                    {f.role}
                  </span>
                  <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/45">
                    Yale &apos;28
                  </span>
                </span>
              </div>
              <p className="text-[12px] leading-snug text-foreground/75">{f.bio}</p>
              <a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-no-advance
                className="mt-auto inline-flex w-fit items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/55 transition-colors hover:text-accent"
              >
                LinkedIn
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
          ))}
        </ul>

        {/* Beat 1 — the proof the brain is real */}
        <ul
          className={`grid w-full grid-cols-1 gap-3 sm:grid-cols-3 transition-all duration-500 ${
            beat >= 1 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 1}
        >
          <li>
            <a
              href="https://spatial-memer.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              data-no-advance
              className="neu-sage flex h-full flex-col gap-2 rounded-2xl p-4 text-left transition-colors hover:border-accent-soft"
            >
              <span className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-soft">
                  Spatial-MemER
                </span>
                <ResearchMarks />
              </span>
              <span className="text-[12px] leading-snug text-foreground/85">
                Persistent spatial memory, built with Stanford researchers. The brain remembers the
                field.
              </span>
              <span className="mt-auto font-mono text-[9.5px] uppercase tracking-[0.16em] text-foreground/50">
                spatial-memer.vercel.app ↗
              </span>
            </a>
          </li>

          <li>
            <a
              href={ISPY_COVERAGE}
              target="_blank"
              rel="noopener noreferrer"
              data-no-advance
              className="neu-raised flex h-full flex-col overflow-hidden rounded-2xl text-left"
            >
              <span className="relative block h-20 w-full">
                <Image
                  src="/press/techreviewafrica.png"
                  alt="Global press coverage of iSpy"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </span>
              <span className="flex flex-col gap-2 p-4">
                <span className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    iSpy
                  </span>
                  <Image
                    src="/logos/google-logo.png"
                    alt="Google"
                    width={18}
                    height={18}
                    unoptimized
                    className="h-[18px] w-auto"
                  />
                </span>
                <span className="text-[12px] leading-snug text-foreground/85">
                  The visual backbone. 2nd at the Google AI Hackathon @ Yale; covered across global
                  tech press.
                </span>
                <span className="mt-auto font-mono text-[9.5px] uppercase tracking-[0.16em] text-foreground/50">
                  Read the coverage ↗
                </span>
              </span>
            </a>
          </li>

          <li>
            <a
              href="https://devpost.com/software/posturepoke"
              target="_blank"
              rel="noopener noreferrer"
              data-no-advance
              className="neu-raised flex h-full flex-col gap-2 rounded-2xl p-4 text-left"
            >
              <span className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  PosturePoke
                </span>
                <span className="rounded-md bg-[#f4f2e9]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/70">
                  YHack 2026
                </span>
              </span>
              <span className="text-[12px] leading-snug text-foreground/85">
                Built and recognized at Yale&apos;s YHack. The team ships fast, on hardware and in
                software.
              </span>
              <span className="mt-auto font-mono text-[9.5px] uppercase tracking-[0.16em] text-foreground/50">
                See it on Devpost ↗
              </span>
            </a>
          </li>
        </ul>

        {/* Beat 2 — honest gap + founder-market-fit */}
        <div
          className={`flex max-w-[82ch] flex-col gap-3 transition-all duration-500 ${
            beat >= 2 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={beat < 2}
        >
          <p className="text-balance text-[clamp(1rem,1.6vw,1.25rem)] leading-relaxed text-foreground/85">
            We&apos;re talking to and partnering with the farmers who&apos;d use this, right now.
          </p>
          <p
            className="text-balance text-[clamp(1.1rem,2vw,1.5rem)] italic leading-snug text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            A hardware company would have to build the intelligence from scratch. We start from it, and give it hands.
          </p>
        </div>
      </div>
    </Stage>
  );
}
