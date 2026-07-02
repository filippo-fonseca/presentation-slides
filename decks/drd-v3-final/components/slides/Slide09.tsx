import Image from "next/image";

const steps = [
  {
    n: "1",
    title: "Build the cartridge.",
    img: "/images/final/cartridge_full.jpg",
  },
  {
    n: "2",
    title: "Press into the satellite.",
    img: "/images/final/perfusion_section_cartridge.jpg",
  },
  {
    n: "3",
    title: "Wrap the C-rings, latch closed.",
    img: "/images/final/cring_meeting.jpg",
  },
];

export default function Slide09() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-4">
      <div>
        <p className="eyebrow text-brand">Design Work</p>
        <h2 className="mt-1 font-display text-[clamp(30px,3.2vw,46px)] leading-tight">
          Three steps, repeatable: <span className="text-brand">no wet-membrane gymnastics</span>.
        </h2>
      </div>

      <div className="grid min-h-0 grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <div key={i} className="card flex min-h-0 flex-col overflow-hidden">
            <div className="relative min-h-0 flex-1 bg-surface-2">
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, 32vw"
                className="object-contain"
              />
              <span className="absolute left-3 top-3 grid size-9 place-items-center rounded-full bg-brand font-display text-[18px] font-semibold text-white shadow-md">
                {s.n}
              </span>
            </div>
            <div className="shrink-0 border-t border-line px-4 py-3">
              <p className="font-serif text-[15px] font-semibold text-ink">{s.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
