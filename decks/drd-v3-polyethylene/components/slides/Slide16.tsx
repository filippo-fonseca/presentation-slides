import Image from "next/image";
import { DrdMark } from "@/components/ui/Logos";

export default function Slide16() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
      {/* Faded hero in background */}
      <Image
        src="/images/full/hero_full_assembly.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-contain opacity-[0.08]"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center">
        <span className="text-brand"><DrdMark size={36} /></span>
        <h1 className="mt-8 font-display text-[clamp(56px,7vw,108px)] leading-[1.02]">
          Thank&nbsp;you. <span className="text-brand italic">More to come</span>.
        </h1>

        <div className="mt-12 h-px w-24 bg-brand" />
        <div className="mt-6 flex flex-col items-center gap-2">
          <Image
            src="/images/logos/filippo.png"
            alt="Filippo Fonseca"
            width={800}
            height={800}
            className="size-14 rounded-full border border-line object-cover shadow-sm"
          />
          <p className="mt-1 font-serif text-[17px] font-semibold text-ink">Filippo Fonseca</p>
          <p className="text-[13px] text-ink-soft">Yale Mechanical Engineering & EECS · Research Engineer | Summer Intern</p>
          <p className="text-[13px] text-ink-muted">ffonseca1@mgh.harvard.edu</p>
        </div>

        <div className="mt-10 flex items-center gap-6">
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/logos/hol.png"
              alt="Harris Orthopaedics Laboratory"
              width={200}
              height={200}
              className="size-7 rounded-full object-contain opacity-85"
            />
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">Harris Orthopaedics Laboratory</span>
          </div>
          <span className="text-line-strong">·</span>
          <Image
            src="/images/logos/hms.png"
            alt="Harvard Medical School"
            width={986}
            height={323}
            className="h-7 w-auto opacity-85"
          />
          <span className="text-line-strong">·</span>
          <Image
            src="/images/logos/mgh.png"
            alt="Massachusetts General Hospital"
            width={4227}
            height={477}
            className="h-5 w-auto opacity-85"
          />
        </div>
      </div>
    </div>
  );
}
