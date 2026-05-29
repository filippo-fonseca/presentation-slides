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
          <p className="font-display text-[clamp(20px,1.7vw,26px)] text-ink">PC-like SLA resin</p>
          <p className="mt-3 font-serif text-[15px] leading-snug text-ink-soft">
            All chassis, hub, satellites, and cartridge bodies. Precise geometry retention, carries over our Accura-60-class chassis material. Same material we've already characterized.
          </p>
          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {["hub", "satellites", "cartridges", "flanges"].map((t) => (
              <span key={t} className="rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="card accent-bacteria flex flex-col p-6">
          <p className="eyebrow mb-2 text-bacteria">Seals</p>
          <p className="font-display text-[clamp(20px,1.7vw,26px)] text-ink">Medical-grade silicone / EPDM O-rings</p>
          <p className="mt-3 font-serif text-[15px] leading-snug text-ink-soft">
            The actual sealing element. Elastomers recover from compression indefinitely without the fatigue cracking that thin printed features suffer.
          </p>
          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {["2 mm cord", "1.5 mm gland", "25% compression", "USP Class VI"].map((t) => (
              <span key={t} className="rounded-full border border-bacteria/30 bg-bacteria-soft px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-bacteria">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="card accent-amber p-5">
        <p className="eyebrow mb-1 text-amber">Caveat · raised proactively</p>
        <p className="font-serif text-[15.5px] leading-snug text-ink-soft">
          Before any live-bacteria run, SLA parts must be fully <span className="font-semibold text-ink">post-cured and washed</span>. Uncured resin monomer is mildly antimicrobial and would otherwise bias a kill curve. Known risk, <span className="italic">managed by process</span>.
        </p>
      </div>
    </div>
  );
}
