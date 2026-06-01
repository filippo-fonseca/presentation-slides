import Plate from "@/components/ui/Plate";

export default function Slide08() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-6">
      <div>
        <p className="eyebrow text-brand">Design Work</p>
        <h2 className="mt-2 font-display text-[clamp(32px,3.4vw,50px)] leading-tight">
          A defined mechanical clamp: <span className="text-brand">not a press-fit prayer</span>.
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 flex flex-col gap-5 md:col-span-6">
          <p className="font-serif text-[clamp(15px,1.3vw,18px)] leading-snug text-ink-soft">
            The satellites bolt to the hub with <span className="font-semibold text-ink">4× M2.5</span> screws through the extruded flanges (the little "arms" on the hub and satellites), backed by a reinforced interior wall on the drug hub for watertightness. Assembled, it pulls together like a vacuum seal.
          </p>

          <div className="card accent-brand p-5">
            <p className="eyebrow mb-1 text-brand">Why screws (deliberate choice)</p>
            <p className="font-serif text-[15.5px] text-ink-soft">
              Repeatable, removable, tolerance-forgiving. It takes the device off relying on press-fits into SLA prints, which is exactly what gave us trouble before. Every assembly is identical.
            </p>
          </div>

          <div className="card-quote p-5">
            <p className="eyebrow mb-1 text-brand">Open question · folded in</p>
            <p className="font-serif text-[15.5px] italic text-ink">
              Screws give certainty now and are trivial to drive and back out. There is also a path to a screwless quarter-turn clamp down the line, open to a read on whether that is worth pursuing or whether the screws are the right call to keep.
            </p>
          </div>
        </div>

        <div className="col-span-12 grid grid-rows-2 gap-4 md:col-span-6">
          <Plate
            src="/images/hub/drughub_front_flanges.jpg"
            alt="Drug hub front view showing the four extruded flange tabs"
            sizes="(max-width: 768px) 100vw, 40vw"
            tone="graph"
            padding="snug"
            figureNumber="08A"
            caption="Drug hub"
            meta="four flange tabs"
          />
          <Plate
            src="/images/full/full_assembly_clamped.jpg"
            alt="DRD-3 full assembly showing the clamped flange arms"
            sizes="(max-width: 768px) 100vw, 40vw"
            tone="paper"
            padding="snug"
            figureNumber="08B"
            caption="Full assembly, top-down view"
            meta="clamped through arms"
          />
        </div>
      </div>
    </div>
  );
}
