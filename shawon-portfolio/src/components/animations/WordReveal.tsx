import { useEffect, useRef, useState, type CSSProperties } from 'react';
import './text-motion.css';

interface WordRevealProps {
  text: string;
  className?: string;
}

export function WordReveal({ text, className = '' }: WordRevealProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(motionQuery.matches);
    updateMotionPreference();
    motionQuery.addEventListener('change', updateMotionPreference);
    return () => motionQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.25, rootMargin: '0px 0px -40px 0px' });

    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const words = text.trim().split(/\s+/);

  return (
    <span
      ref={elementRef}
      className={`word-reveal ${isVisible ? 'is-visible' : ''} ${prefersReducedMotion ? 'word-reveal--reduced' : ''} ${className}`.trim()}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="word-reveal__word"
          aria-hidden="true"
          style={{ '--word-index': index } as CSSProperties}
        >
          {word}{index < words.length - 1 ? '\u00a0' : ''}
        </span>
      ))}
    </span>
  );
}
