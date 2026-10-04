
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './FinalCTA.css';

const shouldShowImmediately = () =>
  typeof window === 'undefined' ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
  !('IntersectionObserver' in window);

function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(shouldShowImmediately);

  useEffect(() => {
    if (isVisible) return;

    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -40px 0px',
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`final-cta${isVisible ? ' final-cta--visible' : ''}`}
      aria-labelledby="final-cta-title"
    >
      <div className="final-cta__container">
        <div className="final-cta__top">
          <span className="final-cta__eyebrow">
            <span
              className="final-cta__eyebrow-line"
              aria-hidden="true"
            />
            WHAT'S NEXT?
          </span>

          <span className="final-cta__index">06 / 07</span>
        </div>

        <div className="final-cta__content">
          <h2 className="final-cta__title" id="final-cta-title">
            Have a project
            <span className="final-cta__title-accent">
              in mind?
            </span>
          </h2>

          <div className="final-cta__bottom">
            <p className="final-cta__description">
              Let's turn your ideas into something meaningful.
              Whether you have a project in mind or simply want
              to connect, I'd love to hear from you.
            </p>

            <div className="final-cta__actions">
              <Link
                to="/contact"
                className="final-cta__button final-cta__button--primary"
              >
                <span>Let's Talk</span>
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                to="/projects"
                className="final-cta__button final-cta__button--secondary"
              >
                <span>Explore My Work</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="final-cta__decoration" aria-hidden="true">
          <span className="final-cta__decoration-circle" />
          <span className="final-cta__decoration-circle" />
          <span className="final-cta__decoration-circle" />
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
