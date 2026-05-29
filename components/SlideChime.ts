// A tiny Web Audio chime for slide transitions.
// Cute "bloop" — a quick rising pitch on forward, falling on back, with a
// soft second harmonic stacked underneath for warmth. Synthesized on the
// fly so there is no file fetch, no autoplay surprise, no asset to ship.
//
// Lazy AudioContext on first play (browsers gate audio until a user gesture
// happens — an arrow-key counts).

let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (ctx && ctx.state !== "closed") return ctx;
  const Ctor =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  ctx = new Ctor();
  return ctx;
}

/** A single "bloop" voice — sine + soft octave-up partial, pitch-slide. */
function bloop(
  c: AudioContext,
  now: number,
  startHz: number,
  endHz: number,
  duration: number,
  level: number,
) {
  // Fundamental (sine)
  const osc = c.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(startHz, now);
  osc.frequency.exponentialRampToValueAtTime(endHz, now + duration * 0.55);

  // Octave-up partial (triangle) for a touch of bell shimmer
  const partial = c.createOscillator();
  partial.type = "triangle";
  partial.frequency.setValueAtTime(startHz * 2, now);
  partial.frequency.exponentialRampToValueAtTime(endHz * 2, now + duration * 0.55);

  const partialGain = c.createGain();
  partialGain.gain.setValueAtTime(level * 0.22, now);

  // Envelope: fast attack, gentle decay, bouncy tail
  const gain = c.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(level, now + 0.008);
  gain.gain.exponentialRampToValueAtTime(level * 0.35, now + duration * 0.45);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  // Lowpass to soften any harshness on small laptop speakers
  const lp = c.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.setValueAtTime(3200, now);
  lp.Q.value = 0.6;

  osc.connect(gain);
  partial.connect(partialGain);
  partialGain.connect(gain);
  gain.connect(lp);
  lp.connect(c.destination);

  osc.start(now);
  partial.start(now);
  osc.stop(now + duration + 0.02);
  partial.stop(now + duration + 0.02);
}

export function playPop(opts: { variant?: "forward" | "back" } = {}) {
  const c = getCtx();
  if (!c) return;
  if (c.state === "suspended") c.resume().catch(() => {});

  const now = c.currentTime;
  const isForward = opts.variant !== "back";

  // Forward: cheerful upward bloop  G5 (784 Hz) → C6 (1047 Hz)
  // Back:    softer downward bloop  E5 (659 Hz) → G4 (392 Hz)
  if (isForward) {
    bloop(c, now, 784, 1047, 0.18, 0.085);
  } else {
    bloop(c, now, 659, 392, 0.22, 0.075);
  }
}
