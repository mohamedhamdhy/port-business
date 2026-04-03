import Hero from './hero/page';
import ResultsSection from './results/resultSection';
import Services from './service/services';
import TestimonialsSection from './testimonials/testimonialSection';
import WorkingProcessSection from './working/workingProcessSection';

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <ResultsSection />
      <TestimonialsSection />
      <WorkingProcessSection />
    </div>
  );
};

export default page;
