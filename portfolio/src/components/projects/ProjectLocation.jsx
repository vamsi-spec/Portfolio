import { motion } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";

const accentRing = {
  teal: "ring-teal-soft/40 hover:ring-teal-soft",
  purple: "ring-purple-soft/40 hover:ring-purple-soft",
  gold: "ring-gold-bright/40 hover:ring-gold-bright",
};
const accentDot = {
  teal: "bg-teal-soft shadow-[0_0_16px_4px_rgba(111,194,187,0.6)]",
  purple: "bg-purple-soft shadow-[0_0_16px_4px_rgba(136,104,196,0.6)]",
  gold: "bg-gold-bright shadow-[0_0_16px_4px_rgba(242,206,126,0.6)]",
};
const accentText = {
  teal: "text-teal-soft",
  purple: "text-purple-soft",
  gold: "text-gold-bright",
};

export default function ProjectLocation({ project, side, onOpen }) {
  const isRight = side === "right";

  return (
    <div
      className={`relative flex items-center w-full ${
        isRight ? "md:justify-end" : "md:justify-start"
      }`}
    >
      {/* node on the path */}
      <span
        className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full ${accentDot[project.accent]}`}
      />

      <motion.button
        onClick={() => onOpen(project)}
        initial={{ opacity: 0, x: isRight ? 60 : -60, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -6 }}
        className={`group relative w-full md:w-[44%] text-left rounded-2xl overflow-hidden border border-moonlight-dim/15 bg-midnight-panel/80 backdrop-blur ring-1 ${accentRing[project.accent]} transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.35)]`}
      >
        {project.screenshot ? (
          <div className="relative h-40 overflow-hidden">
            <img
              src={project.screenshot}
              alt={`${project.name} preview`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-panel via-midnight-panel/10 to-transparent" />
          </div>
        ) : (
          <div className="relative h-40 overflow-hidden flex items-center justify-center bg-gradient-to-br from-teal/20 via-midnight-panel to-purple-deep/40">
            <span className="font-eyebrow text-[10px] text-teal-soft tracking-[0.3em]">
              Citadel Under Construction
            </span>
          </div>
        )}

        <div className="p-5 sm:p-6">
          <div className={`flex items-center gap-1.5 font-eyebrow text-[10px] tracking-[0.2em] ${accentText[project.accent]}`}>
            <HiOutlineLocationMarker />
            {project.locationLabel}
          </div>
          <h3 className="font-display text-2xl text-moonlight mt-2 mb-1">
            {project.name}
          </h3>
          <p className="text-xs text-moonlight-dim mb-3">{project.statusLabel}</p>
          <p className="text-sm text-moonlight-dim leading-relaxed line-clamp-2">
            {project.description}
          </p>
          <span className={`inline-block mt-4 text-xs font-eyebrow tracking-[0.2em] ${accentText[project.accent]} group-hover:underline`}>
            Discover →
          </span>
        </div>
      </motion.button>
    </div>
  );
}
