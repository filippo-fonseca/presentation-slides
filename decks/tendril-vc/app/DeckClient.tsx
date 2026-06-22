"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { SCENES } from "@/lib/content";
import SceneCover from "./scenes/SceneCover";
import SceneThesis from "./scenes/SceneThesis";
import SceneProblem from "./scenes/SceneProblem";
import SceneWhyNow from "./scenes/SceneWhyNow";
import SceneTeam from "./scenes/SceneTeam";
import SceneValidation from "./scenes/SceneValidation";
import SceneSafety from "./scenes/SceneSafety";
import SceneOnus from "./scenes/SceneOnus";
import SceneSystem from "./scenes/SceneSystem";
import SceneHands from "./scenes/SceneHands";
import SceneFarmFile from "./scenes/SceneFarmFile";
import SceneSmall from "./scenes/SceneSmall";
import SceneLockIn from "./scenes/SceneLockIn";
import SceneEnergy from "./scenes/SceneEnergy";
import SceneDifferent from "./scenes/SceneDifferent";
import SceneCompetition from "./scenes/SceneCompetition";
import SceneMoat from "./scenes/SceneMoat";
import SceneMarket from "./scenes/SceneMarket";
import SceneModel from "./scenes/SceneModel";
import SceneStakes from "./scenes/SceneStakes";
import SceneClose from "./scenes/SceneClose";
import ChimeToggle, { type ChimeApi } from "./components/ChimeToggle";
import SceneNav from "./components/SceneNav";
import ProgressBar from "./components/ProgressBar";
import KeyHints from "./components/KeyHints";
import Mark from "./components/Mark";
import { THEME } from "@/lib/theme";

// A stable chime handle.  The underlying impl is swapped via ref so re-renders
// of the toggle don't bust scene useEffect deps.
export type SceneChime = {
  play: (variant?: "listen" | "found" | "step" | "pop") => void;
  /** True when the user has enabled deck audio via the header toggle. */
  isEnabled: () => boolean;
};

export type SceneProps = {
  beat: number;
  totalBeats: number;
  chime: SceneChime;
};

// Register scenes here.  Each scene component receives `beat` (current beat
// index within the scene), `totalBeats`, and a `chime` API.  The scene IDs
// come from lib/content.ts SCENES — add more scenes by exporting them from
// scenes/ and wiring them up below.
const SCENE_COMPONENTS: Record<string, React.FC<SceneProps>> = {
  cover: SceneCover,
  thesis: SceneThesis,
  problem: SceneProblem,
  "why-now": SceneWhyNow,
  team: SceneTeam,
  validation: SceneValidation,
  safety: SceneSafety,
  onus: SceneOnus,
  system: SceneSystem,
  hands: SceneHands,
  "farm-file": SceneFarmFile,
  small: SceneSmall,
  "lock-in": SceneLockIn,
  energy: SceneEnergy,
  different: SceneDifferent,
  competition: SceneCompetition,
  moat: SceneMoat,
  market: SceneMarket,
  model: SceneModel,
  stakes: SceneStakes,
  close: SceneClose,
};

