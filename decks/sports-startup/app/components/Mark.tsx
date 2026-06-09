// Eyeline mark — concentric rings with the innermost ring filled.
// Reads as a camera aperture / POV reticle and the curling "house."
// Uses currentColor so the parent (e.g. `text-accent`) tints it.

export default function Mark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      role="img"
      aria-label="Eyeline mark"
      fill="none"
    >
      <circle cx="16" cy="16" r="13.5" stroke="currentColor" strokeWidth="0.9" opacity="0.32" />
      <circle cx="16" cy="16" r="10"   stroke="currentColor" strokeWidth="0.9" opacity="0.55" />
      <circle cx="16" cy="16" r="6.5"  stroke="currentColor" strokeWidth="0.9" opacity="0.85" />
      <circle cx="16" cy="16" r="2.8"  fill="currentColor" />
      {/* faint aperture crosshair, very low opacity */}
      <line x1="16" y1="0.5" x2="16" y2="3.5" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
      <line x1="16" y1="28.5" x2="16" y2="31.5" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
      <line x1="0.5" y1="16" x2="3.5" y2="16" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
      <line x1="28.5" y1="16" x2="31.5" y2="16" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
    </svg>
  );
}
