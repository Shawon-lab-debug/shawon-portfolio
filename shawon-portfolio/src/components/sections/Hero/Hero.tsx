
import { Link } from 'react-router-dom';
import { Container, Section } from '../../ui';
import './Hero.css';

const technologies = [
  'React',
  'TypeScript',
  'Node.js',
  'Express.js',
  'MongoDB',
];

function Hero() {
  return (
    <Section spacing="lg" className="hero-section">
      <Container>
        <div className="hero">
          <div className="hero__content">
            <div className="hero__eyebrow">
              <span className="hero__eyebrow-line" aria-hidden="true" />
              <span>FULL STACK WEB DEVELOPER</span>
            </div>

            <h1 className="hero__title">
              Building thoughtful
              <span className="hero__title-accent">
                digital experiences.
              </span>
            </h1>

            <p className="hero__description">
              Hi, I'm Roknuzzaman Shawon. I build modern, responsive,
              and user-focused web applications, combining thoughtful
              frontend experiences with reliable backend functionality.
            </p>

            <div className="hero__actions">
              <Link
                to="/projects"
                className="hero__button hero__button--primary"
              >
                <span>Explore My Work</span>
                <span className="hero__button-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>

              <Link
                to="/contact"
                className="hero__button hero__button--secondary"
              >
                Get in Touch
                <span className="hero__button-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

            <div className="hero__technologies">
              <span className="hero__technologies-label">
                WORKING WITH
              </span>

              <ul className="hero__technology-list">
                {technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="hero__visual"
            aria-hidden="true"
          >
            <div className="hero__visual-frame">
              <div className="hero__visual-topline">
                <span>CREATIVE DEVELOPMENT</span>
                <span>01 / 05</span>
              </div>

              <div className="hero__visual-art">
                <div className="hero__art-orbit hero__art-orbit--outer" />
                <div className="hero__art-orbit hero__art-orbit--inner" />

                <div className="hero__art-circle">
                  <span className="hero__art-initial">S.</span>
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
      </Container>
    </Section>
  );
}

export default Hero;
