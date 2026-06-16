"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";

// ─── Fade in on scroll ─────────────────────────────────────────────────────
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}
export function FadeIn({ children, delay = 0, duration = 0.5, className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Slide in from left or right ───────────────────────────────────────────
interface SlideInProps {
  children: React.ReactNode;
  from?: "left" | "right";
  delay?: number;
  className?: string;
}
export function SlideIn({ children, from = "left", delay = 0, className = "" }: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: from === "left" ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Staggered container + item ────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
export function StaggerContainer({ children, className = "", delay = 0 }: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={{ ...containerVariants, visible: { transition: { staggerChildren: 0.08, delayChildren: delay } } }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// ─── Hover lift card ───────────────────────────────────────────────────────
export function HoverCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.015, boxShadow: "0 8px 24px rgba(0,0,0,0.10)" }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Press button (scale on tap) ───────────────────────────────────────────
export function PressButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Float (gentle vertical bob) ───────────────────────────────────────────
export function Float({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Animated counter ──────────────────────────────────────────────────────
function useCountUp(target: number, isInView: boolean, duration = 1.4) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);
  return count;
}

interface AnimatedNumberProps {
  value: string;
  className?: string;
}
export function AnimatedNumber({ value, className = "" }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const numMatch = value.match(/[\d,]+/);
  const num = numMatch ? parseInt(numMatch[0].replace(/,/g, ""), 10) : null;
  const prefix = value.match(/^[^0-9]*/)?.[0] ?? "";
  const suffix = value.match(/[^0-9,]*$/)?.[0] ?? "";
  const count = useCountUp(num ?? 0, isInView);

  const display = num !== null
    ? `${prefix}${count.toLocaleString()}${suffix}`
    : value;

  return <span ref={ref} className={className}>{display}</span>;
}

// ─── Scale-in (for hero badge / icons) ─────────────────────────────────────
export function ScaleIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
