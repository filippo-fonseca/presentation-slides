import Mark from "@/components/ui/Mark";

// Example title cover — a bare-shell slide (no header/footer bands).
// Replace the headline, kicker, attribution, and date with the deck's content.

export default function SlideCover() {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-[1200px] flex-col gap-4 px-2 py-4">
      {/* Optional top affiliation row.  Add Image components here if you want
          institutional marks alongside the date.  Comment out otherwise. */}
      <div className="flex shrink-0 items-center justify-between border-b border-line pb-4">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-soft">
          Affiliation · Series
        </span>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-muted">
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>

      {/* Title block */}
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-3 text-center">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-muted">
          Subtitle eyebrow · meeting context
        </p>

        <h1 className="font-display text-[clamp(36px,4vw,60px)] font-bold leading-[1.04] text-ink">
          The <span className="italic">Title</span>
        </h1>

        <div className="h-px w-20 bg-brand" />

        <p className="max-w-[58ch] font-italic-display text-[clamp(15px,1.25vw,20px)] leading-[1.35] text-ink-soft">
          A one-line italic subtitle that frames what the audience is about to see.
        </p>

        <span className="mt-6 text-brand">
          <Mark size={36} />
        </span>
      </div>

      {/* Author / attribution footer */}
      <div className="grid shrink-0 grid-cols-12 gap-6 border-t border-line pt-4">
        <div className="col-span-12 md:col-span-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
            Presented by
          </p>
          <p className="mt-1.5 font-serif text-[16px] text-ink">
            <span className="font-semibold">Speaker Name</span>
            <span className="text-ink-muted"> · Role · Affiliation</span>
          </p>
          <p className="font-mono text-[12px] text-ink-muted">speaker@example.com</p>
        </div>
        <div className="col-span-12 md:col-span-6 md:text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
            Prepared for
          </p>
          <p className="mt-1.5 font-serif text-[16px] text-ink">
            <span className="font-semibold">Audience Name</span>
          </p>
          <p className="font-serif text-[13px] text-ink-soft">Audience affiliation</p>
        </div>
      </div>
    </div>
  );
}
