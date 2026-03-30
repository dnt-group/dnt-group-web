import ContactCTA from "./components/contact/ContactCTA";
import AboutPreview from "./components/about/AboutPreview";
import FeatureProjects from "./components/projects/FeatureProjects";
import HeroSection from "./components/about/HeroSection";
import Statistics from "./components/about/Statistics";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <Statistics />
      <FeatureProjects />
      <ContactCTA />
    </>
  );
}
