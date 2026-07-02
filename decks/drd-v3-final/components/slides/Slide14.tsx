const phases = [
  {
    label: "Phase 0",
    title: "Watertightness test",
    body: "Pressurize with dye. Confirm no leaks. Before July 12.",
    accent: "accent-brand",
    chip: "chip-hub",
  },
  {
    label: "Phase 1",
    title: "Reproduce published results",
    body: "Confirm the DRD-3 matches the published device's drug-transport results.",
    accent: "accent-perfusion",
    chip: "chip-perfusion",
  },
  {
    label: "Phase 2",
    title: "Turn on the infection",
    body: "Introduce S. aureus. Confirm zero bacteria cross to the drug side. Fall, when I return.",
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

      <div className="grid min-h-0 grid-cols-3 gap-5">
        {phases.map((p) => (
          <div key={p.label} className={`card ${p.accent} flex flex-col items-center justify-center p-8 text-center`}>
            <span className={`${p.chip} mb-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]`}>
              {p.label}
            </span>
            <p className="font-display text-[clamp(22px,2vw,32px)] leading-snug text-ink">{p.title}</p>
            <p className="mt-4 font-serif text-[clamp(15px,1.3vw,18px)] leading-snug text-ink-soft">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="card accent-brand grid grid-cols-1 items-center gap-5 px-5 py-4 md:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow mb-1 text-brand">Chamber volume · verified</p>
          <p className="font-serif text-[14px] leading-snug text-ink-soft">
            Hub volume confirmed inside the target window for knee joint fluid. Hub depth stays tunable.
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
