import ExpandableImage from "@/components/ui/ExpandableImage";

type FigureProps = {
  src: string;
  alt: string;
  figureNumber: string;
  caption: string;
  meta: string;
  className?: string;
  tone?: "brand" | "graph";
  zoom?: string;
};

function Figure({
  src,
  alt,
  figureNumber,
  caption,
  meta,
  className = "",
  tone = "graph",
  zoom = "scale-100",
}: FigureProps) {
  const palette =
    tone === "brand"
      ? "border-brand-soft bg-brand-fade ring-2 ring-brand-soft"
      : "border-line bg-surface-2";

  return (
    <figure className={`relative flex min-h-0 flex-col overflow-hidden rounded-[10px] border shadow-sm ${palette} ${className}`}>
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <ExpandableImage
          src={src}
          alt={alt}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-contain p-2 ${zoom}`}
          figureNumber={figureNumber}
          caption={caption}
          meta={meta}
        />
      </div>
      <figcaption className="flex min-h-10 shrink-0 flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-line bg-surface/88 px-3 py-2 backdrop-blur">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand">
          Fig. {figureNumber}
        </span>
        <span className="text-line-strong">·</span>
        <span className="font-serif text-[13px] italic text-ink-soft">{caption}</span>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-muted">{meta}</span>
      </figcaption>
    </figure>
  );
}

export default function SlideLatching() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-5">
      <div>
        <p className="eyebrow text-brand">Design Evolution</p>
        <h2 className="mt-1 font-display text-[clamp(30px,3.2vw,46px)] leading-tight">
          A real latch, <span className="text-brand">not just screws</span>.
        </h2>
      </div>

      <div className="grid min-h-0 grid-cols-12 gap-5">
        <div className="col-span-12 flex flex-col gap-4 md:col-span-4">
          <div className="card accent-brand p-5">
            <p className="eyebrow mb-1 text-brand">Latch, then screws</p>
            <p className="font-serif text-[15px] leading-snug text-ink-soft">
              The latch closes. Screws are backup. Belt and suspenders.
            </p>
          </div>

          <div className="card-quote p-5">
            <p className="eyebrow mb-1 text-brand">One closure, three seals</p>
            <p className="font-serif text-[15px] leading-snug italic text-ink">
              One motion seals all three O-rings at once.
            </p>
          </div>
        </div>

        <div className="col-span-12 grid min-h-0 grid-rows-[1.15fr_1fr] gap-4 md:col-span-8">
          <Figure
            src="/images/final/latch_front.jpg"
            alt="Front view: two C-rings forming a circle around the hub, a screw on top and a latch on each side"
            figureNumber="L1A"
            caption="Latch, front view"
            meta="screw on top · latch each side"
            tone="brand"
            zoom="scale-[1.04]"
          />
          <div className="grid min-h-0 grid-cols-2 gap-4">
            <Figure
              src="/images/final/latch_closeup.jpg"
              alt="Zoomed detail of the C-ring latch lug engaging"
              figureNumber="L1B"
              caption="Latch detail"
              meta="lug close-up"
              zoom="scale-[1.08]"
            />
            <Figure
              src="/images/final/cring_meeting.jpg"
              alt="Extreme close-up of the inverse-U meeting point and its sealing lip between the two wrappers"
              figureNumber="L1C"
              caption="Inverse-U meeting point"
              meta="sealing lip"
              zoom="scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
