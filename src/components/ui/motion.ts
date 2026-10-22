import type { Transition, Variants } from 'framer-motion';

/** Apple-like easing: quick start, long gentle settle */
export const easeApple = [0.25, 0.1, 0.25, 1] as const;

export const spring: Transition = {
  type: 'spring',
  stiffness: 380,
  damping: 32,
  mass: 0.8,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeApple },
  },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});
