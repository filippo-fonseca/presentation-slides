// Scene registry — one entry per scene, in display order. Each scene has a
// stable `id` that maps to a component in SCENE_COMPONENTS (DeckClient.tsx)
// and a `beats` count (forward-presses before the deck advances). Beats reveal
// supporting detail; the substance of each scene lands on beat 0, so the deck
// reads cleanly when clicked straight through (it's a self-guided scout teaser).

export type SceneId = string;

export type SceneMeta = {
  id: SceneId;
  /** Shown in the footer pill + jump menu. */
  title: string;
  /** Number of beats (forward-presses) within the scene. ≥1. */
  beats: number;
};

export const SCENES: ReadonlyArray<SceneMeta> = [
  { id: "cover",     title: "Cover",              beats: 1 },
  { id: "thesis",    title: "The thesis",         beats: 2 },
  { id: "problem",   title: "The problem",        beats: 2 },
  { id: "why-now",   title: "Why now",            beats: 2 },
  { id: "team",      title: "The brain",          beats: 3 },
  { id: "system",    title: "The system",         beats: 2 },
  { id: "hands",     title: "The hands",          beats: 2 },
  { id: "farm-file", title: "The .farm file",     beats: 2 },
  { id: "small",     title: "Small and modular",  beats: 2 },
  { id: "different", title: "How we're different", beats: 3 },
  { id: "moat",      title: "The moat",           beats: 2 },
  { id: "market",    title: "Who we build with",  beats: 2 },
  { id: "model",     title: "Business model",     beats: 2 },
  { id: "stakes",    title: "The stakes",         beats: 2 },
  { id: "close",     title: "Close",              beats: 2 },
];
