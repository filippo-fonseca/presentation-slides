// Slide 7 — Three-O-ring horizontal section schematic.
// Bacteria satellite (coral) | cartridge | Drug hub (teal) | cartridge | Perfusion satellite (blue)
// Three numbered O-ring interface locations.

export default function ThreeORingSection({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1100 360"
      className={className}
      role="img"
      aria-label="Horizontal cross-section showing the three O-ring interfaces of the DRD-3"
      fill="none"
    >
      <defs>
        <pattern id="pores" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="10" stroke="#16767B" strokeWidth="1.4" opacity="0.5" />
        </pattern>
        <pattern id="poresBac" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="10" stroke="#C0552E" strokeWidth="1.4" opacity="0.5" />
        </pattern>
      </defs>

      {/* Bacteria satellite (coral) */}
      <g>
        <rect x="40"  y="100" width="170" height="180" rx="18" fill="#f7e8df" stroke="#C0552E" strokeWidth="1.5" />
        <text x="125" y="86" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="600" fill="#C0552E" letterSpacing="0.06em">BACTERIA</text>
        <text x="125" y="178" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fill="#7a4530">sealed culture</text>
        <text x="125" y="194" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fill="#7a4530">+ septum</text>
        {/* septum port */}
        <rect x="115" y="92" width="20" height="14" rx="2" fill="#C0552E" />
        {/* feet */}
        <rect x="55" y="275" width="22" height="14" fill="#e3ddd2" />
        <rect x="173" y="275" width="22" height="14" fill="#e3ddd2" />
      </g>

      {/* Cartridge — bacteria side */}
      <g>
        <rect x="215" y="125" width="48" height="130" rx="6" fill="#fff" stroke="#5a5e66" strokeWidth="1.3" />
        {/* protective pores band toward hub */}
        <rect x="248" y="125" width="15" height="130" fill="url(#poresBac)" />
        {/* membrane line */}
        <line x1="239" y1="125" x2="239" y2="255" stroke="#1a1d24" strokeWidth="2" strokeDasharray="3 3" />
        <text x="239" y="118" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fill="#4a4f59">membrane</text>
      </g>

      {/* Drug hub (teal) */}
      <g>
        <rect x="265" y="80"  width="570" height="220" rx="22" fill="#e9f3f3" stroke="#16767B" strokeWidth="1.5" />
        <text x="550" y="66" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="600" fill="#16767B" letterSpacing="0.06em">DRUG HUB · the joint</text>
        <text x="550" y="172" textAnchor="middle" fontFamily="var(--font-serif)" fontStyle="italic" fontSize="15" fill="#0e5a5e">UHMWPE implant strip</text>
        <text x="550" y="194" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fill="#4a4f59">4–20 mL · volume tunable · pending verification</text>
        {/* implant strip */}
        <rect x="500" y="200" width="100" height="22" rx="3" fill="#cdc5b6" stroke="#7a7f88" strokeWidth="1" />
      </g>

      {/* Cartridge — perfusion side */}
      <g>
        <rect x="837" y="125" width="48" height="130" rx="6" fill="#fff" stroke="#5a5e66" strokeWidth="1.3" />
        <rect x="837" y="125" width="15" height="130" fill="url(#pores)" />
        <line x1="861" y1="125" x2="861" y2="255" stroke="#1a1d24" strokeWidth="2" strokeDasharray="3 3" />
        <text x="861" y="118" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fill="#4a4f59">membrane</text>
      </g>

      {/* Perfusion satellite (blue) */}
      <g>
        <rect x="890" y="100" width="170" height="180" rx="18" fill="#e3ecf6" stroke="#2D6CB0" strokeWidth="1.5" />
        <text x="975" y="86" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="600" fill="#2D6CB0" letterSpacing="0.06em">PERFUSION</text>
        <text x="975" y="178" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fill="#2b4b73">flow-through sink</text>
        <text x="975" y="194" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fill="#2b4b73">2 ports · 37 °C</text>
        {/* in/out arrows */}
        <path d="M 880 130 L 905 130" stroke="#2D6CB0" strokeWidth="1.6" />
        <polygon points="905,127 911,130 905,133" fill="#2D6CB0" />
        <path d="M 905 250 L 880 250" stroke="#2D6CB0" strokeWidth="1.6" />
        <polygon points="880,247 874,250 880,253" fill="#2D6CB0" />
        <rect x="905" y="275" width="22" height="14" fill="#e3ddd2" />
        <rect x="1023" y="275" width="22" height="14" fill="#e3ddd2" />
      </g>

      {/* O-ring markers — three pairs, numbered ①②③ */}
      {/* ② Intra-cartridge (lid → base): inside each cartridge */}
      <g>
        <circle cx="239" cy="115" r="5.5" fill="#C0552E" stroke="#1a1d24" strokeWidth="1.1" />
        <circle cx="239" cy="265" r="5.5" fill="#C0552E" stroke="#1a1d24" strokeWidth="1.1" />
        <circle cx="861" cy="115" r="5.5" fill="#C0552E" stroke="#1a1d24" strokeWidth="1.1" />
        <circle cx="861" cy="265" r="5.5" fill="#C0552E" stroke="#1a1d24" strokeWidth="1.1" />
      </g>
      {/* ① Cartridge → satellite */}
      <g>
        <circle cx="215" cy="135" r="5.5" fill="#16767B" stroke="#1a1d24" strokeWidth="1.1" />
        <circle cx="215" cy="245" r="5.5" fill="#16767B" stroke="#1a1d24" strokeWidth="1.1" />
        <circle cx="885" cy="135" r="5.5" fill="#16767B" stroke="#1a1d24" strokeWidth="1.1" />
        <circle cx="885" cy="245" r="5.5" fill="#16767B" stroke="#1a1d24" strokeWidth="1.1" />
      </g>
      {/* ③ Satellite → hub */}
      <g>
        <circle cx="270" cy="90"  r="5.5" fill="#2D6CB0" stroke="#1a1d24" strokeWidth="1.1" />
        <circle cx="270" cy="290" r="5.5" fill="#2D6CB0" stroke="#1a1d24" strokeWidth="1.1" />
        <circle cx="830" cy="90"  r="5.5" fill="#2D6CB0" stroke="#1a1d24" strokeWidth="1.1" />
        <circle cx="830" cy="290" r="5.5" fill="#2D6CB0" stroke="#1a1d24" strokeWidth="1.1" />
      </g>

      {/* Numbered callouts */}
      {[
        { x: 215, y: 320, n: "①", label: "cartridge → satellite", color: "#16767B" },
        { x: 550, y: 335, n: "②", label: "lid → base (intra-cartridge)", color: "#C0552E" },
        { x: 885, y: 320, n: "③", label: "satellite → hub", color: "#2D6CB0" },
      ].map((c, i) => (
        <g key={i} transform={`translate(${c.x} ${c.y})`}>
          <circle cx="0" cy="-4" r="11" fill={c.color} />
          <text x="0" y="0" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="700" fill="white">{c.n}</text>
          <text x="18" y="0" fontFamily="var(--font-sans)" fontSize="11.5" fill="#1a1d24">{c.label}</text>
        </g>
      ))}
    </svg>
  );
}
