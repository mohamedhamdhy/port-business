import Hero from './hero/page';
import ResultsSection from './results/resultSection';
import Services from './service/services';
import TestimonialsSection from './testimonials/testimonialSection';

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <ResultsSection />
      <TestimonialsSection />
    </div>
  );
};

export default page;
