import Compare from "@/components/ui/Compare";

// Same three-chamber function, far less material. Matched before/after views
// (same viewpoint on each row) so the compactness difference reads instantly.

export default function SlideCompactness() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto] gap-5">
      <div>
        <p className="eyebrow text-brand">Scale</p>
        <h2 className="mt-2 font-display text-[clamp(30px,3.2vw,48px)] leading-tight">
          Same function, <span className="text-brand">far less material</span>.
        </h2>
      </div>

      <div className="my-auto grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Row 1 — section, side */}
        <Compare
          height="h-[160px]"
          before={{
            src: "/images/section/section_side_orings.jpg",
            alt: "June 10 device, side section view",
            figureNumber: "C1·a",
            caption: "Side section",
          }}
          after={{
            src: "/images/final/assembly_section_side.jpg",
            alt: "Final device, side section view",
            figureNumber: "C1·b",
            caption: "Side section",
          }}
        />

        {/* Row 2 — top-down bird's-eye */}
        <Compare
          height="h-[160px]"
          before={{
            src: "/images/full/topdown_birdseye.jpg",
            alt: "June 10 device, top-down bird's-eye view",
            figureNumber: "C2·a",
            caption: "Top-down",
          }}
          after={{
            src: "/images/final/assembly_topdown.jpg",
            alt: "Final device, top-down bird's-eye view",
            figureNumber: "C2·b",
            caption: "Top-down",
          }}
        />

        {/* Row 3 — full device */}
        <Compare
          className="lg:col-span-2 lg:mx-auto lg:w-1/2"
          height="h-[160px]"
          before={{
            src: "/images/full/full_assembly_on_legs.jpg",
            alt: "June 10 full device assembly on legs",
            figureNumber: "C3·a",
            caption: "Full device",
          }}
          after={{
            src: "/images/final/assembly_full.jpg",
            alt: "Final full device assembly",
            figureNumber: "C3·b",
            caption: "Full device",
          }}
        />
      </div>

      <div className="card-quote px-6 py-4">
        <p className="font-serif text-[clamp(15px,1.3vw,19px)] leading-snug text-ink">
          Scaled down across the board: smaller footprint, less material, the same three-chamber function.
        </p>
      </div>
    </div>
  );
}
