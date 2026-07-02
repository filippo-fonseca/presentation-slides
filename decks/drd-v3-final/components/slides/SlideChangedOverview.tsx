// Section-divider / overview slide. June 10 was shown only to the polyethylene
// subgroup; this is the final review for the whole lab. Preview the four
// changes that separate the July 1 device from the June 10 one.

const changes = [
  {
    n: "01",
    label: "Membrane cartridge, rebuilt",
    body: "The sealing tooth leaked exactly at the tooth on the bench. The cartridge was redesigned around six tweezer-latches instead.",
  },
  {
    n: "02",
    label: "C-rings that stand on their own",
    body: "The bottom C-ring now carries legs, so the device is free-standing and uses less material.",
  },
  {
    n: "03",
    label: "A real latching mechanism",
    body: "Latches carried over from the cartridge now close the C-rings, reducing reliance on screws. Screw holes are kept for redundancy.",
  },
  {
    n: "04",
    label: "Scaled down",
    body: "The whole device is materially smaller and wastes less material, with the same three-chamber function.",
  },
];

export default function SlideChangedOverview() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-8">
      <div>
        <p className="eyebrow text-brand">Since the last review</p>
        <h2 className="mt-2 font-display text-[clamp(34px,3.8vw,54px)] leading-tight">
          What changed since <span className="text-brand">June 10</span>.
        </h2>
        <p className="mt-4 max-w-[68ch] font-serif text-[clamp(15px,1.3vw,18px)] leading-snug text-ink-soft">
          June 10 was a working session with the polyethylene subgroup. This is the final review for the whole lab, so here are the four changes that separate that device from the one in front of you.
        </p>
      </div>

      <div className="my-auto grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {changes.map((c) => (
          <div key={c.n} className="card accent-brand flex flex-col gap-3 p-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
              {c.n}
            </span>
            <p className="font-serif text-[16px] font-semibold leading-snug text-ink">
              {c.label}
            </p>
            <p className="font-serif text-[14px] leading-snug text-ink-soft">
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
