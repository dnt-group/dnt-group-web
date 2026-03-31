const values = [
  {
    title: "Excellence",
    desc: "We hold ourselves to the highest standards in every aspect of hotel management, from guest experience to financial performance.",
  },
  {
    title: "Integrity",
    desc: "Transparent communication and honest partnerships form the foundation of every client relationship we build.",
  },
  {
    title: "Innovation",
    desc: "We embrace technology and fresh thinking to stay ahead of hospitality trends and deliver measurable results.",
  },
  {
    title: "People First",
    desc: "Our success stems from investing in our teams — because exceptional staff create exceptional guest experiences.",
  },
];

export default function PurposeMission() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-10 border border-slate-200">
            <div className="w-8 h-0.5 bg-secondary mb-6" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-4 block">
              Our Purpose
            </span>
            <p className="text-lg font-semibold text-slate-800 leading-relaxed">
              To ensure every hospitality project we manage achieves strong market positioning, operational excellence, and maximum performance.
            </p>
          </div>
          <div className="bg-primary rounded-2xl p-10">
            <div className="w-8 h-0.5 bg-tertiary mb-6" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40 mb-4 block">
              Our Mission
            </span>
            <p className="text-lg font-semibold text-white leading-relaxed">
              To elevate the hospitality industry through strategic management, innovative thinking, and sustainable growth — helping hotels succeed in an evolving tourism market.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-secondary hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-6 h-0.5 bg-secondary mb-4 group-hover:w-10 transition-all duration-300" />
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
                {v.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
