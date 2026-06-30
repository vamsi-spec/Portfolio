import { motion } from "framer-motion";

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-eyebrow tracking-[0.2em] transition-colors duration-300";

const variants = {
  solid:
    "bg-gold text-midnight-deep hover:bg-gold-bright shadow-[0_0_30px_rgba(217,180,95,0.35)]",
  outline:
    "border border-moonlight-dim/40 text-moonlight hover:border-gold-bright hover:text-gold-bright",
  ghost: "text-moonlight-dim hover:text-gold-bright",
};

export default function Button({
  as = "a",
  href,
  variant = "solid",
  children,
  icon: Icon,
  className = "",
  ...props
}) {
  const Comp = motion[as] ?? motion.a;
  return (
    <Comp
      href={href}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="text-base" />}
      {children}
    </Comp>
  );
}
