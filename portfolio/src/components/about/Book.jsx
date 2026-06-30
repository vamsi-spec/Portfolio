import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { bookPages } from "../../data/bookPages";

export default function Book() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const page = bookPages[index];

  function go(delta) {
    setDirection(delta);
    setIndex((i) => (i + delta + bookPages.length) % bookPages.length);
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto" style={{ perspective: 1600 }}>
      {/* Book spine + cover ambiance */}
      <div className="absolute -inset-3 sm:-inset-5 rounded-[28px] bg-gradient-to-br from-purple-deep via-midnight-panel to-purple/40 border border-gold/20 shadow-[0_30px_80px_rgba(0,0,0,0.5)]" />
      <div className="absolute left-1/2 top-3 bottom-3 -translate-x-1/2 w-px bg-gold/15 hidden sm:block" />

      <div className="relative min-h-[420px] sm:min-h-[380px] rounded-3xl p-8 sm:p-12 flex flex-col">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page.id}
            custom={direction}
            initial={{ rotateY: direction > 0 ? 70 : -70, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: direction > 0 ? -70 : 70, opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: direction > 0 ? "left center" : "right center" }}
            className="flex-1 flex flex-col"
          >
            <span className="font-eyebrow text-[11px] text-gold/70 mb-3">
              Page {page.label}
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-moonlight mb-5">
              {page.title}
            </h3>
            <p className="font-body text-moonlight-dim leading-relaxed text-base sm:text-lg">
              {page.body}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between pt-8 mt-auto">
          <button
            onClick={() => go(-1)}
            className="flex items-center gap-1 text-moonlight-dim hover:text-gold-bright transition-colors font-eyebrow text-[11px] tracking-widest"
            aria-label="Previous page"
          >
            <HiOutlineChevronLeft /> Prev
          </button>

          <div className="flex gap-1.5">
            {bookPages.map((p, i) => (
              <button
                key={p.id}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Go to page ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === index ? "bg-gold-bright" : "bg-moonlight-dim/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="flex items-center gap-1 text-moonlight-dim hover:text-gold-bright transition-colors font-eyebrow text-[11px] tracking-widest"
            aria-label="Next page"
          >
            Next <HiOutlineChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
