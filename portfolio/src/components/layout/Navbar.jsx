import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import useActiveSection from "../../hooks/useActiveSection";
import useLenisScroll from "../../hooks/useLenisScroll";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map((n) => n.id));
  const scrollTo = useLenisScroll();

  function handleNav(id) {
    setOpen(false);
    scrollTo(`#${id}`);
  }

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-5xl">
      <nav className="flex items-center justify-between rounded-full border border-moonlight-dim/15 bg-midnight-deep/60 backdrop-blur-lg px-5 py-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
        <button
          onClick={() => handleNav("hero")}
          className="flex items-center gap-2 group"
          aria-label="Back to top"
        >
          <svg width="22" height="22" viewBox="0 0 64 64" className="shrink-0">
            <circle cx="32" cy="32" r="30" fill="none" stroke="#D9B45F" strokeWidth="2" opacity="0.6" />
            <path
              d="M32 12 L37 28 L53 32 L37 36 L32 52 L27 36 L11 32 L27 28 Z"
              fill="#D9B45F"
              className="group-hover:fill-[#F2CE7E] transition-colors"
            />
          </svg>
          <span className="hidden sm:inline font-eyebrow text-[11px] text-moonlight tracking-[0.2em]">
            K. Vamsi
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNav(item.id)}
                className={`relative px-3 py-1.5 text-xs font-eyebrow tracking-[0.15em] rounded-full transition-colors ${
                  activeId === item.id
                    ? "text-midnight-deep"
                    : "text-moonlight-dim hover:text-moonlight"
                }`}
              >
                {activeId === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-moonlight text-xl p-1"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mt-2 rounded-2xl border border-moonlight-dim/15 bg-midnight-deep/90 backdrop-blur-lg p-2 flex flex-col gap-1"
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-eyebrow tracking-[0.15em] ${
                    activeId === item.id
                      ? "bg-gold text-midnight-deep"
                      : "text-moonlight-dim"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
