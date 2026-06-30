import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import StarField from "../common/StarField";

const cloudClasses = [
  "top-[12%] left-[-10%] w-72 h-20 opacity-30 [animation-duration:46s]",
  "top-[20%] left-[55%] w-96 h-24 opacity-20 [animation-duration:60s]",
  "top-[8%] left-[30%] w-56 h-16 opacity-25 [animation-duration:38s]",
];

export default function AnimatedSky() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const farY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const nearY = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const skyScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const fade = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden bg-midnight">
      {/* Sky gradient + moonrise glow */}
      <motion.div
        style={{ scale: skyScale, opacity: fade }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-deep via-midnight to-purple-deep" />
        <div className="absolute left-1/2 top-[28%] -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-gold/10 blur-[120px]" />
        {/* Moon */}
        <div className="absolute right-[14%] top-[16%] w-24 h-24 rounded-full bg-moonlight shadow-[0_0_80px_30px_rgba(244,241,234,0.25)]" />
      </motion.div>

      <motion.div style={{ opacity: fade }}>
        <StarField count={70} className="top-0 h-[60%]" color="moonlight" variant="twinkle" />
        <StarField count={18} className="top-[10%] h-[50%]" color="gold" variant="float" />
      </motion.div>

      {/* Drifting clouds */}
      {cloudClasses.map((cls, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-moonlight blur-2xl animate-[drift_linear_infinite_alternate] ${cls}`}
        />
      ))}

      {/* Far mountains */}
      <motion.svg
        style={{ y: farY }}
        className="absolute bottom-0 w-full h-[55%]"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0 300 L120 230 L260 280 L420 180 L600 260 L760 160 L940 250 L1120 190 L1280 270 L1440 220 L1440 400 L0 400 Z"
          fill="#261a4a"
          opacity="0.7"
        />
      </motion.svg>

      {/* Mid mountains */}
      <motion.svg
        style={{ y: midY }}
        className="absolute bottom-0 w-full h-[45%]"
        viewBox="0 0 1440 360"
        preserveAspectRatio="none"
      >
        <path
          d="M0 280 L160 180 L320 250 L500 140 L680 230 L860 130 L1040 220 L1220 150 L1440 240 L1440 360 L0 360 Z"
          fill="#4a2e83"
          opacity="0.55"
        />
      </motion.svg>

      {/* Near silhouette ridge */}
      <motion.svg
        style={{ y: nearY }}
        className="absolute bottom-0 w-full h-[32%]"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
      >
        <path
          d="M0 200 L200 90 L380 170 L560 60 L760 150 L960 70 L1180 160 L1440 90 L1440 260 L0 260 Z"
          fill="#05060f"
        />
      </motion.svg>

      {/* Bottom vignette for legibility */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-midnight-deep to-transparent" />
    </div>
  );
}
