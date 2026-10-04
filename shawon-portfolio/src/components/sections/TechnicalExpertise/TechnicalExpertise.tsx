
import { useEffect, useRef, useState } from 'react';
import {
  siBootstrap,
  siCplusplus,
  siCss,
  siExpress,
  siFigma,
  siFirebase,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMongodb,
  siMongoose,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  siVite,
} from 'simple-icons';

import type { SimpleIcon } from 'simple-icons';

import './TechnicalExpertise.css';

type Technology = {
  name: string;
  icon: SimpleIcon;
};

type ExpertiseGroup = {
  number: string;
  title: string;
  description: string;
  technologies: Technology[];
};

const expertiseGroups: ExpertiseGroup[] = [
  {
    number: '01',
    title: 'Frontend Development',
    description:
      'Creating responsive, accessible, and engaging user interfaces with modern frontend technologies.',
    technologies: [
      { name: 'HTML', icon: siHtml5 },
      { name: 'CSS', icon: siCss },
      { name: 'JavaScript', icon: siJavascript },
      { name: 'React', icon: siReact },
      { name: 'TypeScript', icon: siTypescript },
      { name: 'Next.js', icon: siNextdotjs },
      { name: 'Tailwind CSS', icon: siTailwindcss },
      { name: 'Bootstrap', icon: siBootstrap },
    ],
  },
  {
    number: '02',
    title: 'Backend Development',
    description:
      'Building server-side applications and APIs to support reliable web experiences.',
    technologies: [
      { name: 'Node.js', icon: siNodedotjs },
      { name: 'Express.js', icon: siExpress },
    ],
  },
  {
    number: '03',
    title: 'Database & Backend Services',
    description:
      'Working with databases and backend services to manage and organize application data.',
    technologies: [
      { name: 'MongoDB', icon: siMongodb },
      { name: 'Mongoose', icon: siMongoose },
      { name: 'PostgreSQL', icon: siPostgresql },
      { name: 'Firebase', icon: siFirebase },
    ],
  },
  {
    number: '04',
    title: 'Programming Languages',
    description:
      'Developing programming fundamentals and problem-solving skills across different languages.',
    technologies: [
      { name: 'Python', icon: siPython },
      { name: 'C++', icon: siCplusplus },
    ],
  },
  {
    number: '05',
    title: 'Tools & Design',
    description:
      'Using modern development tools and design software throughout the development workflow.',
    technologies: [
      { name: 'Git', icon: siGit },
      { name: 'GitHub', icon: siGithub },
      { name: 'Vite', icon: siVite },
      { name: 'Figma', icon: siFigma },
    ],
  },
];

const shouldShowImmediately = () =>
  typeof window === 'undefined' ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
  !('IntersectionObserver' in window);

function TechnicalExpertise() {
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
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`technical-expertise${isVisible ? ' technical-expertise--visible' : ''}`}
      aria-labelledby="technical-expertise-title"
    >
      <div className="technical-expertise__container">
        <div className="technical-expertise__header">
          <div className="technical-expertise__heading">
            <span className="technical-expertise__eyebrow">
              <span className="technical-expertise__eyebrow-line" />
              TECHNICAL EXPERTISE
            </span>

            <h2
              className="technical-expertise__title"
              id="technical-expertise-title"
            >
              Technologies I
              <span className="technical-expertise__title-accent">
                work with.
              </span>
            </h2>
          </div>

          <p className="technical-expertise__intro">
            A selection of languages, frameworks, and tools I use
            to explore ideas, solve problems, and build modern
            digital experiences.
          </p>
        </div>

        <div className="technical-expertise__list">
          {expertiseGroups.map((group, index) => (
            <article
              className="expertise-group"
              key={group.number}
              style={{
                '--expertise-index': index,
              } as React.CSSProperties}
            >
              <div
                className="expertise-group__number"
                aria-hidden="true"
              >
                {group.number}
              </div>

              <div className="expertise-group__details">
                <h3 className="expertise-group__title">
                  {group.title}
                </h3>

                <p className="expertise-group__description">
                  {group.description}
                </p>
              </div>

              <ul
                className="expertise-group__technologies"
                aria-label={`${group.title} technologies`}
              >
                {group.technologies.map((technology, technologyIndex) => (
                  <li
                    className="expertise-group__technology"
                    key={technology.name}
                    style={{
                      '--technology-index': technologyIndex,
                    } as React.CSSProperties}
                  >
                    <span
                      className="expertise-group__icon"
                      style={{
                        color: `#${technology.icon.hex}`,
                      }}
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        role="presentation"
                        focusable="false"
                      >
                        <path d={technology.icon.path} />
                      </svg>
                    </span>

                    <span className="expertise-group__technology-name">
                      {technology.name}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="technical-expertise__footer">
          <span
            className="technical-expertise__footer-mark"
            aria-hidden="true"
          >
            +
          </span>

          <p>
            Always learning, always building. My toolkit continues
            to grow with every project and new challenge.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalExpertise;
