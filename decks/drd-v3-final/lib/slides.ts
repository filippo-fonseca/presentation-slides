import type { SectionLabel } from "@/components/SlideShell";
import type { ComponentType } from "react";

import Slide01 from "@/components/slides/Slide01";
import Slide02 from "@/components/slides/Slide02";
import Slide03 from "@/components/slides/Slide03";
import Slide04 from "@/components/slides/Slide04";
import SlideChangedOverview from "@/components/slides/SlideChangedOverview";
import SlideCartridgeEvolution from "@/components/slides/SlideCartridgeEvolution";
import SlideCRingEvolution from "@/components/slides/SlideCRingEvolution";
import SlideLatching from "@/components/slides/SlideLatching";
import SlideCompactness from "@/components/slides/SlideCompactness";
import Slide07 from "@/components/slides/Slide07";
import Slide09 from "@/components/slides/Slide09";
import Slide10 from "@/components/slides/Slide10";
import Slide12 from "@/components/slides/Slide12";
import Slide14 from "@/components/slides/Slide14";
import Slide15 from "@/components/slides/Slide15";
import Slide16 from "@/components/slides/Slide16";

export type SlideEntry = {
  id: string;
  title: string;
  sectionLabel: SectionLabel;
  Component: ComponentType;
  notes: string;
  bare?: boolean;
};

