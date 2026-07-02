import Plate from "@/components/ui/Plate";
import ExpandableImage from "@/components/ui/ExpandableImage";

// Slide 2 — three-stage lineage:
//   v1  Aşık's published DRD (two chambers in series)
//   v2  last week — Filippo's six-tooth CSM iteration on v1
//   v3  this week — the DRD-3 clean-sheet device

function DrdV1Schematic() {
  // Two chambers in series, one membrane in the middle, port top + port bottom.
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full" role="img" aria-label="Published DRD architecture: two chambers in series">
      {/* drug chamber (top) */}
      <rect x="35" y="32"  width="150" height="68" rx="8" fill="#e9f3f3" stroke="#16767B" strokeWidth="1.4" />
      <text x="110" y="70" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="600" fill="#0e5a5e">DRUG</text>
      <text x="110" y="86" textAnchor="middle" fontFamily="var(--font-serif)" fontStyle="italic" fontSize="10" fill="#4a4f59">implant strip</text>

      {/* membrane */}
      <line x1="35" y1="108" x2="185" y2="108" stroke="#1a1d24" strokeWidth="2" strokeDasharray="3 3" />
      <text x="190" y="112" fontFamily="var(--font-sans)" fontSize="9" fill="#4a4f59">membrane</text>

      {/* perfusion chamber (bottom) */}
      <rect x="35" y="116" width="150" height="68" rx="8" fill="#e3ecf6" stroke="#2D6CB0" strokeWidth="1.4" />
      <text x="110" y="154" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="600" fill="#2b4b73">PERFUSION</text>
      <text x="110" y="170" textAnchor="middle" fontFamily="var(--font-serif)" fontStyle="italic" fontSize="10" fill="#4a4f59">fresh-media flow</text>

      {/* ports */}
      <rect x="100" y="14" width="20" height="18" fill="#7a7f88" stroke="#1a1d24" strokeWidth="1" />
      <rect x="14" y="142" width="22" height="14" fill="#2D6CB0" />
      <rect x="184" y="142" width="22" height="14" fill="#2D6CB0" />
    </svg>
  );
}

function SixToothRing() {
  const cx = 110, cy = 110, ro = 78, ri = 50;
  const teeth = Array.from({ length: 6 }, (_, i) => {
    const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
    const x = cx + Math.cos(a) * (ro + 4);
    const y = cy + Math.sin(a) * (ro + 4);
    return { x, y, a };
  });
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full" role="img" aria-label="Six-tooth compliant sealing ring (CSM)">
      <defs>
        <radialGradient id="ringFill" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#f4f1ea" />
          <stop offset="100%" stopColor="#cdc5b6" />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={ro} fill="url(#ringFill)" stroke="#7a7f88" strokeWidth="1.4" />
      <circle cx={cx} cy={cy} r={ri} fill="#fbfaf7" stroke="#7a7f88" strokeWidth="1.4" />
      {teeth.map((t, i) => (
        <g key={i} transform={`translate(${t.x} ${t.y}) rotate(${(t.a * 180) / Math.PI + 90})`}>
          <polygon points="-7,-6 7,-6 4,8 -4,8" fill="#16767B" opacity="0.85" />
        </g>
      ))}
      <text x={cx} y={cy + 4} textAnchor="middle" fontFamily="var(--font-serif)" fontStyle="italic" fontSize="12" fill="#4a4f59">CSM</text>
    </svg>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 60 40" className="h-8 w-full" aria-hidden>
      <line x1="4" y1="20" x2="48" y2="20" stroke="#16767B" strokeWidth="1.4" />
      <polygon points="48,14 58,20 48,26" fill="#16767B" />
    </svg>
  );
}

