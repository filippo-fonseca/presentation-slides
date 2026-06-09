// Single source of truth for the per-presentation chrome.

export type Theme = {
  title: string;
  shortTitle: string;
  description: string;
  authors: Array<{ name: string; url?: string }>;
  headerBadge?: string;
  footerCaption?: string;
};

export const THEME: Theme = {
  title: "Eyeline · POV Sports Broadcasting",
  shortTitle: "Eyeline",
  description:
    "A live, switchable point-of-view broadcast system for sport. Built engine-first, launched in the open tier.",
  authors: [{ name: "Filippo Fonseca" }],
  headerBadge: "Concept preview",
};
