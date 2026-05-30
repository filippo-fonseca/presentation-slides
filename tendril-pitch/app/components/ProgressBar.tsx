type Props = {
  sceneIndex: number;
  beat: number;
  totalBeats: number;
  totalScenes: number;
};

export default function ProgressBar({
  sceneIndex,
  beat,
  totalBeats,
  totalScenes,
}: Props) {
  // overall progress = scene block + partial scene progress
  const sceneFraction = (beat + 1) / totalBeats;
  const overall = ((sceneIndex + sceneFraction) / totalScenes) * 100;

  return (
    <div
      className="flex items-center gap-3"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(overall)}
      aria-label="Deck progress"
    >
      <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/55 sm:inline">
        beat {beat + 1}/{totalBeats}
      </span>
      <div className="relative h-[3px] w-40 overflow-hidden rounded-full bg-foreground/10 sm:w-56">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-accent shadow-[0_0_12px_rgba(229, 96, 44,0.5)] transition-[width] duration-500 ease-out"
          style={{ width: `${overall}%` }}
        />
      </div>
    </div>
  );
}
