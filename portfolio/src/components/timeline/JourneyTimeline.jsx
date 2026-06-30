import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import SectionWrapper from "../common/SectionWrapper";
import SectionHeading from "../common/SectionHeading";
import StarField from "../common/StarField";
import { milestones } from "../../data/timeline";
import { fadeUp, viewportOnce } from "../../utils/animationVariants";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const VB_WIDTH = 320;
const STEP_Y = 230;
const xPattern = [160, 70, 250, 70, 250, 70, 160, 250, 70];

function buildPath(n) {
  const points = Array.from({ length: n }).map((_, i) => ({
    x: xPattern[i % xPattern.length],
    y: i * STEP_Y + 20,
  }));
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const midY = p0.y + (p1.y - p0.y) / 2;
    d += ` C ${p0.x} ${midY}, ${p1.x} ${midY}, ${p1.x} ${p1.y}`;
  }
  return { d, points, height: points[points.length - 1].y + 40 };
}

export default function JourneyTimeline() {
  const pathRef = useRef(null);
  const travelerRef = useRef(null);
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);

  const { d, height } = useMemo(() => buildPath(milestones.length), []);

  useLayoutEffect(() => {
    if (!pathRef.current) return;
    const raw = MotionPathPlugin.cacheRawPathMeasurements(
      MotionPathPlugin.getRawPath(pathRef.current)
    );
    const pos = milestones.map((_, i) => {
      const t = i / (milestones.length - 1);
      return MotionPathPlugin.getPositionOnPath(raw, t);
    });
    setPositions(pos);
  }, []);

  useEffect(() => {
    if (!pathRef.current || !travelerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(travelerRef.current, {
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          alignOrigin: [0.5, 0.5],
        },
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 60%",
          scrub: 0.6,
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="journey" className="py-28 sm:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight-panel/40 to-midnight" />
      <StarField count={24} color="teal" variant="float" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Journey"
          title="My Journey"
          description="A timeline of milestones, one commit at a time."
        />

        {/* Desktop: road with traveling marker */}
        <div
          ref={containerRef}
          className="hidden md:block relative mx-auto"
          style={{ maxWidth: VB_WIDTH * 2.2 }}
        >
          <svg
            viewBox={`0 0 ${VB_WIDTH} ${height}`}
            width="100%"
            height={height * 0.7}
            preserveAspectRatio="xMidYMin meet"
          >
            <path
              ref={pathRef}
              d={d}
              fill="none"
              stroke="rgba(244,241,234,0.12)"
              strokeWidth="3"
              strokeDasharray="2 10"
              strokeLinecap="round"
            />
            {positions.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="6" fill="#D9B45F" opacity="0.9" />
            ))}
            <circle ref={travelerRef} r="9" fill="#F2CE7E">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>

          {positions.map((p, i) => {
            const milestone = milestones[i];
            const leftPct = (p.x / VB_WIDTH) * 100;
            const topPct = (p.y / height) * 70;
            const onRight = leftPct > 52;
            return (
              <motion.div
                key={milestone.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="absolute w-[40%]"
                style={{
                  left: onRight ? `${leftPct + 4}%` : undefined,
                  right: onRight ? undefined : `${100 - leftPct + 4}%`,
                  top: `${topPct}%`,
                  transform: "translateY(-50%)",
                }}
              >
                <div className="rounded-xl border border-gold/15 bg-midnight-panel/80 backdrop-blur px-4 py-3">
                  <span className="font-eyebrow text-[10px] text-gold tracking-[0.2em]">
                    {milestone.year}
                  </span>
                  <h4 className="font-display text-lg text-moonlight mt-1">
                    {milestone.title}
                  </h4>
                  <p className="text-xs text-moonlight-dim mt-1 leading-relaxed">
                    {milestone.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: simple vertical road */}
        <div className="md:hidden relative pl-6">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-teal-soft via-gold to-gold-bright/40" />
          <div className="flex flex-col gap-8">
            {milestones.map((milestone) => (
              <motion.div
                key={milestone.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="relative"
              >
                <span className="absolute -left-[26px] top-1.5 w-3 h-3 rounded-full bg-gold-bright shadow-[0_0_12px_3px_rgba(242,206,126,0.5)]" />
                <span className="font-eyebrow text-[10px] text-gold tracking-[0.2em]">
                  {milestone.year}
                </span>
                <h4 className="font-display text-lg text-moonlight mt-1">{milestone.title}</h4>
                <p className="text-sm text-moonlight-dim mt-1 leading-relaxed">
                  {milestone.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
