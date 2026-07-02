import Compare from "@/components/ui/Compare";
import Plate from "@/components/ui/Plate";

const wins = [
  {
    key: "standing",
    label: "Free-standing",
    body: "The bottom ring grows integral feet, so the device stands on the bench on its own. No cradle, no propping.",
  },
  {
    key: "structure",
    label: "Sturdier structure",
    body: "Splitting the roles gives a cleaner load path: the top arc holds the joint, the bottom ring holds the whole device.",
  },
  {
    key: "material",
    label: "Less material",
    body: "The top ring drops its legs entirely, so the asymmetric pair uses less material than two identical legged halves would.",
  },
] as const;

export default function SlideCRingEvolution() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-6">
      <div>
        <p className="eyebrow text-brand">Design Evolution</p>
        <h2 className="mt-2 font-display text-[clamp(32px,3.4vw,50px)] leading-tight">
          C-rings that <span className="text-brand">carry the device</span>.
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 flex flex-col gap-5 md:col-span-7">
          <p className="font-serif text-[clamp(15px,1.3vw,18px)] leading-snug text-ink-soft">
            June 10 wrapped each satellite-hub joint in <span className="font-semibold text-ink">two identical C-ring halves</span>. It was symmetric and it sealed, but the device could not stand on its own. The final design breaks that symmetry: the <span className="font-semibold text-ink">top ring stays a clean arc</span> with no legs, while the <span className="font-semibold text-ink">bottom ring carries integral supporting legs</span>.
          </p>

          <Compare
            before={{
              src: "/images/cring/cring_iso.png",
              alt: "June 10 C-ring wrapper, isometric: one of two identical symmetric halves with no legs",
              tone: "graph",
              figureNumber: "E1A",
              caption: "Symmetric pair, no feet",
              meta: "two identical halves",
            }}
            after={{
              src: "/images/final/cring_bottom_legs.jpg",
              alt: "Final bottom C-ring with integral supporting legs and side latch",
              tone: "brand",
              figureNumber: "E1B",
              caption: "Bottom ring, legs + latch",
              meta: "stands on its own feet",
            }}
            height="h-[320px]"
          />
        </div>

        <div className="col-span-12 flex flex-col gap-4 md:col-span-5">
          <Plate
            src="/images/final/cring_top.jpg"
            alt="Final top C-ring, a clean arc with no legs"
            sizes="(max-width: 768px) 100vw, 34vw"
            tone="paper"
            padding="snug"
            figureNumber="E1C"
            caption="Top ring, a clean arc"
            meta="no legs · the other half of the pair"
            className="h-[188px]"
          />

          <div className="grid grid-cols-1 gap-3">
            {wins.map((w) => (
              <div key={w.key} className="card accent-brand p-4">
                <p className="eyebrow mb-1 text-brand">{w.label}</p>
                <p className="font-serif text-[13.5px] leading-snug text-ink-soft">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
