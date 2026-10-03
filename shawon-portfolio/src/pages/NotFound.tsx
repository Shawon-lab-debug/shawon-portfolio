import { Link } from 'react-router-dom';
import { Container, Section } from '../components';

function NotFound() {
  return (
    <Section spacing="lg">
      <Container>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Return to Home</Link>
      </Container>
    </Section>
  );
}

export default NotFound;