# Architecture

How the pieces in this repo connect, and what each one's job is.

## The mental model

Three layers, one direction:

```
┌────────────────────────────────────────────────────────────────┐
│  Layer 1: TEMPLATES                                            │
│  templates/academic/, templates/pitch/                         │
│  Self-contained Next.js scaffolds. Copied per-deck.            │
│  Owns: design system, control surface, chrome, slide shells.   │
└────────────────────────────────────────────────────────────────┘
                              ↑ copied from
┌────────────────────────────────────────────────────────────────┐
│  Layer 2: BUILDER                                              │
│  .claude/commands/new-prez.md (the slash command)              │
│  Reads spec, picks preset, copies template, themes, writes.    │
│  Owns: the workflow. Stateless; the spec is the contract.      │
└────────────────────────────────────────────────────────────────┘
                              ↑ consumes
┌────────────────────────────────────────────────────────────────┐
│  Layer 3: SPECS + DECKS                                        │
│  decks/<name>-spec.md → decks/<folder>/                        │
│  One spec per deck. One folder per deck.                       │
│  Owns: actual content (titles, body, speaker notes, theme).    │
└────────────────────────────────────────────────────────────────┘
```

Information flows downward: templates and docs define what's possible; the spec describes one specific deck; the builder materializes the deck by copying a template and filling it.

After scaffold, the deck is independent. Editing `decks/<folder>/` never touches the template; editing `templates/<preset>/` never touches an existing deck. That's the firewall.

## Layer 1 — Templates

A template is a complete, runnable Next.js project under `templates/<preset>/`. There are two presets today:

- `templates/academic/` — paper-like, restrained, institutional. Engineering paper feel.
- `templates/pitch/` — dark, neumorphic, cinematic. Venture / keynote feel.

Each template carries:

- **Design tokens** in `app/globals.css` (`:root` CSS variables surfaced to Tailwind via `@theme inline`).
- **Surface utilities** (cards, chips, neumorphic surfaces) in the same file.
- **Atmosphere classes** (`grain`, `glow-radial`, etc.) for the brand mood.
- **Control surface** — the kbd/swipe/jump/audio chime layer in `app/DeckClient.tsx` (pitch) or `components/Deck.tsx` (academic). This is *not* meant to be edited per-deck; if a deck needs new behavior, generalize it back into the template.
- **Example slides** showing the canonical patterns from `docs/SLIDE_PATTERNS.md`. The builder uses these as structural starting points and removes them once real content replaces them.

Templates are intentionally opinionated. They're not generic Next.js starters — they enforce voice, type, motion, and chrome so every deck made from them looks like it belongs to the same family.

## Layer 2 — The builder (the slash command)

`/new-prez` is the only "agent code" in the repo. It's a single markdown file at `.claude/commands/new-prez.md`. It executes a deterministic 8-step process:

1. Ask the user for the spec path + any overrides.
2. Read the spec + the three docs (`INSTRUCTION_SPEC.md`, `DESIGN_SYSTEM.md`, `SLIDE_PATTERNS.md`).
3. Pick the preset (from frontmatter), copy the template to `decks/<folder>/`.
4. Apply the theme — colors, fonts, mark, metadata.
5. Curate any image assets the spec references.
6. Generate one component file per slide, register it, and copy speaker notes.
7. Install + lint.
8. Commit + report.

The slash command itself contains no React or Next.js code. Everything it edits lives in the template that was just copied. This means an OSS contributor can change the workflow without touching either preset.

## Layer 3 — Specs + decks

A spec is one markdown file. The format is documented in [`docs/INSTRUCTION_SPEC.md`](./docs/INSTRUCTION_SPEC.md). The shape:

```markdown
---
preset: pitch | academic
folder: <kebab-case>
title: "…"
short_title: "…"
description: "…"
audience: "…"
duration: "…"
---

## Theme
…

## Voice
…

## Images        # optional
…

## Slides

### Slide 1 — <slug>
- pattern: …
- beats: …      # pitch only
#### Title
…
#### Body
…
#### Speaker notes
…
```

The spec is the entire information contract between the human and the builder. Anything not in the spec falls back to the preset's defaults — and the builder flags those fallbacks in its summary so you can correct them.

A deck — once scaffolded — is a normal Next.js project. You run `npm run dev` inside `decks/<folder>/` and iterate. The deck has zero coupling back to the template after the initial copy.

## Where things live, by responsibility

| Responsibility | Lives in |
| --- | --- |
| Visual language (colors, surfaces, motion, type) | `templates/<preset>/app/globals.css` + `app/deck.css` (pitch) |
| Slide-shell chrome (header, footer, controls) | `templates/<preset>/app/DeckClient.tsx` (pitch) or `components/Deck.tsx` (academic) |
| Slide patterns catalog (vocabulary) | `docs/SLIDE_PATTERNS.md` |
| Example slides (concrete implementations) | `templates/<preset>/app/scenes/*.tsx` or `components/slides/*.tsx` |
| What the spec must contain | `docs/INSTRUCTION_SPEC.md` |
| What the design tokens mean | `docs/DESIGN_SYSTEM.md` |
| How to build a new deck (workflow) | `.claude/commands/new-prez.md` |
| How to write a spec (for the research agent) | `RESEARCH_AGENT_BRIEF.md` |
| One deck's content (titles, body, speaker notes) | `decks/<folder>/app/scenes/*.tsx` (or `components/slides/*.tsx`) + `lib/content.ts` / `lib/slides.ts` |
| One deck's theme overrides | `decks/<folder>/app/globals.css` (the `:root` block + the rgba glows) |
| One deck's mark | `decks/<folder>/app/components/Mark.tsx` (pitch) or `components/ui/Mark.tsx` (academic) |
| One deck's speaker notes | `decks/<folder>/SPEAKER_NOTES.md` (a sidecar that mirrors the on-slide arc verbatim) |

## Beats vs slides

The two presets advance differently:

- **Academic** — one slide per advance. The slide is the unit of progress.
- **Pitch** — one *beat* per advance, multiple beats per scene. A scene can hold 1–6 beats and reveal content progressively as the speaker presses space.

The slide-registry shape differs accordingly:

- Academic: `SLIDES: { id, title, sectionLabel, Component, notes, bare? }[]` in `lib/slides.ts`.
- Pitch: `SCENES: { id, title, beats }[]` in `lib/content.ts`, plus a `SCENE_COMPONENTS` record in `app/DeckClient.tsx`.

Each scene component receives `{ beat: number, totalBeats: number, chime: SceneChime }` and progressively reveals content via `beat >= N` gates.

## Reduced motion + accessibility

Both presets honor `prefers-reduced-motion: reduce` — animations collapse to their end-states. The control surface is keyboard-first (arrows, space, page-keys, Home/End, Esc, G, M, S, ?) and includes a skip-to-deck link for screen-reader users.

When adding new motion to a preset, add the keyframe + class **and** the `@media (prefers-reduced-motion: reduce)` override in the same edit.

## What "evolving the kit" looks like

There are three flavors of change:

1. **Per-deck.** Edit files under `decks/<folder>/`. Never touches the template. Always allowed.
2. **Template-wide.** Edit `templates/<preset>/`. Affects every deck *scaffolded after this change* — existing decks are untouched. Use for: improving the shared design language, new control-surface features, fixing a class that's wrong everywhere.
3. **Workflow.** Edit `.claude/commands/new-prez.md` or `docs/INSTRUCTION_SPEC.md`. Changes how new decks get made. Often paired with a template change. Document new conventions in `docs/`.

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the specifics.
