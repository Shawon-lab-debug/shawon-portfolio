
import type { HTMLAttributes, ReactNode } from 'react'

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  size?: ContainerSize
  fluid?: boolean
}

export function Container({
  children,
  size = 'xl',
  fluid = false,
  className = '',
  ...props
}: ContainerProps) {
  const classes = [
    'container',
    `container--${size}`,
    fluid ? 'container--fluid' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
