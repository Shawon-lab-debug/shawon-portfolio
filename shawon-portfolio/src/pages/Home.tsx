import { Hero } from '../components/sections/Hero';
import { AboutPreview } from '../components/sections/AboutPreview';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
    </>
  );
}

export default Home;