// Scene registry — one entry per scene, in display order.
// Each scene's `id` maps to a component in SCENE_COMPONENTS (DeckClient.tsx).
// `beats` is how many forward-presses the scene takes.

export type SceneId = string;

export type SceneMeta = {
  id: SceneId;
  title: string;
  beats: number;
};

export const SCENES: ReadonlyArray<SceneMeta> = [
  { id: "cover",   title: "Eyeline",          beats: 1 },
  { id: "problem", title: "The gap",          beats: 3 },
  { id: "system",  title: "Not a camera",     beats: 3 },
  { id: "tracks",  title: "Three tracks",     beats: 3 },
  { id: "curling", title: "Curling",          beats: 3 },
  { id: "college", title: "Go big, skip top", beats: 3 },
  { id: "close",   title: "The ask",          beats: 1 },
];
