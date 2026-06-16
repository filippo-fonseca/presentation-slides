type Props = {
  visible: boolean;
};

const HINTS: Array<{ keys: string[]; label: string }> = [
  { keys: ["→", "Space"], label: "Next" },
  { keys: ["←"], label: "Back" },
  { keys: ["Esc"], label: "Close menu" },
  { keys: ["?"], label: "Toggle hints" },
];

export default function KeyHints({ visible }: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed bottom-20 right-6 z-20 flex flex-col items-end gap-1.5 transition-opacity duration-700 sm:right-10 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {HINTS.map((h) => (
        <div
          key={h.label}
          className="neu-raised-sm flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/75"
        >
          {h.keys.map((k, i) => (
            <kbd
              key={i}
              className="rounded border border-foreground/15 bg-foreground/5 px-1.5 py-0.5 text-[10px] font-medium text-foreground/85"
            >
              {k}
            </kbd>
          ))}
          <span className="text-foreground/60">{h.label}</span>
        </div>
      ))}
    </div>
  );
}
