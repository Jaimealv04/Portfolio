import { m, type HTMLMotionProps } from 'framer-motion';
import { fadeUp, stagger } from './motion';

interface RevealProps extends HTMLMotionProps<'div'> {
  /** Stagger direct `RevealItem` children instead of animating as one block */
  staggerChildren?: number;
  delay?: number;
}

/** Fades content up the first time it scrolls into view. */
export const Reveal = ({ staggerChildren, delay = 0, children, ...props }: RevealProps) => (
  <m.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={staggerChildren ? stagger(staggerChildren, delay) : fadeUp}
    {...props}
  >
    {children}
  </m.div>
);

export const RevealItem = ({ children, ...props }: HTMLMotionProps<'div'>) => (
  <m.div variants={fadeUp} {...props}>
    {children}
  </m.div>
);
