import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineX, HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

const accentText = {
  teal: "text-teal-soft",
  purple: "text-purple-soft",
  gold: "text-gold-bright",
};
const accentBorder = {
  teal: "border-teal-soft/40",
  purple: "border-purple-soft/40",
  gold: "border-gold-bright/40",
};

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-midnight-deep/85 backdrop-blur-md"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border ${accentBorder[project.accent]} bg-midnight-panel shadow-[0_30px_100px_rgba(0,0,0,0.6)]`}
        >
          {project.screenshot && (
            <div className="relative w-full h-48 sm:h-56 overflow-hidden">
              <img
                src={project.screenshot}
                alt={`${project.name} screenshot`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-panel via-transparent to-transparent" />
            </div>
          )}

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-midnight-deep/70 text-moonlight hover:text-gold-bright transition-colors"
            aria-label="Close project details"
          >
            <HiOutlineX />
          </button>

          <div className="p-7 sm:p-9">
            <span className={`font-eyebrow text-[11px] tracking-[0.25em] ${accentText[project.accent]}`}>
              {project.locationLabel} · {project.statusLabel}
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-moonlight mt-2 mb-1">
              {project.name}
            </h3>
            <p className="text-xs text-moonlight-dim italic mb-5">{project.theme}</p>

            <p className="text-moonlight-dim leading-relaxed mb-4">{project.description}</p>

            {project.highlight && (
              <p className={`text-sm leading-relaxed border-l-2 pl-4 mb-6 ${accentBorder[project.accent]} ${accentText[project.accent]}`}>
                {project.highlight}
              </p>
            )}

            {project.metrics && (
              <div className="grid grid-cols-3 gap-3 mb-6">
                {project.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl bg-midnight-deep/60 px-3 py-3 text-center">
                    <div className={`font-display text-xl ${accentText[project.accent]}`}>{m.value}</div>
                    <div className="text-[10px] text-moonlight-dim mt-1 leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            <h4 className="font-eyebrow text-[11px] text-moonlight tracking-[0.2em] mb-3">
              Key Features
            </h4>
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-6">
              {project.features.map((f) => (
                <li key={f} className="text-sm text-moonlight-dim flex gap-2">
                  <span className={accentText[project.accent]}>✦</span>
                  {f}
                </li>
              ))}
            </ul>

            <h4 className="font-eyebrow text-[11px] text-moonlight tracking-[0.2em] mb-3">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2 mb-7">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full border border-moonlight-dim/20 text-moonlight-dim"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-moonlight-dim/30 text-sm text-moonlight hover:border-gold-bright hover:text-gold-bright transition-colors"
              >
                <FiGithub /> GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-midnight-deep text-sm font-medium hover:bg-gold-bright transition-colors"
                >
                  <HiOutlineExternalLink /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
