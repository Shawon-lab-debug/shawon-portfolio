
import type { HTMLAttributes, ReactNode } from 'react'

export interface VisuallyHiddenProps
  extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
}

export function VisuallyHidden({
  children,
  className = '',
  ...props
}: VisuallyHiddenProps) {
  const classes = [
    'visually-hidden',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}
