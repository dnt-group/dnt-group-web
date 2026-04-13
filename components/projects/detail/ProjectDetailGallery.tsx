import type { ProjectDetail } from "@/lib/sanity/project";

export default function ProjectDetailGallery({ project }: { project: ProjectDetail }) {
  const [featured, ...rest] = project.images;

  return (
    <section className="bg-slate-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden aspect-[16/8] mb-3">
          <img src={featured} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {rest.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {rest.map((img, i) => (
              <div key={img} className="rounded-xl overflow-hidden aspect-square">
                <img
                  src={img}
                  alt={`${project.title} ${i + 2}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
