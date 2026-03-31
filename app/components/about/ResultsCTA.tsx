import Link from "next/link";

export default function ResultsCTA() {
  return (
    <section className="bg-primary/5 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-tertiary mb-5 block">
              Our Results
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary leading-tight mb-6">
              Results that prove our approach works
            </h2>
            <p className="text-base text-primary/65 leading-relaxed">
              DNT Group delivers measurable outcomes for hotel owners and investors across Georgia. We transform hospitality projects into profitable operations through strategic management and hands-on expertise.
            </p>
          </div>
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
