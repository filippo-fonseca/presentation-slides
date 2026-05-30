// Single source of truth for the per-presentation chrome:
// metadata, the header band's right-side label, and the institutional logos
// that appear in the footer. Edit this file when scaffolding a new deck.
//
// Visual retheming (colors): edit app/globals.css.
// Brand mark: edit components/ui/Mark.tsx.
// Fonts: edit the next/font imports in app/layout.tsx.

export type FooterLogo = {
  src: string;
  alt: string;
  /** Intrinsic image dimensions (for next/image). */
  width: number;
  height: number;
  /** Optional small label rendered next to the logo. */
  label?: string;
  /** Optional Tailwind class override for sizing/positioning. */
  className?: string;
  /** Render as a rounded mark (avatar-style) instead of a wordmark. */
  rounded?: boolean;
};

export type Theme = {
  /** Full metadata title (browser tab + OG). */
  title: string;
  /** Short title used in the metadata template ("%s · Short Title"). */
  shortTitle: string;
  /** SEO description. */
  description: string;
  /** Used in <meta name="theme-color"> — typically the brand primary. */
  themeColor: string;
  /** Used in metadata.authors. */
  authors: Array<{ name: string; url?: string }>;
  /** Shown on the right of the header band on every content slide. */
  headerRightLabel: string;
  /** Logos / marks in the footer (left → right). */
  footer: {
    left: FooterLogo[];
    right: FooterLogo[];
  };
};

export const THEME: Theme = {
  title: "Presentation",
  shortTitle: "Deck",
  description: "A presentation deck.",
  themeColor: "#16767B",
  authors: [{ name: "Speaker" }],
  headerRightLabel: "Presentation",
  footer: {
    left: [],
    right: [],
  },
};
