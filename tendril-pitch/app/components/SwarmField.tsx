// Animated swarm-vs-monolith diagram for Slide 16.
// Left: a single big monolith (the iron). Right: a swarm of small persimmon
// robots arrayed across a field of chartreuse crop rows, with subtle bob,
// halo pulse, and crop sway. Tendril mark stamped top-right.

type Props = { height?: number };

/* Reusable mini-robot symbol — body + 2 wheels + tiny chartreuse crown. */
function MiniRobotDefs() {
  return (
    <symbol id="mini-robot" viewBox="0 0 24 18" overflow="visible">
      <rect x="2" y="3" width="20" height="10" rx="3" fill="#E5602C" />
      <rect x="2" y="3" width="20" height="3"  rx="2" fill="#f08a5a" />
      {/* Sage Tendril crown */}
      <circle cx="12" cy="2" r="1.4" fill="#B5D33D" />
      <line x1="12" y1="3" x2="12" y2="5" stroke="#B5D33D" strokeWidth="0.6" opacity="0.7" />
      {/* Sensor strip / eye */}
      <rect x="6" y="7" width="12" height="2" rx="1" fill="#0a0a0a" opacity="0.65" />
      {/* Wheels */}
      <circle cx="6"  cy="14.5" r="2.2" fill="#0a0a0a" stroke="rgba(244,241,234,0.35)" strokeWidth="0.6" />
      <circle cx="18" cy="14.5" r="2.2" fill="#0a0a0a" stroke="rgba(244,241,234,0.35)" strokeWidth="0.6" />
    </symbol>
  );
}

/* A small crop sprout — three chartreuse blades + a stem.  Lives between robots
 * along each row and gently sways. */
function CropSprout({ x, y, scale = 1, delay = 0 }: { x: number; y: number; scale?: number; delay?: number }) {
  return (
    <g
      transform={`translate(${x},${y}) scale(${scale})`}
      className="crop-sway"
      style={{ animationDelay: `${delay}s` }}
    >
      <line x1="0" y1="0" x2="0" y2="-5" stroke="#B5D33D" strokeWidth="0.9" strokeLinecap="round" opacity="0.85" />
      <path d="M0 -3 C -3 -3, -4 -6, -3.5 -8" stroke="#B5D33D" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.9" />
      <path d="M0 -3 C  3 -3,  4 -6,  3.5 -8" stroke="#B5D33D" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.9" />
      <path d="M0 -1 L 0 -7"                 stroke="#B5D33D" strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />
    </g>
  );
}

/* Tendril mark stamped on the SVG corner. */
function MarkBadge({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      {/* T stem */}
      <path d="M0 18 L 0 -10" stroke="#E5602C" strokeWidth="2.4" strokeLinecap="round" />
      {/* Crossbar */}
      <path d="M-12 -10 L 12 -10" stroke="#E5602C" strokeWidth="2.4" strokeLinecap="round" />
      {/* Left curl */}
      <path d="M-12 -10 C -16 -10, -17 -14, -14 -17 C -11 -19, -7 -16, -7 -13" stroke="#E5602C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Right curl */}
      <path d="M12 -10 C 16 -10, 17 -14, 14 -17 C 11 -19, 7 -16, 7 -13" stroke="#E5602C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Crown */}
      <circle cx="0" cy="-22" r="2.4" fill="#B5D33D" />
      <line x1="0" y1="-19" x2="0" y2="-12" stroke="#B5D33D" strokeWidth="0.9" opacity="0.7" />
    </g>
  );
}

type Bot = { x: number; y: number; s: number; halo?: boolean };

const SWARM: Bot[] = [
  // Row 1 (back)
  { x: 530, y: 64, s: 0.7 }, { x: 600, y: 66, s: 0.7 }, { x: 670, y: 62, s: 0.75 },
  { x: 740, y: 64, s: 0.7 }, { x: 810, y: 66, s: 0.7 }, { x: 880, y: 64, s: 0.72 },
  // Row 2
  { x: 520, y: 104, s: 0.85, halo: true }, { x: 595, y: 106, s: 0.9 },
  { x: 670, y: 102, s: 0.85 },             { x: 745, y: 104, s: 0.95, halo: true },
  { x: 820, y: 106, s: 0.9 },              { x: 895, y: 104, s: 0.85 },
  // Row 3
  { x: 510, y: 148, s: 1.0 }, { x: 590, y: 152, s: 1.0 },
  { x: 670, y: 146, s: 1.05, halo: true }, { x: 750, y: 150, s: 1.0 },
  { x: 830, y: 152, s: 1.0 }, { x: 910, y: 148, s: 1.0 },
  // Row 4 (front)
  { x: 500, y: 196, s: 1.15, halo: true }, { x: 585, y: 200, s: 1.1 },
  { x: 670, y: 194, s: 1.2 },              { x: 755, y: 200, s: 1.1 },
  { x: 840, y: 196, s: 1.15 },             { x: 920, y: 198, s: 1.1 },
];

const BOT_W = 24;
const BOT_H = 18;

