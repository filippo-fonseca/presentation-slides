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
          <p className="font-serif text-[clamp(14px,1.2vw,17px)] leading-snug text-ink-soft">
            The wrapper&apos;s inner U-channel rides over the joint where the satellite meets the hub. The hub&apos;s outer edge sits radially <span className="italic">inboard</span> of the satellite&apos;s outer edge, so as the wrapper closes it presses the satellite&apos;s rim slightly inward toward the hub axis. That inward step continues through the joint to the membrane cartridge, which gets squeezed in turn.
          </p>

          <div className="card accent-brand p-4">
            <p className="eyebrow mb-2 text-brand">Three O-rings, one source of pressure</p>
            <ol className="list-decimal space-y-1.5 pl-5 font-serif text-[14.5px] text-ink-soft">
              <li><span className="font-semibold text-ink">Satellite ↔ drug hub.</span> The outer joint between the two shells.</li>
              <li><span className="font-semibold text-ink">Cartridge ↔ satellite.</span> Captures the membrane cartridge into the satellite bore.</li>
              <li><span className="font-semibold text-ink">Intra-cartridge.</span> Between lid and base, sealing the membrane itself.</li>
            </ol>
            <p className="mt-2 font-serif text-[13.5px] italic text-ink">
              All three see the same radial squeeze, transmitted through the geometry. No O-ring is doing work alone.
            </p>
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
            src="/images/cring/cring_meeting.jpg"
            alt="Close-up of the inverse U-shaped meeting point with the cartridge teeth pressed in and the extended lip locking the cartridge in place"
            sizes="(max-width: 768px) 100vw, 35vw"
            tone="graph"
            padding="snug"
            figureNumber="09B"
            caption="Meeting point, close-up"
            meta="lip + teeth · cartridge pinned"
          />
          <Plate
            src="/images/section/section_iso_membranes.jpg"
            alt="Section view of the full DRD-3 from the side at an angle, both membrane cartridges visible inside the satellites"
            sizes="(max-width: 768px) 100vw, 35vw"
            tone="paper"
            padding="snug"
            figureNumber="09C"
            caption="Full section, in context"
            meta="both cartridges seated · angled section"
            className="col-span-2"
          />
        </div>
      </div>

      <div className="card-quote px-5 py-3">
        <p className="font-serif text-[clamp(14px,1.2vw,17px)] leading-snug text-ink">
          <span className="font-semibold">Closing one ring seals three.</span> The wrapper turns a four-bolt clamp problem into one continuous, watertight hoop, and uses the same compression to seat the membrane cartridge in line with the joint.
        </p>
      </div>
    </div>
  );
}