function ImagePlate({
  src,
  alt,
  figureNumber,
  caption,
  meta,
  tone = "paper",
  zoom = "scale-100",
  className = "",
}: {
  src: string;
  alt: string;
  figureNumber: string;
  caption: string;
  meta?: string;
  tone?: "paper" | "brand";
  zoom?: string;
  className?: string;
}) {
  const palette =
    tone === "brand"
      ? "border-brand-soft bg-brand-fade ring-2 ring-brand-soft"
      : "border-line bg-surface";

  return (
    <figure className={`relative flex min-h-0 flex-col overflow-hidden rounded-[10px] border shadow-sm ${palette} ${className}`}>
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <ExpandableImage
          src={src}
          alt={alt}
          sizes="(max-width: 768px) 100vw, 30vw"
          className={`object-contain p-2 ${zoom}`}
          figureNumber={figureNumber}
          caption={caption}
          meta={meta}
        />
      </div>
      <figcaption className="flex min-h-10 shrink-0 flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-line bg-surface/88 px-3 py-2 backdrop-blur">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand">
          Fig. {figureNumber}
        </span>
        <span className="text-line-strong">·</span>
        <span className="font-serif text-[13px] italic text-ink-soft">{caption}</span>
        {meta && <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-muted">{meta}</span>}
      </figcaption>
    </figure>
  );
}

function StageCard({
  children,
  caption,
  emphasized,
}: {
  children: React.ReactNode;
  caption: React.ReactNode;
  emphasized?: boolean;
}) {
  return (
    <div className="grid h-full grid-rows-[1fr_auto] items-stretch gap-3">
      <div className={`h-[330px] ${emphasized ? "rounded-[10px]" : ""}`}>
        {children}
      </div>
      <p className={`min-h-[42px] text-center font-serif text-[14px] leading-snug ${emphasized ? "text-ink" : "italic text-ink-muted"}`}>
        {caption}
      </p>
    </div>
  );
}

export default function Slide02() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto] gap-5">
      <div>
        <p className="eyebrow text-brand">Recap</p>
        <h2 className="mt-1 font-display text-[clamp(32px,3.5vw,50px)] leading-tight">
          From the June&nbsp;10 review to a <span className="text-brand">finalized device</span>.
        </h2>
      </div>

      {/* Three-stage lineage — vertically centered in the available space */}
      <div className="my-auto grid grid-cols-[1fr_auto_1.5fr_auto_1fr] items-center gap-5">
        {/* v1 — published DRD */}
        <StageCard caption="The published DRD.">
          <div className="mx-auto h-full w-full max-w-[330px]">
            <Plate
              tone="graph"
              padding="snug"
              figureNumber="v1"
              caption="Aşık et al. (2026)"
              meta="published"
            >
              <DrdV1Schematic />
            </Plate>
          </div>
        </StageCard>

        <Arrow />

        {/* v2 — prior iteration */}
        <StageCard caption="Prior iteration.">
          <div className="grid h-full w-full grid-cols-2 items-stretch gap-3">
            <Plate
              tone="graph"
              padding="snug"
              figureNumber="v2·a"
              caption="v2 sealing ring"
              className="h-full"
            >
              <SixToothRing />
            </Plate>
            <ImagePlate
              src="/images/v2/v2_section.png"
              alt="v2 device, section view, stacked chambers with screw threads visible"
              tone="paper"
              figureNumber="v2·b"
              caption="v2 device"
              meta="section view"
              zoom="scale-[1.12]"
              className="h-full"
            />
          </div>
        </StageCard>

        <Arrow />

        {/* v3 — this week */}
        <StageCard
          emphasized
          caption={
            <>
              The <span className="font-semibold text-brand">DRD-3</span>. Finalized and ordered.
            </>
          }
        >
          <div className="mx-auto h-full w-full max-w-[330px]">
            <ImagePlate
              src="/images/final/assembly_full.jpg"
              alt="DRD-3 final assembly, full device"
              tone="brand"
              figureNumber="v3"
              caption="The DRD-3"
              meta="final · ordered"
              zoom="scale-[1.08]"
              className="h-full"
            />
          </div>
        </StageCard>
      </div>

      {/* Pull line */}
      <div className="card-quote px-6 py-5">
        <p className="font-serif text-[clamp(16px,1.4vw,20px)] leading-snug text-ink">
          Most of you saw the June&nbsp;10 version. Today: what changed.
        </p>
      </div>
    </div>
  );
}
