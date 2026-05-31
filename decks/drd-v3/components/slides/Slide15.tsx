const immediate = [
  "Verify internal chamber volume from CAD; tune hub depth to land in 4–20 mL.",
  "Finalize the bacteria satellite (single port + septum choice).",
  "Implement any feedback from today, then it's Protolabs-ready.",
];

const input = [
  "Septum vs. swabbable luer valve for the bacteria port.",
  "Keep the four-screw clamp, or develop the screwless quarter-turn version?",
  "Sign-off on target volume and material before order.",
];

export default function Slide15() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto] gap-6">
      <div>
        <p className="eyebrow text-brand">Next Steps</p>
        <h2 className="mt-2 font-display text-[clamp(32px,3.4vw,50px)] leading-tight">
          Next steps & <span className="text-brand">open questions</span>.
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <div className="card accent-brand h-full p-6">
            <p className="eyebrow mb-3 text-brand">Immediate · on my side</p>
            <ul className="flex flex-col gap-4">
              {immediate.map((t, i) => (
                <li key={i} className="flex gap-3 font-serif text-[15.5px] leading-snug text-ink-soft">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-[11px] font-bold text-white">{i + 1}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="card accent-bacteria h-full p-6">
            <p className="eyebrow mb-3 text-bacteria">Open for feedback</p>
            <ul className="flex flex-col gap-4">
              {input.map((t, i) => (
                <li key={i} className="flex gap-3 font-serif text-[15.5px] leading-snug text-ink-soft">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-bacteria text-[11px] font-bold text-white">?</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="card-quote px-5 py-3">
        <p className="font-serif text-[15px] text-ink">
          Feedback gets implemented immediately, and because it's modular, the device builds the same way every time.
        </p>
      </div>
    </div>
  );
}
