"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";

type ExpandableImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  style?: React.CSSProperties;
  caption?: string;
  figureNumber?: string;
  meta?: string;
  children?: React.ReactNode;
};

export default function ExpandableImage({
  src,
  alt,
  sizes,
  className = "object-contain",
  priority,
  style,
  caption,
  figureNumber,
  meta,
  children,
}: ExpandableImageProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="absolute inset-0 cursor-zoom-in overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand"
        onClick={() => setOpen(true)}
        aria-label={`Expand ${caption || alt || "figure"}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={className}
          style={style}
          priority={priority}
        />
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] grid grid-rows-[1fr_auto] bg-ink/88 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 z-[101] grid size-10 place-items-center rounded-full border border-white/30 bg-white/12 font-sans text-[24px] leading-none text-white shadow-lg backdrop-blur transition hover:bg-white/22"
            onClick={(event) => {
              event.stopPropagation();
              setOpen(false);
            }}
            aria-label="Close expanded figure"
          >
            ×
          </button>

          <div className="relative min-h-0" onClick={(event) => event.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority={priority}
            />
          </div>

          <div
            className="mx-auto mt-4 flex max-w-[1100px] flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-[10px] border border-white/20 bg-white/94 px-5 py-3 text-center shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            {figureNumber && (
              <span id={titleId} className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
                Fig. {figureNumber}
              </span>
            )}
            {figureNumber && caption && <span className="text-line-strong">·</span>}
            {caption && <span className="font-serif text-[15px] italic text-ink">{caption}</span>}
            {meta && <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">{meta}</span>}
            {!caption && !figureNumber && (
              <span id={titleId} className="font-serif text-[15px] italic text-ink">
                {alt}
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
}
