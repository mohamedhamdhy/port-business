import AboutSection from './about/aboutSection';
import CaseStudiesSection from './case/caseStudiesSection';
import CertificationsSection from './certification/certification';
import ContactSection from './contact/contact';
import EducationSection from './education/education';
import ExperienceSection from './experience/experienceSection';
import FAQSection from './faq/faq';
import Hero from './hero/page';
import ProjectsSection from './projects/projects';
import ResultsSection from './results/resultSection';
import Services from './service/services';
import TechStackSection from './tech/tech';
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
      <ProjectsSection />
      <TestimonialsSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <TechStackSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default page;
