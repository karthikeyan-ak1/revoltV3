import React from 'react'
import { ButtonVariant, ButtonTheme } from '@/shared/enums/button'

import styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  theme?: ButtonTheme
  block?: boolean
  href?: string
  children: React.ReactNode
}

const variantClass: Record<ButtonVariant, string> = {
  [ButtonVariant.Primary]: styles.btnPrimary,
  [ButtonVariant.Secondary]: styles.btnSecondary,
  [ButtonVariant.Tertiary]: styles.btnTertiary,
}

const themeClass: Record<ButtonTheme, string> = {
  [ButtonTheme.White]: styles.themeWhite,
  [ButtonTheme.Black]: styles.themeBlack,
}

const Button: React.FC<ButtonProps> = ({
  variant = ButtonVariant.Primary,
  theme = ButtonTheme.White,
  block = false,
  href,
  children,
  className = '',
  ...rest
}) => {
  const cls = [
    styles.btn,
    variantClass[variant],
    themeClass[theme],
    block ? styles.btnBlock : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}

export default Button
