// A tiny Web Audio chime used for slide-transition feedback. Synthesized on
// the fly so there is no file fetch, no autoplay surprise, and no asset to
// ship.
//
// Lazily creates an AudioContext on first play because browsers won't allow
// audio until a user gesture has happened (which an arrow-key press counts as).

let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (ctx && ctx.state !== "closed") return ctx;
  const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  ctx = new Ctor();
  return ctx;
}

/** Soft pop — short sine pluck around C5 with quick decay. */
export function playPop(opts: { variant?: "forward" | "back" } = {}) {
  const c = getCtx();
  if (!c) return;
  // Some browsers suspend the context until a gesture; resume if needed.
  if (c.state === "suspended") c.resume().catch(() => {});

  const now = c.currentTime;
  const isForward = opts.variant !== "back";

  // Pitch step: forward = up, back = down. Tiny interval so it stays cute.
  const baseFreq = isForward ? 660 : 520;

  const osc = c.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(baseFreq, now);
  // Quick downward slide for a "pluck" character
  osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.78, now + 0.12);

  const gain = c.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.085, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

  // Very gentle low-pass to keep it from sounding harsh on small speakers.
  const lp = c.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.setValueAtTime(2200, now);
  lp.Q.value = 0.7;

  osc.connect(lp);
  lp.connect(gain);
  gain.connect(c.destination);

  osc.start(now);
  osc.stop(now + 0.22);
}
