import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../utils/animationVariants";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  accent = "gold",
}) {
  const accentColor = accent === "teal" ? "text-teal-soft" : "text-gold";
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex flex-col ${alignment} gap-4 mb-14`}
    >
      {eyebrow && (
        <span className={`font-eyebrow text-xs ${accentColor}`}>{eyebrow}</span>
      )}
      <h2 className="text-4xl md:text-6xl text-moonlight">{title}</h2>
      {description && (
        <p className="max-w-2xl text-moonlight-dim text-base md:text-lg font-body leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
