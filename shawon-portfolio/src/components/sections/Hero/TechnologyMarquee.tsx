import {
  siReact,
  siTypescript,
  siJavascript,
  siNodedotjs,
  siExpress,
  siMongodb,
  siHtml5,
  siCss,
  siGit,
  siGithub,
} from 'simple-icons';
import './TechnologyMarquee.css';

const technologies = [
  { name: 'React', icon: siReact },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'JavaScript', icon: siJavascript },
  { name: 'Node.js', icon: siNodedotjs },
  { name: 'Express.js', icon: siExpress },
  { name: 'MongoDB', icon: siMongodb },
  { name: 'HTML5', icon: siHtml5 },
  { name: 'CSS', icon: siCss },
  { name: 'Git', icon: siGit },
  { name: 'GitHub', icon: siGithub },
];

function TechnologyMarquee() {
  return (
    <div
      className="technology-marquee"
      aria-label="Technologies I work with"
    >
      <div className="technology-marquee__track">
        {[0, 1].map((group) => (
          <div
            className="technology-marquee__group"
            key={group}
            aria-hidden={group === 1}
          >
            {technologies.map(({ name, icon }) => (
              <div
                className="technology-marquee__item"
                key={name}
              >
                <svg
                  className="technology-marquee__icon"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label={group === 0 ? name : undefined}
                  aria-hidden={group === 1}
                  fill="currentColor"
                  style={{ color: `#${icon.hex}` }}
                >
                  <path d={icon.path} />
                </svg>

                <span>{name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnologyMarquee;