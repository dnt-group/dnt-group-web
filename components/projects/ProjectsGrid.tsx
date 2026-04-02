"use client";

import { useState } from "react";
import { projects, filters, type Filter } from "../../app/projects/data";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const [active, setActive] = useState<Filter>("all");

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
              {f.label}
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
            No projects found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
