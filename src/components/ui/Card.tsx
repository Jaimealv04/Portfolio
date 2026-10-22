import type { HTMLAttributes } from 'react';
import { cardClasses } from './styles';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Adds hover lift and pointer affordance */
  interactive?: boolean;
}

export const Card = ({ interactive, className = '', ...props }: CardProps) => (
  <div className={`${cardClasses(interactive)} ${className}`} {...props} />
);
