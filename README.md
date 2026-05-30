# Presentation hub

Personal presentation-making hub. Each deck lives in its own sibling folder. The repo ships two visual presets, a slide-pattern library, and a slash command that scaffolds a new deck from an instruction markdown.

## The three-step pipeline

1. **Research agent → spec.md.** Hand the research agent [`RESEARCH_AGENT_BRIEF.md`](./RESEARCH_AGENT_BRIEF.md) with the topic + audience. It produces a markdown spec.
2. **`/new-prez` → working deck.** Drop the spec at the repo root and run `/new-prez`. It asks for the spec path + any overrides, reads it, scaffolds the chosen preset into a new folder, themes it, writes slides, and reports back.
3. **`npm run dev`.** Iterate in the new folder.

## Presets

| | `academic` (DRD-3 vibe) | `pitch` (Ocura vibe) |
| - | --- | --- |
| Canvas | light paper `#fbfaf7`, near-black ink | dark `#0a0a0a`, warm cream foreground |
| Display | Spectral serif headlines | Geist sans + Instrument Serif italic accents |
| Step | one slide per advance | beat-driven within scenes |
| Chrome | brand band header, institutional logos in footer, registration-tick figures | minimal header, neumorphic surfaces, accent glow, progress bar |
| For | design reviews, scientific talks, lab meetings | investor pitches, demo days, keynotes |

Both presets share the same controls: keyboard nav, swipe, jump-to-slide menu, audio chime, presenter notes (academic) / click-to-advance (pitch), full reduced-motion respect.

## Repo layout

```
presentation-slides/
├── CLAUDE.md                 agent orientation (auto-loaded)
├── RESEARCH_AGENT_BRIEF.md   hand to the research agent
├── .claude/commands/
│   └── new-prez.md           the slash command
├── docs/
│   ├── DESIGN_SYSTEM.md      tokens, surfaces, motion, type
│   ├── SLIDE_PATTERNS.md     catalog of slide layouts
│   └── INSTRUCTION_SPEC.md   what a spec.md must contain
├── templates/
│   ├── academic/             scaffolding for academic decks
│   └── pitch/                scaffolding for pitch decks
└── drd-v3/                   first presentation; reference deck
```

## Make one

```
/new-prez
```

The slash command will ask you for:
1. **Path to the instruction markdown** (e.g. `./sosa-spec.md`)
2. **Any extra context or overrides** (free-text; optional)

Everything else comes from the spec file.

## References

- [`CLAUDE.md`](./CLAUDE.md) — agent guidance
- [`docs/DESIGN_SYSTEM.md`](./docs/DESIGN_SYSTEM.md) — visual vocabulary
- [`docs/SLIDE_PATTERNS.md`](./docs/SLIDE_PATTERNS.md) — slide-layout catalog
- [`docs/INSTRUCTION_SPEC.md`](./docs/INSTRUCTION_SPEC.md) — what the builder expects
- [`RESEARCH_AGENT_BRIEF.md`](./RESEARCH_AGENT_BRIEF.md) — handoff for the research agent
- `drd-v3/` — the gold-standard academic deck
- `drd-v3/ocura-landing/app/deck/` — the gold-standard pitch deck (nested as a reference)
