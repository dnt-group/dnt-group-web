import type { Metadata } from "next";
import { getMessages, getLocale } from "next-intl/server";
import { getProjects } from "@/lib/sanity/project";

import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  const meta = (messages.metadata as Record<string, Record<string, string>>)
    .projects;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
    },
  };
}

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
