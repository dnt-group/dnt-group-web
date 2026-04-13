import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { getProjectBySlug } from "@/lib/sanity/project";
import ProjectDetailHeader from "@/components/projects/detail/ProjectDetailHeader";
import ProjectDetailGallery from "@/components/projects/detail/ProjectDetailGallery";
import ProjectDetailAbout from "@/components/projects/detail/ProjectDetailAbout";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const project = await getProjectBySlug(locale, slug);
  if (!project) notFound();

  return (
    <>
      <ProjectDetailHeader project={project} />
      <ProjectDetailGallery project={project} />
      <ProjectDetailAbout project={project} />
    </>
  );
}