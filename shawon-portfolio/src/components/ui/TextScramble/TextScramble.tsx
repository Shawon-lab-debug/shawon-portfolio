import { useEffect, useRef, useState } from 'react';

import './TextScramble.css';

type TextScrambleProps = {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
};

const characters = '!<>-_\\/[]{}—=+*^?#________';

function TextScramble({
  text,
  className = '',
  duration = 3500,
  delay = 250,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  const elementRef = useRef<HTMLSpanElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduceMotion) {
      const animatedElement = element.querySelector(
        '.text-scramble__animated',
      );

      if (animatedElement) {
        animatedElement.textContent = text;
      }

      return;
    }

    const startAnimation = () => {
      if (hasStartedRef.current) {
        return;
      }

      hasStartedRef.current = true;
      setIsAnimating(true);

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const resolvedCount = Math.floor(
          progress * text.length,
        );

        let nextText = '';

        for (let index = 0; index < text.length; index += 1) {
          const character = text[index];

          if (character === ' ') {
            nextText += ' ';
            continue;
          }

          if (index < resolvedCount) {
            nextText += character;
          } else {
            nextText +=
              characters[
                Math.floor(Math.random() * characters.length)
              ];
          }
        }

        setDisplayText(nextText);

        if (progress < 1) {
          frameRef.current =
            requestAnimationFrame(animate);
          return;
        }

        setDisplayText(text);
        setIsAnimating(false);
      };

      frameRef.current =
        requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        timeoutRef.current = window.setTimeout(
          startAnimation,
          delay,
        );

        observer.disconnect();
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [delay, duration, text]);

  return (
    <span
      ref={elementRef}
      className={`text-scramble ${
        isAnimating ? 'text-scramble--active' : ''
      } ${className}`}
      aria-label={text}
    >
      <span className="text-scramble__content">
        <span
          className="text-scramble__measure"
          aria-hidden="true"
        >
          {text}
        </span>

        <span
          className="text-scramble__animated"
          aria-hidden="true"
        >
          {displayText}
        </span>
      </span>
    </span>
  );
}

export default TextScramble;