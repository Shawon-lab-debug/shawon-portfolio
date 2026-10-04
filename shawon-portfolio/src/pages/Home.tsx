import { Hero } from '../components/sections/Hero';
import { AboutPreview } from '../components/sections/AboutPreview';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import TechnicalExpertise from '../components/sections/TechnicalExpertise/TechnicalExpertise';
import CertificationPreview from '../components/sections/CertificationPreview/CertificationPreview';
import FinalCTA from '../components/sections/FinalCTA/FinalCTA';

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <TechnicalExpertise />
      <CertificationPreview />
      <FinalCTA />
    </>
  );
}

export default Home;