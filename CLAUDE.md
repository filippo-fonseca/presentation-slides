# CLAUDE.md

This file orients Claude Code agents working in this repo. It is automatically loaded into context.

## Standing rule: commit every change, in perpetuity

Every change to the repo — slide copy, theme tokens, illustrations, components, scaffolding, even speaker notes — must be committed to git, in logical chunks, as you go. This is non-negotiable and applies forever, across every session. The reasons:

- **Reversion.** Filippo iterates fast. Mistakes are normal. A clean commit history means any change can be reverted in one command. Long-running uncommitted state makes that impossible.
- **Version control as the audit trail.** The git log is the canonical record of how a deck or landing evolved. If it isn't in `git log`, it isn't tracked.
- **Push when asked.** When Filippo says "push" or similar, push to the configured remote without forcing — never `git push --force` without an explicit instruction.

**How to apply:**

- Don't batch a session's worth of work into a single end-of-day commit. Commit per logical unit (one slide redesign, one palette swap, one new component, one round of copy edits).
- Use the user's existing commit-message style (short, lowercase, imperative when natural). See `git log --oneline -20` for examples.
- Include `Co-Authored-By: Claude` as already specified in the global commit protocol.
- After committing, briefly tell Filippo what was committed in the response summary.
- If the working tree has accumulated uncommitted changes from previous sessions, catch up by making focused commits before continuing new work.

## What this repo is

A **slide-deck workflow** built around two visual-system templates, a slash command, and a research-agent brief. The repo is intended to eventually be open-sourced as a kit; Filippo's personal decks live alongside under `decks/`.

Two halves:

| | OSS-ready (root) | Personal (decks/) |
| - | --- | --- |
| **Purpose** | Templates, docs, slash command, agent briefs | Filippo's actual presentations + their specs |
| **Edits to** | Affect every future deck | Affect only that deck |
| **Examples** | `templates/`, `docs/`, `.claude/commands/`, `RESEARCH_AGENT_BRIEF.md` | `decks/drd-v3/`, `decks/tendril-pitch/`, `decks/agtech-startup.md` |

```
presentation-slides/
├── CLAUDE.md                   (you are here)
├── README.md                   OSS-facing overview
├── ARCHITECTURE.md             how the pieces fit together
├── CONTRIBUTING.md             how to evolve the templates
├── LICENSE                     MIT
├── RESEARCH_AGENT_BRIEF.md     hand to the research agent
├── .claude/commands/
│   └── new-prez.md             the slash command — scaffolds a deck
├── docs/
│   ├── DESIGN_SYSTEM.md        tokens, surfaces, motion, type, atmosphere
│   ├── SLIDE_PATTERNS.md       catalog of slide layouts per preset
│   └── INSTRUCTION_SPEC.md     what a spec.md must contain
├── templates/
│   ├── academic/               light/paper preset (DRD-3 lineage)
│   └── pitch/                  dark/neumorphic preset (Ocura/Tendril lineage)
└── decks/                      Filippo's personal presentations
    ├── drd-v3/                 gold-standard academic deck
    ├── tendril-pitch/          agtech founders' pitch + landing
    └── *-spec.md               instruction specs the builder consumed
```

## How a new presentation gets made

The pipeline is **three steps**, each with a different agent or tool:

1. **Filippo + research agent.** Filippo gives the research agent the topic + `RESEARCH_AGENT_BRIEF.md`. The research agent produces a single markdown file — the **instruction spec** — formatted per `docs/INSTRUCTION_SPEC.md`. Filippo drops that spec at `decks/<spec-name>.md`.

2. **Filippo + `/new-prez` (you).** Filippo runs `/new-prez`. You ask for the spec path + any extra context, read the spec + design docs, copy the appropriate template into `decks/<folder>/`, theme it, write the slides, and verify it lints. You report back what was built and any open items.

3. **Filippo.** Runs `npm run dev` in `decks/<folder>/`, iterates by talking to Claude there.

## What you (the agent) should do in different contexts

### "Make me a new presentation" / `/new-prez`
Follow `.claude/commands/new-prez.md` — the slash command is the canonical playbook. The short version: **ask for the spec path + extra context**, read it + the design docs, pick a preset, scaffold from `templates/<preset>/` into `decks/<folder>/`, theme it, write slides, run `npm run lint`, report.

