import type { SectionLabel } from "@/components/SlideShell";
import type { ComponentType } from "react";

import SlideCover from "@/components/slides/SlideCover";
import SlideContent from "@/components/slides/SlideContent";
import SlidePlates from "@/components/slides/SlidePlates";
import SlideClose from "@/components/slides/SlideClose";

export type SlideEntry = {
  id: string;
  /** Shown in the jump menu and the right-edge vertical pill. */
  title: string;
  /** Shown in the header band on content slides; empty string on bare covers. */
  sectionLabel: SectionLabel;
  Component: ComponentType;
  /** Presenter notes — open with the S key. Use `\n\n` to separate paragraphs. */
  notes: string;
  /** When true, the slide renders without the header/footer bands. */
  bare?: boolean;
};

export const SLIDES: SlideEntry[] = [
  {
    id: "title",
    title: "Title",
    sectionLabel: "",
    Component: SlideCover,
    bare: true,
    notes:
      "Open the deck. Set the room: who this is for, what they're about to see, and the one sentence of context they need to follow along.",
  },
  {
    id: "content",
    title: "Three-card content",
    sectionLabel: "Section",
    Component: SlideContent,
    notes:
      "Walk the three cards left to right. Each card is one beat — say its name, then its role in one sentence, then move on.",
  },
  {
    id: "plates",
    title: "Image plates",
    sectionLabel: "Section",
    Component: SlidePlates,
    notes:
      "Lead with the headline, then walk through each figure. Reference the figure number — that's why the corner ticks and caption strip are there.",
  },
  {
    id: "close",
    title: "Close",
    sectionLabel: "",
    Component: SlideClose,
    bare: true,
    notes:
      "Restate the thesis in one sentence. Invite questions. Leave time.",
  },
];
