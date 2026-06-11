import type { SectionLabel } from "@/components/SlideShell";
import type { ComponentType } from "react";

import Slide01 from "@/components/slides/Slide01";
import Slide02 from "@/components/slides/Slide02";
import Slide03 from "@/components/slides/Slide03";
import Slide04 from "@/components/slides/Slide04";
import Slide05 from "@/components/slides/Slide05";
import Slide06 from "@/components/slides/Slide06";
import Slide07 from "@/components/slides/Slide07";
import Slide08 from "@/components/slides/Slide08";
import Slide09 from "@/components/slides/Slide09";
import Slide10 from "@/components/slides/Slide10";
import Slide11 from "@/components/slides/Slide11";
import Slide12 from "@/components/slides/Slide12";
import Slide13 from "@/components/slides/Slide13";
import SlideV2Findings from "@/components/slides/SlideV2Findings";
import SlideFridayCartridge from "@/components/slides/SlideFridayCartridge";
import SlideCRingDetail from "@/components/slides/SlideCRingDetail";
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
      "Last week I showed you iterations on the published DRD's seal. You challenged me to design the whole thing from scratch — so this is the DRD-3, a completely new device. It keeps the validated physics of your paper and rebuilds everything around it, plus it adds the one capability the paper said was missing. I'll walk through the science that motivates it, then the engineering that delivers it, then how we validate it.",
  },
  {
    id: "recap",
    title: "From iteration to creation",
    sectionLabel: "Recap",
    Component: Slide02,
    notes:
      "I want to be upfront about what's mine and what's yours. The science your paper proved — that perfusion-driven clearance gives physiologically real kinetics — I treated as ground truth and kept intact. What's new is the hardware: the form factor, the sealing strategy, the modularity, and a third chamber. So this is a new device, but it's built to honor what your data already established.",
  },
  {
    id: "motivation",
    title: "Why a third chamber",
    sectionLabel: "Motivation",
    Component: Slide03,
    notes:
      "This is the scientific motivation. Your discussion section names biofilm and in-situ efficacy as things the device doesn't capture. That's the opening.\n\nBut there's a subtler point that I think is the real justification: if you just dropped bacteria into the existing drug chamber, they'd foul the transport membrane and your kinetics would drift — you couldn't tell drug elution from membrane clogging. So the third chamber isn't 'more is better,' it's protecting the integrity of the measurement you already validated.",
  },
  {
    id: "architecture",
    title: "Three chambers, two membranes",
    sectionLabel: "Design Work",
    Component: Slide04,
    notes:
      "Here's the whole device in one view. Central drug hub is the joint, two satellites clamp onto its two faces — one perfusion, one bacteria.\n\nThe single most important structural decision: the two membranes are on opposite faces, not stacked on one axis like the published device. That means biofouling on the bacteria side can never reach the perfusion-transport membrane, and — just as importantly — I can build and seal each side independently instead of stacking wet membranes in sequence and praying nothing wrinkles.",
  },
  {
    id: "cartridge",
    title: "The membrane cartridge",
    sectionLabel: "Design Work",
    Component: Slide05,
    notes:
      "This is the slide I most want your eyes on. The recurring lesson from the published DRD and from last week's disc-pair is that the membrane seal is everything and it's fragile. So I made the membrane its own self-contained cartridge — lid, base, membrane, O-ring — that you build on the bench and then just drop in. And the tooth that clips the lid to the base is the same tooth that holds the cartridge into the satellite. One feature, two functions.\n\nAlso — the cartridge has large protective pores over the membrane so the polyethylene implant strip in the drug hub can't bear directly on the membrane; flow passes freely but the membrane is shielded.",
  },
  {
    id: "tooth",
    title: "The locking tooth, sized up",
    sectionLabel: "Design Work",
    Component: Slide06,
    notes:
      "This is the tooth from last week's CSM, with two changes driven by the v2 print that came in Friday.\n\nFirst, the tooth is sized up. On v2 the profile was so small it was barely tactile — you couldn't really feel it engage. For v3 it's visibly larger so the seat is unambiguous.\n\nSecond, there are now two latches per cartridge instead of one. Each tooth does less work and the engagement is symmetric, which means the lid doesn't cock to one side as you press it down.\n\nGeometry-wise it's still a tapered transition fit: 2 mm at the top, 1 mm at the base, angled down. Same cork-wedge principle from the CSM, fillet at the root so it won't crack there. The dimensions stay on this slide; the iteration changes are what's actually new here.",
  },
  {
    id: "sealing",
    title: "Watertight by geometry",
    sectionLabel: "Design Work",
    Component: Slide07,
    notes:
      "I want to address something you and Smriti both flagged. In the v2 device the O-rings were painful — they fought you on assembly and they didn't always seal cleanly. So in the DRD-3 I deliberately stopped treating the O-ring as the thing that makes it watertight.\n\nThe geometry does that. The four M2.5 screws pull the satellite onto the hub face under a defined clamp load, and the tapered tooth — the same compliant transition fit from the v2 disc-pair — wedges the cartridge into the satellite. Between those two, the joint is mechanically tight before the elastomer even shows up.\n\nThe O-ring then sits in a proper 1.5 mm gland with 0.5 mm stand-proud, getting the textbook 25% compression, and it does what an O-ring is actually good at: filling the last micron behind the clamp. It's a helper, not the hero. Belt-and-suspenders, not a single point of failure.\n\nSo this version is honestly a synthesis: the screw clamp from v1, the compliant tooth from v2, my own v2 fixes carried forward, and an O-ring strategy that no longer asks the gasket to do work the geometry should have done in the first place.",
  },
  {
    id: "clamp",
    title: "The C-ring wrapper",
    sectionLabel: "Assembly / Bench Testing",
    Component: Slide08,
    notes:
      "This is the biggest mechanical change I want to call out. Earlier iterations clamped each satellite onto the drug hub using four small screws through flange arms. That worked, but the pressure was concentrated at the four bolt points and not distributed around the circumference.\n\nThe current design replaces that with a pair of C-shaped wrapper rings on each side. The two C halves meet in the middle of the joint, and each pair closes with a single screw on each side. So instead of four screws per satellite, you have one screw per side, two screws total per satellite, four for the whole device.\n\nThe wrappers do the clamping continuously around the circumference. That matters for the sealing story, which is the next slide.",
  },
  {
    id: "cring-detail",
    title: "Three O-rings under one wrapper",
    sectionLabel: "Assembly / Bench Testing",
    Component: SlideCRingDetail,
    notes:
      "Here is the mechanics of why the wrapper is the right move.\n\nThe inner profile of the C-ring is a U-channel. That U mates with the U shape created where the satellite meets the drug hub on the outside. The hub's outer edge sits a little closer to the center of the concentric circles than the satellite's outer edge does. So when the wrapper closes around the joint, it presses the satellite's rim radially inward toward the hub axis.\n\nThat inward push propagates through the satellite into the membrane cartridge sitting inside it. The cartridge is squeezed in turn, which compresses its own O-ring against the lid.\n\nResult: three O-rings, all loaded by the same wrapper, all at the same uniform radial pressure. The intra-cartridge O-ring sealing the membrane between lid and base. The O-ring between the cartridge and the satellite bore. And the O-ring between the satellite and the drug hub. One wrapper, three seals, equal pressure. No O-ring is doing work alone, and no joint is being held by point loads from individual screws.",
  },
  {
    id: "assembly",
    title: "Three steps, every time",
    sectionLabel: "Assembly / Bench Testing",
    Component: Slide09,
    notes:
      "This is the payoff of the modularity. Three steps, identical every time. Build the cartridge in your hand. Press it into the satellite, the tooth holds it. Then wrap the two C-rings around each satellite-hub joint and bolt them together: one pair per satellite, four C-rings total, one bolt on each side of every pair.\n\nNo fighting a wet membrane inside a half-assembled device, and the wrapper does the radial sealing as it closes.",
  },
  {
    id: "bench",
    title: "Engineered for the bench",
    sectionLabel: "Assembly / Bench Testing",
    Component: Slide10,
    notes:
      "I want to spend a moment on engineering intent, because it drove a lot of decisions.\n\nFirst, it's standalone — it has its own legs and sits stable on the bench. The current device is honestly a pain to set down and position; this one just stands.\n\nSecond, cleanliness was an explicit goal: one O-ring spec, one screw size, symmetric satellites, low part count. A clean device is a reliable device and an easy one to hand to the next person.\n\nThird, the fits are better — three generations of learning went into defined clearances instead of press-fit guesswork. This is the version that's actually pleasant to use.",
  },
  {
    id: "bacteria",
    title: "The bacteria satellite",
    sectionLabel: "Design Work",
    Component: Slide11,
    notes:
      "The bacteria satellite shares the perfusion body on purpose — same proven chassis — but it specializes. One port instead of two, because it's a sealed culture, not a flow-through. Access is through a self-sealing septum so I can inoculate and pull CFU samples with a needle without ever opening the compartment — either a swabbable luer valve, which is the buy-the-proven-part route, or an integral septum well.\n\nThe bacteria-facing membrane is a 0.2-micron filter that passes drug but stops the bugs from migrating — and it's the one we let foul, deliberately. And I've designed in an optional optical window on a swappable face, so we can image biofilm later without committing to it now.",
  },
  {
    id: "materials",
    title: "Materials & biocompatibility",
    sectionLabel: "Design Work",
    Component: Slide12,
    notes:
      "Materials philosophy in one line: rigid where it should be, compliant where it must be. The body is PC-like SLA — same chassis-class resin we've been using — for geometry. The seals are real silicone O-rings, because elastomers don't fatigue-crack the way thin printed teeth do.\n\nOne caveat I want to flag before you ask: SLA resin can leach uncured monomer that's mildly antimicrobial, so any part touching live culture gets a full post-cure and wash first. It's a known, managed risk, not a surprise.",
  },
  {
    id: "volume",
    title: "Open item: internal volume",
    sectionLabel: "Validation",
    Component: Slide13,
    notes:
      "One honest open item: I haven't yet verified the exact internal fluid volume of the current model. The design targets a tunable 4 to 20 milliliters to cover healthy through infected knee volumes, and it's built so I can tune the hub depth to hit a target.\n\nI'll pull the as-modeled volume straight from CAD and confirm it before we commit to print. I'm flagging it now rather than hand-waving it.",
  },
  {
    id: "v2-findings",
    title: "Designing the press-fits out",
    sectionLabel: "Validation",
    Component: SlideV2Findings,
    notes:
      "I want to spend a moment on the assembly philosophy, because it's changed materially. Earlier iterations leaned on tight press fits between rigid SLA parts to hold things together. That made every assembly a little different and every disassembly a fight.\n\nThree things are different now. First, I spent real care on filleting edges and on choosing clearances that match what the interface actually needs, rather than putting one number everywhere. Second, where two parts genuinely need to press or transition together, the compliance lives in a proper elastomer, not in a thin printed feature trying to flex. Third, where possible I've removed press-fit dependencies from the load path entirely. The clearest example is the new C-ring wrapper: the satellite-hub joint is now latched by screws closing two halves around the interface, not held together by friction.\n\nThe net effect is that each interface has a defined job and a defined retainer: a fillet to seat against, an elastomer to seal, or a screw to clamp. Nothing is asked to do a job its geometry can't back up.",
  },
  {
    id: "friday-cartridge",
    title: "Late Friday: revised cartridge",
    sectionLabel: "Design Work",
    Component: SlideFridayCartridge,
    notes:
      "One more thing I haven't mentioned yet, because it came in late Friday after our last conversation. I'd been thinking about two follow-ups on the cartridge and folded them both in.\n\nFirst, the protective structure. I'd had a circular porous geometry over the membrane on the v3 to shield it from the UHMWPE implant strip in the drug hub. Looking back at our conversation last week, you flagged that a porous structure like that could hamper diffusion through the membrane — it's more restrictive than it needs to be and harder to enforce as a uniform area. So I've gone back to the parallel bars from v2, your original design. Same protection from the implant strip, much less restrictive for flow.\n\nSecond, removal. With the bars back in the middle, I couldn't rely on grabbing them to pry the cartridge out — that risks damaging them, and it's a worse handle anyway. So I added two tweezer pinch tabs, one on each side, on the base of the cartridge. The base is the innermost component, so pulling on those tabs lifts the entire cartridge — base, membrane, lid, everything — out as one piece. No bar handling, no risk of the cartridge getting stuck in the satellite.\n\nAnd one open caveat. I still want to investigate the inner-versus-outer clearance on this specific cartridge before we send. 0.1 mm looks probably too tight here too, especially between the inner base and the outer lid. Same direction as the broader v2 clearance call: open it up slightly.",
  },
  {
    id: "validation",
    title: "How we prove it",
    sectionLabel: "Validation",
    Component: Slide14,
    notes:
      "Here's how we make this a credible instrument and not just nice CAD.\n\nPhase zero, leak test — does the O-ring strategy actually hold; this runs with the testing Smriti and I already planned.\n\nPhase one, reproduce your published kinetics — same flow-rate, temperature, and membrane-thickness sensitivities, same half-life trends. We validate against the known baseline first.\n\nOnly in Phase two do we introduce S. aureus and measure a kill curve — and critically, prove zero bacteria cross to the perfusion side, which is the whole isolation argument made real.",
  },
  {
    id: "next-steps",
    title: "Next steps & your input",
    sectionLabel: "Next Steps",
    Component: Slide15,
    notes:
      "Immediate next steps on my side: verify the internal volume, finalize the bacteria satellite, and fold in whatever you tell me today — then it's ready for Protolabs.\n\nWhere your input would genuinely help: septum versus swabbable valve for the bacteria port; whether to keep the screws or let me build the screwless clamp; and sign-off on the target volume and material. Anything you flag, I implement right away.",
  },
  {
    id: "close",
    title: "Thank you",
    sectionLabel: "",
    Component: Slide16,
    bare: true,
    notes:
      "To close: the published DRD measures drug transport beautifully. The DRD-3 lets us watch drug transport and infection at the same time — without letting either one compromise the other. It's clean, it's modular, it stands on its own, and it's built to validate against everything your paper already proved. Happy to take feedback and get this ordered.",
  },
];
