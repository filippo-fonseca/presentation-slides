import Image from "next/image";
import Plate from "@/components/ui/Plate";

export default function Slide01() {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-[1200px] flex-col gap-4 px-2 py-4">
      {/* Top affiliation row */}
      <div className="flex shrink-0 items-center justify-between border-b border-line pb-4">
        <div className="flex items-center gap-6">
          <Image
            src="/images/logos/mgh.png"
            alt="Massachusetts General Hospital"
            width={4227}
            height={477}
            className="h-7 w-auto opacity-90"
            priority
          />
          <span className="text-[11px] text-line-strong">·</span>
          <Image
            src="/images/logos/hms.png"
            alt="Harvard Medical School"
            width={986}
            height={323}
            className="h-9 w-auto opacity-90"
            priority
          />
          <span className="text-[11px] text-line-strong">·</span>
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/logos/hol.png"
              alt="Harris Orthopaedics Laboratory"
              width={200}
              height={200}
              className="h-9 w-9 rounded-full object-contain opacity-90"
              priority
            />
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              Harris Orthopaedics Laboratory
            </span>
          </div>
        </div>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-muted">
          {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </span>
      </div>

      {/* Title block — centered, restrained, scaled to fit */}
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-3 text-center">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-muted">
          Design Review · Working Document · No. 03
        </p>

        <h1 className="font-display text-[clamp(36px,4vw,60px)] font-bold leading-[1.04] text-ink">
          The <span className="italic">DRD-3</span>
        </h1>

        <div className="h-px w-20 bg-brand" />

        <p className="max-w-[58ch] font-italic-display text-[clamp(15px,1.25vw,20px)] leading-[1.35] text-ink-soft">
          A three-chamber dynamic release device for simultaneous drug-release kinetics and <span className="not-italic">in&nbsp;situ</span> infection challenge.
        </p>

        {/* Hero plate — sized to leave breathing room */}
        <div className="w-[clamp(260px,28vw,380px)]">
          <Plate
            src="/images/full/hero_full_assembly.jpg"
            alt="The DRD-3 full assembly"
            sizes="380px"
            priority
            tone="brand"
            padding="snug"
            figureNumber="01"
            caption="The DRD-3, full assembly"
            meta="Three-quarter view"
            className="aspect-[5/4]"
          />
        </div>
      </div>

      {/* Author / attribution footer */}
      <div className="grid shrink-0 grid-cols-12 gap-6 border-t border-line pt-4">
        <div className="col-span-12 md:col-span-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">Presented by</p>
          <div className="mt-1.5 flex items-center gap-3">
            <Image
              src="/images/logos/filippo.png"
              alt="Filippo Fonseca"
              width={800}
              height={800}
              className="size-10 shrink-0 rounded-full border border-line object-cover shadow-sm"
            />
            <div className="min-w-0">
              <p className="font-serif text-[16px] text-ink">
                <span className="font-semibold">Filippo Fonseca</span>
                <span className="text-ink-muted"> · Research Engineer | Summer Intern</span>
              </p>
              <p className="font-serif text-[13px] leading-snug text-ink-soft">
                Yale University · Mechanical Engineering (ABET)
                <br />
                and Electrical Engineering &amp; Computer Science
              </p>
              <p className="font-mono text-[12px] text-ink-muted">ffonseca1@mgh.harvard.edu</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 md:text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">Prepared for</p>
          <p className="mt-1.5 font-serif text-[16px] text-ink">
            <span className="font-semibold">Dr. Mehmet D. Aşık</span>
          </p>
          <p className="font-serif text-[13px] text-ink-soft">
            Harris Orthopaedics Laboratory · Harvard Medical School · Massachusetts General Hospital
          </p>
        </div>
      </div>
    </div>
  );
}
