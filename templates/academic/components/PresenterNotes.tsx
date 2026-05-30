"use client";

type Props = {
  open: boolean;
  notes: string;
  slideNumber: number;
  totalSlides: number;
  onClose: () => void;
};

export default function PresenterNotes({
  open,
  notes,
  slideNumber,
  totalSlides,
  onClose,
}: Props) {
  return (
    <aside
      className={`fixed inset-x-0 bottom-0 z-40 origin-bottom transition-transform duration-300 ease-out ${
        open ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!open}
      aria-label="Presenter notes"
      data-no-advance
    >
      <div className="mx-auto max-w-[1100px] rounded-t-2xl border border-b-0 border-line-strong bg-surface shadow-2xl">
        <div className="flex items-center justify-between border-b border-line bg-surface-2 px-5 py-2.5">
          <div className="flex items-center gap-3">
            <span className="eyebrow text-brand">Presenter notes</span>
            <span className="font-mono text-[11px] text-ink-muted">
              {String(slideNumber).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-muted sm:inline">
              press S to close
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close presenter notes"
              className="rounded-md border border-line px-2 py-1 text-[11px] text-ink-soft transition-colors hover:bg-surface-2"
            >
              Close
            </button>
          </div>
        </div>
        <div className="max-h-[35svh] overflow-y-auto px-6 py-5 font-serif text-[15px] leading-relaxed text-ink-soft">
          {notes.split("\n\n").map((p, i) => (
            <p key={i} className="mb-3 last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </div>
    </aside>
  );
}
