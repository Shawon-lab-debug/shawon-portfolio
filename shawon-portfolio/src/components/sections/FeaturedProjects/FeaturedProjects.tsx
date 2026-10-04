
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProjects.css';

interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  status: string;
  image: string;
  imageAlt: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    number: '01',
    name: 'FitLog',
    category: 'Fitness & Productivity',
    description:
      'A workout tracking application that helps users explore exercises, save workouts for later, and organize their daily training plans. Built with a focus on a clear interface and a smooth user experience.',
    technologies: ['React', 'API Integration', 'Responsive UI'],
    status: 'Featured project',
    image:
      'https://www.codester.com/static/uploads/items/000/063/63386/preview/021.jpg',
    imageAlt: 'Fitness application interface preview for FitLog',
    featured: true,
  },
  {
    number: '02',
    name: 'Project Two',
    category: 'Web Application',
    description:
      'A new project is in preparation. Its purpose, features, and technology stack will be introduced once development is ready to share.',
    technologies: [],
    status: 'Coming soon',
    image:
      'https://cdn.dribbble.com/userupload/14532003/file/original-b5acb11e6a3d9fd0ae1694c5e81da44b.png?resize=1024x1024&vertical=center',
    imageAlt: 'Concept preview for a future web application',
    featured: false,
  },
  {
    number: '03',
    name: 'Project Three',
    category: 'Dashboard & Management',
    description:
      'Another project is planned for the portfolio. More details will be shared as the project takes shape.',
    technologies: [],
    status: 'Coming soon',
    image:
      'https://cdn.dribbble.com/userupload/46599513/file/d4ee5bff14248074bf85358255deb89a.png?resize=752x&vertical=center',
    imageAlt: 'Concept preview for a future dashboard project',
    featured: false,
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (
      reducedMotion ||
      !('IntersectionObserver' in window)
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(card);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      },
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  const handlePointerMove = (
    event: PointerEvent<HTMLElement>,
  ) => {
    if (event.pointerType === 'touch') return;

    const card = event.currentTarget;

    const canHover = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (!canHover || reducedMotion) return;

    const bounds = card.getBoundingClientRect();

    if (!bounds.width || !bounds.height) return;

    const pointerX =
      (event.clientX - bounds.left) / bounds.width;

    const pointerY =
      (event.clientY - bounds.top) / bounds.height;

    const rotateY = (pointerX - 0.5) * 3;
    const rotateX = (0.5 - pointerY) * 2;

    card.style.setProperty(
      '--project-tilt-x',
      `${rotateX.toFixed(2)}deg`,
    );

    card.style.setProperty(
      '--project-tilt-y',
      `${rotateY.toFixed(2)}deg`,
    );

    card.style.setProperty(
      '--project-pointer-x',
      `${(pointerX * 100).toFixed(2)}%`,
    );

    card.style.setProperty(
      '--project-pointer-y',
      `${(pointerY * 100).toFixed(2)}%`,
    );
  };

  const resetPointer = (
    event: PointerEvent<HTMLElement>,
  ) => {
    const card = event.currentTarget;

    card.style.setProperty('--project-tilt-x', '0deg');
    card.style.setProperty('--project-tilt-y', '0deg');
    card.style.setProperty('--project-pointer-x', '50%');
    card.style.setProperty('--project-pointer-y', '50%');
  };

  const cardStyle = {
    '--project-index': index,
  } as CSSProperties;

  return (
    <article
      ref={cardRef}
      className={[
        'project-card',
        project.featured ? 'project-card--featured' : '',
        isVisible ? 'project-card--visible' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={cardStyle}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      onPointerCancel={resetPointer}
    >
      <div className="project-card__inner">
        <div className="project-card__image-wrapper">
          <img
            className="project-card__image"
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
          />

          <span
            className={[
              'project-card__status',
              project.featured
                ? 'project-card__status--featured'
                : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {project.status}
          </span>

          <span
            className="project-card__image-overlay"
            aria-hidden="true"
          />
        </div>

        <div className="project-card__body">
          <div className="project-card__top">
            <span className="project-card__number">
              {project.number}
            </span>

            <span className="project-card__category">
              {project.category}
            </span>
          </div>

          <div className="project-card__content">
            <h3 className="project-card__title">
              {project.name}
            </h3>

            <p className="project-card__description">
              {project.description}
            </p>
          </div>

          <div className="project-card__footer">
            {project.technologies.length > 0 ? (
              <ul
                className="project-card__technologies"
                aria-label={`${project.name} technologies`}
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            ) : (
              <span className="project-card__placeholder">
                Details will be announced soon
              </span>
            )}

            {project.featured ? (
              <Link
                to="/projects"
                className="project-card__link"
                aria-label={`Explore ${project.name} project details`}
              >
                <span>Explore project</span>
                <span aria-hidden="true">↗</span>
              </Link>
            ) : (
              <span className="project-card__placeholder">
                In progress
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function FeaturedProjects() {
  return (
    <section
      className="featured-projects"
      aria-labelledby="featured-projects-title"
    >
      <div className="featured-projects__container">
        <div className="featured-projects__header">
          <div className="featured-projects__heading">
            <span className="featured-projects__eyebrow">
              <span
                className="featured-projects__eyebrow-line"
                aria-hidden="true"
              />
              SELECTED WORK
            </span>

            <h2
              className="featured-projects__title"
              id="featured-projects-title"
            >
              Things I've
              <span className="featured-projects__title-accent">
                been building.
              </span>
            </h2>
          </div>

          <p className="featured-projects__intro">
            A collection of projects that reflect my interest in
            thoughtful design, practical problem-solving, and
            building useful digital experiences.
          </p>
        </div>

        <div className="featured-projects__grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="featured-projects__bottom">
          <span className="featured-projects__note">
            More projects will be added as they are ready to share.
          </span>

          <Link
            to="/projects"
            className="featured-projects__all-link"
          >
            View all projects
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
