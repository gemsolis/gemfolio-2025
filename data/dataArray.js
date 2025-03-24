import photoshop from "@/public/assets/icons/photoshop.png";
import canva from "@/public/assets/icons/canva.png";
import illustrator from "@/public/assets/icons/illustrator.png";
import figma from "@/public/assets/icons/figma.png";
import adobexd from "@/public/assets/icons/adobexd.png";
import capcut from "@/public/assets/icons/capcut.jpg";
import trello from "@/public/assets/icons/trello.png";
import notion from "@/public/assets/icons/notion.png";
import jira from "@/public/assets/icons/jira.png";
import gdocs from "@/public/assets/icons/gdocs.png";
import msoffice from "@/public/assets/icons/msoffice.png";
import nextjs from "@/public/assets/icons/nextjs.png";
import html from "@/public/assets/icons/html.png";
import css from "@/public/assets/icons/css.png";
import js from "@/public/assets/icons/js.png";

export const tools = [
  {
    category: "Design Tools",
    items: [
      { src: photoshop, alt: "Photoshop", width: 48 },
      { src: figma, alt: "Figma", width: 24 },
      { src: adobexd, alt: "Adobe XD", width: 48 },
      { src: canva, alt: "Canva", width: 48 },
      { src: illustrator, alt: "Illustrator", width: 48 },
      { src: capcut, alt: "CapCut", width: 48 },
    ],
  },
  {
    category: "Web Development",
    items: [
      { src: nextjs, alt: "Next.js", width: 48 },
      { src: html, alt: "HTML", width: 48 },
      { src: css, alt: "CSS", width: 48 },
      { src: js, alt: "JavaScript", width: 48 },
    ],
  },
  {
    category: "Project Management",
    items: [
      { src: notion, alt: "Notion", width: 48 },
      { src: trello, alt: "Trello", width: 48 },
      { src: jira, alt: "Jira", width: 48 },
    ],
  },
  {
    category: "Documentation",
    items: [
      { src: gdocs, alt: "Google Docs", width: 70 },
      { src: msoffice, alt: "Microsoft Office", width: 120 },
    ],
  },
];
