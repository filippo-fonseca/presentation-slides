import Image from "next/image";
import { DrdMark } from "./ui/Logos";

export type SectionLabel = string;

type SlideShellProps = {
  sectionLabel?: SectionLabel;
  /** Index 1-based (for the footer counter). */
  slideNumber: number;
  totalSlides: number;
  /** When `bare`, no header / footer bands — for the title + closing covers. */
  bare?: boolean;
  /** When true, body gets max-width; when false the slide can run full-bleed. */
  contained?: boolean;
  children: React.ReactNode;
};

export default function SlideShell({
  sectionLabel,
  slideNumber,
  totalSlides,
  bare = false,
  contained = true,
  children,
}: SlideShellProps) {
  return (
    <article className="slide-root relative flex h-full w-full flex-col bg-background">
      {/* Header band */}
      {!bare && (
        <header className="band-teal relative z-10 flex shrink-0 items-center justify-between px-8 py-2.5 sm:px-12">
          <div className="flex items-center gap-3">
            <span className="text-white/90">
              <DrdMark size={18} />
            </span>
            <span className="eyebrow text-white/95">{sectionLabel}</span>
          </div>
          <span className="eyebrow text-white/70">
            The DRD-3 · Design Review
          </span>
        </header>
      )}

      {/* Body */}
      <div
        className={
          contained
            ? "relative z-0 flex flex-1 flex-col overflow-y-auto no-scrollbar px-16 py-8 sm:px-24 sm:py-10 lg:px-28"
            : "relative z-0 flex flex-1 flex-col overflow-hidden px-16 sm:px-20"
        }
      >
        <div className={contained ? "mx-auto w-full max-w-[1400px] flex-1" : "h-full w-full"}>
          {children}
        </div>
      </div>

      {/* Footer band — academic chrome */}
      {!bare && (
        <footer className="relative z-10 flex shrink-0 items-center justify-between gap-4 border-t border-line bg-surface px-8 py-2.5 text-[11px] text-ink-muted sm:px-12">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logos/mgh.png"
              alt="Massachusetts General Hospital"
              width={4227}
              height={477}
              className="h-4 w-auto opacity-80"
            />
            <span className="hidden text-line-strong sm:inline">·</span>
            <Image
              src="/images/logos/hol.png"
              alt="Harris Orthopaedics Laboratory"
              width={200}
              height={200}
              className="hidden size-5 rounded-full object-contain opacity-80 sm:block"
            />
            <span className="hidden uppercase tracking-[0.14em] sm:inline">Harris Orthopaedics Laboratory</span>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/images/logos/hms.png"
              alt="Harvard Medical School"
              width={986}
              height={323}
              className="h-4 w-auto opacity-80"
            />
            <span className="text-line-strong">·</span>
            <span className="font-mono tabular-nums text-ink-soft">
              {String(slideNumber).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
            </span>
          </div>
        </footer>
      )}
    </article>
  );
}
