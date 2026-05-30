// Example image-grid slide — uses the Plate component to render figures
// with corner registration ticks and a caption strip.  Drop image files into
// /public/images/ and update the `src` paths below.

import Plate from "@/components/ui/Plate";

export default function SlidePlates() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-6">
      <div>
        <p className="eyebrow text-brand">Section Label</p>
        <h2 className="mt-2 font-display text-[clamp(34px,3.6vw,52px)] leading-tight">
          A headline that <span className="text-brand">frames the figures</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Plate
          src="/images/placeholder-1.jpg"
          alt="Replace with a descriptive alt text"
          sizes="(max-width: 768px) 100vw, 50vw"
          tone="paper"
          padding="snug"
          figureNumber="01"
          caption="Caption goes here"
          meta="Optional meta"
        />
        <Plate
          src="/images/placeholder-2.jpg"
          alt="Replace with a descriptive alt text"
          sizes="(max-width: 768px) 100vw, 50vw"
          tone="graph"
          padding="snug"
          figureNumber="02"
          caption="Use 'graph' tone for engineering drawings"
          meta="Use 'brand' tone for hero figures"
        />
      </div>
    </div>
  );
}
