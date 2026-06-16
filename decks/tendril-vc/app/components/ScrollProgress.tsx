"use client";

import { useEffect, useState } from "react";
import styles from "../landing.module.css";

// Thin top bar that fills as you scroll: the story building, end to end.
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = document.documentElement;
        const max = el.scrollHeight - el.clientHeight;
        setPct(max > 0 ? (el.scrollTop / max) * 100 : 0);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div className={styles.scrollProgress} style={{ width: `${pct}%` }} aria-hidden="true" />;
}
