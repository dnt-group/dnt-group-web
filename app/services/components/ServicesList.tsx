import { services } from "../data";

type Props = {
  active: number;
  setActive: (index: number) => void;
};

export default function ServicesList({ active, setActive }: Props) {
  return (
    <div className="divide-y divide-slate-200 border-t border-slate-200">
      {services.map((service, i) => (
        <button
          key={service.number}
          onClick={() => setActive(i)}
          className={`w-full text-left group py-7 flex items-center justify-between gap-6 transition-colors duration-200 ${
            active === i
              ? "text-primary"
              : "text-slate-400 hover:text-slate-700"
          }`}
        >
          <div className="flex items-center gap-5 min-w-0">
            <span
              className={`text-xs font-bold tabular-nums shrink-0 transition-colors duration-200 ${
                active === i ? "text-tertiary" : "text-slate-300"
              }`}
            >
              {service.number}
            </span>
            <span
              className={`text-lg lg:text-xl font-bold leading-snug truncate transition-colors duration-200 ${
                active === i ? "text-primary" : ""
              }`}
            >
              {service.title}
            </span>
          </div>
          <div
            className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
              active === i
                ? "bg-primary text-white"
                : "bg-white border border-slate-200 text-slate-300 group-hover:border-slate-400 group-hover:text-slate-500"
            }`}
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
          </div>
        </button>
      ))}
    </div>
  );
}
