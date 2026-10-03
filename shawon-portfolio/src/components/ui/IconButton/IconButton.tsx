
import type {
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'

export type IconButtonVariant =
  | 'default'
  | 'ghost'
  | 'outline'

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  label: string
  variant?: IconButtonVariant
}

export function IconButton({
  icon,
  label,
  variant = 'ghost',
  className = '',
  type = 'button',
  ...props
}: IconButtonProps) {
  const classes = [
    'icon-button',
    `icon-button--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      className={classes}
      aria-label={label}
      {...props}
    >
      <span aria-hidden="true">{icon}</span>
    </button>
  )
}
