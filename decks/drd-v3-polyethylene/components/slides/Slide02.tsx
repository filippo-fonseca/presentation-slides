import Plate from "@/components/ui/Plate";

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

export default function Slide02() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto] gap-6">
      <div>
        <p className="eyebrow text-brand">Recap</p>
        <h2 className="mt-2 font-display text-[clamp(36px,4vw,56px)] leading-tight">
          From iteration to a <span className="text-brand">clean-sheet device</span>.
        </h2>
      </div>

      {/* Three-stage lineage — vertically centered in the available space */}
      <div className="my-auto grid grid-cols-[1fr_auto_1fr_auto_1.3fr] items-center gap-4">
        {/* v1 — published DRD */}
        <div className="flex h-full flex-col items-center">
          <div className="aspect-square w-full max-w-[240px]">
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
          <p className="mt-3 max-w-[24ch] text-center font-serif text-[13.5px] italic text-ink-muted">
            The published DRD. Two chambers stacked in series, one membrane between.
          </p>
        </div>

        <Arrow />

        {/* v2 — prior iteration */}
        <div className="flex h-full flex-col items-center justify-center">
          <div className="grid w-full max-w-[280px] grid-cols-[1fr_0.8fr] items-stretch gap-2">
            <Plate
              tone="graph"
              padding="snug"
              figureNumber="v2·a"
              caption="Six-tooth CSM"
              meta="seal mechanism"
              className="aspect-square"
            >
              <SixToothRing />
            </Plate>
            <Plate
              src="/images/v2/v2_section.png"
              alt="v2 device, section view, stacked chambers with screw threads visible"
              sizes="(max-width: 768px) 100vw, 12vw"
              tone="paper"
              padding="snug"
              figureNumber="v2·b"
              caption="v2 device"
              meta="section view"
              className="aspect-[4/5]"
            />
          </div>
          <p className="mt-3 max-w-[26ch] text-center font-serif text-[13.5px] italic text-ink-muted">
            Prior iteration: the six-tooth CSM (Compliant Seal Mechanism) inside the v2 device.
          </p>
        </div>

        <Arrow />

        {/* v3 — this week */}
        <div className="flex h-full flex-col items-center">
          <div className="aspect-[5/4] w-full max-w-[340px]">
            <Plate
              src="/images/full/hero_full_assembly.jpg"
              alt="DRD-3 full assembly"
              sizes="(max-width: 768px) 100vw, 30vw"
              tone="brand"
              padding="snug"
              figureNumber="v3"
              caption="The DRD-3"
              meta="this week · clean sheet"
            />
          </div>
          <p className="mt-3 max-w-[28ch] text-center font-serif text-[14px] text-ink">
            The <span className="font-semibold text-brand">DRD-3</span>. A ground-up, clean-sheet device.
          </p>
        </div>
      </div>

      {/* Pull line */}
      <div className="card-quote px-6 py-5">
        <p className="font-serif text-[clamp(16px,1.4vw,20px)] leading-snug text-ink">
          The validated <span className="italic">physics</span> of the published DRD is preserved: source, membrane, flow-cleared sink at 37&thinsp;°C. I rebuilt the <span className="italic">hardware</span> around it, and added one capability the paper identified as missing.
        </p>
      </div>
    </div>
  );
}
