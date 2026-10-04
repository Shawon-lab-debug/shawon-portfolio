
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutPreview.css';

const shouldShowImmediately = () =>
  typeof window === 'undefined' ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
  !('IntersectionObserver' in window);

function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(shouldShowImmediately);

  const principles = [
    'Clean and maintainable code',
    'Responsive user experiences',
    'Thoughtful problem-solving',
  ];

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
      className={`about-preview${isVisible ? ' about-preview--visible' : ''}`}
      aria-labelledby="about-preview-title"
    >
      <div className="about-preview__container">
        <div className="about-preview__intro">
          <span className="about-preview__eyebrow">
            <span className="about-preview__eyebrow-line" />
            A LITTLE ABOUT ME
          </span>

          <h2
            className="about-preview__title"
            id="about-preview-title"
          >
            Building with
            <span className="about-preview__title-accent">
              curiosity and purpose.
            </span>
          </h2>
        </div>

        <div className="about-preview__body">
          <div className="about-preview__text">
            <p className="about-preview__lead">
              I'm Roknuzzaman Shawon, a Full Stack Web Developer
              passionate about creating modern, responsive, and
              user-focused web applications.
            </p>

            <p className="about-preview__description">
              I enjoy working across the frontend and backend,
              turning ideas into meaningful digital experiences.
              My approach combines thoughtful design, clean code,
              and reliable functionality to build applications
              that are both useful and enjoyable to use.
            </p>

            <Link to="/about" className="about-preview__link">
              More About Me
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="about-preview__principles">
            <span className="about-preview__principles-label">
              WHAT I VALUE
            </span>

            <ul className="about-preview__principles-list">
              {principles.map((principle, index) => (
                <li key={principle}>
                  <span className="about-preview__principle-number">
                    0{index + 1}
                  </span>
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
