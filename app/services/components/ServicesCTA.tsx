import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-tertiary mb-5 block">
            Work With Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
            Ready to elevate your property?
          </h2>
          <p className="text-base text-white/50 leading-relaxed mb-10">
            Whether you're launching a new hotel or optimizing an existing one,
            our team is ready to deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-tertiary hover:opacity-90 text-white text-sm font-semibold px-8 py-4 rounded-full transition-opacity duration-200 uppercase tracking-wider"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white text-sm font-semibold px-8 py-4 rounded-full transition-colors duration-200 uppercase tracking-wider"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
