export default function Slide03() {
  return (
    <div className="grid h-full grid-rows-[auto_auto_1fr] gap-5">
      <div>
        <p className="eyebrow text-brand">Motivation</p>
        <h2 className="mt-2 font-display text-[clamp(34px,3.6vw,52px)] leading-tight">
          Why a <span className="text-brand">third chamber</span>?
        </h2>
      </div>

      {/* Verbatim quote */}
      <figure className="relative rounded-[12px] border border-line bg-surface px-7 py-6 shadow-[0_1px_0_rgba(20,26,36,0.02),0_1px_2px_rgba(20,26,36,0.04)]">
        <span className="absolute -top-3 left-5 select-none bg-surface px-2 font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
          Verbatim · Aşık et al. (2026), §4 Discussion
        </span>
        <span className="absolute -left-0 top-6 h-[calc(100%-3rem)] w-[3px] bg-brand" aria-hidden />
        <blockquote className="font-serif text-[clamp(15px,1.35vw,19px)] leading-[1.55] text-ink">
          <span className="font-display text-[40px] leading-none text-brand/35 align-[-0.35em] mr-1">&ldquo;</span>
          Finally, pathological features of diseased joints — including inflammation-induced vascular permeability, altered pH, and <span className="bg-bacteria-soft px-1 font-semibold text-bacteria">biofilm formation</span> — are not explicitly incorporated. Accordingly, this platform should be viewed as a <span className="italic">mechanistic and comparative tool</span> for evaluating joint-relevant transport behavior rather than a complete physiological replica of healthy or pathological human joints.
        </blockquote>
        <figcaption className="mt-4 border-t border-line pt-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-muted">
          Asik MD et al. · Int. J. Pharm. 695:126738 · 2026
        </figcaption>
      </figure>

      {/* Three-card answer */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4">
          <div className="card accent-bacteria flex h-full flex-col items-center justify-center gap-2 p-5 text-center">
            <p className="eyebrow text-bacteria">The problem</p>
            <p className="font-serif text-[clamp(15px,1.35vw,20px)] font-semibold text-ink">The published DRD has no bacteria.</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="card accent-brand flex h-full flex-col items-center justify-center gap-2 p-5 text-center">
            <p className="eyebrow text-brand">Why that matters</p>
            <p className="font-serif text-[clamp(15px,1.35vw,20px)] font-semibold text-ink">No infection challenge means we can&apos;t evaluate antibiotic effectiveness in the joint.</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="card accent-hub flex h-full flex-col items-center justify-center gap-2 p-5 text-center">
            <p className="eyebrow text-hub">The solution</p>
            <p className="font-serif text-[clamp(15px,1.35vw,20px)] font-semibold text-ink">We&apos;re adding an isolated bacteria chamber.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
