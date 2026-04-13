import ContactCTA from "@/components/contact/ContactCTA";
import AboutPreview from "@/components/about/AboutPreview";
import ProjectsPreview from "@/components/projects/ProjectsPreview";
import HeroSection from "@/components/about/HeroSection";
import Statistics from "@/components/about/Statistics";
import ServicesPreview from "@/components/services/ServicesPreview";
import { getLocale } from "next-intl/server";
import { getAboutPageData } from "@/lib/sanity/about";

export default async function Home() {
  const locale = await getLocale();
  const { stats } = await getAboutPageData(locale);

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <Statistics statValues={stats} />
      <ServicesPreview />
      <ProjectsPreview />
      <ContactCTA />
    </>
  );
}
