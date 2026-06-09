---
preset: pitch
folder: eyeline-pitch
title: "Eyeline — POV Sports Broadcasting, Curling-First"
short_title: "Eyeline"
description: "A live, switchable point-of-view broadcast system for sport — built engine-first, launched in curling."
audience: "Co-founders (David, Amir). VC-style internal pitch, recorded as a 5-minute Loom — speaker talks over light slides."
duration: "5 minutes"
---

> **Agent note — read first.** "Eyeline" is a working name (placeholder — replace globally if the team picks something else). The deck is narrated over: on-screen text stays sparse, the speaker notes carry the argument. Curling (Slide 5) is the hero scene and the only one with an embedded video. Keep boldness in one place — the ice-blue accent and the curling clip — and let everything else stay quiet.

## Theme

### Colors

> Pitch preset — accent + accent-soft only. Accent is ice-blue, grounded in the curling sheet rather than the usual dark-deck acid-green/vermilion. Keep it intentional.

- accent: #5BB0CE (glacial ice-blue — used for the mark, key-phrase highlights, accent glow, the video frame)
- accent-soft: #213A44 (desaturated deep tint for raised-surface washes and beat-dimmed states)

### Fonts

> Override of the preset's sans display. EB Garamond carries headlines; its italic does the "italic-serif accent" duty. A clean grotesque handles labels, mono-style eyebrows, and any data — that pairing is what keeps it "clean modern" rather than purely literary.

- display: EB Garamond (headlines + italic accents)
- sans: Inter (eyebrows, labels, pillar mono-labels, any figures/data)
- mono: system

### Mark

