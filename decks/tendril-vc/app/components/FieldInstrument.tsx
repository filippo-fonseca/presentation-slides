import styles from "../landing.module.css";

// Hero instrument: a live field-telemetry readout. A drawn field-health
// trace sweeps across a faint top-down grid; scan nodes pulse where the
// swarm is working. Decorative, behind the hero copy.
export default function FieldInstrument({ className = "" }: { className?: string }) {
  // horizontal field rows (perspective: closer together toward the top)
  const rows = [40, 78, 112, 142, 168, 190];
  // vertical furrow lines
  const cols = Array.from({ length: 13 }, (_, i) => 60 + i * 90);

  return (
    <svg
      className={className}
      viewBox="0 0 1200 240"
      fill="none"
      aria-hidden="true"
      style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}
    >
      {/* faint field grid */}
      <g opacity="0.6">
        {rows.map((y) => (
          <line
            key={`r${y}`}
            x1="40"
            x2="1160"
            y1={y}
            y2={y}
            stroke="rgba(244,242,233,0.07)"
            strokeWidth="1"
          />
        ))}
        {cols.map((x) => (
          <line
            key={`c${x}`}
            x1={x}
            x2={x}
            y1="40"
            y2="206"
            stroke="rgba(244,242,233,0.05)"
            strokeWidth="1"
          />
        ))}
      </g>

      {/* baseline */}
      <line x1="40" x2="1160" y1="206" y2="206" stroke="rgba(244,242,233,0.18)" strokeWidth="1" />

      {/* drawn field-health trace */}
      <path
        className={styles.recLine}
        d="M40 188 C 180 188, 230 120, 360 126 C 470 131, 520 78, 640 92 C 760 106, 800 150, 920 138 C 1030 127, 1090 70, 1160 64"
        fill="none"
        stroke="var(--persimmon-bright)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* scan nodes (where the swarm is working) */}
      {[
        { x: 360, y: 126, live: false },
        { x: 640, y: 92, live: true },
        { x: 920, y: 138, live: false },
      ].map((n, i) => (
        <g key={i}>
          <circle
            className={i % 2 === 0 ? styles.pulse : styles.pulse2}
            cx={n.x}
            cy={n.y}
            r="10"
            stroke={n.live ? "var(--sprout-bright)" : "var(--persimmon-bright)"}
          />
          <circle
            cx={n.x}
            cy={n.y}
            r="4"
            fill={n.live ? "var(--sprout-bright)" : "var(--persimmon-bright)"}
            style={{
              filter: `drop-shadow(0 0 8px ${
                n.live ? "rgba(200,226,90,0.9)" : "rgba(255,122,67,0.9)"
              })`,
            }}
          />
        </g>
      ))}

      {/* telemetry labels */}
      <text className={styles.svgTag} x="40" y="30">
        FIELD HEALTH · LIVE
      </text>
      <text className={styles.svgTag} x="1160" y="30" textAnchor="end">
        PER-ACRE TELEMETRY
      </text>
    </svg>
  );
}
