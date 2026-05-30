// Empirical findings from the v2 print that arrived May 29, 2026.

const cards = [
  {
    eyebrow: "Current spec",
    chip: "chip-perfusion",
    accent: "accent-perfusion",
    title: "0.1 mm on every press-fit interface",
    body: (
      <>
        Across the DRD-3 CAD, every press-fit interface is drawn at a nominal <span className="font-mono text-[13px] text-ink">0.1&thinsp;mm</span> diametral clearance. Same number on the cartridge lid-to-base, and on the satellite holes that receive the cartridge.
      </>
    ),
  },
  {
    eyebrow: "What v2 told us",
    chip: "chip-bacteria",
    accent: "accent-bacteria",
    title: "0.1 mm is below the transition-fit floor",
    body: (
      <>
        v2 came in Friday, May&nbsp;29. Parts seat but do not release without disassembly force, especially the <span className="italic">cartridge sliding into the satellite holes</span>. SLA surface roughness plus resin shrinkage eats the 0.1&thinsp;mm budget — what's drawn as transition behaves as interference.
      </>
    ),
  },
  {
    eyebrow: "What v2 told us",
    chip: "chip-bacteria",
    accent: "accent-bacteria",
    title: "Teeth are too small, and there's only one",
    body: (
      <>
        v2&apos;s tooth profile is so small it's barely tactile, and the lid is held by a <span className="font-semibold text-ink">single</span> latch. Engagement is uncertain, removal needs a pry. Not enough material doing too much work.
      </>
    ),
  },
  {
    eyebrow: "Proposed for v3 · before we print",
    chip: "chip-hub",
    accent: "accent-hub",
    title: "Open clearance slightly + bigger teeth + a second latch",
    body: (
      <>
        Open the cartridge-to-satellite holes and the lid-to-base interface to a nominal <span className="font-mono text-[13px] text-ink">0.15&thinsp;mm</span> (test variant at <span className="font-mono text-[13px] text-ink">0.20&thinsp;mm</span>). Grow the tooth profile to be visibly substantial. Split duty across <span className="font-semibold text-ink">two latches</span> per cartridge. <span className="italic">Worth confirming before Protolabs.</span>
      </>
    ),
  },
];

export default function SlideV2Findings() {
  return (
    <div className="grid h-full grid-rows-[auto_auto_1fr_auto] gap-5">
      <div>
        <p className="eyebrow text-brand">Validation · Iteration</p>
        <h2 className="mt-2 font-display text-[clamp(28px,3vw,42px)] leading-tight">
          Currently <span className="font-mono text-[0.82em]">0.1&thinsp;mm</span> everywhere: <span className="text-brand">v2 says open it up</span>.
        </h2>
      </div>

      <p className="max-w-[84ch] font-serif text-[clamp(15px,1.25vw,18px)] leading-snug text-ink-soft">
        Today the DRD-3 CAD uses a uniform <span className="font-mono text-[14px] text-ink">0.1&thinsp;mm</span> clearance on every press-fit interface, including the cartridge body and the satellite holes that receive it. v2&apos;s print on Friday says that's a little too tight. The geometry is right; the clearance and the tooth size are the parameters worth re-confirming with you before we send v3 to Protolabs.
      </p>

      {/* Four findings cards */}
      <div className="grid min-h-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <div key={`${c.eyebrow}-${i}`} className={`card ${c.accent} flex flex-col p-4`}>
            <div className="mb-2.5">
              <span className={`${c.chip} rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]`}>
                {c.eyebrow}
              </span>
            </div>
            <p className="font-display text-[clamp(15px,1.2vw,19px)] leading-snug text-ink">{c.title}</p>
            <p className="mt-2.5 font-serif text-[13.5px] leading-snug text-ink-soft">{c.body}</p>
          </div>
        ))}
      </div>

      {/* Closing pull line */}
      <div className="card-quote px-5 py-3">
        <p className="font-serif text-[clamp(14.5px,1.2vw,17px)] leading-snug text-ink">
          This is exactly what the modular cartridge is built for. <span className="font-semibold">Reprint the cartridge only, drop it in, test the seat.</span> Parameters change; the architecture doesn&apos;t.
        </p>
      </div>
    </div>
  );
}
