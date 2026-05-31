# Contributing

This is what you'd change, and how, to evolve the slide-deck kit.

If you're trying to **build a deck**, you don't need this file — run `/new-prez` and read the report.

## TL;DR

| You want to … | Edit | And update |
| --- | --- | --- |
| Tweak the visual language of one preset | `templates/<preset>/app/globals.css` + `app/deck.css` | `docs/DESIGN_SYSTEM.md` if a new token / class lands |
| Add a new slide pattern to a preset | `templates/<preset>/app/scenes/Scene<Name>.tsx` (or `components/slides/Slide<Name>.tsx`) | `docs/SLIDE_PATTERNS.md` + a row in the picker table |
| Change how the builder behaves | `.claude/commands/new-prez.md` | `CLAUDE.md` if a new standing rule lands |
| Change the spec format | `docs/INSTRUCTION_SPEC.md` | `RESEARCH_AGENT_BRIEF.md` (the research-agent contract) |
| Add a third preset (e.g. `keynote/`) | new `templates/<preset>/` directory | `docs/DESIGN_SYSTEM.md`, `docs/SLIDE_PATTERNS.md`, `docs/INSTRUCTION_SPEC.md`, `README.md`, `ARCHITECTURE.md`, and the slash command's "Step 3 — choose preset" branch |
| Change how decks are scaffolded under `decks/` | `.claude/commands/new-prez.md` Step 3 | `CLAUDE.md` repo layout section + `README.md` |
| Add a global agent rule (e.g. "never use em dashes") | `CLAUDE.md` | nothing else — it propagates via auto-load |

## Before you edit anything in `templates/`

Templates change all future decks. They never retroactively edit an existing deck. Before touching one:

1. **Confirm the change generalizes.** If only one deck wanted this, it belongs in `decks/<folder>/`, not in `templates/`. The rule of thumb: a new pattern is template-worthy after the second deck uses it.
2. **Read [`docs/DESIGN_SYSTEM.md`](./docs/DESIGN_SYSTEM.md) and [`docs/SLIDE_PATTERNS.md`](./docs/SLIDE_PATTERNS.md).** Don't invent a new token or class if one already covers it.
3. **Check both presets.** Some changes (a new motion primitive, a new audio variant) should land in both; some are preset-specific. Don't accidentally only fix one.

## Adding a slide pattern

A new pattern is a layout that recurs across decks — not a one-off design.

1. Build the layout in the relevant preset's example scenes/slides. Use existing tokens and surfaces. If you find yourself reaching for new CSS, see if you can derive it from a token first.
2. Name it. Pattern names are kebab-case nouns: `numbered-steps`, `beat-driven-body`, `ring-funnel`.
3. Add a section to `docs/SLIDE_PATTERNS.md` describing the pattern: when to use it, what it looks like, what content it consumes (3 cards? 1 figure + caption? N pillars?).
4. Add a row to the "Picking the right pattern" table at the bottom of `docs/SLIDE_PATTERNS.md`.
5. Add an example implementation to the template at `templates/<preset>/app/scenes/Scene<Pattern>.tsx` (pitch) or `templates/<preset>/components/slides/Slide<Pattern>.tsx` (academic) so future builds have something to copy from.

## Adding a new preset

Three presets is plausible (e.g. a `notebook` preset for marketing decks). To add one:

1. Copy an existing template as the starting point: `cp -R templates/pitch templates/<new>`.
2. Decide what's actually different — usually canvas color, typeface, surface system, atmosphere. The control surface and the spec contract should stay constant.
3. Update `app/globals.css`'s `:root` block + neumorphic / surface classes to the new visual identity. Leave `--background`, `--foreground`, `--accent`, `--accent-soft`, `--line`, `--muted` as the canonical token names — the slash command relies on them.
4. Add a column to the preset table in `docs/DESIGN_SYSTEM.md`.
5. Add a "patterns" section to `docs/SLIDE_PATTERNS.md` if any patterns differ from the existing presets.
6. Add the preset to the slash command's Step 3 branch in `.claude/commands/new-prez.md`.
7. Add an entry to `README.md`'s preset table and `CLAUDE.md`'s repo layout.
8. Build at least one deck with it (under `decks/`) to validate the pattern catalog. The first deck always uncovers gaps.

## Changing the spec format

The spec format is the contract between the research agent and the builder. Be careful — every spec out there assumes the current format.

1. Edit `docs/INSTRUCTION_SPEC.md` as the canonical source.
2. Edit `RESEARCH_AGENT_BRIEF.md` to teach the research agent the new shape.
3. Edit `.claude/commands/new-prez.md` to read the new shape correctly.
4. If the change is backwards-incompatible, version the spec (add `spec_version: 2` to the frontmatter and have the builder branch).

## Changing the builder workflow

The builder is one markdown file: `.claude/commands/new-prez.md`. Editing it changes how every new deck gets made. Don't change it for a single deck — that's what `decks/<folder>/` is for.

When the builder learns a new step (e.g. "download external images", "sweep palette across hardcoded values"), document it as a numbered step in the slash command and mention it briefly in the README pipeline section.

## Code style + tests

- TypeScript strict mode everywhere.
- No `tailwind.config.{js,ts}` files. v4 config lives in CSS, in the template's `app/globals.css`.
- No em dashes in user-facing copy or speaker notes — colons, commas, or new sentences instead. This is a standing Filippo preference, encoded in `CLAUDE.md`.
- `npm run lint` is wired in every template. Run it before opening a PR. (Note: the templates currently inherit an ESLint circular-config issue across the family; if you fix it in one template, fix it in both.)
- No test runner is configured. PRs that add one are welcome — Vitest or Playwright fit the stack. Until then, "test" is `npm run dev`, navigate the deck, look for regressions.

## Commits

Per [`CLAUDE.md`](./CLAUDE.md), every change is committed in logical chunks, as you go. Don't batch a session into one commit. Don't force-push. Match the existing commit-message style:

```
git log --oneline -20
```

If Claude Code authored a commit, include the standard co-author trailer.

## Things explicitly outside scope

- A drag-and-drop slide editor. Specs in markdown + Claude Code editing scene components is the workflow.
- Multi-user collaborative editing. The repo is single-author.
- A separate website / docs site. Markdown in this repo is the documentation.
- Templates that aren't dark-canvas, light-canvas, or some clean variant. Branded one-off looks belong in `decks/<folder>/`, not as new presets.
