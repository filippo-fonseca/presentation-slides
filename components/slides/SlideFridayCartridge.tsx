// One more late-Friday update: revised cartridge with protective bars
// back from v2 (Asik's design) and tweezer pinch tabs on the base.
// Slots between the v2 findings slide and the validation plan.

import Plate from "@/components/ui/Plate";

export default function SlideFridayCartridge() {
  return (
    <div className="grid h-full grid-rows-[auto_auto_1fr_auto] gap-4">
      <div>
        <p className="eyebrow text-brand">Design Work · Late addition</p>
        <h2 className="mt-1 font-display text-[clamp(26px,2.8vw,40px)] leading-[1.08]">
          One more Friday update: <span className="text-brand">revised cartridge</span>.
        </h2>
      </div>

      <p className="max-w-[88ch] font-serif text-[clamp(14px,1.2vw,17px)] leading-snug text-ink-soft">
        I hadn&apos;t shown this until now &mdash; it came in late Friday, after two realizations. We still need to shield the membrane from the UHMWPE implant strip sitting in the drug hub, but the v3 porous structure was probably too restrictive for diffusion (per Aşık&apos;s note last week). And I hadn&apos;t given the cartridge a proper grip for clean removal, especially once the protective structure is back in the middle. Two small additions fix both.
      </p>

      <div className="grid min-h-0 grid-cols-12 gap-4">
        {/* Change 1 — protective bars */}
        <div className="col-span-12 flex flex-col gap-3 md:col-span-4">
          <Plate
            src="/images/new-cartridge/cartridge_full.jpeg"
            alt="New cartridge top view showing protective parallel bars across the membrane"
            sizes="(max-width: 768px) 100vw, 33vw"
            tone="paper"
            padding="tight"
            figureNumber="14A"
            caption="Protective bars · top view"
            meta="back from v2"
            className="min-h-[180px] flex-1"
          />
          <div className="card accent-hub p-4">
            <p className="eyebrow mb-1 text-hub">Change 1 · protective bars (back from v2)</p>
            <p className="font-serif text-[13px] leading-snug text-ink-soft">
              Replaces the v3 porous structure with parallel bars from Aşık&apos;s original design. Same job &mdash; shield the membrane from the UHMWPE implant strip &mdash; but bars leave flow <span className="font-semibold text-ink">far less restricted</span>. Aşık flagged last week that the porous geometry could hamper diffusion through the membrane; bars give us the same protection without the impedance.
            </p>
          </div>
        </div>

        {/* Change 2 — tweezer pinch tabs */}
        <div className="col-span-12 flex flex-col gap-3 md:col-span-4">
          <Plate
            src="/images/new-cartridge/cartridge_side_view.jpeg"
            alt="Cartridge side view showing the two tweezer pinch tabs rising from the base"
            sizes="(max-width: 768px) 100vw, 33vw"
            tone="paper"
            padding="tight"
            figureNumber="14B"
            caption="Pinch tabs · side view"
            meta="one on each side"
            className="min-h-[180px] flex-1"
          />
          <div className="card accent-bacteria p-4">
            <p className="eyebrow mb-1 text-bacteria">Change 2 · tweezer pinch tabs</p>
            <p className="font-serif text-[13px] leading-snug text-ink-soft">
              Two pinch tabs on the <span className="font-semibold text-ink">base</span> &mdash; the innermost component. Gripping there lifts the entire cartridge (base, membrane, lid) out as one, avoiding any damage to the bars and removing the risk of the cartridge getting stuck in the satellite. With tweezers, we no longer need to reach in and grab the bars themselves.
            </p>
          </div>
        </div>

        {/* In context */}
        <div className="col-span-12 flex flex-col gap-3 md:col-span-4">
          <Plate
            src="/images/new-cartridge/new_full_drd_section_view_with_new_cartridge.jpeg"
            alt="Full DRD-3 section view showing both new cartridges installed"
            sizes="(max-width: 768px) 100vw, 33vw"
            tone="graph"
            padding="tight"
            figureNumber="14C"
            caption="In context"
            meta="full DRD section · new cartridges installed"
            className="min-h-[180px] flex-1"
          />
          <div className="card accent-amber p-4">
            <p className="eyebrow mb-1 text-amber">Still open · inner vs. outer clearance</p>
            <p className="font-serif text-[13px] leading-snug text-ink-soft">
              Same caveat as the rest of v3: 0.1 mm looks <span className="italic">probably too tight</span> here too, especially between the inner base and the outer lid. Want to investigate inner-vs-outer tolerance on this cartridge specifically before the print goes out. Same direction as the broader clearance call: open it up slightly.
            </p>
          </div>
        </div>
      </div>

      <div className="card-quote px-5 py-3">
        <p className="font-serif text-[clamp(14px,1.2vw,17px)] leading-snug text-ink">
          <span className="font-semibold">Membrane protected, cleanly removable.</span> Two small adds, both deliberately reusing what v2 already showed us works.
        </p>
      </div>
    </div>
  );
}
