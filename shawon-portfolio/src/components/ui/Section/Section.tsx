
import type { HTMLAttributes, ReactNode } from 'react'

export type SectionSpacing = 'sm' | 'md' | 'lg' | 'none'
export type SectionBackground = 'default' | 'subtle' | 'surface'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  spacing?: SectionSpacing
  background?: SectionBackground
  as?: 'section' | 'div' | 'article'
}

export function Section({
  children,
  spacing = 'lg',
  background = 'default',
  as: Component = 'section',
  className = '',
  ...props
}: SectionProps) {
  const classes = [
    'section',
    `section--spacing-${spacing}`,
    `section--${background}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
