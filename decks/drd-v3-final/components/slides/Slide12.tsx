export default function Slide12() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto] gap-6">
      <div>
        <p className="eyebrow text-brand">Design Work</p>
        <h2 className="mt-2 font-display text-[clamp(32px,3.4vw,50px)] leading-tight">
          Materials: <span className="text-brand">rigid where it should be</span>, compliant where it must be.
        </h2>
      </div>

      <div className="grid min-h-0 grid-cols-1 gap-5 md:grid-cols-2">
        <div className="card accent-brand flex flex-col items-center justify-center p-8 text-center">
          <p className="eyebrow mb-3 text-brand">Structure</p>
          <p className="font-display text-[clamp(28px,2.4vw,40px)] leading-tight text-ink">Two resin grades</p>
          <p className="mt-4 font-serif text-[clamp(16px,1.4vw,20px)] leading-snug text-ink-soft">
            Stiff resin for the outer chassis. More flexible grade for the inner cartridge parts, so the clips snap cleanly.
          </p>
        </div>

        <div className="card accent-bacteria flex flex-col items-center justify-center p-8 text-center">
          <p className="eyebrow mb-3 text-bacteria">Seals</p>
          <p className="font-display text-[clamp(28px,2.4vw,40px)] leading-tight text-ink">Silicone O-rings</p>
          <p className="mt-4 font-serif text-[clamp(16px,1.4vw,20px)] leading-snug text-ink-soft">
            Elastomers recover from compression indefinitely. No fatigue cracking.
          </p>
        </div>
      </div>

      <div className="card accent-brand px-5 py-3.5">
        <p className="font-serif text-[clamp(13px,1.1vw,15px)] leading-snug text-ink">
          <span className="eyebrow mr-2 align-middle text-brand">Biocompatibility</span>
          Current parts are for mechanical testing. Biocompatible equivalents are identified and will be ordered once the mechanics are proven.
        </p>
      </div>
    </div>
  );
}
