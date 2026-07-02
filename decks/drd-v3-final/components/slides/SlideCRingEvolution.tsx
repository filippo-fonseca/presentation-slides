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

function Arrow() {
  return (
    <svg viewBox="0 0 60 40" className="h-7 w-12 rotate-90 sm:rotate-0" aria-hidden>
      <line x1="4" y1="20" x2="48" y2="20" stroke="#16767B" strokeWidth="1.4" />
      <polygon points="48,14 58,20 48,26" fill="#16767B" />
    </svg>
  );
}

function Tag({ children, emphasis }: { children: React.ReactNode; emphasis?: boolean }) {
  return (
    <span
      className={
        emphasis
          ? "rounded-full bg-brand-fade px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand ring-1 ring-brand-soft"
          : "rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted ring-1 ring-line"
      }
    >
      {children}
    </span>
  );
}

function RingPlate({
  src,
  alt,
  caption,
  meta,
  emphasis,
}: {
  src: string;
  alt: string;
  caption: string;
  meta: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`min-h-0 rounded-[10px] ${
        emphasis ? "ring-2 ring-brand-soft" : "opacity-80 ring-1 ring-line"
      }`}
    >
      <Plate
        src={src}
        alt={alt}
        tone={emphasis ? "brand" : "graph"}
        padding="snug"
        caption={caption}
        meta={meta}
        sizes="(max-width: 768px) 100vw, 24vw"
      />
    </div>
  );
}

export default function SlideCRingEvolution() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto] gap-5">
      <div>
        <p className="eyebrow text-brand">Design Evolution</p>
        <h2 className="mt-2 font-display text-[clamp(30px,3.2vw,46px)] leading-tight">
          C-rings that <span className="text-brand">carry the device</span>.
        </h2>
        <p className="mt-2 max-w-[74ch] font-serif text-[clamp(14px,1.15vw,16.5px)] leading-snug text-ink-soft">
          June 10 wrapped each satellite-hub joint in two identical, legless halves: symmetric, and with nothing to stand on. The final pair breaks that symmetry. The top ring stays a clean arc, and the bottom ring grows integral legs.
        </p>
      </div>

      {/* Paired top/bottom comparison: old symmetric pair vs. new asymmetric pair */}
      <div className="grid min-h-0 grid-cols-1 items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr]">
        {/* BEFORE: two identical legless halves */}
        <figure className="flex min-h-0 flex-col gap-2">
          <figcaption>
            <Tag>June 10 · symmetric pair</Tag>
          </figcaption>
          <div className="grid min-h-0 flex-1 grid-rows-2 gap-3">
            <RingPlate
              src="/images/cring/cring_iso.png"
              alt="June 10 C-ring, isometric: a legless symmetric half used for the top position"
              caption="Top ring"
              meta="no legs"
            />
            <RingPlate
              src="/images/cring/cring_alt.jpg"
              alt="June 10 C-ring, second view: an identical legless half used for the bottom position"
              caption="Bottom ring"
              meta="no legs"
            />
          </div>
        </figure>

        {/* Connector */}
        <div className="flex items-center justify-center">
          <Arrow />
        </div>

        {/* AFTER: asymmetric pair, only the bottom carries legs */}
        <figure className="flex min-h-0 flex-col gap-2">
          <figcaption>
            <Tag emphasis>July · final</Tag>
          </figcaption>
          <div className="grid min-h-0 flex-1 grid-rows-2 gap-3">
            <RingPlate
              src="/images/final/cring_top.jpg"
              alt="Final top C-ring, a clean arc with no legs"
              caption="Top ring"
              meta="clean arc, no legs"
              emphasis
            />
            <RingPlate
              src="/images/final/cring_bottom_legs.jpg"
              alt="Final bottom C-ring with integral supporting legs and a side latch"
              caption="Bottom ring"
              meta="integral legs + latch"
              emphasis
            />
          </div>
        </figure>
      </div>

      {/* What the asymmetry buys */}
      <div className="grid grid-cols-3 gap-3">
        {wins.map((w) => (
          <div key={w.key} className="card accent-brand p-4">
            <p className="eyebrow mb-1 text-brand">{w.label}</p>
            <p className="font-serif text-[13px] leading-snug text-ink-soft">{w.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
