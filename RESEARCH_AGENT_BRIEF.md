# Research-agent brief — producing a presentation spec

You are a research agent. Filippo will give you a topic + audience and ask you to research it and write a **spec markdown file** that the presentation builder (the `/new-prez` slash command in the `presentation-slides` repo) will consume to scaffold a real, working Next.js slide deck.

**Your output is one markdown file.** Filippo will commit it to the presentation-slides repo and run `/new-prez` pointing at it. The deck builder is robust to omissions; what it needs is content and decisions, not implementation detail.

This brief tells you the spec format **the builder expects**. Follow it. If a section doesn't apply, omit it — don't fill with filler.

---

## What you need to figure out before you write

The deck builder makes four decisions per slide based on what you give it:

1. **What preset?** Two visual systems exist:
   - `academic` — light "paper" deck. Serif display titles, brand band header, institutional logos in the footer, registration ticks on figures, restrained. Use for: design reviews, scientific talks, lab-internal presentations, faculty audiences, anything that should feel like an engineering paper.
   - `pitch` — dark `#0a0a0a` neumorphic deck. Sans display with italic-serif accents, soft raised surfaces, accent glow, beat-driven scene reveals. Use for: investor pitches, demo days, keynotes, external launches.

   Pick **one**. State it in the frontmatter. Don't blend.

2. **What's the theme?** Brand color(s), fonts (if non-default), the brand mark, and (for academic) the institutional logos shown in the footer.

3. **What's the voice?** Audience, tone, density, jargon level. The builder uses this to fill in any gaps you leave on individual slides.

4. **What's on each slide?** Title, body content, the **slide pattern** to use (see catalog below), and speaker notes. This is where you spend most of your effort.

---

## Required frontmatter

Start the file with YAML frontmatter:

```yaml
---
preset: academic                  # academic | pitch
folder: presentation-for-sosa     # destination folder name (kebab-case)
title: "Long descriptive title"   # browser tab + the title slide
short_title: "Short Name"         # used in "%s · Short Name"
description: "One-sentence SEO."  # also informs the speaker-notes intro
audience: "Who is in the room"    # informs voice, density, jargon
duration: "20 minutes"            # informs slide count + density target
---
```

---

## Section 1 — Theme

Override only what differs from the preset's defaults.

```markdown
## Theme

### Colors
- brand:      #16767B
- brand-deep: #0e5a5e
- brand-soft: #d8e9ea
- brand-fade: #ecf3f3
- accent-1:   #2D6CB0     (first category — optional)
- accent-2:   #C0552E     (second — optional)
- accent-3:   #b3801c     (third — optional)

> For pitch preset: just `accent` and `accent-soft`.

### Fonts
- display: Spectral       (the serif used for headlines — academic only)
- sans:    Inter
- mono:    system

### Mark
A short description the builder can render as inline SVG, e.g.
"three concentric rings, the innermost filled, in the brand color".
OR a file path: /images/logos/sosa-mark.svg

### Footer logos                 (academic only)
- left:
    - { src: /images/logos/...,  alt: "...",  width: ..., height: ... }
- right:
    - { src: /images/logos/...,  alt: "...",  width: ..., height: ..., rounded: true, label: "..." }

### Header badge                 (pitch only)
- "Investor preview" or similar small label
```

If the speaker has institutional affiliations (university, lab, hospital, company), name them and either provide image files or describe the wordmarks so the builder can either fetch the right images or render text wordmarks.

---

## Section 2 — Voice

Plain-language description of how the deck should read.

```markdown
## Voice

- Tone:       (e.g. "academic, restrained, first-person")
- Density:    (e.g. "one argument per slide, prose over bullets")
- Pacing:     (e.g. "slow — most slides re-read in 20–30s of speaker notes")
- Vocabulary: (e.g. "technical when needed but always glossed")
- Honesty:    (e.g. "flag open items explicitly; don't hide TBDs")
```

The builder reuses this voice for any speaker notes you don't write verbatim, and for any small filler the deck needs.

---

## Section 3 — Images (optional)

If the speaker has image assets:

```markdown
## Images

- Raw folder: /raw-images/              (drop everything here; builder organizes)
- Curated tree:
    /public/images/<category-1>/
    /public/images/<category-2>/
    /public/images/logos/
- Reference doc: /reference/<filename>.pdf  (if applicable)
```

The builder will identify each raw image by content and sort it into the curated tree. You don't need to pre-organize. If there are no images, omit this section — the builder will render inline SVG diagrams instead.

