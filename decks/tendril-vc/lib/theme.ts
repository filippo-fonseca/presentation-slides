// Single source of truth for the per-presentation chrome:
// metadata, deck title (small label in the header), and the optional pill
// shown next to the audio toggle (optional investor/context label).
//
// Visual retheming (colors): edit app/globals.css.
// Brand mark: edit components/Mark.tsx.
// Fonts: edit the next/font imports in app/layout.tsx.

export type Theme = {
  /** Full metadata title (browser tab + OG). */
  title: string;
  /** Short title used in the metadata template ("%s · Short Title"). */
  shortTitle: string;
  /** SEO description. */
  description: string;
  /** Used in metadata.authors. */
  authors: Array<{ name: string; url?: string }>;
  /** Small pill shown to the right of the deck mark in the header. */
  headerBadge?: string;
  /** Footer left-side caption (e.g. "© 2026 Brand"). */
  footerCaption?: string;
};

export const THEME: Theme = {
  title: "Tendril: The Operating System for the Open Field",
  shortTitle: "Tendril",
  description:
    "An agentic intelligence layer for agriculture, delivered through a fleet of small, modular, chemical-free farm robots. The system that resists decay in the field.",
  authors: [{ name: "Filippo Fonseca" }],
  footerCaption: "© 2026 Tendril",
};
