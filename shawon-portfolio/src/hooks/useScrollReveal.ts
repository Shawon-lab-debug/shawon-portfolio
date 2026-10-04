
import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement>({
  threshold = 0.15,
  rootMargin = '0px 0px -50px 0px',
  once = true,
}: UseScrollRevealOptions = {}) {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const motionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );

    if (
      motionQuery.matches ||
      !('IntersectionObserver' in window)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        setIsReady(true);

        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, rootMargin, threshold]);

  return {
    ref: elementRef,
    isVisible,
    isReady,
    revealClassName: [
      'scroll-reveal',
      isReady ? 'scroll-reveal--ready' : '',
      isVisible ? 'scroll-reveal--visible' : '',
    ]
      .filter(Boolean)
      .join(' '),
  };
}
