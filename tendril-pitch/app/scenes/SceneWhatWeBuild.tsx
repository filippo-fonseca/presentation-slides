"use client";

import type { SceneProps } from "../DeckClient";
import Stage from "../components/Stage";

// Scene 7 — What we build. A four-node agentic loop (perceive → remember →
// decide → act), with token-pulse motion and a feedback edge that closes the loop.

const NODES = [
  { id: "perceive", label: "Perceive",  detail: "Per-plant: every weed, pest, lesion. Whole-field: a live 3D map via vSLAM, cross-validated by the swarm." },
  { id: "remember", label: "Remember",  detail: "A persistent model of where problems keep coming back." },
  { id: "decide",   label: "Decide",    detail: "Per-plant action, and pre-empt the known hotspots." },
  { id: "act",      label: "Act",       detail: "The right modular tool, then feed the result back in." },
];

const POSITIONS = [
  { cx: 130, cy: 200 },
  { cx: 380, cy: 200 },
  { cx: 630, cy: 200 },
  { cx: 880, cy: 200 },
];

const PILL_W = 170;
const PILL_H = 62;

export default function SceneWhatWeBuild({ beat }: SceneProps) {
  const flowActive = beat >= 3;
  const pillRight = (cx: number) => cx + PILL_W / 2;
  const pillLeft  = (cx: number) => cx - PILL_W / 2;

  return (
    <Stage eyebrow="06 · What we build">
      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-5">
        <div className="text-center">
          <h2 className="text-balance text-[clamp(1.85rem,3.8vw,3rem)] font-medium leading-[1.05] tracking-[-0.03em]">
            A field operating system:{" "}
            <span
              className="italic font-normal text-accent"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              an agentic loop that never stops.
            </span>
          </h2>
        </div>

        <div className="neu-raised relative w-full rounded-2xl p-4 sm:p-5">
          <svg viewBox="0 0 1010 380" className="h-auto w-full" role="img" aria-label="Agentic loop: perceive, remember, decide, act, feeding back to perceive.">
            <defs>
              <linearGradient id="wwb-edge-lit" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%"   stopColor="rgba(229, 96, 44, 0.8)" />
                <stop offset="100%" stopColor="rgba(229, 96, 44, 0.35)" />
              </linearGradient>
              <radialGradient id="wwb-glow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%"   stopColor="rgba(229, 96, 44, 0.55)" />
                <stop offset="100%" stopColor="rgba(229, 96, 44, 0)" />
              </radialGradient>
              <filter id="wwb-soft" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.2" />
              </filter>
              <marker id="wwb-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(229, 96, 44,0.85)" />
              </marker>
            </defs>

            {/* Forward edges */}
            <g fill="none" strokeLinecap="round">
              {POSITIONS.slice(0, 3).map((p, i) => {
                const next = POSITIONS[i + 1];
                const lit = beat >= i + 1;
                return (
                  <path
                    key={`fwd-${i}`}
                    d={`M ${pillRight(p.cx)} ${p.cy} L ${pillLeft(next.cx)} ${next.cy}`}
                    stroke={lit ? "url(#wwb-edge-lit)" : "rgba(244,241,234,0.14)"}
                    strokeWidth={lit ? 2 : 1}
                  />
                );
              })}
              {/* Feedback edge: Act → Perceive, dropping below the spine and looping back. */}
              <path
                d={`M ${POSITIONS[3].cx} ${POSITIONS[3].cy + PILL_H / 2} C ${POSITIONS[3].cx} 340, ${POSITIONS[0].cx} 340, ${POSITIONS[0].cx} ${POSITIONS[0].cy + PILL_H / 2}`}
                stroke={flowActive ? "url(#wwb-edge-lit)" : "rgba(244,241,234,0.14)"}
                strokeWidth={flowActive ? 1.8 : 1}
                strokeDasharray={flowActive ? "0" : "4 4"}
                markerEnd={flowActive ? "url(#wwb-arrow)" : undefined}
              />
              <text
                x={(POSITIONS[0].cx + POSITIONS[3].cx) / 2}
                y={355}
                textAnchor="middle"
                fill="rgba(229, 96, 44,0.85)"
                fontSize="10"
                fontFamily="var(--font-geist-mono)"
                style={{ letterSpacing: "0.18em", textTransform: "uppercase" }}
                opacity={flowActive ? 1 : 0}
              >
                result feeds back into the model
              </text>
            </g>

            {/* Token pulse along the spine when the loop closes */}
            {flowActive && (
              <g>
                <circle
                  r="4"
                  fill="rgba(229, 96, 44,1)"
                  filter="url(#wwb-soft)"
                  style={{
                    offsetPath: `path('M ${POSITIONS[0].cx} ${POSITIONS[0].cy} L ${POSITIONS[1].cx} ${POSITIONS[1].cy} L ${POSITIONS[2].cx} ${POSITIONS[2].cy} L ${POSITIONS[3].cx} ${POSITIONS[3].cy}')`,
                    animation: "tokenFlow 2.6s cubic-bezier(0.4,0,0.2,1) infinite",
                  }}
                />
              </g>
            )}

            {/* Nodes */}
            {NODES.map((n, i) => {
              const p = POSITIONS[i];
              const visible = beat >= i;
              return (
                <g key={n.id} opacity={visible ? 1 : 0.2} style={{ transition: "opacity 600ms ease" }}>
                  {visible && (
                    <ellipse cx={p.cx} cy={p.cy} rx={PILL_W / 2 + 14} ry={PILL_H / 2 + 10} fill="url(#wwb-glow)" />
                  )}
                  <rect
                    x={p.cx - PILL_W / 2}
                    y={p.cy - PILL_H / 2}
                    width={PILL_W}
                    height={PILL_H}
                    rx={PILL_H / 2}
                    fill="rgba(10,10,10,0.92)"
                    stroke={visible ? "rgba(229, 96, 44,0.72)" : "rgba(244,241,234,0.16)"}
                    strokeWidth="1.4"
                  />
                  <text
                    x={p.cx}
                    y={p.cy + 5}
                    textAnchor="middle"
                    fill={visible ? "#f4f1ea" : "rgba(244,241,234,0.4)"}
                    fontSize="14"
                    fontFamily="var(--font-hanken-grotesk)"
                    style={{ fontWeight: 500 }}
                  >
                    {n.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Per-beat node detail */}
        <div className="neu-raised-sm mx-auto min-h-[3.25rem] max-w-3xl rounded-xl px-4 py-3 text-center text-[13.5px] leading-snug text-foreground/85">
          {beat <= 3 ? (
            <span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-soft">
                {String(Math.min(beat, 3) + 1).padStart(2, "0")} · {NODES[Math.min(beat, 3)].label}
              </span>
              <span className="ml-2">{NODES[Math.min(beat, 3)].detail}</span>
            </span>
          ) : null}
        </div>

        <p className="mx-auto max-w-[64ch] text-balance text-center text-[14px] italic leading-snug text-accent-soft" style={{ fontFamily: "var(--font-fraunces)" }}>
          Delivered through a coordinated fleet of small, modular robots, plus a live
          field-health dashboard.
        </p>
      </div>
    </Stage>
  );
}
