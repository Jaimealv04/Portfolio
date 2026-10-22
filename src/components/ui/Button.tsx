import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { buttonClasses, type ButtonStyleProps as StyleProps } from './styles';

export const Button = ({
  variant,
  size,
  className = '',
  type = 'button',
  ...props
}: StyleProps & ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button type={type} className={`${buttonClasses({ variant, size })} ${className}`} {...props} />
);

export const ButtonLink = ({
  variant,
  size,
  className = '',
  ...props
}: StyleProps & AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a className={`${buttonClasses({ variant, size })} ${className}`} {...props} />
);

/** Round, frosted icon-only button used in bars and floating menus. */
export const IconButton = ({
  className = '',
  type = 'button',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { 'aria-label': string }) => (
  <button
    type={type}
    className={
      'inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 ' +
      'transition-all duration-300 ease-apple hover:bg-foreground/[0.06] hover:text-foreground active:scale-90 ' +
      className
    }
    {...props}
  />
);