export const SLIDES: SlideEntry[] = [
  {
    id: "title",
    title: "The DRD-3",
    sectionLabel: "",
    Component: Slide01,
    bare: true,
    notes:
      "This is the final design review of the DRD-3, and this time it is for the whole lab. Most of you saw the June 10 version with the polyethylene group; since then the design has been finalized and ordered. I will recap the concept briefly for anyone new, then walk through what actually changed, how it seals and assembles, and the testing plan: watertight testing before I leave on July 12, and the bacteria challenge in the fall.",
  },
  {
    id: "recap",
    title: "From the June 10 review to a finalized device",
    sectionLabel: "Recap",
    Component: Slide02,
    notes:
      "Most of you were in the June 10 polyethylene review. Since then the design is finalized and ordered, so today I focus on what genuinely changed while keeping the validated three-chamber concept intact. I will recap the concept for anyone new, then go straight into the four changes: the membrane cartridge, the C-rings and their new legs, the latching mechanism, and an overall scale-down.",
  },
  {
    id: "motivation",
    title: "Why a third chamber",
    sectionLabel: "Motivation",
    Component: Slide03,
    notes:
      "This is the scientific motivation. Your discussion section names biofilm and in-situ efficacy as things the device doesn't capture. That's the opening.\n\nBut there's a subtler point that I think is the real justification: if you just dropped bacteria into the existing drug chamber, they'd foul the transport membrane and your kinetics would drift, and you couldn't tell drug elution from membrane clogging. So the third chamber isn't 'more is better,' it's protecting the integrity of the measurement you already validated.",
  },
  {
    id: "architecture",
    title: "Three chambers, two membranes",
    sectionLabel: "Design Work",
    Component: Slide04,
    notes:
      "Here's the whole device in one view. Central drug hub is the joint, two satellites clamp onto its two faces: one perfusion, one bacteria.\n\nThe single most important structural decision: the two membranes are on opposite faces, not stacked on one axis like the published device. That means biofouling on the bacteria side can never reach the perfusion-transport membrane, and, just as importantly, I can build and seal each side independently instead of stacking wet membranes in sequence and praying nothing wrinkles.",
  },
  {
    id: "changed-overview",
    title: "What changed since June 10",
    sectionLabel: "What Changed",
    Component: SlideChangedOverview,
    notes:
      "This is the map for today. Four things changed since the June 10 version and drove us to the final, ordered design. The membrane cartridge was rebuilt after it leaked right at the locking tooth on the bench. The C-rings became asymmetric, with legs on the bottom ring so the device stands on its own. The C-rings got a real latching mechanism, borrowed from the cartridge, so we lean less on screws. And the whole device was scaled down to use far less material. I will take each in turn.",
  },
  {
    id: "cartridge-evolution",
    title: "The membrane cartridge, rebuilt",
    sectionLabel: "What Changed",
    Component: SlideCartridgeEvolution,
    notes:
      "The membrane cartridge is the change I most want your eyes on. Two things from June 10 worked and I kept them: the two-latch closure was solid, and the tweezer pinch-tabs made the cartridge genuinely easy to seat and remove by hand. The problem was the seal. On the bench the cartridge held everywhere except right at the locking tooth: a peculiar, very localized leak precisely at the tooth interface, even though the rest of the seal was clean. So the final cartridge drops the sealing tooth entirely and is retained by six tweezer-holders around the rim that double as security latches. The usability win of the tweezer grip now also does the retention job the tooth used to do, and the part is smaller.",
  },
  {
    id: "cring-evolution",
    title: "C-rings that carry the device",
    sectionLabel: "What Changed",
    Component: SlideCRingEvolution,
    notes:
      "The C-rings changed shape. June 10 used two identical halves wrapping each satellite-hub joint, and the device could not stand on its own. The final pair is asymmetric: the top ring stays a clean arc, and the bottom ring now carries integral legs. Three wins from one change: the device is free-standing on the bench, the structure is sturdier because the load path finally has real feet, and it uses less material than the old symmetric pair.",
  },
  {
    id: "latching",
    title: "A real latch, not just screws",
    sectionLabel: "What Changed",
    Component: SlideLatching,
    notes:
      "The cartridge latches worked well, so I carried the idea up to the C-rings. The two wrapping rings now close with a dedicated latch, which means we rely less on the screws. I deliberately kept the screw holes for redundancy and for extra tightening if watertightness ever needs it: belt and suspenders, not a single point of failure. The rings meet at an inverse-U lip that presses the joint with even radial pressure, and that same lip doubles as the pressure source for the cartridge. So one closing action loads all three O-rings, intra-cartridge, cartridge-to-satellite, and satellite-to-hub, at uniform sustained pressure: watertight, and sealed against outside contaminants.",
  },
  {
    id: "compactness",
    title: "Same function, far less material",
    sectionLabel: "What Changed",
    Component: SlideCompactness,
    notes:
      "Last thing on the changes: the whole device is materially smaller. Same three-chamber function, far less material. These are the same views from June 10 and July placed side by side, so the scale-down is obvious. This matters for print cost, for benchtop handling, and for eventually getting toward something closer to implant-relevant in size.",
  },
  {
    id: "sealing",
    title: "Watertight by geometry",
    sectionLabel: "Design Work",
    Component: Slide07,
    notes:
      "I want to address something you and Smriti both flagged. In the earlier device the O-rings were painful: they fought you on assembly and they didn't always seal cleanly. So in the DRD-3 I deliberately stopped treating the O-ring as the thing that makes it watertight.\n\nThe geometry does that. The C-ring wrappers latch the satellite onto the hub face under a defined clamp load, and the wrapper's inverse-U lip presses the cartridge into the satellite. Between those two, the joint is mechanically tight before the elastomer even shows up.\n\nThe O-ring then sits in a proper 1.5 mm gland with 0.5 mm stand-proud, getting the textbook 25% compression, and it does what an O-ring is actually good at: filling the last micron behind the clamp. It's a helper, not the hero. Belt-and-suspenders, not a single point of failure.",
  },
  {
    id: "assembly",
    title: "Three steps, every time",
    sectionLabel: "Assembly / Bench Testing",
    Component: Slide09,
    notes:
      "This is the payoff of the modularity. Three steps, identical every time. Build the cartridge in your hand. Press it into the satellite, where the six tweezer-latches hold it. Then wrap the two C-rings around each satellite-hub joint and latch them closed, one pair per satellite, four rings total.\n\nNo fighting a wet membrane inside a half-assembled device, and the wrapper does the radial sealing as it closes.",
  },
  {
    id: "bench",
    title: "Engineered for the bench",
    sectionLabel: "Assembly / Bench Testing",
    Component: Slide10,
    notes:
      "I want to spend a moment on engineering intent, because it drove a lot of decisions.\n\nFirst, it's standalone: the bottom C-ring now carries integral legs, so the device sits stable on the bench on its own feet. The earlier device was honestly a pain to set down and position; this one just stands.\n\nSecond, cleanliness was an explicit goal: one O-ring spec, one screw size, symmetric satellites, low part count. A clean device is a reliable device and an easy one to hand to the next person.\n\nThird, the fits are better: several generations of learning went into defined clearances instead of press-fit guesswork. This is the version that's actually pleasant to use.",
  },
  {
    id: "materials",
    title: "Materials & biocompatibility",
    sectionLabel: "Design Work",
    Component: Slide12,
    notes:
      "Materials philosophy in one line: rigid where it should be, compliant where it must be. The body is PC-like SLA, the same chassis-class resin we've been using, for geometry. The seals are real silicone O-rings, because elastomers don't fatigue-crack the way thin printed teeth do.\n\nOne caveat I want to flag before you ask: SLA resin can leach uncured monomer that's mildly antimicrobial, so any part touching live culture gets a full post-cure and wash first. It's a known, managed risk, not a surprise.",
  },
  {
    id: "validation",
    title: "How we prove it",
    sectionLabel: "Validation",
    Component: Slide14,
    notes:
      "Here's how we make this a credible instrument and not just nice CAD.\n\nOne quick closed item first: I pulled the as-modeled drug-hub volume from CAD and confirmed it lands inside the 4 to 20 milliliter target window, and the hub depth stays tunable if we want to move within it. That was the last open dimension.\n\nPhase zero, the watertightness test: does the sealing strategy actually hold. That runs before I leave on July 12, with the testing Smriti and I already planned.\n\nPhase one, reproduce your published kinetics: same flow-rate, temperature, and membrane-thickness sensitivities, same half-life trends. We validate against the known baseline first.\n\nOnly in Phase two do we introduce S. aureus and measure a kill curve, and critically, prove zero bacteria cross to the perfusion side, which is the whole isolation argument made real. That happens in the fall when I return.",
  },
  {
    id: "next-steps",
    title: "Next steps & your input",
    sectionLabel: "Next Steps",
    Component: Slide15,
    notes:
      "Immediate next steps on my side: run the watertight testing before I leave on July 12, then return in the fall for the bacteria challenge. The design itself is locked and ordered.\n\nIn parallel, and remotely, I'll keep working with Dr. Aşık to get an abstract submitted to the ORS 2027 Annual Meeting (San Francisco, February 19 to 23). The submission deadline is August 31, so that continues after I leave.\n\nWhere your input would genuinely help today: anything you want changed or double-checked before the watertight testing, and your read on the sealing and the new latch. Whatever you flag, I fold in.",
  },
  {
    id: "close",
    title: "Thank you",
    sectionLabel: "",
    Component: Slide16,
    bare: true,
    notes:
      "To close: the published DRD measures drug transport beautifully. The DRD-3 lets us watch drug transport and infection at the same time, without letting either one compromise the other. It's clean, modular, free-standing, and now finalized and ordered. Next is watertight testing before July 12, then the bacteria challenge in the fall. Happy to take feedback.",
  },
];
