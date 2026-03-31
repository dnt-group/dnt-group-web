import Link from "next/link";

export default function ProjectsCTA() {
  return (
    <section className="bg-warm/5 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-tertiary mb-5 block">
            Work With Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary leading-tight mb-6">
            Have a hospitality project in mind?
          </h2>
          <p className="text-base text-primary/65 leading-relaxed mb-10">
            Whether you're developing a new property or optimizing an existing
            one, DNT Group is ready to help you achieve outstanding results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-tertiary hover:opacity-90 text-white text-sm font-semibold px-8 py-4 rounded-full transition-opacity duration-200 uppercase tracking-wider"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-primary/20 hover:border-primary/50 text-primary text-sm font-semibold px-8 py-4 rounded-full transition-colors duration-200 uppercase tracking-wider"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
