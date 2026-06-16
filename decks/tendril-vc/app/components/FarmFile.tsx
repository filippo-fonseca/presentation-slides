"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../landing.module.css";

// One day, aggregated: the .farm file the farm-OS agent reads as its
// overview. Cascades in like the day compiling to disk when scrolled into view.
const ROWS: [string, React.ReactNode][] = [
  ["field", "north-40 · 38.2 ac · corn, V6"],
  ["sensors", "soil moisture, canopy temp, NDVI · 1,440 reads"],
  ["swarm", "4 units · 11.6 ac worked · 38 min downtime"],
  ["saw", "2,304 weeds · 17 disease flags · 3 wind-damaged rows"],
  ["decided", "spot-weed NE quadrant · hold row 12 · alert grower"],
  ["did", "2,291 weeds pulled mechanically · 0 mL herbicide"],
  [
    "grower",
    <em key="g">&ldquo;harvesting the south strip Friday, skip it&rdquo;</em>,
  ],
];

const STEP_MS = 300;

export default function FarmFile() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStarted(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStarted(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.farmCard} ${started ? styles.playing : ""}`}>
      <span className={styles.farmProgress} />
      <div className={styles.farmBar}>
        <div className={styles.farmDots}>
          <span className={styles.farmDot} style={{ background: "var(--persimmon)" }} />
          <span
            className={`${styles.farmDot} ${styles.farmLive}`}
            style={{ background: "var(--sprout)" }}
          />
          <span className={styles.farmDot} style={{ background: "var(--txt-faint)" }} />
        </div>
        <span className={styles.farmName}>
          2026-06-15<b>.farm</b>
          <span className={styles.farmCaret} />
        </span>
      </div>
      <div className={styles.farmBody}>
        {ROWS.map(([k, v], i) => (
          <div
            className={styles.farmRow}
            key={k as string}
            style={{ animationDelay: `${i * STEP_MS}ms` }}
          >
            <span className={styles.farmKey}>{k}</span>
            <span className={styles.farmVal}>{v}</span>
          </div>
        ))}
        <div
          className={styles.farmCarry}
          style={{ animationDelay: `${ROWS.length * STEP_MS}ms` }}
        >
          carried → 2026-06-16.farm
        </div>
      </div>
    </div>
  );
}
