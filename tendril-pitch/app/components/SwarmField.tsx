// Animated swarm-vs-monolith diagram for Slide 16.
// Left: a single monolithic machine. Right: four rows of chartreuse crops,
// with one Tendril robot per row sweeping left-to-right past each plant.
// Tendril mark stamped top-right.

type Props = { height?: number };

/* Reusable mini-robot symbol — body + 2 wheels + chartreuse Tendril crown. */
function MiniRobotDefs() {
  return (
    <symbol id="mini-robot" viewBox="0 0 28 22" overflow="visible">
      {/* Body */}
      <rect x="2" y="5" width="24" height="12" rx="3.5" fill="#E5602C" />
      <rect x="2" y="5" width="24" height="4"  rx="2.5" fill="#f08a5a" />
      {/* Sage Tendril crown */}
      <circle cx="14" cy="3" r="1.6" fill="#B5D33D" />
      <line x1="14" y1="4.5" x2="14" y2="6.5" stroke="#B5D33D" strokeWidth="0.7" opacity="0.7" />
      {/* Sensor strip */}
      <rect x="6" y="10" width="16" height="2.4" rx="1.2" fill="#0a0a0a" opacity="0.7" />
      {/* Wheels */}
      <circle cx="7"  cy="18" r="2.6" fill="#0a0a0a" stroke="rgba(244,241,234,0.35)" strokeWidth="0.7" />
      <circle cx="21" cy="18" r="2.6" fill="#0a0a0a" stroke="rgba(244,241,234,0.35)" strokeWidth="0.7" />
    </symbol>
  );
}

/* A crop plant — three chartreuse leaves on a stem. The crops are the
 * subject of the slide, so they're a bit larger than the field-row sprigs. */
function CropPlant({
  x,
  y,
  scale = 1,
  delay = 0,
}: {
  x: number;
  y: number;
  scale?: number;
  delay?: number;
}) {
  return (
    <g
      transform={`translate(${x},${y}) scale(${scale})`}
      className="crop-sway"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Stem */}
      <line x1="0" y1="0" x2="0" y2="-13" stroke="#B5D33D" strokeWidth="1.2" strokeLinecap="round" opacity="0.95" />
      {/* Left leaf */}
      <path
        d="M0 -6 C -6 -7, -9 -11, -8 -16 C -3 -14, 0 -11, 0 -7 Z"
        fill="#B5D33D"
        opacity="0.85"
      />
      {/* Right leaf */}
      <path
        d="M0 -6 C 6 -7, 9 -11, 8 -16 C 3 -14, 0 -11, 0 -7 Z"
        fill="#B5D33D"
        opacity="0.95"
      />
      {/* Top sprout */}
      <path
        d="M0 -13 C -2 -16, -2 -19, 0 -21 C 2 -19, 2 -16, 0 -13 Z"
        fill="#c8e068"
        opacity="0.9"
      />
      {/* Soil mound */}
      <ellipse cx="0" cy="1" rx="6" ry="1.5" fill="#3a2c1c" opacity="0.55" />
    </g>
  );
}

/* Tendril mark stamped on the SVG corner. */
function MarkBadge({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <path d="M0 18 L 0 -10" stroke="#E5602C" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M-12 -10 L 12 -10" stroke="#E5602C" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M-12 -10 C -16 -10, -17 -14, -14 -17 C -11 -19, -7 -16, -7 -13" stroke="#E5602C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M12 -10 C 16 -10, 17 -14, 14 -17 C 11 -19, 7 -16, 7 -13" stroke="#E5602C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="0" cy="-22" r="2.4" fill="#B5D33D" />
      <line x1="0" y1="-19" x2="0" y2="-12" stroke="#B5D33D" strokeWidth="0.9" opacity="0.7" />
    </g>
  );
}

type Row = {
  /** Robot/crop baseline (the row's furrow y). */
  y: number;
  /** Scale of robot + crops along this row (perspective). */
  scale: number;
  /** Which CSS row-sweep class to apply (row-sweep-1..4). */
  sweepClass: string;
  /** x-positions of crops along this row (relative to the swarm area). */
  cropXs: number[];
};

const ROWS: Row[] = [
  // Back row — smallest, slowest
  { y: 78,  scale: 0.75, sweepClass: "row-sweep-1", cropXs: [475, 540, 600, 660, 725, 790, 855, 920] },
  // Middle-back
  { y: 124, scale: 0.92, sweepClass: "row-sweep-2", cropXs: [470, 535, 600, 660, 725, 790, 855, 920] },
  // Middle-front
  { y: 175, scale: 1.08, sweepClass: "row-sweep-3", cropXs: [465, 530, 600, 660, 725, 790, 855, 920] },
  // Front row — biggest, brightest
  { y: 230, scale: 1.25, sweepClass: "row-sweep-4", cropXs: [460, 530, 600, 665, 730, 795, 860, 925] },
];

