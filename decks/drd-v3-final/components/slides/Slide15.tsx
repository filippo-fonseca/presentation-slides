import Plate from "@/components/ui/Plate";

const immediate = [
  "Parts ordered. Arrive next.",
  "Watertight testing before July 12.",
  "Return in the fall for the bacteria challenge.",
];

const input = [
  "Anything to flag before watertight testing.",
  "What you want to see from the fall bacteria work.",
];

export default function Slide15() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-6">
      <div>
        <p className="eyebrow text-brand">Next Steps</p>
        <h2 className="mt-2 font-display text-[clamp(32px,3.4vw,50px)] leading-tight">
          Next steps & <span className="text-brand">open questions</span>.
        </h2>
      </div>

      <div className="grid min-h-0 grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-4">
          <div className="card accent-brand flex h-full flex-col justify-center p-7">
            <p className="eyebrow mb-5 text-brand">Immediate · on my side</p>
            <ul className="flex flex-col gap-5">
              {immediate.map((t, i) => (
                <li key={i} className="flex gap-4 font-serif text-[clamp(16px,1.4vw,20px)] leading-snug text-ink-soft">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-brand text-[13px] font-bold text-white">{i + 1}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="card accent-bacteria flex h-full flex-col justify-center p-7">
            <p className="eyebrow mb-5 text-bacteria">Open for feedback</p>
            <ul className="flex flex-col gap-5">
              {input.map((t, i) => (
                <li key={i} className="flex gap-4 font-serif text-[clamp(16px,1.4vw,20px)] leading-snug text-ink-soft">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-bacteria text-[13px] font-bold text-white">?</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="card accent-perfusion flex h-full flex-col justify-center p-7">
            <p className="eyebrow mb-3 text-perfusion">In parallel · remote</p>
            <p className="font-display text-[clamp(20px,1.8vw,28px)] leading-snug text-ink">ORS 2027 abstract</p>
            <p className="mt-3 font-serif text-[clamp(15px,1.3vw,18px)] leading-snug text-ink-soft">
              Abstract for ORS 2027 Annual Meeting. Deadline Aug&nbsp;31.
            </p>
            <div className="mt-4 min-h-0 flex-1">
              <Plate
                src="/images/ors/abstract.png"
                alt="Draft abstract prepared for the ORS 2027 Annual Meeting"
                sizes="(max-width: 768px) 100vw, 24vw"
                tone="paper"
                padding="tight"
                caption="Draft in progress"
                meta="ORS 2027"
              />
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] leading-relaxed text-ink-muted">
              San Francisco · Moscone West · Feb 19&ndash;23, 2027
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
