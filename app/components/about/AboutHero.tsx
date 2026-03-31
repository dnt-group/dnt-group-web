const stats = [
  { value: "20+", label: "Properties Managed" },
  { value: "30%", label: "Revenue Growth" },
  { value: "95%", label: "Client Retention" },
  { value: "10+", label: "Years of Experience" },
];

export default function AboutHero() {
  return (
    <section className="bg-white border-b border-slate-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-tertiary mb-5 block">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] max-w-4xl">
            A Professional Hotel Management Company Built on Expertise
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-4">
            <p className="text-base text-slate-500 leading-relaxed">
              DNT Group is a professional hotel management company specializing in the successful operation and development of small, medium, and large hospitality projects. Our team brings together experienced industry professionals, hotel owners, and investors with deep knowledge of the hospitality market.
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              By partnering with DNT Group, hotel owners gain strategic guidance, efficient resource management, and proven methods to increase revenue and profitability.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-base text-slate-500 leading-relaxed">
              From early-stage concept development to full operational management, we provide clear direction, structured planning, and hands-on leadership to ensure every project reaches its full potential.
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              Our expertise includes market positioning, operational optimization, sales growth, and performance improvement — helping hotels strengthen their competitive position and maximize financial results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 mt-16 rounded-xl overflow-hidden">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white px-8 py-7 text-center">
              <span className="block text-3xl lg:text-4xl font-bold text-secondary mb-1">
                {stat.value}
              </span>
              <span className="block text-xs uppercase tracking-widest text-slate-400 font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
