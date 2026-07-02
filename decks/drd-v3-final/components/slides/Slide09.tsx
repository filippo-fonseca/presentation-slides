import ExpandableImage from "@/components/ui/ExpandableImage";

function BuildCartridgeDiagram() {
  return (
    <svg
      viewBox="0 0 320 230"
      className="h-full w-full"
      role="img"
      aria-label="Exploded membrane cartridge diagram showing lid, O-ring, membrane, and base"
      fill="none"
    >
      <text x="18" y="24" fontFamily="var(--font-sans)" fontSize="12" fontWeight="700" letterSpacing="0.08em" fill="#16767B">
        BUILD THE CARTRIDGE
      </text>
      <text x="18" y="42" fontFamily="var(--font-serif)" fontStyle="italic" fontSize="12" fill="#4a4f59">
        lid + O-ring + membrane + base
      </text>

      <ellipse cx="132" cy="76" rx="92" ry="14" fill="#fff" stroke="#5a5e66" strokeWidth="1.4" />
      <text x="238" y="80" fontFamily="var(--font-sans)" fontSize="11" fill="#7a7f88">
        lid
      </text>

      <ellipse cx="132" cy="112" rx="76" ry="9" fill="#C0552E" />
      <ellipse cx="132" cy="112" rx="76" ry="9" fill="none" stroke="#7c3a1c" strokeWidth="1" />
      <text x="238" y="116" fontFamily="var(--font-sans)" fontSize="11" fill="#7a7f88">
        O-ring
      </text>

      <ellipse cx="132" cy="142" rx="68" ry="8" fill="#f4f1ea" stroke="#1a1d24" strokeDasharray="3 3" strokeWidth="1.4" />
      <text x="238" y="146" fontFamily="var(--font-sans)" fontSize="11" fill="#7a7f88">
        membrane
      </text>

      <ellipse cx="132" cy="178" rx="92" ry="16" fill="#cdc5b6" stroke="#5a5e66" strokeWidth="1.4" />
      <rect x="40" y="178" width="184" height="28" fill="#cdc5b6" stroke="#5a5e66" strokeWidth="1.4" />
      <ellipse cx="132" cy="206" rx="92" ry="14" fill="#cdc5b6" stroke="#5a5e66" strokeWidth="1.4" />
      <text x="238" y="194" fontFamily="var(--font-sans)" fontSize="11" fill="#7a7f88">
        base
      </text>

      <line x1="132" y1="90" x2="132" y2="102" stroke="#7a7f88" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="132" y1="121" x2="132" y2="134" stroke="#7a7f88" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="132" y1="151" x2="132" y2="166" stroke="#7a7f88" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}

const steps = [
  {
    n: "May",
    title: "Published DRD section.",
    img: "/images/v2/v2_section.png",
    label: "May 2026",
    meta: "published",
  },
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
        <h2 className="mt-1 max-w-[1100px] font-display text-[clamp(28px,3vw,42px)] leading-tight">
          Three steps, repeatable: <span className="text-brand">no wet-membrane gymnastics</span>.
        </h2>
      </div>

      <div className="grid min-h-0 grid-cols-1 gap-4 md:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.n} className="card flex min-h-0 flex-col overflow-hidden">
            {s.n === "1" ? (
              <div className="grid min-h-0 flex-1 grid-rows-[1.05fr_1fr] bg-surface-2">
                <div className="min-h-0 border-b border-line bg-surface/65 p-3">
                  <BuildCartridgeDiagram />
                </div>
                <div className="relative min-h-0">
                  <ExpandableImage
                    src={s.img}
                    alt={s.title}
                    sizes="(max-width: 768px) 100vw, 24vw"
                    className="object-contain p-2"
                    caption={s.title}
                    figureNumber={`09${s.n}`}
                  />
                </div>
              </div>
            ) : (
              <div className="relative min-h-0 flex-1 bg-surface-2">
                <ExpandableImage
                  src={s.img}
                  alt={s.title}
                  priority={i === 0}
                  sizes="(max-width: 768px) 100vw, 24vw"
                  className="object-contain p-2"
                  caption={s.title}
                  figureNumber={`09${s.n}`}
                />
              </div>
            )}
            <div className="flex min-h-[68px] shrink-0 items-center gap-3 border-t border-line bg-surface/90 px-4 py-3">
              {s.n === "May" ? (
                <div className="min-w-0">
                  <span className="rounded-full bg-brand-fade px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand ring-1 ring-brand-soft">
                    {s.label}
                  </span>
                  <p className="mt-1 font-serif text-[15px] font-semibold leading-tight text-ink">{s.title}</p>
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-muted">{s.meta}</p>
                </div>
              ) : (
                <>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand font-display text-[19px] font-semibold text-white shadow-sm">
                    {s.n}
                  </span>
                  <p className="font-serif text-[16px] font-semibold leading-tight text-ink">{s.title}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
