import Plate from "@/components/ui/Plate";

const chambers = [
  {
    key: "hub",
    label: "Drug hub",
    role: "the joint space",
    accent: "accent-hub",
    chip: "chip-hub",
    body: (
      <>
        Holds the UHMWPE implant strip. Volume tunable <span className="font-semibold">4–20&nbsp;mL</span> (healthy &rarr; infected knee).
        <span className="mt-2 block text-[12px] italic text-ink-muted">Internal volume pending verification.</span>
      </>
    ),
  },
  {
    key: "perfusion",
    label: "Perfusion satellite",
    role: "simulated blood flow",
    accent: "accent-perfusion",
    chip: "chip-perfusion",
    body: <>Continuous fresh-media flow. The validated clearance physics, untouched.</>,
  },
  {
    key: "bacteria",
    label: "Bacteria satellite",
    role: "isolated infection challenge",
    accent: "accent-bacteria",
    chip: "chip-bacteria",
    body: <>Sealed culture compartment, behind its own bacteria-blocking membrane.</>,
  },
] as const;

export default function Slide04() {
  return (
    <div className="grid h-full grid-rows-[auto_auto_1fr] gap-6">
      <div>
        <p className="eyebrow text-brand">Design Work</p>
        <h2 className="mt-2 font-display text-[clamp(34px,3.6vw,52px)] leading-tight">
          Three chambers, two membranes: <span className="text-brand">arranged radially</span>.
        </h2>
      </div>

      {/* Chamber cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {chambers.map((c) => (
          <div key={c.key} className={`card ${c.accent} p-5`}>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
              <span className={`${c.chip} whitespace-nowrap rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em]`}>
                {c.label}
              </span>
              <span className="font-serif text-[12px] italic text-ink-muted">{c.role}</span>
            </div>
            <p className="font-serif text-[15px] leading-snug text-ink-soft">{c.body}</p>
          </div>
        ))}
      </div>

      {/* Two CAD views */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Plate
          src="/images/full/topdown_birdseye.jpg"
          alt="DRD-3 top-down bird's-eye view of the full assembly"
          sizes="(max-width: 768px) 100vw, 50vw"
          tone="graph"
          padding="snug"
          figureNumber="04A"
          caption="Sectioned at middle"
          meta="3 chambers · 2 cartridges"
        />
        <Plate
          src="/images/section/topdown_sectioned.jpg"
          alt="DRD-3 top-down sectioned view showing the three chambers and both membrane cartridges"
          sizes="(max-width: 768px) 100vw, 50vw"
          tone="graph"
          padding="snug"
          figureNumber="04B"
          caption="Bird's-eye view"
          meta="full assembly"
          rotate={180}
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-6">
            <span className="chip-bacteria rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] shadow">bacteria</span>
            <span className="chip-hub rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] shadow">hub</span>
            <span className="chip-perfusion rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] shadow">perfusion</span>
          </div>
        </Plate>
      </div>

    </div>
  );
}
