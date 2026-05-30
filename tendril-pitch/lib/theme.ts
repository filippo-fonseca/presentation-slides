// Tendril — per-presentation chrome metadata.

export type Theme = {
  title: string;
  shortTitle: string;
  description: string;
  authors: Array<{ name: string; url?: string }>;
  headerBadge?: string;
  footerCaption?: string;
};

export const THEME: Theme = {
  title: "Tendril: The Operating System for the Open Field",
  shortTitle: "Tendril",
  description:
    "An autonomous field operating system: an agentic intelligence layer delivered through a fleet of small, modular, chemical-free farm robots.",
  authors: [{ name: "Filippo Fonseca" }],
  headerBadge: "Internal: founders' pitch",
};
