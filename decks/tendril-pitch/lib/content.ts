// Tendril — scene registry. Each entry maps to a component in
// SCENE_COMPONENTS (DeckClient.tsx) and declares its beat count.
//
// Speaker notes for each scene live alongside the component as a `NOTES`
// export — they're kept beside the on-screen copy so they stay in sync.

export type SceneId = string;

export type SceneMeta = {
  id: SceneId;
  /** Shown in the footer pill + jump menu. */
  title: string;
  /** Number of beats (forward-presses) within the scene. ≥1. */
  beats: number;
};

export const SCENES: ReadonlyArray<SceneMeta> = [
  { id: "cover",           title: "Cover",                  beats: 1 },
  { id: "brain",           title: "Where we already are",   beats: 5 },
  { id: "question",        title: "The question",           beats: 3 },
  { id: "problem",         title: "The problem",            beats: 3 },
  { id: "why-now",         title: "Why now",                beats: 4 },
  { id: "insight",         title: "The insight",            beats: 2 },
  { id: "what-we-build",   title: "What we build",          beats: 4 },
  { id: "unfair",          title: "The unfair advantage",   beats: 3 },
  { id: "whos-here",       title: "Who's already here",     beats: 6 },
  { id: "how-different",   title: "How we're different",    beats: 4 },
  { id: "moat",            title: "The moat",               beats: 5 },
  { id: "business-model",  title: "Business model",         beats: 4 },
  { id: "gtm",             title: "Go-to-market",           beats: 4 },
  { id: "griggs",          title: "Who we'd call first",    beats: 5 },
  { id: "iron",            title: "Their biggest cost",     beats: 5 },
  { id: "small",           title: "Why small wins",         beats: 4 },
  { id: "earth",           title: "Better for the land",    beats: 4 },
  { id: "burden",          title: "The knowledge burden",   beats: 3 },
  { id: "homework",        title: "We did our homework",    beats: 4 },
  { id: "wedge",           title: "The wedge",              beats: 3 },
  { id: "roadmap",         title: "Roadmap",                beats: 3 },
  { id: "hard-parts",      title: "The hard parts",         beats: 6 },
  { id: "why-us",          title: "Why us",                 beats: 3 },
  { id: "ask",             title: "The ask",                beats: 4 },
  { id: "impact",          title: "The bigger picture",     beats: 4 },
  { id: "consider",        title: "One ask before the recap", beats: 3 },
  { id: "recap",           title: "Recap",                  beats: 2 },
  { id: "close",           title: "Close",                  beats: 2 },
];