---

## Section 4 — Slides (the body)

One subsection per slide, in display order. Use the format below. Be **specific** — give the actual headline text, actual body copy, actual speaker notes. Don't write "TODO" or "TBD".

```markdown
### Slide N — <slug>

- section_label: <eyebrow shown in header band>     (academic — empty for bare covers)
- bare:          true | false                       (academic — drops chrome bands)
- pattern:       <name from the pattern catalog>
- beats:         1 | 2 | …                          (pitch — forward-presses to reveal)

#### Title
The on-screen headline. Use **bold** for the key phrase that should pick up the brand color.

#### Body
The on-screen body copy.  Paragraphs, card definitions, figure references.

For 3-card grids, use:
- Card 1 — label: "<chip text>" · role: "<italic role>" · body: <one-sentence body>
- Card 2 — …
- Card 3 — …

For figures:
- Figure 01 — src hint: "<describe the image>" · caption: "<italic caption>"
  · meta: "<right-side meta>" · tone: paper | brand | graph

#### Speaker notes
Verbatim — paragraphs separated by blank lines.  These are what the speaker
actually says.  Write them in the speaker's voice (first-person, conversational).
```

### Slide pattern catalog (pick from this list)

**Both presets:**
- `cover` — bare, big display title, italic subtitle, attribution
- `close` — bare, big mission/thanks headline, italic afterthought, contact

**Academic only:**
- `section-titled-content` — eyebrow + display headline + paragraph or cards (workhorse)
- `three-card-grid` — 3 cards, each with a chip + role + 1-sentence body
- `quote-pull-line` — single `card-quote` (brand wash, brand left-border)
- `two-up-plates` — 2-column figure grid with caption strips
- `single-figure-hero` — one large figure + text block
- `numbered-steps` — 3-4 numbered cards (01 / 02 / 03)
- `open-item-callout` — amber-bordered tonal card for honest TBDs
- `before-after-split` — 2-column comparison with arrow + bottom pull-line

**Pitch only:**
- `cinematic-cover` — mark centerpiece + status pill + sans+italic headline + tagline
- `beat-driven-body` — eyebrow + headline + beat-gated sections (workhorse)
- `three-pillars` — 3 neumorphic raised cards with mono labels
- `comparison-table` — capability rows × competitor columns
- `ring-funnel` — concentric expanding rings for nested markets/audiences
- `pipeline-flow` — N-node diagram with optional token-pulse motion
- `mission-close` — massive sans+italic mission line over concentric rings

If none of these fit, describe the layout in prose and the builder will build a new pattern.

---

## Slide count guidance

Match the slide count to the time budget:

- 5-minute lightning talk → 5–7 slides
- 15-minute design review → 10–14 slides
- 20-minute lab meeting → 14–18 slides
- 8-minute investor pitch → 10–12 scenes (pitch preset)
- 30-minute keynote → 18–24 slides

Less is more. One argument per slide; one slide per argument.

---

## A worked example

The DRD-3's spec — `decks/drd-v3/DRD3_presentation_build_spec.md` — is the gold-standard for an `academic` preset spec. Read it before writing your first one. It also includes an "agent handoff note" that demonstrates the level of specificity the builder appreciates.

The Ocura deck — `decks/drd-v3/ocura-landing/app/deck/content.ts` + `decks/drd-v3/deck-instructions/OCURA_PITCH_SITE_SPEC.md` — is the gold-standard for a `pitch` preset. (Note: that spec preceded the formalized format here; treat it as inspiration, not template.)

---

## Things you should NOT include

- Tailwind class names, CSS values, pixel sizes, animation timing
- TypeScript types or React component code
- File paths inside the new presentation folder (the builder handles structure)
- next/image width/height when you have an actual image (builder reads from file)
- The deck shell, controls, or keyboard map (these are owned by the templates)

If you find yourself writing code, you've gone too deep. Step back and write the spec.

---

## Final check before you hand the spec to Filippo

- [ ] Frontmatter has `preset`, `folder`, `title`, `short_title`, `audience`, `duration`
- [ ] Every slide has: section_label (or empty), pattern, title, body, speaker notes
- [ ] Speaker notes are in the speaker's voice, not yours
- [ ] Slide count matches the duration
- [ ] Voice section is filled (the builder uses it as fallback)
- [ ] No code, no Tailwind, no implementation detail
- [ ] If images exist, the raw + curated paths are declared

Hand the file to Filippo. He'll commit it, run `/new-prez`, and the builder will take it from there.
