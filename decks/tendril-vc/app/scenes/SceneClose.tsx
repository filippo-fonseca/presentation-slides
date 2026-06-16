"use client";

import Image from "next/image";
import Link from "next/link";
import type { SceneProps } from "../DeckClient";
import YaleMark from "../components/YaleMark";

// Scene 15 — the close. One beat: the turn, the stage we're at, the
// invitation, founder pills, and a link back to the site.

const PEOPLE = [
  {
    name: "Filippo Fonseca",
    photo: "/people/filippo.png",
    linkedin: "https://www.linkedin.com/in/filippo-fonseca/",
    website: "https://filippofonseca.com",
  },
  { name: "Emir Ahmed", photo: "/people/emir.jpeg", linkedin: "https://www.linkedin.com/in/emir-ahmed-6016422a1/" },
  { name: "David Antwi", photo: "/people/david.jpeg", linkedin: "https://www.linkedin.com/in/david-antwi-b17727205/" },
];

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm6 0h3.8v1.64h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.09V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9V9z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18" strokeLinecap="round" />
    </svg>
  );
}

export default function SceneClose(_props: SceneProps) {
  void _props;
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-6 sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 glow-radial blur-3xl"
      />
      <svg
        aria-hidden
        viewBox="0 0 800 800"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] -translate-x-1/2 -translate-y-1/2 opacity-50"
      >
        <circle cx="400" cy="400" r="380" stroke="rgba(229,96,44,0.20)" strokeWidth="0.6" strokeDasharray="2 8" fill="none" />
        <circle cx="400" cy="400" r="280" stroke="rgba(181,211,61,0.22)" strokeWidth="0.6" strokeDasharray="1 6" fill="none" />
        <circle cx="400" cy="400" r="180" stroke="rgba(229,96,44,0.30)" strokeWidth="0.6" strokeDasharray="1 5" fill="none" />
      </svg>

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-5 text-center">
        <h2 className="max-w-[15ch] text-balance text-[clamp(2.6rem,7.5vw,5.6rem)] font-medium leading-[0.98] tracking-[-0.04em] text-foreground">
          Step off the{" "}
          <span
            className="italic font-normal text-accent"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            treadmill.
          </span>
        </h2>

        <p className="max-w-[58ch] text-balance text-[clamp(0.98rem,1.5vw,1.18rem)] leading-relaxed text-foreground/70">
          &hellip;off the chemical treadmill that thins soil and breeds resistance, and onto a field
          that perceives, remembers, and acts, plant by plant.
        </p>

        <p className="max-w-[52ch] text-balance text-[clamp(1.1rem,1.9vw,1.4rem)] leading-relaxed text-foreground/85">
          We are looking to raise a pre-seed round and are actively in development.
        </p>

        <p
          className="max-w-[44ch] text-balance text-[clamp(1.05rem,1.7vw,1.3rem)] italic leading-snug text-accent-soft"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          If you back founders who choose hard problems, we&apos;d love to talk.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:filippo.fonseca@yale.edu"
            className="neu-light inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13.5px] font-medium"
            data-no-advance
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            filippo.fonseca@yale.edu
          </a>
          <Link
            href="/"
            data-no-advance
            className="group neu-lit inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13.5px] font-medium text-foreground"
          >
            See our website
            <svg className="nudge-x" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="mt-1 flex flex-wrap items-center justify-center gap-2.5">
          {PEOPLE.map((p) => (
            <div
              key={p.name}
              className="neu-raised-sm inline-flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3.5"
            >
              <Image
                src={p.photo}
                alt={p.name}
                width={26}
                height={26}
                unoptimized
                className="size-[26px] rounded-full object-cover"
              />
              <span className="text-[12.5px] text-foreground">{p.name}</span>
              <a
                href={p.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-no-advance
                aria-label={`${p.name} on LinkedIn`}
                className="text-foreground/55 transition-colors hover:text-accent"
              >
                <LinkedInIcon />
              </a>
              {p.website && (
                <a
                  href={p.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-no-advance
                  aria-label={`${p.name} website`}
                  className="text-foreground/55 transition-colors hover:text-accent"
                >
                  <GlobeIcon />
                </a>
              )}
            </div>
          ))}
        </div>

        <YaleMark height={17} />
      </div>
    </div>
  );
}
