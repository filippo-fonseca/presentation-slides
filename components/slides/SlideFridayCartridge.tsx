// One more late-Friday update: revised cartridge with protective bars
// back from v2 (Aşık's design) and tweezer pinch tabs on the base.
// Slots between the v2 findings slide and the validation plan.

import Plate from "@/components/ui/Plate";

const items = [
  {
    key: "bars",
    plate: {
      src: "/images/new-cartridge/cartridge_full.jpeg",
      alt: "New cartridge top view showing protective parallel bars across the membrane",
      tone: "paper" as const,
      figureNumber: "14A",
      caption: "Protective bars · top view",
      meta: "back from v2",
    },
    accent: "accent-hub",
    chipColor: "text-hub",
    title: "Change 1 · protective bars (back from v2)",
    body: (
      <>
        Replaces the v3 porous structure with parallel bars from Aşık&apos;s original design. Same job, shielding the membrane from the UHMWPE implant strip, but bars leave flow <span className="font-semibold text-ink">far less restricted</span>. Aşık flagged last week that the porous geometry could hamper diffusion through the membrane; bars give us the same protection without the impedance.
      </>
    ),
  },
  {
    key: "tabs",
    plate: {
      src: "/images/new-cartridge/cartridge_side_view.jpeg",
      alt: "Cartridge side view showing the two tweezer pinch tabs rising from the base",
      tone: "paper" as const,
      figureNumber: "14B",
      caption: "Pinch tabs · side view",
      meta: "one on each side",
    },
    accent: "accent-bacteria",
    chipColor: "text-bacteria",
    title: "Change 2 · tweezer pinch tabs",
    body: (
      <>
        Two pinch tabs sit on the <span className="font-semibold text-ink">base</span> (the innermost component). Gripping there lifts the entire cartridge, base, membrane, and lid out as one, avoiding any damage to the bars and removing the risk of the cartridge getting stuck in the satellite. With tweezers, we no longer need to reach in and grab the bars themselves.
      </>
    ),
  },
  {
    key: "context",
    plate: {
      src: "/images/new-cartridge/new_full_drd_section_view_with_new_cartridge.jpeg",
      alt: "Full DRD-3 section view showing both new cartridges installed",
      tone: "graph" as const,
      figureNumber: "14C",
      caption: "In context",
      meta: "full DRD section · new cartridges",
    },
    accent: "accent-amber",
    chipColor: "text-amber",
    title: "Still open · inner vs. outer clearance",
    body: (
      <>
        Same caveat as the rest of v3: 0.1 mm looks <span className="italic">probably too tight</span> here too, especially between the inner base and the outer lid. Want to investigate inner-vs-outer tolerance on this cartridge specifically before the print goes out. Same direction as the broader clearance call: open it up slightly.
      </>
    ),
  },
];

export default function SlideFridayCartridge() {
  return (
    <div className="grid h-full grid-rows-[auto_auto_1fr_auto] gap-4">
      <div>
        <p className="eyebrow text-brand">Design Work · Late addition</p>
        <h2 className="mt-1 font-display text-[clamp(26px,2.8vw,40px)] leading-[1.08]">
          One more Friday update: <span className="text-brand">revised cartridge</span>.
        </h2>
      </div>

      <p className="max-w-[88ch] font-serif text-[clamp(14px,1.2vw,17px)] leading-snug text-ink-soft">
        I hadn&apos;t shown this until now, since it came in late Friday after two realizations. We still need to shield the membrane from the UHMWPE implant strip sitting in the drug hub, but the v3 porous structure was probably too restrictive for diffusion (per Aşık&apos;s note last week). And I hadn&apos;t given the cartridge a proper grip for clean removal, especially once the protective structure is back in the middle. Two small additions fix both.
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
