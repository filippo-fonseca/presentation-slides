// A bigger, illustrated Tendril robot — used in slides that need a labelled
// "this is our robot" alongside competitor product photos. Persimmon body,
// chartreuse Tendril crown, sage sensor strip, big wheels.

type Props = {
  /** Rendered pixel height of the robot. */
  height?: number;
  className?: string;
};

export default function TendrilRobot({ height = 180, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 240 180"
      style={{ height }}
      className={`h-auto w-auto ${className}`}
      role="img"
      aria-label="An illustrated Tendril robot in persimmon and chartreuse."
    >
      <defs>
        <linearGradient id="bot-body" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="#f08a5a" />
          <stop offset="100%" stopColor="#b04518" />
        </linearGradient>
        <radialGradient id="bot-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%"   stopColor="#E5602C" stopOpacity="0.35" />
          <stop offset="70%"  stopColor="#E5602C" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#E5602C" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient halo */}
      <ellipse cx="120" cy="100" rx="115" ry="80" fill="url(#bot-glow)" />

      {/* Field shadow */}
      <ellipse cx="120" cy="160" rx="80" ry="6" fill="#000" opacity="0.55" />

      {/* Tendril crown above the body (the mark cue) */}
      <g>
        <line x1="120" y1="46" x2="120" y2="64" stroke="#B5D33D" strokeWidth="1.6" opacity="0.85" />
        <circle cx="120" cy="40" r="6" fill="#B5D33D" />
        <circle cx="120" cy="40" r="9" fill="#B5D33D" opacity="0.18" />
      </g>

      {/* Body */}
      <rect
        x="30" y="64" width="180" height="78" rx="22"
        fill="url(#bot-body)"
        stroke="rgba(255,255,255,0.18)" strokeWidth="1"
      />
      {/* Top highlight band */}
      <rect x="30" y="64" width="180" height="22" rx="22" fill="#f4a87a" opacity="0.7" />

      {/* Sensor strip / "eye" */}
      <rect
        x="60" y="92" width="120" height="20" rx="10"
        fill="#0a0a0a" opacity="0.85"
        stroke="rgba(181,211,61,0.4)" strokeWidth="1"
      />
      {/* Three sensor dots */}
      <circle cx="90"  cy="102" r="3" fill="#B5D33D" />
      <circle cx="120" cy="102" r="3" fill="#B5D33D" />
      <circle cx="150" cy="102" r="3" fill="#B5D33D" />

      {/* Tendril mark stamped on body */}
      <g transform="translate(180, 118)">
        <path d="M0 14 L 0 4" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <path d="M-8 4 C -6 4, -4 4, 0 4 C 4 4, 6 4, 8 4" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <path d="M-8 4 C -10 4, -11 2, -10 0 C -9 -2, -7 -1, -7 1" stroke="#0a0a0a" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.55" />
        <path d="M8 4 C 10 4, 11 2, 10 0 C 9 -2, 7 -1, 7 1" stroke="#0a0a0a" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.55" />
      </g>

      {/* Wheels */}
      <g>
        <circle cx="65"  cy="148" r="14" fill="#0a0a0a" stroke="rgba(244,241,234,0.35)" strokeWidth="1.2" />
        <circle cx="65"  cy="148" r="4"  fill="rgba(244,241,234,0.5)" />
        <circle cx="175" cy="148" r="14" fill="#0a0a0a" stroke="rgba(244,241,234,0.35)" strokeWidth="1.2" />
        <circle cx="175" cy="148" r="4"  fill="rgba(244,241,234,0.5)" />
      </g>

      {/* Tool arm under the body (subtle, hints at modular tool) */}
      <rect x="105" y="142" width="30" height="6" rx="2" fill="#0a0a0a" opacity="0.75" />
      <rect x="118" y="148" width="4"  height="14" rx="1" fill="#0a0a0a" opacity="0.75" />
    </svg>
  );
}
