import Image from "next/image";
import AssemblyStrip from "@/components/schematics/AssemblyStrip";
import Plate from "@/components/ui/Plate";

const steps = [
  {
    n: "1",
    title: "Build the cartridge.",
    body: "Membrane clipped between lid and base with its O-ring. Done on the bench, as a module.",
    img: "/images/cartridge/cartridge_base_oring.jpg",
  },
  {
    n: "2",
    title: "Press into the satellite.",
    body: "The tooth retains it; each satellite now owns its cartridge.",
    img: "/images/satellite/satellite_section.jpg",
  },
  {
    n: "3",
    title: "Bolt the satellites to the hub.",
    body: "Four screws each side. One central hub piece. Done.",
    img: "/images/full/hero_full_assembly.jpg",
  },
];

export default function Slide09() {
  return (
    <div className="grid h-full grid-rows-[auto_auto_1fr_auto] gap-5">
      <div>
        <p className="eyebrow text-brand">Design Work</p>
        <h2 className="mt-2 font-display text-[clamp(32px,3.4vw,50px)] leading-tight">
          Three steps. Repeatable. <span className="text-brand">No wet-membrane gymnastics.</span>
        </h2>
      </div>

      {/* Schematic strip */}
      <Plate
        tone="graph"
        padding="snug"
        figureNumber="09"
        caption="Three-step assembly"
        meta="schematic strip"
        className="h-[230px]"
      >
        <AssemblyStrip className="h-full w-full" />
      </Plate>

      {/* CAD-backed step cards */}
      <div className="grid grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <div key={i} className="card flex h-full flex-col overflow-hidden">
            <div className="relative aspect-[4/3] bg-surface-2">
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-contain p-3"
              />
              <span className="absolute left-3 top-3 grid size-9 place-items-center rounded-full bg-brand font-display text-[18px] font-semibold text-white shadow-md">
                {s.n}
              </span>
              <span className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                Step {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="border-t border-line p-4">
              <p className="font-serif text-[15.5px] font-semibold text-ink">{s.title}</p>
              <p className="mt-1 font-serif text-[14px] leading-snug text-ink-soft">{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card-quote px-5 py-3">
        <p className="font-serif text-[15px] text-ink">
          <span className="font-semibold">Modular by design.</span> A direct, recursive descendant of what worked in the cartridge and outer-disc-pair of the last two versions, now fully separable and bench-mountable.
        </p>
      </div>
    </div>
  );
}
