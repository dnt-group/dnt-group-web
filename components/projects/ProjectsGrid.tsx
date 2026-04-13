"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { getProjects } from "@/lib/sanity/project";
import ProjectCard from "./ProjectCard";

type Filter = "all" | "ongoing" | "completed";

type Project = Awaited<ReturnType<typeof getProjects>>[number];

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const t = useTranslations("projects");
  const [active, setActive] = useState<Filter>("all");

  const filters: { value: Filter; labelKey: string }[] = [
    { value: "all", labelKey: "filters.all" },
    { value: "ongoing", labelKey: "filters.ongoing" },
    { value: "completed", labelKey: "filters.completed" },
  ];

  const filtered = projects.filter((p) =>
    active === "all" ? true : p.status === active
  );

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                active === f.value
                  ? "bg-primary text-white"
                  : "bg-white border border-slate-200 text-slate-500 hover:border-primary hover:text-primary"
              }`}
            >
              {t(f.labelKey)}
              <span
                className={`ml-2 text-xs ${
                  active === f.value ? "text-white/60" : "text-slate-300"
                }`}
              >
                {f.value === "all"
                  ? projects.length
                  : projects.filter((p) => p.status === f.value).length}
              </span>
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 text-slate-400 text-sm">
            {t("empty")}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
