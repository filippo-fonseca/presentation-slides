import Plate from "@/components/ui/Plate";

export default function SlideCRingDetail() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto] gap-5">
      <div>
        <p className="eyebrow text-brand">Design Work · Continued</p>
        <h2 className="mt-2 font-display text-[clamp(28px,3vw,44px)] leading-tight">
          One wrapper, <span className="text-brand">three O-rings under equal pressure</span>.
        </h2>
      </div>

      <div className="grid min-h-0 grid-cols-12 gap-5">
        <div className="col-span-12 flex flex-col gap-4 md:col-span-5">

          <div className="card accent-brand p-4">
            <p className="eyebrow mb-2 text-brand">Three O-rings, one source of pressure</p>
            <ol className="list-decimal space-y-1.5 pl-5 font-serif text-[14.5px] text-ink-soft">
              <li><span className="font-semibold text-ink">Outer joint.</span> Where the satellite meets the hub.</li>
              <li><span className="font-semibold text-ink">Cartridge to satellite.</span> Holds the membrane cartridge in place.</li>
              <li><span className="font-semibold text-ink">Inside the cartridge.</span> Between lid and base, sealing the membrane.</li>
            </ol>
          </div>
        </div>

        <div className="col-span-12 grid grid-cols-2 gap-4 md:col-span-7">
          <Plate
            src="/images/cring/cring_iso.png"
            alt="Isometric view of one C-shaped wrapper, internal U-channel visible"
            sizes="(max-width: 768px) 100vw, 35vw"
            tone="paper"
            padding="snug"
            figureNumber="09A"
            caption="C-ring · internal U"
            meta="mates the joint&rsquo;s outer U"
          />
          <Plate
            src="/images/final/cring_meeting.jpg"
            alt="Close-up of the final C-ring meeting point with the latch engaged"
            sizes="(max-width: 768px) 100vw, 35vw"
            tone="graph"
            padding="snug"
            figureNumber="09B"
            caption="Meeting point, close-up"
            meta="final · latch engaged"
          />
          <Plate
            src="/images/final/assembly_section_angle.jpg"
            alt="Angled section view of the final DRD-3, both membrane cartridges seated inside the satellites"
            sizes="(max-width: 768px) 100vw, 35vw"
            tone="paper"
            padding="snug"
            figureNumber="09C"
            caption="Full section, in context"
            meta="final · both cartridges seated"
            className="col-span-2"
          />
        </div>
      </div>

      <div className="card-quote px-5 py-3">
        <p className="font-serif text-[clamp(14px,1.2vw,17px)] leading-snug text-ink">
          <span className="font-semibold">One ring closed. Three interfaces sealed.</span>
        </p>
      </div>
    </div>
  );
}
