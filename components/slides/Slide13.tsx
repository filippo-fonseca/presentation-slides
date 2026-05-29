export default function Slide13() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-6">
      <div>
        <p className="eyebrow text-brand">Validation</p>
        <h2 className="mt-2 font-display text-[clamp(30px,3.2vw,48px)] leading-tight">
          One open item I'm verifying: <span className="text-brand italic">internal chamber volume</span>.
        </h2>
      </div>

      <div className="grid grid-cols-12 items-center gap-8">
        <div className="col-span-12 flex flex-col gap-5 md:col-span-7">
          <p className="font-serif text-[clamp(15px,1.3vw,18px)] leading-snug text-ink-soft">
            The architecture targets a tunable <span className="font-semibold text-ink">4–20 mL</span> drug-hub volume to span healthy-to-infected knee synovial fluid. The exact internal volume of the current CAD is <span className="font-semibold text-amber">pending verification</span>. This is my next immediate measurement before sign-off.
          </p>

          <div className="card accent-brand p-5">
            <p className="eyebrow mb-1 text-brand">Why it matters</p>
            <p className="font-serif text-[15.5px] leading-snug text-ink-soft">
              Half-life and clearance kinetics scale with chamber volume, so matching/tuning volume is what keeps DRD-3 results comparable to the published baseline.
            </p>
          </div>

          <div className="card accent-brand p-5">
            <p className="eyebrow mb-1 text-brand">Plan</p>
            <p className="font-serif text-[15.5px] leading-snug text-ink-soft">
              Extract the as-modeled fluid volume from CAD, confirm it lands in 4–20 mL, and tune the hub depth (the design is built to allow this) if needed.
            </p>
          </div>
        </div>

        {/* Visual: a 4-20 mL range strip */}
        <div className="col-span-12 md:col-span-5">
          <div className="card p-5">
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

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-amber/30 bg-amber-soft px-3 py-2">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-amber">Current</p>
                <p className="mt-1 font-serif text-[15px] italic text-amber">pending verification</p>
              </div>
              <div className="rounded-lg border border-line bg-surface-2 px-3 py-2">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Tunable via</p>
                <p className="mt-1 font-serif text-[15px] text-ink-soft">hub depth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
