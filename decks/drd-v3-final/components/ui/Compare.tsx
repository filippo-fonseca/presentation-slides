import Plate from "@/components/ui/Plate";

// A side-by-side "evolution" comparison: a de-emphasized BEFORE plate on the
// left, a small labeled arrow in the middle, and an emphasized AFTER plate on
// the right. Each side carries a font-mono tag so before/after reads instantly.

export type CompareItem = {
  src: string;
  alt?: string;
  figureNumber?: string;
  caption?: string;
  meta?: string;
  tone?: "paper" | "brand" | "graph";
  rotate?: 0 | 90 | 180 | 270 | -90;
};

export type CompareProps = {
  before: CompareItem;
  after: CompareItem;
  /** Label above the BEFORE plate. Default "June 10". */
  beforeLabel?: string;
  /** Label above the AFTER plate. Default "July 1 · final". */
  afterLabel?: string;
  /** Tailwind height class applied to each plate. Default "h-[300px]". */
  height?: string;
  className?: string;
};

// The same teal arrow idiom used on Slide02, sized for a horizontal connector.
function Arrow() {
  return (
    <svg viewBox="0 0 60 40" className="h-8 w-14" aria-hidden>
      <line x1="4" y1="20" x2="48" y2="20" stroke="#16767B" strokeWidth="1.4" />
      <polygon points="48,14 58,20 48,26" fill="#16767B" />
    </svg>
  );
}

function Tag({ children, emphasis }: { children: React.ReactNode; emphasis?: boolean }) {
  return (
    <span
      className={
        emphasis
          ? "rounded-full bg-brand-fade px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand ring-1 ring-brand-soft"
          : "rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted ring-1 ring-line"
      }
    >
      {children}
    </span>
  );
}

export default function Compare({
  before,
  after,
  beforeLabel = "June 10",
  afterLabel = "July · final",
  height = "h-[300px]",
  className = "",
}: CompareProps) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto_1fr] ${className}`}
    >
      {/* BEFORE — de-emphasized */}
      <figure className="flex flex-col gap-2">
        <figcaption className="flex items-center gap-2">
          <Tag>{beforeLabel}</Tag>
        </figcaption>
        <div className={`${height} opacity-80 ring-1 ring-line rounded-[10px]`}>
          <Plate
            src={before.src}
            alt={before.alt}
            tone={before.tone ?? "graph"}
            padding="snug"
            figureNumber={before.figureNumber}
            caption={before.caption}
            meta={before.meta}
            rotate={before.rotate}
          />
        </div>
      </figure>

      {/* Connector */}
      <div className="flex items-center justify-center py-1 sm:flex-col sm:gap-1">
        <Arrow />
      </div>

      {/* AFTER — emphasized */}
      <figure className="flex flex-col gap-2">
        <figcaption className="flex items-center gap-2">
          <Tag emphasis>{afterLabel}</Tag>
        </figcaption>
        <div className={`${height} rounded-[10px] ring-2 ring-brand-soft`}>
          <Plate
            src={after.src}
            alt={after.alt}
            tone={after.tone ?? "brand"}
            padding="snug"
            figureNumber={after.figureNumber}
            caption={after.caption}
            meta={after.meta}
            rotate={after.rotate}
          />
        </div>
      </figure>
    </div>
  );
}
