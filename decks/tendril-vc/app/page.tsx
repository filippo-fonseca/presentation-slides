"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./landing.module.css";
import Reveal from "./components/Reveal";
import Mark from "./components/Mark";
import YaleMark from "./components/YaleMark";
import FieldInstrument from "./components/FieldInstrument";

const Arrow = () => (
  <svg
    className={styles.arrow}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MARQUEE = [
  "Weed pressure",
  "Canopy cover",
  "Soil biology",
  "Resistance management",
  "Leaf-level detection",
  "Per-acre yield",
  "Field memory",
  "Plant by plant",
];

const COMPARE: [string, string, string][] = [
  ["Resolution", "Per plant", "Per field"],
  ["Chemistry", "Mechanical, chemical-free", "Herbicide, on a schedule"],
  ["Field memory", "Persistent, compounding", "None"],
  ["Hardware", "Small modular swarm", "Single heavy machine"],
  ["Decisioning", "Agentic, autonomous", "Operator-driven"],
  ["Grower capital", "Zero, priced on outcome", "Six to seven figures"],
];

const STEPS = [
  {
    n: "01",
    t: "Perceive",
    b: "Small robots roll the rows at leaf level. Every plant is classified at the source: crop, weed, pest, disease, damage. A hundred decisions a second, in the field, not in a cloud.",
  },
  {
    n: "02",
    t: "Remember",
    b: "Every pass writes to a persistent map of the land. The system knows which corners failed last season, and watches them before they fail again. The field accumulates a memory.",
  },
  {
    n: "03",
    t: "Act",
    b: "Weeds are removed mechanically. Treatment is placed plant by plant. No blanket spray, no chemical debt. The fleet acts, measures the result, and feeds it back into the loop.",
  },
];

const BUILD_WITH = [
  {
    tag: "Row crops",
    title: "Row-crop growers",
    body: "Corn, cotton, soybeans, wheat. Margins are razor-thin and the iron sits idle most of the year. We attack the single largest line on the farm: the cost of the machine.",
  },
  {
    tag: "Specialty",
    title: "Specialty farms",
    body: "Where labor runs 50 to 70 percent of cost and almost nothing is automated. The work is repetitive, skilled, and unfillable. The intelligence carries it.",
  },
  {
    tag: "The land",
    title: "The soil itself",
    body: "Less compaction, fewer chemicals, biology that recovers. The advantages that make us defensible are the same ones that keep the ground alive.",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.root}>
      {/* NAV */}
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <a className={styles.brand} href="#top">
          <Mark size={26} />
          Tendril
        </a>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#treadmill">
            The treadmill
          </a>
          <a className={styles.navLink} href="#system">
            The system
          </a>
          <a className={styles.navLink} href="#moat">
            The moat
          </a>
          <Link className={styles.navCta} href="/deck">
            Read the brief <Arrow />
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <header className={styles.hero} id="top">
        <div className={styles.heroMedia}>
          <div className={styles.aurora} />
          <div className={styles.contours} />
        </div>
        <div className={styles.heroScrim} />
        <FieldInstrument className={styles.heroInstrument} />

        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>
            <span>Robotics for the open field</span>
          </div>
          <h1 className={styles.heroTitle}>
            Agriculture runs on a chemical treadmill. We build the machines that{" "}
            <em className={styles.ital}>step off it</em>.
          </h1>
          <p className={styles.heroSub}>
            A fleet of small, chemical-free robots that work the field plant by plant,
            run by an agentic intelligence layer that remembers every acre, season over
            season.
          </p>
          <div className={styles.heroCtas}>
            <Link className={styles.btnPrimary} href="/deck">
              Read the brief <Arrow />
            </Link>
            <a className={styles.btnGhost} href="#treadmill">
              See the system
            </a>
          </div>
          <p className={styles.heroNote}>
            Built by engineers at <YaleMark height={13} />
            <strong>on food security and chemical-free farming.</strong>
          </p>
        </div>
      </header>

      {/* MARQUEE */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span
              key={i}
              className={`${styles.marqueeItem} ${i % 2 === 1 ? styles.alt : ""}`}
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* HOOK */}
      <section className={`${styles.section} ${styles.hook}`}>
        <div className={styles.wrap}>
          <div className={styles.hookGrid}>
            <Reveal>
              <div className={styles.kicker}>
                <span>The premise</span>
              </div>
              <p className={styles.hookAside}>
                The signal a field gives off has always existed. Acting on it has
                always required a person walking the rows.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className={styles.hookText}>
                Every acre already encodes what it needs: where weeds push, where the
                soil tires, where yield leaks.{" "}
                <span className={styles.hookMuted}>
                  Until now, reading it meant a person in the rows.
                </span>{" "}
                Tendril reads it <em className={styles.ital}>continuously</em>.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE TREADMILL */}
      <section className={`${styles.section} ${styles.problem}`} id="treadmill">
        <div className={styles.wrap}>
          <Reveal>
            <div className={styles.kicker}>
              <span>The chemical treadmill</span>
            </div>
            <h2 className={styles.h2}>
              The treadmill speeds up. <em className={styles.ital}>The yield does not.</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className={styles.problemIntro}>
              548 weed species now resist the chemistry meant to kill them, and the
              count climbs every year. No new herbicide mode of action has reached the
              market since the 1980s. The response has been to spray more, on a
              calendar, across thousands of acres no one sees plant by plant. Resistance
              compounds. Soil biology thins. Inputs escalate. That is decay, amplified.
            </p>
          </Reveal>
          <div className={styles.problemGrid}>
            <Reveal className={`${styles.problemCard} ${styles.oldWay}`} delay={120}>
              <span className={styles.problemCardTag}>The chemical era</span>
              <ul className={styles.problemList}>
                <li>Spray the whole field on a schedule, not on need</li>
                <li>548 resistant weed species, and climbing</li>
                <li>No new mode of action in forty years</li>
                <li>One look per season, from a truck or a plane</li>
              </ul>
            </Reveal>
            <Reveal className={`${styles.problemCard} ${styles.newWay}`} delay={200}>
              <span className={styles.problemCardTag}>With Tendril</span>
              <ul className={styles.problemList}>
                <li>Small robots in the row, working every day</li>
                <li>Weeds removed mechanically, plant by plant</li>
                <li>Every pass remembered, every acre mapped</li>
                <li>Inputs fall as the field&apos;s memory compounds</li>
              </ul>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className={styles.problemPunch}>
              The chemical era sees the field <em className={styles.ital}>once a season</em>.
              Tendril sees it <em className={styles.ital}>every day</em>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* THE SYSTEM */}
      <section className={styles.section} id="system">
        <div className={styles.wrap}>
          <Reveal>
            <div className={styles.kicker}>
              <span>The system</span>
            </div>
            <h2 className={styles.h2}>
              Small machines. One <em className={styles.ital}>agentic loop</em>. Every acre.
            </h2>
          </Reveal>
          <div className={styles.steps}>
            {STEPS.map((s, i) => (
              <Reveal key={s.n} className={styles.step} delay={i * 110}>
                <span className={styles.stepNum}>{s.n}</span>
                <h3 className={styles.stepTitle}>{s.t}</h3>
                <p className={styles.stepBody}>{s.b}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className={styles.footnote}>
              Built on edge vision, persistent spatial memory, and an agentic decision
              layer that coordinates a modular fleet. The same intelligence stack,
              repointed from the living room to the field.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON */}
      <section className={`${styles.section} ${styles.compare}`}>
        <div className={styles.wrap}>
          <Reveal>
            <div className={styles.kicker}>
              <span>The difference</span>
            </div>
            <h2 className={styles.h2}>
              What a sprayer <em className={styles.ital}>never knew</em>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className={styles.table}>
              <div className={`${styles.row} ${styles.rowHead}`}>
                <div className={styles.cell}>Capability</div>
                <div className={styles.cell}>Tendril</div>
                <div className={styles.cell}>Sprayers &amp; big iron</div>
              </div>
              {COMPARE.map(([cap, ours, them]) => (
                <div className={styles.row} key={cap}>
                  <div className={`${styles.cell} ${styles.cellCap}`}>{cap}</div>
                  <div className={`${styles.cell} ${styles.cellTendril}`}>{ours}</div>
                  <div className={`${styles.cell} ${styles.cellOther}`}>{them}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={160}>
            <p className={styles.compareCaption}>
              They treat the field. <b>Tendril tends the plant.</b>
            </p>
          </Reveal>
        </div>
      </section>

      {/* THE MOAT */}
      <section className={`${styles.section} ${styles.intel}`} id="moat">
        <div className={styles.intelGlow} />
        <div className={styles.wrap}>
          <div className={styles.intelInner}>
            <Reveal>
              <div className={`${styles.kicker} ${styles.kickerCenter}`}>
                <span>The moat</span>
              </div>
              <p className={styles.intelText}>
                Hardware gets copied. A field that <em className={styles.italGreen}>remembers</em>{" "}
                does not. Every pass deepens a record of the land that no incumbent can
                reconstruct after the fact. The robots are the hands. The memory is the
                company.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className={styles.intelPunch}>A field that remembers.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHO WE BUILD WITH */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <Reveal>
            <div className={styles.kicker}>
              <span>Who we build with</span>
            </div>
            <h2 className={styles.h2}>
              Built <em className={styles.ital}>with</em> growers, not for them.
            </h2>
          </Reveal>
          <div className={styles.cards}>
            {BUILD_WITH.map((c, i) => (
              <Reveal key={c.title} className={styles.card} delay={i * 110}>
                <span className={styles.cardTag}>{c.tag}</span>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardBody}>{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STANCE */}
      <section className={`${styles.section} ${styles.sectionTight} ${styles.stance}`}>
        <div className={styles.wrap}>
          <Reveal>
            <div className={`${styles.kicker} ${styles.kickerCenter}`}>
              <span>The stance</span>
            </div>
            <p className={styles.stanceText}>
              Food is the hardest, most necessary, most durable problem there is. We are
              building the system that resists decay in the field, plant by plant, acre
              by acre, season over season.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA / CLOSE */}
      <section className={`${styles.section} ${styles.cta}`} id="contact">
        <div className={styles.ctaGlow} />
        <div className={styles.wrap}>
          <div className={styles.ctaInner}>
            <Reveal>
              <h2 className={styles.ctaTitle}>
                Build the <em className={styles.ital}>way off</em>.
              </h2>
              <p className={styles.ctaSub}>
                Tendril is in development, designed with family farms and engineered for
                the row. If you back founders who choose hard problems, we should talk.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className={styles.ctaRow}>
                <a className={styles.btnPrimary} href="mailto:filippo.fonseca@yale.edu">
                  Get in touch <Arrow />
                </a>
                <Link className={styles.btnGhost} href="/deck">
                  Read the brief
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.footerRow}>
            <div className={styles.footerBrand}>
              <Mark size={22} />
              Tendril
              <span className={styles.footerTag}>Agricultural infrastructure.</span>
            </div>
            <div className={styles.footerLinks}>
              <Link href="/deck">Brief</Link>
              <a href="mailto:filippo.fonseca@yale.edu">Contact</a>
              <span>© 2026 Tendril</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
