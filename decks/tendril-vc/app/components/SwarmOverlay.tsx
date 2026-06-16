"use client";

import { useEffect, useState } from "react";
import styles from "../landing.module.css";

// The agentic core, fed by a diverse swarm of terrestrial input sources.
// Nodes orbit the core on a wide, short ellipse: the "legs" stretch long
// at the sides and shorten top/bottom as the web turns slowly, staying in
// frame the whole way. Data flows in (green), commands flow out (persimmon).
const CX = 320;
const CY = 168;
const RX = 272; // wide reach
const RY = 120; // short reach (keeps it in the canvas)

type NodeDef = {
  type: "weeder" | "scout" | "cam" | "map" | "weather" | "soil" | "grower" | "more";
  label: string;
  dir: "in" | "out";
  robot?: boolean;
  live?: boolean;
};

const NODES: NodeDef[] = [
  { type: "cam", label: "Cameras", dir: "in" },
  { type: "map", label: "3D map", dir: "in" },
  { type: "scout", label: "Scout", dir: "out", robot: true },
  { type: "weather", label: "Weather", dir: "in" },
  { type: "grower", label: "Grower", dir: "in" },
  { type: "more", label: "+ more", dir: "in" },
  { type: "soil", label: "Soil probe", dir: "in" },
  { type: "weeder", label: "Weeder", dir: "out", robot: true, live: true },
];

const pillW = (label: string) => label.length * 6.2 + 18;
const dark = "#11140d";

function Icon({ type, color }: { type: NodeDef["type"]; color: string }) {
  const s = { stroke: color, strokeWidth: 1.2, fill: "none", strokeLinecap: "round" as const };
  switch (type) {
    case "weeder":
      return (
        <>
          <rect x={-9} y={-5} width={18} height={11} rx={3} fill={dark} stroke={color} strokeWidth={1.3} />
          <circle cx={0} cy={0} r={1.6} fill={color} />
          <line x1={0} y1={-5} x2={0} y2={-9} {...s} strokeWidth={1.3} />
          <circle cx={0} cy={-10} r={1.4} fill={color} />
          <circle cx={-6} cy={6} r={2.1} {...s} strokeWidth={1.1} />
          <circle cx={6} cy={6} r={2.1} {...s} strokeWidth={1.1} />
        </>
      );
    case "scout":
      return (
        <>
          <rect x={-8} y={-3} width={16} height={9} rx={2.5} fill={dark} stroke={color} strokeWidth={1.3} />
          <circle cx={0} cy={-6} r={3} fill={dark} stroke={color} strokeWidth={1.2} />
          <circle cx={0} cy={-6} r={1} fill={color} />
          <circle cx={-5} cy={6} r={1.9} {...s} strokeWidth={1.1} />
          <circle cx={5} cy={6} r={1.9} {...s} strokeWidth={1.1} />
        </>
      );
    case "cam":
      return (
        <>
          <line x1={0} y1={9} x2={0} y2={-2} {...s} strokeWidth={1.3} />
          <line x1={-4} y1={9} x2={4} y2={9} {...s} strokeWidth={1.2} />
          <rect x={-6} y={-8} width={12} height={6.5} rx={1.5} fill={dark} stroke={color} strokeWidth={1.2} />
          <circle cx={4} cy={-4.7} r={1.3} fill={color} />
        </>
      );
    case "map":
      return (
        <>
          <path d="M0 -7 L9 -2 L0 7 L-9 -2 Z" fill={dark} stroke={color} strokeWidth={1.2} />
          <line x1={-4.5} y1={-4.5} x2={4.5} y2={4.5} {...s} strokeWidth={0.8} opacity={0.75} />
          <line x1={4.5} y1={-4.5} x2={-4.5} y2={4.5} {...s} strokeWidth={0.8} opacity={0.75} />
        </>
      );
    case "weather":
      return (
        <>
          <circle cx={-4} cy={0} r={3.2} fill={dark} stroke={color} strokeWidth={1.1} />
          <circle cx={1} cy={-2.5} r={4} fill={dark} stroke={color} strokeWidth={1.1} />
          <circle cx={5} cy={0} r={3} fill={dark} stroke={color} strokeWidth={1.1} />
          <line x1={-6} y1={3} x2={7} y2={3} {...s} strokeWidth={1.2} />
          <line x1={-2} y1={6} x2={-3} y2={9} {...s} strokeWidth={1.1} />
          <line x1={3} y1={6} x2={2} y2={9} {...s} strokeWidth={1.1} />
        </>
      );
    case "soil":
      return (
        <>
          <line x1={0} y1={-8} x2={0} y2={6} {...s} strokeWidth={1.4} />
          <circle cx={0} cy={-8} r={1.6} fill={color} />
          <line x1={-3} y1={-1} x2={3} y2={-1} {...s} strokeWidth={1.1} />
          <path d="M-8 6 Q0 10 8 6" {...s} strokeWidth={1.1} />
        </>
      );
    case "grower":
      return (
        <>
          <circle cx={0} cy={-5} r={3} fill={dark} stroke={color} strokeWidth={1.2} />
          <path d="M-6 7 Q0 -1 6 7" {...s} strokeWidth={1.3} />
        </>
      );
    case "more":
      return (
        <>
          <circle cx={0} cy={0} r={9} fill={dark} stroke={color} strokeWidth={1.2} strokeDasharray="3 4" />
          <line x1={-3.5} y1={0} x2={3.5} y2={0} {...s} strokeWidth={1.3} />
          <line x1={0} y1={-3.5} x2={0} y2={3.5} {...s} strokeWidth={1.3} />
        </>
      );
  }
}

