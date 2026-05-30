# Slide pattern library

A vocabulary of slide layouts for both presets. When the spec says "use the X pattern", this is the file that defines X. Pick a pattern per slide rather than inventing layouts ad-hoc — it's how the decks stay coherent.

---

## Both presets

### Cover (`bare`)
- Big serif/sans display title
- One italic subtitle line that frames the rest
- Speaker + audience attribution bands
- No header/footer chrome
- **academic**: `bare: true` in `SLIDES` entry. See `SlideCover.tsx`.
- **pitch**: single-beat scene. See `SceneCover.tsx`.

### Close (`bare`)
- Big mission/thank-you headline
- One closing italic line
- Contact info
- **academic**: see `SlideClose.tsx`.
- **pitch**: see `SceneClose.tsx`. Often uses concentric rings + radial glow as the backdrop.

---

## `academic` patterns

### 1. Section-titled content (the workhorse)
- Eyebrow `text-brand` label (the section name)
- Display headline (4-line clamp), with key phrase wrapped in `text-brand`
- 1–3 cards OR a paragraph below
- Example: `SlideContent.tsx`

### 2. Three-card grid
- 3 columns (md:grid-cols-3)
- Each card uses an accent (`accent-1/2/3`) + matching chip
- Each card: chip label (top-left) · italic role (top-right) · 1-sentence body
- Use for categories, comparisons, three pillars of an argument
- Pattern source: DRD-3 chambers (hub/perfusion/bacteria)

### 3. Quote / pull-line
- Single `card-quote` (faint brand wash, brand left-border)
- Italic-display copy, max 60ch
- Use for paraphrased source material, paper quotes, manifesto lines

### 4. Two-up plate grid
- 2 columns, each a `<Plate>`
- Use for showing two CAD views, two screenshots, two photos
- Plate `tone="paper"` for photos, `tone="graph"` for engineering drawings, `tone="brand"` for hero figures
- Add figure numbers (`01A`, `01B`) so the speaker can reference them

### 5. Single-figure hero
- One large `<Plate>` centered or right-aligned, taking ~50–60% of slide
- Text block on the other side: eyebrow + headline + 2–3 line lead
- Pattern source: DRD-3 Slide01 (title cover) and Slide04 (architecture)

### 6. Numbered steps
- 3–4 cards or rows, numbered `01 / 02 / 03`
- Each step: number (mono, accent) + title (serif) + one-line body
- Use for "three steps, every time", a process, an assembly sequence
- Pattern source: DRD-3 Slide09

### 7. Open-item callout
- Single `card-tonal` with `accent-warning` (amber left-border)
- Eyebrow "Open item" or "Pending verification"
- Italic-display body
- Use when something is honest TBD, not yet resolved
- Pattern source: DRD-3 Slide13 (volume verification)

### 8. Before/after split
- 2-column comparison with `→` between
- Left column muted (smaller, `text-ink-muted`); right column prominent
- Bottom pull-line `card-quote` summarizing the change
- Pattern source: DRD-3 Slide02 (iteration → creation)

---

## `pitch` patterns

### 1. Cover (centered cinematic)
- Centerpiece mark/glyph (big, accent color)
- Status pill ("In development · Investor preview")
- Sans display headline with 1–2 italic-serif accent words
- 2-line description (`text-foreground/80`, max 88ch)
- Three-word tagline (mono, uppercase, tracked)
- Press-space-to-begin pill at the bottom
- Pattern source: Ocura `SceneOpen.tsx`

### 2. Beat-driven body (the workhorse)
- Eyebrow at top-left: `01 · Section Name` (mono, uppercase, tracked)
- Headline at beat 0
- Lead paragraph at beat 0
- 2–3 additional sections, each gated by `beat >= N` with `translate-y-2 opacity-0` → `translate-y-0 opacity-100` transition
- Each section is a 3-card pillar row OR a single accent-italic pull-line
- Pattern source: Ocura `SceneClose.tsx` AskLayout

### 3. Three pillars
- 3 `.neu-raised-sm` rounded cards
- Each: mono accent-soft label + 1-sentence body
- Pattern source: Ocura `SceneCompanion.tsx`

### 4. Comparison table (moat slide)
- Capability column on the left + N "competitor" columns
- Cells: ✓ / partial / ✗ as icons or pills
- Bottom: 1–2 manifesto pull-lines (italic-serif, accent-soft)
- Pattern source: Ocura `SceneMoat.tsx`

### 5. Ring funnel / beachhead
- Concentric rings expanding from a center point
- Each ring has a label + "why" detail
- Use for nested markets, scope expansion, audience-funnel
- Pattern source: Ocura `SceneBeachhead.tsx`

### 6. Pipeline / flow diagram
- N nodes connected by paths
- Optional `.token-pulse` motion along the path (streaming tokens)
- Each node: label + 2-line detail card
- Pattern source: Ocura `ScenePipeline.tsx`

### 7. Mission close (cinematic)
- Massive sans+italic headline, max 16ch
- Centered, concentric counter-rotating rings backdrop
- Optional CTA row at beat 1 (email pillow + 1–2 link pillows)
- Pattern source: Ocura `SceneClose.tsx` MissionLayout

---

## Picking the right pattern

| audience need | use |
| --- | --- |
| frame the topic | Cover · Section-titled content |
| present 3 alternatives | Three-card grid (academic) · Three pillars (pitch) |
| show data / figures | Two-up plate grid · Single-figure hero |
| show a quote | Quote / pull-line · Beat-driven body with italic-accent pull |
| explain a process | Numbered steps (academic) · Pipeline (pitch) |
| flag a TBD | Open-item callout (academic) · Beat-revealed open-item (pitch) |
| compare options | Before/after split (academic) · Comparison table (pitch) |
| close | Close cover (both) · Mission close (pitch, cinematic) |

---

## Patterns that haven't been built yet (but should be)

If you need one of these, build it once + reference back here:

- **Timeline strip** (horizontal `01 · 02 · 03 · 04` events with dates)
- **Side-by-side code/output** (left: code, right: rendered output)
- **Quote card with photo** (small avatar + name + italic pull-quote)
- **Calendar grid** (week / quarter view with highlighted days)
- **Stat bar** (one massive number + small label, accent color)

Add the new component to its preset's `components/slides/` (academic) or `app/scenes/` (pitch), document the pattern here, and call it out in the deck's `lib/slides.ts` / `lib/content.ts`.
