// import { classNames } from '../../../shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children,  disabled, ...otherProps } = props;
  
  const theme:ButtonTheme = props.theme ? props.theme : ButtonTheme.BACKGROUND;

  // const mods: Record<string, boolean> = {
  //   [cls[theme]]: true,
  // };

  return (
    <button
      type="button"
      className={clsx(styles.Button, styles[theme], [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
