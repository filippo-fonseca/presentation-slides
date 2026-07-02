import ExpandableImage from "@/components/ui/ExpandableImage";

const tenets = [
  { title: "Free-standing.", body: "" },
  { title: "Minimal part count.", body: "" },
  { title: "Repeatable assembly.", body: "" },
  { title: "Fits refined across three versions.", body: "" },
];

function Figure({
  src,
  alt,
  figureNumber,
  caption,
  meta,
  zoom = "scale-100",
}: {
  src: string;
  alt: string;
  figureNumber: string;
  caption: string;
  meta: string;
  zoom?: string;
}) {
  return (
    <figure className="relative flex min-h-0 flex-col overflow-hidden rounded-[10px] border border-brand-soft bg-brand-fade shadow-sm ring-2 ring-brand-soft">
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <ExpandableImage
          src={src}
          alt={alt}
          sizes="(max-width: 768px) 100vw, 35vw"
          className={`object-contain p-2 ${zoom}`}
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

export default function Slide10() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-6">
      <div>
        <p className="eyebrow text-brand">Design Work</p>
        <h2 className="mt-2 font-display text-[clamp(30px,3.2vw,46px)] leading-tight">
          Designed to live on the bench: <span className="text-brand">standalone, clean, easy to mount</span>.
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 grid grid-cols-2 gap-4 md:col-span-7">
          {tenets.map((t, i) => (
            <div key={i} className="card accent-brand flex items-center justify-center p-6 text-center">
              <p className="font-serif text-[clamp(18px,1.6vw,26px)] font-semibold leading-snug text-ink">{t.title}</p>
            </div>
          ))}
        </div>

        <div className="col-span-12 grid min-h-0 grid-rows-2 gap-4 md:col-span-5">
          <Figure
            src="/images/final/assembly_full.jpg"
            alt="DRD-3 final assembly, free-standing on the bottom C-ring's integral legs"
            figureNumber="10A"
            caption="Stands on the bench"
            meta="full device · legs from bottom C-ring"
            zoom="scale-[1.06]"
          />
          <Figure
            src="/images/final/exploded.png"
            alt="Exploded chassis assembly showing the two satellites separated from the central drug hub"
            figureNumber="10B"
            caption="Exploded chassis"
            meta="satellites · hub · separated"
            zoom="scale-[1.04]"
          />
        </div>
      </div>
    </div>
  );
}
