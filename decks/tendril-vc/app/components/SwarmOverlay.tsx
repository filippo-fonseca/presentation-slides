import styles from "../landing.module.css";

// The agentic core, fed by a diverse swarm of input sources and reaching
// out to a team of small modular robots. Data flows in (green), commands
// flow out (persimmon). Decorative; sits behind the hero copy.
const CENTER = { x: 648, y: 162 };

type Node = {
  x: number;
  y: number;
  type: "weeder" | "scout" | "cam" | "map" | "weather" | "soil" | "grower" | "more";
  label: string;
  dir: "in" | "out";
  robot?: boolean;
  live?: boolean;
};

const NODES: Node[] = [
  { x: 470, y: 92, type: "cam", label: "Cameras", dir: "in" },
  { x: 330, y: 150, type: "weeder", label: "Weeder", dir: "out", robot: true, live: true },
  { x: 858, y: 86, type: "map", label: "3D map", dir: "in" },
  { x: 1004, y: 150, type: "scout", label: "Scout", dir: "out", robot: true },
  { x: 1126, y: 214, type: "weather", label: "Weather", dir: "in" },
  { x: 250, y: 212, type: "soil", label: "Soil probe", dir: "in" },
  { x: 560, y: 216, type: "grower", label: "Grower", dir: "in" },
  { x: 778, y: 210, type: "more", label: "+ more", dir: "in" },
];

const pillW = (label: string) => label.length * 6.2 + 18;

function tendril(n: Node) {
  const mx = (CENTER.x + n.x) / 2;
  const my = (CENTER.y + n.y) / 2 - 42;
  return `M${CENTER.x} ${CENTER.y} Q${mx} ${my} ${n.x} ${n.y}`;
}

function Icon({ n, color }: { n: Node; color: string }) {
  const { x, y, type } = n;
  const s = { stroke: color, strokeWidth: 1.3, fill: "none" } as const;
  const dark = "#11140d";
  switch (type) {
    case "weeder":
      return (
        <>
          <rect x={x - 9} y={y - 5} width="18" height="11" rx="3" fill={dark} stroke={color} strokeWidth="1.3" />
          <circle cx={x} cy={y} r="1.6" fill={color} />
          <line x1={x} y1={y - 5} x2={x} y2={y - 9} {...s} />
          <circle cx={x} cy={y - 10} r="1.4" fill={color} />
          <circle cx={x - 6} cy={y + 6} r="2.1" {...s} strokeWidth="1.1" />
          <circle cx={x + 6} cy={y + 6} r="2.1" {...s} strokeWidth="1.1" />
        </>
      );
    case "scout":
      return (
        <>
          <rect x={x - 8} y={y - 3} width="16" height="9" rx="2.5" fill={dark} stroke={color} strokeWidth="1.3" />
          <circle cx={x} cy={y - 6} r="3" fill={dark} stroke={color} strokeWidth="1.2" />
          <circle cx={x} cy={y - 6} r="1" fill={color} />
          <circle cx={x - 5} cy={y + 6} r="1.9" {...s} strokeWidth="1.1" />
          <circle cx={x + 5} cy={y + 6} r="1.9" {...s} strokeWidth="1.1" />
        </>
      );
    case "cam":
      return (
        <>
          <line x1={x} y1={y + 9} x2={x} y2={y - 2} {...s} strokeWidth="1.3" />
          <line x1={x - 4} y1={y + 9} x2={x + 4} y2={y + 9} {...s} strokeWidth="1.2" />
          <rect x={x - 6} y={y - 8} width="12" height="6.5" rx="1.5" fill={dark} stroke={color} strokeWidth="1.2" />
          <circle cx={x + 4} cy={y - 4.7} r="1.3" fill={color} />
        </>
      );
    case "map":
      return (
        <>
          <path
            d={`M${x} ${y - 7} L${x + 9} ${y - 2} L${x} ${y + 7} L${x - 9} ${y - 2} Z`}
            fill={dark}
            stroke={color}
            strokeWidth="1.2"
          />
          <line x1={x - 4.5} y1={y - 4.5} x2={x + 4.5} y2={y + 4.5} {...s} strokeWidth="0.8" opacity="0.75" />
          <line x1={x + 4.5} y1={y - 4.5} x2={x - 4.5} y2={y + 4.5} {...s} strokeWidth="0.8" opacity="0.75" />
        </>
      );
    case "weather":
      return (
        <>
          <circle cx={x - 4} cy={y} r="3.2" fill={dark} stroke={color} strokeWidth="1.1" />
          <circle cx={x + 1} cy={y - 2.5} r="4" fill={dark} stroke={color} strokeWidth="1.1" />
          <circle cx={x + 5} cy={y} r="3" fill={dark} stroke={color} strokeWidth="1.1" />
          <line x1={x - 6} y1={y + 3} x2={x + 7} y2={y + 3} {...s} strokeWidth="1.2" />
          <line x1={x - 2} y1={y + 6} x2={x - 3} y2={y + 9} {...s} strokeWidth="1.1" />
          <line x1={x + 3} y1={y + 6} x2={x + 2} y2={y + 9} {...s} strokeWidth="1.1" />
        </>
      );
    case "soil":
      return (
        <>
          <line x1={x} y1={y - 8} x2={x} y2={y + 6} {...s} strokeWidth="1.4" />
          <circle cx={x} cy={y - 8} r="1.6" fill={color} />
          <line x1={x - 3} y1={y - 1} x2={x + 3} y2={y - 1} {...s} strokeWidth="1.1" />
          <path d={`M${x - 8} ${y + 6} Q${x} ${y + 10} ${x + 8} ${y + 6}`} {...s} strokeWidth="1.1" />
        </>
      );
    case "grower":
      return (
        <>
          <circle cx={x} cy={y - 5} r="3" fill={dark} stroke={color} strokeWidth="1.2" />
          <path d={`M${x - 6} ${y + 7} Q${x} ${y - 1} ${x + 6} ${y + 7}`} {...s} strokeWidth="1.3" />
        </>
      );
    case "more":
      return (
        <>
          <circle cx={x} cy={y} r="9" fill={dark} stroke={color} strokeWidth="1.2" strokeDasharray="3 4" />
          <line x1={x - 3.5} y1={y} x2={x + 3.5} y2={y} {...s} strokeWidth="1.3" />
          <line x1={x} y1={y - 3.5} x2={x} y2={y + 3.5} {...s} strokeWidth="1.3" />
        </>
      );
  }
}

