// Inline brand marks. Kept as SVG so the deck has no external logo dependency
// at first run — drop replacement PNGs into /public/images/logos/ and swap to
// next/image later if/when official artwork is available.

export function DrdMark({ size = 28 }: { size?: number }) {
  // A simple, custom mark for "DRD-3" — three rings (the three chambers)
  // intersecting at the central hub. Stroke uses currentColor so it inherits.
  const s = size;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 32 32"
      role="img"
      aria-label="DRD-3"
      fill="none"
    >
      <circle cx="11" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      <circle cx="21" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
  );
}

export function MgbWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display tracking-tight ${className}`}>
      <span className="font-semibold">Mass General Brigham</span>
    </span>
  );
}

export function HmsWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display tracking-tight ${className}`}>
      Harvard Medical School
    </span>
  );
}

export function HolWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-sans uppercase tracking-[0.18em] text-[10.5px] ${className}`}>
      Harris Orthopaedics Laboratory
    </span>
  );
}

export function YaleWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display tracking-tight ${className}`}>
      Yale University
    </span>
  );
}
