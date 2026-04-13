import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getProjects } from "@/lib/sanity/project";

export default async function ProjectsPreview() {
  const locale = await getLocale();
  const projects = await getProjects(locale);
  const previewProjects = projects.filter((project) => project.showInPreview).slice(0, 3);
  const t = await getTranslations("home.projects");

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-sm font-body font-semibold uppercase tracking-[0.2em] text-tertiary mb-4">
            {t("subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary">
            {t("title")}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {previewProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`} className="group block">
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full rounded-lg aspect-[3/2] object-cover group-hover:scale-105 shadow-md transition-transform duration-500"
                />
              </div>
              <div className="mt-4">
                <span className="text-xs uppercase tracking-wider text-tertiary font-semibold">
                  {project.type}
                </span>
                <h3 className="text-lg font-display font-semibold text-foreground mt-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 md:mt-16 flex items-center gap-6 justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary hover:text-tertiary transition-colors duration-300"
          >
            <span className="w-10 h-px bg-primary group-hover:w-16 group-hover:bg-tertiary transition-all duration-300 inline-block" />
            {t("viewAll")}
            <svg
              className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
