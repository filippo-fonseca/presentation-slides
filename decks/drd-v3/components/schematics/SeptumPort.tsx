// Slide 11 — Septum-port side section schematic.
// compression cap → silicone septum (~20% compression) → needle passage → bacteria chamber

export default function SeptumPort({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 360"
      className={className}
      role="img"
      aria-label="Self-sealing septum port — side section showing compression cap, silicone septum, needle passage, and bacteria chamber"
      fill="none"
    >
      {/* chamber (coral fill) */}
      <rect x="40" y="200" width="440" height="130" rx="14" fill="#f7e8df" stroke="#C0552E" strokeWidth="1.5" />
      <text x="260" y="280" textAnchor="middle" fontFamily="var(--font-serif)" fontStyle="italic" fontSize="14" fill="#7a4530">bacteria chamber (sealed culture)</text>

      {/* compression cap (top, dark) */}
      <path
        d="M 200 60 L 320 60 L 330 100 L 310 110 L 210 110 L 190 100 Z"
        fill="#4a4f59"
        stroke="#1a1d24"
        strokeWidth="1.2"
      />
      <text x="370" y="78" fontFamily="var(--font-sans)" fontSize="11" fill="#1a1d24">compression cap</text>
      <line x1="335" y1="80" x2="368" y2="80" stroke="#7a7f88" strokeWidth="0.8" />

      {/* silicone septum (red-orange disk) */}
      <rect x="200" y="110" width="120" height="34" rx="3" fill="#C0552E" />
      <rect x="200" y="110" width="120" height="34" rx="3" fill="none" stroke="#7c3a1c" strokeWidth="1" />
      <text x="370" y="130" fontFamily="var(--font-sans)" fontSize="11" fill="#1a1d24">silicone septum</text>
      <text x="370" y="144" fontFamily="var(--font-sans)" fontSize="10" fill="#7a7f88">held at ~20% compression</text>
      <line x1="335" y1="125" x2="368" y2="125" stroke="#7a7f88" strokeWidth="0.8" />

      {/* port body (resin) */}
      <path d="M 180 144 L 200 144 L 200 200 L 320 200 L 320 144 L 340 144 L 340 210 L 180 210 Z"
            fill="#f4f1ea" stroke="#5a5e66" strokeWidth="1.2" />
      <text x="55" y="165" fontFamily="var(--font-sans)" fontSize="11" fill="#1a1d24">resin port body</text>
      <line x1="120" y1="160" x2="180" y2="160" stroke="#7a7f88" strokeWidth="0.8" />

      {/* needle passage indicator */}
      <line x1="260" y1="20" x2="260" y2="240" stroke="#1a1d24" strokeWidth="1" strokeDasharray="2 3" />
      {/* needle */}
      <line x1="260" y1="20" x2="260" y2="180" stroke="#1a1d24" strokeWidth="2.4" />
      <polygon points="256,180 260,190 264,180" fill="#1a1d24" />
      {/* needle bevel hub */}
      <rect x="252" y="6"  width="16" height="14" fill="#7a7f88" stroke="#1a1d24" strokeWidth="0.8" />

      <text x="50" y="40" fontFamily="var(--font-sans)" fontSize="11" fontWeight="600" fill="#1a1d24">inoculate / CFU sample</text>
      <text x="50" y="56" fontFamily="var(--font-sans)" fontSize="10" fill="#7a7f88">needle through septum — chamber stays closed & sterile</text>

      {/* arrow + compression note inside the chamber */}
      <line x1="260" y1="195" x2="260" y2="230" stroke="#C0552E" strokeWidth="1.4" strokeDasharray="3 3" />
      <polygon points="256,228 260,238 264,228" fill="#C0552E" />
    </svg>
  );
}
