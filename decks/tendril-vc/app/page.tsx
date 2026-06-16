"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./landing.module.css";
import Reveal from "./components/Reveal";
import Mark from "./components/Mark";
import YaleMark from "./components/YaleMark";
import FarmFile from "./components/FarmFile";
import SwarmOverlay from "./components/SwarmOverlay";
import ScrollProgress from "./components/ScrollProgress";

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

const STEPS = [
  {
    n: "01",
    t: "Perceive",
    b: "Robots read the field at leaf level. Every plant classified at the source: crop, weed, pest, disease, damage.",
  },
  {
    n: "02",
    t: "Remember",
    b: "Every pass writes to a persistent map of the land. The system knows what failed last season and watches for it.",
  },
  {
    n: "03",
    t: "Decide",
    b: "The agentic layer plans the fleet's work against the field's memory and the grower's goals. This is the part no one else has.",
  },
  {
    n: "04",
    t: "Act",
    b: "Weeds removed mechanically, treatment placed plant by plant. The result is measured and fed back into the loop.",
  },
];

const COMPARE: [string, string, string][] = [
  ["Scope", "Daily work + the long-range plan", "One task, one season"],
  ["Decisioning", "Agentic: decides, then acts", "Shows data, you decide"],
  ["Integration", "One operating system", "An assortment of apps"],
  ["In the field", "A swarm that acts, plant by plant", "Sensors you read, or none"],
  ["Memory", "Persistent, compounding (.farm)", "Resets every view"],
  ["Chemistry", "Mechanical, chemical-free", "Sprays, or only watches"],
];

