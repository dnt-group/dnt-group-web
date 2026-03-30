import Link from "next/link";

const projects = [
    {
        img: "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2F3Q6A7105-fZfUA7vFkYtszP1NqFrmpc19udXGL0.jpg&w=750&q=75",
        title: "Restaurant TAGHI",
        location: "Tbilisi, Georgia",
        type: "Restaurant",
    },
    {
        img: "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2FDSC00156%2520%25D0%25BA%25D0%25BE%25D0%25BF%25D0%25B8%25D1%258F%2520copy-6NjvAfh0EnXbYLlHhCTVrgVScXzWZI.jpg&w=750&q=75",
        title: "Makmani Boutique Hotel",
        location: "Tbilisi, Georgia",
        type: "Hotel",
    },
    {
        img: "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2FNK209674-Xi8iSitpSMDWrufTOs4qm6v2Opvddb.jpg&w=750&q=75",
        title: "Hotel Memoir Kazbegi",
        location: "Kazbegi, Georgia",
        type: "Hotel",
    }
];

export default function ProjectsPreview() {
    return (
        <section className="mb-30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <p className="text-sm font-body font-semibold uppercase tracking-[0.2em] text-tertiary mb-3">portfolio</p>
                    <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary">
                        Explore Our Projects
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.title} className="group">
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
                                <p className="text-sm text-muted-foreground mt-1">{project.location}</p>
                            </div>
                        </div>
                    ))}
                </div>       
                <div className="mt-12 lg:mt-16 flex items-center gap-6 justify-center">
                    <Link
                        href="/projects"
                        className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary hover:text-tertiary transition-colors duration-300"
                    >
                        <span className="w-10 h-px bg-primary group-hover:w-16 group-hover:bg-tertiary transition-all duration-300 inline-block" />
                        View All Projects
                        <svg
                            className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}