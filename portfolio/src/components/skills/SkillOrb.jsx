import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SkillOrb({ skill }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <motion.button
        onClick={() => setActive((a) => !a)}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.96 }}
        className="relative px-4 py-2 rounded-full border border-teal-soft/30 bg-midnight-panel/70 text-sm text-moonlight font-body hover:border-gold-bright/60 hover:text-gold-bright transition-colors"
      >
        <span
          className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-teal-soft"
          style={{ animation: "twinkle 3.5s ease-in-out infinite" }}
          aria-hidden
        />
        <span className="ml-2">{skill.name}</span>
      </motion.button>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 rounded-xl border border-gold/20 bg-midnight-deep/95 backdrop-blur px-3 py-2.5 text-xs text-moonlight-dim leading-relaxed shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            {skill.note}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
