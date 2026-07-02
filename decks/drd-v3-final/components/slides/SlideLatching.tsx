import Plate from "@/components/ui/Plate";

export default function SlideLatching() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-6">
      <div>
        <p className="eyebrow text-brand">Design Evolution</p>
        <h2 className="mt-2 font-display text-[clamp(32px,3.4vw,50px)] leading-tight">
          A real latch, <span className="text-brand">not just screws</span>.
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 flex flex-col gap-5 md:col-span-5">
          <p className="font-serif text-[clamp(15px,1.3vw,18px)] leading-snug text-ink-soft">
            The membrane-cartridge latches from June 10 worked well, so that lesson moved up to the wrappers: the two C-rings now close with a <span className="font-semibold text-ink">dedicated latching mechanism</span>.
          </p>

          <div className="card accent-brand p-5">
            <p className="eyebrow mb-1 text-brand">Latch, then screws</p>
            <p className="font-serif text-[15px] leading-snug text-ink-soft">
              The latch does the closing, so it reduces reliance on the screws. The screw holes are kept on purpose: redundancy, plus extra tightening if watertightness ever needs it. Belt and suspenders, not a single point of failure.
            </p>
          </div>

          <div className="card-quote p-5">
            <p className="eyebrow mb-1 text-brand">One lip, three O-rings</p>
            <p className="font-serif text-[15px] leading-snug italic text-ink">
              The wrappers meet at an inverse-U point whose extended lip presses the joint with even radial pressure. That same lip doubles as the pressure point for the cartridge, so the O-rings at all three levels (intra-cartridge, cartridge-to-satellite, satellite-to-drug-hub) get uniform, sustained load: watertight sealing plus a barrier against outside contaminants.
            </p>
          </div>
        </div>

        <div className="col-span-12 grid grid-cols-1 gap-4 md:col-span-7 md:grid-cols-2 md:grid-rows-2">
          <Plate
            src="/images/final/latch_front.jpg"
            alt="Front view: two C-rings forming a circle around the hub, a screw on top and a latch on each side"
            sizes="(max-width: 768px) 100vw, 40vw"
            tone="brand"
            padding="snug"
            figureNumber="L1A"
            caption="Latch, front view"
            meta="screw on top · latch each side"
            className="h-[280px] md:row-span-2"
          />
          <Plate
            src="/images/final/latch_closeup.jpg"
            alt="Zoomed detail of the C-ring latch lug engaging"
            sizes="(max-width: 768px) 100vw, 30vw"
            tone="graph"
            padding="snug"
            figureNumber="L1B"
            caption="Latch detail"
            meta="lug close-up"
            className="h-[132px]"
          />
          <Plate
            src="/images/final/cring_meeting.jpg"
            alt="Extreme close-up of the inverse-U meeting point and its sealing lip between the two wrappers"
            sizes="(max-width: 768px) 100vw, 30vw"
            tone="graph"
            padding="snug"
            figureNumber="L1C"
            caption="Inverse-U meeting point"
            meta="sealing lip"
            className="h-[132px]"
          />
        </div>
      </div>
    </div>
  );
}
