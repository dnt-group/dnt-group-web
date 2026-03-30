import Link from "next/link";

const services = [
    {
      number: "01",
      title: "Strategic Management",
      desc: "Hands-on hotel management focused on market positioning, operational efficiency, and sustainable revenue growth.",
    },
    {
      number: "02",
      title: "Hotel Development & Planning",
      desc: "End-to-end project planning including feasibility studies, financial structuring, and strategic positioning.",
    },
    {
      number: "03",
      title: "Hotel Pre-Opening",
      desc: "Complete pre-opening support covering staffing, systems, partnerships, and operational readiness.",
    },
    {
      number: "04",
      title: "Sales & Marketing",
      desc: "Outsourced strategies to boost visibility, optimize distribution channels, and increase occupancy.",
    },
    {
      number: "05",
      title: "Revenue Management",
      desc: "Data-driven pricing, forecasting, and performance tracking to maximize profitability and RevPAR.",
    },
    {
      number: "06",
      title: "Full Hotel Management",
      desc: "Comprehensive management of daily operations, finances, staff, and guest experience.",
    },
  ];

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-12 md:mb-16">
          <p className="text-sm font-body font-semibold uppercase tracking-[0.2em] text-tertiary mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary">
            Everything your property needs to thrive
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.number}
              className="group relative bg-white border border-slate-200 rounded-xl p-8 hover:border-secondary hover:shadow-lg transition-all duration-300 cursor-default overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="block text-xs font-mono text-slate-300 tracking-widest mb-6">
                {svc.number}
              </span>
              <h3 className="text-base font-semibold text-slate-800 mb-3 group-hover:text-secondary transition-colors duration-300">
                {svc.title}
              </h3>
              <div className="w-8 h-px bg-slate-200 mb-4 group-hover:w-14 group-hover:bg-secondary transition-all duration-300" />
              <p className="text-sm text-slate-500 leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 md:mt-16 flex items-center gap-6 justify-end">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary hover:text-tertiary transition-colors duration-300"
          >
            <span className="w-10 h-px bg-primary group-hover:w-16 group-hover:bg-tertiary transition-all duration-300 inline-block" />
            View All Services
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