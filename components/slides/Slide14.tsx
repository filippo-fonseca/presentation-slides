const phases = [
  {
    label: "Phase 0",
    title: "Leak test",
    body: "Dye perfusion at 64 mL/hr for 24 h; confirm the O-ring strategy holds. Runs alongside leak/fit testing already planned with Smriti.",
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
    body: "Introduce S. aureus in the bacteria satellite; CFU-sample over 24 h; confirm zero bacterial migration to the perfusion side.",
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

      <div className="card-quote px-5 py-3">
        <p className="font-serif text-[15px] text-ink">
          <span className="font-semibold">Credibility first:</span> the device has to reproduce what the published paper already proved before it earns the right to show something new.
        </p>
      </div>
    </div>
  );
}
