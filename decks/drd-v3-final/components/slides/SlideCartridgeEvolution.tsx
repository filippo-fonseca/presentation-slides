import Plate from "@/components/ui/Plate";
import Compare from "@/components/ui/Compare";

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

export default function SlideCartridgeEvolution() {
  return (
    <div className="grid h-full grid-rows-[auto_auto_1fr] gap-6">
      <div>
        <p className="eyebrow text-brand">The central change</p>
        <h2 className="mt-2 font-display text-[clamp(30px,3.2vw,48px)] leading-tight">
          The membrane cartridge, <span className="text-brand">rebuilt</span>.
        </h2>
      </div>

      {/* Hero comparison: assembled old vs assembled new */}
      <Compare
        height="h-[210px]"
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
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.05fr]">
        <div className="flex flex-col gap-3">
          <div className="card accent-brand p-4">
            <p className="font-serif text-[15px] font-semibold text-ink">
              What we kept.
            </p>
            <p className="mt-1 font-serif text-[14px] leading-snug text-ink-soft">
              Two things genuinely worked on June 10, and the lessons carried over: the two-latch closure was solid, and the tweezer pinch-tabs were a real usability win, much easier to seat and remove by hand.
            </p>
          </div>
          <div className="card accent-bacteria p-4">
            <p className="font-serif text-[15px] font-semibold text-ink">
              What failed on the bench.
            </p>
            <p className="mt-1 font-serif text-[14px] leading-snug text-ink-soft">
              The cartridge sealed everywhere except right at the locking tooth: a peculiar, highly localized leak precisely at the tooth interface, even though the rest of the seal held.
            </p>
          </div>
          <div className="card accent-hub p-4">
            <p className="font-serif text-[15px] font-semibold text-ink">
              The fix.
            </p>
            <p className="mt-1 font-serif text-[14px] leading-snug text-ink-soft">
              The final cartridge drops the sealing tooth entirely. It is retained instead by six tweezer-holders spaced around the rim that double as security latches: the usability win of the tweezer grip, now doing the retention job the tooth used to do. It is also scaled down and uses less material.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {newParts.map((p) => (
            <Plate
              key={p.figureNumber}
              src={p.src}
              alt={p.alt}
              sizes="(max-width: 768px) 33vw, 18vw"
              tone="graph"
              padding="snug"
              figureNumber={p.figureNumber}
              caption={p.caption}
              meta={p.meta}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
