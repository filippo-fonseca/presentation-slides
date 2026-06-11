import Plate from "@/components/ui/Plate";
import ThreeORingSection from "@/components/schematics/ThreeORingSection";

const interfaces = [
  {
    n: "①",
    color: "chip-hub",
    border: "accent-hub",
    title: "Cartridge → satellite",
    body: "Tooth transition fit holds the module; O-ring backs the seam.",
  },
  {
    n: "②",
    color: "chip-bacteria",
    border: "accent-bacteria",
    title: "Lid → base",
    body: "Tooth captures the membrane sandwich; O-ring closes the gap.",
  },
  {
    n: "③",
    color: "chip-perfusion",
    border: "accent-perfusion",
    title: "Satellite → hub",
    body: "Two C-ring wrappers close around the joint, one bolt per side; O-ring rides in the gland.",
  },
];

export default function Slide07() {
  return (
    <div className="grid h-full grid-rows-[auto_auto_1fr_auto] gap-5">
      <div>
        <p className="eyebrow text-brand">Design Work · Hero</p>
        <h2 className="mt-2 font-display text-[clamp(28px,3vw,44px)] leading-[1.08]">
          Watertight <span className="text-brand">by geometry</span>: O-rings are the helper, not the hero.
        </h2>
      </div>

      <p className="max-w-[82ch] font-serif text-[clamp(15px,1.3vw,18px)] leading-snug text-ink-soft">
        In earlier iterations the O-rings were painful to work with and didn&apos;t always seal cleanly. So this version flips the logic: <span className="text-ink">the clamped joint and the tapered tooth do the actual sealing</span>, and the O-ring sits in a proper gland as a redundant helper on top. Belt, suspenders, and a known-good gasket.
      </p>

      <div className="grid grid-cols-12 gap-5">
        {/* Schematic — wide */}
        <div className="col-span-12 lg:col-span-8">
          <Plate
            tone="graph"
            padding="comfy"
            figureNumber="07"
            caption="Three sealing interfaces of the DRD-3"
            meta="horizontal section · schematic"
          >
            <ThreeORingSection className="h-full w-full" />
          </Plate>
        </div>

        {/* Three-layer seal stack + spec + real CAD */}
        <div className="col-span-12 flex flex-col gap-4 lg:col-span-4">
          <div className="card p-4">
            <p className="eyebrow mb-3 text-brand">Three layers, in order</p>
            <ol className="flex flex-col gap-2 font-serif text-[13.5px] text-ink-soft">
              <li className="flex gap-2">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-[10.5px] font-bold text-white">1</span>
                <span><span className="font-semibold text-ink">C-ring wrapper.</span> Two halves close around the satellite-hub joint, one bolt per side, pulling the joint together with uniform radial load.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-[10.5px] font-bold text-white">2</span>
                <span><span className="font-semibold text-ink">Tapered tooth.</span> Compliant transition fit (2 → 1 mm) wedges the cartridge inside the satellite the same way the v2 disc-pair did.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-[10.5px] font-bold text-white">3</span>
                <span><span className="font-semibold text-ink">O-ring helper.</span> 2 mm cord, 1.5 mm gland, 25% compression. Drops in if needed; doesn't carry the joint by itself.</span>
              </li>
            </ol>
          </div>

          <div className="flex flex-1 flex-col">
            <Plate
              src="/images/section/section_side_orings.jpg"
              alt="DRD-3 cross-section showing O-rings tucked into glands behind a clamped joint"
              sizes="(max-width: 1024px) 50vw, 30vw"
              tone="paper"
              padding="snug"
              figureNumber="07′"
              caption="Glands sit behind the clamp"
              meta="full section · side view"
              className="min-h-[160px] flex-1"
            />
          </div>
        </div>
      </div>

      {/* Interface cards */}
      <div className="grid grid-cols-3 gap-3">
        {interfaces.map((c) => (
          <div key={c.n} className={`card ${c.border} flex items-center gap-3 p-3`}>
            <span className={`${c.color} grid size-8 place-items-center rounded-full font-display text-[15px] font-semibold`}>{c.n}</span>
            <div>
              <p className="font-serif text-[14px] font-semibold text-ink">{c.title}</p>
              <p className="font-serif text-[12.5px] leading-snug text-ink-muted">{c.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card-quote px-5 py-3">
        <p className="font-serif text-[15px] text-ink">
          <span className="font-semibold">v1 + v2, refined.</span> The new C-ring wrapper replaces the old four-bolt clamp, the compliant tooth carries over from v2, and prior fixes are folded in. The O-ring goes back to doing what it&apos;s good at: filling the last micron.
        </p>
      </div>
    </div>
  );
}
