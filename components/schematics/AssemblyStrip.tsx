// Slide 9 — Assembly 1 → 2 → 3 strip.
// (1) cartridge + O-ring exploded
// (2) cartridge seating into satellite, tooth engaging
// (3) two satellites bolting onto central hub

export default function AssemblyStrip({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 320"
      className={className}
      role="img"
      aria-label="DRD-3 three-step assembly: build the cartridge, press it into the satellite, bolt the satellites to the hub"
      fill="none"
    >
      {/* ===== Step 1: cartridge exploded ===== */}
      <g transform="translate(40 30)">
        <circle cx="-6" cy="0" r="14" fill="#16767B" />
        <text x="-6" y="5" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="14" fontWeight="700" fill="white">1</text>
        <text x="18" y="5" fontFamily="var(--font-sans)" fontSize="12" fontWeight="600" letterSpacing="0.06em" fill="#1a1d24">BUILD THE CARTRIDGE</text>
        <text x="18" y="22" fontFamily="var(--font-sans)" fontSize="11" fill="#4a4f59">on the bench, as a module</text>

        {/* exploded lid */}
        <ellipse cx="140" cy="90"  rx="92" ry="14" fill="#fff" stroke="#5a5e66" strokeWidth="1.4" />
        <text x="240" y="92" fontFamily="var(--font-sans)" fontSize="10" fill="#7a7f88">lid</text>
        {/* O-ring */}
        <ellipse cx="140" cy="130" rx="76" ry="9" fill="#C0552E" />
        <ellipse cx="140" cy="130" rx="76" ry="9" fill="none" stroke="#7c3a1c" strokeWidth="1" />
        <text x="240" y="132" fontFamily="var(--font-sans)" fontSize="10" fill="#7a7f88">O-ring</text>
        {/* membrane */}
        <ellipse cx="140" cy="160" rx="68" ry="8" fill="#f4f1ea" stroke="#1a1d24" strokeDasharray="3 3" strokeWidth="1.4" />
        <text x="240" y="163" fontFamily="var(--font-sans)" fontSize="10" fill="#7a7f88">membrane</text>
        {/* base */}
        <ellipse cx="140" cy="200" rx="92" ry="16" fill="#cdc5b6" stroke="#5a5e66" strokeWidth="1.4" />
        <rect x="48"  y="200" width="184" height="34" fill="#cdc5b6" stroke="#5a5e66" strokeWidth="1.4" />
        <ellipse cx="140" cy="234" rx="92" ry="14" fill="#cdc5b6" stroke="#5a5e66" strokeWidth="1.4" />
        <text x="240" y="220" fontFamily="var(--font-sans)" fontSize="10" fill="#7a7f88">base</text>
        {/* exploded arrows */}
        <line x1="140" y1="95"  x2="140" y2="118" stroke="#7a7f88" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="140" y1="138" x2="140" y2="152" stroke="#7a7f88" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="140" y1="168" x2="140" y2="184" stroke="#7a7f88" strokeWidth="1" strokeDasharray="2 2" />
      </g>

      {/* arrow */}
      <g transform="translate(310 175)">
        <path d="M 0 0 L 50 0" stroke="#16767B" strokeWidth="1.6" />
        <polygon points="50,-5 60,0 50,5" fill="#16767B" />
      </g>

      {/* ===== Step 2: cartridge pressed into satellite ===== */}
      <g transform="translate(390 30)">
        <circle cx="-6" cy="0" r="14" fill="#16767B" />
        <text x="-6" y="5" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="14" fontWeight="700" fill="white">2</text>
        <text x="18" y="5" fontFamily="var(--font-sans)" fontSize="12" fontWeight="600" letterSpacing="0.06em" fill="#1a1d24">PRESS INTO SATELLITE</text>
        <text x="18" y="22" fontFamily="var(--font-sans)" fontSize="11" fill="#4a4f59">the tooth retains it</text>

        {/* satellite body */}
        <rect x="20" y="80" width="280" height="180" rx="18" fill="#e3ecf6" stroke="#2D6CB0" strokeWidth="1.5" />
        {/* port */}
        <rect x="10" y="160" width="14" height="20" fill="#2D6CB0" />
        {/* cartridge being inserted */}
        <rect x="160" y="120" width="100" height="100" rx="10" fill="#fff" stroke="#5a5e66" strokeWidth="1.4" />
        {/* tooth */}
        <polygon points="155,150 165,145 165,165" fill="#16767B" />
        <polygon points="155,210 165,205 165,225" fill="#16767B" />
        <polygon points="265,150 255,145 255,165" fill="#16767B" />
        <polygon points="265,210 255,205 255,225" fill="#16767B" />
        {/* insertion arrow */}
        <line x1="120" y1="170" x2="150" y2="170" stroke="#1a1d24" strokeWidth="1.2" />
        <polygon points="150,167 156,170 150,173" fill="#1a1d24" />
        <text x="100" y="280" fontFamily="var(--font-sans)" fontSize="10" fill="#7a7f88">satellite shell</text>
        <text x="180" y="245" fontFamily="var(--font-sans)" fontSize="10" fill="#7a7f88">cartridge module</text>
      </g>

      {/* arrow */}
      <g transform="translate(720 175)">
        <path d="M 0 0 L 50 0" stroke="#16767B" strokeWidth="1.6" />
        <polygon points="50,-5 60,0 50,5" fill="#16767B" />
      </g>

      {/* ===== Step 3: bolt to hub ===== */}
      <g transform="translate(800 30)">
        <circle cx="-6" cy="0" r="14" fill="#16767B" />
        <text x="-6" y="5" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="14" fontWeight="700" fill="white">3</text>
        <text x="18" y="5" fontFamily="var(--font-sans)" fontSize="12" fontWeight="600" letterSpacing="0.06em" fill="#1a1d24">BOLT TO THE HUB</text>
        <text x="18" y="22" fontFamily="var(--font-sans)" fontSize="11" fill="#4a4f59">4× M2.5 each side</text>

        {/* bacteria satellite */}
        <rect x="0" y="105" width="100" height="130" rx="14" fill="#f7e8df" stroke="#C0552E" strokeWidth="1.4" />
        {/* hub */}
        <rect x="120" y="85" width="160" height="170" rx="18" fill="#e9f3f3" stroke="#16767B" strokeWidth="1.6" />
        {/* perfusion satellite */}
        <rect x="300" y="105" width="100" height="130" rx="14" fill="#e3ecf6" stroke="#2D6CB0" strokeWidth="1.4" />
        {/* flange tabs */}
        <rect x="100" y="120" width="22" height="14" fill="#cdc5b6" stroke="#5a5e66" strokeWidth="1" />
        <rect x="100" y="206" width="22" height="14" fill="#cdc5b6" stroke="#5a5e66" strokeWidth="1" />
        <rect x="278" y="120" width="22" height="14" fill="#cdc5b6" stroke="#5a5e66" strokeWidth="1" />
        <rect x="278" y="206" width="22" height="14" fill="#cdc5b6" stroke="#5a5e66" strokeWidth="1" />
        {/* screws */}
        {[111, 211, 289, 213].map(() => null)}
        {[{ x: 111, y: 127 }, { x: 111, y: 213 }, { x: 289, y: 127 }, { x: 289, y: 213 }].map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="5" fill="#7a7f88" stroke="#1a1d24" strokeWidth="0.8" />
            <line x1={p.x - 3} y1={p.y} x2={p.x + 3} y2={p.y} stroke="#1a1d24" strokeWidth="0.8" />
          </g>
        ))}
        <text x="200" y="170" textAnchor="middle" fontFamily="var(--font-serif)" fontStyle="italic" fontSize="13" fill="#0e5a5e">drug hub</text>
        <text x="50"  y="270" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fill="#7a4530">bacteria</text>
        <text x="350" y="270" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fill="#2b4b73">perfusion</text>
      </g>
    </svg>
  );
}
