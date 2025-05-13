import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

/**
 * Button component props that extend both button and anchor HTML attributes.
 * @property variant - Visual style variant ('primary' | 'secondary' | 'outline')
 * @property size - Button size variant ('sm' | 'md' | 'lg')
 * @property as - Render as button or anchor tag
 * @property href - URL for anchor tag variant
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
}

/**
 * Reusable Button component that can render as either a button or anchor tag.
 * Features:
 * - Multiple visual variants (primary, secondary, outline)
 * - Configurable sizes
 * - Accessible focus states
 * - Disabled state handling
 * - Polymorphic rendering (button/anchor)
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', as = 'button', children, ...props }, ref) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      {
        'bg-[#9GCFE6] text-black hover:bg-[#90C897]': variant === 'primary',
        'bg-[#F0D39A] text-black hover:bg-secondary-dark': variant === 'secondary',
        'border border-[#90C897] bg-white hover:bg-accent-light text-black': variant === 'outline',
        'h-9 px-4 py-2 text-sm': size === 'sm',
        'h-10 px-6 py-2': size === 'md',
        'h-11 px-8 py-3 text-lg': size === 'lg',
      },
      className
    );

    if (as === 'a') {
      return (
        <a className={baseStyles} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={baseStyles} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button }