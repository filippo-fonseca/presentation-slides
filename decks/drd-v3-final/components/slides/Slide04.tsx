import Plate from "@/components/ui/Plate";
import ExpandableImage from "@/components/ui/ExpandableImage";

const chambers = [
  {
    key: "hub",
    label: "Drug hub",
    role: "the joint space",
    accent: "accent-hub",
    chip: "chip-hub",
    body: <>Holds the drug-eluting implant.</>,
  },
  {
    key: "perfusion",
    label: "Perfusion satellite",
    role: "simulated blood flow",
    accent: "accent-perfusion",
    chip: "chip-perfusion",
    body: <>Continuous fluid flow. Measures drug transport.</>,
  },
  {
    key: "bacteria",
    label: "Bacteria satellite",
    role: "isolated infection challenge",
    accent: "accent-bacteria",
    chip: "chip-bacteria",
    body: <>Sealed compartment for live bacteria. Isolated from everything else.</>,
  },
] as const;

function ChamberLabel({
  label,
  color,
  className,
}: {
  label: string;
  color: "hub" | "perfusion" | "bacteria";
  className: string;
}) {
  const colorClass = {
    hub: "border-hub bg-hub-soft text-hub",
    perfusion: "border-perfusion bg-perfusion-soft text-perfusion",
    bacteria: "border-bacteria bg-bacteria-soft text-bacteria",
  }[color];

  return (
    <span className={`absolute z-20 rounded-full border px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] shadow-sm ${colorClass} ${className}`}>
      {label}
    </span>
  );
}

function ChamberLeaders({ variant = "section" }: { variant?: "topdown" | "section" }) {
  const targets =
    variant === "topdown"
      ? {
          perfusion: { path: "M24 80 L34 59", x: 34, y: 59 },
          hub: { path: "M51 20 L51 45", x: 51, y: 45 },
          bacteria: { path: "M76 80 L74 48", x: 74, y: 48 },
        }
      : {
          perfusion: { path: "M25 80 L40 64", x: 40, y: 64 },
          hub: { path: "M51 20 L51 41", x: 51, y: 41 },
          bacteria: { path: "M75 80 L78 47", x: 78, y: 47 },
        };

  return (
    <svg className="pointer-events-none absolute inset-0 z-10 h-full w-full" viewBox="0 0 100 100" aria-hidden>
      <defs>
        <marker id="arrow-perfusion" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#2D6CB0" />
        </marker>
        <marker id="arrow-hub" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#16767B" />
        </marker>
        <marker id="arrow-bacteria" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#C0552E" />
        </marker>
      </defs>
      <path d={targets.perfusion.path} fill="none" stroke="#2D6CB0" strokeWidth="1.4" markerEnd="url(#arrow-perfusion)" />
      <path d={targets.hub.path} fill="none" stroke="#16767B" strokeWidth="1.4" markerEnd="url(#arrow-hub)" />
      <path d={targets.bacteria.path} fill="none" stroke="#C0552E" strokeWidth="1.4" markerEnd="url(#arrow-bacteria)" />
      <circle cx={targets.perfusion.x} cy={targets.perfusion.y} r="1.8" fill="#2D6CB0" />
      <circle cx={targets.hub.x} cy={targets.hub.y} r="1.8" fill="#16767B" />
      <circle cx={targets.bacteria.x} cy={targets.bacteria.y} r="1.8" fill="#C0552E" />
    </svg>
  );
}

function TopdownSections() {
  return (
    <>
      <div className="pointer-events-none absolute inset-y-[12%] left-[35%] z-10 border-l-2 border-dashed border-perfusion" />
      <div className="pointer-events-none absolute inset-y-[12%] right-[35%] z-10 border-l-2 border-dashed border-bacteria" />
      <div className="absolute left-[6%] top-[8%] z-20 rounded-full border border-perfusion bg-perfusion-soft px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-perfusion shadow-sm">
        Perfusion chamber
      </div>
      <div className="absolute left-1/2 top-[8%] z-20 -translate-x-1/2 rounded-full border border-hub bg-hub-soft px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-hub shadow-sm">
        Drug hub
      </div>
      <div className="absolute right-[6%] top-[8%] z-20 rounded-full border border-bacteria bg-bacteria-soft px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-bacteria shadow-sm">
        Bacteria chamber
      </div>
    </>
  );
}

export default function Slide04() {
  return (
    <div className="grid h-full grid-rows-[auto_auto_1fr] gap-6">
      <div>
        <p className="eyebrow text-brand">Design Work</p>
        <h2 className="mt-2 font-display text-[clamp(34px,3.6vw,52px)] leading-tight">
          Three chambers, two membranes: <span className="text-brand">arranged radially</span>.
        </h2>
      </div>

      {/* Chamber cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {chambers.map((c) => (
          <div key={c.key} className={`card ${c.accent} p-5`}>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
              <span className={`${c.chip} whitespace-nowrap rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em]`}>
                {c.label}
              </span>
              <span className="font-serif text-[12px] italic text-ink-muted">{c.role}</span>
            </div>
            <p className="font-serif text-[15px] leading-snug text-ink-soft">{c.body}</p>
          </div>
        ))}
      </div>

      {/* Two CAD views */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Plate
          alt="Top-down view of the DRD-3 final assembly"
          sizes="(max-width: 768px) 100vw, 50vw"
          tone="graph"
          padding="snug"
          figureNumber="04A"
          caption="Top-down, final assembly"
          meta="full assembly · non-section"
        >
          <ExpandableImage
            src="/images/final/assembly_topdown.jpg"
            alt="Top-down view of the DRD-3 final assembly"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
            figureNumber="04A"
            caption="Top-down, final assembly"
            meta="full assembly · non-section"
          />
          <TopdownSections />
        </Plate>
        <Plate
          alt="Top-down section of the DRD-3 final assembly, showing the three chambers and both membrane cartridges"
          sizes="(max-width: 768px) 100vw, 50vw"
          tone="graph"
          padding="snug"
          figureNumber="04B"
          caption="Top-down section, final assembly"
          meta="3 chambers · 2 cartridges · annotated"
        >
          <ExpandableImage
            src="/images/final/assembly_topdown_section.jpg"
            alt="Top-down section of the DRD-3 final assembly, showing the three chambers and both membrane cartridges"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
            figureNumber="04B"
            caption="Top-down section, final assembly"
            meta="3 chambers · 2 cartridges · annotated"
          />
          <ChamberLeaders />
          <ChamberLabel
            label="Perfusion chamber"
            color="perfusion"
            className="bottom-[8%] left-[4%]"
          />
          <ChamberLabel
            label="Drug hub"
            color="hub"
            className="left-1/2 top-[5%] -translate-x-1/2"
          />
          <ChamberLabel
            label="Bacteria chamber"
            color="bacteria"
            className="bottom-[8%] right-[4%]"
          />
        </Plate>
      </div>

    </div>
  );
}
