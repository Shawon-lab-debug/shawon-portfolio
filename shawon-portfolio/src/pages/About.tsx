import { useEffect, useState } from 'react';







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







import { Container, Section, TextScramble } from '../components';







import './About.css';







type Technology = {



  name: string;



  icon: SimpleIcon;



};







const heroTechnologies: Technology[] = [



  {



    name: 'React',



    icon: siReact,



  },



  {



    name: 'TypeScript',



    icon: siTypescript,



  },



  {



    name: 'Node.js',



    icon: siNodedotjs,



  },



  {



    name: 'MongoDB',



    icon: siMongodb,



  },



];







const rotatingHeroPhrases = [



  'modern web.',



  'web apps.',



  'digital UI.',



  'clean UX.',



  'fast web.',



];







const technologyGroups = [



  {



    number: '01',



    title: 'Frontend',



    description:



      'Building responsive interfaces and interactive experiences for the modern web.',



    technologies: [



      {



        name: 'HTML5',



        icon: siHtml5,



      },



      {



        name: 'CSS3',



        icon: siCss,



      },



      {



        name: 'JavaScript',



        icon: siJavascript,



      },



      {



        name: 'TypeScript',



        icon: siTypescript,



      },



      {



        name: 'React',



        icon: siReact,



      },



      {



        name: 'Next.js',



        icon: siNextdotjs,



      },



      {



        name: 'Tailwind CSS',



        icon: siTailwindcss,



      },



      {



        name: 'Bootstrap',



        icon: siBootstrap,



      },



    ],



  },



  {



    number: '02',



    title: 'Backend',



    description:



      'Creating server-side logic and API foundations that connect applications together.',



    technologies: [



      {



        name: 'Node.js',



        icon: siNodedotjs,



      },



      {



        name: 'Express.js',



        icon: siExpress,



      },



    ],



  },



  {



    number: '03',



    title: 'Database',



    description:



      'Working with structured and document-based data across modern application stacks.',



    technologies: [



      {



        name: 'MongoDB',



        icon: siMongodb,



      },



      {



        name: 'PostgreSQL',



        icon: siPostgresql,



      },



      {



        name: 'Firebase',



        icon: siFirebase,



      },



    ],



  },



  {



    number: '04',



    title: 'Languages & Tools',



    description:



      'Using development tools and programming languages to support the complete workflow.',



    technologies: [



      {



        name: 'Python',



        icon: siPython,



      },



      {



        name: 'C++',



        icon: siCplusplus,



      },



      {



        name: 'Git',



        icon: siGit,



      },



      {



        name: 'GitHub',



        icon: siGithub,



      },



      {



        name: 'Vite',



        icon: siVite,



      },



      {



        name: 'Figma',



        icon: siFigma,



      },



    ],



  },



];







const buildStages = [



  {



    number: '01',



    label: 'PLAN',



    title: 'Understand the problem',



    description:



      'Start by understanding the goal, the user experience, and the structure the application needs.',



  },



  {



    number: '02',



    label: 'BUILD',



    title: 'Create the interface',



    description:



      'Turn ideas into responsive interfaces with reusable components and a clear visual hierarchy.',



  },



  {



    number: '03',



    label: 'CONNECT',



    title: 'Bring the layers together',



    description:



      'Connect the frontend with APIs, backend logic, databases, and the data an application needs.',



  },



  {



    number: '04',



    label: 'REFINE',



    title: 'Improve the experience',



    description:



      'Review the result, solve problems, refine interactions, and keep improving the implementation.',



  },



];







const focusAreas = [



  {



    number: '01',



    title: 'Frontend Experiences',



    icon: '01',



    description:



      'Responsive interfaces, reusable components, thoughtful layouts, and interactions designed around the user.',



  },



  {



    number: '02',



    title: 'Backend & APIs',



    icon: '02',



    description:



      'Server-side logic and API foundations that allow different parts of a web application to communicate.',



  },



  {



    number: '03',



    title: 'Data & Persistence',



    icon: '03',



    description:



      'Structured application data, database interactions, and the foundations needed to manage information.',



  },



  {



    number: '04',



    title: 'Full Stack Integration',



    icon: '04',



    description:



      'Bringing frontend, backend, APIs, and databases together into one cohesive web application.',



  },



];