const BUILD_WITH = [
  {
    tag: "Row crops",
    title: "Row-crop growers",
    img: "/images/field-plowed.jpg",
    body: "Corn, cotton, soybeans, wheat. Margins are razor-thin and the iron sits idle most of the year. We attack the single largest line on the farm.",
  },
  {
    tag: "Specialty",
    title: "Specialty farms",
    img: "/images/farmer-2.jpg",
    body: "Where labor runs 50 to 70 percent of cost and almost nothing is automated. The work is repetitive, skilled, and unfillable. The intelligence carries it.",
  },
  {
    tag: "The land",
    title: "The soil itself",
    img: "/images/soil-hands.jpg",
    body: "Less compaction, fewer chemicals, biology that recovers. The advantages that make us defensible are the same ones that keep the ground alive.",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const heroPhotoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hero photo parallax: drift the field down as you scroll (rAF, no re-render).
  useEffect(() => {
    const el = heroPhotoRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY * 0.16, 150);
        el.style.transform = `scale(1.12) translateY(${y}px)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={styles.root}>
      <ScrollProgress />
      {/* NAV */}
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <a className={styles.brand} href="#top">
          <Mark size={26} />
          Tendril
        </a>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#system">
            The system
          </a>
          <a className={styles.navLink} href="#format">
            The .farm file
          </a>
          <a className={styles.navLink} href="#moat">
            The funnel
          </a>
          <Link className={styles.navCta} href="/deck">
            Read the brief <Arrow />
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <header className={styles.hero} id="top">
        <div className={styles.heroMedia}>
          <div ref={heroPhotoRef} className={styles.heroPhoto} />
          <div className={styles.aurora} />
          <div className={styles.contours} />
        </div>
        <div className={styles.heroScrim} />
        <SwarmOverlay />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            The physically intelligent operating system for the{" "}
            <em className={styles.ital}>open field</em>.
          </h1>
          <p className={styles.heroSub}>
            Not a dashboard, not a single-task tool.{" "}
            <span className={styles.heroEmph}>One cohesive system</span>{" "}
            that runs a farm&apos;s daily work and its long-range plan,{" "}
            <span className={styles.heroEmph}>
              delivered through a swarm of small, chemical-free robots
            </span>
            . Built with and for the small family farms that are most of American
            agriculture.
          </p>
          <p className={styles.heroTraits}>
            Our system is <span className={styles.traitOn}>physically intelligent</span>.{" "}
            <span className={styles.traitOn}>Agentic</span>. Oh, and{" "}
            <span className={styles.traitGreen}>chemical-free</span>.
          </p>
          <div className={styles.heroCtas}>
            <Link className={styles.btnPrimary} href="/deck">
              Read the brief <Arrow />
            </Link>
            <a className={styles.btnGhost} href="#system">
              See the system
            </a>
            <div className={styles.heroAside}>
              <span className={styles.heroAsideText}>
                We&apos;re not afraid to tackle big problems.
              </span>
              <svg
                className={styles.heroAsideArrow}
                width="46"
                height="58"
                viewBox="0 0 46 58"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 7 C 33 9, 43 26, 31 46"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M22 39 L 31 48 L 40 39"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className={styles.yaleCredit}>
            <span className={styles.yaleDot} />
            <span>
              Built by engineers and researchers from <YaleMark height={12} /> working on
              food security and chemical-free farming to feed a growing world without
              taking more of its land.
            </span>
          </div>
        </div>

        <div className={styles.scrollCue}>
          Scroll
          <svg
            className={styles.scrollCueArrow}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8 3v10M4 9l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
              <div
                className={styles.hookImg}
                style={{ backgroundImage: "url(/images/farmer-4.jpg)" }}
              />
            </Reveal>
            <Reveal delay={120}>
              <div className={styles.kicker}>
                <span>The premise</span>
              </div>
              <p className={styles.hookText}>
                Every acre already encodes what it needs: where weeds push, where the
                soil tires, where yield leaks.{" "}
                <span className={styles.hookMuted}>
                  Until now, reading it meant a person in the rows.
                </span>{" "}
                Tendril reads it, decides, and{" "}
                <em className={styles.ital}>acts</em>.
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
              Agriculture runs on a <em className={styles.ital}>chemical treadmill</em>.
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
              The chemical era sees the field once a season.
            </p>
            <p className={styles.problemPunchCallout}>
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
          <Reveal delay={80}>
            <p className={styles.problemIntro}>
              Perception, memory, decision, action: four steps tied into a single system
              that never stops running. That closed loop is the operating system. The
              same loop runs whether the limb on the end is a weeder, a disease arm, or a
              seeder.
            </p>
          </Reveal>
          <div className={styles.steps}>
            {STEPS.map((s, i) => (
              <Reveal key={s.n} className={styles.step} delay={i * 90}>
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

      {/* CONCEPT RENDER — THE SWARM */}
      <section className={styles.renderBand}>
        <div className={styles.renderBandBg} />
        <div className={styles.renderBandInner}>
          <Reveal>
            <span className={styles.renderTag}>Concept render · hardware in development</span>
            <p className={styles.renderText}>The hands of the system:</p>
            <p className={styles.renderSub}>
              A coordinated team of <strong>small, modular, chemical-free robots</strong>,
              swappable by task and directed by <strong>the agentic core</strong>. The{" "}
              <strong>tendrils of the operating system</strong>, in the field.
            </p>
          </Reveal>
        </div>
      </section>

      {/* NOT A DASHBOARD — THE CATEGORY */}
      <section className={`${styles.section} ${styles.compare}`}>
        <div className={styles.wrap}>
          <Reveal>
            <div className={styles.kicker}>
              <span>The category</span>
            </div>
            <h2 className={styles.h2}>
              Not a dashboard. <em className={styles.ital}>An operating system</em>.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className={styles.problemIntro}>
              The field is crowded with point solutions: a sensor company here, an app
              there, a single-task rover somewhere else. Each does one thing, none of
              them act on their own, and none of them talk to each other. Tendril is the
              opposite: one agentic system that ties perception, memory, decision, and
              action into a single stack.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className={styles.table}>
              <div className={`${styles.row} ${styles.rowHead}`}>
                <div className={styles.cell}>Capability</div>
                <div className={styles.cell}>Tendril</div>
                <div className={styles.cell}>Point tools &amp; dashboards</div>
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
              They hand you data. <b>Tendril runs the farm.</b>
            </p>
          </Reveal>
        </div>
      </section>

      {/* THE .farm FILE */}
      <section className={`${styles.section} ${styles.farmFile}`} id="format">
        <div className={styles.wrap}>
          <Reveal>
            <div className={styles.kicker}>
              <span>The format</span>
            </div>
            <h2 className={styles.h2}>
              Every day on the farm compiles to <em className={styles.ital}>one file</em>.
            </h2>
          </Reveal>
          <div className={styles.farmGrid}>
            <Reveal>
              <p className={styles.farmLead}>
                The system underneath is complex. <b>.farm</b> is how it stays
                legible: every day on every field aggregates into one interpretable,
                exportable file. Every sensor reading, every robot action, every
                decision the system made, every word from the grower.
              </p>
              <p className={styles.farmLead}>
                It is dynamic, not a static log. The farm-OS agent reads it as a living,
                complete overview of the land, and the grower can export and own it.
                Stack the days and you have a record <b>no incumbent can reconstruct</b>.
              </p>
              <div className={styles.farmTags}>
                <span className={styles.farmTag}>Interpretable</span>
                <span className={styles.farmTag}>Exportable</span>
                <span className={styles.farmTag}>Dynamic</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <FarmFile />
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE FUNNEL — SIGNAL TO EXECUTION */}
      <section className={`${styles.section} ${styles.intel}`} id="moat">
        <div className={styles.intelGlow} />
        <div className={styles.wrap}>
          <div className={styles.intelInner}>
            <Reveal>
              <div className={`${styles.kicker} ${styles.kickerCenter}`}>
                <span>The whole funnel</span>
              </div>
              <p className={styles.intelText}>
                The farm&apos;s many complex, multi-dimensional inputs synthesize into one
                cohesive <b>.farm</b> file the agentic layer can interpret, then it works
                with the grower to decide, monitor, and make the changes the field needs.
                And because there are real robots in the field,{" "}
                <em className={styles.italGreen}>execution isn&apos;t abstract</em>: the
                system only commits to what it can deploy, then deploys it.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className={styles.intelPunch}>Execution, not advice.</p>
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
          <Reveal delay={80}>
            <p className={styles.problemIntro}>
              Family farms are 96% of US agriculture, and most of them are small. Big
              iron was never designed for them. Tendril is. We design with the grower,
              for the work they actually do.
            </p>
          </Reveal>
          <div className={styles.cards}>
            {BUILD_WITH.map((c, i) => (
              <Reveal key={c.title} className={styles.card} delay={i * 110}>
                <div
                  className={styles.cardImg}
                  style={{ backgroundImage: `url(${c.img})` }}
                />
                <span className={styles.cardTag}>{c.tag}</span>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardBody}>{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE APPROACH — SMALL & MODULAR */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <Reveal>
            <div className={styles.kicker}>
              <span>The approach</span>
            </div>
            <h2 className={styles.h2}>
              Small and modular. Like <em className={styles.ital}>microreactors</em>, not
              megaprojects.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className={styles.problemIntro}>
              The smartest hardware in agriculture costs hundreds of thousands of dollars
              and sits on a single farm. We took the path that worked for power: instead
              of one massive, centralized machine, a fleet of small, mass-manufacturable,
              modular units that deploy anywhere and price on the acre.
            </p>
          </Reveal>
          <div className={styles.cards}>
            <Reveal className={styles.card} delay={0}>
              <span className={styles.cardTag}>Mass-manufacturable</span>
              <h3 className={styles.cardTitle}>Built at volume</h3>
              <p className={styles.cardBody}>
                One design, produced at scale. Unit cost falls as the fleet grows, not
                up front, per farm.
              </p>
            </Reveal>
            <Reveal className={styles.card} delay={110}>
              <span className={styles.cardTag}>Modular</span>
              <h3 className={styles.cardTitle}>Swappable by task</h3>
              <p className={styles.cardBody}>
                Snap in a weeder, a scout, a disease arm. One platform, many jobs, across
                the whole season.
              </p>
            </Reveal>
            <Reveal className={styles.card} delay={220}>
              <span className={styles.cardTag}>Affordable</span>
              <h3 className={styles.cardTitle}>Within reach</h3>
              <p className={styles.cardBody}>
                No $400,000 smart tractor to buy. Priced on the acre, for the family
                farms that are most of US agriculture, and unlike big iron, it ships with
                a real agentic operating system.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STANCE / STAKES */}
      <section className={`${styles.section} ${styles.sectionTight} ${styles.stance}`}>
        <div className={styles.stanceBg} />
        <div className={styles.wrap}>
          <Reveal>
            <div className={`${styles.kicker} ${styles.kickerCenter}`}>
              <span>The stakes</span>
            </div>
            <p className={styles.stanceStat}>
              Ten billion people by 2060. The same land, or less.
            </p>
            <p className={styles.stanceText}>
              We can&apos;t deforest our way there. The only lever left is efficiency per
              acre, and that is the company we&apos;re building: the system that resists
              decay in the field, plant by plant, season over season.
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
              <div className={`${styles.kicker} ${styles.kickerCenter}`}>
                <span>Get in touch</span>
              </div>
              <h2 className={styles.ctaTitle}>
                Step off the <em className={styles.ital}>treadmill</em>.
              </h2>
              <p className={styles.ctaSub}>
                Tendril is the operating system that steps off the chemical treadmill:
                chemical-free robots and an agentic intelligence layer, built with family
                farms. We&apos;re in development, and if you back founders who choose hard
                problems, we should talk.
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
              <span className={styles.footerTag}>A physically intelligent farm operating system.</span>
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
