import Compare from "@/components/ui/Compare";
import ExpandableImage from "@/components/ui/ExpandableImage";

// The core evolution slide: the June 10 cartridge sealed everywhere except at
// the locking tooth, so the final cartridge drops the tooth and is retained by
// six tweezer-holders that double as security latches.

const newParts = [
  {
    src: "/images/final/cartridge_base.jpg",
    alt: "Final cartridge base with six tweezer-holder tabs standing up around the rim",
    figureNumber: "E1·a",
    caption: "New base",
    meta: "six tabs, up",
  },
  {
    src: "/images/final/cartridge_lid.jpg",
    alt: "Final cartridge lid with a castellated rim",
    figureNumber: "E1·b",
    caption: "New lid",
    meta: "castellated rim",
  },
  {
    src: "/images/final/cartridge_full.jpg",
    alt: "Final cartridge full assembly seen from below",
    figureNumber: "E1·c",
    caption: "New assembly",
    meta: "from below",
  },
];

function PartPlate({
  src,
  alt,
  figureNumber,
  caption,
  meta,
  className = "",
}: {
  src: string;
  alt: string;
  figureNumber: string;
  caption: string;
  meta: string;
  className?: string;
}) {
  return (
    <figure className={`relative min-h-0 overflow-hidden rounded-[10px] border border-brand-soft bg-brand-fade shadow-sm ${className}`}>
      <div className="relative h-full min-h-[185px] overflow-hidden">
        <ExpandableImage
          src={src}
          alt={alt}
          sizes="(max-width: 1024px) 100vw, 28vw"
          className="object-contain p-2"
          figureNumber={figureNumber}
          caption={caption}
          meta={meta}
        />
      </div>
      <figcaption className="flex min-h-10 shrink-0 flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-brand-soft bg-surface/88 px-3 py-2 backdrop-blur">
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

export default function SlideCartridgeEvolution() {
  return (
    <div className="grid h-full grid-rows-[auto_auto_1fr] gap-5">
      <div>
        <p className="eyebrow text-brand">The central change</p>
        <h2 className="mt-2 font-display text-[clamp(30px,3.2vw,48px)] leading-tight">
          The membrane cartridge, <span className="text-brand">rebuilt</span>.
        </h2>
      </div>

      {/* Hero comparison: assembled old vs assembled new */}
      <Compare
        height="h-[245px]"
        before={{
          src: "/images/cartridge/cartridge_full_side.jpg",
          alt: "June 10 cartridge, assembled, top-from-side, with the sealing tooth",
          figureNumber: "E0·a",
          caption: "June 10 cartridge",
          meta: "sealing tooth",
        }}
        after={{
          src: "/images/final/cartridge_top_side.jpg",
          alt: "Final cartridge, assembled, six tweezer-latches around the rim with membrane captured",
          figureNumber: "E0·b",
          caption: "Final cartridge",
          meta: "six tweezer-latches",
        }}
      />

      {/* The finding, the fix, and the new parts */}
      <div className="grid min-h-0 grid-cols-1 gap-5 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="flex flex-col gap-3">
          <div className="card accent-brand p-4">
            <p className="font-serif text-[15px] font-semibold text-ink">What we kept</p>
            <p className="mt-1 font-serif text-[14px] leading-snug text-ink-soft">Clip closure. Tab grips for easy seating and removal.</p>
          </div>
          <div className="card accent-bacteria p-4">
            <p className="font-serif text-[15px] font-semibold text-ink">What failed</p>
            <p className="mt-1 font-serif text-[14px] leading-snug text-ink-soft">Leaked at the locking point. Everywhere else held.</p>
          </div>
          <div className="card accent-hub p-4">
            <p className="font-serif text-[15px] font-semibold text-ink">The fix</p>
            <p className="mt-1 font-serif text-[14px] leading-snug text-ink-soft">Dropped the locking point. Six clips hold the cartridge. Smaller and lighter.</p>
          </div>
        </div>

        <div className="grid min-h-0 grid-cols-2 gap-3">
          <PartPlate {...newParts[0]} className="h-[190px]" />
          <PartPlate {...newParts[1]} className="h-[190px]" />
          <PartPlate {...newParts[2]} className="col-span-2 h-[230px]" />
        </div>
      </div>
    </div>
  );
}
