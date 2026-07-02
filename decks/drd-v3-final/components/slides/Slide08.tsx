import ExpandableImage from "@/components/ui/ExpandableImage";

type FigureProps = {
  src: string;
  alt: string;
  figureNumber: string;
  caption: string;
  meta: string;
  className: string;
  tone?: "paper" | "brand";
  zoom?: string;
};

function Figure({
  src,
  alt,
  figureNumber,
  caption,
  meta,
  className,
  tone = "paper",
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
          sizes="(max-width: 768px) 100vw, 52vw"
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

export default function Slide08() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-5">
      <div>
        <p className="eyebrow text-brand">Design Work</p>
        <h2 className="mt-1 font-display text-[clamp(30px,3.2vw,46px)] leading-tight">
          The clamp is a <span className="text-brand">wrapper, not a screw rig</span>.
        </h2>
      </div>

      <div className="grid min-h-0 grid-cols-12 gap-5">
        <div className="col-span-12 flex flex-col gap-4 md:col-span-5">
          <p className="font-serif text-[clamp(14.5px,1.2vw,17px)] leading-snug text-ink-soft">
            Each satellite is held to the drug hub by a pair of <span className="font-semibold text-ink">C-shaped wrapper rings</span> that meet in the middle of the joint. The two halves close around the satellite–hub interface and need only <span className="font-semibold text-ink">one screw per side</span> to draw them together. Two screws per satellite, four for the whole device.
          </p>

          <div className="card accent-brand p-4">
            <p className="eyebrow mb-1 text-brand">Why a wrapper</p>
            <p className="font-serif text-[14.5px] leading-snug text-ink-soft">
              The C-ring&apos;s inner profile is a U-channel that mirrors the U-shape created when the satellite meets the hub. Closing the wrapper pulls the joint inward radially, so the contact pressure is uniform around the full circumference instead of concentrated at four bolt points.
            </p>
          </div>

          <div className="card-quote p-4">
            <p className="eyebrow mb-1 text-brand">What this replaces</p>
            <p className="font-serif text-[14.5px] leading-snug italic text-ink">
              Earlier iterations clamped each satellite with four flange-mounted screws. That seated the parts, but the radial pressure was point-loaded at the bolt circle, not continuous. The wrapper trades four small bolts for one continuous hoop and lets the geometry do the sealing.
            </p>
          </div>
        </div>

        <div className="col-span-12 grid min-h-0 grid-rows-[1.18fr_1fr] gap-4 md:col-span-7">
          <Figure
            src="/images/full/full_assembly_clamped.jpg"
            alt="Full DRD-3 assembly, front view, both C-ring wrappers closed around the satellites with hex closures visible on top"
            figureNumber="08B"
            caption="Wrappers closed, in context"
            meta="front view · one screw per side"
            tone="brand"
            className="h-full"
            zoom="scale-[1.04]"
          />
          <Figure
            src="/images/cring/cring_iso.png"
            alt="Isometric view of one C-shaped wrapper ring with internal U-channel visible"
            figureNumber="08A"
            caption="The C-ring wrapper, isometric"
            meta="one half · two per satellite"
            className="h-full"
            zoom="scale-[1.08]"
          />
        </div>
      </div>
    </div>
  );
}
