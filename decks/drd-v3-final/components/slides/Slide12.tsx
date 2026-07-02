export default function Slide12() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto] gap-6">
      <div>
        <p className="eyebrow text-brand">Design Work</p>
        <h2 className="mt-2 font-display text-[clamp(32px,3.4vw,50px)] leading-tight">
          Materials: <span className="text-brand">rigid where it should be</span>, compliant where it must be.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="card accent-brand flex flex-col p-6">
          <p className="eyebrow mb-2 text-brand">Structure</p>
          <p className="font-display text-[clamp(20px,1.7vw,26px)] text-ink">Two resin grades</p>
          <p className="mt-3 font-serif text-[14.5px] leading-snug text-ink-soft">
            Stiff resin for the outer chassis. More flexible grade for the inner cartridge parts, so the clips snap cleanly without breaking.
          </p>
        </div>

        <div className="card accent-bacteria flex flex-col p-6">
          <p className="eyebrow mb-2 text-bacteria">Seals</p>
          <p className="font-display text-[clamp(20px,1.7vw,26px)] text-ink">Silicone O-rings</p>
          <p className="mt-3 font-serif text-[15px] leading-snug text-ink-soft">
            Elastomers recover from compression indefinitely — no fatigue cracking.
          </p>
          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {["medical grade", "compression seal"].map((t) => (
              <span key={t} className="rounded-full border border-bacteria/30 bg-bacteria-soft px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-bacteria">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="card accent-brand px-5 py-3.5">
        <p className="font-serif text-[clamp(13px,1.1vw,15px)] leading-snug text-ink">
          <span className="eyebrow mr-2 align-middle text-brand">Biocompatibility</span>
          Current parts are for mechanical testing. Biocompatible equivalents are already identified and will be ordered once the mechanics are proven.
        </p>
      </div>
    </div>
  );
}
