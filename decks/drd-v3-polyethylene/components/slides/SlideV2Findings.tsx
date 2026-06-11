const cards = [
  {
    eyebrow: "Approach",
    chip: "chip-hub",
    accent: "accent-hub",
    title: "Filleted edges, deliberate clearances",
    body: (
      <>
        Every mating edge in the CAD is now properly filleted, and clearances were set by what the interface actually needs, not a single global number. The result is parts that seat and release without coaxing.
      </>
    ),
  },
  {
    eyebrow: "Material strategy",
    chip: "chip-bacteria",
    accent: "accent-bacteria",
    title: "Elastic materials for elastic jobs",
    body: (
      <>
        Where two parts need to press or transition together, the compliance lives in a <span className="font-semibold text-ink">proper elastomer</span> at the interface, not in a thin printed feature trying to flex. The rigid bodies stay rigid; the seal does the seal&apos;s job.
      </>
    ),
  },
  {
    eyebrow: "Architecture",
    chip: "chip-perfusion",
    accent: "accent-perfusion",
    title: "Press-fit dependencies designed out",
    body: (
      <>
        Where possible, press-fit interfaces are removed from the load path entirely. The new C-ring wrapper is the clearest example: the joint is <span className="font-semibold text-ink">latched by screws</span> closing two halves around the satellite-hub interface, not held together by the friction of one part pushed into another.
      </>
    ),
  },
  {
    eyebrow: "What this gives us",
    chip: "chip-brand",
    accent: "accent-brand",
    title: "Repeatable assembly, recoverable parts",
    body: (
      <>
        Each interface has a defined job and a defined retainer: a fillet to seat against, an elastomer to seal, or a screw to clamp. Parts come apart for service without prying, and assembly behaves the same way every time.
      </>
    ),
  },
];

export default function SlideV2Findings() {
  return (
    <div className="grid h-full grid-rows-[auto_auto_1fr_auto] gap-5">
      <div>
        <p className="eyebrow text-brand">Validation · Iteration</p>
        <h2 className="mt-2 font-display text-[clamp(28px,3vw,42px)] leading-tight">
          Designing the press-fits out: <span className="text-brand">fillets, elastomers, and a latched wrapper</span>.
        </h2>
      </div>

      <p className="max-w-[84ch] font-serif text-[clamp(15px,1.25vw,18px)] leading-snug text-ink-soft">
        Earlier iterations leaned on tight press fits between rigid SLA parts to hold the device together, which made assembly inconsistent and disassembly painful. The current CAD takes the opposite approach: greater care on filleted edges and deliberate clearances, elastic materials wherever a press or transition fit is genuinely required, and architectural changes (notably the C-ring wrapper) that latch joints with screws so press fits are no longer carrying the load.
      </p>

      {/* Four approach cards */}
      <div className="grid min-h-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <div key={`${c.eyebrow}-${i}`} className={`card ${c.accent} flex flex-col p-4`}>
            <div className="mb-2.5">
              <span className={`${c.chip} rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]`}>
                {c.eyebrow}
              </span>
            </div>
            <p className="font-display text-[clamp(15px,1.2vw,19px)] leading-snug text-ink">{c.title}</p>
            <p className="mt-2.5 font-serif text-[13.5px] leading-snug text-ink-soft">{c.body}</p>
          </div>
        ))}
      </div>

      {/* Closing pull line */}
      <div className="card-quote px-5 py-3">
        <p className="font-serif text-[clamp(14.5px,1.2vw,17px)] leading-snug text-ink">
          <span className="font-semibold">Rigid where it should be, compliant where it must be, and clamped where it matters.</span> No interface is asked to do a job its geometry can&apos;t back up.
        </p>
      </div>
    </div>
  );
}
