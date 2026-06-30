import { motion } from "framer-motion";
import { fadeIn, viewportOnce } from "../../utils/animationVariants";

/**
 * A consistent "scene" container. Each major section of the journey
 * (Hero, About, Skills, Projects, Timeline, Experience, Contact) wraps
 * its content in this so scroll-reveal, spacing, and id-based nav all
 * stay uniform.
 */
export default function SectionWrapper({
  id,
  children,
  className = "",
  bg = "",
  as: Tag = "section",
  fullHeight = true,
}) {
  return (
    <Tag
      id={id}
      className={`relative w-full overflow-hidden ${
        fullHeight ? "min-h-screen" : ""
      } ${bg} ${className}`}
    >
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative z-10 w-full h-full"
      >
        {children}
      </motion.div>
    </Tag>
  );
}