const principles = [



  'Keep interfaces clear and purposeful',



  'Build reusable and maintainable components',



  'Understand how the full application works',



  'Learn through practical implementation',



  'Improve the experience through iteration',



];







function TechnologyIcon({



  technology,



  size = 'medium',



}: {



  technology: Technology;



  size?: 'small' | 'medium' | 'large';



}) {



  return (



    <span



      className={`technology-icon technology-icon--${size}`}



      aria-hidden="true"



      dangerouslySetInnerHTML={{ __html: technology.icon.svg }}



    />



  );



}







function FullStackVisual() {



  return (



    <div className="full-stack-visual">



      <div className="full-stack-visual__grid" />







      <div className="full-stack-visual__top">



        <span>FULL STACK SYSTEM</span>



        <span>01 — 04</span>



      </div>







      <div className="full-stack-visual__architecture">



        <div className="architecture-column architecture-column--client">



          <span className="architecture-label">CLIENT</span>







          <div className="architecture-card">



            <div className="architecture-card__icon">



              <TechnologyIcon



                technology={heroTechnologies[0]}



                size="medium"



              />



            </div>







            <div>



              <span>FRONTEND</span>



              <strong>Interface</strong>



            </div>



          </div>







          <div className="architecture-card architecture-card--secondary">



            <div className="architecture-card__icon">



              <TechnologyIcon



                technology={{



                  name: 'TypeScript',



                  icon: siTypescript,



                }}



                size="small"



              />



            </div>







            <div>



              <span>LANGUAGE</span>



              <strong>Type-safe UI</strong>



            </div>



          </div>



        </div>







        <div className="architecture-flow">



          <span className="architecture-flow__line" />



          <span className="architecture-flow__packet" />



          <span className="architecture-flow__label">REQUEST</span>



        </div>







        <div className="architecture-column architecture-column--server">



          <span className="architecture-label">SERVER</span>







          <div className="architecture-card">



            <div className="architecture-card__icon">



              <TechnologyIcon



                technology={{



                  name: 'Node.js',



                  icon: siNodedotjs,



                }}



                size="medium"



              />



            </div>







            <div>



              <span>BACKEND</span>



              <strong>Logic & APIs</strong>



            </div>



          </div>







          <div className="architecture-card architecture-card--secondary">



            <div className="architecture-card__icon">



              <TechnologyIcon



                technology={{



                  name: 'Express.js',



                  icon: siExpress,



                }}



                size="small"



              />



            </div>







            <div>



              <span>API LAYER</span>



              <strong>REST services</strong>



            </div>



          </div>



        </div>







        <div className="architecture-flow">



          <span className="architecture-flow__line" />



          <span className="architecture-flow__packet" />



          <span className="architecture-flow__label">QUERY</span>



        </div>







        <div className="architecture-column architecture-column--data">



          <span className="architecture-label">DATA</span>







          <div className="architecture-card">



            <div className="architecture-card__icon">



              <TechnologyIcon



                technology={{



                  name: 'MongoDB',



                  icon: siMongodb,



                }}



                size="medium"



              />



            </div>







            <div>



              <span>DATABASE</span>



              <strong>Application data</strong>



            </div>



          </div>







          <div className="architecture-card architecture-card--secondary">



            <div className="architecture-card__icon">



              <TechnologyIcon



                technology={{



                  name: 'PostgreSQL',



                  icon: siPostgresql,



                }}



                size="small"



              />



            </div>







            <div>



              <span>DATA MODEL</span>



              <strong>Structured data</strong>



            </div>



          </div>



        </div>



      </div>







      <div className="full-stack-visual__bottom">



        <span>UI</span>



        <span>API</span>



        <span>DATABASE</span>



        <span>INTEGRATION</span>



      </div>



    </div>



  );



}







