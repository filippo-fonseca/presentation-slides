import Plate from "@/components/ui/Plate";

const items = [
  {
    key: "bars",
    plate: {
      src: "/images/cartridge/cartridge_base_oring.jpg",
      alt: "Cartridge base alone, showing the parallel-bar floor that shields the membrane",
      tone: "paper" as const,
      figureNumber: "14A",
      caption: "Protective bars · base",
      meta: "parallel bars over membrane",
    },
    accent: "accent-hub",
    chipColor: "text-hub",
    title: "Protective bars over the membrane",
    body: (
      <>
        Parallel bars span the cartridge face to shield the membrane from the UHMWPE implant strip that sits in the drug hub. Bars give that protection while leaving the flow path <span className="font-semibold text-ink">far less restricted</span> than a porous cover would, so transport through the membrane is not impeded.
      </>
    ),
  },
  {
    key: "tabs",
    plate: {
      src: "/images/cartridge/cartridge_assembly_bottom.jpg",
      alt: "Full membrane cartridge assembly viewed from bottom/side, showing the two tweezer pinch tabs rising from the base",
      tone: "paper" as const,
      figureNumber: "14B",
      caption: "Tweezer tabs · assembled",
      meta: "tabs rise from the base",
    },
    accent: "accent-bacteria",
    chipColor: "text-bacteria",
    title: "Tweezer tabs for clean removal",
    body: (
      <>
        Two pinch tabs sit on the <span className="font-semibold text-ink">base</span>, the innermost component of the cartridge. Gripping there with tweezers lifts the base, membrane, and lid out as one piece, avoiding any contact with the bars and removing the risk of the cartridge getting stuck inside the satellite bore.
      </>
    ),
  },
  {
    key: "context",
    plate: {
      src: "/images/section/section_iso_membranes.jpg",
      alt: "Full DRD-3 section view showing both cartridges installed",
      tone: "graph" as const,
      figureNumber: "14C",
      caption: "In context",
      meta: "full DRD section · cartridges installed",
    },
    accent: "accent-amber",
    chipColor: "text-amber",
    title: "Open · inner vs. outer clearance",
    body: (
      <>
        A small caveat carried into this design: 0.1 mm clearance across the lid-to-base fit looks <span className="italic">probably too tight</span> in SLA. Want to confirm inner-vs-outer tolerance on the cartridge specifically before the next print. Direction is to open the clearance slightly.
      </>
    ),
  },
];

export default function SlideFridayCartridge() {
  return (
    <div className="grid h-full grid-rows-[auto_auto_1fr_auto] gap-4">
      <div>
        <p className="eyebrow text-brand">Design Work</p>
        <h2 className="mt-1 font-display text-[clamp(26px,2.8vw,40px)] leading-[1.08]">
          The cartridge, <span className="text-brand">protected and removable</span>.
        </h2>
      </div>

      <p className="max-w-[88ch] font-serif text-[clamp(14px,1.2vw,17px)] leading-snug text-ink-soft">
        Two details on the membrane cartridge that drove the current geometry. The membrane has to be shielded from the UHMWPE implant strip sitting in the drug hub, but a porous cover would restrict diffusion more than necessary, so the face is parallel bars instead. And once the bars are there, the cartridge needs its own grip for removal that does not load the bars, so two tweezer tabs ride on the base.
      </p>

      {/* 3-col 2-row grid: figures on top row (flex), cards on bottom row.
          All cards in the bottom row share the same height because CSS grid
          stretches cells in a row to equal height by default. */}
      <div className="grid min-h-0 grid-cols-1 gap-x-4 gap-y-3 md:grid-cols-3 md:grid-rows-[1fr_auto]">
        {/* Top row — plates */}
        <Plate
          src={items[0].plate.src}
          alt={items[0].plate.alt}
          sizes="(max-width: 768px) 100vw, 33vw"
          tone={items[0].plate.tone}
          padding="tight"
          figureNumber={items[0].plate.figureNumber}
          caption={items[0].plate.caption}
          meta={items[0].plate.meta}
          className="min-h-[180px] md:col-start-1 md:row-start-1"
        />
        <Plate
          src={items[1].plate.src}
          alt={items[1].plate.alt}
          sizes="(max-width: 768px) 100vw, 33vw"
          tone={items[1].plate.tone}
          padding="tight"
          figureNumber={items[1].plate.figureNumber}
          caption={items[1].plate.caption}
          meta={items[1].plate.meta}
          className="min-h-[180px] md:col-start-2 md:row-start-1"
        />
        <Plate
          src={items[2].plate.src}
          alt={items[2].plate.alt}
          sizes="(max-width: 768px) 100vw, 33vw"
          tone={items[2].plate.tone}
          padding="tight"
          figureNumber={items[2].plate.figureNumber}
          caption={items[2].plate.caption}
          meta={items[2].plate.meta}
          className="min-h-[180px] md:col-start-3 md:row-start-1"
        />
        {/* Bottom row — cards, all equal height because they share a grid row */}
        <div className={`card ${items[0].accent} h-full p-4 md:col-start-1 md:row-start-2`}>
          <p className={`eyebrow mb-1 ${items[0].chipColor}`}>{items[0].title}</p>
          <p className="font-serif text-[13px] leading-snug text-ink-soft">{items[0].body}</p>
        </div>
        <div className={`card ${items[1].accent} h-full p-4 md:col-start-2 md:row-start-2`}>
          <p className={`eyebrow mb-1 ${items[1].chipColor}`}>{items[1].title}</p>
          <p className="font-serif text-[13px] leading-snug text-ink-soft">{items[1].body}</p>
        </div>
        <div className={`card ${items[2].accent} h-full p-4 md:col-start-3 md:row-start-2`}>
          <p className={`eyebrow mb-1 ${items[2].chipColor}`}>{items[2].title}</p>
          <p className="font-serif text-[13px] leading-snug text-ink-soft">{items[2].body}</p>
        </div>
      </div>

      <div className="card-quote px-5 py-3">
        <p className="font-serif text-[clamp(14px,1.2vw,17px)] leading-snug text-ink">
          <span className="font-semibold">Membrane protected, cleanly removable.</span> Two small adds, both deliberately reusing what v2 already showed us works.
        </p>
      </div>
    </div>
  );
}
