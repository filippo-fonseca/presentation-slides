// Default deck mark. A neutral three-ring glyph in `currentColor` so it
// inherits the header band's white text. Replace per-presentation by editing
// THEME.Mark in lib/theme.ts — either point at a different React component or
// at a next/image src.

export default function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      role="img"
      aria-label="Deck mark"
      fill="none"
    >
      <circle cx="11" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      <circle cx="21" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
  );
}
