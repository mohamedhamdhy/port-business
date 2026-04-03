import AboutSection from './about/aboutSection';
import CaseStudiesSection from './case/caseStudiesSection';
import Hero from './hero/page';
import ResultsSection from './results/resultSection';
import Services from './service/services';
import TestimonialsSection from './testimonials/testimonialSection';
import WorkingProcessSection from './working/workingProcessSection';

const page = () => {
  return (
    <div className='bg-[#0A0F2C]'>
      <Hero />
      <ResultsSection />
      <Services />
      <WorkingProcessSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <AboutSection />
    </div>
  );
};

export default page;
