import Image from "next/image";
import AssemblyStrip from "@/components/schematics/AssemblyStrip";
import Plate from "@/components/ui/Plate";

const steps = [
  {
    n: "1",
    title: "Build the cartridge.",
    body: "Membrane clipped between lid and base with its O-ring. Done on the bench, as a module.",
    img: "/images/final/cartridge_full.jpg",
  },
  {
    n: "2",
    title: "Press into the satellite.",
    body: "Six tweezer-latches hold the cartridge in the satellite; each satellite now owns its cartridge.",
    img: "/images/final/perfusion_section_cartridge.jpg",
  },
  {
    n: "3",
    title: "Wrap the C-rings, latch them closed.",
    body: "Two C-rings meet around each satellite-hub joint, one pair per satellite (four C-rings total). The pair latches closed; screw holes stay for redundancy. Done.",
    img: "/images/final/cring_meeting.jpg",
  },
];

export default function Slide09() {
  return (
    <div className="grid h-full grid-rows-[auto_auto_1fr_auto] gap-3">
      <div>
        <p className="eyebrow text-brand">Design Work</p>
        <h2 className="mt-1 font-display text-[clamp(30px,3.2vw,46px)] leading-tight">
          Three steps, repeatable: <span className="text-brand">no wet-membrane gymnastics</span>.
        </h2>
      </div>

      {/* Schematic strip — kept compact so the CAD photos can dominate */}
      <Plate
        tone="graph"
        padding="tight"
        figureNumber="09"
        caption="Three-step assembly"
        meta="schematic strip"
        className="h-[128px]"
      >
        <AssemblyStrip className="h-full w-full" />
      </Plate>

      {/* CAD-backed step cards — images fill the freed vertical space */}
      <div className="grid min-h-0 grid-cols-3 gap-3">
        {steps.map((s, i) => (
          <div key={i} className="card flex h-full min-h-0 flex-col overflow-hidden">
            <div className="relative min-h-0 flex-1 bg-surface-2">
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, 32vw"
                className="object-contain p-1.5"
              />
              <span className="absolute left-2.5 top-2.5 grid size-8 place-items-center rounded-full bg-brand font-display text-[16px] font-semibold text-white shadow-md">
                {s.n}
              </span>
              <span className="absolute right-2.5 top-2.5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-ink-muted">
                Step {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="shrink-0 border-t border-line px-3 py-2.5">
              <p className="font-serif text-[13.5px] font-semibold text-ink">{s.title}</p>
              <p className="mt-0.5 font-serif text-[12px] leading-snug text-ink-soft">{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card-quote px-5 py-2">
        <p className="font-serif text-[13px] text-ink">
          <span className="font-semibold">Modular by design:</span> a direct, recursive descendant of what worked in the cartridge and outer-disc-pair of the last two versions, now fully separable and bench-mountable.
        </p>
      </div>
    </div>
  );
}
