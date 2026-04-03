import Link from "next/link";
import { notFound } from "next/navigation";

const projects = [
  {
    slug: "restaurant-taghi",
    title: "Restaurant TAGHI",
    location: "Tbilisi, Georgia",
    type: "Restaurant",
    status: "completed",
    year: "2023",
    desc: "A refined dining concept in the heart of Tbilisi, blending Georgian culinary traditions with modern hospitality standards.",
    services: [
      "Hotel Pre-Opening",
      "Outsourced Sales & Marketing",
      "Full Hotel Management",
    ],
    featuredImg: "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2F3Q6A7105-fZfUA7vFkYtszP1NqFrmpc19udXGL0.jpg&w=750&q=75",
    images: [
      "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2F3Q6A7105-fZfUA7vFkYtszP1NqFrmpc19udXGL0.jpg&w=750&q=75",
      "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2FDSC00156%2520%25D0%25BA%25D0%25BE%25D0%25BF%25D0%25B8%25D1%258F%2520copy-6NjvAfh0EnXbYLlHhCTVrgVScXzWZI.jpg&w=750&q=75",
      "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2FNK209674-Xi8iSitpSMDWrufTOs4qm6v2Opvddb.jpg&w=750&q=75",
      "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2F3Q6A7105-fZfUA7vFkYtszP1NqFrmpc19udXGL0.jpg&w=750&q=75",
      "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2FDSC00156%2520%25D0%25BA%25D0%25BE%25D0%25BF%25D0%25B8%25D1%258F%2520copy-6NjvAfh0EnXbYLlHhCTVrgVScXzWZI.jpg&w=750&q=75",
    ],
  },
  {
    slug: "makmani-boutique-hotel",
    title: "Makmani Boutique Hotel",
    location: "Tbilisi, Georgia",
    type: "Hotel",
    status: "completed",
    year: "2022",
    desc: "A boutique property in Old Tbilisi offering an intimate guest experience rooted in local culture and design.",
    services: [
      "Hotel Development & Planning",
      "Hotel Pre-Opening",
      "Revenue Management",
      "Full Hotel Management",
    ],
    featuredImg: "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2FDSC00156%2520%25D0%25BA%25D0%25BE%25D0%25BF%25D0%25B8%25D1%258F%2520copy-6NjvAfh0EnXbYLlHhCTVrgVScXzWZI.jpg&w=750&q=75",
    images: [
      "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2FDSC00156%2520%25D0%25BA%25D0%25BE%25D0%25BF%25D0%25B8%25D1%258F%2520copy-6NjvAfh0EnXbYLlHhCTVrgVScXzWZI.jpg&w=750&q=75",
      "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2F3Q6A7105-fZfUA7vFkYtszP1NqFrmpc19udXGL0.jpg&w=750&q=75",
      "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2FNK209674-Xi8iSitpSMDWrufTOs4qm6v2Opvddb.jpg&w=750&q=75",
      "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2FDSC00156%2520%25D0%25BA%25D0%25BE%25D0%25BF%25D0%25B8%25D1%258F%2520copy-6NjvAfh0EnXbYLlHhCTVrgVScXzWZI.jpg&w=750&q=75",
    ],
  },
  {
    slug: "hotel-memoir-kazbegi",
    title: "Hotel Memoir Kazbegi",
    location: "Kazbegi, Georgia",
    type: "Hotel",
    status: "ongoing",
    year: "2024",
    desc: "A mountain retreat in Kazbegi positioned to capture the growing demand for premium nature-based tourism in Georgia.",
    services: [
      "Hotel Development & Planning",
      "Hotel Pre-Opening",
      "Outsourced Sales & Marketing",
      "Revenue Management",
    ],
    featuredImg: "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2FNK209674-Xi8iSitpSMDWrufTOs4qm6v2Opvddb.jpg&w=750&q=75",
    images: [
      "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2FNK209674-Xi8iSitpSMDWrufTOs4qm6v2Opvddb.jpg&w=750&q=75",
      "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2F3Q6A7105-fZfUA7vFkYtszP1NqFrmpc19udXGL0.jpg&w=750&q=75",
      "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2FDSC00156%2520%25D0%25BA%25D0%25BE%25D0%25BF%25D0%25B8%25D1%258F%2520copy-6NjvAfh0EnXbYLlHhCTVrgVScXzWZI.jpg&w=750&q=75",
      "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2FNK209674-Xi8iSitpSMDWrufTOs4qm6v2Opvddb.jpg&w=750&q=75",
      "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2F3Q6A7105-fZfUA7vFkYtszP1NqFrmpc19udXGL0.jpg&w=750&q=75",
    ],
  },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const [featured, ...rest] = project.images;
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <main>

      {/* ── HEADER ── */}
      <section className="bg-white border-b border-slate-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Back */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-primary transition-colors duration-200 mb-10 group"
          >
            <svg className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              {/* Badges */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-tertiary border border-tertiary/30 bg-tertiary/5 px-3 py-1 rounded-full">
                  {project.type}
                </span>
                <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                  project.status === "ongoing"
                    ? "bg-blue-50 text-blue-600 border border-blue-100"
                    : "bg-green-50 text-green-600 border border-green-100"
                }`}>
                  {project.status}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.1]">
                {project.title}
              </h1>
            </div>

            {/* Meta + services */}
            <div className="space-y-6 lg:pb-2">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-slate-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-slate-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {project.year}
                </div>
              </div>

              {/* Services */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                  Services Provided
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((svc) => (
                    <Link
                      key={svc}
                      href="/services"
                      className="text-xs font-semibold text-secondary border border-secondary/30 bg-secondary/5 px-3 py-1.5 rounded-full hover:bg-secondary hover:text-white transition-colors duration-200"
                    >
                      {svc}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE GRID ── */}
      <section className="bg-slate-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Featured image */}
          <div className="rounded-2xl overflow-hidden aspect-[16/8] mb-3">
            <img
              src={featured}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Smaller grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {rest.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-square">
                <img
                  src={img}
                  alt={`${project.title} ${i + 2}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── RELATED PROJECTS ── */}
      {related.length > 0 && (
        <section className="bg-white py-16 lg:py-20 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-lg font-bold text-slate-900 mb-8">Other Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={p.featuredImg}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-tertiary border border-tertiary/30 bg-tertiary/5 px-2.5 py-1 rounded-full">
                        {p.type}
                      </span>
                      <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        p.status === "ongoing"
                          ? "bg-blue-50 text-blue-600 border border-blue-100"
                          : "bg-green-50 text-green-600 border border-green-100"
                      }`}>
                        {p.status}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-secondary transition-colors duration-200">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">{p.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}