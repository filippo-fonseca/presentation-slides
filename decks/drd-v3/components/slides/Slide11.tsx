import SeptumPort from "@/components/schematics/SeptumPort";
import Plate from "@/components/ui/Plate";

const changes = [
  {
    title: "One port, not two.",
    body: "It's a sealed culture, not a flow-through. A second port has no job here, so it's removed.",
  },
  {
    title: "Self-sealing septum for access.",
    body: "Inoculate and CFU-sample with a needle while the compartment stays closed and sterile. Two viable paths: a swabbable luer valve (buy the proven part, zero new geometry) or an integral septum well built into the puck.",
  },
  {
    title: "Bacteria-blocking membrane.",
    body: "The bacteria-facing membrane is a sacrificial 0.2 µm microfilter: it passes the drug freely but physically blocks S. aureus (~0.5–1 µm) from migrating toward the transport membrane. This is the membrane that's allowed to foul.",
  },
  {
    title: "Optional optical window.",
    body: "A swappable face plate can carry a borosilicate window for biofilm imaging when wanted. Committed to nothing now, ready later.",
  },
];

export default function Slide11() {
  return (
    <div className="grid h-full grid-rows-[auto_auto_1fr] gap-5">
      <div>
        <p className="eyebrow text-bacteria">Design Work</p>
        <h2 className="mt-2 font-display text-[clamp(32px,3.4vw,50px)] leading-tight">
          The bacteria satellite: <span className="text-bacteria">isolated, sealed, sampled</span>.
        </h2>
      </div>

      <p className="max-w-[80ch] font-serif text-[clamp(15px,1.3vw,18px)] leading-snug text-ink-soft">
        In the current CAD, the bacteria satellite is built on the perfusion satellite's body; the <span className="italic">shared chassis</span> is deliberate. A few targeted changes specialize it for a sealed culture.
      </p>

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 grid grid-cols-1 gap-3 md:col-span-6">
          {changes.map((c, i) => (
            <div key={i} className="card accent-bacteria p-4">
              <p className="font-serif text-[15.5px] font-semibold text-ink">{c.title}</p>
              <p className="mt-1 font-serif text-[14px] leading-snug text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="col-span-12 grid grid-rows-2 gap-4 md:col-span-6">
          <Plate
            src="/images/satellite/bacteria_satellite.jpg"
            alt="Bacteria satellite, sealed culture compartment"
            sizes="(max-width: 768px) 100vw, 40vw"
            tone="paper"
            padding="snug"
            figureNumber="11A"
            caption="Bacteria satellite"
            meta="shared chassis · single port"
          />
          <Plate
            tone="graph"
            padding="snug"
            figureNumber="11B"
            caption="Septum port"
            meta="side section · schematic"
          >
            <SeptumPort className="h-full w-full" />
          </Plate>
        </div>
      </div>
    </div>
  );
}
