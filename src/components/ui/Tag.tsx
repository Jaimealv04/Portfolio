import type { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  tone?: 'neutral' | 'accent' | 'success';
}

const tones = {
  neutral: 'bg-muted/50 text-muted-foreground',
  accent: 'bg-accent/10 text-accent',
  success: 'bg-success/10 text-success',
} as const;

export const Tag = ({ children, tone = 'neutral' }: TagProps) => (
  <span
    className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium leading-none ${tones[tone]}`}
  >
    {children}
  </span>
);
