/** Shared class builders, for elements that need the look without the component */

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap ' +
  'transition-all duration-300 ease-apple active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-accent-foreground hover:bg-accent-hover shadow-soft',
  secondary: 'bg-muted/60 text-foreground hover:bg-muted',
  ghost: 'text-accent hover:bg-accent/10',
};

const sizes: Record<Size, string> = {
  sm: 'h-8 px-3.5 text-sm',
  md: 'h-10 px-5 text-[15px]',
  lg: 'h-12 px-7 text-base',
};

export interface ButtonStyleProps {
  variant?: Variant;
  size?: Size;
}

export const buttonClasses = ({ variant = 'primary', size = 'md' }: ButtonStyleProps = {}) =>
  `${base} ${variants[variant]} ${sizes[size]}`;


export const cardClasses = (interactive = false) =>
  [
    'rounded-3xl border hairline bg-surface shadow-soft',
    'transition-all duration-500 ease-apple',
    interactive &&
      'cursor-pointer hover:-translate-y-1 hover:shadow-lifted active:translate-y-0 active:scale-[0.99]',
  ]
    .filter(Boolean)
    .join(' ');
