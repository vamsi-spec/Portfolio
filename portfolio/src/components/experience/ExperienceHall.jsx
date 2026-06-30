import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineSparkles } from "react-icons/hi";
import SectionWrapper from "../common/SectionWrapper";
import SectionHeading from "../common/SectionHeading";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "../../utils/animationVariants";
import { experience } from "../../data/experience";
import { achievements } from "../../data/content";

export default function ExperienceHall() {
  const internship = experience[0];

  return (
    <SectionWrapper id="experience" className="py-28 sm:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-purple-deep/25 to-midnight" />
      {/* light pillars */}
      <div className="absolute inset-0 flex justify-around opacity-[0.06] pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="w-px h-full bg-gradient-to-b from-gold-bright via-gold to-transparent" />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Scene VI — The Hall of Achievements"
          title="Experience & Recognition"
        />

        {/* Internship feature card */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative rounded-3xl border border-gold/25 bg-midnight-panel/80 backdrop-blur p-7 sm:p-10 mb-12 overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold-bright text-2xl">
              <HiOutlineAcademicCap />
            </div>
            <div>
              <span className="font-eyebrow text-[11px] text-gold tracking-[0.2em]">
                {internship.duration}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-moonlight mt-1">
                {internship.role}
              </h3>
              <p className="text-sm text-moonlight-dim mt-1">{internship.org}</p>
              <p className="text-moonlight-dim leading-relaxed mt-4">{internship.summary}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {internship.tools.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border border-teal-soft/30 text-teal-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-6">
                {internship.highlights.map((h) => (
                  <li key={h} className="text-sm text-moonlight-dim flex gap-2">
                    <span className="text-gold-bright">✦</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Achievement cards */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 gap-4"
        >
          {achievements.map((a) => (
            <motion.div
              key={a.id}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-moonlight-dim/15 bg-midnight-panel/60 px-5 py-5 flex gap-3"
            >
              <span className="shrink-0 text-gold-bright text-lg mt-0.5">
                <HiOutlineSparkles />
              </span>
              <div>
                <h4 className="font-display text-lg text-moonlight">{a.title}</h4>
                <p className="text-sm text-moonlight-dim mt-1">{a.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
