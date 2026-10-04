
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react';
import './text-motion.css';

interface WordRevealProps {
  text: string;
  className?: string;
}

const getReducedMotionPreference = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const hasIntersectionObserver = () =>
  typeof window !== 'undefined' &&
  'IntersectionObserver' in window;

export function WordReveal({
  text,
  className = '',
}: WordRevealProps) {
  const elementRef = useRef<HTMLSpanElement>(null);

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
    const element = elementRef.current;

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
        threshold: 0.2,
        rootMargin: '0px 0px -32px 0px',
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const words = text.trim()
    ? text.trim().split(/\s+/)
    : [];

  const classes = [
    'word-reveal',
    isVisible ? 'is-visible' : '',
    prefersReducedMotion ? 'word-reveal--reduced' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      ref={elementRef}
      className={classes}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="word-reveal__word"
          aria-hidden="true"
          style={
            {
              '--word-index': index,
            } as CSSProperties
          }
        >
          {word}
          {index < words.length - 1 ? '\u00a0' : ''}
        </span>
      ))}
    </span>
  );
}
