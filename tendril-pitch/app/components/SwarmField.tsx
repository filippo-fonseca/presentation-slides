// Abstract swarm-vs-monolith diagram for Slide 16 (Why small wins).
// Left: a single big gray rectangle (the iron). Right: many tiny
// persimmon ROBOTS (rounded body + wheels + a chartreuse Tendril crown)
// arrayed across field rows. Pure decoration — no data, just contrast.

type Props = { height?: number };

/* Reusable mini-robot symbol — body + 2 wheels + tiny chartreuse crown.
 * Drawn at a local 24x18 viewBox so we can scale + position via <use>. */
function MiniRobotDefs() {
  return (
    <symbol id="mini-robot" viewBox="0 0 24 18" overflow="visible">
      {/* Body */}
      <rect x="2" y="3" width="20" height="10" rx="3" fill="#E5602C" />
      <rect x="2" y="3" width="20" height="3" rx="2" fill="#f08a5a" />
      {/* Sage Tendril crown — the “mark” at small scale */}
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

/* Each robot in the swarm — `s` is scale (1 ~= 24x18 px). */
type Bot = { x: number; y: number; s: number; halo?: boolean };

const SWARM: Bot[] = [
  // Row 1 (back, smaller, fainter)
  { x: 530, y: 64, s: 0.7  }, { x: 600, y: 66, s: 0.7  }, { x: 670, y: 62, s: 0.75 },
  { x: 740, y: 64, s: 0.7  }, { x: 810, y: 66, s: 0.7  }, { x: 880, y: 64, s: 0.72 },
  // Row 2
  { x: 520, y: 104, s: 0.85, halo: true }, { x: 595, y: 106, s: 0.9  },
  { x: 670, y: 102, s: 0.85 },             { x: 745, y: 104, s: 0.95, halo: true },
  { x: 820, y: 106, s: 0.9  },             { x: 895, y: 104, s: 0.85 },
  // Row 3
  { x: 510, y: 148, s: 1.0  }, { x: 590, y: 152, s: 1.0  },
  { x: 670, y: 146, s: 1.05, halo: true }, { x: 750, y: 150, s: 1.0  },
  { x: 830, y: 152, s: 1.0  }, { x: 910, y: 148, s: 1.0  },
  // Row 4 (front, biggest)
  { x: 500, y: 196, s: 1.15, halo: true }, { x: 585, y: 200, s: 1.1  },
  { x: 670, y: 194, s: 1.2  },             { x: 755, y: 200, s: 1.1  },
  { x: 840, y: 196, s: 1.15 },             { x: 920, y: 198, s: 1.1  },
];

const BOT_W = 24;
const BOT_H = 18;

export default function SwarmField({ height = 240 }: Props) {
  return (
    <svg
      viewBox="0 0 980 280"
      className="h-auto w-full"
      role="img"
      aria-label="On the left, one monolithic machine. On the right, a swarm of small Tendril robots arrayed across the rows of a field."
      style={{ maxHeight: height }}
    >
      <defs>
        <MiniRobotDefs />
        <radialGradient id="swarm-halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%"   stopColor="#E5602C" stopOpacity="0.45" />
          <stop offset="60%"  stopColor="#E5602C" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E5602C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="iron-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="#3a3530" />
          <stop offset="100%" stopColor="#1c1a18" />
        </linearGradient>
      </defs>

      {/* Field row lines, faint, drifting toward the swarm side */}
      <g stroke="#B5D33D" strokeOpacity="0.18" strokeLinecap="round">
        {[60, 100, 140, 180, 220].map((y) => (
          <path
            key={y}
            d={`M 40 ${y + 6} L 940 ${y}`}
            strokeWidth="0.7"
            strokeDasharray="2 6"
          />
        ))}
      </g>

      {/* LEFT — the monolith (John Deere style tractor silhouette) */}
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
        x="455" y="135" textAnchor="middle"
        fill="rgba(229,96,44,0.9)"
        fontSize="14" fontFamily="var(--font-fraunces)"
        fontStyle="italic"
      >
        vs.
      </text>

      {/* RIGHT — the swarm of robots */}
      <g>
        {SWARM.map((b, i) => (
          <g key={i}>
            {b.halo && <circle cx={b.x} cy={b.y + 4} r={BOT_W * b.s * 0.75} fill="url(#swarm-halo)" />}
            <use
              href="#mini-robot"
              x={b.x - (BOT_W * b.s) / 2}
              y={b.y - (BOT_H * b.s) / 2}
              width={BOT_W * b.s}
              height={BOT_H * b.s}
            />
          </g>
        ))}
        <text
          x="710" y="260" textAnchor="middle"
          fill="rgba(229,96,44,0.95)"
          fontSize="11" fontFamily="var(--font-geist-mono)"
          style={{ letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          Many small robots
        </text>
        <text
          x="710" y="40" textAnchor="middle"
          fill="rgba(229,96,44,0.75)"
          fontSize="9.5" fontFamily="var(--font-geist-mono)"
          style={{ letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          Scale by adding units · always working
        </text>
      </g>
    </svg>
  );
}
