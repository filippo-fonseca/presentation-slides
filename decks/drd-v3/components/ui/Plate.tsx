import Image from "next/image";
import type { CSSProperties } from "react";

// A refined image wrapper. Renders the figure inside a tinted plate with corner
// registration ticks and an optional figure-label caption.
//
// Variants:
//   tone:  "paper"  default warm card,
//          "brand"  faint teal wash (use on hero / title images),
//          "graph"  cross-hatched engineering background.

type Tone = "paper" | "brand" | "graph";

const tonePalette: Record<Tone, { bg: string; border: string; tick: string }> = {
  paper: { bg: "bg-surface",        border: "border-line",          tick: "var(--ink-muted)"  },
  brand: { bg: "bg-brand-fade",     border: "border-brand-soft",    tick: "var(--brand-teal)" },
  graph: { bg: "bg-surface-2",      border: "border-line",          tick: "var(--ink-muted)"  },
};

function CornerTicks({ color }: { color: string }) {
  // Eight L-shaped registration marks at each corner — fixed to the outer plate.
  const len = 10;
  const w  = 1.1;
  const inset = 6;
  const tick = `${len}px`;
  const lineX: CSSProperties = { position: "absolute", height: `${w}px`, width: tick, background: color };
  const lineY: CSSProperties = { position: "absolute", width:  `${w}px`, height: tick, background: color };
  return (
    <>
      {/* TL */}
      <span aria-hidden style={{ ...lineX, top: inset, left:  inset }} />
      <span aria-hidden style={{ ...lineY, top: inset, left:  inset }} />
      {/* TR */}
      <span aria-hidden style={{ ...lineX, top: inset, right: inset }} />
      <span aria-hidden style={{ ...lineY, top: inset, right: inset }} />
      {/* BL */}
      <span aria-hidden style={{ ...lineX, bottom: inset, left:  inset }} />
      <span aria-hidden style={{ ...lineY, bottom: inset, left:  inset }} />
      {/* BR */}
      <span aria-hidden style={{ ...lineX, bottom: inset, right: inset }} />
      <span aria-hidden style={{ ...lineY, bottom: inset, right: inset }} />
    </>
  );
}

function GraphBackdrop() {
  // A very faint cross-hatch behind the figure. Engineering-paper feel.
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
      aria-hidden
    >
      <defs>
        <pattern id="plate-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#cdc5b6" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#plate-grid)" />
    </svg>
  );
}

type PlateProps = {
  /** Image src. If provided, Plate renders the image internally. */
  src?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
  /** When you need to render arbitrary content instead of a single image. */
  children?: React.ReactNode;

  /** Figure number, e.g. "01" or "I". */
  figureNumber?: string;
  /** Short caption (left of the caption strip). */
  caption?: string;
  /** Optional secondary label (right of the caption strip — e.g. "CAD section"). */
  meta?: string;

  tone?: Tone;
  /** Padding around the image inside the plate. */
  padding?: "tight" | "snug" | "comfy";
  /** Extra classes for the outer plate. */
  className?: string;
  /** Optional CSS rotation applied to the image / content area in degrees. */
  rotate?: 0 | 90 | 180 | 270 | -90;
};

const padMap: Record<NonNullable<PlateProps["padding"]>, string> = {
  tight: "p-2",
  snug:  "p-4",
  comfy: "p-6",
};

export default function Plate({
  src,
  alt = "",
  priority,
  sizes,
  children,
  figureNumber,
  caption,
  meta,
  tone = "paper",
  padding = "snug",
  className = "",
  rotate = 0,
}: PlateProps) {
  const palette = tonePalette[tone];
  const showStrip = !!(figureNumber || caption || meta);

  return (
    <figure
      className={`relative flex h-full flex-col overflow-hidden rounded-[10px] border ${palette.bg} ${palette.border} shadow-[0_1px_0_rgba(20,26,36,0.02),0_1px_2px_rgba(20,26,36,0.04)] ${className}`}
    >
      <div className={`relative flex-1 ${padMap[padding]}`}>
        {tone === "graph" && <GraphBackdrop />}
        <CornerTicks color={palette.tick} />
        <div className="relative h-full w-full overflow-hidden rounded-[6px]">
          {src && (
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
              className="rounded-[6px] object-contain"
              style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
              priority={priority}
            />
          )}
          {children}
        </div>
      </div>

      {showStrip && (
        <figcaption className="flex shrink-0 flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-line bg-surface/80 px-3.5 py-2 backdrop-blur">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            {figureNumber && (
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                Fig.&thinsp;{figureNumber}
              </span>
            )}
            {figureNumber && caption && <span className="text-line-strong">·</span>}
            {caption && (
              <span className="font-serif text-[12.5px] italic text-ink-soft">{caption}</span>
            )}
          </div>
          {meta && (
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
              {meta}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
