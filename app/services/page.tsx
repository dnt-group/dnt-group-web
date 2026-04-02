import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Hotel Development & Planning",
    summary: "Strategic consulting and planning for new hospitality projects.",
    body: "DNT Group provides strategic consulting and planning for new hospitality projects. We support investors and developers from the early concept stage by conducting market research, feasibility analysis, hotel positioning, financial planning, and operational strategy development. Our goal is to ensure that every project is properly structured, competitively positioned in the market, and prepared for long-term financial success.",
    tags: ["Market Research", "Feasibility Analysis", "Financial Planning", "Positioning"],
  },
  {
    number: "02",
    title: "Hotel Pre-Opening",
    summary: "Careful preparation and precise coordination for a successful launch.",
    body: "Launching a hotel requires careful preparation and precise coordination. Our team manages the entire pre-opening process, including operational planning, recruitment and staff training, system implementation, supplier partnerships, and brand positioning. We ensure that every operational aspect is prepared for a successful opening and smooth transition into full operations.",
    tags: ["Operational Planning", "Staff Training", "Brand Positioning", "System Setup"],
  },
  {
    number: "03",
    title: "Outsourced Sales & Marketing",
    summary: "Maximize hotel visibility, occupancy, and revenue through a structured sales approach.",
    body: "DNT Group offers professional outsourced sales and marketing services designed to maximize hotel visibility, occupancy, and revenue. Our services include revenue management, online distribution strategy, OTA optimization, corporate partnerships, digital marketing, and brand positioning. Through a structured sales approach and data-driven strategy, we help hotels strengthen their market presence and improve financial performance.",
    tags: ["OTA Optimization", "Digital Marketing", "Corporate Partnerships", "Distribution"],
  },
  {
    number: "04",
    title: "Revenue Management",
    summary: "Advanced strategies to maximize hotel profitability through data-driven decisions.",
    body: "DNT Group provides advanced revenue management strategies designed to maximize hotel profitability. By analyzing market demand, competitor pricing, booking trends, and seasonal fluctuations, we optimize room rates and distribution channels to achieve the highest possible revenue performance. Our approach includes dynamic pricing strategies, demand forecasting, market benchmarking, and continuous performance analysis through close monitoring of occupancy, ADR, and RevPAR.",
    tags: ["Dynamic Pricing", "Demand Forecasting", "ADR & RevPAR", "Benchmarking"],
  },
  {
    number: "05",
    title: "Full Hotel Management",
    summary: "Complete operation of the property from daily management to long-term growth.",
    body: "Our full hotel management service covers the complete operation of the property. DNT Group oversees daily operations, financial management, revenue strategy, staff leadership, guest experience, and operational efficiency. By combining professional management systems with flexible leadership, we ensure sustainable growth, improved profitability, and a strong competitive position in the hospitality market.",
    tags: ["Daily Operations", "Financial Management", "Guest Experience", "Staff Leadership"],
  },
];

export default function ServicesPage() {
  return (
    <main>

      {/* ── HERO — bold typography only ── */}
      <section className="bg-white pt-16 pb-0 lg:pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-tertiary mb-8 block">
            Services
          </span>

          {/* Massive heading */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-primary leading-[0.9] tracking-tight mb-0">
            Strategic<br />
            <span className="text-stroke">Management</span><br />
            That Drives<br />
            Results
          </h1>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-12 pt-8 border-t border-slate-100">
            <p className="text-base text-slate-500 leading-relaxed max-w-md">
              DNT Group delivers hands-on hotel management across market positioning, operational optimization, and revenue growth. From concept to full-scale operations.
            </p>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-300 shrink-0">
              {services.length} Services
            </span>
          </div>
        </div>

        <style>{`.text-stroke { -webkit-text-stroke: 3px #08213f; color: transparent; }`}</style>
      </section>

      {/* ── SERVICES ── */}
      <div className="divide-y divide-slate-100">
        {services.map((service, index) => (
          <section
            key={service.number}
            className="bg-white py-20 lg:py-28 group"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

              {/* Service number + title — full width, very large */}
              <div className="flex items-start gap-6 mb-12">
                <span className="text-xs font-mono text-slate-300 tracking-widest mt-3 shrink-0">
                  {service.number}
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1] tracking-tight">
                  {service.title}
                </h2>
              </div>

              {/* Divider accent */}
              <div className="w-full h-px bg-slate-100 mb-12 relative">
                <div className="absolute left-0 top-0 h-px w-24 bg-secondary" />
              </div>

              {/* Content — two columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                {/* Left — summary + tags */}
                <div>
                  <p className="text-xl font-semibold text-slate-700 leading-relaxed mb-8">
                    {service.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold uppercase tracking-wider text-secondary border border-secondary/30 bg-secondary/5 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — body + CTA */}
                <div>
                  <p className="text-base text-slate-500 leading-relaxed mb-8">
                    {service.body}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary hover:text-secondary transition-colors duration-300 group/link"
                  >
                    <span className="w-8 h-px bg-primary group-hover/link:w-12 group-hover/link:bg-secondary transition-all duration-300 inline-block" />
                    Discuss This Service
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── CTA ── */}
      <section className="bg-warm/5 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-tertiary mb-5 block">
              Work With Us
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-primary leading-tight mb-6 tracking-tight">
              Ready to take your property to the next level?
            </h2>
            <p className="text-base text-primary/65 leading-relaxed mb-10">
              Whether you're launching a new hotel or looking to improve an existing one, our team is ready to help.
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
                className="inline-flex items-center justify-center gap-2 border border-primary/20 hover:border-primary/50 text-primary text-sm font-semibold px-8 py-4 rounded-full transition-colors duration-200 uppercase tracking-wider"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}