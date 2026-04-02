import { services } from "../data";

type Props = {
  active: number;
  setActive: (index: number) => void;
};

export default function ServiceDetail({ active, setActive }: Props) {
  const service = services[active];

  return (
    <div className="mt-10 lg:mt-0 lg:sticky lg:top-24">
      <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-10 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-tertiary">
            {service.type}
          </span>
          <span className="text-5xl font-bold text-slate-100 leading-none select-none">
            {service.number}
          </span>
        </div>

        <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-5 leading-snug">
          {service.title}
        </h2>

        <p className="text-sm text-slate-500 leading-relaxed mb-8">
          {service.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold uppercase tracking-wide bg-slate-50 border border-slate-200 text-slate-500 px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="border-t border-slate-100 pt-7 flex items-center justify-between">
          <p className="text-xs text-slate-400">
            {active + 1} of {services.length} services
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setActive(Math.max(0, active - 1))}
              disabled={active === 0}
              className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => setActive(Math.min(services.length - 1, active + 1))}
              disabled={active === services.length - 1}
              className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
