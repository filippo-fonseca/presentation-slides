import Image from "next/image";
import Mark from "./ui/Mark";
import { THEME } from "@/lib/theme";

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
  const { footer, headerRightLabel } = THEME;

  return (
    <article className="slide-root relative flex h-full w-full flex-col bg-background">
      {/* Header band */}
      {!bare && (
        <header className="band-brand relative z-10 flex shrink-0 items-center justify-between px-8 py-2.5 sm:px-12">
          <div className="flex items-center gap-3">
            <span className="text-white/90">
              <Mark size={18} />
            </span>
            <span className="eyebrow text-white/95">{sectionLabel}</span>
          </div>
          <span className="eyebrow text-white/70">{headerRightLabel}</span>
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
            {footer.left.map((logo, i) => (
              <FooterLogo key={`l-${i}`} logo={logo} />
            ))}
          </div>
          <div className="flex items-center gap-4">
            {footer.right.map((logo, i) => (
              <FooterLogo key={`r-${i}`} logo={logo} />
            ))}
            {footer.right.length > 0 && <span className="text-line-strong">·</span>}
            <span className="font-mono tabular-nums text-ink-soft">
              {String(slideNumber).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
            </span>
          </div>
        </footer>
      )}
    </article>
  );
}

function FooterLogo({ logo }: { logo: import("@/lib/theme").FooterLogo }) {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className={
          logo.className ??
          (logo.rounded
            ? "size-5 rounded-full object-contain opacity-80"
            : "h-4 w-auto opacity-80")
        }
      />
      {logo.label && (
        <span className="hidden uppercase tracking-[0.14em] sm:inline">{logo.label}</span>
      )}
    </div>
  );
}
