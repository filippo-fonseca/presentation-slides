# Academic preset

Light, "paper" deck for design reviews, scientific talks, and engineering presentations. This is the template used when you want the **DRD-3 vibe**: serif display titles, brand band header, institutional logos in the footer, registration ticks on figures.

> Sibling preset: see `../pitch/` for dark, neumorphic, beat-driven decks (Ocura vibe).

## What's here

```
academic/
├── app/
│   ├── globals.css     ← all colors + fonts + slide transitions (edit to retheme)
│   ├── layout.tsx      ← metadata, font loading
│   ├── page.tsx        ← mounts <Deck />
│   ├── icon.svg
│   └── apple-icon.svg
├── components/
│   ├── Deck.tsx        ← keyboard nav, swipe, presenter notes, jump menu, chime
│   ├── SlideShell.tsx  ← header band + body + footer band
│   ├── PresenterNotes.tsx  ← bottom drawer toggled by S
│   ├── SlideChime.ts   ← pop.mp3 with pitch shift per direction
│   ├── slides/         ← one .tsx per slide
│   └── ui/
│       ├── Mark.tsx    ← brand mark (edit to change the glyph)
│       └── Plate.tsx   ← image plate with corner ticks + caption strip
├── lib/
│   ├── theme.ts        ← deck title, footer logos, metadata
│   └── slides.ts       ← registry: SLIDES[] = [...] — reorder by editing
└── public/
    └── audio/pop.mp3   ← slide-transition pop (copy from drd-v3 or replace)
```

## How to customize when scaffolding a new presentation

1. **Brand color & accents** — edit `app/globals.css` :root tokens (`--brand`, `--accent-1/2/3`). Everything else cascades.
2. **Fonts** — edit `app/layout.tsx` next/font imports. Defaults: Inter (sans) + Spectral (serif).
3. **Mark** — edit `components/ui/Mark.tsx` (the glyph in the header band + jump pill).
4. **Metadata + footer logos** — edit `lib/theme.ts`.
5. **Slide list** — add components under `components/slides/`, register them in `lib/slides.ts`.

## Controls

| key | action |
| --- | ------ |
| → / Space / PgDn | next slide |
| ← / PgUp | previous slide |
| Home / End | first / last |
| **S** | toggle presenter notes drawer |
| **G** | open jump-to-slide menu |
| **M** | mute / unmute the slide-transition chime |
| **?** | toggle the on-screen keyboard hints |
| Esc | close any open overlay |

Touch swipe also works (horizontal, single finger).

## Design-language reference

See `../../docs/DESIGN_SYSTEM.md` for the full vocabulary (tokens, plates, accents, transitions, slide patterns).
