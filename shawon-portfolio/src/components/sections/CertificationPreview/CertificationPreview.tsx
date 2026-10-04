
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './CertificationPreview.css';

const shouldShowImmediately = () =>
  typeof window === 'undefined' ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
  !('IntersectionObserver' in window);

function CertificationPreview() {
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
      className={`certification-preview${isVisible ? ' certification-preview--visible' : ''}`}
      aria-labelledby="certification-preview-title"
    >
      <div className="certification-preview__container">
        <div className="certification-preview__top">
          <span className="certification-preview__eyebrow">
            <span
              className="certification-preview__eyebrow-line"
              aria-hidden="true"
            />
            LEARNING & RECOGNITION
          </span>

          <span className="certification-preview__index">
            05 / 07
          </span>
        </div>

        <div className="certification-preview__content">
          <div className="certification-preview__heading">
            <h2
              className="certification-preview__title"
              id="certification-preview-title"
            >
              Learning never
              <span className="certification-preview__title-accent">
                stops.
              </span>
            </h2>
          </div>

          <div className="certification-preview__details">
            <p className="certification-preview__description">
              I believe that meaningful growth comes from curiosity,
              consistent learning, and putting knowledge into practice.
              Every new concept is an opportunity to improve the way
              I think, build, and solve problems.
            </p>

            <p className="certification-preview__note">
              Explore my learning journey, certifications, and
              professional development.
            </p>

            <Link
              to="/certifications"
              className="certification-preview__link"
            >
              <span>View All Certifications</span>
              <span
                className="certification-preview__link-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          </div>
        </div>

        <div className="certification-preview__bottom">
          <span>CURIOUS BY NATURE.</span>
          <span>COMMITTED TO GROWTH.</span>
        </div>
      </div>
    </section>
  );
}

export default CertificationPreview;
