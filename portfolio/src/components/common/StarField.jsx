import { useEffect, useState } from "react";

/**
 * Renders a layer of twinkling stars / floating particles.
 * Pure CSS animation (twinkle / float-y keyframes from globals.css) —
 * cheap enough to use as ambient atmosphere across multiple scenes.
 * Particle positions are randomized once on mount (inside an effect,
 * not during render) and then stay stable for the component's lifetime.
 */
export default function StarField({
  count = 40,
  className = "",
  color = "moonlight",
  variant = "twinkle", // "twinkle" | "float"
}) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // One-time, purely decorative randomization (particle layout) done in an
    // effect rather than during render so it never runs on the server and
    // never triggers React's render-purity checks.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2.2 + 0.6,
        delay: Math.random() * 6,
        duration:
          variant === "twinkle" ? 3 + Math.random() * 4 : 5 + Math.random() * 5,
      }))
    );
  }, [count, variant]);

  const colorMap = {
    moonlight: "bg-moonlight",
    gold: "bg-gold-bright",
    teal: "bg-teal-soft",
  };

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <span
          key={p.id}
          className={`absolute rounded-full ${colorMap[color]}`}
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: 0.5,
            animation: `${
              variant === "twinkle" ? "twinkle" : "float-y"
            } ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
