import type { Position } from "@/lib/sanity/career";

type CareerPositionsProps = {
  positions: Position[];
  onApply: (position: Position) => void;
};

export default function CareerPositions({ positions, onApply }: CareerPositionsProps) {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-2 block">
              Open Positions
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
              {positions.length} Roles Available
            </h2>
          </div>
        </div>

        <div className="divide-y divide-slate-200 bg-white rounded-2xl border border-slate-200 overflow-hidden">
          {positions.map((position) => (
            <div key={position.id} className="group p-6 lg:p-8 hover:bg-slate-50 transition-colors duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        position.type === "Full-time"
                          ? "bg-green-50 text-green-600 border border-green-100"
                          : "bg-blue-50 text-blue-600 border border-blue-100"
                      }`}
                    >
                      {position.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-secondary transition-colors duration-200">
                    {position.title}
                  </h3>

                  <p className="text-xs text-slate-400 flex items-center gap-1 mb-3">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {position.location}
                  </p>

                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{position.desc}</p>

                  <ul className="space-y-1">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                        <div className="w-1 h-1 rounded-full bg-secondary mt-1.5 shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end lg:items-start">
                  <button
                    onClick={() => onApply(position)}
                    className="inline-flex items-center gap-2 bg-primary hover:opacity-90 text-white text-xs font-semibold px-6 py-3 rounded-full transition-opacity duration-200 uppercase tracking-wider"
                  >
                    Apply Now
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