function AboutHeroTitle() {



  const [scrambleComplete, setScrambleComplete] = useState(false);



  const [phraseIndex, setPhraseIndex] = useState(0);



  const [phraseVisible, setPhraseVisible] = useState(true);



  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);







  useEffect(() => {



    const mediaQuery = window.matchMedia(



      '(prefers-reduced-motion: reduce)',



    );







    const updatePreference = () => {



      setPrefersReducedMotion(mediaQuery.matches);



    };







    updatePreference();

    mediaQuery.addEventListener('change', updatePreference);







    return () => {



      mediaQuery.removeEventListener('change', updatePreference);



    };



  }, []);







  useEffect(() => {



    const scrambleTimer = window.setTimeout(



      () => {



        setScrambleComplete(true);



      },



      prefersReducedMotion ? 0 : 1500,



    );







    return () => {



      window.clearTimeout(scrambleTimer);



    };



  }, [prefersReducedMotion]);







  useEffect(() => {



    if (!scrambleComplete || prefersReducedMotion) {



      return;



    }







    let phraseTimeout: number | null = null;



    const rotationTimer = window.setInterval(() => {



      setPhraseVisible(false);







      phraseTimeout = window.setTimeout(() => {



        setPhraseIndex((currentIndex) =>



          (currentIndex + 1) % rotatingHeroPhrases.length,



        );



        setPhraseVisible(true);



      }, 320);



    }, 3200);







    return () => {



      window.clearInterval(rotationTimer);







      if (phraseTimeout !== null) {



        window.clearTimeout(phraseTimeout);



      }



    };



  }, [prefersReducedMotion, scrambleComplete]);







  return (



    <h1 className="about-hero__title">



      <span



        className={`about-hero__title-scramble ${scrambleComplete



          ? 'about-hero__title-scramble--hidden'



          : ''



          }`}



        aria-hidden={scrambleComplete}



      >



        <TextScramble

          text="I build for the modern web."

          duration={prefersReducedMotion ? 0 : 1400}

        />



      </span>







      <span



        className={`about-hero__title-rotation-layer ${scrambleComplete



          ? 'about-hero__title-rotation-layer--active'



          : ''



          }`}



        aria-hidden={!scrambleComplete}



      >



        <span className="about-hero__title-static">



          I build for the



        </span>



        <span className="about-hero__title-accent">



          <span



            className={`about-hero__title-rotating ${phraseVisible



              ? 'about-hero__title-rotating--visible'



              : 'about-hero__title-rotating--hidden'



              }`}



          >



            {rotatingHeroPhrases[phraseIndex]}



          </span>



        </span>



      </span>



    </h1>



  );

}







