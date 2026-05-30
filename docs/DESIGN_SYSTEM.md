# Design system

This hub ships two visual presets. **Pick one** when scaffolding — they aren't blended at runtime. Each preset is a self-contained Next.js scaffold under `templates/`.

| | `academic` | `pitch` |
| - | --- | --- |
| **Mood** | engineering paper · faculty audience · institutional | venture pitch · investor audience · cinematic |
| **Canvas** | `#fbfaf7` paper, near-black ink | `#0a0a0a` near-black, warm cream `#f4f1ea` ink |
| **Display face** | Spectral (serif) | Geist (sans) with Instrument Serif italic accents |
| **Accent strategy** | brand band + chamber chips (left-border + soft chip) | single accent + neumorphic raised surfaces + glow |
| **Atmosphere** | restrained, registration ticks on figures, hairline rules | grain texture, radial glow, soft inset/outset shadows |
| **Step granularity** | one slide per advance | one beat per advance (scenes contain N beats) |
| **Reference deck** | `../drd-v3/` | `../drd-v3/ocura-landing/` |

Both presets share the **same control surface** (kbd nav, swipe, jump menu, audio chime, skip-link, reduced-motion respect). Anything below applies to both unless tagged with **[academic]** or **[pitch]**.

---

## Tokens

### Light / paper — `academic`

```
--background  #fbfaf7   paper
--surface     #ffffff   card
--surface-2   #f4f1ea   tonal panel
--ink         #1a1d24   primary text
--ink-soft    #4a4f59
--ink-muted   #7a7f88
--line        #e3ddd2   hairline
--line-strong #cdc5b6

--brand        #16767B   (default — override per-presentation)
--brand-deep   #0e5a5e
--brand-soft   #d8e9ea
--brand-fade   #ecf3f3

--accent-1     #2D6CB0  blue
--accent-2     #C0552E  coral
--accent-3     #b3801c  amber
--warning      #b3801c
--alert        #a51c30  crimson (use sparingly)
```

Surface naming: `--background` (the slide canvas) → `--surface` (cards) → `--surface-2` (tonal sub-panels). Headers/footers use `band-brand` (gradient over `--brand`) and `band-brand-deep`.

### Dark / neumorphic — `pitch`

```
--background  #0a0a0a
--foreground  #f4f1ea   warm cream — never pure white
--muted       #8a8680
--accent      #f5b06a   (default — override per-presentation)
--accent-soft #f6c89a
--line        rgba(244,241,234,0.08)
```

Neumorphic surface palette — apply to cards, pills, CTAs:

- `.neu-raised` — primary card / panel
- `.neu-raised-sm` — secondary pill / chip / small button
- `.neu-light` — bright off-white pillow (CTAs, the visible-on-dark surface)
- `.neu-accent` — orange pillow (rare; main CTA only)
- `.neu-lit` — accent-glowing card (active step in a list)
- `.neu-inset` — pressed-in (search box, thinking panel)

Atmosphere — apply at the page or hero level:
- `.grain` — fixed SVG-noise overlay, `mix-blend-mode: overlay`, very faint
- `.glow-radial` / `.glow-radial-tight` — accent-tinted radial gradient backdrop

---

## Typography

### academic

- **Display headlines** — `.font-display` (Spectral, weight 500, `letter-spacing: -0.01em`). Italic variant via `.font-italic-display` for the subtitle line.
- **Body** — Inter (sans), 15–17px, leading-snug. Prefer prose over bullets.
- **Eyebrow** — `.eyebrow` class: 11px, 600 weight, 0.18em tracking, uppercase. Used above headlines and as section labels.
- **Mono / numeric** — system mono. Use for slide counters and tiny metadata labels.

The signature title pattern:

```tsx
<p className="eyebrow text-brand">Section Label</p>
<h2 className="mt-2 font-display text-[clamp(34px,3.6vw,52px)] leading-tight">
  Statement of the argument, with <span className="text-brand">the key phrase</span>.
</h2>
```

### pitch

- **Display headlines** — Geist sans, weight 500, `tracking: -0.035em`, `leading-[0.98]`. The signature italic-accent move:
  ```tsx
  <h1 className="font-medium leading-[0.98] tracking-[-0.035em]">
    The bold{" "}
    <span className="italic font-normal text-accent-soft"
          style={{ fontFamily: "var(--font-instrument-serif)" }}>
      thesis
    </span>{" "}
    of the deck.
  </h1>
  ```
  Italic-serif words inside a sans-serif headline. Use sparingly — 1–2 per slide max.
- **Body** — Geist, 13–15px, `text-foreground/80` for secondary lines.
- **Eyebrow / labels** — Geist Mono, 10.5px, `tracking-[0.22em]`, uppercase.

---

## Slide chrome (the shell)

### academic — `SlideShell.tsx`

Every content slide has three bands:
1. **Header** (`.band-brand` gradient over brand color)
   - Left: deck mark (`Mark`, white) + eyebrow section label (white/95)
   - Right: deck title eyebrow (white/70, from `THEME.headerRightLabel`)
