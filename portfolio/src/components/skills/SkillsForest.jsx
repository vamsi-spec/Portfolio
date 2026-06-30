import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import SectionHeading from "../common/SectionHeading";
import StarField from "../common/StarField";
import SkillOrb from "./SkillOrb";
import { skillGroups } from "../../data/skills";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/animationVariants";

export default function SkillsForest() {
  return (
    <SectionWrapper id="skills" className="py-28 sm:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-teal/10 to-midnight" />
      {/* Tree silhouettes */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full h-40 opacity-40 mask-fade-t"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 14 }).map((_, i) => {
          const x = i * 110 + (i % 2 === 0 ? 0 : 30);
          const h = 70 + ((i * 37) % 60);
          return (
            <path
              key={i}
              d={`M${x} 160 L${x} ${160 - h} L${x - 22} ${160 - h + 30} L${x} ${160 - h + 16} L${x - 18} ${160 - h + 46} L${x} ${160 - h + 32} L${x + 18} ${160 - h + 46} L${x} ${160 - h + 16} L${x + 22} ${160 - h + 30} Z`}
              fill="#05060f"
            />
          );
        })}
      </svg>
      <StarField count={32} color="gold" variant="float" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Scene III — The Skills Forest"
          title="A Grove for Every Craft"
          description="Each light is a skill. Hover or tap one to see how it's been put to use."
          accent="teal"
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-10 sm:gap-12"
        >
          {skillGroups.map((group) => (
            <motion.div key={group.id} variants={fadeUp}>
              <div className="flex items-baseline gap-3 mb-4">
                <h3 className="font-display text-xl sm:text-2xl text-moonlight">
                  {group.label}
                </h3>
                <span className="font-eyebrow text-[10px] text-teal-soft tracking-[0.2em]">
                  {group.grove}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <SkillOrb key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
