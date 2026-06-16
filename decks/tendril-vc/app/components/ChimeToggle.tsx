"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type ChimeApi = {
  enabled: boolean;
  play: (variant?: "listen" | "found" | "step" | "pop") => void;
};

type Props = {
  onApi: (api: ChimeApi) => void;
};

// Short audio cues synthesized via Web Audio. No file fetch, no autoplay
// surprises, works fully offline.
//   listen — bright two-tone chime, used for "attention" / interactive beats
//   found  — three-note ascending chime, used for eureka / reveal moments
//   step   — soft low-frequency thump, used for ambient footstep cues
//   pop    — slide-advance "boop" (default)
function playChime(ctx: AudioContext, variant: "listen" | "found" | "step" | "pop") {
  const now = ctx.currentTime;

  if (variant === "pop") {
    // Cute slide-advance "boop": short sine tone with a quick descending
    // sweep and snappy envelope. Low volume so it never competes with voice.
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(820, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.08);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.085, now + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.11);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.13);
    return;
  }

  if (variant === "step") {
    // Two-layer footstep: a bright "click" transient (heel strike) plus a
    // deeper thud body. Louder and more present than a single muffled burst,
    // so it actually reads as walking across a meeting room.
    const dur = 0.22;
    const bufferSize = Math.floor(ctx.sampleRate * dur);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      const t = i / bufferSize;
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 2.2);
    }

    // Low thud body
    const lowSource = ctx.createBufferSource();
    lowSource.buffer = buffer;
    const lowFilter = ctx.createBiquadFilter();
    lowFilter.type = "lowpass";
    lowFilter.frequency.value = 210 + Math.random() * 80;
    lowFilter.Q.value = 1.6;
    const lowGain = ctx.createGain();
    lowGain.gain.setValueAtTime(0.65, now);
    lowGain.gain.exponentialRampToValueAtTime(0.001, now + dur);
    lowSource.connect(lowFilter).connect(lowGain).connect(ctx.destination);
    lowSource.start(now);
    lowSource.stop(now + dur + 0.02);

    // Bright heel-strike transient — short, snappy, sits on top of the thud
    const hiSource = ctx.createBufferSource();
    hiSource.buffer = buffer;
    const hiFilter = ctx.createBiquadFilter();
    hiFilter.type = "bandpass";
    hiFilter.frequency.value = 1100 + Math.random() * 500;
    hiFilter.Q.value = 2;
    const hiGain = ctx.createGain();
    hiGain.gain.setValueAtTime(0.42, now);
    hiGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
    hiSource.connect(hiFilter).connect(hiGain).connect(ctx.destination);
    hiSource.start(now);
    hiSource.stop(now + 0.09);

    return;
  }

  const notes =
    variant === "listen"
      ? [{ f: 880, t: 0, d: 0.16 }, { f: 1320, t: 0.07, d: 0.22 }]
      : [
          { f: 660, t: 0, d: 0.14 },
          { f: 988, t: 0.09, d: 0.18 },
          { f: 1318, t: 0.18, d: 0.28 },
        ];

  for (const n of notes) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = n.f;
    gain.gain.value = 0;
    gain.gain.setValueAtTime(0, now + n.t);
    gain.gain.linearRampToValueAtTime(0.18, now + n.t + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + n.t + n.d);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now + n.t);
    osc.stop(now + n.t + n.d + 0.02);
  }
}

export default function ChimeToggle({ onApi }: Props) {
  const [enabled, setEnabled] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);

  const ensureCtx = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!ctxRef.current) {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AC) return null;
      ctxRef.current = new AC();
    }
    return ctxRef.current;
  }, []);

  const play = useCallback(
    (variant: "listen" | "found" | "step" | "pop" = "listen") => {
      if (!enabled) return;
      const ctx = ensureCtx();
      if (!ctx) return;
      if (ctx.state === "suspended") ctx.resume().catch(() => {});
      try {
        playChime(ctx, variant);
      } catch {
        // never let audio failure break the deck
      }
    },
    [enabled, ensureCtx]
  );

  useEffect(() => {
    onApi({ enabled, play });
  }, [enabled, play, onApi]);

  const toggle = () => {
    setEnabled((v) => {
      const next = !v;
      if (next) {
        // user just enabled — preview a quiet listen chime so they know it works
        const ctx = ensureCtx();
        if (ctx) {
          if (ctx.state === "suspended") ctx.resume().catch(() => {});
          try { playChime(ctx, "listen"); } catch {}
        }
      }
      return next;
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? "Mute deck audio" : "Enable deck audio"}
      className="neu-raised-sm inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/85 transition-colors hover:text-foreground"
      data-no-advance
    >
      <span aria-hidden className="inline-flex">
        {enabled ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M4 9h4l5-4v14l-5-4H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M16 8.5a4.5 4.5 0 010 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M19 6a8 8 0 010 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M4 9h4l5-4v14l-5-4H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M16 9l5 5M21 9l-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        )}
      </span>
      <span>{enabled ? "Audio on" : "Audio off"}</span>
    </button>
  );
}