2. **Body** — padded, max-width 1400px, vertically scrollable if needed
3. **Footer** (`bg-surface`, hairline border-top)
   - Left: institutional logos (from `THEME.footer.left`)
   - Right: institutional logos (from `THEME.footer.right`) + slide counter `01 / 16`

Set `bare: true` on a slide entry to skip both bands (used on title + close covers).

Floating chrome (always-on, never on covers):
- Right-edge **vertical pill** — mark + "01 / 16 · slide title", opens jump menu on click
- Centered **left/right chevrons**
- Bottom-right **keyboard hints** (auto-hide after 5.5s)
- Bottom-up **presenter notes drawer** (toggled by `S`)
- Modal **jump-to-slide menu** (toggled by `G`)

### pitch — `DeckClient.tsx`

Minimal chrome:
- **Header** — `Mark` left, optional `THEME.headerBadge` pill + `ChimeToggle` right
- **Footer** — counter pill (opens jump menu) + chevrons + ProgressBar (per-beat fill)
- **KeyHints** — fixed bottom-right pills, auto-hide after 6s

Scenes own their own background (`glow-radial`, `grain` is set at the `<main>` level). The full viewport is `h-svh`.

---

## Cards & accents

### academic

Card shapes (in `globals.css`):
- `.card` — white, hairline border, soft 1–2px shadow, 14px radius
- `.card-tonal` — `--surface-2` background, same border
- `.card-quote` — `--brand-fade` background, 3px brand left-border

Category accents (the three "chambers" pattern from DRD-3):
- `.chip-brand`, `.chip-accent-1`, `.chip-accent-2`, `.chip-accent-3`, `.chip-warning` — filled pills (soft background + matching color)
- `.accent-brand`, `.accent-1`, `.accent-2`, `.accent-3`, `.accent-warning` — 3px left-border on cards

The canonical 3-card row:
```tsx
<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
  {cards.map(c => (
    <div className={`card ${c.accent} p-5`}>
      <span className={`${c.chip} rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em]`}>
        {c.label}
      </span>
      <p className="mt-2 font-serif text-[15px] leading-snug text-ink-soft">{c.body}</p>
    </div>
  ))}
</div>
```

### pitch

Neumorphic equivalents:
- Primary card → `.neu-raised`
- Secondary chip / pill → `.neu-raised-sm`
- Active / accent-glowing card → `.neu-lit`
- Light CTA pillow → `.neu-light`

A typical 3-pillar row:
```tsx
<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
  {pillars.map(p => (
    <div className="neu-raised-sm rounded-2xl px-4 py-5 text-left">
      <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-soft">{p.label}</p>
      <p className="mt-2 text-[13.5px] leading-snug text-foreground/85">{p.body}</p>
    </div>
  ))}
</div>
```

---

## Figures

### academic — `Plate.tsx`

Wraps an image in a tinted plate with:
- Corner registration ticks (8 little L-marks at each corner — engineering paper feel)
- Caption strip: `Fig. NN · italic caption · meta`
- Three tones: `paper` (default), `brand` (faint teal wash for hero figures), `graph` (cross-hatched backdrop for engineering drawings)
- Padding presets: `tight`, `snug`, `comfy`
- Optional rotation: `0 | 90 | 180 | 270 | -90` (use for top-down views that print landscape)

Two-up grid is the workhorse layout for showing two CAD views side by side. Three-up gets crowded.

### pitch

No equivalent component yet — pitch decks usually use full-bleed neumorphic-bordered media. Drop a `next/image` inside a `.neu-raised` wrapper if you need a frame.

---

## Motion

### academic

Direction-aware slide transitions:
- `.slide-enter-forward` — slide-in from right with blur-then-clear
- `.slide-enter-back` — mirror, from left
- `.slide-enter` — fallback vertical fade

Plus a staggered `plateRise` on direct children of `.slide-enter*` (60ms delay, 520ms duration). Don't disable this — it gives the content "land" feel.

### pitch

- `.scene-enter` — 480ms vertical-rise on scene change
- `.beat-reveal` — 540ms vertical-rise on individual elements (use to gate beat-N content)
- `.type-reveal` — clip-path type-on for streaming text (rare; from Ocura's Helen demo)
- Concentric ring spins (`.ring-spin-slow`, `.ring-spin-slower`) — ambient, used on close scenes

All animations honor `prefers-reduced-motion: reduce` — they collapse to end-states. Test by checking your OS setting.

---

## Audio

Both presets ship audio off by default and require a user toggle.

- **academic** — file-based: `/audio/pop.mp3`, pitch-shifted up on forward (1.08x) and down on back (0.86x). Mute toggled with `M`.
- **pitch** — Web Audio synthesized; no file needed. Variants: `pop` (slide advance), `listen` (interaction), `found` (eureka), `step` (footstep). Toggled by the audio button in the header.

---

## When in doubt

Look at the existing decks side-by-side: `drd-v3/components/slides/*.tsx` for academic patterns; `drd-v3/ocura-landing/app/deck/scenes/*.tsx` for pitch patterns. They're the source of truth for the vibe.
