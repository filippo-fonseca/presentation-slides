// Tendril mark — Sprout-T (palette F04: persimmon + chartreuse).
// The T's crossbar curls into vines and a chartreuse crown sits over the
// stem, with a soft accent halo behind it for the grow-light glow.

export default function Mark({ size = 32 }: { size?: number }) {
  const showGlow = size >= 24;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Tendril"
      fill="none"
    >
      {showGlow && (
        <defs>
          <radialGradient id="tendril-halo" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%"   stopColor="#B5D33D" stopOpacity="0.55" />
            <stop offset="60%"  stopColor="#B5D33D" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#B5D33D" stopOpacity="0" />
          </radialGradient>
        </defs>
      )}
      {showGlow && <circle cx="32" cy="10" r="11" fill="url(#tendril-halo)" />}

      {/* T stem */}
      <path d="M32 58 L 32 22" stroke="#E5602C" strokeWidth="3.6" strokeLinecap="round" />
      {/* Crossbar */}
      <path
        d="M14 22 C 18 22, 22 22, 32 22 C 42 22, 46 22, 50 22"
        stroke="#E5602C" strokeWidth="3.6" strokeLinecap="round"
      />
      {/* Left curl */}
      <path
        d="M14 22 C 10 22, 8 18, 12 14 C 16 10, 22 14, 22 18"
        stroke="#E5602C" strokeWidth="2.3" strokeLinecap="round" fill="none"
      />
      {/* Right curl */}
      <path
        d="M50 22 C 54 22, 56 18, 52 14 C 48 10, 42 14, 42 18"
        stroke="#E5602C" strokeWidth="2.3" strokeLinecap="round" fill="none"
      />
      {/* Stem-to-node line */}
      <line x1="32" y1="22" x2="32" y2="13" stroke="#B5D33D" strokeWidth="1.3" opacity="0.75" />
      {/* Crown node */}
      <circle cx="32" cy="10" r="3.4" fill="#B5D33D" />
    </svg>
  );
}