export default function DeckClient() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [beat, setBeat] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [hintsVisible, setHintsVisible] = useState(true);

  const totalScenes = SCENES.length;
  const currentScene = SCENES[sceneIndex];
  const SceneComponent = SCENE_COMPONENTS[currentScene.id] ?? SceneCover;

  // Chime — Web Audio, muted by default.  Stable wrapper around a mutating
  // ref so scene useEffect deps don't bust on every toggle.
  const chimeRef = useRef<ChimeApi>({ enabled: false, play: () => {} });
  const setChimeApi = useCallback((api: ChimeApi) => {
    chimeRef.current = api;
  }, []);
  const stableChime = useMemo<SceneChime>(
    () => ({
      play: (variant) => chimeRef.current.play(variant),
      isEnabled: () => chimeRef.current.enabled,
    }),
    [],
  );

  const advance = useCallback(() => {
    let moved = false;
    if (beat < currentScene.beats - 1) {
      setBeat(beat + 1);
      moved = true;
    } else if (sceneIndex < totalScenes - 1) {
      setSceneIndex(sceneIndex + 1);
      setBeat(0);
      moved = true;
    }
    if (moved) chimeRef.current.play("pop");
  }, [beat, currentScene.beats, sceneIndex, totalScenes]);

  const retreat = useCallback(() => {
    let moved = false;
    if (beat > 0) {
      setBeat(beat - 1);
      moved = true;
    } else if (sceneIndex > 0) {
      const prev = SCENES[sceneIndex - 1];
      setSceneIndex(sceneIndex - 1);
      setBeat(prev.beats - 1);
      moved = true;
    }
    if (moved) chimeRef.current.play("pop");
  }, [beat, sceneIndex]);

  const jumpTo = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= totalScenes) return;
      setSceneIndex(idx);
      setBeat(0);
      setNavOpen(false);
    },
    [totalScenes],
  );

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (navOpen && (e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === " ")) return;
      const target = e.target as HTMLElement | null;
      const isInteractive =
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA");
      if (e.key === " " && isInteractive) return;

      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "PageDown":
          e.preventDefault();
          advance();
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          retreat();
          break;
        case "Home":
          e.preventDefault();
          jumpTo(0);
          break;
        case "End":
          e.preventDefault();
          jumpTo(totalScenes - 1);
          break;
        case "Escape":
          if (navOpen) {
            e.preventDefault();
            setNavOpen(false);
          }
          break;
        case "?":
          e.preventDefault();
          setHintsVisible((v) => !v);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [advance, retreat, jumpTo, navOpen, totalScenes]);

  // Touch swipe
  const touchRef = useRef<{ x: number; y: number; t: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY, t: Date.now() };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchRef.current;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    const dt = Date.now() - start.t;
    touchRef.current = null;
    if (dt < 600 && Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) advance();
      else retreat();
    }
  };

  // Click-to-advance — only on dead space (not on buttons/links/inputs).
  const onStageClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button, a, [role='button'], input, textarea, [data-no-advance]")) {
      return;
    }
    advance();
  };

  useEffect(() => {
    if (!hintsVisible) return;
    const t = setTimeout(() => setHintsVisible(false), 6000);
    return () => clearTimeout(t);
  }, [hintsVisible]);

  const sceneKey = useMemo(() => `scene-${sceneIndex}`, [sceneIndex]);

  return (
    <main
      className="relative flex h-svh w-full flex-col overflow-hidden bg-background text-foreground grain"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <a
        href="#deck-stage"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-foreground focus-visible:px-3 focus-visible:py-2 focus-visible:text-[13px] focus-visible:font-medium focus-visible:text-background"
      >
        Skip to deck
      </a>

      {/* Header — mark + wordmark link home on the left, audio toggle on the right */}
      <header className="relative z-30 flex shrink-0 items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          aria-label={`${THEME.shortTitle} — home`}
          className="inline-flex items-center gap-2.5 text-foreground/90 transition-opacity hover:opacity-80"
          data-no-advance
        >
          <Mark size={30} />
          <span
            className="text-[18px] italic leading-none tracking-[-0.01em] text-foreground"
            style={{ fontFamily: "var(--font-fraunces)", fontWeight: 600 }}
          >
            Tendril
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href="mailto:filippo.fonseca@yale.edu"
            data-no-advance
            className="neu-raised-sm hidden h-8 items-center rounded-full px-3.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground sm:inline-flex"
          >
            Get in touch
          </a>
          <Link
            href="/"
            data-no-advance
            className="neu-raised-sm hidden h-8 items-center rounded-full px-3.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground sm:inline-flex"
          >
            See our website
          </Link>
          <ChimeToggle onApi={setChimeApi} />
        </div>
      </header>

      {/* Stage */}
      <section
        id="deck-stage"
        role="region"
        aria-roledescription="slide"
        aria-label={`Scene ${sceneIndex + 1} of ${totalScenes}: ${currentScene.title}`}
        className="relative z-10 flex flex-1 cursor-pointer flex-col items-stretch overflow-hidden"
        onClick={onStageClick}
      >
        <div
          key={sceneKey}
          className="scene-enter relative flex h-full w-full flex-col items-stretch"
        >
          <SceneComponent
            beat={beat}
            totalBeats={currentScene.beats}
            chime={stableChime}
          />
        </div>
      </section>

      {/* Footer — counter + chevrons + progress */}
      <footer
        className="relative z-30 flex shrink-0 items-center justify-between gap-4 border-t border-line bg-background/80 px-6 py-3 backdrop-blur-md sm:px-10"
        data-no-advance
      >
        <span className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 font-mono text-[9.5px] uppercase tracking-[0.3em] text-foreground/40 sm:block">
          Investor deck
        </span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setNavOpen((v) => !v)}
            aria-expanded={navOpen}
            aria-controls="scene-nav-menu"
            className="neu-raised-sm rounded-full px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/85 transition-colors hover:text-foreground"
          >
            {String(sceneIndex + 1).padStart(2, "0")} / {String(totalScenes).padStart(2, "0")}
            <span className="ml-2 hidden text-foreground/55 sm:inline">· {currentScene.title}</span>
          </button>
          <button
            type="button"
            onClick={retreat}
            aria-label="Previous beat"
            className="neu-raised-sm hidden size-8 items-center justify-center rounded-full text-foreground/80 transition-colors hover:text-foreground sm:inline-flex"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={advance}
            aria-label="Next beat"
            className="neu-raised-sm hidden size-8 items-center justify-center rounded-full text-foreground/80 transition-colors hover:text-foreground sm:inline-flex"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <ProgressBar
          sceneIndex={sceneIndex}
          beat={beat}
          totalBeats={currentScene.beats}
          totalScenes={totalScenes}
        />
      </footer>

      <SceneNav
        open={navOpen}
        scenes={SCENES}
        activeIndex={sceneIndex}
        onJump={jumpTo}
        onClose={() => setNavOpen(false)}
      />

      <KeyHints visible={hintsVisible} />
    </main>
  );
}
