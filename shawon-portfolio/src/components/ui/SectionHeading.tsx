import type { HTMLAttributes, ReactNode } from 'react';
import { WordReveal } from '../animations/WordReveal';

export type HeadingAlignment = 'left' | 'center' | 'right';
export type HeadingLevel = 2 | 3 | 4;

export interface SectionHeadingProps
  extends HTMLAttributes<HTMLDivElement> {
  title: string;
  eyebrow?: string;
  description?: ReactNode;
  align?: HeadingAlignment;
  level?: HeadingLevel;
}

export function SectionHeading({
  title,
  eyebrow,
  description,
  align = 'left',
  level = 2,
  className = '',
  ...props
}: SectionHeadingProps) {
  const HeadingTag = `h${level}` as const;

  const classes = [
    'section-heading',
    `section-heading--${align}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {eyebrow && (
        <span className="section-heading__eyebrow">
          {eyebrow}
        </span>
      )}

      <HeadingTag className="section-heading__title">
        <WordReveal text={title} />
      </HeadingTag>

      {description && (
        <div className="section-heading__description">
          {description}
        </div>
      )}
    </div>
  );
}
