# DRD-3 Presentation — Complete Build Spec for Claude Code (Next.js Slide Deck)

> **What this is:** a complete, slide-by-slide build document for a presentation website. Every slide below has its full headline, body copy, speaker notes, and image placeholders mapped to the actual CAD views. Build it as a Next.js slide deck. The human (Filippo) will drop the image files into `/public/images/` using the filenames specified in each `IMAGE:` block. Do not invent content — everything you need is here.

---

## ⚑ AGENT HANDOFF NOTE (read this first, before PART 0)

**Two things from Filippo you must honor:**

**1. The images are all provided — you organize them.**
All the CAD renders referenced in this spec (every view from the CAD walkthrough document — perfusion chamber, drug hub, membrane cartridge, full assembly, section views, etc.) will be dropped into a single flat folder called **`images/`** in the repo. They will NOT be pre-named to match the manifest in PART 2. **Your job:** look through that `images/` folder, identify what each image actually is, and rename + sort them into a sensible structure (e.g. `/public/images/assembly/`, `/public/images/cartridge/`, `/public/images/satellite/`, `/public/images/hub/`, `/public/images/section/`). Map them to the slide placements yourself using the captions and the PART 2 manifest as your guide. You are in charge of curation: use the images that serve each slide best, and **you do not have to use all of them**. Where an image doesn't exist or a diagram communicates better, **build your own clean SVG/React diagram instead** (see PART 3). Make it awesome — exercise design judgment, don't just slot images mechanically.

**2. Match the "Acura" look — Filippo's startup deck.**
Filippo will include his **Acura** slide deck in the repository as a design reference. **Mirror its look and feel:** that clean, polished, modern startup aesthetic — but adapted to be **academic** in tone and using **Mass General Brigham / Harvard color palette** (the MGB teal, Harvard crimson accents where appropriate, neutral backgrounds). The goal: Acura's *cleanliness and visual confidence*, dressed in MGB/academic clothing. Pull typography, spacing, layout rhythm, and the general "feel" from the Acura deck; pull the color story from MGB/HMS. If the Acura deck and the instructions in PART 0 below conflict on a style detail, **the Acura deck's clean vibe wins on feel, but keep the MGB colors and the academic header/footer bands.** Study the Acura deck before writing any CSS.

---

## PART 0 — BUILD INSTRUCTIONS (read first)

### Stack
- **Next.js (App Router)** + **TypeScript** + **Tailwind CSS**.
- One full-viewport slide per screen, keyboard navigable (← / → / arrow keys, plus `Home`/`End`). Add on-screen prev/next chevrons and a slide counter (e.g. "04 / 16").
- Optional: `?print` route or a "print all" mode that stacks slides vertically for PDF export (Aşik may want a PDF).
- Smooth slide transitions (fade or slide-in, ~250ms). No heavy animation libraries needed; Framer Motion is fine if convenient.
- Each slide is its own component in `/components/slides/SlideNN.tsx`, registered in an array in the main deck component so reordering is trivial.

### Visual design system (match the existing MGB/HOL deck aesthetic)
- **Brand color (teal):** `#1A7A7A`-ish teal used for the header band and accents. Use `--brand-teal: #16767B;` (tune to match the existing deck if a sample is provided).
- **Header band:** each content slide has a teal top band with the section label in white, small caps, left-aligned (e.g. "Design Work", "Motivation", "Validation"). Mirrors last week's deck.
- **Footer band:** thin teal footer with "Mass General Brigham" left, and the HOL + Harvard Medical School marks right. Put logo files in `/public/images/logos/`.
- **Typography:** serif display for slide titles (Georgia / "Iowan"/ a serif like Spectral or Source Serif), clean sans (Inter or system) for body and notes. Titles large and confident.
- **Body text:** prefer prose and short labeled groupings over dense bullet walls. Generous whitespace. This deck should feel *clean* — that is itself one of the talking points, so the deck must embody it.
- **Cards:** where "cards" are specified, use rounded-rectangle outlined cards (1px border, ~16px radius, subtle shadow) like the MODE A/B/C cards in last week's deck.
- **Accent colors for chambers (use consistently everywhere a chamber is referenced):**
  - Drug hub / joint = teal `#16767B`
  - Perfusion = blue `#2D6CB0`
  - Bacteria = coral/orange `#C0552E`
  - Use these as small color chips / left-border accents so the three chambers are instantly identifiable across slides.

