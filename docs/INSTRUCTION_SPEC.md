# Instruction spec format

This is the canonical format for the **input file** that `/new-prez` consumes. The user's research agent writes a file in this shape; the builder agent reads it and produces a working deck.

A complete spec answers **four questions** the builder has to make decisions on:
1. **What preset?** (academic vs pitch)
2. **What theme?** (brand color, accent, fonts, mark, footer logos)
3. **What audience and voice?**
4. **What's on each slide?** (slide-by-slide content, in order)

Anything not specified takes the preset's default.

> The structure below is illustrative. The builder is robust to omission and reordering — what matters is that the content of each section can be found by the agent. If the research agent writes prose, that's fine, as long as every section's information is present.

---

## Required frontmatter

```markdown
---
preset: academic               # academic | pitch — required
folder: <kebab-case>           # destination folder under the hub root — required
title: <full title>            # used in metadata + the title slide
short_title: <short>           # used in "%s · short_title" template
description: <one sentence>    # SEO + speaker notes intro
audience: <who is in the room> # informs voice, density, jargon level
duration: <minutes>            # informs slide count + density target
---
```

---

## Section 1 · Theme

How the deck looks. Override only what differs from the preset default.

```markdown
## Theme

### Colors
- brand:      #16767B            (header band / primary accents)
- brand-deep: #0e5a5e
- brand-soft: #d8e9ea
- brand-fade: #ecf3f3
- accent-1:   #2D6CB0            (first category accent — optional)
- accent-2:   #C0552E            (second — optional)
- accent-3:   #b3801c            (third — optional)
- accent-3-soft: …               (override any soft variant)

> For **pitch** preset, just `accent` + `accent-soft` are needed.

### Fonts
- display:  Spectral             (the serif used for headlines — academic only)
- sans:     Inter                (the body sans)
- mono:     system mono          (rarely overridden)

> For **pitch** preset, the display is sans (Geist by default) and the italic accent
> is a serif (Instrument Serif by default). Override either if needed.

### Mark
- Description: a three-ring glyph in white-on-brand
- Source: SVG inline (the agent designs the SVG to match the description)
- OR file: /images/logos/brand-mark.svg

### Footer logos                 (academic only)
- left:
    - { src: /images/logos/mgh.png,  alt: Mass General Hospital, width: 4227, height: 477 }
    - { src: /images/logos/hol.png,  alt: Harris Orthopaedics Laboratory, width: 200, height: 200,
        rounded: true, label: "Harris Orthopaedics Laboratory" }
- right:
    - { src: /images/logos/hms.png,  alt: Harvard Medical School, width: 986, height: 323 }

### Header badge                 (pitch only)
- text: "Investor preview"
```

If you skip Theme entirely, the deck uses the preset's default colors + fonts + a generic three-ring mark.

---

## Section 2 · Voice

How the deck reads.

```markdown
## Voice

- Tone:      academic, restrained, first-person
- Density:   one argument per slide, prose over bullets
- Pacing:    slow — most slides re-read in 20–30s of speaker notes
- Vocabulary: technical when needed but always glossed
- Honesty:   flag open items explicitly; don't hide TBDs
```

This shapes how the builder writes copy when the spec is sparse on a slide. The builder reuses the voice across speaker notes and headlines.

---

## Section 3 · Image assets

```markdown
## Images

- Raw folder: /raw-images/             (drop everything here, builder organizes)
- Curated tree:
    /public/images/full/               (full-assembly photos)
    /public/images/section/            (CAD section views)
    /public/images/cartridge/          (specific subsystem)
    /public/images/logos/              (institutional marks for the footer)

- Reference doc: /reference/cad-walkthrough.pdf
```

The builder is expected to look through `/raw-images/`, identify each file by content (CAD vs photo vs logo), and sort it into the curated tree. The spec just declares the destination structure — the builder organizes.

If no images are available, omit this section. The builder will fall back to building inline SVG/React diagrams.

---

## Section 4 · Slide list

The body of the spec. One subsection per slide, **in display order**.

### Format per slide

```markdown
### Slide N — <id-slug>

- **section_label**: <eyebrow shown in header band> (academic) or
  <eyebrow shown at top-left> (pitch). Empty string for bare covers.
- **bare**: true | false   (academic — drops the chrome bands)
- **pattern**: <pattern name from docs/SLIDE_PATTERNS.md>
- **beats**: 1 | 2 | …     (pitch — how many forward-presses)

#### Title
<the on-screen headline; use **bold** for accent words>

#### Body
<the on-screen body copy — paragraphs, card definitions, or a JSON-ish block
the builder can parse into card props>

For card grids, use a sub-list:
- Card 1 — label: "<chip text>" · role: "<italic role>" · body: <one sentence>
- Card 2 — …

For figures:
- Figure 01 — src hint: "the top-down sectioned CAD view" · caption: "Bird's-eye"
  · meta: "full assembly" · tone: graph

#### Speaker notes
<verbatim — paragraphs separated by blank lines.  These appear in the deck's
S-key drawer (academic) or just live in source comments (pitch).>
```

### What the builder needs to render

For each slide the builder must end up with:
- A component file under `components/slides/SlideXX.tsx` (academic) or `app/scenes/SceneXX.tsx` (pitch)
- An entry in `lib/slides.ts` (academic) or `lib/content.ts` (pitch)
- Speaker notes carried into the slide entry

If a slide pattern doesn't exist yet, build a new one — see `SLIDE_PATTERNS.md` for the catalog and how to extend it.

---

## Worked examples

Two end-to-end specs in the format above:

- `example-academic-spec.md` — a 16-slide DRD-3-style design review (sketched, not full)
- `example-pitch-spec.md` — a 12-scene Ocura-style investor pitch (sketched, not full)

The DRD-3's actual spec is at `../drd-v3/DRD3_presentation_build_spec.md` — read it as the gold standard for an academic-preset spec.

---

## Things the spec does NOT need to include

The research agent shouldn't bury the spec in implementation detail. The following are the builder's job, not the spec's:

- File paths inside the new presentation folder (`components/slides/SlideNN.tsx` etc.)
- Tailwind classes, exact pixel values, animation timing
- `next/image` width/height (the builder reads it from the file or estimates)
- TypeScript types
- The deck shell (`Deck`, `SlideShell`, `DeckClient`, `PresenterNotes`, etc.) — never override

If the research agent finds themselves writing CSS, they've gone too deep.
