import { useEffect, useState, type PointerEvent } from 'react';
import { Link } from 'react-router-dom';
import { Container, Section } from '../../ui';
import '../../animations/text-motion.css';
import TechnologyMarquee from './TechnologyMarquee';
import './Hero.css';

const typingPhrases = [
  'web experiences',
  'digital products',
  'full-stack apps',
  'responsive sites',
];

const getReducedMotionPreference = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function useTypingAnimation(phrases: string[]) {
  const [phraseIndex, setPhraseIndex] = useState(0);

  const [isReducedMotion, setIsReducedMotion] = useState(
    getReducedMotionPreference,
  );

  const [displayedText, setDisplayedText] = useState(
    () =>
      getReducedMotionPreference()
        ? phrases[0]
        : '',
  );

  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );

    const updateMotionPreference = (
      event: MediaQueryListEvent,
    ) => {
      setIsReducedMotion(event.matches);

      if (event.matches) {
        setDisplayedText(phrases[0]);
        setIsDeleting(false);
      }
    };

    mediaQuery.addEventListener(
      'change',
      updateMotionPreference,
    );

    return () => {
      mediaQuery.removeEventListener(
        'change',
        updateMotionPreference,
      );
    };
  }, [phrases]);

  useEffect(() => {
    if (isReducedMotion) return;

    const currentPhrase = phrases[phraseIndex];
    const isComplete = displayedText === currentPhrase;
    const isEmpty = displayedText === '';

    let delay = isDeleting ? 30 : 65;

    if (isComplete) {
      delay = 1800;
    } else if (isEmpty && isDeleting) {
      delay = 250;
    }

    const timeout = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty && isDeleting) {
        setIsDeleting(false);
        setPhraseIndex(
          (current) => (current + 1) % phrases.length,
        );
        return;
      }

      setDisplayedText((current) =>
        isDeleting
          ? current.slice(0, -1)
          : currentPhrase.slice(0, current.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    isReducedMotion,
    phraseIndex,
    phrases,
  ]);

  return { displayedText, isReducedMotion };
}

function Hero() {
  const { displayedText, isReducedMotion } =
    useTypingAnimation(typingPhrases);

  const handleVisualPointerMove = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    if (isReducedMotion || event.pointerType === 'touch') {
      return;
    }

    const frame = event.currentTarget;
    const bounds = frame.getBoundingClientRect();

    if (!bounds.width || !bounds.height) return;

    const pointerX = (event.clientX - bounds.left) / bounds.width;
    const pointerY = (event.clientY - bounds.top) / bounds.height;

    const rotateY = (pointerX - 0.5) * 8;
    const rotateX = (0.5 - pointerY) * 6;

    frame.style.setProperty(
      '--hero-tilt-x',
      `${rotateX.toFixed(2)}deg`,
    );

    frame.style.setProperty(
      '--hero-tilt-y',
      `${rotateY.toFixed(2)}deg`,
    );
  };

  const resetVisualTilt = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    event.currentTarget.style.setProperty(
      '--hero-tilt-x',
      '0deg',
    );

    event.currentTarget.style.setProperty(
      '--hero-tilt-y',
      '0deg',
    );
  };

  return (
    <Section spacing="lg" className="hero-section">
      <Container>
        <div className="hero">
          <div className="hero__content">
            <div className="hero__eyebrow hero__motion-item">
              <span
                className="hero__eyebrow-line"
                aria-hidden="true"
              />
              <span>FULL STACK WEB DEVELOPER</span>
            </div>

            <h1 className="hero__title hero__motion-item">
              <span className="hero__title-static">
                Building
              </span>

              <span className="hero__title-accent">
                <span
                  className="hero__typing-text"
                  aria-hidden="true"
                >
                  {displayedText}
                </span>

                {!isReducedMotion && (
                  <span
                    className="hero__typing-cursor"
                    aria-hidden="true"
                  />
                )}
              </span>

              <span className="hero__visually-hidden">
                Building web experiences and digital products.
              </span>
            </h1>

            <p className="hero__description hero__motion-item">
              Hi, I'm Roknuzzaman Shawon. I build modern,
              responsive, and user-focused web applications,
              combining thoughtful frontend experiences with
              reliable backend functionality.
            </p>

            <div className="hero__actions hero__motion-item">
              <Link
                to="/projects"
                className="hero__button hero__button--primary"
              >
                <span>Explore My Work</span>
                <span
                  className="hero__button-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>

              <Link
                to="/contact"
                className="hero__button hero__button--secondary"
              >
                Get in Touch
                <span
                  className="hero__button-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>

            <div className="hero__technologies hero__motion-item">
              <span className="hero__technologies-label">
                WORKING WITH
              </span>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div
              className="hero__visual-frame"
              onPointerMove={handleVisualPointerMove}
              onPointerLeave={resetVisualTilt}
              onPointerCancel={resetVisualTilt}
            >
              <div className="hero__visual-topline">
                <span>CREATIVE DEVELOPMENT</span>
                <span>01 / 05</span>
              </div>

              <div className="hero__visual-art">
                <div className="hero__art-orbit hero__art-orbit--outer" />
                <div className="hero__art-orbit hero__art-orbit--inner" />

                <div className="hero__art-circle">
                  <span className="hero__art-initial">
                    S.
                  </span>
                </div>

                <span className="hero__art-coordinate hero__art-coordinate--top">
                  23° 42' N
                </span>

                <span className="hero__art-coordinate hero__art-coordinate--bottom">
                  90° 21' E
                </span>

                <span className="hero__art-marker hero__art-marker--one" />
                <span className="hero__art-marker hero__art-marker--two" />
                <span className="hero__art-marker hero__art-marker--three" />
              </div>

              <div className="hero__visual-caption">
                <span>DESIGNED WITH INTENTION.</span>
                <span>BUILT WITH PURPOSE.</span>
              </div>
            </div>

            <div className="hero__visual-index">
              <span>RS</span>
              <span>PORTFOLIO / 2026</span>
            </div>
          </div>
        </div>

        <TechnologyMarquee />
      </Container>
    </Section>
  );
}

export default Hero;