const BOT_W = 28;
const BOT_H = 22;

export default function SwarmField({ height = 280 }: Props) {
  return (
    <svg
      viewBox="0 0 980 320"
      className="h-auto w-full"
      role="img"
      aria-label="On the left, one monolithic machine. On the right, four rows of crops, with one Tendril robot per row sweeping left to right, treating each plant."
      style={{ maxHeight: height }}
    >
      <defs>
        <MiniRobotDefs />
        <radialGradient id="swarm-halo-grad" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%"   stopColor="#E5602C" stopOpacity="0.55" />
          <stop offset="60%"  stopColor="#E5602C" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#E5602C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="iron-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="#3a3530" />
          <stop offset="100%" stopColor="#1c1a18" />
        </linearGradient>
        <linearGradient id="soil-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="rgba(60,42,22,0)" />
          <stop offset="100%" stopColor="rgba(60,42,22,0.22)" />
        </linearGradient>
      </defs>

      {/* Soil hint behind the swarm */}
      <rect x="450" y="50" width="510" height="240" fill="url(#soil-grad)" rx="4" />

      {/* Row furrows (visible field rows) */}
      <g stroke="#B5D33D" strokeOpacity="0.22" strokeLinecap="round">
        {ROWS.map((r) => (
          <path
            key={r.y}
            d={`M 450 ${r.y + 8} L 960 ${r.y + 4}`}
            strokeWidth="1.1"
            strokeDasharray="2 5"
          />
        ))}
      </g>

      {/* Crops on each row */}
      <g>
        {ROWS.map((r, ri) =>
          r.cropXs.map((cx, ci) => (
            <CropPlant
              key={`${ri}-${ci}`}
              x={cx}
              y={r.y}
              scale={r.scale}
              delay={((ri * 7 + ci * 3) % 10) / 10}
            />
          )),
        )}
      </g>

      {/* LEFT — the monolith */}
      <g>
        <rect
          x="60" y="115" width="320" height="100" rx="6"
          fill="url(#iron-grad)"
          stroke="rgba(244,241,234,0.18)"
          strokeWidth="1"
        />
        <circle cx="110" cy="223" r="14" fill="#0a0a0a" stroke="rgba(244,241,234,0.28)" strokeWidth="1" />
        <circle cx="330" cy="223" r="14" fill="#0a0a0a" stroke="rgba(244,241,234,0.28)" strokeWidth="1" />
        <rect x="240" y="85" width="100" height="40" rx="3" fill="#28241f" stroke="rgba(244,241,234,0.18)" strokeWidth="1" />
        <text
          x="220" y="270" textAnchor="middle"
          fill="rgba(244,241,234,0.6)"
          fontSize="11" fontFamily="var(--font-geist-mono)"
          style={{ letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          One machine
        </text>
        <text
          x="220" y="50" textAnchor="middle"
          fill="rgba(244,241,234,0.45)"
          fontSize="9.5" fontFamily="var(--font-geist-mono)"
          style={{ letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          $450K · idle 50 weeks
        </text>
      </g>

      {/* CENTER — vs */}
      <text
        x="415" y="160" textAnchor="middle"
        fill="rgba(229,96,44,0.9)"
        fontSize="14" fontFamily="var(--font-fraunces)"
        fontStyle="italic"
      >
        vs.
      </text>

      {/* RIGHT — one robot per row, sweeping left-to-right past the crops */}
      <g>
        {ROWS.map((r, ri) => {
          const bw = BOT_W * r.scale;
          const bh = BOT_H * r.scale;
          return (
            <g key={ri} className={`row-sweep ${r.sweepClass}`}>
              {/* Halo */}
              <circle
                cx={470 + bw / 2}
                cy={r.y - 2}
                r={bw * 0.8}
                fill="url(#swarm-halo-grad)"
              />
              {/* Robot */}
              <use
                href="#mini-robot"
                x={470}
                y={r.y - bh + 6}
                width={bw}
                height={bh}
              />
            </g>
          );
        })}

        <text
          x="700" y="305" textAnchor="middle"
          fill="rgba(229,96,44,0.95)"
          fontSize="11" fontFamily="var(--font-geist-mono)"
          style={{ letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          One robot · row · plant by plant
        </text>
        <text
          x="700" y="50" textAnchor="middle"
          fill="rgba(229,96,44,0.75)"
          fontSize="9.5" fontFamily="var(--font-geist-mono)"
          style={{ letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          Scale by adding rows · always working
        </text>
      </g>

      {/* Tendril mark stamped top-right */}
      <MarkBadge x={935} y={32} />
    </svg>
  );
}
