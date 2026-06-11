import Plate from "@/components/ui/Plate";

export default function Slide08() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-6">
      <div>
        <p className="eyebrow text-brand">Design Work</p>
        <h2 className="mt-2 font-display text-[clamp(32px,3.4vw,50px)] leading-tight">
          The clamp is a <span className="text-brand">wrapper, not a screw rig</span>.
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 flex flex-col gap-5 md:col-span-6">
          <p className="font-serif text-[clamp(15px,1.3vw,18px)] leading-snug text-ink-soft">
            Each satellite is held to the drug hub by a pair of <span className="font-semibold text-ink">C-shaped wrapper rings</span> that meet in the middle of the joint. The two halves close around the satellite–hub interface and need only <span className="font-semibold text-ink">one screw per side</span> to draw them together. Two screws per satellite, four for the whole device.
          </p>

          <div className="card accent-brand p-5">
            <p className="eyebrow mb-1 text-brand">Why a wrapper</p>
            <p className="font-serif text-[15.5px] text-ink-soft">
              The C-ring&apos;s inner profile is a U-channel that mirrors the U-shape created when the satellite meets the hub. Closing the wrapper pulls the joint inward radially, so the contact pressure is uniform around the full circumference instead of concentrated at four bolt points.
            </p>
          </div>

          <div className="card-quote p-5">
            <p className="eyebrow mb-1 text-brand">What this replaces</p>
            <p className="font-serif text-[15.5px] italic text-ink">
              Earlier iterations clamped each satellite with four flange-mounted screws. That seated the parts, but the radial pressure was point-loaded at the bolt circle, not continuous. The wrapper trades four small bolts for one continuous hoop and lets the geometry do the sealing.
            </p>
          </div>
        </div>

        <div className="col-span-12 grid grid-rows-2 gap-4 md:col-span-6">
          <Plate
            src="/images/cring/cring_iso.png"
            alt="Isometric view of one C-shaped wrapper ring with internal U-channel visible"
            sizes="(max-width: 768px) 100vw, 40vw"
            tone="paper"
            padding="snug"
            figureNumber="08A"
            caption="The C-ring wrapper, isometric"
            meta="one half · two per satellite"
          />
          <Plate
            src="/images/full/full_assembly_clamped.jpg"
            alt="Full DRD-3 assembly, front view, both C-ring wrappers closed around the satellites with hex closures visible on top"
            sizes="(max-width: 768px) 100vw, 40vw"
            tone="graph"
            padding="snug"
            figureNumber="08B"
            caption="Wrappers closed, in context"
            meta="front view · one screw per side"
          />
        </div>
      </div>
    </div>
  );
}
