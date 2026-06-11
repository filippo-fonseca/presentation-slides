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
          <p className="eyebrow mb-2 text-brand">Structure · learning across iterations</p>
          <p className="font-display text-[clamp(20px,1.7vw,26px)] text-ink">SLA resins, two grades</p>
          <p className="mt-3 font-serif text-[14.5px] leading-snug text-ink-soft">
            Chassis, hub, and satellites carry over the Accura-60-class resin we&apos;ve already characterized: stiff, dimensionally precise, the chassis we know. For the inner parts (cartridge lid, base, bodies) v3 moves to <span className="font-semibold text-ink">Somos 9120</span> for higher elongation-at-break and lower tensile strength, giving a more compliant snap on the locking tooth.
          </p>
          <p className="mt-2 font-serif text-[13px] italic leading-snug text-ink-muted">
            Somos 9120 is a real step up from Accura 60, but it&apos;s still on the rigid side. Worth scouting an even more elastic resin for the inner components in a future iteration.
          </p>
          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {["Accura 60 · chassis", "Somos 9120 · inner", "higher EAB", "lower tensile"].map((t) => (
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

    </div>
  );
}
