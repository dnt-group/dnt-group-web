import type { Project } from "../../app/projects/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-300">
      <div className="overflow-hidden aspect-[4/3]">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-tertiary">
            {project.type}
          </span>
          <span
            className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
              project.status === "ongoing"
                ? "bg-blue-50 text-blue-600"
                : "bg-green-50 text-green-600"
            }`}
          >
            {project.status}
          </span>
        </div>

        <h3 className="font-bold text-slate-900 text-lg mb-1">
          {project.title}
        </h3>

        <p className="text-xs text-slate-400 mb-3 flex items-center gap-1">
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {project.location}
        </p>

        <p className="text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
          {project.desc}
        </p>
      </div>
    </div>
  );
}
