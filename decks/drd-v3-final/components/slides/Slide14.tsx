const phases = [
  {
    label: "Phase 0",
    title: "Watertightness test",
    body: "Dye perfusion at 64 mL/hr for 24 h; confirm the O-ring strategy holds. This runs soon, before I leave on July 12.",
    threshold: "Threshold: < 2% volume loss / 24 h",
    accent: "accent-brand",
    chip: "chip-hub",
  },
  {
    label: "Phase 1",
    title: "Reproduce the published kinetics",
    body: "Sweep flow rate (2–64 mL/hr), temperature (RT vs 37 °C), and membrane thickness; show DRD-3 reproduces the published device's half-life trends.",
    threshold: "Validate against the known baseline before claiming anything new.",
    accent: "accent-perfusion",
    chip: "chip-perfusion",
  },
  {
    label: "Phase 2",
    title: "Turn on the infection",
    body: "Introduce S. aureus in the bacteria satellite; CFU-sample over 24 h; confirm zero bacterial migration to the perfusion side. This happens in the fall, when I return.",
    threshold: "Proves the isolation / measurement-integrity claim.",
    accent: "accent-bacteria",
    chip: "chip-bacteria",
  },
];

export default function Slide14() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto] gap-6">
      <div>
        <p className="eyebrow text-brand">Validation</p>
        <h2 className="mt-2 font-display text-[clamp(30px,3.2vw,48px)] leading-tight">
          How we prove it: <span className="text-brand">match the published device first, then turn on the bacteria</span>.
        </h2>
      </div>

      {/* Staircase */}
      <div className="grid grid-cols-3 gap-5">
        {phases.map((p, i) => (
          <div
            key={p.label}
            className={`card ${p.accent} flex flex-col p-5`}
            style={{ marginTop: `${i * 24}px` }}
          >
            <div className="mb-3 flex items-center gap-2">
              <span className={`${p.chip} rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em]`}>
                {p.label}
              </span>
              <span className="font-mono text-[11px] tabular-nums text-ink-muted">0{i}</span>
            </div>
            <p className="font-display text-[clamp(18px,1.5vw,24px)] leading-snug text-ink">{p.title}</p>
            <p className="mt-3 font-serif text-[14.5px] leading-snug text-ink-soft">{p.body}</p>
            <p className="mt-auto pt-4 font-serif text-[13px] italic text-ink-muted">{p.threshold}</p>
          </div>
        ))}
      </div>

      <div className="card accent-brand grid grid-cols-1 items-center gap-5 px-5 py-4 md:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow mb-1 text-brand">Chamber volume · verified</p>
          <p className="font-serif text-[14px] leading-snug text-ink-soft">
            An earlier open item is now closed: the drug-hub volume was pulled from CAD and confirmed to land inside the <span className="font-semibold text-ink">4&ndash;20&nbsp;mL</span> window spanning healthy-to-infected knee synovial fluid, with hub depth left tunable to move within it.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-3 text-brand">Target window</p>
          <div className="relative mb-3 h-3 w-full rounded-full bg-surface-2">
            <div className="absolute inset-y-0 left-[5%] right-[15%] rounded-full bg-brand" />
            <div className="absolute inset-y-0 left-[5%] w-[2px] bg-ink" />
            <div className="absolute inset-y-0 right-[15%] w-[2px] bg-ink" />
          </div>
          <div className="flex justify-between font-mono text-[11px] text-ink-muted">
            <span>0 mL</span>
            <span className="font-semibold text-brand">4 mL · healthy</span>
            <span className="font-semibold text-brand">20 mL · infected</span>
            <span>30 mL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
