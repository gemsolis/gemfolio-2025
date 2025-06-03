import photoshop from "@/public/assets/icons/photoshop.png";
import canva from "@/public/assets/icons/canva.png";
import illustrator from "@/public/assets/icons/illustrator.png";
import figma from "@/public/assets/icons/figma.png";
import adobexd from "@/public/assets/icons/adobexd.png";
import capcut from "@/public/assets/icons/capcut.jpg";
import trello from "@/public/assets/icons/trello.png";
import notion from "@/public/assets/icons/notion.png";
import jira from "@/public/assets/icons/jira.png";
import msoffice from "@/public/assets/icons/msoffice.png";
import gdocs from "@/public/assets/icons/gdocs.png";
import gsheet from "@/public/assets/icons/gsheet.png";
import dropbox from "@/public/assets/icons/dropbox.png";
import gdrive from "@/public/assets/icons/gdrive.png";
import gcalendar from "@/public/assets/icons/gcalendar.png";
import zoom from "@/public/assets/icons/zoom.png";
import skype from "@/public/assets/icons/skype.png";
import calendly from "@/public/assets/icons/calendly.png";

import nextjs from "@/public/assets/icons/nextjs.png";
import html from "@/public/assets/icons/html.png";
import css from "@/public/assets/icons/css.png";
import js from "@/public/assets/icons/js.png";
import tailwind from "@/public/assets/icons/tailwindcss.svg";
import framermotion from "@/public/assets/icons/framermotion.png";

import FusionFlare from "@/ui/modals/FusionFlare";
import PixelForge from "@/ui/modals/PixelForge";
import WanderQuest from "@/ui/modals/WanderQuest";
import FitByGrace from "@/ui/modals/FitByGrace";
import TmcCctv from "@/ui/modals/TmcCctv";
import AurrasApp from "@/ui/modals/AurrasApp";

export const tools = [
  {
    category: "Design Tools",
    items: [
      { src: photoshop, alt: "Photoshop", width: 24 },
      { src: figma, alt: "Figma", width: 12 },
      { src: adobexd, alt: "Adobe XD", width: 24 },
      { src: canva, alt: "Canva", width: 24 },
      { src: illustrator, alt: "Illustrator", width: 24 },
      { src: capcut, alt: "CapCut", width: 24 },
    ],
  },
  {
    category: "Web Development",
    items: [
      { src: nextjs, alt: "NextJS", width: 24 },
      { src: html, alt: "HTML", width: 24 },
      { src: css, alt: "CSS", width: 24 },
      { src: js, alt: "JavaScript", width: 24 },
      { src: tailwind, alt: "TailwindCSS", width: 24 },
      { src: framermotion, alt: "Framer Motion", width: 24 },
    ],
  },
  {
    category: "Project Management",
    items: [
      { src: notion, alt: "Notion", width: 24 },
      { src: trello, alt: "Trello", width: 24 },
      { src: jira, alt: "Jira", width: 24 },
      { src: zoom, alt: "Zoom", width: 24 },
      { src: skype, alt: "Skype", width: 24 },
      { src: calendly, alt: "Calendly", width: 30 },
    ],
  },
  {
    category: "Documentation",
    items: [
      { src: msoffice, alt: "Microsoft Office", width: 24 },
      { src: gdocs, alt: "Google Docs", width: 24 },
      { src: gsheet, alt: "Google Sheet", width: 24 },
      { src: gcalendar, alt: "Google Calendar", width: 24 },
      { src: gdrive, alt: "Google Drive", width: 24 },
      { src: dropbox, alt: "Dropbox", width: 24 },
    ],
  },
];

export const projects = [
  // Aurras App
  {
    title: "Aurras Music Player",
    thumbnail: "/assets/images/ux-0.png",
    description: "sdfsdf",
    type: "Personal",
    category: "UX Case Study",
    modal: <AurrasApp />,
  },
  //TMC
  {
    title: "TMC CCTV Services",
    thumbnail: "/assets/images/ux-1.png",
    description: "sdfsdf",
    type: "Freelance",
    category: "UX Design",
    modal: <TmcCctv />,
  },
  //FIT by GRACE
  {
    title: "Fit by Grace",
    thumbnail: "/assets/images/ux-0.png",
    description: "sdfsdf",
    type: "Personal",
    category: "Funnel Design",
    thumbnail: "/assets/images/ux-01.png",
    modal: <FitByGrace />,
  },
  // Wander Quest
  {
    title: "Wander Quest",
    thumbnail: "/assets/images/ux-2.png",
    description: "sdfsdf",
    type: "Personal",
    category: "UX Design",
    modal: <WanderQuest />,
  },
  // Fusion Flare
  {
    title: "Fusion Flare",
    thumbnail: "/assets/images/ux-3.png",
    description: "sdfsdf",
    type: "Personal",
    category: "UX Design",
    modal: <FusionFlare />,
  },
  //PixelForge
  {
    title: "PixelForge",
    thumbnail: "/assets/images/ux-4.png",
    description: "sdfsdf",
    type: "Personal",
    category: "UX Design",
    modal: <PixelForge />,
  },
];
