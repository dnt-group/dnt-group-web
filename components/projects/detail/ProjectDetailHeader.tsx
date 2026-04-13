import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { ProjectDetail } from "@/lib/sanity/project";

export default async function ProjectDetailHeader({ project }: { project: ProjectDetail }) {
  const t = await getTranslations("projects.detail");
  const tStatus = await getTranslations("projects.status");

  return (
    <section className="bg-white border-b border-slate-100 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-primary transition-colors duration-200 mb-10 group"
        >
          <svg
            className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t("allProjects")}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-tertiary border border-tertiary/30 bg-tertiary/5 px-3 py-1 rounded-full">
                {project.type}
              </span>
              <span
                className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                  project.status === "ongoing"
                    ? "bg-blue-50 text-blue-600 border border-blue-100"
                    : "bg-green-50 text-green-600 border border-green-100"
                }`}
              >
                {tStatus(project.status)}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.1]">
              {project.title}
            </h1>
          </div>

          <div className="space-y-6 lg:pb-2">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <svg className="w-4 h-4 text-slate-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {project.location}
              </div>

              {project.year ? (
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-slate-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {project.year}
                </div>
              ) : null}
            </div>

            {project.services.length > 0 ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                  {t("servicesProvided")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <Link
                      key={service}
                      href="/services"
                      className="text-xs font-semibold text-secondary border border-secondary/30 bg-secondary/5 px-3 py-1.5 rounded-full hover:bg-secondary hover:text-white transition-colors duration-200"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
