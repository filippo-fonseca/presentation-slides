// Default deck mark. A neutral concentric-ring glyph that picks up
// `currentColor` so it inherits the header text color. Replace with the
// brand's own glyph (e.g. an SVG, an Image, or a CSS animation) for the
// presentation — this file is the swap-point.

export default function Mark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      role="img"
      aria-label="Deck mark"
      fill="none"
    >
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="16" cy="16" r="8"  stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="16" cy="16" r="3"  fill="currentColor" />
    </svg>
  );
}