function About() {



  const handleScrollToExplore = () => {



    document



      .getElementById('about-introduction')



      ?.scrollIntoView({



        behavior: 'smooth',



        block: 'start',



      });



  };







  return (



    <Section spacing="lg" className="about-page">



      <Container>



        <div className="about-page__content">



          <header className="about-hero">



            <div className="about-hero__top">



              <span className="about-hero__eyebrow">



                <span className="about-hero__line" />



                ABOUT ME



              </span>







              <span className="about-hero__index">01 / 07</span>



            </div>







            <div className="about-hero__main">



              <div className="about-hero__copy">



                <span className="about-hero__role">



                  FULL STACK WEB DEVELOPER



                </span>







                <AboutHeroTitle />







                <p className="about-hero__intro">

                  I build modern web applications by combining thoughtful

                  interfaces, reliable backend logic, well-structured APIs,

                  and data-driven foundations. My focus is on creating

                  responsive, intuitive, and maintainable digital experiences

                  where clean design, solid engineering, and smooth

                  interactions work together seamlessly. I care about

                  writing clear, scalable code and building products that

                  are not only visually engaging, but also practical and

                  enjoyable to use across different devices.

                </p>



                <div className="about-hero__technologies">



                  {heroTechnologies.map((technology) => (



                    <div



                      className="hero-technology"



                      key={technology.name}



                    >



                      <TechnologyIcon



                        technology={technology}



                        size="small"



                      />







                      <span>{technology.name}</span>



                    </div>



                  ))}



                </div>



              </div>







              <FullStackVisual />



            </div>







            <div className="about-hero__scroll">



              <span className="about-hero__scroll-label">



                SCROLL TO EXPLORE



              </span>







              <button



                type="button"



                className="about-hero__scroll-button"



                onClick={handleScrollToExplore}



                aria-label="Scroll to explore the About page"



              >



                <span



                  className="about-hero__scroll-arrow"



                  aria-hidden="true"



                >



                  ↓



                </span>



              </button>



            </div>



          </header>


          <section
            id="about-introduction"
            className="about-introduction"
            aria-labelledby="about-introduction-title"
            style={{ scrollMarginTop: '96px' }}
          >
            <div className="about-introduction__topline">
              <div className="about-section-meta">
                <span>02</span>
                <span>WHO I AM</span>
              </div>
              <span className="about-introduction__topline-label">THE DEVELOPER</span>
              <span className="about-introduction__topline-status">FULL STACK / WEB DEVELOPMENT</span>
            </div>

            <div className="about-introduction__hero">
              <div className="about-introduction__statement">
                <span className="about-introduction__statement-kicker">PERSONAL APPROACH</span>
                <h2 id="about-introduction-title">
                  Curious by nature.
                  <span>Driven by building.</span>
                </h2>
                <p className="about-introduction__lead">
                  I like understanding how things work, then turning that understanding into useful digital experiences.
                </p>
              </div>

              <figure className="about-introduction__visual">
                <img
                  src="https://images.unsplash.com/photo-1754039985001-ccafee437736?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1800"
                  alt="Modern developer workspace with a laptop displaying source code"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <span>THE CRAFT</span>
                  <span>PHOTO / JAKUB ŻERDZICKI · UNSPLASH</span>
                </figcaption>
              </figure>
            </div>

            <div className="about-introduction__approach">
              <div className="about-introduction__approach-header">
                <span>THE WAY I WORK</span>
                <span>03 PRINCIPLES</span>
              </div>

              <div className="about-introduction__principles">
                <article className="about-introduction__principle">
                  <span className="about-introduction__principle-number">01</span>
                  <div>
                    <h3>Curious</h3>
                    <p>Ask why, understand the details, and keep exploring how things work.</p>
                  </div>
                  <span className="about-introduction__principle-mark" aria-hidden="true">↗</span>
                </article>

                <article className="about-introduction__principle">
                  <span className="about-introduction__principle-number">02</span>
                  <div>
                    <h3>Practical</h3>
                    <p>Learn through building real interfaces, features, and complete applications.</p>
                  </div>
                  <span className="about-introduction__principle-mark" aria-hidden="true">↗</span>
                </article>

                <article className="about-introduction__principle">
                  <span className="about-introduction__principle-number">03</span>
                  <div>
                    <h3>Iterative</h3>
                    <p>Build, review, refine, and improve the result through continuous practice.</p>
                  </div>
                  <span className="about-introduction__principle-mark" aria-hidden="true">↗</span>
                </article>
              </div>
            </div>

            <div className="about-introduction__story-block">
              <div className="about-introduction__story">
                <span className="about-introduction__story-label">THE JOURNEY</span>
                <p>
                  I enjoy understanding how things work and turning ideas into functional digital experiences. Web development gives me a place where creativity, logic, and problem solving come together.
                </p>
              </div>

              <div className="about-introduction__story">
                <span className="about-introduction__story-label">THE PRACTICE</span>
                <p>
                  My development journey is centered around learning through practical work. Building applications helps me understand not only individual technologies, but also how the different layers of a web application connect.
                </p>
              </div>

              <div className="about-introduction__signature" aria-label="Personal approach">
                <div><span>01</span><strong>BUILD</strong></div>
                <div><span>02</span><strong>LEARN</strong></div>
                <div><span>03</span><strong>IMPROVE</strong></div>
              </div>
            </div>
          </section>

          <section



            className="about-focus"



            aria-labelledby="about-focus-title"



          >



            <div className="about-focus__heading">



              <div>



                <div className="about-section-meta">



                  <span>03</span>



                  <span>WHAT I BUILD</span>



                </div>







                <span className="section-label">FULL STACK FOCUS</span>







                <h2 id="about-focus-title">



                  From interface



                  <span>to data.</span>



                </h2>



              </div>







              <p>



                My focus covers the major layers that come together to



                create a modern full stack web application.



              </p>



            </div>







            <div className="about-focus__grid">



              {focusAreas.map((area) => (



                <article className="focus-card" key={area.number}>



                  <div className="focus-card__top">



                    <span>{area.number}</span>







                    <span



                      className="focus-card__symbol"



                      aria-hidden="true"



                    >



                      ↗



                    </span>



                  </div>







                  <div className="focus-card__icon-box">



                    <span>{area.icon}</span>



                  </div>







                  <div className="focus-card__body">



                    <h3>{area.title}</h3>







                    <p>{area.description}</p>



                  </div>







                  <div className="focus-card__bottom">



                    <span>EXPLORE LAYER</span>



                    <span aria-hidden="true">→</span>



                  </div>



                </article>



              ))}



            </div>



          </section>







          <section



            className="about-build"



            aria-labelledby="about-build-title"



          >



            <div className="about-build__heading">



              <div className="about-section-meta">



                <span>04</span>



                <span>HOW I BUILD</span>



              </div>







              <div>



                <span className="section-label">



                  DEVELOPMENT FLOW



                </span>







                <h2 id="about-build-title">



                  From an idea



                  <span>to a working product.</span>



                </h2>



              </div>



            </div>







            <div className="build-flow">



              {buildStages.map((stage, index) => (



                <article className="build-stage" key={stage.number}>



                  <div className="build-stage__number">



                    {stage.number}



                  </div>







                  <span className="build-stage__label">



                    {stage.label}



                  </span>







                  <h3>{stage.title}</h3>







                  <p>{stage.description}</p>







                  {index < buildStages.length - 1 && (



                    <span



                      className="build-stage__connector"



                      aria-hidden="true"



                    >



                      →



                    </span>



                  )}



                </article>



              ))}



            </div>



          </section>







          <section



            className="about-stack"



            aria-labelledby="about-stack-title"



          >



            <div className="about-stack__heading">



              <div className="about-section-meta">



                <span>05</span>



                <span>TECHNOLOGY</span>



              </div>







              <div>



                <span className="section-label">



                  TECHNOLOGY ECOSYSTEM



                </span>







                <h2 id="about-stack-title">



                  The tools



                  <span>behind my work.</span>



                </h2>







                <p>



                  A growing collection of technologies I use to learn,



                  experiment, and build web applications.



                </p>



              </div>



            </div>







            <div className="technology-groups">



              {technologyGroups.map((group) => (



                <article



                  className="technology-group"



                  key={group.number}



                >



                  <div className="technology-group__header">



                    <span className="technology-group__number">



                      {group.number}



                    </span>







                    <div>



                      <h3>{group.title}</h3>



                      <p>{group.description}</p>



                    </div>



                  </div>







                  <div className="technology-group__items">



                    {group.technologies.map((technology) => (



                      <div



                        className="technology-item"



                        key={technology.name}



                      >



                        <TechnologyIcon



                          technology={technology}



                          size="medium"



                        />







                        <span>{technology.name}</span>







                        <span



                          className="technology-item__arrow"



                          aria-hidden="true"



                        >



                          ↗



                        </span>



                      </div>



                    ))}



                  </div>



                </article>



              ))}



            </div>



          </section>







          <section



            className="about-principles"



            aria-labelledby="about-principles-title"



          >



            <div className="about-principles__heading">



              <div className="about-section-meta">



                <span>06</span>



                <span>MY APPROACH</span>



              </div>







              <div>



                <span className="section-label">



                  DEVELOPMENT PRINCIPLES



                </span>







                <h2 id="about-principles-title">



                  How I think



                  <span>about development.</span>



                </h2>



              </div>



            </div>







            <div className="about-principles__list">



              {principles.map((principle, index) => (



                <div className="principle" key={principle}>



                  <span className="principle__number">



                    {String(index + 1).padStart(2, '0')}



                  </span>







                  <span className="principle__text">



                    {principle}



                  </span>







                  <span



                    className="principle__arrow"



                    aria-hidden="true"



                  >



                    ↗



                  </span>



                </div>



              ))}



            </div>



          </section>







          <section



            className="about-cta"



            aria-labelledby="about-cta-title"



          >



            <div className="about-cta__glow" />







            <div className="about-cta__meta">



              <span>07</span>



              <span>WHAT&apos;S NEXT?</span>



            </div>







            <div className="about-cta__content">



              <span className="section-label">



                LET&apos;S CONNECT



              </span>







              <h2 id="about-cta-title">



                Let&apos;s build something



                <span>worth exploring.</span>



              </h2>







              <p>



                Explore my projects to see what I have been building or



                get in touch if you would like to connect.



              </p>



            </div>







            <div className="about-cta__actions">



              <a



                className="about-button about-button--primary"



                href="/projects"



              >



                View Projects



                <span aria-hidden="true">↗</span>



              </a>







              <a



                className="about-button about-button--secondary"



                href="/contact"



              >



                Contact Me



                <span aria-hidden="true">→</span>



              </a>



            </div>



          </section>



        </div>



      </Container>



    </Section>



  );



}







export default About;