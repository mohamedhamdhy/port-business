import Hero from './hero/page';
import ResultsSection from './results/resultSection';
import Services from './service/services';

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <ResultsSection />
    </div>
  );
};

export default page;
