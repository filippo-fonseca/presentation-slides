---
description: Scaffold a new presentation from an instruction spec markdown file
allowed-tools: Read, Write, Edit, Bash, Glob, Grep, AskUserQuestion, TaskCreate, TaskUpdate, TaskList
---

# /new-prez — Scaffold a new presentation from a spec

You are the builder agent for this presentation hub. The user is invoking you to scaffold a new presentation into a sibling folder under the hub root.

## Step 1 — Gather inputs from the user

Before you do anything else, ask the user two questions (use the `AskUserQuestion` tool, both questions at once, multi-select allowed):

1. **Path to the instruction markdown file** (required). It is typically at the hub root, e.g. `./sosa-spec.md`. If they don't have one yet, halt and point them at `RESEARCH_AGENT_BRIEF.md` — they need a spec first.

2. **Any extra context or overrides** (optional). Free-text. Things like "make it darker", "use crimson instead of teal", "stretch to 20 slides", or "the audience changed — assume less technical background".

Do not infer either of these. The user explicitly said the slash command must ask.

## Step 2 — Read the spec

Read the markdown file the user pointed to. Then read **all** of these reference files so you have the design vocabulary in head:

- `docs/INSTRUCTION_SPEC.md` — the spec format
- `docs/DESIGN_SYSTEM.md` — visual vocabulary for both presets
- `docs/SLIDE_PATTERNS.md` — the slide-pattern library

Read them with the Read tool — do not assume their contents from training data; they have been edited for this hub specifically.

If the spec is sparse on something the user gave extra context about, the extra context wins.

If the spec is sparse AND the user gave no extra context, fall back to the preset's defaults and flag the open decisions back to the user in a summary at the end. Don't guess silently.

## Step 3 — Choose preset + folder

From the spec frontmatter (or, failing that, the spec's audience description):

- `preset: academic` → copy from `templates/academic/`
- `preset: pitch` → copy from `templates/pitch/`

The destination folder is `./<folder-from-frontmatter>/` (sibling to `drd-v3/`, `templates/`, etc.). If the folder already exists and is non-empty, halt and ask the user how to proceed.

Use `cp -R templates/<preset> <folder>` to scaffold, then `rm -rf <folder>/node_modules <folder>/.next` if they got copied. Add a `.gitkeep` to `public/audio/` if it's empty, and copy `drd-v3/public/audio/pop.mp3` over for the academic preset's slide chime.

## Step 4 — Apply theme

From the spec's Theme section (or your extra-context overrides):

- **Colors** — edit `<folder>/app/globals.css` `:root` block. Override only what's specified; leave the rest at defaults.
- **Fonts** — edit `<folder>/app/layout.tsx` next/font imports if the spec calls for non-default faces.
- **Mark** — edit `<folder>/components/ui/Mark.tsx` (academic) or `<folder>/app/components/Mark.tsx` (pitch). For inline SVG, design it from scratch per the description. For image assets, swap the implementation to `<Image />`.
- **Metadata** — edit `<folder>/lib/theme.ts`: `title`, `shortTitle`, `description`, `authors`, `themeColor` (academic), `headerRightLabel` (academic) or `headerBadge` (pitch), `footer.left`/`footer.right` (academic only).

## Step 5 — Image curation

If the spec declares a raw images folder:
- Look at every image (use `Bash` to `ls` + open a few with `Read` if they're worth verifying).
- Identify what each one is by content.
- Rename + sort them into the curated tree from the spec.
- It is acceptable to **not use** every image. Use design judgment.
- If an image doesn't exist for a slide that needs one, build an inline SVG/React diagram instead — see `docs/SLIDE_PATTERNS.md` for figure patterns.

## Step 6 — Generate slides

For each slide in the spec's Slide list:

1. Pick the named pattern from `docs/SLIDE_PATTERNS.md`. If none specified, infer one from the slide's content shape (cards → grid, single figure → hero, prose → titled-content).
2. Create the component file:
   - **academic** — `<folder>/components/slides/Slide<NN>.tsx` (zero-pad NN to two digits) or a descriptively-named file like `SlideOpenItem.tsx` if it's not a generic numbered slide.
   - **pitch** — `<folder>/app/scenes/Scene<Name>.tsx`.
3. Use the example slides in the template as the structural starting point — they implement the canonical patterns.
4. Register the new component:
   - **academic** — append to `SLIDES` array in `<folder>/lib/slides.ts`. Include `id`, `title`, `sectionLabel`, `Component`, `notes`, and `bare?: true` for covers.
   - **pitch** — add a `SCENES` entry in `<folder>/lib/content.ts` (id, title, beats), and a key/component entry in `SCENE_COMPONENTS` (in `<folder>/app/DeckClient.tsx`).
5. Remove the template's example slides from the registry once you have real content for the same slot. Keep the example component files only if they're still referenced; otherwise delete them.

Keep speaker notes verbatim from the spec — they're the speaker's words, not yours to rewrite.

## Step 7 — Install + smoke test

```bash
cd <folder>
npm install
npm run lint
```

Fix any lint errors before reporting done. **Do not** start the dev server unless the user asks — the user will start it manually.

If `npm install` is slow, run it in the background and continue with other work in parallel.

## Step 8 — Report back

End with a 4–6 line summary covering:
- The folder you created
- The preset you chose
- The number of slides registered
- Any spec ambiguities you resolved via fallback (so the user can correct)
- Open TODOs (e.g. "raw images folder not provided — figures use placeholder text"; "speaker logo missing — Mark.tsx is the generic three-ring")
- The exact command to run the dev server (`cd <folder> && npm run dev`)

Do **not** include a wall of file paths or implementation detail. The user wants to know what to verify, not what you typed.

## Style guardrails

- The deck shell (Deck.tsx, SlideShell.tsx, DeckClient.tsx, PresenterNotes.tsx, etc.) is owned by the template — do not edit it for content reasons. If the spec needs a behavior change, raise it as a follow-up.
- Use existing chip / accent / neumorphic classes — do not invent ad-hoc Tailwind for things the design system already covers.
- Speaker notes are paragraphs separated by `\n\n` in the slide registry entry. Preserve the original line breaks from the spec.
- Match the existing decks' voice unless the spec says otherwise — restrained, first-person, no marketing fluff in academic; cinematic and confident in pitch.
- Don't include marketing emoji, exclamation marks, or hyperbole in the deck UI (academic). Speaker notes can be more conversational.

## When you're blocked

If the spec is so sparse you'd be inventing more than you'd be assembling, stop and ask the user via `AskUserQuestion`. Better one focused question than a deck the user will rewrite.
