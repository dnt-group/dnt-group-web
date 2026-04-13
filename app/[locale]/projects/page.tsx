import { getLocale } from "next-intl/server";
import { getProjects } from "@/lib/sanity/project";

import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export default async function ProjectsPage() {
  const locale = await getLocale();
  const projects = await getProjects(locale);

  return (
    <>
      <ProjectsHero />
      <ProjectsGrid projects={projects} />
      <ProjectsCTA />
    </>
  );
}
