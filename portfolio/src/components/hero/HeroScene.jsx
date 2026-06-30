import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { HiOutlineArrowDown } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import AnimatedSky from "./AnimatedSky";
import Button from "../common/Button";
import { personal } from "../../data/content";
import useLenisScroll from "../../hooks/useLenisScroll";

const headlineWords = personal.tagline.split(" ");

const wordVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.6 + i * 0.07, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroScene() {
  const zoomRef = useRef(null);
  const scrollTo = useLenisScroll();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        zoomRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 2.6, ease: "power2.out" }
      );
      // ambient, very slow breathing zoom for a "living world" feel
      gsap.to(zoomRef.current, {
        scale: 1.035,
        duration: 14,
        delay: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div ref={zoomRef} className="absolute inset-0">
        <AnimatedSky />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10 pt-24 pb-32">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="block font-eyebrow text-xs text-teal-soft mb-6"
        >
          {personal.name}
        </motion.span>

        <h1 className="font-display italic text-4xl sm:text-5xl md:text-7xl leading-[1.08] text-moonlight max-w-3xl">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="show"
              className={`inline-block mr-3 ${
                ["Intelligent", "Beautiful"].includes(word)
                  ? "text-glow-gold text-gold-bright not-italic font-semibold"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-7 font-eyebrow text-xs sm:text-sm text-moonlight-dim tracking-[0.25em] max-w-xl"
        >
          {personal.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button variant="solid" onClick={() => scrollTo("#projects")} as="button">
            View Projects
          </Button>
          <Button
            variant="outline"
            href={personal.resumeUrl}
            target="_blank"
            rel="noreferrer"
            icon={FiDownload}
          >
            Resume
          </Button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 2.4, duration: 0.8 },
          y: { delay: 3, duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-moonlight-dim hover:text-gold-bright transition-colors"
        aria-label="Scroll to next scene"
      >
        <span className="font-eyebrow text-[10px] tracking-[0.3em]">Scroll</span>
        <HiOutlineArrowDown />
      </motion.button>
    </section>
  );
}
