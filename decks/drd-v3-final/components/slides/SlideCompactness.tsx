import ExpandableImage from "@/components/ui/ExpandableImage";

type Shot = {
  src: string;
  alt: string;
  figureNumber: string;
  caption: string;
  final?: boolean;
  zoom?: string;
  position?: string;
  fit?: "cover" | "contain";
};

const comparisons: Array<{
  before: Shot;
  after: Shot;
  className?: string;
  height: string;
}> = [
  {
    height: "h-[250px]",
    before: {
      src: "/images/section/section_side_orings.jpg",
      alt: "June 10 device, side section view",
      figureNumber: "C1·a",
      caption: "Side section",
      zoom: "scale-[1.08]",
    },
    after: {
      src: "/images/final/assembly_section_side.jpg",
      alt: "Final device, side section view",
      figureNumber: "C1·b",
      caption: "Side section",
      final: true,
      zoom: "scale-[1.3]",
    },
  },
  {
    height: "h-[250px]",
    before: {
      src: "/images/full/topdown_birdseye.jpg",
      alt: "June 10 device, top-down bird's-eye view",
      figureNumber: "C2·a",
      caption: "Top-down",
      zoom: "scale-[1.24]",
    },
    after: {
      src: "/images/final/assembly_topdown.jpg",
      alt: "Final device, top-down bird's-eye view",
      figureNumber: "C2·b",
      caption: "Top-down",
      final: true,
      zoom: "scale-[1.38]",
    },
  },
  {
    className: "lg:col-span-2",
    height: "h-[285px]",
    before: {
      src: "/images/full/full_assembly_on_legs.jpg",
      alt: "June 10 full device assembly on legs",
      figureNumber: "C3·a",
      caption: "Full device",
      fit: "contain",
    },
    after: {
      src: "/images/final/assembly_full.jpg",
      alt: "Final full device assembly",
      figureNumber: "C3·b",
      caption: "Full device",
      final: true,
      fit: "contain",
    },
  },
];

function Tag({ children, final }: { children: React.ReactNode; final?: boolean }) {
  return (
    <span
      className={
        final
          ? "rounded-full bg-brand-fade px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-brand ring-1 ring-brand-soft"
          : "rounded-full bg-surface/80 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted ring-1 ring-line"
      }
    >
      {children}
    </span>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 60 34" className="h-7 w-12 shrink-0" aria-hidden>
      <line x1="3" y1="17" x2="47" y2="17" stroke="#16767B" strokeWidth="1.6" />
      <polygon points="47,10 59,17 47,24" fill="#16767B" />
    </svg>
  );
}

function ShotPlate({ shot, height }: { shot: Shot; height: string }) {
  return (
    <figure
      className={`${height} relative overflow-hidden rounded-[10px] border shadow-[0_1px_0_rgba(20,26,36,0.02),0_1px_2px_rgba(20,26,36,0.04)] ${
        shot.final ? "border-brand-soft bg-brand-fade ring-2 ring-brand-soft" : "border-line bg-surface-2 opacity-90"
      }`}
    >
      <div className="absolute inset-0 bottom-9 overflow-hidden">
        <ExpandableImage
          src={shot.src}
          alt={shot.alt}
          sizes="(max-width: 1024px) 100vw, 42vw"
          className={`${shot.fit === "contain" ? "object-contain" : "object-cover"} ${
            shot.position ?? "object-center"
          } ${shot.zoom ?? "scale-[1.22]"}`}
          figureNumber={shot.figureNumber}
          caption={shot.caption}
        />
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 flex h-9 items-center justify-center gap-2 border-t border-line bg-surface/88 px-3 backdrop-blur">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
          Fig. {shot.figureNumber}
        </span>
        <span className="text-line-strong">·</span>
        <span className="font-serif text-[13.5px] italic text-ink-soft">{shot.caption}</span>
      </figcaption>
    </figure>
  );
}

function Comparison({
  before,
  after,
  height,
  className = "",
}: {
  before: Shot;
  after: Shot;
  height: string;
  className?: string;
}) {
  return (
    <div className={`grid min-h-0 grid-cols-[1fr_auto_1fr] items-end gap-3 ${className}`}>
      <div className="grid gap-2">
        <Tag>June 10</Tag>
        <ShotPlate shot={before} height={height} />
      </div>
      <div className="pb-[calc(50%_-_14px)]">
        <Arrow />
      </div>
      <div className="grid gap-2">
        <Tag final>July · final</Tag>
        <ShotPlate shot={after} height={height} />
      </div>
    </div>
  );
}

export default function SlideCompactness() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-4">
      <div>
        <p className="eyebrow text-brand">Scale</p>
        <h2 className="mt-1 font-display text-[clamp(28px,3vw,44px)] leading-tight">
          Same function, <span className="text-brand">far less material</span>.
        </h2>
      </div>

      <div className="grid min-h-0 gap-5 lg:grid-cols-2">
        {comparisons.map((comparison) => (
          <Comparison
            key={comparison.before.figureNumber}
            before={comparison.before}
            after={comparison.after}
            height={comparison.height}
            className={comparison.className}
          />
        ))}
      </div>
    </div>
  );
}
