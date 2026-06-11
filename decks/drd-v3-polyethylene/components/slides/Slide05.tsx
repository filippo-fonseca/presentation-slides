import Plate from "@/components/ui/Plate";

const points = [
  {
    title: "Modular & off-device.",
    body: "No more wrestling a wet membrane inside a live assembly. The seal is made on the bench, by hand, then inserted as one unit.",
  },
  {
    title: "One tooth, two jobs.",
    body: "A single tapered tooth (2 mm → 1 mm) clips the lid to the base to capture the membrane, and extrudes outward to retain the whole cartridge in the satellite. One feature seals the membrane sandwich and locks the module in place.",
  },
];

const figs = [
  { n: "05A", src: "/images/cartridge/cartridge_full_side.jpg",       cap: "Full cartridge",       meta: "top-from-side" },
  { n: "05B", src: "/images/cartridge/cartridge_base_oring.jpg",      cap: "Base, parallel bars",  meta: "shields the membrane" },
  { n: "05C", src: "/images/cartridge/cartridge_lid.jpg",             cap: "Lid · top/side",       meta: "matching bar pattern" },
  { n: "05D", src: "/images/cartridge/cartridge_assembly_bottom.jpg", cap: "Assembled cartridge",  meta: "bottom/side · membrane captured" },
];

export default function Slide05() {
  return (
    <div className="grid h-full grid-cols-12 gap-8">
      <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
        <div>
          <p className="eyebrow text-brand">Design Work · Hero</p>
          <h2 className="mt-2 font-display text-[clamp(30px,3vw,46px)] leading-tight">
            The membrane cartridge: <span className="text-brand">build it off the device, drop it in.</span>
          </h2>
        </div>

        <p className="font-serif text-[clamp(15px,1.3vw,18px)] leading-snug text-ink-soft">
          The membrane lives clipped inside its own lid + base cartridge. You assemble the cartridge <span className="italic">separately</span>, then drop the finished module into a satellite. This is the heart of the design.
        </p>

        <ul className="flex flex-col gap-3">
          {points.map((p, i) => (
            <li key={i} className="card accent-brand p-4">
              <p className="font-serif text-[16px] font-semibold text-ink">{p.title}</p>
              <p className="mt-1 font-serif text-[14.5px] leading-snug text-ink-soft">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-12 md:col-span-7">
        <div className="grid h-full grid-cols-2 grid-rows-2 gap-3">
          {figs.map((f) => (
            <Plate
              key={f.n}
              src={f.src}
              alt={f.cap}
              sizes="(max-width: 768px) 50vw, 28vw"
              tone="graph"
              padding="snug"
              figureNumber={f.n}
              caption={f.cap}
              meta={f.meta}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
