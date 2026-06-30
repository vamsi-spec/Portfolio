import { personal, education } from "./content";

export const bookPages = [
  {
    id: "intro",
    label: "I",
    title: "Who I Am",
    body: personal.shortBio,
  },
  {
    id: "education",
    label: "II",
    title: "Education",
    body: `${education.degree} at ${education.institution}, ${education.location}. Currently maintaining a ${education.cgpa} CGPA, expected to graduate in 2027. Before that, MPC at ${education.priorSchool.name} with ${education.priorSchool.detail.split("— ")[1]}.`,
  },
  {
    id: "craft",
    label: "III",
    title: "On Software Engineering",
    body: "I learn depth-first: concept before code, architecture before implementation. I'm drawn to systems with real engineering decisions behind them — authentication flows, retrieval pipelines, real-time messaging — not just surface-level features.",
  },
  {
    id: "ai-cloud",
    label: "IV",
    title: "AI & the Cloud",
    body: "My recent focus has been retrieval-augmented generation, hybrid search, and LLM-powered reasoning over real-world data — paired with the backend and cloud fundamentals (Docker, REST design, deployment) needed to actually ship it.",
  },
];
