import { Link } from 'react-router-dom';
import './FinalCTA.css';

function FinalCTA() {
  return (
    <section
      className="final-cta"
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