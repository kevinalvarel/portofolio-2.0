"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    const btn = buttonRef.current;

    if (btn && document.startViewTransition) {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const maxRadius = Math.hypot(
        Math.max(cx, window.innerWidth - cx),
        Math.max(cy, window.innerHeight - cy),
      );
      document.documentElement.style.setProperty("--theme-cx", `${cx}px`);
      document.documentElement.style.setProperty("--theme-cy", `${cy}px`);
      document.documentElement.style.setProperty("--theme-r", `${maxRadius}px`);
      document.documentElement.dataset.themeAnim = "1";

      const transition = document.startViewTransition(() => {
        setTheme(nextTheme);
      });

      transition.finished.then(() => {
        delete document.documentElement.dataset.themeAnim;
      });
    } else {
      setTheme(nextTheme);
    }
  };

  if (!mounted) {
    return <div className="relative w-8 h-8" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
    >
      <span className="theme-toggle-glow" />
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            className="theme-toggle-icon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Moon className="w-[18px] h-[18px]" strokeWidth={1.8} />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            className="theme-toggle-icon"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Sun className="w-[18px] h-[18px]" strokeWidth={1.8} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
