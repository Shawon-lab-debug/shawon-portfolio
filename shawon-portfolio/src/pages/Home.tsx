import { Hero } from '../components/sections/Hero';
import { AboutPreview } from '../components/sections/AboutPreview';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import TechnicalExpertise from '../components/sections/TechnicalExpertise/TechnicalExpertise';

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <TechnicalExpertise />
    </>
  );
}

export default Home;