Concentric rings with the innermost ring filled, rendered in the ice-blue accent — reads simultaneously as a **camera aperture / POV reticle** and the **curling "house"** (the target you throw toward). Sport-agnostic by default (it's an aperture), with a curling resonance that suits this curling-first pitch. Render as inline SVG; faint accent glow on the dark base.

### Header badge

- "Concept preview"

## Voice

- Tone: First-person founder, conversational, quietly confident. A genuine spark of excitement on the curling upside — not hype, just conviction.
- Density: One argument per scene. On-screen text is a few words and a visual; the speaker carries everything else. Never paragraphs on screen.
- Pacing: Brisk — ~40 seconds per scene, beats revealed in time with the narration. Let the curling clip breathe (Slide 5).
- Vocabulary: Plain. Light sports + broadcast/engineering terms, glossed in passing ("the hammer," "the wireless layer"). Never assume the room knows curling jargon.
- Honesty: The strategy _is_ the honesty. Name the hard part out loud (the wireless layer), and name the constraint out loud (we can't touch the top leagues yet). Don't oversell feasibility — frame the engine as the thing we have to prove first.

## Images

- Raw folder: /raw-images/ (drop curling stills + any team assets here; builder identifies and sorts)
- Curated tree:
  /public/images/curling/ (sheet, stones, a sweeper mid-stride, the "house")
  /public/images/system/ (any product/diagram stills — else builder renders inline SVG)
  /public/images/logos/
- Source note for the builder: where no asset is provided, prefer royalty-free curling imagery (Unsplash/Pexels) or render inline SVG. Do not use broadcaster/league screenshots.
- The Slide 5 video is a YouTube embed, not a raw image — handled in that slide's body.

## Slides

### Slide 1 — cover

- section_label:
- bare: true
- pattern: cinematic-cover
- beats: 1

#### Title

**Eyeline**

#### Body

- Mark centerpiece: the concentric-rings aperture/house mark, ice-blue, faint glow.
- Status pill: "Concept preview · curling-first"
- Tagline (italic, beneath the mark): _Watch any sport from inside the action — live, and switchable._

#### Speaker notes

Hey — five minutes on what I think we should build, and exactly where we start. I'll keep the slides light and just talk you through it.

The short version: sports broadcasting has barely changed in forty years, and there's a wide-open lane nobody's running in.

### Slide 2 — problem

- section_label: THE GAP
- bare: false
- pattern: beat-driven-body
- beats: 3

#### Title

Broadcasting still decides **what you get to see**.

#### Body

- Beat 1: "Forty years of fixed cameras — and a director in a truck picking the shot."
- Beat 2: "POV is the most viral format in sports." (small meta line: helmet cams, mic'd-up players — clips pulling six-figure engagement)
- Beat 3: "But all of it is **replay**. Nobody makes it live and switchable."

#### Speaker notes

Think about how you watch a game today. Fixed cameras, and a director somewhere choosing the shot for you. That genuinely hasn't changed in forty years.

Now think about what actually goes viral — POV. Helmet cams, mic'd-up players, first-person clips pulling six-figure engagement. People love seeing sport from the inside.

But here's the thing: all of it is replay, after the fact. Nobody delivers POV as a live feed you can switch between, where you pick whose eyes to watch through. That's the gap.

### Slide 3 — the system

- section_label: WHAT WE'RE BUILDING
- bare: false
- pattern: pipeline-flow
- beats: 3

#### Title

Not a camera company. **A system.**

#### Body

Three-node flow, revealed left to right:

- Node 1 — "Cameras" · player-worn, sport-agnostic
- Node 2 — "Wireless pipeline" · multi-feed, real-time _(tag this node: "the hard part")_
- Node 3 — "Switchable app" · the fan picks the POV, live
- Pull-line beneath the flow: _The hard part isn't the camera. It's the wireless layer — and it's the same for every sport._

#### Speaker notes

So what we build is not a camera. Anyone can buy a camera. We build the whole system: player-worn cameras, the real-time wireless pipeline that carries multiple feeds at once, and the app where a fan switches between players live.

And here's the insight that drives our entire plan: the hard part isn't the camera — it's that wireless layer. Multiple live feeds, low latency, reliable. That's the long pole.

But here's the gift — that layer is identical whether we start with curling or football. So we don't have to bet the company on guessing the right sport first.

### Slide 4 — three tracks

- section_label: THE PLAN
- bare: false
- pattern: three-pillars
- beats: 3

#### Title

**Three tracks, in parallel.**

#### Body

- Pillar 1 — label: "01 · ENGINE" · role: _the heavy lift_ · body: Build the sport-agnostic wireless core. Starts today, before anything sport-specific.
- Pillar 2 — label: "02 · WEDGE" · role: _start here_ · body: Curling — an open door, insanely POV-able, and Yale runs a top program.
- Pillar 3 — label: "03 · LIGHTHOUSE" · role: _get noticed_ · body: Big sports through college — not the pro leagues. The visibility play.

#### Speaker notes

The plan is three tracks at once, because they hedge each other.

Track one is the real engineering lift: build that universal wireless core now, before anything sport-specific. The rule I'd set for ourselves — we don't cut open a single helmet until we can stream two live feeds you can switch between on a phone. Prove the engine, then bolt it to a sport.

Track two is where we actually go to market first — and it's the one I'm most excited about. Curling.

Track three, in parallel, is bigger sports through college — our visibility play. Let me take two and three one at a time.

### Slide 5 — curling (hero)

- section_label: TRACK 02 · START HERE
- bare: false
- pattern: beat-driven-body _(custom — this scene embeds a video; see Body)_
- beats: 3

#### Title

**Curling.** The most POV-able sport nobody's filming right.

#### Body

- Beat 1 — **Embedded video.** YouTube embed, video id `uj-U45zUxP4` (Olympic mixed-doubles: Norway's upset of Canada on the final stone, ~7.6M views). Trim to the climactic final end via start/end params — _Filippo to confirm the exact timestamp of the last-stone moment._ Muted; plays on this beat; framed in a raised neumorphic surface with the ice-blue accent edge. The clip is the argument — let it dominate the scene.
- Beat 2 — POV-switch row, four chips: "Thrower" → "Sweeper's eyes" → "Cam on the stone" → "Opposing skip." Line above: _Now imagine it live — and switchable._
- Beat 3 — Three short market chips:
  - "Semi-popular, room to grow" — top curling videos pull millions of views, but they're old explainers, not this.
  - "Top is locked, the tier below is open" — Olympics sit on NBC/Peacock, but USA Curling self-streams its championships on YouTube with a tiny crew. No rights-holder to fight.
  - "We have a door today" — Yale runs a national-caliber program.

#### Speaker notes

Curling. Hear me out — and just watch this.

[let the clip breathe] That's an Olympic match — Norway upsetting Canada on the final stone, seven and a half million views. Now imagine that live, and switchable: from the player throwing the stone, to the sweeper's eyes, to a camera on the stone itself, to the opposing skip calling the shot. It's the most POV-able sport almost nobody is filming well.

And the market is wide open. Curling is semi-popular — the big videos pull millions of views, but they're old explainers, not this. Huge room to grow. Olympic curling is locked to NBC and Peacock — but one level down, USA Curling streams its own national championships on YouTube with a tiny crew. That tier has no rights-holder to fight, and it's hungry for exactly this. And Yale runs a national-caliber program, so we have a door we can walk through today.

Curling's the wedge — but the same playbook fits a few others we can reach through Yale: lacrosse, squash, rowing.

### Slide 6 — go big, skip the top

- section_label: TRACK 03 · WHY PARALLEL
- bare: false
- pattern: beat-driven-body
- beats: 3

#### Title

Go big — but **skip the top.**

#### Body

- Beat 1: "NFL & NBA = billion-dollar rights with ESPN and NBC. Can't touch it yet." → small echo line: _Same pattern as curling: top tier locked, tier below open._
- Beat 2: "Our open tier is **college**." Three chips: "Harvard–Yale football" · "NCAA hockey" · "Division III." Note: _helmet sports — easy form factor._
- Beat 3: "Why all three at once?" Three short lines: "The engine pays off whatever door opens first" · "Curling = a fast yes + real footage" · "College = the eyeballs." Closing line: _And 2 + 3 tell us which form factor to lock — we can be on many sports. That's the exciting part._

#### Speaker notes

Track three, in parallel: bigger sports — but explicitly not the top leagues. The NFL and NBA are locked in billion-dollar deals with ESPN and NBC; we can't touch that yet. And notice — that's the same pattern as curling. The top tier is always locked; the tier just below is always open.

For us, that open tier is college. A Harvard-Yale football game, NCAA hockey, Division III teams we reach through the Yale network. Those are helmet sports, so the form factor is easy.

Why run all three at once? Because they hedge each other. The engine pays off no matter which door opens first. Curling gets us a fast yes and real footage while the college talks are slow. College gets us eyeballs curling can't. And as those land, they tell us which form factor to actually lock down — because of course we can be on many sports. That's the exciting part. Only track one is a heavy build; two and three are emails and meetings.

### Slide 7 — close

- section_label:
- bare: true
- pattern: mission-close
- beats: 1

#### Title

Build the hard part. Walk through the open doors. **Aim where the attention is.**

#### Body

- The ask (small, beneath the mission line): "Engineering → the wireless comms layer, priority one. Curling + college outreach → this week."
- Mark echo (concentric rings) behind the line, faint.

#### Speaker notes

So here's the ask: point engineering at the wireless comms layer as priority one, and start curling and college outreach this week — in parallel.

Build the universal hard part. Walk through the doors that are already open. Aim the demo where the attention is. That's the plan. Let's go.

---

## Agent handoff notes (specificity the builder may want)

- **Working name.** "Eyeline" is a placeholder. If the team renames, change the frontmatter `title`/`short_title`, the cover headline, and `folder`.
- **Video trim.** The Slide 5 clip is a 3:30 highlight; the payoff is the final stone. Set the embed's start/end to that moment once Filippo confirms the timestamp — don't play the full 3:30.
- **Mixed doubles vs. team curling.** The embedded clip is mixed doubles (2 players/side). The product vision reads even stronger for _team_ curling (4 players/side = more switchable angles). Worth a word in narration if Filippo wants, but not on-screen.
- **Optional 8th scene.** If the engineering audience wants more on Track 1, split a dedicated `beat-driven-body` scene out of the Slide 4 pillar — camera/resolution, multi-feed sync, the wireless pipeline, the viewer app — placed right after Slide 4. Left out here to hold 5 minutes.
- **Restraint.** Spend the boldness on the ice-blue accent and the curling clip. Everything else: quiet raised surfaces, generous space, EB Garamond doing the talking.
