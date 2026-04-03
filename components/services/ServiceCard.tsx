import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Service } from "@/app/[locale]/services/data";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const t = useTranslations("services.card");

  return (
    <section className="bg-white py-20 lg:py-28 group">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-start gap-6 mb-12">
          <span className="text-xs font-mono text-slate-300 tracking-widest mt-3 shrink-0">
            {service.number}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1] tracking-tight">
            {service.title}
          </h2>
        </div>

        <div className="w-full h-px bg-slate-100 mb-12 relative">
          <div className="absolute left-0 top-0 h-px w-24 bg-secondary" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
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

          <div>
            <p className="text-base text-slate-500 leading-relaxed mb-8">
              {service.body}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary hover:text-secondary transition-colors duration-300 group/link"
            >
              <span className="w-8 h-px bg-primary group-hover/link:w-12 group-hover/link:bg-secondary transition-all duration-300 inline-block" />
              {t("discuss")}
              <svg
                className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
