"use client";

import { useEffect, useState } from "react";

type Props = {
  phrases: string[];
  /** Milliseconds between phrase changes. */
  intervalMs?: number;
};

/* Rotating italic phrase that crossfades + nudges up.  Reserves width for
 * the longest phrase so the surrounding layout doesn't shift. */
export default function Rotator({ phrases, intervalMs = 2800 }: Props) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % phrases.length), intervalMs);
    return () => clearInterval(t);
  }, [phrases.length, intervalMs]);

  const longest = phrases.reduce((a, b) => (a.length >= b.length ? a : b));

  return (
    <span className="relative inline-block align-baseline text-center">
      {/* Invisible spacer sets the width to the longest phrase so the
       * surrounding layout doesn't shift between rotations. */}
      <span aria-hidden className="invisible whitespace-nowrap">
        {longest}
      </span>
      {phrases.map((p, idx) => {
        const active = idx === i;
        return (
          <span
            key={p}
            aria-hidden={!active}
            className="absolute inset-x-0 top-0 whitespace-nowrap text-center transition-all duration-700 ease-out"
            style={{
              opacity: active ? 1 : 0,
              filter: active ? "blur(0px)" : "blur(6px)",
              transform: active ? "translateY(0)" : "translateY(-6px)",
            }}
          >
            {p}
          </span>
        );
      })}
    </span>
  );
}
