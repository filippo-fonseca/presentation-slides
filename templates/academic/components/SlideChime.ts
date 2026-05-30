// Slide transition pop. Uses the file at /audio/pop.mp3.
//
// A pool of pre-decoded HTMLAudioElement clones is kept so back-to-back
// presses don't truncate the previous play. Browsers require a user gesture
// before audio plays — an arrow-key keypress counts, so the first slide
// change after page load triggers the unlock.

const POOL_SIZE = 4;
let pool: HTMLAudioElement[] | null = null;
let nextIdx = 0;

function ensurePool(): HTMLAudioElement[] | null {
  if (typeof window === "undefined") return null;
  if (pool) return pool;
  pool = Array.from({ length: POOL_SIZE }, () => {
    const a = new Audio("/audio/pop.mp3");
    a.preload = "auto";
    a.volume = 0.55;
    return a;
  });
  return pool;
}

export function playPop(opts: { variant?: "forward" | "back" } = {}) {
  const p = ensurePool();
  if (!p) return;
  const a = p[nextIdx];
  nextIdx = (nextIdx + 1) % p.length;
  // Tiny pitch hint via playbackRate: slightly higher on forward, lower on
  // back. Cute, not jarring.
  a.playbackRate = opts.variant === "back" ? 0.86 : 1.08;
  try {
    a.currentTime = 0;
  } catch {
    // Some browsers throw if seek happens before metadata; ignore.
  }
  a.play().catch(() => {
    // Autoplay blocked or transient — silent.
  });
}
