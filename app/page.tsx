import ContactCTA from "../components/contact/ContactCTA";
import AboutPreview from "../components/about/AboutPreview";
import ProjectsPreview from "../components/projects/ProjectsPreview";
import HeroSection from "../components/about/HeroSection";
import Statistics from "../components/about/Statistics";
import ServicesPreview from "../components/services/ServicesPreview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <Statistics />
      <ServicesPreview />
      <ProjectsPreview />
      <ContactCTA />
    </>
  );
}
