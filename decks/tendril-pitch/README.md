# Pitch preset

Dark, neumorphic, accent-glow deck for investor pitches, demo days, and keynotes. This is the template used when you want the **Ocura vibe**: `#0a0a0a` canvas, raised neumorphic surfaces, Instrument Serif italic accents, beat-driven scene reveals.

> Sibling preset: see `../academic/` for light, paper, slide-driven decks (DRD-3 vibe).

## What's here

```
pitch/
├── app/
│   ├── globals.css       ← colors + atmosphere (grain, glow) + neumorphism
│   ├── deck.css          ← scene transitions + signature animations
│   ├── layout.tsx        ← Geist + Geist Mono + Instrument Serif via next/font
│   ├── page.tsx          ← mounts <DeckClient />
│   ├── DeckClient.tsx    ← keyboard nav, swipe, click-to-advance, chime, jump menu
│   ├── components/
│   │   ├── ChimeToggle.tsx   ← Web Audio chime (no audio files)
│   │   ├── KeyHints.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── SceneNav.tsx
│   │   ├── Stage.tsx         ← centered scene wrapper with optional eyebrow
│   │   ├── Mark.tsx          ← brand mark (replace per-presentation)
│   │   └── usePrefersReducedMotion.ts
│   └── scenes/
│       ├── SceneCover.tsx
│       ├── SceneContent.tsx  ← canonical beat-driven pattern
│       └── SceneClose.tsx
└── lib/
    ├── theme.ts          ← title, header badge, footer caption
    └── content.ts        ← SCENES registry — { id, title, beats }
```

## Beats vs slides

Unlike `academic/`, pitch scenes have **beats**. A scene with `beats: 3` takes three forward-presses to fully reveal, then the next press advances to the next scene. Use beats to progressively unveil content within a single visual frame (see `SceneContent.tsx`).

## Customize when scaffolding a new deck

1. **Accent color + atmosphere** — edit `app/globals.css` :root tokens (`--accent`, `--accent-soft`).
2. **Fonts** — edit `app/layout.tsx` next/font imports. Defaults: Geist + Geist Mono + Instrument Serif (the italic-display face).
3. **Mark** — edit `app/components/Mark.tsx` (the glyph in the header + cover).
4. **Metadata + header badge** — edit `lib/theme.ts`.
5. **Scene list** — add scene components under `app/scenes/`, register in `lib/content.ts` SCENES and in DeckClient's `SCENE_COMPONENTS` map.

## Controls

| key | action |
| --- | ------ |
| → / Space / PgDn | next beat (or next scene if last beat) |
| ← / PgUp | previous beat / previous scene |
| Home / End | first / last scene |
| **click on dead space** | next beat |
| **?** | toggle the on-screen keyboard hints |
| Esc | close any open overlay |

Touch swipe also works. The header pill in the footer opens the jump-to-scene menu; the audio toggle in the header enables the Web Audio chime (muted by default).

## Design-language reference

See `../../docs/DESIGN_SYSTEM.md` for the full vocabulary (neumorphism, glow, beats, scene transitions, Instrument Serif italic usage).