export default function SwarmOverlay({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.swarm} ${className}`} aria-hidden="true">
      <svg
        className={styles.swarmSvg}
        viewBox="0 0 1200 320"
        fill="none"
        preserveAspectRatio="xMidYMin meet"
      >
        {NODES.map((n, i) => {
          const d = tendril(n);
          const isIn = n.dir === "in";
          return (
            <g key={`t${i}`}>
              <path
                className={styles.tendril}
                d={d}
                style={{ animationDelay: `${0.3 + i * 0.11}s` }}
              />
              <circle
                className={isIn ? styles.tokenIn : styles.token}
                r="2.6"
                style={{ offsetPath: `path("${d}")`, animationDelay: `${1.7 + i * 0.2}s` }}
              />
            </g>
          );
        })}

        {/* central core — the agentic OS */}
        <circle className={styles.coreGlow} cx={CENTER.x} cy={CENTER.y} r="30" />
        <circle className={styles.coreRing} cx={CENTER.x} cy={CENTER.y} r="16" />
        <circle className={styles.core} cx={CENTER.x} cy={CENTER.y} r="5.5" />

        {/* nodes */}
        {NODES.map((n, i) => {
          const color = n.live ? "var(--sprout-bright)" : "var(--persimmon-bright)";
          return (
            <g
              key={`n${i}`}
              className={styles.robot}
              style={{ animationDelay: `${1.2 + i * 0.11}s` }}
            >
              {n.robot && (
                <circle
                  className={styles.robotScan}
                  cx={n.x}
                  cy={n.y}
                  r="11"
                  style={{ animationDelay: `${2 + i * 0.2}s`, stroke: color }}
                />
              )}
              <Icon n={n} color={color} />
              <rect
                className={styles.nodePill}
                x={n.x - pillW(n.label) / 2}
                y={n.y + 14}
                width={pillW(n.label)}
                height="18"
                rx="9"
              />
              <text className={styles.nodeLabel} x={n.x} y={n.y + 26}>
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