export default function SwarmOverlay({ className = "" }: { className?: string }) {
  const [rot, setRot] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let last = performance.now();
    const speed = (Math.PI * 2) / 75; // one slow revolution every 75s
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      setRot((r) => r + speed * dt);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const n = NODES.length;
  const pos = NODES.map((_, i) => {
    const a = rot + (i / n) * Math.PI * 2;
    return { x: CX + RX * Math.cos(a), y: CY + RY * Math.sin(a) };
  });

  return (
    <div className={`${styles.swarm} ${className}`} aria-hidden="true">
      <svg className={styles.swarmSvg} viewBox="0 0 640 340" fill="none" preserveAspectRatio="xMidYMid meet">
        {/* tendrils */}
        {pos.map((p, i) => (
          <line
            key={`t${i}`}
            className={styles.tendril}
            x1={CX}
            y1={CY}
            x2={p.x.toFixed(1)}
            y2={p.y.toFixed(1)}
            style={{ animationDelay: `${0.3 + i * 0.1}s` }}
          />
        ))}

        {/* data pulses travelling along each leg */}
        {pos.map((p, i) => {
          const nd = NODES[i];
          const t = ((rot * 0.6 + i * 0.37) % 1 + 1) % 1;
          const f = nd.dir === "in" ? 1 - t : t;
          const px = CX + (p.x - CX) * f;
          const py = CY + (p.y - CY) * f;
          const color = nd.dir === "in" ? "var(--sprout-bright)" : "var(--persimmon-bright)";
          return (
            <circle
              key={`p${i}`}
              cx={px.toFixed(1)}
              cy={py.toFixed(1)}
              r={2.4}
              fill={color}
              opacity={Math.sin(Math.PI * t).toFixed(2)}
              style={{ filter: `drop-shadow(0 0 5px ${color})` }}
            />
          );
        })}

        {/* central core — the agentic OS */}
        <circle className={styles.coreGlow} cx={CX} cy={CY} r={28} />
        <circle className={styles.coreRing} cx={CX} cy={CY} r={15} />
        <circle className={styles.core} cx={CX} cy={CY} r={5.5} />

        {/* nodes (upright, undistorted) */}
        {pos.map((p, i) => {
          const nd = NODES[i];
          const color = nd.live ? "var(--sprout-bright)" : "var(--persimmon-bright)";
          return (
            <g key={`n${i}`} transform={`translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`}>
              {nd.robot && (
                <circle
                  className={styles.robotScan}
                  cx={0}
                  cy={0}
                  r={11}
                  style={{ animationDelay: `${2 + i * 0.2}s`, stroke: color }}
                />
              )}
              <Icon type={nd.type} color={color} />
              <rect
                className={styles.nodePill}
                x={-pillW(nd.label) / 2}
                y={14}
                width={pillW(nd.label)}
                height={18}
                rx={9}
              />
              <text className={styles.nodeLabel} x={0} y={26}>
                {nd.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
