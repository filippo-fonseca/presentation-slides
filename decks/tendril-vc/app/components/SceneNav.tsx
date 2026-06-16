"use client";

import { useEffect, useRef } from "react";

type Scene = { id: string; title: string; beats: number };

type Props = {
  open: boolean;
  scenes: ReadonlyArray<Scene>;
  activeIndex: number;
  onJump: (idx: number) => void;
  onClose: () => void;
};

export default function SceneNav({ open, scenes, activeIndex, onJump, onClose }: Props) {
  const firstButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (open) {
      // focus the active scene's button when the menu opens
      const id = window.setTimeout(() => {
        firstButtonRef.current?.focus();
      }, 30);
      return () => window.clearTimeout(id);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-end justify-start sm:items-center sm:justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Jump to scene"
      data-no-advance
    >
      <button
        type="button"
        aria-label="Close scene menu"
        className="absolute inset-0 bg-background/75 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="neu-raised relative z-10 w-full max-w-2xl rounded-t-2xl border-t border-line p-5 sm:rounded-2xl sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-foreground/70">
            Jump to scene
          </p>
          <button
            type="button"
            onClick={onClose}
            className="neu-raised-sm rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80 hover:text-foreground"
          >
            Close · Esc
          </button>
        </div>
        <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {scenes.map((s, i) => {
            const isActive = i === activeIndex;
            return (
              <li key={s.id}>
                <button
                  ref={isActive ? firstButtonRef : undefined}
                  type="button"
                  onClick={() => onJump(i)}
                  aria-current={isActive ? "step" : undefined}
                  className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                    isActive ? "neu-lit" : "neu-raised-sm hover:bg-white/5"
                  }`}
                >
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/55">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-[14px] text-foreground/95">{s.title}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/45">
                    {s.beats} beats
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
