
import { Container, Section } from '../components';

function Projects() {
  return (
    <Section spacing="lg">
      <Container>
        <header>
          <p>SELECTED WORK</p>

          <h1>Projects built with purpose.</h1>

          <p>
            A growing collection of web applications and experiments
            that reflect my journey as a Full Stack Web Developer.
            Each project is an opportunity to learn, solve problems,
            and create useful digital experiences.
          </p>
        </header>

        <section aria-labelledby="fitlog-title">
          <p>01 — FEATURED PROJECT</p>

          <h2 id="fitlog-title">FitLog</h2>

          <p>Fitness & Productivity</p>

          <p>
            FitLog is a workout tracking application designed to help
            users discover exercises, save workouts for later, and
            organize their daily training plans through a
            user-friendly interface.
          </p>

          <h3>Key Features</h3>

          <ul>
            <li>Explore workouts and exercises through API integration.</li>
            <li>Save workouts for later.</li>
            <li>Organize a daily workout plan.</li>
            <li>Receive feedback through toast notifications.</li>
            <li>Prevent duplicate entries in the workout plan.</li>
            <li>Use the application across different screen sizes.</li>
          </ul>

          <h3>Technologies</h3>

          <ul>
            <li>React</li>
            <li>API Integration</li>
            <li>Responsive UI</li>
          </ul>
        </section>

        <section aria-labelledby="upcoming-projects-title">
          <h2 id="upcoming-projects-title">What's next?</h2>

          <p>
            More projects are currently in preparation. Their
            descriptions, screenshots, and technology stacks will
            be added as they become ready to share.
          </p>
        </section>
      </Container>
    </Section>
  );
}

export default Projects;