/* Crops fill the gaps between robots along each row. */
const CROPS = (() => {
  const rows = [
    { y: 78,  scale: 0.6 },
    { y: 118, scale: 0.75 },
    { y: 162, scale: 0.9 },
    { y: 210, scale: 1.05 },
  ];
  const cols = [475, 560, 635, 710, 785, 860, 940];
  const out: Array<{ x: number; y: number; scale: number; delay: number }> = [];
  rows.forEach((row, rowIdx) => {
    cols.forEach((cx, colIdx) => {
      // Skip a few so the field isn't perfectly regular
      if ((rowIdx + colIdx) % 4 === 3) return;
      out.push({
        x: cx + (colIdx % 2 === 0 ? 18 : -16),
        y: row.y,
        scale: row.scale * (0.85 + ((colIdx + rowIdx) % 3) * 0.1),
        delay: ((rowIdx * 7 + colIdx * 3) % 10) / 10,
      });
    });
  });
  return out;
})();

export default function SwarmField({ height = 240 }: Props) {
  return (
    <svg
      viewBox="0 0 980 280"
      className="h-auto w-full"
      role="img"
      aria-label="On the left, one monolithic machine. On the right, a swarm of small Tendril robots tending a field of crops."
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
          <stop offset="0%"   stopColor="rgba(110,80,40,0)" />
          <stop offset="100%" stopColor="rgba(110,80,40,0.12)" />
        </linearGradient>
      </defs>

      {/* Soil hint behind the swarm */}
      <rect x="455" y="50" width="500" height="200" fill="url(#soil-grad)" rx="4" />

      {/* Field row furrows */}
      <g stroke="#B5D33D" strokeOpacity="0.18" strokeLinecap="round">
        {[60, 100, 140, 188, 232].map((y) => (
          <path
            key={y}
            d={`M 455 ${y + 6} L 955 ${y}`}
            strokeWidth="0.8"
            strokeDasharray="2 6"
          />
        ))}
      </g>

      {/* Crops scattered along the rows */}
      <g>
        {CROPS.map((c, i) => (
          <CropSprout key={i} x={c.x} y={c.y} scale={c.scale} delay={c.delay} />
        ))}
      </g>

      {/* LEFT — the monolith */}
      <g>
        <rect
          x="60" y="100" width="320" height="100" rx="6"
          fill="url(#iron-grad)"
          stroke="rgba(244,241,234,0.18)"
          strokeWidth="1"
        />
        <circle cx="110" cy="208" r="14" fill="#0a0a0a" stroke="rgba(244,241,234,0.28)" strokeWidth="1" />
        <circle cx="330" cy="208" r="14" fill="#0a0a0a" stroke="rgba(244,241,234,0.28)" strokeWidth="1" />
        <rect x="240" y="70" width="100" height="40" rx="3" fill="#28241f" stroke="rgba(244,241,234,0.18)" strokeWidth="1" />
        <text
          x="220" y="248" textAnchor="middle"
          fill="rgba(244,241,234,0.6)"
          fontSize="11" fontFamily="var(--font-geist-mono)"
          style={{ letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          One machine
        </text>
        <text
          x="220" y="40" textAnchor="middle"
          fill="rgba(244,241,234,0.45)"
          fontSize="9.5" fontFamily="var(--font-geist-mono)"
          style={{ letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          $450K · idle 50 weeks
        </text>
      </g>

      {/* CENTER — vs */}
      <text
        x="420" y="135" textAnchor="middle"
        fill="rgba(229,96,44,0.9)"
        fontSize="14" fontFamily="var(--font-fraunces)"
        fontStyle="italic"
      >
        vs.
      </text>

      {/* RIGHT — the swarm */}
      <g>
        {SWARM.map((b, i) => {
          const delay = (i % 8) * 0.18;
          return (
            <g key={i}>
              {b.halo && (
                <circle
                  cx={b.x}
                  cy={b.y + 4}
                  r={BOT_W * b.s * 0.75}
                  fill="url(#swarm-halo-grad)"
                  className="swarm-halo"
                  style={{ animationDelay: `${delay}s` }}
                />
              )}
              <g className="swarm-bob" style={{ animationDelay: `${delay}s` }}>
                <use
                  href="#mini-robot"
                  x={b.x - (BOT_W * b.s) / 2}
                  y={b.y - (BOT_H * b.s) / 2}
                  width={BOT_W * b.s}
                  height={BOT_H * b.s}
                />
              </g>
            </g>
          );
        })}
        <text
          x="700" y="260" textAnchor="middle"
          fill="rgba(229,96,44,0.95)"
          fontSize="11" fontFamily="var(--font-geist-mono)"
          style={{ letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          Many small robots · live field
        </text>
        <text
          x="700" y="40" textAnchor="middle"
          fill="rgba(229,96,44,0.75)"
          fontSize="9.5" fontFamily="var(--font-geist-mono)"
          style={{ letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          Scale by adding units · always working
        </text>
      </g>

      {/* Tendril mark stamped top-right */}
      <MarkBadge x={935} y={32} />
    </svg>
  );
}
