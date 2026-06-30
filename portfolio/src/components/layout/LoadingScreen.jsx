import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;

    let raf;
    function tick(now) {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 350);
      }
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (done) {
      const t = setTimeout(onFinish, 700);
      return () => clearTimeout(t);
    }
  }, [done, onFinish]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-midnight-deep"
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
        >
          <motion.svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: 360, opacity: 1 }}
            transition={{
              rotate: { duration: 3.5, repeat: Infinity, ease: "linear" },
              opacity: { duration: 0.6 },
            }}
          >
            <circle cx="32" cy="32" r="30" fill="none" stroke="#D9B45F" strokeWidth="1" opacity="0.5" />
            <path d="M32 12 L37 28 L53 32 L37 36 L32 52 L27 36 L11 32 L27 28 Z" fill="#D9B45F" />
          </motion.svg>

          <motion.p
            className="mt-6 font-eyebrow text-xs text-gold tracking-[0.35em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Charting the journey
          </motion.p>

          <div className="mt-5 w-48 h-px bg-moonlight-dim/20 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-soft via-gold to-gold-bright"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-[11px] text-moonlight-dim font-body tracking-widest">
            {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
