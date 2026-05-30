import Mark from "@/components/ui/Mark";

// Example closing cover — bare shell, centered.  Pair the headline with a
// one-line italic afterthought; the brand mark sits below.

export default function SlideClose() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
      <div className="relative z-10 flex flex-col items-center">
        <span className="text-brand">
          <Mark size={36} />
        </span>
        <h1 className="mt-8 font-display text-[clamp(56px,7vw,108px)] leading-[1.02]">
          Thank&nbsp;you.{" "}
          <span className="text-brand italic">Questions welcome</span>.
        </h1>
        <p className="mt-6 max-w-[60ch] font-italic-display text-[clamp(20px,1.7vw,28px)] text-ink-soft">
          A one-line closing thought that lands the argument.
        </p>

        <div className="mt-12 h-px w-24 bg-brand" />
        <p className="mt-6 font-mono text-[12px] text-ink-muted">
          speaker@example.com
        </p>
      </div>
    </div>
  );
}
