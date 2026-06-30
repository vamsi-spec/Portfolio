import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import SectionWrapper from "../common/SectionWrapper";
import StarField from "../common/StarField";
import Button from "../common/Button";
import { personal, contactCTA } from "../../data/content";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/animationVariants";

const links = [
  { label: "GitHub", href: personal.github, icon: FiGithub },
  { label: "LinkedIn", href: personal.linkedin, icon: FiLinkedin },
  { label: "Email", href: `mailto:${personal.email}`, icon: FiMail },
];

export default function ContactSunset() {
  return (
    <SectionWrapper id="contact" className="flex items-center py-28 sm:py-32" fullHeight={true}>
      {/* Sunset sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-purple-deep to-midnight" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gold/20 via-purple/15 to-transparent" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/25 blur-[140px]" />
      {/* Sun */}
      <div className="absolute left-1/2 bottom-[8%] -translate-x-1/2 w-40 h-40 rounded-full bg-gradient-to-t from-gold-bright to-gold shadow-[0_0_120px_40px_rgba(217,180,95,0.35)]" />
      {/* water line + reflection */}
      <div className="absolute inset-x-0 bottom-[6%] h-px bg-gold/30" />

      <StarField count={30} color="gold" variant="float" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 text-center flex flex-col items-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="font-eyebrow text-xs text-gold tracking-[0.25em] mb-5"
        >
          Scene VII — The Shore
        </motion.span>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="font-display italic text-4xl sm:text-6xl text-moonlight text-glow-gold leading-tight"
        >
          {contactCTA.heading}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 text-moonlight-dim leading-relaxed max-w-xl"
        >
          {contactCTA.body}
        </motion.p>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {links.map((l) => (
            <motion.div key={l.label} variants={fadeUp}>
              <Button variant="outline" href={l.href} target="_blank" rel="noreferrer" icon={l.icon}>
                {l.label}
              </Button>
            </motion.div>
          ))}
          <motion.div variants={fadeUp}>
            <Button variant="solid" href={personal.resumeUrl} target="_blank" rel="noreferrer" icon={FiDownload}>
              Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-20 text-[11px] text-moonlight-dim/60 font-eyebrow tracking-[0.2em]"
        >
          © {new Date().getFullYear()} {personal.name} — Crafted scene by scene.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
