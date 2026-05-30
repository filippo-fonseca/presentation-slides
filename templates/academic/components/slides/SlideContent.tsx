// Example content slide — eyebrow + display headline + a 3-card grid.
// Use `accent-1` / `accent-2` / `accent-3` (defined in globals.css) to color
// the left-border strip of each card.  Match the chip color to the accent for
// instant category recognition across the deck.

const cards = [
  {
    label: "First category",
    role: "what it is",
    accent: "accent-1",
    chip: "chip-accent-1",
    body: "One sentence that explains this category in plain language. Keep it short and active.",
  },
  {
    label: "Second category",
    role: "what it is",
    accent: "accent-2",
    chip: "chip-accent-2",
    body: "Each card should land in 1–2 lines. If you need more, push it to the speaker notes.",
  },
  {
    label: "Third category",
    role: "what it is",
    accent: "accent-3",
    chip: "chip-accent-3",
    body: "Three cards is the sweet spot. Two reads thin; four crowds.",
  },
] as const;

export default function SlideContent() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-6">
      <div>
        <p className="eyebrow text-brand">Section Label</p>
        <h2 className="mt-2 font-display text-[clamp(34px,3.6vw,52px)] leading-tight">
          The headline carries the argument:{" "}
          <span className="text-brand">say the thing</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.label} className={`card ${c.accent} p-5`}>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
              <span
                className={`${c.chip} whitespace-nowrap rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em]`}
              >
                {c.label}
              </span>
              <span className="font-serif text-[12px] italic text-ink-muted">{c.role}</span>
            </div>
            <p className="font-serif text-[15px] leading-snug text-ink-soft">{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
