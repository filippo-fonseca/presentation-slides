export default function Slide03() {
  return (
    <div className="grid h-full grid-rows-[auto_auto_1fr_auto] gap-5">
      <div>
        <p className="eyebrow text-brand">Motivation</p>
        <h2 className="mt-2 font-display text-[clamp(34px,3.6vw,52px)] leading-tight">
          Why a <span className="text-brand">third chamber</span>?
        </h2>
      </div>

      {/* Verbatim quote — paper-style block */}
      <figure className="relative rounded-[12px] border border-line bg-surface px-7 py-6 shadow-[0_1px_0_rgba(20,26,36,0.02),0_1px_2px_rgba(20,26,36,0.04)]">
        <span className="absolute -top-3 left-5 select-none bg-surface px-2 font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
          Verbatim · Aşık et al. (2026), §4 Discussion
        </span>
        <span className="absolute -left-0 top-6 h-[calc(100%-3rem)] w-[3px] bg-brand" aria-hidden />
        <blockquote className="font-serif text-[clamp(15px,1.35vw,19px)] leading-[1.55] text-ink">
          <span className="font-display text-[40px] leading-none text-brand/35 align-[-0.35em] mr-1">&ldquo;</span>
          Finally, pathological features of diseased joints — including inflammation-induced vascular permeability, altered pH, and <span className="bg-bacteria-soft px-1 font-semibold text-bacteria">biofilm formation</span> — are not explicitly incorporated. Accordingly, this platform should be viewed as a <span className="italic">mechanistic and comparative tool</span> for evaluating joint-relevant transport behavior rather than a complete physiological replica of healthy or pathological human joints.
        </blockquote>
        <figcaption className="mt-4 flex items-center justify-between border-t border-line pt-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-muted">
          <span>Asik MD, Reyhanli A, Serafim MF, Inverardi N, Muratoglu OK, Oral E.</span>
          <span>Int. J. Pharm. 695:126738 · 2026</span>
        </figcaption>
      </figure>

      {/* Three-card analysis */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4">
          <div className="card accent-bacteria h-full p-5">
            <p className="eyebrow mb-2 text-bacteria">What the paper we published says</p>
            <p className="font-serif text-[15px] leading-snug text-ink-soft">
              Biofilm formation, altered pH, and inflammatory vascular permeability are <span className="font-semibold text-ink">explicitly out of scope</span>. The DRD models <span className="italic">fluid-phase transport</span>, not pathology.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="card accent-brand h-full p-5">
            <p className="eyebrow mb-2 text-brand">What it implies</p>
            <p className="font-serif text-[15px] leading-snug text-ink-soft">
              Efficacy against infection can only be <span className="font-semibold text-ink">inferred</span> from drug concentration vs. MIC. No live bacteria, no kill curve, no <span className="italic">in&nbsp;situ</span> evidence that the dose actually works.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="card accent-hub h-full p-5">
            <p className="eyebrow mb-2 text-hub">What the DRD-3 adds</p>
            <p className="font-serif text-[15px] leading-snug text-ink-soft">
              An <span className="font-semibold text-ink">isolated bacterial compartment</span>: closes the inferred gap by challenging infection directly, while the validated transport measurement stays untouched.
            </p>
          </div>
        </div>
      </div>

      {/* Measurement-integrity callout */}
      <div className="card accent-bacteria flex items-center gap-5 p-4">
        <span className="chip-bacteria shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]">
          Measurement integrity
        </span>
        <p className="font-serif text-[14.5px] leading-snug text-ink-soft">
          Bacteria cannot touch the main transport membrane. Biofilm on the transport membrane would change its permeability mid-experiment and corrupt the very kinetics the device exists to measure. <span className="font-semibold text-bacteria">Isolation isn&apos;t a nice-to-have; it protects the measurement.</span>
        </p>
      </div>
    </div>
  );
}