### "Edit slide N of <existing-deck>"
You're working inside `decks/<folder>/`, not the hub. The deck shell (`Deck.tsx`, `SlideShell.tsx`, `DeckClient.tsx`, etc.) is owned by the template and shouldn't change for content reasons. Slides live under `components/slides/` (academic) or `app/scenes/` (pitch). Match the existing voice and pattern catalog.

### "Generalize this pattern back to the template"
If a pattern that emerges from a real deck belongs in the catalog, add it to `docs/SLIDE_PATTERNS.md` and consider adding a generic version to the relevant template. Don't pollute a deck folder with stuff that isn't its own content.

### "Open-source / publish this"
The OSS-ready surface is the root: `templates/`, `docs/`, `.claude/commands/new-prez.md`, `RESEARCH_AGENT_BRIEF.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `LICENSE`, `README.md`, `ARCHITECTURE.md`. Personal decks under `decks/` are reference material and stay private if/when the OSS kit is extracted. Read `ARCHITECTURE.md` and `CONTRIBUTING.md` before reorganizing further.

## Stack (both templates)

- **Next.js 16.2.4** App Router (no `pages/`). **Important:** this version has breaking changes from prior majors — read `node_modules/next/dist/docs/` before writing Next.js code rather than relying on memory.
- **React 19.2** + TypeScript (strict). Path alias `@/*` → repo root.
- **Tailwind CSS v4** via the PostCSS plugin. `app/globals.css` uses v4 syntax: `@import "tailwindcss"` (not `@tailwind` directives) and `@theme inline { … }` to expose CSS variables as Tailwind tokens. **Do not** add a `tailwind.config.{js,ts}` — config lives in CSS.

## Style preferences for Filippo

- **No marketing voice.** Restrained, first-person, no exclamation marks or emoji in deck UI. Speaker notes can be more conversational.
- **No em dashes.** Use colons, commas, or new sentences. This applies to all deck copy and speaker notes. (See git history for prior sweeps.)
- **One argument per slide.** Density follows from the spec's voice + duration; don't crowd.
- **Real specifics over generic.** Numbers, names, dates. The DRD-3 deck names members, dates, materials — it's deliberate.
- **Honest TBDs.** When a number is pending, say so on the slide ("pending verification"). Don't hide gaps.
- **Match the existing decks.** `decks/drd-v3/` is the gold-standard academic; `decks/drd-v3/ocura-landing/app/deck/` and `decks/tendril-pitch/` are the gold-standard pitches. When in doubt, read what's already there.

## Things NOT to do

- Don't blend presets. A deck is academic OR pitch, not both.
- Don't edit `templates/` to fit one specific presentation — that's why we copy.
- Don't put personal presentations at the repo root. They go under `decks/`.
- Don't create READMEs or docs unprompted. The ones that exist (this CLAUDE.md, README.md, ARCHITECTURE.md, CONTRIBUTING.md, the docs/ tree, template READMEs, the research-agent brief) are the canonical set.
- Don't run `npm run dev` autonomously — that's Filippo's. `npm run lint` is fine.

## Existing presentations under `decks/`

- **`decks/drd-v3/`** — a 16-slide design review of the DRD-3 device, presented to Dr. Mehmet D. Aşık at Harris Orthopaedics Lab / Harvard Medical School / MGH. Academic preset. Brand: MGB teal `#16767B`. Reference for academic-preset patterns.
- **`decks/drd-v3/ocura-landing/`** — the Ocura marketing site, including the investor-preview deck at `/deck`. Pitch preset reference. (Nested inside `drd-v3/` for historical reasons — it was the design reference Filippo gave the DRD-3 build agent. Not a separate active presentation; treat it as a reference.)
- **`decks/tendril-pitch/`** — agtech founders' pitch + consumer landing for Tendril (agentic farm OS). Pitch preset. Brand: persimmon `#E5602C` + chartreuse `#B5D33D`. Sprout-T mark. Reference for full landing+deck combo.
- **`decks/agtech-startup.md`** — the instruction spec the Tendril deck was built from.
