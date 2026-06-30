import { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import SectionHeading from "../common/SectionHeading";
import StarField from "../common/StarField";
import ProjectLocation from "./ProjectLocation";
import ProjectModal from "./ProjectModal";
import { projects } from "../../data/projects";

export default function ProjectsKingdom() {
  const [openProject, setOpenProject] = useState(null);
  const pathContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: pathContainerRef,
    offset: ["start 0.8", "end 0.6"],
  });

  return (
    <SectionWrapper id="projects" className="py-28 sm:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-purple-deep/20 to-midnight" />
      <StarField count={36} color="moonlight" variant="twinkle" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Scene IV — The Projects Kingdom"
          title="Four Landmarks, One Map"
          description="Each location marks a real, shipped piece of engineering. Open one to see the architecture behind it."
          accent="gold"
        />

        <div ref={pathContainerRef} className="relative">
          {/* the connecting path */}
          <svg
            className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-2 overflow-visible"
            preserveAspectRatio="none"
          >
            <line
              x1="1" y1="0" x2="1" y2="100%"
              stroke="rgba(244,241,234,0.08)"
              strokeWidth="2"
            />
            <motion.line
              x1="1" y1="0" x2="1" y2="100%"
              stroke="url(#kingdom-path-gradient)"
              strokeWidth="2"
              style={{ pathLength: scrollYProgress }}
            />
            <defs>
              <linearGradient id="kingdom-path-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6FC2BB" />
                <stop offset="50%" stopColor="#D9B45F" />
                <stop offset="100%" stopColor="#F2CE7E" />
              </linearGradient>
            </defs>
          </svg>

          <div className="flex flex-col gap-14 md:gap-20">
            {projects.map((project, i) => (
              <ProjectLocation
                key={project.id}
                project={project}
                side={i % 2 === 0 ? "left" : "right"}
                onOpen={setOpenProject}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </SectionWrapper>
  );
}
