// Scene registry — one entry per scene, in display order.  Each scene has a
// stable `id` that maps to a component in SCENE_COMPONENTS (DeckClient.tsx)
// and a `beats` count (how many forward-presses the scene takes before the
// deck advances to the next scene).  Pitch decks use beats to reveal content
// progressively within a scene — see scenes/SceneContent.tsx for the
// canonical pattern.

export type SceneId = string;

export type SceneMeta = {
  id: SceneId;
  /** Shown in the footer pill + jump menu. */
  title: string;
  /** Number of beats (forward-presses) within the scene. ≥1. */
  beats: number;
};

export const SCENES: ReadonlyArray<SceneMeta> = [
  { id: "cover",   title: "Open",   beats: 1 },
  { id: "content", title: "Body",   beats: 3 },
  { id: "close",   title: "Close",  beats: 2 },
];