### Speaker notes
- Render speaker notes in a **presenter mode** (toggle with `S` key) shown below or beside the slide, OR as HTML comments / a collapsible drawer. Do NOT show them on the main projected slide. They are included for every slide below under `SPEAKER NOTES:`.

### Image handling
- Every image is referenced as `IMAGE: /images/<filename>` with a one-line caption and intended placement. Filenames map to the CAD walkthrough document pages (referenced as "CAD doc pX"). Filippo will supply the files. Use `next/image`, object-fit contain, never crop the CAD renders. On slides with multiple images, lay them out as specified (side-by-side, strip, etc.).
- Where a slide needs a *schematic* (not a photo) — e.g. the three-O-ring section diagram or the assembly arrows — build it as inline SVG/HTML so it's crisp and editable. Specs given inline.

### Global content rules
- Device name: **DRD-3** (the human's device; "entirely my creation"). The published device is "the published DRD (Aşik et al., 2026)".
- Citation footnote available for reuse: *Asik MD, Reyhanli A, Serafim MF, Inverardi N, Muratoglu OK, Oral E. A dynamic device to simulate intraarticular drug-release kinetics. Int J Pharm. 2026 Apr 25;695:126738.*
- The porous membrane-protection feature **is part of the design** — treat it as fully present in all copy and diagrams (large protective pores in the cartridge body and lid that shield the membrane from the UHMWPE implant strip in the drug hub). Never describe it as missing or to-be-added.
- Internal chamber volume is **to be verified** — this is an explicit open item and appears as such on the relevant slides. Phrase as "pending verification," not as a finished number.

---

## PART 1 — THE SLIDES

Total: 16 slides. Section labels in the teal header band are given per slide.

---

### SLIDE 1 — Title
**Header band:** none (full title slide, mirrors last week's cover)

**TITLE (serif, large):** The DRD-3
**SUBTITLE (italic serif):** A Three-Chamber Dynamic Release Device — Clean-Sheet Design for Simultaneous Drug-Release Kinetics and In-Situ Infection Challenge

**Meta line:** Clean-sheet design & iteration review for Dr. Mehmet D. Aşik | [DATE]

**Author block (bottom-left, mirrors last week):**
Filippo Fonseca — Summer Intern
Yale Mechanical Engineering (ABET) and EECS | ffonseca1@mgh.harvard.edu

**Logos:** HOL + Harvard Medical School (bottom-left under author). MGB wordmark in footer.

`IMAGE: /images/hero_full_assembly.png` — the full assembled DRD-3, three-quarter view. Place large on the right ~55% of the slide. (CAD doc: full DRD non-section view, p3/p4 area — use the cleanest full-assembly render.)

**SPEAKER NOTES:** "Last week I showed you iterations on the published DRD's seal. You challenged me to design the whole thing from scratch — so this is the DRD-3, a completely new device. It keeps the validated physics of your paper and rebuilds everything around it, plus it adds the one capability the paper said was missing. I'll walk through the science that motivates it, then the engineering that delivers it, then how we validate it."

---

### SLIDE 2 — From iteration to creation (recap + reframe)
**Header band:** Recap

**TITLE:** From iterating your device to building a new one

**Body — two-column "before → after":**
- LEFT (small, muted), label "Last week — iteration": thumbnail of the six-tooth CSM ring. Caption: "I improved the published DRD's seal — the six-tooth compliant ring (CSM)."
- Large arrow (→) between columns.
- RIGHT (prominent), label "This week — clean sheet": hero render of the DRD-3. Caption: "A ground-up device of my own design."

**Pull line under the columns (full width, teal accent):**
"The validated *physics* of your published DRD is preserved — source → membrane → flow-cleared sink at 37 °C. I rebuilt the *hardware* around it, and added one capability your paper identified as missing."

`IMAGE: /images/csm_sixtooth_lastweek.png` — last week's six-tooth ring (left, small).
`IMAGE: /images/hero_full_assembly.png` — reuse hero (right).

**SPEAKER NOTES:** "I want to be upfront about what's mine and what's yours. The science your paper proved — that perfusion-driven clearance gives physiologically real kinetics — I treated as ground truth and kept intact. What's new is the hardware: the form factor, the sealing strategy, the modularity, and a third chamber. So this is a new device, but it's built to honor what your data already established."

---

### SLIDE 3 — Motivation: the gap your own paper named
**Header band:** Motivation

**TITLE:** Why a third chamber? Your paper points to it.

**Body — lead with the paper's own words (paraphrased, set as a highlighted quote block):**
> The published DRD models fluid-phase drug transport — but it explicitly does not incorporate the pathological features of an infected joint, including biofilm formation, and it can only *infer* efficacy by comparing drug concentration to the MIC.

**Thesis statement (large, teal):**
"The DRD-3 adds an isolated bacterial compartment so infection can be challenged *in situ* — without disturbing the validated drug-transport measurement."

**Measurement-integrity callout (card, coral accent):**
"Bacteria cannot touch the main transport membrane. If they form biofilm on it, they change its permeability mid-experiment — corrupting the very kinetics the device exists to measure. Isolation isn't a nice-to-have; it protects the measurement."

**SPEAKER NOTES:** "This is the scientific motivation. Your discussion section names biofilm and in-situ efficacy as things the device doesn't capture. That's the opening. But there's a subtler point that I think is the real justification: if you just dropped bacteria into the existing drug chamber, they'd foul the transport membrane and your kinetics would drift — you couldn't tell drug elution from membrane clogging. So the third chamber isn't 'more is better,' it's protecting the integrity of the measurement you already validated."

---

### SLIDE 4 — The architecture at a glance
**Header band:** Design Work

**TITLE:** Three chambers, two membranes — arranged radially

**Body — three chamber cards (use the chamber accent colors), left to right:**
- **Drug hub (teal)** — "The joint space. Holds the UHMWPE implant strip. Volume tunable 4–20 mL (healthy → infected knee). *Internal volume pending verification.*"
- **Perfusion satellite (blue)** — "Simulated blood-flow clearance. Continuous fresh-media flow."
- **Bacteria satellite (coral)** — "Isolated infection challenge. Sealed culture compartment, behind its own membrane."

**The key architectural idea (full-width band below the cards, teal accent):**
"The two membranes sit on **opposite faces** of the central hub — not stacked in series. Neither membrane sees the other's fouling, and the device assembles in parallel, not as a fragile sequential stack."

`IMAGE: /images/topdown_birdseye.png` — bird's-eye of full assembly (CAD doc p3, "Top-down Bird's-Eye view").
`IMAGE: /images/topdown_sectioned.png` — top-down sectioned-at-middle showing all three chambers + both membrane cartridges (CAD doc p4, "Top-down view but of sectioned cut"). Place these two side by side, sectioned one on the right with chamber-color annotation chips pointing to drug hub / perfusion / bacteria.

**SPEAKER NOTES:** "Here's the whole device in one view. Central drug hub is the joint, two satellites clamp onto its two faces — one perfusion, one bacteria. The single most important structural decision: the two membranes are on opposite faces, not stacked on one axis like the published device. That means biofouling on the bacteria side can never reach the perfusion-transport membrane, and — just as importantly — I can build and seal each side independently instead of stacking wet membranes in sequence and praying nothing wrinkles."

---

### SLIDE 5 — The hero: the modular membrane cartridge
**Header band:** Design Work

**TITLE:** The membrane cartridge: build it off the device, drop it in

**Body — left text, right image strip.**

Lead line: "The membrane lives clipped inside its own lid + base cartridge. You assemble the cartridge *separately*, then drop the finished module into a satellite. This is the heart of the design."

Three labeled points (clean, not heavy bullets):
- **Modular & off-device.** No more wrestling a wet membrane inside a live assembly — the seal is made on the bench, in your hand, then inserted as one unit.
- **One tooth, two jobs.** A single tapered tooth (2 mm → 1 mm) clips the lid to the base to capture the membrane, *and* extrudes outward to retain the whole cartridge in the satellite. One feature seals the membrane sandwich and locks the module in place.
- **Membrane is protected.** Large protective pores in the cartridge body and lid shield the membrane from the UHMWPE implant strip in the drug hub, while leaving it fully open to flow. (See note.)

`IMAGE: /images/cartridge_full_side.png` — full membrane cartridge, top-from-side (CAD doc p14).
`IMAGE: /images/cartridge_base_oring.png` — cartridge base with red O-ring visible (CAD doc p16).
`IMAGE: /images/cartridge_lid.png` — cartridge lid only (CAD doc p17).
`IMAGE: /images/cartridge_assembly_bottom.png` — full cartridge assembly from bottom/side (CAD doc p18).
Lay these as a 2×2 grid on the right, or a horizontal strip beneath the text.

**SPEAKER NOTES:** "This is the slide I most want your eyes on. The recurring lesson from the published DRD and from last week's disc-pair is that the membrane seal is everything and it's fragile. So I made the membrane its own self-contained cartridge — lid, base, membrane, O-ring — that you build on the bench and then just drop in. And the tooth that clips the lid to the base is the same tooth that holds the cartridge into the satellite. One feature, two functions. Also — the cartridge has large protective pores over the membrane so the polyethylene implant strip in the drug hub can't bear directly on the membrane; flow passes freely but the membrane is shielded."

---

### SLIDE 6 — The tooth, evolved (continuity)
**Header band:** Design Work

**TITLE:** The locking tooth: our CSM principle, matured

**Body:**
Lead: "This isn't a new gamble — it's the compliant tooth from last week's CSM, refined and given a bigger job."

- **Geometry:** angled, tapered tooth — **2 mm wide at the top, 1 mm at the base**, angled down. A credit-card-style transition fit: easy to seat, firm once home.
- **Proven lineage:** the same compliant radial-interference principle I showed on the disc-pair, now serving the cartridge. Carried forward the fillet/root rounding at the tooth-to-hub junction so it won't crack there.

**Analogy block (reuse last week's, with the cork chip icon):**
"*Tapered cork* — the deeper a slightly-too-big cork seats, the harder it wedges; the seal tightens itself, held by the material's springiness. The tooth works the same way."

`IMAGE: /images/cartridge_tooth_detail.png` — close view of the cartridge tooth (crop from CAD doc p17 lid side view or p14). If no clean crop exists, build an inline SVG callout of the 2mm→1mm tapered tooth profile.

**SPEAKER NOTES:** "I want to show continuity — this is the tooth from the CSM you saw Tuesday, not something untested. It's a tapered transition fit, two millimeters at the top tapering to one at the base, angled so it guides in easily and wedges firm. I kept the rounded root at the tooth-to-hub junction because that's the crack-risk spot we identified last week. Same cork-wedge principle, just now it's doing double duty on the cartridge."

---

### SLIDE 7 — The sealing strategy (HERO #2)
**Header band:** Design Work

**TITLE:** Everything seals on O-rings — the elastomer is the seal, the resin is just structure

**Body:** Lead line: "The biggest reliability lesson from the last two versions: stop asking rigid SLA resin to flex. Let a real elastomer do the sealing, and let the printed parts simply hold geometry. That single decision removes the fatigue-cracking failure mode."

**The spec, stated cleanly (a compact spec table / chip row):**
- O-ring cord: **2 mm** (all of them)
- Gland depth: **1.5 mm** (all of them)
- Stand-proud: **0.5 mm → 25% compression** — the textbook target for a reliable static seal
- Same spec everywhere = one part to source, one tolerance to control.

**The three sealing interfaces (three coral/teal/blue cards, numbered):**
1. **Cartridge → satellite** — seals the membrane module into its satellite.
2. **Intra-cartridge (lid → base)** — captures and seals the membrane itself.
3. **Satellite → drug hub (each side)** — seals each satellite onto the central hub.

**Callout:** "A full three-chamber, two-membrane device — sealed by just three pairs of O-rings, all identical."

**SCHEMATIC (build as inline SVG, do not use a photo):** a simplified horizontal cross-section of the device — bacteria satellite | cartridge | drug hub | cartridge | perfusion satellite — with the three O-ring locations marked as small colored rings and numbered 1/2/3 matching the cards above. Keep it schematic and clean; label the three chambers with their accent colors. (Reference for geometry: CAD doc p1/p2 perfusion-chamber section views and p5 sectioned top-down.)

`IMAGE: /images/section_side_orings.png` — optional supporting real CAD section (CAD doc p1, perfusion chamber side section showing red O-rings) placed small beside the schematic.

**SPEAKER NOTES:** "This is the other slide that matters most. Last week's failure mode was thin resin teeth cracking under flex. The fix is conceptual: the elastomer is the seal, the resin is only structure. Every O-ring in the device is identical — 2mm cord, 1.5mm-deep gland, so half a millimeter stands proud and gets compressed 25%, which is right in the sweet spot for a reliable static seal. And the whole three-chamber device needs only three pairs of these: cartridge-to-satellite, lid-to-base inside the cartridge, and satellite-to-hub on each side. One part number, one tolerance, sealed everywhere."

---

### SLIDE 8 — Holding it together: the four-screw clamp
**Header band:** Design Work

**TITLE:** A defined mechanical clamp — not a press-fit prayer

**Body:**
Lead: "The satellites bolt to the hub with **4× M2.5 screws** through the extruded flanges — the little 'arms' you can see on the hub and satellites — backed by a reinforced interior wall on the drug hub for watertightness. Assembled, it pulls together like a vacuum seal."

- **Why screws (deliberate choice):** repeatable, removable, tolerance-forgiving. It takes the device off relying on press-fits into SLA prints — which is exactly what gave us trouble before. Every assembly is identical.
- **Open question, folded in (set as an inline aside, teal text):** "Screws give us certainty now and they're trivial to drive and back out. I also see a path to a screwless quarter-turn clamp down the line — I'd value your read on whether that's worth pursuing or whether the screws are the right call to keep."

`IMAGE: /images/topdown_screw_bosses.png` — top-down/front view showing the four screw flanges and bosses (CAD doc p3 top-down, or p13 drug-hub front view showing the four flange tabs).
`IMAGE: /images/full_assembly_clamped.png` — side/angle non-section full assembly showing the clamped arms (CAD doc p4/p6 area).

**SPEAKER NOTES:** "Four M2.5 screws clamp each satellite to the hub through these flange arms, and the hub's interior wall is thickened for a watertight seat. The point is that this is a *defined* clamp — repeatable and removable — instead of relying on press-fitting parts into SLA prints, which is what bit us before. I think the screws are genuinely easy to use, but I'm open: there's a screwless quarter-turn version I could develop if you'd prefer fewer loose parts. Your call."

---

### SLIDE 9 — Assembly: three steps, every time
**Header band:** Design Work

**TITLE:** Three steps. Repeatable. No wet-membrane gymnastics.

**Body — a left-to-right assembly strip (3 numbered stages with arrows):**
1. **Build the cartridge.** Membrane clipped between lid and base with its O-ring — done on the bench, as a module.
2. **Press into the satellite.** The tooth retains it; each satellite now owns its cartridge.
3. **Bolt the satellites to the drug hub.** Four screws each side. One central hub piece. Done.

**Closing line (teal):** "Modular by design — a direct, recursive descendant of what worked in the cartridge and outer-disc-pair of the last two versions, now fully separable and bench-mountable."

`IMAGE: /images/assembly_step1_cartridge.png` — cartridge + O-ring (CAD doc p8/p9 progression, or the cartridge views p14–18).
`IMAGE: /images/assembly_step2_pressed.png` — cartridge pressed into satellite (CAD doc p9 "full membrane cartridge added" / p10 "full perfusion satellite assembly").
`IMAGE: /images/assembly_step3_bolted.png` — satellites bolted to hub / full assembly (CAD doc p4/p6).
Lay as a horizontal 3-panel strip with large "1 → 2 → 3" numerals and arrows between.

**SPEAKER NOTES:** "This is the payoff of the modularity. Three steps, identical every time. Build the cartridge in your hand. Press it into the satellite — the tooth holds it. Bolt the two satellites onto the single hub piece. That's it. No fighting a wet membrane inside a half-assembled device. This is the recursive lesson from the last two versions: we saw what worked in the cartridge and the outer-disc-pair and distilled it into a clean modular cartridge that mounts completely separately."

---

### SLIDE 10 — Standalone & clean: engineering for the bench
**Header band:** Design Work

**TITLE:** Designed to live on the bench: standalone, clean, easy to mount

**Body — this is the "engineering philosophy" slide; give it weight. Four short labeled points, two-up:**
- **It stands on its own.** Integral legs/feet — the device sits flat and stable on the bench by itself. The published setup was awkward to place; this one has its own stance.
- **Clean by intent.** Uniform O-rings, one screw size, symmetric satellites, minimal part count. The cleanliness is a design goal, not an afterthought — fewer parts, fewer failure modes, less to explain to the next user.
- **Easy, repeatable mounting.** Lab-bench-friendly: the modular cartridge + defined clamp means anyone can assemble it the same way every time, with no special technique.
- **Tighter, more honest fits.** Fits refined over three generations — defined clearances and gasket compression rather than hope-it-presses-in tolerances.

`IMAGE: /images/full_assembly_on_legs.png` — full assembly showing the integral legs/feet and bench stance (CAD doc p5/p6 "View from the side" showing the device standing).
`IMAGE: /images/drughub_front_flanges.png` — drug hub front view (CAD doc p13) to show the clean symmetric form.

**SPEAKER NOTES:** "I want to spend a moment on engineering intent, because it drove a lot of decisions. First, it's standalone — it has its own legs and sits stable on the bench. The current device is honestly a pain to set down and position; this one just stands. Second, cleanliness was an explicit goal: one O-ring spec, one screw size, symmetric satellites, low part count. A clean device is a reliable device and an easy one to hand to the next person. Third, the fits are better — three generations of learning went into defined clearances instead of press-fit guesswork. This is the version that's actually pleasant to use."

---

### SLIDE 11 — The bacteria satellite: what makes it different
**Header band:** Design Work

**TITLE:** The bacteria satellite: isolated, sealed, sampled

**Body:**
Lead (honest framing): "In the current CAD, the bacteria satellite is built on the perfusion satellite's body — the shared chassis is deliberate. A few targeted changes specialize it for a sealed culture:"

Changes, as labeled points (coral accent):
- **One port, not two.** It's a sealed culture, not a flow-through — a second port has no job here, so it's removed.
- **A self-sealing septum for access.** Inoculate and CFU-sample with a needle while the compartment stays closed and sterile. (Two viable paths: a swabbable luer valve — buy the proven part, zero new geometry — or an integral septum well built into the puck.)
- **A bacteria-blocking membrane.** The bacteria-facing membrane is a sacrificial 0.2 µm microfilter: it passes the drug freely but physically blocks *S. aureus* (~0.5–1 µm) from migrating toward the transport membrane. This is the membrane that's *allowed* to foul.
- **Optional optical window (designed-in, not installed for v1).** A swappable face plate can carry a borosilicate window for biofilm imaging when wanted — committed to nothing now, ready later.

**SCHEMATIC or IMAGE:** reuse the bacteria-satellite render; if showing the septum, build a small inline SVG of the septum-port concept (compression cap → silicone septum → needle passage → chamber). Otherwise:
`IMAGE: /images/bacteria_satellite.png` — bacteria satellite render (reuse perfusion satellite render from CAD doc p5/p6 and label it as bacteria; or a dedicated render once updated).

**SPEAKER NOTES:** "The bacteria satellite shares the perfusion body on purpose — same proven chassis — but it specializes. One port instead of two, because it's a sealed culture, not a flow-through. Access is through a self-sealing septum so I can inoculate and pull CFU samples with a needle without ever opening the compartment — either a swabbable luer valve, which is the buy-the-proven-part route, or an integral septum well. The bacteria-facing membrane is a 0.2-micron filter that passes drug but stops the bugs from migrating — and it's the one we let foul, deliberately. And I've designed in an optional optical window on a swappable face, so we can image biofilm later without committing to it now."

---

### SLIDE 12 — Materials & biocompatibility
**Header band:** Design Work

**TITLE:** Materials: rigid where it should be, compliant where it must be

**Body — two cards + one caveat:**
- **Structure (card):** PC-like SLA resin for all chassis, hub, satellites, and cartridge bodies — precise geometry retention, carries over our Accura-60-class chassis material.
- **Seals (card):** medical-grade silicone/EPDM O-rings — the actual sealing element. Elastomers recover from compression indefinitely without the fatigue cracking that thin printed features suffer.
- **Caveat raised proactively (full-width, amber/warning accent):** "Before any live-bacteria run, SLA parts must be fully post-cured and washed — uncured resin monomer is mildly antimicrobial and would otherwise bias a kill curve. Known risk, managed by process."

**SPEAKER NOTES:** "Materials philosophy in one line: rigid where it should be, compliant where it must be. The body is PC-like SLA — same chassis-class resin we've been using — for geometry. The seals are real silicone O-rings, because elastomers don't fatigue-crack the way thin printed teeth do. One caveat I want to flag before you ask: SLA resin can leach uncured monomer that's mildly antimicrobial, so any part touching live culture gets a full post-cure and wash first. It's a known, managed risk, not a surprise."

---

### SLIDE 13 — Open engineering item: internal volume verification
**Header band:** Validation

**TITLE:** One open item I'm verifying: internal chamber volume

**Body:**
Lead: "The architecture targets a tunable **4–20 mL** drug-hub volume to span healthy-to-infected knee synovial fluid. The exact internal volume of the current CAD is **pending verification** — this is my next immediate measurement before sign-off."

- Why it matters: half-life and clearance kinetics scale with chamber volume, so matching/tuning volume is what keeps DRD-3 results comparable to the published baseline.
- Plan: extract the as-modeled fluid volume from CAD, confirm it lands in 4–20 mL, and tune the hub depth (the design is built to allow this) if needed.

**SPEAKER NOTES:** "One honest open item: I haven't yet verified the exact internal fluid volume of the current model. The design targets a tunable 4 to 20 milliliters to cover healthy through infected knee volumes, and it's built so I can tune the hub depth to hit a target. I'll pull the as-modeled volume straight from CAD and confirm it before we commit to print. I'm flagging it now rather than hand-waving it."

---

### SLIDE 14 — Validation plan
**Header band:** Validation

**TITLE:** How we prove it: match your device first, then turn on the bacteria

**Body — a three-phase staircase (numbered, ascending):**
- **Phase 0 — Leak test.** Dye perfusion at 64 mL/hr for 24 h; confirm the O-ring strategy holds. (Runs with the leak/fit testing already planned with Smriti.) *Threshold: <2% volume loss / 24 h.*
- **Phase 1 — Reproduce the published kinetics.** Sweep flow rate (2–64 mL/hr), temperature (RT vs 37 °C), and membrane thickness; show DRD-3 reproduces the published DRD's half-life trends. *Validate against the known baseline before claiming anything new.*
- **Phase 2 — Turn on the infection.** Introduce *S. aureus* in the bacteria satellite; CFU-sample over 24 h; confirm **zero bacterial migration** to the perfusion side — proving the isolation/measurement-integrity claim.

**Closing line (teal):** "Credibility first: the device has to reproduce what your paper already proved before it earns the right to show something new."

**SPEAKER NOTES:** "Here's how we make this a credible instrument and not just nice CAD. Phase zero, leak test — does the O-ring strategy actually hold; this runs with the testing Smriti and I already planned. Phase one, reproduce *your* published kinetics — same flow-rate, temperature, and membrane-thickness sensitivities, same half-life trends. We validate against the known baseline first. Only in Phase two do we introduce S. aureus and measure a kill curve — and critically, prove zero bacteria cross to the perfusion side, which is the whole isolation argument made real."

---

### SLIDE 15 — Where I'd like your input / next steps
**Header band:** Next Steps

**TITLE:** Next steps & where I'd value your input

**Body — two columns.**
LEFT, "Immediate (I'll do these now)":
- Verify internal chamber volume from CAD; tune hub depth to land in 4–20 mL.
- Finalize the bacteria satellite (single port + septum choice).
- Implement any feedback from today, then it's Protolabs-ready.

RIGHT, "Your read would help on":
- Septum vs. swabbable luer valve for the bacteria port.
- Keep the four-screw clamp, or develop the screwless quarter-turn version?
- Sign-off on target volume and material before order.

**Closing line:** "Feedback gets implemented immediately — and because it's modular, the device builds the same way every time."

**SPEAKER NOTES:** "Immediate next steps on my side: verify the internal volume, finalize the bacteria satellite, and fold in whatever you tell me today — then it's ready for Protolabs. Where your input would genuinely help: septum versus swabbable valve for the bacteria port; whether to keep the screws or let me build the screwless clamp; and sign-off on the target volume and material. Anything you flag, I implement right away."

---

### SLIDE 16 — Closing
**Header band:** none (mirror last week's thank-you cover)

**TITLE:** Thank you — more to come.
**Subtitle (italic):** The DRD-3 — watching transport and infection at once, without compromising either.

Repeat title-slide identity block (name, affiliation, logos, hero render faint in background).

`IMAGE: /images/hero_full_assembly.png` — reuse hero, can be faded/background.

**SPEAKER NOTES:** "To close: the published DRD measures drug transport beautifully. The DRD-3 lets us watch drug transport and infection at the same time — without letting either one compromise the other. It's clean, it's modular, it stands on its own, and it's built to validate against everything your paper already proved. Happy to take feedback and get this ordered."

---

## PART 2 — IMAGE MANIFEST (target filenames — agent renames source images to these)

> Per the AGENT HANDOFF NOTE: the source images arrive in a flat `images/` folder, un-named. Use this table as the *target* naming + placement scheme — identify each source image, rename it to the filename below, and sort it into `/public/images/<category>/`. Skip any you don't need; build SVG diagrams where they serve better.

| filename | source (CAD walkthrough doc) | used on slide(s) |
|---|---|---|
| `hero_full_assembly.png` | full non-section DRD (p3/p4) | 1, 2, 16 |
| `csm_sixtooth_lastweek.png` | last week's six-tooth CSM ring | 2 |
| `topdown_birdseye.png` | Top-down bird's-eye (p3) | 4 |
| `topdown_sectioned.png` | Top-down sectioned-at-middle (p4) | 4 |
| `cartridge_full_side.png` | Membrane cartridge top-from-side (p14) | 5 |
| `cartridge_base_oring.png` | Cartridge base w/ red O-ring (p16) | 5 |
| `cartridge_lid.png` | Cartridge lid only (p17) | 5 |
| `cartridge_assembly_bottom.png` | Full cartridge assembly bottom/side (p18) | 5 |
| `cartridge_tooth_detail.png` | Tooth close-up (crop p14/p17) | 6 |
| `section_side_orings.png` | Perfusion chamber side section w/ O-rings (p1) | 7 |
| `topdown_screw_bosses.png` | Top-down or drug-hub front showing 4 flanges (p3/p13) | 8 |
| `full_assembly_clamped.png` | Side/angle full assembly (p4/p6) | 8 |
| `assembly_step1_cartridge.png` | Cartridge module (p14–18) | 9 |
| `assembly_step2_pressed.png` | Cartridge in satellite (p9/p10) | 9 |
| `assembly_step3_bolted.png` | Full bolted assembly (p4/p6) | 9 |
| `full_assembly_on_legs.png` | Side view showing legs/bench stance (p5/p6) | 10 |
| `drughub_front_flanges.png` | Drug hub front view (p13) | 10 |
| `bacteria_satellite.png` | Satellite render (p5/p6), labeled bacteria | 11 |
| `logos/hol.png`, `logos/hms.png`, `logos/mgb.png` | branding | all |

---

## PART 3 — INLINE SVG SCHEMATICS THE AGENT SHOULD BUILD

These are diagrams (not photos). Build them as clean inline SVG/React components using the chamber accent colors.

### A) Slide 7 — Three-O-ring section schematic
Horizontal cross-section, left→right: **Bacteria satellite (coral) | membrane cartridge | Drug hub (teal) | membrane cartridge | Perfusion satellite (blue)**. Mark the three O-ring interface locations with small colored ring glyphs, numbered ①②③ to match the three cards: ① cartridge→satellite, ② lid→base (intra-cartridge), ③ satellite→hub (each side). Keep it schematic, labeled, generous whitespace. Show the porous protective layer over each membrane as a hatched band between cartridge interior and the drug hub.

### B) Slide 9 — Assembly 1→2→3 strip
Three panels with large numerals and arrows: (1) cartridge + O-ring exploded, (2) cartridge seating into satellite with the tooth engaging, (3) two satellites bolting onto the central hub with 4 screw glyphs. Simple line-art is fine; use chamber colors to identify parts.

### C) Slide 11 — Septum port mini-schematic (optional)
Side section: compression cap → silicone septum (held ~20% compression) → needle passage → bacteria chamber, with a needle entering. Coral accent for the chamber.

---

## PART 4 — SUGGESTED FILE STRUCTURE

```
/app
  /page.tsx                 // mounts <Deck/>
  /print/page.tsx           // stacked print view (optional)
/components
  Deck.tsx                  // slide registry + keyboard nav + counter + presenter toggle
  SlideShell.tsx            // teal header band + footer band + layout
  PresenterNotes.tsx        // toggled with "S"
  /slides/Slide01..Slide16.tsx
  /schematics/ThreeORingSection.tsx
  /schematics/AssemblyStrip.tsx
  /schematics/SeptumPort.tsx
/public/images/...          // Filippo drops CAD renders here
/lib/slides.ts              // ordered array of slide components + section labels + notes
```

Deck.tsx should import an ordered array from `/lib/slides.ts` so reordering/adding slides is a one-line change. Each slide entry: `{ id, sectionLabel, Component, notes }`.

---

## PART 5 — TONE & CONTENT GUARDRAILS (do not violate)

- This device is **Filippo's own creation** — language should own that ("I designed," "my approach") while crediting the *validated physics* of Aşik's published DRD (slide 2). Never imply the hardware is derivative of the published device; it preserves the science, not the hardware.
- The **porous membrane protection is present** in all copy and diagrams. Never say it's missing or pending.
- **Internal volume is the one explicitly pending item** (slide 13) — phrase as "pending verification," never as a finished number.
- Keep the deck **clean** — whitespace, restrained bullets, prose where possible. The cleanliness of the deck is itself part of the pitch.
- Slides 5 (cartridge) and 7 (O-rings) are the two hero slides — give them the most visual real estate and polish.
