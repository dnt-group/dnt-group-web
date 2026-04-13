import type { ProjectDetail } from "@/lib/sanity/project";

export default function ProjectDetailAbout({ project }: { project: ProjectDetail }) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 sticky top-28">
              About the Project
            </p>
          </div>

          <div className="lg:col-span-9">
            <div className="w-8 h-0.5 bg-secondary mb-6" />
            <p className="text-base text-slate-500 leading-relaxed">{project.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
