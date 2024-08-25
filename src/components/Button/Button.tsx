import { HTMLProps } from 'react';
import { cn } from '@/helpers/combineClasses';
import css from './Button.module.scss';

export type ButtonProps = {
  children: string;
  type?: 'button' | 'submit';
  isSmall?: boolean;
  isOutlined?: boolean;
} & HTMLProps<HTMLButtonElement>;

export const Button = ({
  children,
  type = 'button',
  isSmall = false,
  isOutlined = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        css.button,
        css[isSmall ? 'sm' : 'md'],
        css[isOutlined ? 'outlined' : 'textOnly']
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
