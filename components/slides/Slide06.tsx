import Plate from "@/components/ui/Plate";

// Slide 6 — the locking tooth. Small inline SVG of the tapered tooth profile,
// + a real CAD crop (cartridge_tooth_detail), + cork analogy chip.

function ToothProfile() {
  // Side profile of the tapered tooth.
  // Trust the spec literally: 2 mm wide at the top, 1 mm at the base.
  // Wider edge sits at the TOP of the drawing; tapers downward to a narrower
  // edge at the BASE. Cartridge body shown as a hatched block at the base.
  return (
    <svg
      viewBox="0 0 440 300"
      className="h-full w-full"
      role="img"
      aria-label="Side profile of the tapered tooth: 2 mm at top, 1 mm at base, angled down"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern id="bodyHatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#7a7f88" strokeWidth="0.8" />
        </pattern>
      </defs>

      {/* cartridge body — the structure the tooth attaches to (below) */}
      <rect x="60"  y="232" width="320" height="46" fill="url(#bodyHatch)" stroke="#7a7f88" strokeWidth="0.9" />
      <text x="220" y="266" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fill="#4a4f59" letterSpacing="0.06em">CARTRIDGE BODY</text>

      {/* tooth — wide at TOP (2 mm), narrow at BASE (1 mm) */}
      {/* widths: top = 130 px, base = 32 px ; vertical extent ~145 px */}
      <polygon
        points="155,90 285,90 236,232 204,232"
        fill="#16767B"
        opacity="0.92"
      />
      {/* subtle highlight */}
      <line x1="155" y1="90" x2="285" y2="90" stroke="#0e5a5e" strokeWidth="1" />

      {/* TOP dimension — 2 mm */}
      <line x1="155" y1="74" x2="285" y2="74" stroke="#1a1d24" strokeWidth="1" />
      <line x1="155" y1="68" x2="155" y2="80" stroke="#1a1d24" strokeWidth="1" />
      <line x1="285" y1="68" x2="285" y2="80" stroke="#1a1d24" strokeWidth="1" />
      <rect x="206" y="46" width="78" height="20" fill="#fbfaf7" />
      <text x="220" y="60" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="700" fill="#1a1d24">2&thinsp;mm</text>
      <text x="220" y="34" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="#7a7f88" letterSpacing="0.12em">TIP &middot; WIDE</text>

      {/* BASE dimension — 1 mm */}
      <line x1="204" y1="246" x2="236" y2="246" stroke="#1a1d24" strokeWidth="1" />
      <line x1="204" y1="240" x2="204" y2="252" stroke="#1a1d24" strokeWidth="1" />
      <line x1="236" y1="240" x2="236" y2="252" stroke="#1a1d24" strokeWidth="1" />
      <text x="220" y="226" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="700" fill="#1a1d24">1&thinsp;mm</text>
      <text x="220" y="212" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="#7a7f88" letterSpacing="0.12em">BASE &middot; NARROW</text>

      {/* right-side annotation — tapered transition fit */}
      <line x1="285" y1="170" x2="332" y2="170" stroke="#C0552E" strokeWidth="0.9" strokeDasharray="2 3" />
      <text x="338" y="167" fontFamily="var(--font-sans)" fontSize="11" fontWeight="600" fill="#C0552E">tapered</text>
      <text x="338" y="180" fontFamily="var(--font-sans)" fontSize="10" fill="#C0552E">transition fit</text>

      {/* left-side annotation — rounded root */}
      <path d="M 200 232 Q 198 226 204 226" fill="none" stroke="#0e5a5e" strokeWidth="1.4" />
      <path d="M 240 232 Q 242 226 236 226" fill="none" stroke="#0e5a5e" strokeWidth="1.4" />
      <line x1="186" y1="232" x2="118" y2="270" stroke="#7a7f88" strokeWidth="0.7" />
      <text x="14" y="266" fontFamily="var(--font-sans)" fontSize="10" fontWeight="600" fill="#4a4f59">rounded root</text>
      <text x="14" y="278" fontFamily="var(--font-sans)" fontSize="9" fill="#7a7f88">no crack risk</text>

      {/* angle arrow indicating "angled down" */}
      <line x1="305" y1="100" x2="305" y2="220" stroke="#7a7f88" strokeWidth="0.7" strokeDasharray="2 2" />
      <path d="M 300 105 L 305 95 L 310 105" fill="none" stroke="#7a7f88" strokeWidth="0.8" />
      <text x="312" y="100" fontFamily="var(--font-sans)" fontSize="9" fill="#7a7f88">angled</text>
      <text x="312" y="111" fontFamily="var(--font-sans)" fontSize="9" fill="#7a7f88">down</text>
    </svg>
  );
}

export default function Slide06() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-3">
      <div>
        <p className="eyebrow text-brand">Design Work</p>
        <h2 className="mt-1 font-display text-[clamp(22px,2.4vw,36px)] leading-[1.08]">
          The locking tooth: <span className="text-brand">our CSM (Compliant Seal Mechanism), matured</span>.
        </h2>
      </div>

      <div className="grid h-full min-h-0 grid-cols-12 gap-4">
        <div className="col-span-12 flex h-full min-h-0 flex-col justify-center gap-2.5 md:col-span-7">
          <div className="card accent-bacteria p-3">
            <p className="eyebrow mb-0.5 text-bacteria">Sized up from v2</p>
            <p className="font-serif text-[12.5px] leading-snug text-ink-soft">
              v2&apos;s tooth was so small it was barely tactile, and a single latch carried the whole lid. For v3 the tooth is <span className="font-semibold text-ink">visibly larger</span> with <span className="font-semibold text-ink">two latches per cartridge</span>. Each does less work; engagement is symmetric.
            </p>
          </div>

          <div className="card p-3">
            <p className="eyebrow mb-0.5 text-brand">Geometry</p>
            <p className="font-serif text-[12.5px] leading-snug text-ink-soft">
              Angled, tapered tooth. <span className="font-semibold text-ink">2 mm</span> at top, <span className="font-semibold text-ink">1 mm</span> at base, angled down. Credit-card-style transition fit: easy to seat, firm once home. Filleted root so it won&apos;t crack there.
            </p>
          </div>

          <div className="card-quote px-3.5 py-2.5">
            <p className="font-serif text-[12px] italic leading-snug text-ink">
              <span className="font-semibold not-italic">Tapered cork.</span> A slightly-too-big cork wedges tighter the deeper it seats; the seal tightens itself, held by the material&apos;s springiness. The tooth works the same way.
            </p>
          </div>
        </div>

        <div className="col-span-12 flex h-full min-h-0 flex-col justify-center gap-3 md:col-span-5">
          <Plate
            tone="graph"
            padding="tight"
            figureNumber="06A"
            caption="Tooth profile"
            meta="2 → 1 mm"
            className="max-h-[44%] flex-1"
          >
            <ToothProfile />
          </Plate>
          <Plate
            src="/images/cartridge/cartridge_tooth_detail.jpg"
            alt="Cartridge tooth detail, CAD render"
            sizes="(max-width: 768px) 100vw, 30vw"
            tone="paper"
            padding="tight"
            figureNumber="06B"
            caption="Cartridge tooth"
            meta="CAD view"
            className="max-h-[44%] flex-1"
          />
        </div>
      </div>
    </div>
  );
}
