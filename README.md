# presentation-slides

An opinionated slide-deck workflow for Claude Code. Two visual presets, a slash command that scaffolds new decks from a markdown spec, and a small docs tree that keeps the design language coherent across every deck you build.

This repo holds both the open-source-ready **kit** (templates + docs + slash command) and Filippo Fonseca's personal **decks** built with it. The kit is what you'd fork; the decks are reference implementations.

---

## Quick start

```bash
# Inside Claude Code, at the repo root:
/new-prez
```

The slash command will ask:

1. **Path to the instruction markdown** (e.g. `decks/sosa-spec.md`)
2. **Any extra context or overrides** (free-text; optional)

It then reads the spec, picks the right preset, scaffolds a new Next.js deck under `decks/<folder>/`, themes it, writes every slide and its speaker notes, and runs lint.

You don't have a spec yet? Hand the research agent [`RESEARCH_AGENT_BRIEF.md`](./RESEARCH_AGENT_BRIEF.md) with your topic and audience. It writes the spec for you in the format `/new-prez` expects.

To iterate after scaffold:

```bash
cd decks/<folder>
npm install        # if the slash command didn't already
npm run dev        # iterate locally
```

---

## What's in the box

```
presentation-slides/
├── README.md                   you are here
├── CLAUDE.md                   how Claude Code agents should behave in this repo
├── ARCHITECTURE.md             how the pieces fit together
├── CONTRIBUTING.md             how to evolve the templates / add a preset
├── LICENSE                     MIT
├── RESEARCH_AGENT_BRIEF.md     hand to the research agent that writes specs
├── .claude/commands/
│   └── new-prez.md             the slash command playbook
├── docs/
│   ├── DESIGN_SYSTEM.md        tokens, surfaces, motion, type, atmosphere
│   ├── SLIDE_PATTERNS.md       catalog of slide layouts per preset
│   └── INSTRUCTION_SPEC.md     what a spec.md must contain
├── templates/
│   ├── academic/               light/paper preset (engineering paper feel)
│   └── pitch/                  dark/neumorphic preset (investor / cinematic)
└── decks/                      Filippo's actual decks built with the kit
    ├── drd-v3/                 the gold-standard academic deck
    ├── tendril-pitch/          the gold-standard pitch + landing combo
    └── *-spec.md               the markdown specs those decks were built from
```

---

## The two presets

| | `academic` | `pitch` |
| - | --- | --- |
| **Lineage** | DRD-3 design review at HMS/MGH | Ocura investor preview + Tendril pitch |
| **Mood** | engineering paper, restrained, institutional | venture pitch, cinematic, neumorphic |
| **Canvas** | `#fbfaf7` paper, near-black ink | `#0a0a0a` near-black, warm cream foreground |
| **Display** | Spectral serif headlines | Geist sans + Instrument Serif italic accents (Tendril overrides to Hanken Grotesk + Fraunces) |
| **Step granularity** | one slide per advance | one beat per advance (scenes contain N beats) |
| **Chrome** | brand band header, institutional logos in footer, registration ticks on figures | minimal header with brand mark + wordmark, neumorphic surfaces, accent glow, progress bar |
| **For** | design reviews, scientific talks, lab meetings, faculty audiences | investor pitches, demo days, keynotes, external launches |

Both presets share the **same control surface**: keyboard nav (arrows, space, page-keys, Home/End, G to jump), swipe, jump-to-slide menu, audio chime (toggleable), full reduced-motion respect, and a skip-to-deck link.

Each preset is a self-contained Next.js scaffold under `templates/`. They're copied (not symlinked) when you scaffold a new deck so you can diverge per-presentation without polluting the canonical template.

---

## The three-step pipeline

```
┌─────────────────┐   ┌─────────────────┐   ┌──────────────────┐
│ research agent  │ → │ /new-prez       │ → │ iterate in deck  │
│ → instruction   │   │ → working Next  │   │ → npm run dev    │
│   spec.md       │   │   .js deck      │   │   tweak slides   │
└─────────────────┘   └─────────────────┘   └──────────────────┘
     RESEARCH_AGENT_      .claude/commands/      decks/<folder>/
     BRIEF.md             new-prez.md
```

1. **Research agent → spec.md.** Hand the research agent [`RESEARCH_AGENT_BRIEF.md`](./RESEARCH_AGENT_BRIEF.md) with the topic + audience. It produces a single markdown spec, formatted per [`docs/INSTRUCTION_SPEC.md`](./docs/INSTRUCTION_SPEC.md), and drops it in `decks/`.
2. **`/new-prez` → working deck.** From the repo root, run `/new-prez`. It asks for the spec path, scaffolds the chosen preset into `decks/<folder>/`, themes it, writes every slide, runs lint, and reports.
3. **`npm run dev`.** Open the deck folder, iterate by talking to Claude there.

The spec is the contract. Everything else is mechanical.

---

## Stack

Both templates use the same stack:

- **Next.js 16.2.4** App Router (no `pages/`).
- **React 19.2** with TypeScript (strict).
- **Tailwind CSS v4** via PostCSS plugin. Config lives in CSS (`@theme inline { … }`), not in a `tailwind.config.js`.

The shared control surface lives in each template's `app/DeckClient.tsx` (pitch) or `components/Deck.tsx` (academic) — it's identical across all decks built from a given preset, and intentionally not editable for content reasons.

---

## Roadmap for open-sourcing

The OSS surface is the **root** of this repo:

- `templates/`, `docs/`, `.claude/commands/`, `CLAUDE.md`, `CONTRIBUTING.md`, `LICENSE`, `RESEARCH_AGENT_BRIEF.md`, `README.md`, `ARCHITECTURE.md`.

The personal surface is `decks/`. When the kit is extracted as its own repository, `decks/` stays private (or moves to a fork that uses the kit as a dependency).

Pre-OSS-extraction polish that would be nice to do:

- [ ] Replace the example deck references in `RESEARCH_AGENT_BRIEF.md` and `docs/SLIDE_PATTERNS.md` with anonymized sample specs that live in `templates/<preset>/sample-spec.md`.
- [ ] Add a real `templates/<preset>/README.md` for each preset explaining how to clone + customize without the slash command.
- [ ] Add a screenshot/GIF strip to the README hero showing both presets.
- [ ] CI: lint both templates on push, build them once to catch breakage.
- [ ] Pin `eslint` config so `npm run lint` doesn't hit the circular-config error currently shared with the template family.

---

## Read next

- [`CLAUDE.md`](./CLAUDE.md) — how Claude Code agents behave in this repo
- [`ARCHITECTURE.md`](./ARCHITECTURE.md) — the three layers (templates → spec → builder) and how they hand off
- [`CONTRIBUTING.md`](./CONTRIBUTING.md) — how to evolve a preset, add a slide pattern, or contribute a new preset
- [`docs/DESIGN_SYSTEM.md`](./docs/DESIGN_SYSTEM.md) — tokens, surfaces, motion, type
- [`docs/SLIDE_PATTERNS.md`](./docs/SLIDE_PATTERNS.md) — slide-layout catalog
- [`docs/INSTRUCTION_SPEC.md`](./docs/INSTRUCTION_SPEC.md) — what the builder expects
- [`RESEARCH_AGENT_BRIEF.md`](./RESEARCH_AGENT_BRIEF.md) — handoff for the research agent

## License

MIT. See [`LICENSE`](./LICENSE).
