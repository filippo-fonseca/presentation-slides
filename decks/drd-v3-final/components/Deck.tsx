"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SLIDES } from "@/lib/slides";
import SlideShell from "./SlideShell";
import PresenterNotes from "./PresenterNotes";
import { DrdMark } from "./ui/Logos";
import { playPop } from "./SlideChime";

export default function Deck() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [notesOpen, setNotesOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [hintsVisible, setHintsVisible] = useState(true);
  const [muted, setMuted] = useState(false);

  const total = SLIDES.length;
  const slide = SLIDES[index];
  const SlideBody = slide.Component;

  const advance = useCallback(() => {
    setIndex((i) => {
      if (i >= total - 1) return i;
      setDirection("forward");
      if (!muted) playPop({ variant: "forward" });
      return i + 1;
    });
  }, [total, muted]);

  const retreat = useCallback(() => {
    setIndex((i) => {
      if (i <= 0) return i;
      setDirection("back");
      if (!muted) playPop({ variant: "back" });
      return i - 1;
    });
  }, [muted]);

  const jumpTo = useCallback(
    (i: number) => {
      if (i < 0 || i >= total) return;
      setIndex((cur) => {
        const dir: "forward" | "back" = i >= cur ? "forward" : "back";
        setDirection(dir);
        if (!muted && i !== cur) playPop({ variant: dir });
        return i;
      });
      setNavOpen(false);
    },
    [total, muted],
  );

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
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
        case "PageDown":
        case " ":
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
          jumpTo(total - 1);
          break;
        case "s":
        case "S":
          e.preventDefault();
          setNotesOpen((v) => !v);
          break;
        case "g":
        case "G":
          e.preventDefault();
          setNavOpen((v) => !v);
          break;
        case "Escape":
          if (navOpen) setNavOpen(false);
          else if (notesOpen) setNotesOpen(false);
          break;
        case "m":
        case "M":
          e.preventDefault();
          setMuted((v) => !v);
          break;
        case "?":
          e.preventDefault();
          setHintsVisible((v) => !v);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [advance, retreat, jumpTo, total, navOpen, notesOpen]);

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

  // Auto-hide the keyboard hints after a few seconds
  useEffect(() => {
    if (!hintsVisible) return;
    const t = setTimeout(() => setHintsVisible(false), 5500);
    return () => clearTimeout(t);
  }, [hintsVisible]);

  const slideKey = useMemo(() => `slide-${index}`, [index]);

  return (
    <main
      className="relative flex h-svh w-full flex-col overflow-hidden bg-background"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Skip link */}
      <a
        href="#deck-stage"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-brand focus-visible:px-3 focus-visible:py-2 focus-visible:text-[13px] focus-visible:font-medium focus-visible:text-white"
      >
        Skip to deck
      </a>

      {/* Stage */}
      <section
        id="deck-stage"
        role="region"
        aria-roledescription="slide"
        aria-label={`Slide ${index + 1} of ${total}: ${slide.title}`}
        className="relative z-0 flex flex-1 flex-col overflow-hidden"
      >
        <div
          key={slideKey}
          className={`relative h-full w-full ${
            direction === "forward" ? "slide-enter-forward" : "slide-enter-back"
          }`}
        >
          <SlideShell
            sectionLabel={slide.sectionLabel}
            slideNumber={index + 1}
            totalSlides={total}
            bare={slide.bare}
          >
            <SlideBody />
          </SlideShell>
        </div>
      </section>

      {/* Bottom-left counter pill — appears over the footer */}
      <button
        type="button"
        onClick={() => setNavOpen((v) => !v)}
        aria-expanded={navOpen}
        aria-controls="deck-nav"
        title="Jump to slide (G)"
        className={`deck-chrome fixed right-0 z-30 flex max-h-[55svh] cursor-pointer flex-col items-center gap-3 rounded-l-full border border-r-0 border-line bg-surface/95 px-2.5 py-4 shadow-md backdrop-blur transition-colors hover:bg-surface ${
          slide.bare ? "top-4" : "top-14"
        }`}
      >
        <span className="text-brand">
          <DrdMark size={12} />
        </span>
        <span
          className="min-h-0 overflow-hidden text-ellipsis whitespace-nowrap font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-soft"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="px-1 text-line-strong" aria-hidden>·</span>
          <span className="text-ink">{slide.title}</span>
        </span>
      </button>

      {/* Chevrons */}
      <button
        type="button"
        onClick={retreat}
        aria-label="Previous slide"
        disabled={index === 0}
        className="deck-chrome fixed left-3 top-1/2 z-30 -translate-y-1/2 cursor-pointer rounded-full border border-line bg-surface/80 p-2 text-ink-soft shadow-sm backdrop-blur transition hover:bg-surface disabled:cursor-not-allowed disabled:opacity-30"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={advance}
        aria-label="Next slide"
        disabled={index === total - 1}
        className="deck-chrome fixed right-3 top-1/2 z-30 -translate-y-1/2 cursor-pointer rounded-full border border-line bg-surface/80 p-2 text-ink-soft shadow-sm backdrop-blur transition hover:bg-surface disabled:cursor-not-allowed disabled:opacity-30"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Presenter notes */}
      <PresenterNotes
        open={notesOpen}
        notes={slide.notes}
        slideNumber={index + 1}
        totalSlides={total}
        onClose={() => setNotesOpen(false)}
      />

      {/* Scene nav menu */}
      {navOpen && (
        <div
          id="deck-nav"
          role="dialog"
          aria-label="Jump to slide"
          className="deck-chrome fixed inset-0 z-40 flex items-end justify-center bg-ink/30 backdrop-blur-sm sm:items-center"
          onClick={() => setNavOpen(false)}
          data-no-advance
        >
          <div
            className="m-4 max-h-[80svh] w-full max-w-[760px] overflow-y-auto rounded-2xl border border-line bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-line bg-surface-2 px-5 py-3">
              <span className="eyebrow text-brand">Jump to slide</span>
              <button
                type="button"
                onClick={() => setNavOpen(false)}
                className="rounded-md border border-line px-2 py-1 text-[11px] text-ink-soft transition-colors hover:bg-surface"
              >
                Close
              </button>
            </div>
            <ul className="divide-y divide-line">
              {SLIDES.map((s, i) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => jumpTo(i)}
                    className={`flex w-full items-center gap-4 px-5 py-3 text-left transition-colors hover:bg-brand-fade ${
                      i === index ? "bg-brand-fade" : ""
                    }`}
                  >
                    <span className="w-10 font-mono text-[11px] tabular-nums text-ink-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-serif text-[15px] text-ink">{s.title}</span>
                    <span className="eyebrow text-ink-muted">{s.sectionLabel || "Cover"}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Keyboard hints */}
      <div
        className={`deck-chrome pointer-events-none fixed bottom-4 right-4 z-20 rounded-lg border border-line bg-surface/90 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted shadow-sm backdrop-blur transition-opacity duration-500 ${
          hintsVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={!hintsVisible}
      >
        ← / → · S notes · G jump · M {muted ? "unmute" : "mute"} · ? hints
      </div>
    </main>
  );
}
