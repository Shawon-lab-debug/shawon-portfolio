
import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
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

const getReducedMotionPreference = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const hasIntersectionObserver = () =>
  typeof window !== 'undefined' &&
  'IntersectionObserver' in window;

export function SectionHeading({
  title,
  eyebrow,
  description,
  align = 'left',
  level = 2,
  className = '',
  ...props
}: SectionHeadingProps) {
  const headingRef = useRef<HTMLDivElement>(null);

  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(getReducedMotionPreference);

  const [isVisible, setIsVisible] = useState(
    () =>
      getReducedMotionPreference() ||
      !hasIntersectionObserver(),
  );

  useEffect(() => {
    const motionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );

    const updateMotionPreference = (
      event: MediaQueryListEvent,
    ) => {
      setPrefersReducedMotion(event.matches);

      if (event.matches) {
        setIsVisible(true);
      }
    };

    motionQuery.addEventListener(
      'change',
      updateMotionPreference,
    );

    return () => {
      motionQuery.removeEventListener(
        'change',
        updateMotionPreference,
      );
    };
  }, []);

  useEffect(() => {
    const element = headingRef.current;

    if (
      !element ||
      prefersReducedMotion ||
      !hasIntersectionObserver()
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -32px 0px',
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const HeadingTag = `h${level}` as const;

  const classes = [
    'section-heading',
    `section-heading--${align}`,
    isVisible ? 'section-heading--visible' : '',
    prefersReducedMotion ? 'section-heading--reduced' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={headingRef}
      className={classes}
      {...props}
    >
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
