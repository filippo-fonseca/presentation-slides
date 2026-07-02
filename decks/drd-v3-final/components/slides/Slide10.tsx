import Plate from "@/components/ui/Plate";

const tenets = [
  {
    title: "It stands on its own.",
    body: "The bottom C-ring now carries integral legs, so the device sits flat and stable on the bench by itself. The published setup was awkward to place; this one is free-standing.",
  },
  {
    title: "Clean by intent.",
    body: "Uniform O-rings, one screw size, symmetric satellites, minimal part count. The cleanliness is a design goal, not an afterthought: fewer parts, fewer failure modes, less to explain to the next user.",
  },
  {
    title: "Easy, repeatable mounting.",
    body: "Lab-bench-friendly: the modular cartridge + defined clamp means anyone can assemble it the same way every time, with no special technique.",
  },
  {
    title: "Tighter, more honest fits.",
    body: "Fits refined over three generations: defined clearances and gasket compression rather than hope-it-presses-in tolerances.",
  },
];

export default function Slide10() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-6">
      <div>
        <p className="eyebrow text-brand">Design Work</p>
        <h2 className="mt-2 font-display text-[clamp(30px,3.2vw,46px)] leading-tight">
          Designed to live on the bench: <span className="text-brand">standalone, clean, easy to mount</span>.
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 grid grid-cols-2 gap-4 md:col-span-7">
          {tenets.map((t, i) => (
            <div key={i} className="card accent-brand p-5">
              <p className="font-serif text-[16.5px] font-semibold text-ink">{t.title}</p>
              <p className="mt-1.5 font-serif text-[14px] leading-snug text-ink-soft">{t.body}</p>
            </div>
          ))}
        </div>

        <div className="col-span-12 grid grid-rows-2 gap-4 md:col-span-5">
          <Plate
            src="/images/final/assembly_full.jpg"
            alt="DRD-3 final assembly, free-standing on the bottom C-ring's integral legs"
            sizes="(max-width: 768px) 100vw, 35vw"
            tone="graph"
            padding="snug"
            figureNumber="10A"
            caption="Stands on the bench"
            meta="full device · legs from bottom C-ring"
          />
          <Plate
            tone="graph"
            padding="snug"
            figureNumber="10B"
            caption="Exploded chassis"
            meta="screenshot pending"
          >
            <div className="flex h-full w-full items-center justify-center p-4 text-center">
              <p className="font-mono text-[12px] uppercase tracking-[0.14em] leading-relaxed text-red-600">
                EXPLODED VIEW OF CHASSIS ASSEMBLED, need to take screenshot
              </p>
            </div>
          </Plate>
        </div>
      </div>
    </div>
  );
}
